// @flow
import * as React from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import Text from 'cultureamp-style-guide/components/Text';
import Button from 'cultureamp-style-guide/components/Button';
import classNames from 'classnames';
import Code from './Code';
import styles from './Demo.module.scss';

const MIN_CANVAS_WIDTH = 240;

type CanvasSize = 'small' | 'medium' | 'large' | 'random' | 'full';
const SMALL = 'small';
const MEDIUM = 'medium';
const LARGE = 'large';
const RANDOM = 'random';
const FULL = 'full';

type Platform = 'react' | 'elm';
const REACT = 'react';
const ELM = 'elm';

type Preset = {
  name: string,
  node: React.Node,
  darkBackground?: boolean,
};

type DemoProps = {
  presets: Array<Preset>,
  elm?: ElmApp,
};

type DemoState = {
  selectedPreset: number,
  assignedCanvasWidth: ?number,
  actualCanvasDimensions: {
    width: ?number,
    height: ?number,
  },
  showGridOverlay: boolean,
  darkBackground: boolean,
  platform: 'react' | 'elm',
};

export default class Demo extends React.Component<DemoProps, DemoState> {
  canvas: ?Element;
  frame: ?Element;
  resizing: boolean = false;

<<<<<<< HEAD
export default class Demo extends React.Component {
=======
>>>>>>> 7e4058a... Update Elm/React component loader to work with Elm 0.19
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
          { this.props.elm ?
              "Available for both Elm and React." :
              "Currently available for React." }
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
      [ELM]: (presetComponent: React.Node) => {
        const elmApp = this.props.elm;
        if (!elmApp) {
          return 'Failed to load elm demo';
        }
        return (
          <ElmComponent
            src={elmApp}
            flags={this.convertNodeToFlags(presetComponent)}
          />
        );
      },
      [REACT]: presetComponent => presetComponent,
    }[this.state.platform](this.selectedPreset().node);
  }

  convertNodeToFlags(node: any): { type: any, props: {} } {
    if (!node || typeof node !== 'object') {
      return node;
    }

    return {
      type: node.type.displayName || node.type,
      props: this.convertPropsToFlags(node.props),
    };
  }

  convertPropsToFlags(props: {}) {
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

  elmPortsFromProps(props: {}) {
    return (ports: {} = {}) => {
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

  selectedPreset(): Preset {
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
    // $FlowFixMe: reactElementToJSXString can take a React.Node, not just a React.Element
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

  onChangeGridOverlay = (e: SyntheticInputEvent<HTMLInputElement>) => {
    const showGridOverlay = e.target.checked;
    this.setState({ showGridOverlay });
  };

  onChangeDarkBackground = (e: SyntheticInputEvent<HTMLInputElement>) => {
    const darkBackground = e.target.checked;
    this.setState({ darkBackground });
  };

  onChangeElm = (e: SyntheticInputEvent<HTMLInputElement>) => {
    const elm = e.target.checked;
    this.setState({ platform: elm ? ELM : REACT });
  };

  onSelectPreset = (e: SyntheticInputEvent<HTMLSelectElement>) => {
    const selectedPreset = parseInt(e.target.value);
    this.setState({
      ...this.state,
      selectedPreset,
      darkBackground:
        this.props.presets[selectedPreset].darkBackground === true,
    });
  };

  onClickResizeTo(size: CanvasSize) {
    return () => this.resizeToSize(size);
  }

  resizeToSize(size: CanvasSize) {
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

  resizeTo(assignedCanvasWidth: ?number = null) {
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

  setAssignedCanvasWidth(assignedCanvasWidth: ?number) {
    this.setState({ ...this.state, assignedCanvasWidth });
    this.onResize();
  }

  maxCanvasWidth(): number {
    return this.frame ? this.frame.clientWidth : 0;
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

    if (!this.canvas) {
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
    if (!this.canvas) {
      return false;
    }
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

// Note: we can't use elm-react-components because we need to update flags when presets change
// (also it does not have an Elm 0.19 update)

type ElmApp = {
  init: ({ node: Element, flags?: {} }) => { ports: ({}) => void },
};

class ElmComponent extends React.Component<{ src: ElmApp, flags: {} }> {
  render() {
    return <div ref={node => this.initialize(node)} />;
  }

<<<<<<< HEAD
  mountElm() {
    this.node.innerHTML = '';
    const app = this.props.src.embed(this.node, this.props.flags);

    if (typeof this.props.ports !== 'undefined') {
      this.props.ports(app.ports);
=======
  initialize(container) {
    if (container != null) {
      // Unlike react-elm-components, which makes `shouldComponentUpdate()` return false, we allow updating the component.
      // For our style-guide demos, this means removing the existing Elm app from the DOM, and instantiating a new one.
      container.innerHTML = '';
      // Elm 0.19 doesn't place itself inside the container node, it *replaces* the container node.
      // This can cause runtime errors if the container node - which React rendered - suddenly is removed by Elm, and React goes to update or remove it, only to find it is now gone.
      // The workaround is to create an extra <div>, which React doesn't control, and allow Elm to replace that node.
      const elmPlaceholder = document.createElement('div');
      container.appendChild(elmPlaceholder);
      const app = this.props.src.init({
        node: elmPlaceholder,
        flags: this.props.flags,
      });
>>>>>>> 7e4058a... Update Elm/React component loader to work with Elm 0.19
    }
  }
}
