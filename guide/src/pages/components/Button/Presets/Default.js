// @flow
import * as React from 'react';
import Button from 'cultureamp-style-guide/components/Button';
import Text from 'cultureamp-style-guide/components/Text';

class DefaultButtonDemo extends React.Component<{}, { count: number }> {
  state = { count: 0 };
  render() {
    return (
      <div>
        <Text tag="p">Clicked {this.state.count} times</Text>
      </div>
    );
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }
}

export default DefaultButtonDemo;
