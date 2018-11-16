// @flow
import * as React from 'react';

import styles from './Menu.module.scss';
import Tooltip from './Tooltip';
import Link from './Link';
import { TABLET_AND_UP } from '../constants';
import Media from 'react-media';
import { OffCanvas } from 'cultureamp-style-guide/components/OffCanvas';
import IconButton from 'cultureamp-style-guide/components/Button/IconButton';
import backIcon from 'cultureamp-style-guide/icons/arrow-backward.svg';

type MenuItem = {
  label: string,
  link: string,
  newWindow?: boolean,
  data?: { [key: string]: string },
};

type Props = {|
  children?: React.Element<any>,
  header?: React.Element<any>,
  items: Array<MenuItem>,
  automationId?: string,
  heading?: string,
|};

type State = {|
  open: boolean,
|};

export default class Menu extends React.Component<Props, State> {
  root: ?HTMLElement;

  static displayName = 'Menu';
  static defaultProps = {
    items: [],
  };

  state = { open: false };

  render() {
    const { children, automationId, heading } = this.props;

    return (
      <Media query={TABLET_AND_UP}>
        {matches =>
          matches ? (
            <nav className={styles.root} ref={root => (this.root = root)}>
              <button
                className={styles.button}
                onClick={this.toggle}
                aria-expanded={this.state.open}
                data-automation-id={automationId}
                onMouseDown={e => e.preventDefault()}
              >
                {children}
              </button>
              {this.state.open && this.renderMenu()}
            </nav>
          ) : (
            <React.Fragment>
              <Link
                text={heading ? heading : 'Menu'}
                href="#"
                onClick={this.toggle}
                hasMenu
              />
              {this.renderOffCanvas(this.state.open)}
            </React.Fragment>
          )
        }
      </Media>
    );
  }

  toggle = (e: SyntheticEvent<> | MouseEvent) => {
    const open = !this.state.open;
    this.setState({ open });
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

  renderOffCanvas(isOpen: boolean) {
    const { items, heading } = this.props;

    return (
      <OffCanvas
        links={items.map(this.renderOffCanvasMenuItem)}
        menuVisible={isOpen}
        heading={heading ? heading : 'Menu'}
        headerComponent={this.renderBackButton()}
        toggleMenu={this.toggle}
      />
    );
  }

  renderBackButton() {
    return (
      <IconButton label="Back" icon={backIcon} onClick={this.toggle} reversed />
    );
  }

  renderOffCanvasMenuItem = (item: MenuItem, index: number) => {
    return <Link key={index} text={item.label} href={item.link} />;
  };

  renderMenuItem = (item: MenuItem, index: number) => {
    const { newWindow } = item;

    if (newWindow) {
      return (
        <div key={index}>
          <Tooltip
            hideTooltip={false}
            tabIndex={null} // link inside takes focus instead
            tooltip="Opens in a new tab"
          >
            {this.renderMenuItemLink(item)}
          </Tooltip>
        </div>
      );
    }

    return (
      <React.Fragment key={index}>
        {this.renderMenuItemLink(item)}
      </React.Fragment>
    );
  };

  renderMenuItemLink = (item: MenuItem) => {
    const { label, link, newWindow, data = {} } = item;

    const dataAttributes = {};
    Object.keys(data).forEach(key => {
      dataAttributes[`data-${key}`] = data[key];
    });

    return (
      <a
        href={link}
        className={styles.menuItem}
        target={newWindow ? '_blank' : '_self'}
        {...dataAttributes}
      >
        {label}
      </a>
    );
  };

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
