---
imports:
  Demo: components/Demo.js
  Elm: ./Demo.elm
  InlineNotification: cultureamp-style-guide/components/Notification/InlineNotification.js
  IntroParagraph: components/IntroParagraph.js
  presets: ./_inlinePresets.js
---

<div><InlineNotification persistent={true} type="cautionary" title="Out of date">This documentation is out of date while we update the site. Until then, Culture Amp employees can refer to the <a href="https://cultureamp.atlassian.net/wiki/spaces/CA/pages/916161089/Kaizen+Visual+Documentation+Status">visual documentation status page on the wiki</a>.</InlineNotification></div>

# Inline Notification

<IntroParagraph>

An inline notification!

</IntroParagraph>

<Demo presets={presets} elm={Elm.Elm.Notification.Demo} />
