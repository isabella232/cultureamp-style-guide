import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Icon.module.scss';
import { warn } from '../../util/error';
import { enableUniqueIds } from 'react-html-id';

const IMG = 'img';
const PRESENTATION = 'presentation';
const roles = [
  IMG, // meaningful, title should be read aloud to users who can't see it
  PRESENTATION, // decorative, should be silent to users who can't see it
];

export default class Icon extends React.Component {
  static displayName = 'Icon';

  constructor() {
    super();
    enableUniqueIds(this);
  }

  render() {
    const { icon, inheritSize, role, title, desc } = this.props;

    const classes = classNames(styles.icon, {
      [styles.inheritSize]: inheritSize,
    });

    return (
      <svg
        className={classes}
        viewBox={icon.viewBox}
        focusable="false" // Work around IE11 making all SVGs focusable. See http://simplyaccessible.com/article/7-solutions-svgs/#acc-heading-4
        {...this.accessibilityProps()}
      >
        {this.renderTitle()}
        {this.renderDesc()}
        <use xlinkHref={`#${icon.id}`} />
      </svg>
    );
  }

  accessibilityProps() {
    return {
      role: this.props.role,
      ['aria-hidden']: !this.isMeaningfulImg() || undefined,
      ['aria-labelledby']: this.labelledBy(),
    };
  }

  labelledBy() {
    if (this.isMeaningfulImg())
      return this.props.desc
        ? `${this.getUniqueId('title')} ${this.getUniqueId('desc')}` // read out title and description together if both are present
        : this.getUniqueId('title');
  }

  renderTitle() {
    if (this.isMeaningfulImg())
      return <title id={this.getUniqueId('title')}>{this.props.title}</title>;
  }

  renderDesc() {
    if (this.isMeaningfulImg() && this.props.desc)
      return <desc id={this.getUniqueId('desc')}>{desc}</desc>;
  }

  isMeaningfulImg() {
    return this.props.role === IMG;
  }

  componentWillMount() {
    if (this.isMeaningfulImg() && !this.props.title) {
      warn(`
        Icon with role "${IMG}" missing a title attribute.

        Assistive technologies that enable vision-impaired users to read web pages
        can treat images (including icons) as either decorative or meaningful. Only
        images with a role of "${IMG}" (meaningful) will be read aloud to the user.
        These images must therefore have a title attribute to provide the text that
        will be read aloud.

        Either add the missing title prop, or set this icon's role to
        "${PRESENTATION}" to indicate it is not meaningful.
      `);
    }
  }

  static propTypes = {
    icon: PropTypes.shape({
      id: PropTypes.string.isRequired,
      viewBox: PropTypes.string.isRequired,
    }).isRequired,
    inheritSize: PropTypes.bool,
    role: PropTypes.oneOf(roles),
    title: PropTypes.string,
    desc: PropTypes.string,
  };

  static defaultProps = {
    inheritSize: false,
    role: IMG,
  };
}
