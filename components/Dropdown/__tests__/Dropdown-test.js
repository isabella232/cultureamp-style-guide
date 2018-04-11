jest.unmock('../Dropdown');

import React from 'react';
import shallowRender from 'ca-test-utils/shallowRender';
import * as ShallowTestUtils from 'react-shallow-testutils';
import Dropdown from '../Dropdown';
import DropdownMenu from '../DropdownMenu';
import Icon from 'cultureamp-style-guide/components/Icon/Icon';
import dropdownIcon from 'cultureamp-style-guide/icons/ellipsis.svg';

describe('Dropdown', () => {
  let rendered;

  let status;
  let closedDate;
  let launchDate;
  let links;
  let actions;

  describe('by default', () => {
    beforeEach(() => {
      rendered = shallowRender(<Dropdown />);
    });

    it('renders the dropdown icon', () => {
      expect(rendered).toContainReactNodeInTreeLike(
        <Icon icon={dropdownIcon} />
      );
    });

    it('dropdown menu is not visible', () => {
      const dropdownMenu = ShallowTestUtils.findAllWithType(
        rendered,
        DropdownMenu
      );
      expect(dropdownMenu.length).toEqual(0);
    });
  });

  describe('when menuVisible is passed in as props and is true', () => {
    beforeEach(() => {
      rendered = shallowRender(<Dropdown menuVisible={true} />);
    });

    it('renders the dropdown menu', () => {
      expect(rendered).toContainReactNodeInTreeLike(<DropdownMenu />);
    });

    it("renders the menu list and it's children as expected", () => {
      expect(rendered).toContainReactNodeInTreeLike(<DropdownMenu />);
    });
  });
});
