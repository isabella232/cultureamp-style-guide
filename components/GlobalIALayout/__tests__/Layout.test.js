import React from 'react';
import { mount } from 'enzyme';
import Layout from '../Layout';

test('The layout components have the correct displayNames', () => {
  expect(Layout.displayName).toBe('Layout');
  expect(Layout.NavigationBar.displayName).toBe('NavigationBar');
  expect(Layout.Sidebar.displayName).toBe('Sidebar');
  expect(Layout.Header.displayName).toBe('Header');
  expect(Layout.Footer.displayName).toBe('Footer');
  expect(Layout.Toasts.displayName).toBe('Toasts');
  expect(Layout.Announcers.displayName).toBe('Announcers');
});

test('The NavigationBar component renders correctly', () => {
  const component = mount(<Layout.NavigationBar />);
  expect(component).toMatchSnapshot();
});

test('The Sidebar component renders correctly', () => {
  const component = mount(<Layout.Sidebar />);
  expect(component).toMatchSnapshot();
});

test('The Header component renders correctly', () => {
  const component = mount(<Layout.Header />);
  expect(component).toMatchSnapshot();
});

test('The Footer component renders correctly', () => {
  const component = mount(<Layout.Footer />);
  expect(component).toMatchSnapshot();
});

test('The Toasts component renders correctly', () => {
  const component = mount(<Layout.Toasts />);
  expect(component).toMatchSnapshot();
});

test('The Announcers component renders correctly', () => {
  const component = mount(<Layout.Announcers />);
  expect(component).toMatchSnapshot();
});

test('The Layout component renders correctly', () => {
  const component = mount(<Layout />);
  expect(component).toMatchSnapshot();
});

test('The Layout component renders child components in the correct positions', () => {
  const component = mount(
    <Layout>
      <Layout.NavigationBar>NavigationBar</Layout.NavigationBar>
      <Layout.Sidebar>Sidebar</Layout.Sidebar>
      <Layout.Header>Header</Layout.Header>
      <Layout.Footer>Footer</Layout.Footer>
      <Layout.Toasts>Toasts</Layout.Toasts>
      <Layout.Announcers>Announcers</Layout.Announcers>
      <div>My content</div>
    </Layout>
  );
  expect(component).toMatchSnapshot();
});
