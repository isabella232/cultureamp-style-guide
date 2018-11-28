import React from 'react';
import Grid from '../../../../components/Grid';
import AnimationDrop from '../../../../components/AnimationDrop';
import './AnimationPresetsExample.scss';

class AnimationPresetsExample extends React.PureComponent {
  render() {
    return (
      <Grid>
        <AnimationDrop name="fade-in" color="#78262F" />
        <AnimationDrop name="fade-out" color="#902E38" />
        <AnimationDrop name="pop" color="#A83541" />
        <AnimationDrop name="pulsate" color="#D84454" />
        <AnimationDrop name="scale-fade-in" color="#F04C5D" />
        <AnimationDrop name="scale-fade-out" color="#F25E6D" />
        <AnimationDrop name="slide-fade-in" color="#F5828E" />
        <AnimationDrop name="slide-fade-out" color="#F8A6AE" />
      </Grid>
    );
  }
}

export default AnimationPresetsExample;
