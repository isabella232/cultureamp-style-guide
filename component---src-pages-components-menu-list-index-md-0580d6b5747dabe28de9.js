webpackJsonp([0xea8930a64a2b],{317:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(27),c=a(61),r=l(c),u=a(63),o=l(u),i=a(21),s=l(i),d=a(1),m=l(d),f=m.default.createElement(n.MenuHeader,{title:"Contextual Select Menu"}),p=[m.default.createElement(n.MenuItem,{action:function(){return alert("Print!")},icon:r.default,hoverIcon:!1},"Action label with icon"),m.default.createElement(n.MenuItem,{action:function(){return alert("Print!")},icon:r.default,hoverIcon:!0},"Action label with hover icon"),m.default.createElement(n.MenuItem,{action:function(){return alert("Print!")}},"Action label")],h=[m.default.createElement(n.MenuItem,{action:"https://www.cultureamp.com/",icon:s.default,hoverIcon:!1},"Link label with icon"),m.default.createElement(n.MenuItem,{action:"https://www.cultureamp.com/",icon:s.default,hoverIcon:!0},"Link label with hover icon"),m.default.createElement(n.MenuItem,{action:"https://www.cultureamp.com/"},"Link label")],v=[m.default.createElement(n.MenuItem,{action:function(){return alert("Delete!")},icon:o.default,hoverIcon:!1,destructive:!0},"Destructive Action label with icon"),m.default.createElement(n.MenuItem,{action:function(){return alert("Delete!")},icon:o.default,hoverIcon:!0,destructive:!0},"Destructive Action label with hover icon"),m.default.createElement(n.MenuItem,{action:function(){return alert("Delete!")},destructive:!0},"Destructive Action label")],w=m.default.createElement(n.MenuItem,{action:function(){return alert("I am active!")},icon:r.default,hoverIcon:!1,active:!0},"Active action label with icon"),b=m.default.createElement(n.MenuSeparator,null),E=[{name:"Default",node:m.default.createElement(n.MenuList,null,f,p,b,h,b,v)},{name:"Simple list",node:m.default.createElement(n.MenuList,null,w,p),props:{children:[w].concat(p)}}];t.default=E,e.exports=t.default},260:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=e.className,a=e.style,l=e.elementProps;return i.default.createElement("div",{className:t,style:a},i.default.createElement("h1",c({id:"menu-list"},l.h1),"Menu List"),i.default.createElement(h.default,l.IntroParagraph,i.default.createElement("p",l.p,"A generic list of items or actions, to be used with dropdown menus etc.")),i.default.createElement(f.default,c({presets:w.default},l.Demo)),i.default.createElement("h3",c({id:"import-snippet"},l.h3),"Import snippet"),i.default.createElement("p",l.p,"To import js React components into your JS file:"),i.default.createElement("pre",l.pre,i.default.createElement("code",l.code,"import {",i.default.createElement("br",l.br),i.default.createElement("span",c({className:"hljs-built_in"},l.span),"  MenuList,"),i.default.createElement("br",l.br),i.default.createElement("span",c({className:"hljs-built_in"},l.span),"  MenuHeader,"),i.default.createElement("br",l.br),i.default.createElement("span",c({className:"hljs-built_in"},l.span),"  MenuItem,"),i.default.createElement("br",l.br),i.default.createElement("span",c({className:"hljs-built_in"},l.span),"  MenuSeparator,"),i.default.createElement("br",l.br),"} from 'cultureamp-style-guide/components/MenuList'",i.default.createElement("span",c({className:"hljs-comment"},l.span),";"),i.default.createElement("br",l.br))))}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},r=a(10),u=l(r),o=a(1),i=l(o),s=a(5),d=l(s),m=a(20),f=l(m),p=a(12),h=l(p),v=a(317),w=l(v);n.propTypes={className:d.default.string,style:d.default.object,elementProps:d.default.object},n.defaultProps={elementProps:{}},n.displayName="MarkdownComponent";var b=function(){return i.default.createElement("div",{className:u.default.contentContainer},i.default.createElement(n,{elementProps:{h1:{className:u.default.h1},h2:{className:u.default.h2},h3:{className:u.default.h3},h4:{className:u.default.h4},h5:{className:u.default.h5},h6:{className:u.default.h6},p:{className:u.default.p},table:{className:u.default.table},ul:{className:u.default.ul},ol:{className:u.default.ol},li:{className:u.default.li},blockquote:{className:u.default.blockquote},hr:{className:u.default.hr},img:{className:u.default.img},a:{className:u.default.link}}}))};b.displayName="WrappedMarkdownComponent",t.default=b},61:function(e,t,a){var l=a(2),n=a(3),c=new l({id:"ca-icon-print-white",use:"ca-icon-print-white-usage",viewBox:"0 0 20 20",content:'<symbol viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" id="ca-icon-print-white"><g fill="none" fill-rule="evenodd"><path d="M15.6 6.8H4.4A2.397 2.397 0 0 0 2 9.2V14h3.2v3.2h9.6V14H18V9.2c0-1.328-1.072-2.4-2.4-2.4zM5.2 6h9.6V2.8H5.2z" fill="currentColor" /><path d="M15.6 10c-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8.44 0 .8.36.8.8 0 .44-.36.8-.8.8zM6.8 15.6h6.4v-4H6.8z" fill="#FFF" /></g></symbol>'});n.add(c);e.exports=c},63:function(e,t,a){var l=a(2),n=a(3),c=new l({id:"ca-icon-trash",use:"ca-icon-trash-usage",viewBox:"0 0 20 20",content:'<symbol viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="ca-icon-trash"><defs><path d="M13 2.889L12.143 2H7.857L7 2.889H4v1.778h12V2.889h-3zM5.005 16.222c0 .982.767 1.778 1.714 1.778h6.562c.947 0 1.714-.796 1.714-1.778V5.556h-9.99v10.666z" id="ca-icon-trash_a" /></defs><use fill="currentColor" xlink:href="#ca-icon-trash_a" fill-rule="evenodd" /></symbol>'});n.add(c);e.exports=c}});
//# sourceMappingURL=component---src-pages-components-menu-list-index-md-0580d6b5747dabe28de9.js.map