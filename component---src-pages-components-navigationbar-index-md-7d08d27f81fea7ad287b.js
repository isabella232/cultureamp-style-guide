webpackJsonp([91442562856492,0xa356a28186a],{10:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(7);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a(o).default}}),e.exports=t.default},26:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d=n(3),c=o(d),s=n(6),f=a(s),p=n(32),m=a(p),h=n(27),_=n(28),v=a(_),g=n(29),b=a(g),y=n(16),E=a(y),M=function(e){function t(){var n,a,o;l(this,t);for(var u=arguments.length,d=Array(u),c=0;c<u;c++)d[c]=arguments[c];return n=a=r(this,e.call.apply(e,[this].concat(d))),a.menuChange=function(e){a.setState(function(t){return i({},t,{menusOpen:t.menusOpen+(e?1:-1)})})},a.state={menusOpen:0},o=n,r(a,o)}return u(t,e),t.prototype.render=function(){var e=this.props,t=(e.environment,e.loading,e.children),n=e.colorScheme,a=[],o=[];return c.Children.toArray(t).forEach(function(e){e!==!1&&(e.type.name==v.default.name?a.push(e):o.push(e))}),c.createElement("header",{className:(0,f.default)(m.default.navigationBar,m.default[n])},this.renderBadge(),this.renderLinks(a),this.renderOtherChildren(o))},t.prototype.renderBadge=function(){var e=this.props,t=e.environment,n=e.loading,a={production:h.ProductionBadge,staging:h.StagingBadge,test:h.TestBadge,local:h.LocalBadge},o=a[t]||(0,h.namedBadge)(t);return c.createElement(o,{loading:n})},t.prototype.renderLinks=function(e){var t=this;return c.createElement("nav",{className:m.default.links},c.createElement("ul",{className:m.default.linkList},e.map(function(e){return c.createElement("li",{key:e.key,className:m.default.child},c.createElement("div",null,c.cloneElement(e,{hideTooltip:t.state.menusOpen>0})))})))},t.prototype.renderOtherChildren=function(e){var t=this;return e.map(function(e){return c.createElement("div",{key:e.key,className:m.default.child},c.createElement("div",null,c.cloneElement(e,{hideTooltip:t.state.menusOpen>0,onMenuChange:t.menuChange})))})},t}(c.Component);M.defaultProps={environment:"production",loading:!1,colorScheme:"cultureamp"},M.Link=v.default,M.Menu=b.default,M.Tooltip=E.default,t.default=M,e.exports=t.default},32:function(e,t){e.exports={navigationBar:"NavigationBar-module__navigationBar--3JRff",kaizen:"NavigationBar-module__kaizen--3nMih",links:"NavigationBar-module__links--1weE0",child:"NavigationBar-module__child--3AF_0"}},27:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e){return s.default.createElement("div",{className:h.default.badge},s.default.createElement("a",{href:"/"},e.loading?s.default.createElement(v.default,{icon:E.default,title:"loading…"}):s.default.createElement(v.default,{icon:b.default,title:"Culture Amp"})))}function l(e){return s.default.createElement(d,{envClass:h.default.staging,monogram:"staging",loading:e.loading})}function r(e){return s.default.createElement(d,{envClass:h.default.test,monogram:"test",loading:e.loading})}function u(e){return s.default.createElement(d,{envClass:h.default.local,monogram:"local",loading:e.loading})}function i(e){return function(t){return s.default.createElement(d,{envClass:h.default.named,monogram:e,loading:t.loading})}}function d(e){return s.default.createElement("div",{className:(0,p.default)(h.default.badge,e.envClass)},s.default.createElement("a",{href:"/","aria-live":"polite"},e.loading?s.default.createElement(v.default,{icon:E.default,title:"loading"}):s.default.createElement("span",{"aria-label":e.monogram},e.monogram.substr(0,2))))}t.__esModule=!0,t.ProductionBadge=o,t.StagingBadge=l,t.TestBadge=r,t.LocalBadge=u,t.namedBadge=i;var c=n(3),s=a(c),f=n(6),p=a(f),m=n(33),h=a(m),_=n(10),v=a(_),g=n(15),b=a(g),y=n(67),E=a(y)},33:function(e,t){e.exports={badge:"Badge-module__badge--3XbGY",staging:"Badge-module__staging--3YtAD",named:"Badge-module__named--1iGzl",test:"Badge-module__test--2pSBo",local:"Badge-module__local--2Z7w7"}},28:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l=n(3),r=a(l),u=n(6),i=a(u),d=n(34),c=a(d),s=n(10),f=a(s),p=n(21),m=a(p),h=function(e){var t,n,a=e.icon,l=e.href,u=e.active,d=e.tooltip,s=e.hideTooltip,p=e.id,h=e.onClick;return r.default.createElement("div",{className:c.default.root},r.default.createElement("a",o({className:(0,i.default)(c.default.link,(t={},t[m.default.active]=u,t))},{href:l,id:p,onClick:h}),r.default.createElement(f.default,{icon:a,title:d})),r.default.createElement("div",{className:(0,i.default)(c.default.tooltip,(n={},n[c.default.suppressed]=s,n)),"aria-hidden":!0},r.default.createElement("div",null,r.default.createElement("small",{className:c.default.content},d))))};h.defaultProps={active:!1,hideTooltip:!1},t.default=h,e.exports=t.default},34:function(e,t){e.exports={root:"Link-module__root--gTd7s Tooltip-module__root--1-o9a",link:"Link-module__link--2FgXV Icon-module__interactiveIconWrapper--1FGog",active:"Link-module__active--1c8IM Icon-module__active--A6TNP",tooltip:"Link-module__tooltip--1bAYD Tooltip-module__tooltip--3wxKO",content:"Link-module__content--1VgLH Tooltip-module__content--2AUVr",suppressed:"Link-module__suppressed--1q0qG Tooltip-module__suppressed--1cOLb"}},29:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d=n(3),c=o(d),s=n(35),f=a(s),p=n(16),m=a(p),h=function(e){function t(){var n,a,o;l(this,t);for(var u=arguments.length,i=Array(u),d=0;d<u;d++)i[d]=arguments[d];return n=a=r(this,e.call.apply(e,[this].concat(i))),a.state={open:!1},a.toggle=function(e){var t=!a.state.open;a.setState({open:t}),a.props.onMenuChange&&a.props.onMenuChange(t)},a.clickDocument=function(e){!a.state.open||!a.root||e.target instanceof Node&&a.root.contains(e.target)||a.toggle(e)},o=n,r(a,o)}return u(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.children,a=t.tooltip,o=t.hideTooltip,l=t.automationId;return c.createElement("nav",{className:f.default.root,ref:function(t){return e.root=t}},c.createElement(m.default,{tooltip:a,hideTooltip:this.state.open||o,tabIndex:null},c.createElement("button",{className:f.default.button,onClick:this.toggle,"aria-expanded":this.state.open,"data-automation-id":l,onMouseDown:function(e){return e.preventDefault()}},n)),this.state.open&&this.renderMenu())},t.prototype.renderMenu=function(){var e=this.props,t=e.header,n=e.items;return c.createElement("div",{className:f.default.menu},c.createElement("div",null,t,n.map(this.renderMenuItem)))},t.prototype.renderMenuItem=function(e,t){var n=e.label,a=e.link,o=e.data,l=void 0===o?{}:o,r={};return Object.keys(l).forEach(function(e){r["data-"+e]=l[e]}),c.createElement("a",i({key:t,href:a,className:f.default.menuItem},r),n)},t.prototype.componentDidMount=function(){document.addEventListener("click",this.clickDocument)},t.prototype.componentWillUnmount=function(){document.removeEventListener("click",this.clickDocument)},t}(c.Component);h.defaultProps={items:[],hideTooltip:!1},t.default=h,e.exports=t.default},35:function(e,t){e.exports={root:"Menu-module__root--IaMP4",button:"Menu-module__button--2ouCn",menu:"Menu-module__menu--Jj0fR Tooltip-module__tooltip--3wxKO Tooltip-module__visible--2D4tA",menuTitle:"Menu-module__menuTitle--36E2Q",menuItem:"Menu-module__menuItem--3mnsQ"}},16:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}t.__esModule=!0;var l=n(3),r=o(l),u=n(6),i=a(u),d=n(36),c=a(d),s=function(e){var t,n=e.children,a=e.tabIndex,o=e.tooltip,l=e.hideTooltip;return r.createElement("div",{className:c.default.root,tabIndex:a},n,r.createElement("div",{className:(0,i.default)(c.default.tooltip,(t={},t[c.default.suppressed]=l,t)),"aria-hidden":!0},r.createElement("div",null,r.createElement("small",{className:c.default.content},o))))};s.defaultProps={hideTooltip:!1,tabIndex:0},t.default=s,e.exports=t.default},36:function(e,t){e.exports={root:"Tooltip-module__root--1-o9a",tooltip:"Tooltip-module__tooltip--3wxKO",suppressed:"Tooltip-module__suppressed--1cOLb",visible:"Tooltip-module__visible--2D4tA",content:"Tooltip-module__content--2AUVr"}},22:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(26);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a(o).default}}),e.exports=t.default},92:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(3),l=a(o),r=n(22),u=a(r),i=n(122),d=a(i),c=function(e){return l.default.createElement("div",{className:d.default.navWrapper},l.default.createElement(u.default,e))};t.default=c,e.exports=t.default},122:function(e,t){e.exports={navWrapper:"NavigationBarDemo-module__navWrapper--2buaW"}},217:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(22),l=a(o),r=n(10),u=a(r),i=n(25),d=a(i),c=n(15),s=a(c),f=n(69),p=a(f),m=n(3),h=a(m),_=h.default.createElement(l.default.Link,{icon:d.default,href:"/",tooltip:"Home",active:!0}),v=h.default.createElement(l.default.Link,{icon:p.default,href:"http://academy.cultureamp.com/",tooltip:"Support",active:!1}),g=h.default.createElement(l.default.Menu,{tooltip:"Culture Amp",header:null,items:[{label:"About Culture Amp",link:"https://www.cultureamp.com/"}]},h.default.createElement("div",{style:{backgroundColor:"#ffffff",color:"#F8A6AE",borderRadius:"3px"}},h.default.createElement(u.default,{icon:s.default,role:"img",title:"Culture Amp Logo",inheritSize:!0}))),b=[{name:"Default",props:{children:[_,v,g]}},{name:"Loading",props:{loading:!0,children:[_,v,g]}},{name:"Kaizen Colours",props:{colorScheme:"kaizen",children:[_,g]}},{name:"Empty",props:{children:[]}}];t.default=b,e.exports=t.default},235:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.className,n=e.style,a=e.elementProps;return d.default.createElement("div",{className:t,style:n},d.default.createElement("h1",l({id:"navigation-bar"},a.h1),"Navigation Bar"),d.default.createElement(h.default,a.IntroParagraph,d.default.createElement("p",a.p,"The standard left-hand-side navigation bar used by Culture Amp applications."),d.default.createElement("p",a.p,"Currently available for React.")),d.default.createElement(p.default,l({component:v.default,presets:b.default},a.Demo)))}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=n(8),u=a(r),i=n(3),d=a(i),c=n(4),s=a(c),f=n(38),p=a(f),m=n(17),h=a(m),_=n(92),v=a(_),g=n(217),b=a(g);o.propTypes={className:s.default.string,style:s.default.object,elementProps:s.default.object},o.defaultProps={elementProps:{}};var y=function(){return d.default.createElement("div",{className:u.default.contentContainer},d.default.createElement(o,{elementProps:{h1:{className:u.default.h1},h2:{className:u.default.h2},h3:{className:u.default.h3},h4:{className:u.default.h4},h5:{className:u.default.h5},h6:{className:u.default.h6},p:{className:u.default.p},table:{className:u.default.table},ul:{className:u.default.ul},ol:{className:u.default.ol},li:{className:u.default.li},blockquote:{className:u.default.blockquote},hr:{className:u.default.hr},img:{className:u.default.img},a:{className:u.default.link}}}))};t.default=y},25:function(e,t,n){var a=n(1),o=n(2),l=new a({id:"ca-icon-home",use:"ca-icon-home-usage",viewBox:"0 0 20 20",content:'<symbol viewBox="0 0 20 20" id="ca-icon-home"><defs><path id="ca-icon-home_a" d="M8.118 18v-5.647h3.764V18h4.706v-7.53h2.824L10 2 .588 10.47h2.824V18z" /></defs><use fill="currentColor" xlink:href="#ca-icon-home_a" fill-rule="evenodd" /></symbol>'});o.add(l);e.exports=l},69:function(e,t,n){var a=n(1),o=n(2),l=new a({id:"ca-icon-support",use:"ca-icon-support-usage",viewBox:"0 0 20 20",content:'<symbol viewBox="0 0 20 20" id="ca-icon-support"><defs><path d="M10 14.5c-.92 0-1.776-.276-2.489-.75l-3.213 3.213A8.963 8.963 0 0 0 10 19a8.96 8.96 0 0 0 5.685-2.023l-3.215-3.215A4.482 4.482 0 0 1 10 14.5m6.963-10.201L13.75 7.51c.474.713.75 1.57.75 2.489 0 .913-.272 1.762-.738 2.471l3.215 3.215A8.967 8.967 0 0 0 19 10c0-2.164-.764-4.15-2.037-5.702M5.5 10c0-.913.272-1.762.738-2.471L3.023 4.314A8.965 8.965 0 0 0 1 10c0 2.164.764 4.15 2.037 5.701l3.213-3.213A4.484 4.484 0 0 1 5.5 10M10 5.5c.92 0 1.776.276 2.489.75l3.213-3.213A8.967 8.967 0 0 0 10 1a8.96 8.96 0 0 0-5.685 2.023l3.214 3.215A4.482 4.482 0 0 1 10 5.5" id="ca-icon-support_a" /></defs><use fill="currentColor" xlink:href="#ca-icon-support_a" fill-rule="evenodd" /></symbol>'});o.add(l);e.exports=l}});
//# sourceMappingURL=component---src-pages-components-navigationbar-index-md-7d08d27f81fea7ad287b.js.map