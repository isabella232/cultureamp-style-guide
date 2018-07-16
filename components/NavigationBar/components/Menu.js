// @flow
import * as React from 'react';

import styles from './Menu.module.scss';
import Tooltip from './Tooltip.js';

type MenuItem = {
  label: string,
  link: string,
  data?: { [key: string]: string },
};

type Props = {|
  children?: React.Element<any>,
  header?: React.Element<any>,
  tooltip: string,
  hideTooltip: boolean,
  items: Array<MenuItem>,
  onMenuChange?: (open: boolean) => void,
  automationId?: string,
|};

type State = {|
  open: boolean,
|};

export default class Menu extends React.Component<Props, State> {
  root: ?HTMLElement;

  static displayName = 'Menu';

  static defaultProps = {
    items: [],
    hideTooltip: false,
  };

  state = { open: false };

  render() {
    const { children, tooltip, hideTooltip, automationId } = this.props;

    return (
      <nav className={styles.root} ref={root => (this.root = root)}>
        <Tooltip
          tooltip={tooltip}
          hideTooltip={this.state.open || hideTooltip}
          tabIndex={null} // button inside takes focus instead
        >
          <button
            className={styles.button}
            onClick={this.toggle}
            aria-expanded={this.state.open}
            data-automation-id={automationId}
            onMouseDown={e => e.preventDefault()}
          >
            {children}
          </button>
        </Tooltip>
        {this.state.open && this.renderMenu()}
      </nav>
    );
  }

  toggle = (e: SyntheticEvent<> | MouseEvent) => {
    const open = !this.state.open;
    this.setState({ open });
    if (this.props.onMenuChange) this.props.onMenuChange(open);
  };

  renderMenu() {
    const { header, items } = this.props;

    return (
      <div className={styles.menu}>
        <div>
          {header}
          {items.map(this.renderMenuItem)}
        </div>
      </div>
    );
  }

  renderMenuItem(item: MenuItem, index: number) {
    const { label, link, data = {} } = item;

    const dataAttributes = {};
    Object.keys(data).forEach(key => {
      dataAttributes[`data-${key}`] = data[key];
    });

    return (
      <a
        key={index}
        href={link}
        className={styles.menuItem}
        {...dataAttributes}
      >
        {label}
      </a>
    );
  }

  componentDidMount() {
    document.addEventListener('click', this.clickDocument);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.clickDocument);
  }

  clickDocument = (e: MouseEvent) => {
    // We can't just stopPropagation of click events in the menu, because a
    // click in this menu may also need to dismiss another open menu.
    if (
      this.state.open &&
      this.root &&
      !(e.target instanceof Node && this.root.contains(e.target))
    ) {
      this.toggle(e);
    }
  };
}
