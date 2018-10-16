import React from 'react';
import Grid from '../components/_Grid';
import AnimationDrop from '../components/_AnimationDrop';
import './../ca-animation/ca-animation.scss';

class AnimationPresets extends React.PureComponent {
  render() {
    return (
      <Grid>
        <AnimationDrop name="wiggle" color="#F3786D" />
        <AnimationDrop name="shake" color="#FFCE1E" />
      </Grid>
    );
  }
}

export default AnimationPresets;
