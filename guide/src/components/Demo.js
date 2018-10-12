import React from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import Text from 'cultureamp-style-guide/components/Text';
import Button from 'cultureamp-style-guide/components/Button';
import classNames from 'classnames';
import Code from './Code';
import styles from './Demo.module.scss';

const MIN_CANVAS_WIDTH = 240;

const SMALL = Symbol('small');
const MEDIUM = Symbol('medium');
const LARGE = Symbol('large');
const RANDOM = Symbol('random');
const FULL = Symbol('full');
const REACT = Symbol('react');
const ELM = Symbol('elm');

export default class Demo extends React.Component {
  state = {
    selectedPreset: 0,
    assignedCanvasWidth: null,
    actualCanvasDimensions: {
      width: null,
      height: null,
    },
    showGridOverlay: false,
    darkBackground: false,
    platform: REACT,
  };

  render() {
    return (
      <div className={styles.root}>
        <p className={styles.p}>
          {this.props.elm
            ? 'Available for both Elm and React.'
            : 'Currently available for React.'}
        </p>

        {this.renderPresetList()}
        {this.renderCanvas()}

        <div className={styles.controls}>{this.renderSizePresets()}</div>
        <div className={styles.controls}>
          {this.renderOptions()}
          {this.renderCanvasDimensions()}
        </div>
        {this.renderReactCode()}
      </div>
    );
  }

  renderPresetList() {
    const { presets } = this.props;
    const { selectedPreset } = this.state;

    return (
      <div className={styles.selectPreset}>
        <select onChange={this.onSelectPreset} value={selectedPreset}>
          {presets.map((preset, index) => (
            <option key={index} value={index}>
              {preset.name}
            </option>
          ))}
        </select>
      </div>
    );
  }

  renderCanvas() {
    return (
      <div className={styles.frame} ref={div => (this.frame = div)}>
        <div
          className={classNames(styles.canvas, {
            [styles.gridOverlay]: this.state.showGridOverlay,
            [styles.darkBackground]: this.state.darkBackground,
          })}
          style={{ width: this.state.assignedCanvasWidth }}
          ref={div => (this.canvas = div)}
        >
          {this.renderComponent()}
        </div>
      </div>
    );
  }

  renderComponent() {
    return {
      [ELM]: presetComponent => (
        <ElmWithRefreshingProps
          src={this.props.elm}
          flags={this.convertNodeToFlags(presetComponent)}
          ports={this.elmPortsFromProps(presetComponent.props)}
        />
      ),
      [REACT]: presetComponent => presetComponent,
    }[this.state.platform](this.selectedPreset().node);
  }

  convertNodeToFlags(node) {
    if (!node || typeof node !== 'object') {
      return node;
    }

    return {
      props: this.convertPropsToFlags(node.props),
      type: node.type.displayName || node.type,
    };
  }

  convertPropsToFlags(props) {
    return Object.keys(props).reduce((flags, key) => {
      let value = props[key];

      if (typeof value === 'function') {
        // All callback functions are handled by ports.
        return flags;
      } else if (key === 'children') {
        value = Array.isArray(value)
          ? value.map(child => this.convertNodeToFlags(child))
          : this.convertNodeToFlags(value);
      } else if (value && value.constructor.name === 'BrowserSpriteSymbol') {
        // Only pass through the necessary data, otherwise Elm will choke on the SVG `<symbol>` node.
        value = { id: value.id, viewBox: value.viewBox };
      }

      return { ...flags, [key]: value };
    }, {});
  }

  elmPortsFromProps(props) {
    return (ports = {}) => {
      const listeners = Object.keys(props).reduce(
        (listeners, key) =>
          typeof props[key] === 'function'
            ? Object.assign(listeners, { [key]: props[key] })
            : listeners,
        {}
      );

      Object.keys(listeners).forEach(key => {
        if (ports[key]) ports[key].subscribe(listeners[key]);
        else console.warn(`No Elm port found for function prop '${key}'`);
      });
    };
  }

  selectedPreset() {
    return this.props.presets[this.state.selectedPreset];
  }

  renderSizePresets() {
    return (
      <div>
        <Button label="Full" onClick={this.onClickResizeTo(FULL)} />
        <Button label="Random" onClick={this.onClickResizeTo(RANDOM)} />
        <Button label="Large" onClick={this.onClickResizeTo(LARGE)} />
        <Button label="Medium" onClick={this.onClickResizeTo(MEDIUM)} />
        <Button label="Small" onClick={this.onClickResizeTo(SMALL)} />
      </div>
    );
  }

  renderCanvasDimensions() {
    const { width, height } = this.state.actualCanvasDimensions;

    return (
      width &&
      height && (
        <Text tag="p">
          <strong>{width}px</strong>
          {' × '}
          <strong>{height}px</strong>
          {' viewport'}
        </Text>
      )
    );
  }

