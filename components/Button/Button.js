// @flow
import * as React from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';
import Icon from '../Icon/Icon.js';
import type { SvgAsset } from '../Icon/Icon.js';

type IconPosition = 'start' | 'end';

type IconOff = {
  icon: void,
  iconPosition: void,
  noLabel: void,
};

type IconOnly = {
  icon: SvgAsset,
  iconPosition: IconPosition,
  noLabel: void,
};

type IconNoLabel = {
  icon: SvgAsset,
  iconPosition: void,
  noLabel: true,
};

type ButtonCore = {
  label: string,
  primary: boolean,
  secondary: boolean,
  destructive: boolean,
  disabled: boolean,
  form: boolean,
  reversed: boolean,
  reverseColor?: 'lapis' | 'ocean' | 'peach' | 'seedling' | 'wisteria' | 'yuzu',
  onClick?: MouseEvent => void,
  href?: string,
  automationId?: string,
};

type Props =
  | (ButtonCore & IconOff)
  | (ButtonCore & IconWithLabel)
  | (ButtonCore & IconNoLabel);

Button.defaultProps = {
  form: false,
  primary: false,
  secondary: false,
  destructive: false,
  disabled: false,
  reversed: false,
  icon: undefined,
  iconPosition: undefined,
  noLabel: undefined,
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
  const label = props.icon && props.noLabel ? props.label : undefined;

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
      title={label}
      aria-label={label}
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
    (props.secondary && styles.secondary);

  return classNames(styles.button, variantClass, {
    [styles.form]: props.form,
    [styles.reversed]: props.reversed,
    [styles.iconNoLabel]: props.icon && props.noLabel,
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
      {props.icon && props.iconPosition !== 'end' && renderIcon(props.icon)}
      {(!props.icon || !props.noLabel) && (
        <span className={styles.label}>{props.label}</span>
      )}
      {props.icon && props.iconPosition === 'end' && renderIcon(props.icon)}
    </span>
  );
}

function renderIcon(icon: SvgAsset) {
  return <Icon icon={icon} role="presentation" />;
}
