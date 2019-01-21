// @flow
import * as React from 'react';
import classNames from 'classnames';
import styles from './GenericButton.module.scss';
import Icon from '../../Icon/Icon.js';
import type { SvgAsset } from '../../Icon/Icon.js';

type GenericProps = {|
  label: string,
  destructive: boolean,
  disabled: boolean,
  form: boolean,
  reversed: boolean,
  fullWidth?: boolean,
  icon?: SvgAsset,
  onClick?: MouseEvent => any,
  href?: string,
  type?: 'submit' | 'reset',
  automationId?: string,
|};

type LabelProps = {|
  iconPosition: 'start' | 'end',
  primary: boolean,
  secondary: boolean,
  reverseColor?: 'lapis' | 'ocean' | 'peach' | 'seedling' | 'wisteria' | 'yuzu',
|};

export type IconButtonProps = {|
  ...GenericProps,
|};

export type ButtonProps = {|
  ...GenericProps,
  ...LabelProps,
|};

type Props = {|
  ...ButtonProps,
  iconButton: boolean,
|};

GenericButton.defaultProps = {
  iconPosition: 'start',
  iconButton: false,
  primary: false,
  secondary: false,
};

export default function GenericButton(props: Props) {
  return (
    <span
      className={classNames(styles.container, {
        [styles.fullWidth]: props.fullWidth,
      })}
    >
      {props.href ? renderLink(props) : renderButton(props)}
    </span>
  );
}

function renderButton(props: Props) {
  const { disabled, onClick, type } = props;
  const label = props.icon && props.iconButton ? props.label : undefined;

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
      type={type}
      data-automation-id={props.automationId}
      title={label}
      aria-label={label}
    >
      {renderContent(props)}
    </button>
  );
}

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
  if (props.reversed && !props.reverseColor) {
    console.warn('please provide a fallback colour for revered buttons');
  }

  const variantClass =
    (props.destructive && styles.destructive) ||
    (props.primary && styles.primary) ||
    (props.secondary && styles.secondary);

  return classNames(styles.button, variantClass, {
    [styles.form]: props.form,
    [styles.reversed]: props.reversed,
    [styles.iconButton]: props.iconButton,
    [styles.reverseColorLapis]: props.reverseColor === 'lapis',
    [styles.reverseColorOcean]: props.reverseColor === 'ocean',
    [styles.reverseColorPeach]: props.reverseColor === 'peach',
    [styles.reverseColorSeedling]: props.reverseColor === 'seedling',
    [styles.reverseColorWisteria]: props.reverseColor === 'wisteria',
    [styles.reverseColorYuzu]: props.reverseColor === 'yuzu',
    [styles.reversedIconButton]: props.iconButton && props.reversed,
  });
}

function renderContent(props: Props) {
  return (
    <span className={styles.content}>
      {props.icon && props.iconPosition !== 'end' && renderIcon(props.icon)}
      {(!props.icon || !props.iconButton) && (
        <span className={styles.label}>{props.label}</span>
      )}
      {props.icon && props.iconPosition === 'end' && renderIcon(props.icon)}
    </span>
  );
}

function renderIcon(icon: SvgAsset) {
  return (
    <span className={styles.iconWrapper}>
      <Icon icon={icon} role="presentation" />
    </span>
  );
}
