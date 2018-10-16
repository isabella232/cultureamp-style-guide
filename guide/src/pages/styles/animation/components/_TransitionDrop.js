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

class TransitionDrop extends React.PureComponent {
  state = {
    isAnimating: false,
    direction: 'out',
    duration: 400,
    preset: 'slow',
  };
  presets = [
    { preset: 'immediate', duration: 100 },
    { preset: 'fast', duration: 300 },
    { preset: 'slow', duration: 400 },
    { preset: 'deliberate', duration: 700 },
  ];

  updateTransitionDirection = () => {
    const { direction } = this.state;
    const newTransitionDirection = direction === 'out' ? 'in' : 'out';

    this.setState({
      isAnimating: false,
      direction: newTransitionDirection,
    });
  };

  playTransition = () => {
    const { duration, preset } = this.state;

    this.setState({ isAnimating: true }, () => {
      setTimeout(this.updateTransitionDirection, duration);
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
                  this.playTransition
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
    const { isAnimating, direction, preset } = this.state;
    const state = direction === 'in' ? 'enter' : 'leave';

    const classes = classnames(
      `ca-duration-${preset}`,
      `ca-transition-${name}-${direction}`,
      `ca-${state}`,
      {
        [`ca-${state}-active`]: isAnimating,
      }
    );

    return (
      <Drop classes={classes} color={color} onClick={this.playTransition}>
        <Text tag="div" style="label">
          {name}-{direction}
        </Text>
        <div>{this.getPresetMenu()}</div>
      </Drop>
    );
  }
}

export default TransitionDrop;
