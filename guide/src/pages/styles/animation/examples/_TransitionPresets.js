import React from 'react';
import Grid from '../components/_Grid';
import TransitionDrop from '../components/_TransitionDrop';
import 'cultureamp-style-guide/styles/animation.scss';
import './_AnimationExamples.scss';

class TransitionPresets extends React.PureComponent {
  render() {
    return (
      <Grid>
        <TransitionDrop name="fade" color="#45AD8F" />
        <TransitionDrop name="slide-fade" color="#1B7688" />
        <TransitionDrop name="scale-fade" color="#253C64" />
      </Grid>
    );
  }
}

export default TransitionPresets;
