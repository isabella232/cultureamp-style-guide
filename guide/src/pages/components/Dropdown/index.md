---
imports:
  Demo: components/Demo.js
  InlineNotification: cultureamp-style-guide/components/Notification/InlineNotification.js
  IntroParagraph: components/IntroParagraph.js
  presets: ./_presets.js
---

<InlineNotification persistent={true} type="cautionary" title="Out of date">This documentation is out of date while we update the site. Until then, Culture Amp employees can refer to the <a href="https://cultureamp.atlassian.net/wiki/spaces/CA/pages/916161089/Kaizen+Visual+Documentation+Status">visual documentation status page on the wiki</a>.</InlineNotification>

# Dropdown

<IntroParagraph>

A simple dropdown menu to be used for opening links or triggering actions.
Do not use this if the user is selecting a value, prefer a select box instead.

</IntroParagraph>

<Demo presets={presets} />
