import React from 'react';
import { mount } from 'enzyme';
import Dropdown from '../Dropdown';
import icon from '../../../icons/add.svg';

describe('Dropdown', () => {
  test('renders default view', () => {
    const component = mount(<Dropdown />);
    expect(component).toMatchSnapshot();
  });

  test('renders drop down with icon', () => {
    const component = mount(<Dropdown icon={icon} />);
    expect(component).toMatchSnapshot();
  });

  test('renders drop down with icon and label', () => {
    const component = mount(<Dropdown icon={icon} label="add" />);
    expect(component).toMatchSnapshot();
  });

  test('renders drop down with only label', () => {
    const component = mount(<Dropdown label="add" />);
    expect(component).toMatchSnapshot();
  });

  test('renders control action dropdown', () => {
    const component = mount(<Dropdown icon={icon} label="add" controlAction />);
    expect(component).toMatchSnapshot();
  });

  test('renders reversed color control action dropdown', () => {
    const component = mount(
      <Dropdown icon={icon} label="add" controlAction reversedColor />
    );
    expect(component).toMatchSnapshot();
  });

  test('shows dropdown menu when clicking on the button', () => {
    const component = mount(<Dropdown />);

    component.find('.dropdownButton').simulate('click');

    expect(component.find('DropdownMenu').exists()).toEqual(true);
  });
});