  renderOptions() {
    return (
      <div className={styles.renderOptions}>
        <label>
          <input
            type="checkbox"
            onChange={this.onChangeGridOverlay}
            checked={this.state.showGridOverlay}
          />{' '}
          Grid overlay
        </label>
        <label>
          <input
            type="checkbox"
            onChange={this.onChangeDarkBackground}
            checked={this.state.darkBackground}
          />{' '}
          Dark BG
        </label>
        {this.props.elm && (
          <label>
            <input
              type="checkbox"
              onChange={this.onChangeElm}
              checked={this.state.platform === ELM}
            />{' '}
            Elm
          </label>
        )}
      </div>
    );
  }

  renderReactCode() {
    let jsxCode = reactElementToJSXString(this.selectedPreset().node, {
      showDefaultProps: false,
      sortProps: false,
    });
    jsxCode = jsxCode.replace(
      /icon={<symbol (.*)<\/symbol>}/g,
      'icon={importedSvgIcon}'
    );
    jsxCode = jsxCode.replace(/function noRefCheck\(\) {}/g, 'function () {})');
    return (
      <div>
        <Text tag="h3">Code for this example</Text>
        <Code>{jsxCode}</Code>
      </div>
    );
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onChangeGridOverlay = e => {
    const showGridOverlay = e.target.checked;
    this.setState({ showGridOverlay });
  };

  onChangeDarkBackground = e => {
    const darkBackground = e.target.checked;
    this.setState({ darkBackground });
  };

  onChangeElm = e => {
    const elm = e.target.checked;
    this.setState({ platform: elm ? ELM : REACT });
  };

  onSelectPreset = e => {
    const selectedPreset = parseInt(e.target.value);
    this.setState({
      ...this.state,
      selectedPreset,
      darkBackground:
        this.props.presets[selectedPreset].darkBackground === true,
    });
  };

  onClickResizeTo(size) {
    return e => this.resizeToSize(size);
  }

  resizeToSize(size) {
    switch (size) {
      case FULL:
        this.resizeTo();
        break;
      case RANDOM:
        this.resizeTo(randomBetween(MIN_CANVAS_WIDTH, this.maxCanvasWidth()));
        break;
      case LARGE:
        this.resizeTo(randomBetween(800, 1200));
        break;
      case MEDIUM:
        this.resizeTo(randomBetween(500, 800));
        break;
      case SMALL:
        this.resizeTo(randomBetween(MIN_CANVAS_WIDTH, 500));
        break;
    }
  }

  resizeTo(assignedCanvasWidth = null) {
    assignedCanvasWidth =
      assignedCanvasWidth &&
      Math.min(assignedCanvasWidth, this.maxCanvasWidth());

    if (this.state.assignedCanvasWidth === null && assignedCanvasWidth) {
      // prepare for CSS transition from width: auto
      this.setAssignedCanvasWidth(this.maxCanvasWidth());
    }

    window.requestAnimationFrame(() => {
      this.setAssignedCanvasWidth(assignedCanvasWidth);
    });
  }

  setAssignedCanvasWidth(assignedCanvasWidth) {
    this.setState({ ...this.state, assignedCanvasWidth });
    this.onResize();
  }

  maxCanvasWidth() {
    return this.frame.clientWidth;
  }

  onResize = () => {
    if (this.resizing) return;

    this.resizing = true;
    window.requestAnimationFrame(this.onResizeFrame);
  };

  onResizeFrame = () => {
    if (this.isResizeComplete()) {
      this.resizing = false;
      return;
    }

    const { clientWidth, clientHeight } = this.canvas;
    this.setState({
      ...this.state,
      actualCanvasDimensions: {
        width: clientWidth,
        height: clientHeight,
      },
    });

    window.requestAnimationFrame(this.onResizeFrame);
  };

  isResizeComplete() {
    const { clientWidth, clientHeight } = this.canvas;
    const {
      assignedCanvasWidth,
      actualCanvasDimensions: { width: canvasWidth, height: canvasHeight },
    } = this.state;

    return (
      clientWidth == canvasWidth &&
      clientHeight == canvasHeight &&
      (!assignedCanvasWidth || clientWidth == assignedCanvasWidth)
    );
  }
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// We are not using react-elm-components because they do not update the Elm app when props change.
class ElmWithRefreshingProps extends React.Component {
  render() {
    return <div ref={node => (this.node = node)} />;
  }

  componentDidMount() {
    this.mountElm();
  }

  componentDidUpdate(prevProps) {
    if (JSON.stringify(prevProps) !== JSON.stringify(this.props)) {
      this.mountElm();
    }
  }

  mountElm() {
    this.node.innerHTML = '';
    const app = this.props.src.embed(this.node, this.props.flags);

    if (typeof this.props.ports !== 'undefined') {
      this.props.ports(app.ports);
    }
  }
}
