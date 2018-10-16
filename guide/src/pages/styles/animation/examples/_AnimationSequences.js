import React from 'react';
import classnames from 'classnames';
import Grid from '../components/_Grid';
import Drop from '../components/_Drop';
import Code from '../../../../components/Code';
import './_AnimationSequences.scss';

class AnimationPresets extends React.PureComponent {
  state = {
    isAnimating: false,
  };

  replay = () => {
    this.setState({ isAnimating: false }, () => {
      setTimeout(() => {
        this.setState({ isAnimating: true });
      }, 0);
    });
  };

  render() {
    const { isAnimating } = this.state;

    return (
      <React.Fragment>
        <Grid className={classnames({ ['is-animating']: isAnimating })}>
          <Drop classes="spin-1" color="#43E699" onClick={this.replay} />
          <Drop classes="spin-2" color="#7BEEB8" onClick={this.replay} />
          <Drop classes="spin-3" color="#C7F8E0" onClick={this.replay} />
        </Grid>
        <div>
          <Code>{`$duration: $deliberate, $delay: 400ms
@include mui-series {
  .spin-1 {
    @include mui-queue($deliberate, -$slow, spin);
  }
  .spin-2 {
    @include mui-queue($deliberate, -$slow, spin);
  }
  .spin-3 {
    @include mui-queue($deliberate, 0s, spin);
  }
}`}</Code>
        </div>
      </React.Fragment>
    );
  }
}

export default AnimationPresets;
