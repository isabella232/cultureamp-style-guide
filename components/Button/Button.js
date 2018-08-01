// @flow
import * as React from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';
import Icon from '../Icon/Icon.js';

type IconButtonPosition = 'start' | 'end';

type IconButton = {
  glyph: string,
  position?: IconButtonPosition,
  noLabel?: boolean,
};

type Props = {|
  label: string,
  icon?: IconButton,
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
|};

Button.defaultProps = {
  form: false,
  primary: false,
  secondary: false,
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
  const { icon, disabled, onClick } = props;
  const label = icon && icon.noLabel ? props.label : undefined;

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
    [styles.iconNoLabel]: props.icon && props.icon.noLabel,
    [styles.reverseColorLapis]: props.reverseColor === 'lapis',
    [styles.reverseColorOcean]: props.reverseColor === 'ocean',
    [styles.reverseColorPeach]: props.reverseColor === 'peach',
    [styles.reverseColorSeedling]: props.reverseColor === 'seedling',
    [styles.reverseColorWisteria]: props.reverseColor === 'wisteria',
    [styles.reverseColorYuzu]: props.reverseColor === 'yuzu',
  });
}

function renderContent(props: Props) {
  const { icon, label } = props;
  return (
    <span className={styles.content}>
      {(icon && icon.position !== 'end') && renderIcon(icon)}
      {(!icon || !icon.noLabel) &&
        <span className={styles.label}>{label}</span>}
      {(icon && icon.position === 'end') && renderIcon(icon)}
    </span>
  );
}

function renderIcon(icon: IconButton) {
  return <Icon icon={icon.glyph} role="presentation" />;
}
