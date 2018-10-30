webpackJsonp([0xff49d7aa3662],{277:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=a(3),i=l(s),d=a(394),u=l(d),c=function(e){function t(){var a,l,o;n(this,t);for(var s=arguments.length,i=Array(s),d=0;d<s;d++)i[d]=arguments[d];return a=l=r(this,e.call.apply(e,[this].concat(i))),l.state={},o=a,r(l,o)}return o(t,e),t.prototype.componentDidMount=function(){var e=window.getComputedStyle(this.paragraph);this.setState({size:e.fontSize+" / "+e.lineHeight})},t.prototype.render=function(){var e=this,t=this.props,a=t.name,l=(t.sampleText,t.className),n=t.sassCode,r=this.state.size?a+" – "+this.state.size:a;return i.default.createElement("div",{className:u.default.typographyShowcaseItem},i.default.createElement("p",{ref:function(t){return e.paragraph=t},className:u.default[l]},r),i.default.createElement("pre",null,n))},t}(i.default.Component);c.displayName="TypographyItem";var m=function(){return i.default.createElement("div",null,i.default.createElement("h2",{className:u.default.display},"Type hierarchy"),i.default.createElement(c,{name:"Page Title (H1)",sampleText:"Have the courage to be vulnerable",className:"pageTitle",sassCode:"@include ca-type-ideal-page-title;"}),i.default.createElement(c,{name:"Title (H2)",sampleText:"Have the courage to be vulnerable",className:"title",sassCode:"@include ca-type-ideal-title;"}),i.default.createElement(c,{name:"Display (H3)",sampleText:"Learn faster through feedback",className:"display",sassCode:"@include ca-type-ideal-display;"}),i.default.createElement(c,{name:"Heading (H4)",sampleText:"Trust people to make decisions",className:"heading",sassCode:"@include ca-type-ideal-heading;"}),i.default.createElement(c,{name:"Lede (Intro)",sampleText:"Values are not what you want to be on a good day. Values are what you are willing to hurt for every day.",className:"lede",sassCode:"@include ca-type-ideal-lede;"}),i.default.createElement(c,{name:"Body",sampleText:"Dr. Brené Brown, author of Daring Greatly, is a research professor from the University of Houston who studies human emotions, including shame and vulnerability. In a March 2012 TED talk, she said, “Vulnerability is not weakness, and that myth is profoundly dangerous.” She went on to say that after 12 years of research, she has actually determined that vulnerability is “our most accurate measurement of courage.”",className:"body",sassCode:"@include ca-type-ideal-body;"}),i.default.createElement(c,{name:"Body Bold",sampleText:"Our mission is to make the power of people analytics accessible to everyone.",className:"bodyBold",sassCode:"@include ca-type-ideal-body-bold;"}),i.default.createElement(c,{name:"Small",sampleText:"Had I the heaven's embroidered cloths. Enwrought with golden and silver light. The blue and the dim and the dark cloths of night and light and the half-light. I would spread the cloths under your feet. But I, being poor, have only my dreams. I have spread my dreams under your feet. Tread softly because you tread on my dreams.",className:"small",sassCode:"@include ca-type-ideal-small;"}),i.default.createElement(c,{name:"Small Bold",sampleText:"Had I the heaven's embroidered cloths. Enwrought with golden and silver light. The blue and the dim and the dark cloths of night and light and the half-light. I would spread the cloths under your feet. But I, being poor, have only my dreams. I have spread my dreams under your feet. Tread softly because you tread on my dreams.",className:"smallBold",sassCode:"@include ca-type-ideal-small-bold;"}),i.default.createElement(c,{name:"Notifications",sampleText:i.default.createElement("span",null,"\"Had I the heaven's embroidered cloths.",i.default.createElement("br",null),"Enwrought with golden and silver light.",i.default.createElement("br",null),"The blue and the dim and the dark cloths of night and light and the half-light.",i.default.createElement("br",null),"I would spread the cloths under your feet.",i.default.createElement("br",null),"But I, being poor, have only my dreams.",i.default.createElement("br",null),"I have spread my dreams under your feet.",i.default.createElement("br",null),'Tread softly because you tread on my dreams."',i.default.createElement("br",null),"— William Butler Yeats"),className:"notification",sassCode:"@include ca-type-ideal-notification;"}),i.default.createElement(c,{name:"Labels",sampleText:"Fact & Truth",className:"label",sassCode:"@include ca-type-ideal-label;"}),i.default.createElement(c,{name:"Control Action",sampleText:"Fact & Truth",className:"controlAction",sassCode:"@include ca-type-ideal-control-action;"}),i.default.createElement(c,{name:"Buttons",sampleText:"Amplify Others",className:"button",sassCode:"@include ca-type-ideal-button;"}))};m.displayName="TypographyShowcase",t.default=m,e.exports=t.default},394:function(e,t){e.exports={pageTitle:"_TypographyShowcase-module__pageTitle--3da-E",title:"_TypographyShowcase-module__title--3wSD_",display:"_TypographyShowcase-module__display--20uyl",heading:"_TypographyShowcase-module__heading--2tjfy",lede:"_TypographyShowcase-module__lede--3_-fI",body:"_TypographyShowcase-module__body--11dnC",bodyBold:"_TypographyShowcase-module__bodyBold--1DE8y",small:"_TypographyShowcase-module__small--1wnIY",smallBold:"_TypographyShowcase-module__smallBold--ODmes",notification:"_TypographyShowcase-module__notification--10_8y",label:"_TypographyShowcase-module__label--yqmTv",controlAction:"_TypographyShowcase-module__controlAction--33Lbs",button:"_TypographyShowcase-module__button--3pBSZ",typographyShowcaseItem:"_TypographyShowcase-module__typographyShowcaseItem--Vjl_y"}},238:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=e.className,a=e.style,l=e.elementProps;return d.default.createElement("div",{className:t,style:a},d.default.createElement("h1",r({id:"typography"},l.h1),"Typography"),d.default.createElement(f.default,l.IntroParagraph,d.default.createElement("p",l.p,"Typography is important when establishing a strong design system. When established, it can help to create balance and hierarchy of textual information. By creating structure within a page, text becomes enjoyable and appealing to read. We aim to ensure type within our product complies with WCAG 2.0 AA standards.")),d.default.createElement(g.default,l.TypographyShowcase),d.default.createElement("h2",r({id:"what-is-its-purpose"},l.h2),"What is its purpose?"),d.default.createElement("ul",l.ul,d.default.createElement("li",l.li,"Create visual hierarchy of textual information")),d.default.createElement("h2",r({id:"why-is-it-useful"},l.h2),"Why is it useful?"),d.default.createElement("ul",l.ul,d.default.createElement("li",l.li,"Makes reading text enjoyable / appealing / legible"),d.default.createElement("li",l.li,"Creates structure within a page")),d.default.createElement("h2",r({id:"how-should-we-use-it"},l.h2),"How should we use it?"),d.default.createElement("ul",l.ul,d.default.createElement("li",l.li,"Comply with WCAG 2.0 AA standards (12px minimum, 16px / 1em standard)"),d.default.createElement("li",l.li,"Utilise brand typefaces (Open Sans → Ideal Sans (Sans Serif) and Monaco → Operator (Monospace))"),d.default.createElement("li",l.li,"Text colour / contrast is crucial. Ensure colour ratios comply with WCAG 2.0 AA"),d.default.createElement("li",l.li,"Adhere to our baseline grid (line-height) of 24px / Vertical rhythm"),d.default.createElement("li",l.li,"Ensure paragraph widths are not too long (650px wide max or 90 characters)"),d.default.createElement("li",l.li,"White space is equally important. Let your text breathe."),d.default.createElement("li",l.li,"Use type styles to define content structure (Page titles, Intro Lede, Body, Small etc)"),d.default.createElement("li",l.li,"Render correctly (i.e. not janky) across all devices and operating systems.")),d.default.createElement("h2",r({id:"how-shouldnt-we-use-it"},l.h2),"How shouldn’t we use it?"),d.default.createElement("ul",l.ul,d.default.createElement("li",l.li,"You can also view the ",d.default.createElement(h.default,r({to:"/language/checklist"},l.Link),"Product Writing Checklist")," to quickly check any text you are adding to the Culture Amp product or related communications.")),d.default.createElement("h2",r({id:"general-guidelines"},l.h2),"General guidelines"),d.default.createElement("ul",l.ul,d.default.createElement("li",l.li,"Basic structure of hierarchy (examples)"),d.default.createElement("li",l.li,"Paragraph spacing / Vertical rhythm"),d.default.createElement("li",l.li,"Paragraph width"),d.default.createElement("li",l.li,"Links (when to underline, when not to)"),d.default.createElement("li",l.li,"How to style Abbreviations (E.g. HRIS) / Underline / Tooltips")),d.default.createElement("h2",r({id:"best-practices"},l.h2),"Best practices"),d.default.createElement(E.TipContainer,l.TipContainer,d.default.createElement(E.TipCard,r({title:"Typography should…",type:"tip"},l.TipCard),d.default.createElement("ul",l.ul,d.default.createElement("li",l.li,d.default.createElement("p",l.p,"A pleasure to read")),d.default.createElement("li",l.li,d.default.createElement("p",l.p,"Should make sense, visually and informationally")))),d.default.createElement(E.TipCard,r({title:"Typography should not…",type:"warning"},l.TipCard),d.default.createElement("ul",l.ul,d.default.createElement("li",l.li,d.default.createElement("p",l.p,"Be overwhelming")),d.default.createElement("li",l.li,d.default.createElement("p",l.p,"Difficult to read"))))))}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},o=a(8),s=l(o),i=a(3),d=l(i),u=a(4),c=l(u),m=a(13),h=l(m),p=a(9),f=l(p),y=a(277),g=l(y),E=a(81);n.propTypes={className:c.default.string,style:c.default.object,elementProps:c.default.object},n.defaultProps={elementProps:{}},n.displayName="MarkdownComponent";var b=function(){return d.default.createElement("div",{className:s.default.contentContainer},d.default.createElement(n,{elementProps:{h1:{className:s.default.h1},h2:{className:s.default.h2},h3:{className:s.default.h3},h4:{className:s.default.h4},h5:{className:s.default.h5},h6:{className:s.default.h6},p:{className:s.default.p},table:{className:s.default.table},ul:{className:s.default.ul},ol:{className:s.default.ol},li:{className:s.default.li},blockquote:{className:s.default.blockquote},hr:{className:s.default.hr},img:{className:s.default.img},a:{className:s.default.link}}}))};b.displayName="WrappedMarkdownComponent",t.default=b}});
//# sourceMappingURL=component---src-pages-styles-typography-md-11164a5ad37c0900bee7.js.map