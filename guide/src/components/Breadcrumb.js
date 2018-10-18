import React from 'react';
import PropTypes from 'prop-types';
import { withPrefix } from 'gatsby-link';
import { Link } from './Link.js';
import styles from './Breadcrumb.module.scss';

const Breadcrumb = ({}, context) => {
  const prefix = withPrefix('/'),
    path = context.router.route.location.pathname.substr(prefix.length),
    parts = path.split('/');

  parts.unshift('/');

  let href = '';
  const links = parts.map(function(part, index) {
    const title = getPageTitle(part);
    if (index < parts.length - 1) {
      href = part != '/' ? `${href}/${part}` : '';
      return (
        <Link to={href} key={part + index}>
          {title}
        </Link>
      );
    }
    return <span key={part}>{title}</span>;
  });

  return (
    <nav className={styles.breadcrumb}>
      <span className={styles.text}>{links}</span>
    </nav>
  );
};
Breadcrumb.contextTypes = {
  router: PropTypes.object.isRequired,
};

function capitaliseWord(word) {
  return word.charAt(0).toUpperCase() + word.substr(1);
}

function getPageTitle(part) {
  if (part == '/') {
    return 'Kaizen';
  }

  return part
    .split('-')
    .map(capitaliseWord)
    .join(' ');
}

export default Breadcrumb;
