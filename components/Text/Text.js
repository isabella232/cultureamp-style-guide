// @flow
import * as React from 'react';
import styles from './Text.module.scss';
import classNames from 'classnames';

type TextProps = {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div',
  style?:
    | 'page-title'
    | 'title'
    | 'display'
    | 'heading'
    | 'lede'
    | 'body'
    | 'body-bold'
    | 'small'
    | 'small-bold'
    | 'notification'
    | 'label'
    | 'control-action'
    | 'button',
  inheritBaseline?: boolean,
  children: React.Node,
};

const defaultStyles = {
  h1: 'page-title',
  h2: 'title',
  h3: 'display',
  h4: 'heading',
  h5: 'heading',
  h6: 'heading',
  p: 'body',
  div: 'body',
};

const Text = (props: TextProps) => {
  const Tag = props.tag;
  const style = props.style || defaultStyles[Tag];
  return (
    <Tag
      className={classNames(styles[style], {
        [styles.inheritBaseline]: props.inheritBaseline,
      })}
    >
      {props.children}
    </Tag>
  );
};

export default Text;
