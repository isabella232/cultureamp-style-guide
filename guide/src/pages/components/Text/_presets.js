// @flow
import Text from 'cultureamp-style-guide/components/Text';
import React from 'react';

const presets = [
  {
    name: 'H1',
    node: <Text tag="h1">This is a Page Title (H1)</Text>,
  },
  {
    name: 'H1 (inherit baseline)',
    node: (
      <Text tag="h1" inheritBaseline>
        This is a Page Title (H1) that inherits the baseline
      </Text>
    ),
  },
  {
    name: 'H2',
    node: <Text tag="h2">This is a Title (H2)</Text>,
  },
  {
    name: 'H3',
    node: <Text tag="h3">This is a Display Heading (H3)</Text>,
  },
  {
    name: 'H4',
    node: <Text tag="h4">This is a Heading (H4)</Text>,
  },
  {
    name: 'H5',
    node: <Text tag="h5"> This is a H5, which uses Heading styles </Text>,
  },
  {
    name: 'H6',
    node: <Text tag="h6">This is a H6, which uses Heading styles</Text>,
  },
  {
    name: 'Paragraph',
    node: (
      <Text tag="p">
        Dr. Brené Brown, author of Daring Greatly, is a research professor from
        the University of Houston who studies human emotions, including shame
        and vulnerability. In a March 2012 TED talk, she said, “Vulnerability is
        not weakness, and that myth is profoundly dangerous.” She went on to say
        that after 12 years of research, she has actually determined that
        vulnerability is “our most accurate measurement of courage.”
      </Text>
    ),
  },
  {
    name: 'Paragraph (no margins)',
    node: (
      <Text tag="p" style="body">
        Dr. Brené Brown, author of Daring Greatly, is a research professor from
        the University of Houston who studies human emotions, including shame
        and vulnerability. In a March 2012 TED talk, she said, “Vulnerability is
        not weakness, and that myth is profoundly dangerous.” She went on to say
        that after 12 years of research, she has actually determined that
        vulnerability is “our most accurate measurement of courage.”
      </Text>
    ),
  },
  {
    name: 'Lede Paragraph',
    node: (
      <Text tag="p" style="lede">
        Dr. Brené Brown, author of Daring Greatly, is a research professor from
        the University of Houston who studies human emotions, including shame
        and vulnerability. In a March 2012 TED talk, she said, “Vulnerability is
        not weakness, and that myth is profoundly dangerous.” She went on to say
        that after 12 years of research, she has actually determined that
        vulnerability is “our most accurate measurement of courage.”
      </Text>
    ),
  },
  {
    name: 'Div',
    node: (
      <Text tag="div">
        Dr. Brené Brown, author of Daring Greatly, is a research professor from
        the University of Houston who studies human emotions, including shame
        and vulnerability. In a March 2012 TED talk, she said, “Vulnerability is
        not weakness, and that myth is profoundly dangerous.” She went on to say
        that after 12 years of research, she has actually determined that
        vulnerability is “our most accurate measurement of courage.”
      </Text>
    ),
  },
  {
    name: 'Div with Page Title styles',
    node: (
      <Text tag="div" style="page-title">
        Div with "Page Title" styles
      </Text>
    ),
  },
  {
    name: 'Body-bold',
    node: (
      <Text tag="div" style="body-bold">
        Div with "Body Bold" styles
      </Text>
    ),
  },
  {
    name: 'Small',
    node: (
      <Text tag="div" style="small">
        Div with "Small" styles
      </Text>
    ),
  },
  {
    name: 'Small-bold',
    node: (
      <Text tag="div" style="small-bold">
        Div with "Small Bold" styles
      </Text>
    ),
  },
  {
    name: 'Notification',
    node: (
      <Text tag="div" style="notification">
        Div with "Notification" styles
        <br />that have a smaller line-height
      </Text>
    ),
  },
  {
    name: 'Label',
    node: (
      <Text tag="div" style="label">
        Div with "Label" styles
      </Text>
    ),
  },
  {
    name: 'Control-action',
    node: (
      <Text tag="div" style="control-action">
        Div with "Control Action" styles
      </Text>
    ),
  },
  {
    name: 'Button',
    node: (
      <Text tag="div" style="button">
        Div with "Button" styles
      </Text>
    ),
  },
];

export default presets;
