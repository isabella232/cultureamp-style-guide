// @flow
import * as React from 'react';
import styles from './Text.module.scss';
import classNames from 'classnames';

type TextProps = {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'label',
  style:
    | 'default-style'
    | 'page-title'
    | 'title'
    | 'display'
    | 'heading'
    | 'paragraph'
    | 'lede'
    | 'body'
    | 'body-bold'
    | 'small'
    | 'small-bold'
    | 'notification'
    | 'label'
    | 'control-action'
    | 'button',
  inheritBaseline: boolean,
  inline: boolean,
  children: React.Node,
};

const Text = (props: TextProps) => {
  const Tag = props.tag;
  return (
    <Tag
      className={classNames(styles[props.style], {
        [styles.inheritBaseline]: props.inheritBaseline,
        [styles.inline]: props.inline,
      })}
    >
      {props.children}
    </Tag>
  );
};

Text.defaultProps = {
  style: 'default-style',
  inheritBaseline: false,
  inline: false,
};

Text.displayName = 'Text';

export default Text;
