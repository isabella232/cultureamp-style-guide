// @flow
import * as React from 'react';
import SyntaxHighlighter, {
  registerLanguage,
} from 'react-syntax-highlighter/prism-light';
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
import styles from './Code.styles.js';

registerLanguage('jsx', jsx);

class Code extends React.Component<{ children: React.Node }> {
  render() {
    return (
      <SyntaxHighlighter language="jsx" style={styles}>
        {this.props.children}
      </SyntaxHighlighter>
    );
  }
}

export default Code;
