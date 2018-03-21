webpackJsonp([0xff49d7aa3662],{33:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(3),n=l(r),i=a(6),d=l(i),u=a(8),c=l(u),s=a(45),o=l(s),f=a(44),p=l(f),m=a(17),h=l(m),E=function(e){var t=e.title,a=e.type,l=e.children,r="tip"===a?o.default:p.default,i="tip"===a?"tipIcon":"warningIcon";return n.default.createElement("div",{className:h.default.cardWithHeader},n.default.createElement("div",{className:h.default.cardHeader},r&&n.default.createElement("span",{className:(0,d.default)(h.default.iconWrapper,h.default[i])},n.default.createElement(c.default,{icon:r,role:"presentation"})),n.default.createElement("span",{className:h.default.headerText},t)),n.default.createElement("div",{className:h.default.cardBody},l))};t.default=E,e.exports=t.default},17:function(e,t){e.exports={card:"TipCard-module__card--2jAko",dark:"TipCard-module__dark--1rO4T",cardWithHeader:"TipCard-module__cardWithHeader--3libT TipCard-module__card--2jAko",cardHeader:"TipCard-module__cardHeader--2fYWe",headerText:"TipCard-module__headerText--83APx",cardBody:"TipCard-module__cardBody--1Rs7G",iconWrapper:"TipCard-module__iconWrapper--u5G6q",tipIcon:"TipCard-module__tipIcon--3THNM",warningIcon:"TipCard-module__warningIcon--1pbSl",tipsContainer:"TipCard-module__tipsContainer--3TOTF"}},34:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(3),n=l(r),i=a(17),d=l(i),u=a(7),c=(l(u),function(e){var t=e.children;return n.default.createElement("div",{className:""+d.default.tipsContainer},t)});t.default=c,e.exports=t.default},35:function(e,t,a){"use strict";t.__esModule=!0;t.TipCard=a(33),t.TipContainer=a(34)},213:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.className,a=e.style,l=e.elementProps;return c.default.createElement("div",{className:t,style:a},c.default.createElement("h1",n({id:"typography"},l.h1),"Typography"),c.default.createElement(h.default,l.IntroParagraph,c.default.createElement("p",l.p,"Typography is important when establishing a strong design system. When established, it can help to create balance and hierarchy of textual information. By creating structure within a page, text becomes enjoyable and appealing to read. We aim to ensure type within our product complies with WCAG 2.0 AA standards.")),c.default.createElement("h2",n({id:"what-is-its-purpose"},l.h2),"What is its purpose?"),c.default.createElement("ul",l.ul,c.default.createElement("li",l.li,"Create visual hierarchy of textual information")),c.default.createElement("h2",n({id:"why-is-it-useful"},l.h2),"Why is it useful?"),c.default.createElement("ul",l.ul,c.default.createElement("li",l.li,"Makes reading text enjoyable / appealing / legible"),c.default.createElement("li",l.li,"Creates structure within a page")),c.default.createElement("h2",n({id:"how-should-we-use-it"},l.h2),"How should we use it?"),c.default.createElement("ul",l.ul,c.default.createElement("li",l.li,"Comply with WCAG 2.0 AA standards (12px minimum, 16px / 1em standard)"),c.default.createElement("li",l.li,"Utilise brand typefaces (Open Sans → Ideal Sans (Sans Serif) and Monaco → Operator (Monospace))"),c.default.createElement("li",l.li,"Text colour / contrast is crucial. Ensure colour ratios comply with WCAG 2.0 AA"),c.default.createElement("li",l.li,"Adhere to our baseline grid (line-height) of 24px / Vertical rhythm"),c.default.createElement("li",l.li,"Ensure paragraph widths are not too long (650px wide max or 90 characters)"),c.default.createElement("li",l.li,"White space is equally important. Let your text breathe."),c.default.createElement("li",l.li,"Use type styles to define content structure (Page titles, Intro Lede, Body, Small etc)"),c.default.createElement("li",l.li,"Render correctly (i.e. not janky) across all devices and operating systems.")),c.default.createElement("h2",n({id:"how-shouldnt-we-use-it"},l.h2),"How shouldn’t we use it?"),c.default.createElement("ul",l.ul,c.default.createElement("li",l.li,"You can also view the ",c.default.createElement(p.default,n({to:"/language/checklist"},l.Link),"Product Writing Checklist")," to quickly check any text you are adding to the Culture Amp product or related communications.")),c.default.createElement("h2",n({id:"general-guidelines"},l.h2),"General guidelines"),c.default.createElement("ul",l.ul,c.default.createElement("li",l.li,"Basic structure of hierarchy (examples)"),c.default.createElement("li",l.li,"Paragraph spacing / Vertical rhythm"),c.default.createElement("li",l.li,"Paragraph width"),c.default.createElement("li",l.li,"Links (when to underline, when not to)"),c.default.createElement("li",l.li,"How to style Abbreviations (E.g. HRIS) / Underline / Tooltips")),c.default.createElement("h2",n({id:"best-practices"},l.h2),"Best practices"),c.default.createElement("p",l.p,c.default.createElement("strong",l.strong,"Typography should…")),c.default.createElement("p",l.p,c.default.createElement("strong",l.strong,"Typography should not…")),c.default.createElement(E.TipContainer,l.TipContainer,c.default.createElement(E.TipCard,n({title:"Typography should…",type:"tip"},l.TipCard),c.default.createElement("ul",l.ul,c.default.createElement("li",l.li,c.default.createElement("p",l.p,"A pleasure to read")),c.default.createElement("li",l.li,c.default.createElement("p",l.p,"Should make sense, visually and informationally")))),c.default.createElement(E.TipCard,n({title:"Typography should not…",type:"warning"},l.TipCard),c.default.createElement("ul",l.ul,c.default.createElement("li",l.li,c.default.createElement("p",l.p,"Be overwhelming")),c.default.createElement("li",l.li,c.default.createElement("p",l.p,"Difficult to read"))))))}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},i=a(7),d=l(i),u=a(3),c=l(u),s=a(4),o=l(s),f=a(14),p=l(f),m=a(32),h=l(m),E=a(35);r.propTypes={className:o.default.string,style:o.default.object,elementProps:o.default.object},r.defaultProps={elementProps:{}};var y=function(){return c.default.createElement("div",{className:d.default.contentContainer},c.default.createElement(r,{elementProps:{h1:{className:d.default.h1},h2:{className:d.default.h2},h3:{className:d.default.h3},h4:{className:d.default.h4},h5:{className:d.default.h5},h6:{className:d.default.h6},p:{className:d.default.p},table:{className:d.default.table},ul:{className:d.default.ul},ol:{className:d.default.ol},li:{className:d.default.li},blockquote:{className:d.default.blockquote},hr:{className:d.default.hr},img:{className:d.default.img},a:{className:d.default.link}}}))};t.default=y}});
//# sourceMappingURL=component---src-pages-styles-typography-md-57d14ffba6eb2ccd8114.js.map