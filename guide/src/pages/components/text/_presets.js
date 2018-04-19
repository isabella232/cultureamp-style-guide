import Text from 'cultureamp-style-guide/components/Text';
import React from 'react';

const presets = [
  {
    name: 'H1',
    props: { tag: 'h1', children: 'This is a Page Title (H1)' },
  },
  {
    name: 'H1 (inherit baseline)',
    props: {
      tag: 'h1',
      inheritBaseline: true,
      children: 'This is a Page Title that inherits the baseline',
    },
  },
  {
    name: 'H2',
    props: { tag: 'h2', children: 'This is a Title (H2)' },
  },
  {
    name: 'H3',
    props: { tag: 'h3', children: 'This is a Display Heading (H3)' },
  },
  {
    name: 'H4',
    props: { tag: 'h4', children: 'This is a Heading (H4)' },
  },
  {
    name: 'H5',
    props: {
      tag: 'h5',
      children: 'This is a H5, which uses Heading styles',
    },
  },
  {
    name: 'H6',
    props: { tag: 'h6', children: 'This is a H6, which uses Heading styles' },
  },
  {
    name: 'Paragraph',
    props: {
      tag: 'p',
      children:
        'Dr. Brené Brown, author of Daring Greatly, is a research professor from the University of Houston who studies human emotions, including shame and vulnerability. In a March 2012 TED talk, she said, “Vulnerability is not weakness, and that myth is profoundly dangerous.” She went on to say that after 12 years of research, she has actually determined that vulnerability is “our most accurate measurement of courage.”',
    },
  },
  {
    name: 'Lede Paragraph',
    props: {
      tag: 'p',
      style: 'lede',
      children:
        'Dr. Brené Brown, author of Daring Greatly, is a research professor from the University of Houston who studies human emotions, including shame and vulnerability. In a March 2012 TED talk, she said, “Vulnerability is not weakness, and that myth is profoundly dangerous.” She went on to say that after 12 years of research, she has actually determined that vulnerability is “our most accurate measurement of courage.”',
    },
  },
  {
    name: 'Div',
    props: {
      tag: 'div',
      children:
        'Dr. Brené Brown, author of Daring Greatly, is a research professor from the University of Houston who studies human emotions, including shame and vulnerability. In a March 2012 TED talk, she said, “Vulnerability is not weakness, and that myth is profoundly dangerous.” She went on to say that after 12 years of research, she has actually determined that vulnerability is “our most accurate measurement of courage.”',
    },
  },
  {
    name: 'Div with Page Title styles',
    props: {
      tag: 'div',
      style: 'page-title',
      children: 'Div with "Page Title" styles',
    },
  },
  {
    name: 'Body-bold',
    props: {
      tag: 'div',
      style: 'body-bold',
      children: 'Div with "Body Bold" styles',
    },
  },
  {
    name: 'Small',
    props: {
      tag: 'div',
      style: 'small',
      children: 'Div with "Small" styles',
    },
  },
  {
    name: 'Small-bold',
    props: {
      tag: 'div',
      style: 'small-bold',
      children: 'Div with "Small Bold" styles',
    },
  },
  {
    name: 'Notification',
    props: {
      tag: 'div',
      style: 'notification',
      children: 'Div with "Notification" styles',
    },
  },
  {
    name: 'Label',
    props: {
      tag: 'div',
      style: 'label',
      children: 'Div with "Label" styles',
    },
  },
  {
    name: 'Control-action',
    props: {
      tag: 'div',
      style: 'control-action',
      children: 'Div with "Control Action" styles',
    },
  },
  {
    name: 'Button',
    props: {
      tag: 'div',
      style: 'button',
      children: 'Div with "Button" styles',
    },
  },
];

export default presets;
