// @flow
import * as React from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';
import Icon from '../Icon/Icon.js';


type IconPosition = 'start' | 'end';

type Props = {|
  label: string,
  icon?: string,
  iconPosition: IconPosition,
  primary: boolean,
  secondary: boolean,
  tertiary: boolean,
  destructive: boolean,
  disabled: boolean,
  form: boolean,
  reversed: boolean,
  reverseColor?: 'lapis' | 'ocean' | 'peach' | 'seedling' | 'wisteria' | 'yuzu',
  onClick?: MouseEvent => void,
  href?: string,
  automationId?: string,
|};

Button.defaultProps = {
  iconPosition: 'start',
  form: false,
  primary: false,
  secondary: false,
  tertiary: false,
  destructive: false,
  disabled: false,
  reversed: false,
};

export default function Button(props: Props) {
  return (
    <span className={styles.container}>
      {props.href ? renderLink(props) : renderButton(props)}
    </span>
  );
}

function renderButton(props: Props) {
  const { disabled, onClick } = props;

  return (
    <button
      disabled={disabled}
      className={buttonClass(props)}
      onClick={e => {
        if (onClick) {
          e.preventDefault();
          onClick && onClick(e);
        }
      }}
      data-automation-id={props.automationId}
      title={props.tertiary && props.label}
    >
      {renderContent(props)}
    </button>
  );
}

Button.displayName = 'Button';

function renderLink(props: Props) {
  const { href, onClick } = props;

  return (
    <a
      href={href}
      className={buttonClass(props)}
      onClick={e => {
        if (onClick) {
          e.preventDefault();
          onClick && onClick(e);
        }
      }}
      data-automation-id={props.automationId}
    >
      {renderContent(props)}
    </a>
  );
}

function buttonClass(props: Props) {
  const variantClass =
    (props.destructive && styles.destructive) ||
    (props.primary && styles.primary) ||
    (props.secondary && styles.secondary) ||
    (props.tertiary && styles.tertiary);

  return classNames(styles.button, variantClass, {
    [styles.form]: props.form,
    [styles.reversed]: props.reversed,
    [styles.reverseColorLapis]: props.reverseColor === 'lapis',
    [styles.reverseColorOcean]: props.reverseColor === 'ocean',
    [styles.reverseColorPeach]: props.reverseColor === 'peach',
    [styles.reverseColorSeedling]: props.reverseColor === 'seedling',
    [styles.reverseColorWisteria]: props.reverseColor === 'wisteria',
    [styles.reverseColorYuzu]: props.reverseColor === 'yuzu',
  });
}

function renderContent(props: Props) {
  return (
    <span className={styles.content}>
      {iconForPosition(props, 'start')}
      {!props.tertiary &&
        <span className={styles.label}>{props.label}</span>}
      {iconForPosition(props, 'end')}
    </span>
  );
}

function iconForPosition(
  { icon, iconPosition }: Props,
  position: IconPosition
) {
  if (icon && position === iconPosition) {
    return <Icon icon={icon} role="presentation" />;
  }
}
