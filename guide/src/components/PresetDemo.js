// @flow
import * as React from 'react';
import Text from 'cultureamp-style-guide/components/Text';

type Preset = {
  react?: Class<React.Component<{}>>,
  elm?: { Elm: any },
};

type Props = {
  presets: { [name: string]: Preset },
};

type State = {
  preset: ?string,
  platform: 'react' | 'elm',
};

class PresetDemo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      preset: Object.keys(props.presets)[0],
      platform: 'react',
    };
  }

  render() {
    const { presets } = this.props;

    return (
      <div>
        {this.renderPresetSelect()}
        {this.renderPlatformSelect()}
        {this.renderDemo(this.state.preset, this.state.platform)}
      </div>
    );
  }

  renderPresetSelect() {
    return (
      <select onChange={e => this.setState({ preset: e.target.value })}>
        {Object.keys(this.props.presets).map(preset => (
          <option value={preset} key={preset}>
            {preset}
          </option>
        ))}
      </select>
    );
  }

  renderPlatformSelect() {
    if (!this.state.preset) {
      return;
    }
    const preset = this.props.presets[this.state.preset];
    return (
      <select onChange={e => this.setState({ platform: e.target.value })}>
        {Object.keys(preset).map(platform => (
          <option value={platform} key={platform}>
            {platform}
          </option>
        ))}
      </select>
    );
  }

  renderDemo(presetName: ?string, platform: string) {
    const preset = presetName && this.props.presets[presetName];
    if (!presetName || !preset) {
      return 'Preset not found';
    }
    if (platform === 'react') {
      if (!preset.react) {
        return 'No React version :(';
      }
      const ReactComponent: Class<React.Component<{}>> = preset.react;
      return (
        <div>
          <Text tag="h2">{presetName}</Text>
          <Text tag="h3">React</Text>
          <ReactComponent />
        </div>
      );
    }
    if (platform === 'elm') {
      if (!preset.elm) {
        return 'No elm version :(';
      }
      return (
        <article>
          <Text tag="h2">{presetName}</Text>
          <Text tag="h3">Elm</Text>
          <ElmComponent src={preset.elm} />
        </article>
      );
    }
  }
}

class ElmComponent extends React.Component<{ src: any }> {
  render() {
    return <section ref={node => this.initialize(node)} />;
  }

  initialize(node) {
    if (node != null) {
      console.log('What is node', node);
      node.innerHTML = '';
      console.log('Attempting to mount');
      const app = this.props.src.init({
        node: node,
      });
    }
  }
}

export default PresetDemo;
