---
imports:
  Demo: components/Demo.js
  Elm: ./IconButtonDemo.elm
  InlineNotification: cultureamp-style-guide/components/Notification/InlineNotification.js
  IntroParagraph: components/IntroParagraph.js
  buttonPresets: ./_iconButtonPresets.js
---

<InlineNotification persistent={true} type="cautionary" title="Out of date">This documentation is out of date while we update the site. Until then, Culture Amp employees can refer to the <a href="https://cultureamp.atlassian.net/wiki/spaces/CA/pages/916161089/Kaizen+Visual+Documentation+Status">visual documentation status page on the wiki</a>.</InlineNotification>

# Icon Button

<IntroParagraph>

A button with an icon but no label.

</IntroParagraph>

<Demo presets={buttonPresets} elm={Elm.Elm.Button.IconButtonDemo} />
