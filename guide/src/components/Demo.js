import React from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import Text from 'cultureamp-style-guide/components/Text';
import classNames from 'classnames';
import styles from './Demo.module.scss';

const MIN_CANVAS_WIDTH = 240;

const SMALL = Symbol('small');
const MEDIUM = Symbol('medium');
const LARGE = Symbol('large');
const RANDOM = Symbol('random');
const FULL = Symbol('full');

export default class Demo extends React.Component {
  state = {
    selectedPreset: 0,
    assignedCanvasWidth: null,
    actualCanvasDimensions: {
      width: null,
      height: null,
    },
    showGridOverlay: false,
  };

  render() {
    return (
      <div className={styles.root}>
        {this.renderPresetList()}
        {this.renderCanvas()}
        <div className={styles.controls}>
          {this.renderSizePresets()}
          {this.renderCanvasDimensions()}
          {this.renderOptions()}
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
    const presetComponent = this.selectedPreset();

    return (
      <div className={styles.frame} ref={div => (this.frame = div)}>
        <div
          className={classNames(styles.canvas, {
            [styles.gridOverlay]: this.state.showGridOverlay,
          })}
          style={{ width: this.state.assignedCanvasWidth }}
          ref={div => (this.canvas = div)}
        >
          {presetComponent}
        </div>
      </div>
    );
  }

  selectedPreset() {
    return this.props.presets[this.state.selectedPreset].node;
  }

  renderSizePresets() {
    return (
      <div className={styles.sizePresets}>
        <button onClick={this.onClickResizeTo(FULL)}>Full</button>
        <button onClick={this.onClickResizeTo(RANDOM)}>Random</button>
        <button onClick={this.onClickResizeTo(LARGE)}>Large</button>
        <button onClick={this.onClickResizeTo(MEDIUM)}>Medium</button>
        <button onClick={this.onClickResizeTo(SMALL)}>Small</button>
      </div>
    );
  }

  renderCanvasDimensions() {
    const { width, height } = this.state.actualCanvasDimensions;

    return (
      width &&
      height && (
        <div className={styles.canvasDimensions}>
          <span className={styles.dimension}>{width}px</span>
          {' × '}
          <span className={styles.dimension}>{height}px</span>
          {' viewport'}
        </div>
      )
    );
  }

  renderOptions() {
    return (
      <div className={styles.componentTypes}>
        <input type="checkbox" onChange={this.onChangeGridOverlay} /> Grid
        overlay
      </div>
    );
  }

  renderReactCode() {
    let jsxCode = reactElementToJSXString(this.selectedPreset());
    jsxCode = jsxCode.replace(
      /icon={<symbol (.*)<\/symbol>}/g,
      'icon={importedSvgIcon}'
    );
    jsxCode = jsxCode.replace(/function noRefCheck\(\) {}/g, 'function () {})');
    return (
      <div>
        <Text tag="h3">Code for this example</Text>
        <Text tag="pre">{jsxCode}</Text>
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
    this.setState({ ...this.state, showGridOverlay });
  };

  onSelectPreset = e => {
    const selectedPreset = parseInt(e.target.value);
    this.setState({ ...this.state, selectedPreset });
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
