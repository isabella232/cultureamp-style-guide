import React from 'react';
import Grid from '../components/_Grid';
import AnimationDrop from '../components/_AnimationDrop';
import 'cultureamp-style-guide/styles/animation.scss';

class AnimationPresets extends React.PureComponent {
  render() {
    return (
      <Grid>
        <AnimationDrop name="pop" color="#F3786D" />
        <AnimationDrop name="pulsate" color="#FFCE1E" />
      </Grid>
    );
  }
}

export default AnimationPresets;
