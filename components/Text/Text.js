// @flow
import * as React from 'react';
import classNames from 'classnames';
import styles from './Text.scss';

type TextProps = {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  style?: 'page-title' | 'title' | 'display' | 'heading',
  className?: string,
  children: React.Node,
};

const Heading = (props: HeadingProps) => {
  const { tag: Tag, className } = props;
  let style = props.style;
  if (!style) {
    if (Tag == 'h1') {
      style = 'pageTitle';
    } else if (Tag == 'h2') {
      style = 'title';
    } else if (Tag == 'h3') {
      style = 'display';
    } else {
      style = 'heading';
    }
  }
  return (
    <Tag className={classNames(styles[style], className)}>{props.children}</Tag>
  );
};

export default Text;
