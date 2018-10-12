import React from 'react';
import classnames from 'classnames';
import Dropdown from 'cultureamp-style-guide/components/Dropdown';
import {
  MenuList,
  MenuHeader,
  MenuItem,
  MenuSeparator,
} from 'cultureamp-style-guide/components/MenuList';
import Card from 'components/card';
import Text from 'cultureamp-style-guide/components/Text';
import Code from '../../../components/Code';
import styles from './_AnimationDroplet.module.scss';

class AnimationDroplet extends React.PureComponent {
  state = { isAnimated: false, duration: 'slow' };

  playAnimation = () => {
    this.setState({ isAnimated: false }, () => {
      setTimeout(() => this.setState({ isAnimated: true }), 0);
    });
  };

  getDurationMenu = () => {
    const { duration } = this.state;
    const presets = ['instant', 'immediate', 'fast', 'slow', 'deliberate'];

    return (
      <Dropdown label={duration} controlAction>
        <MenuList>
          <MenuHeader title="Duration Presets" />
          {presets.map(preset => (
            <MenuItem
              key={preset}
              action={() =>
                this.setState({ duration: preset }, this.playAnimation)
              }
              active={preset === duration}
            >
              {preset}
            </MenuItem>
          ))}
        </MenuList>
      </Dropdown>
    );
  };

  getCodeSnippet = () => {
    return (
      <div>
        <Code>{`.ca-transition-${type}`}</Code>
        <Code>{`.ca-duration-${duration}`}</Code>
      </div>
    );
  };

  render() {
    const { color = '#333', render, type } = this.props;
    const { isAnimated, duration, custom } = this.state;
    const classes = classnames(`ca-duration-${duration}`, {
      [`ca-transition-${type}`]: isAnimated,
    });

    return (
      <div className={styles.droplet}>
        <Card className={styles.container}>
          <div
            onClick={this.playAnimation}
            className={classnames(classes, styles.hero)}
            style={{ background: color }}
          />
        </Card>
        <Text tag="div" style="label">
          {type}
        </Text>
        <div>{this.getDurationMenu()}</div>
      </div>
    );
  }
}

export default AnimationDroplet;
