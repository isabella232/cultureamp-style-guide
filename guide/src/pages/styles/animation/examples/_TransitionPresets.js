import React from 'react';
import Grid from '../components/_Grid';
import TransitionDrop from '../components/_TransitionDrop';
import './../ca-animation/ca-animation.scss';

class TransitionPresets extends React.PureComponent {
  render() {
    return (
      <Grid>
        <TransitionDrop name="fade" color="#45AD8F" />
        <TransitionDrop name="slide" color="#1B7688" />
        <TransitionDrop name="zoom" color="#253C64" />
        <TransitionDrop name="spin" color="#727193" />
      </Grid>
    );
  }
}

export default TransitionPresets;
