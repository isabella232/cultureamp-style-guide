import React from 'react';
import Icon from 'cultureamp-style-guide/components/Icon/Icon.js';
import chevronUp from 'cultureamp-style-guide/icons/chevron-up.svg';
import chevronDown from 'cultureamp-style-guide/icons/chevron-down.svg';
import styles from './ColorCard.module.scss';
import ColorBlock from './_ColorBlock.js';
import Palette from './_Palette.js';
import { renderContrastHeaderIcons } from './_ContrastIcon.js';

class ColorCard extends React.Component {
  state = {
    expanded: false,
  };

  render() {
    const name = this.props.name,
      colorClassName = styles[name.toLowerCase()];
    return (
      <div>
        <div className={styles.colorCard}>
          <h3>{this.renderColorTitleAndToggle()}</h3>
          {this.renderSubtitle()}
          {this.renderColorBlocks(this.state.expanded)}
        </div>
      </div>
    );
  }

  renderColorTitleAndToggle() {
    if (!this.isExpandable()) {
      return <span>{this.props.name}</span>;
    }
    const toggleIcon = this.state.expanded ? chevronUp : chevronDown,
      toggleTitle = this.state.expanded ? 'Collapse Color' : 'Expand Color';
    return (
      <button
        className={styles.cardToggleButton}
        onClick={() => this.toggleOpen()}
        onMouseDown={e => e.preventDefault()}
      >
        <span className={styles.toggleButtonLabel}>{this.props.name}</span>
        <span className={styles.toggleIconWrapper}>
          <Icon icon={toggleIcon} role="img" title={toggleTitle} />
        </span>
      </button>
    );
  }

  isExpandable() {
    return this.props.name !== 'Stone';
  }

  toggleOpen() {
    this.setState({ expanded: !this.state.expanded });
  }

  renderSubtitle() {
    const showContrast = this.props.showAccessibility,
      title = showContrast ? 'WCAG 2.0 AA' : 'Tint & Shade',
      color = Palette[this.props.name.toLowerCase()];
    return (
      <div className={styles.subheader}>
        <h4>{title}</h4>
        {showContrast && renderContrastHeaderIcons(color)}
      </div>
    );
  }

  renderColorBlocks(showVariations) {
    const colorName = this.props.name;
    const variations =
      showVariations && this.isExpandable()
        ? [90, 70, 50, 30, 10, 0, -10, -20, -30, -40, -50]
        : [0];
    return variations.map(amount => (
      <ColorBlock
        key={amount}
        colorName={colorName}
        amount={amount}
        showContrast={this.props.showAccessibility}
      />
    ));
  }
}

export default ColorCard;
