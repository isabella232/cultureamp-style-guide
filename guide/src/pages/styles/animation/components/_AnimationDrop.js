import React from 'react';
import classnames from 'classnames';
import Dropdown from 'cultureamp-style-guide/components/Dropdown';
import {
  MenuList,
  MenuHeader,
  MenuItem,
  MenuSeparator,
} from 'cultureamp-style-guide/components/MenuList';
import Drop from './_Drop';
import Text from 'cultureamp-style-guide/components/Text';

class AnimationDrop extends React.PureComponent {
  state = {
    isAnimating: false,
    duration: 400,
    preset: 'slow',
  };
  presets = [
    { preset: 'immediate', duration: 100 },
    { preset: 'fast', duration: 300 },
    { preset: 'slow', duration: 400 },
    { preset: 'deliberate', duration: 700 },
  ];

  playAnimation = () => {
    const { duration } = this.state;

    this.setState({ isAnimating: true }, () => {
      setTimeout(() => this.setState({ isAnimating: false }), duration);
    });
  };

  getPresetMenu = () => {
    const { duration, preset } = this.state;

    return (
      <Dropdown label={`${preset} (${duration}ms)`} controlAction>
        <MenuList>
          <MenuHeader title="Duration Presets" />
          {this.presets.map(item => (
            <MenuItem
              key={item.preset}
              action={() =>
                this.setState(
                  { preset: item.preset, duration: item.duration },
                  this.playAnimation
                )
              }
              active={item.preset === preset}
            >
              {item.preset}
            </MenuItem>
          ))}
        </MenuList>
      </Dropdown>
    );
  };

  render() {
    const { color = '#333', render, name } = this.props;
    const { isAnimating, preset } = this.state;

    const classes = classnames(`ca-duration-${preset}`, {
      [`ca-animation-${name}`]: isAnimating,
    });

    return (
      <Drop onClick={this.playAnimation} color={color} classes={classes}>
        <Text tag="div" style="label">
          {name}
        </Text>
        <div>{this.getPresetMenu()}</div>
      </Drop>
    );
  }
}

export default AnimationDrop;
