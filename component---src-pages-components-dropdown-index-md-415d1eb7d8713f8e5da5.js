webpackJsonp([33995494959456],{87:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(4),s=(r(i),n(3)),c=o(s),d=n(5),f=r(d),p=n(64),m=r(p),h=n(7),_=r(h),b=n(137),w=r(b),v=n(88),M=r(v),y=function(e){function t(n){a(this,t);var o=l(this,e.call(this,n));return o.toggleDropdownMenu=function(e){e.stopPropagation();var t=o.state.isMenuVisible;o.setState({isMenuVisible:!t})},o.hideDropdownMenu=function(){o.setState({isMenuVisible:!1})},o.state={isMenuVisible:Boolean(n.menuVisible)},o}return u(t,e),t.prototype.getPosition=function(){return this.dropdownButton?this.dropdownButton.getBoundingClientRect():null},t.prototype.renderDropdownMenu=function(){return c.createElement(M.default,{hideDropdownMenu:this.hideDropdownMenu,position:this.getPosition()},this.props.children)},t.prototype.render=function(){var e,t=this,n=this.props,o=n.icon,r=n.label;o||r||(o=w.default);var a=(0,f.default)(m.default.dropdownButton,(e={},e[m.default.isOpen]=this.state.isMenuVisible,e));return c.createElement("div",{className:m.default.dropdown},c.createElement("button",{className:a,onClick:this.toggleDropdownMenu,onMouseDown:function(e){return e.preventDefault()},ref:function(e){return t.dropdownButton=e}},o&&c.createElement("span",{className:m.default.dropdownIcon},c.createElement(_.default,{icon:o,role:"img",title:"Open menu"})),r&&c.createElement("span",{className:m.default.dropdownLabel},r)),this.state.isMenuVisible&&this.renderDropdownMenu())},t}(c.Component);t.default=y,e.exports=t.default},64:function(e,t){e.exports={dropdown:"Dropdown-module__dropdown--1YWtY",buttonReset:"Dropdown-module__buttonReset--1HZeD",dropdownButton:"Dropdown-module__dropdownButton--38lfY Dropdown-module__buttonReset--1HZeD",dropdownIcon:"Dropdown-module__dropdownIcon--3XP7B",dropdownLabel:"Dropdown-module__dropdownLabel--2XYVj",dropdownHoverArea:"Dropdown-module__dropdownHoverArea--1IBoI",isOpen:"Dropdown-module__isOpen--3JQvj",menuContainer:"Dropdown-module__menuContainer--2zp0b"}},88:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(4),s=(r(i),n(3)),c=o(s),d=n(64),f=r(d),p=function(e){function t(){var n,o,r;a(this,t);for(var u=arguments.length,i=Array(u),s=0;s<u;s++)i[s]=arguments[s];return n=o=l(this,e.call.apply(e,[this].concat(i))),o.handleDocumentClick=function(e){o.menu&&e.target instanceof Node&&!o.menu.contains(e.target)&&o.props.hideDropdownMenu()},o.handleDocumentResize=function(){o.props.hideDropdownMenu()},r=n,l(o,r)}return u(t,e),t.prototype.componentDidMount=function(){document.addEventListener("click",this.handleDocumentClick,!1),window.addEventListener("resize",this.handleDocumentResize,!1),this.positionMenu()},t.prototype.componentWillUnmount=function(){document.removeEventListener("click",this.handleDocumentClick,!1),window.removeEventListener("resize",this.handleDocumentResize,!1)},t.prototype.positionMenu=function(){var e=this.menu;if(this.props.position&&e){var t=this.props.position,n=((t.bottom-t.top)/2,window),o=n.innerHeight,r=e.getBoundingClientRect();t.bottom>o-r.height?(e.style.bottom="24px",e.style.top="auto"):(e.style.top="24px",e.style.bottom="auto"),e.style.right="0px"}},t.prototype.render=function(){var e=this,t=this.props;return c.createElement("div",{className:f.default.menuContainer,ref:function(t){return e.menu=t},onClick:function(){return t.hideDropdownMenu()}},t.children)},t}(c.Component);t.default=p,e.exports=t.default},11:function(e,t){e.exports={menuList:"Menu-module__menuList--17KDT",header:"Menu-module__header--2rJ9W",header__title:"Menu-module__header__title--xJTam",header__subtitle:"Menu-module__header__subtitle--3oMx3",menuItem:"Menu-module__menuItem--DTW04",menuItem__Icon:"Menu-module__menuItem__Icon--eyPIs Icon-module__interactiveIconWrapper--1FGog",menuItem__Label:"Menu-module__menuItem__Label--23zrf",hoverIcon:"Menu-module__hoverIcon--3Sv0M",separator:"Menu-module__separator--nPcQC"}},48:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(3),a=o(r),l=n(11),u=o(l),i=function(e){return a.default.createElement("div",{className:u.default.header},a.default.createElement("span",{className:u.default.header__title},e.title),a.default.createElement("span",{className:u.default.header__subtitle},e.subtitle))};t.default=i,e.exports=t.default},49:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}t.__esModule=!0;var a=n(3),l=r(a),u=n(4),i=(o(u),n(5)),s=o(i),c=n(7),d=o(c),f=n(11),p=o(f),m=function(e){var t,n=e.icon,o=e.hoverIcon,r=e.children,a=e.action,u="string"==typeof a,i=l.createElement("span",{className:p.default.menuItem__Label},r,u&&"…"),c=n&&l.createElement("span",{className:p.default.menuItem__Icon},l.createElement(d.default,{icon:n,role:"presentation"})),f=u?a:null,m=u?null:a,h=(0,s.default)((t={},t[p.default.menuItem]=!0,t[p.default.hoverIcon]=n&&o,t));return l.createElement("a",{href:f,onClick:m,className:h},i,c)};t.default=m,e.exports=t.default},50:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}t.__esModule=!0;var a=n(3),l=r(a),u=n(4),i=(o(u),n(11)),s=o(i),c=function(e){return l.createElement("div",{className:s.default.menuList},e.children)};t.default=c,e.exports=t.default},51:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(3),a=o(r),l=n(4),u=(o(l),n(11)),i=o(u),s=function(){return a.default.createElement("hr",{className:i.default.separator})};t.default=s,e.exports=t.default},37:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.MenuSeparator=t.MenuItem=t.MenuHeader=t.MenuList=void 0;var r=n(50),a=o(r),l=n(48),u=o(l),i=n(49),s=o(i),c=n(51),d=o(c);t.MenuList=a.default,t.MenuHeader=u.default,t.MenuItem=s.default,t.MenuSeparator=d.default,t.default=a.default},211:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(37),a=n(141),l=(o(a),n(140)),u=o(l),i=n(66),s=o(i),c=n(15),d=o(c),f=n(3),p=o(f),m=p.default.createElement(r.MenuList,null,p.default.createElement(r.MenuHeader,{title:"My Dropdown Menu"}),p.default.createElement(r.MenuItem,{action:function(){return alert("print!")},icon:s.default,hoverIcon:!1},"Print (icon)"),p.default.createElement(r.MenuItem,{action:function(){return alert("print!")},icon:s.default,hoverIcon:!0},"Print (hover icon)"),p.default.createElement(r.MenuItem,{action:function(){return alert("print!")}},"Print (no icon)"),p.default.createElement(r.MenuSeparator,null),p.default.createElement(r.MenuItem,{action:"https://www.cultureamp.com/",icon:d.default,hoverIcon:!1},"Culture Amp (icon)"),p.default.createElement(r.MenuItem,{action:"https://www.cultureamp.com/",icon:d.default,hoverIcon:!0},"Culture Amp (hover icon)"),p.default.createElement(r.MenuItem,{action:"https://www.cultureamp.com/"},"Culture Amp (no icon)")),h=[{name:"Default (Meatball)",props:{children:m}},{name:"Kebab",props:{icon:u.default,children:m}},{name:"Label and Icon",props:{label:"Print",icon:s.default,children:m}},{name:"Text Only",props:{label:"Print",children:m}}];t.default=h,e.exports=t.default},227:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.className,n=e.style,o=e.elementProps;return s.default.createElement("div",{className:t,style:n},s.default.createElement("h1",a({id:"dropdown"},o.h1),"Dropdown"),s.default.createElement(h.default,o.IntroParagraph,s.default.createElement("p",o.p,"A simple dropdown menu to be used for opening links or triggering actions.",s.default.createElement("br",o.br),"Do not use this if the user is selecting a value, prefer a select box instead.")),s.default.createElement(p.default,a({component:b.default,presets:v.default},o.Demo)))}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=n(8),u=o(l),i=n(3),s=o(i),c=n(4),d=o(c),f=n(52),p=o(f),m=n(18),h=o(m),_=n(87),b=o(_),w=n(211),v=o(w);r.propTypes={className:d.default.string,style:d.default.object,elementProps:d.default.object},r.defaultProps={elementProps:{}};var M=function(){return s.default.createElement("div",{className:u.default.contentContainer},s.default.createElement(r,{elementProps:{h1:{className:u.default.h1},h2:{className:u.default.h2},h3:{className:u.default.h3},h4:{className:u.default.h4},h5:{className:u.default.h5},h6:{className:u.default.h6},p:{className:u.default.p},table:{className:u.default.table},ul:{className:u.default.ul},ol:{className:u.default.ol},li:{className:u.default.li},blockquote:{className:u.default.blockquote},hr:{className:u.default.hr},img:{className:u.default.img},a:{className:u.default.link}}}))};t.default=M},137:function(e,t,n){var o=n(1),r=n(2),a=new o({id:"ca-icon-ellipsis",use:"ca-icon-ellipsis-usage",viewBox:"0 0 20 20",content:'<symbol viewBox="0 0 20 20" id="ca-icon-ellipsis"><defs><path d="M4 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" id="ca-icon-ellipsis_a" /></defs><use fill="currentColor" xlink:href="#ca-icon-ellipsis_a" fill-rule="evenodd" /></symbol>'});r.add(a);e.exports=a},140:function(e,t,n){var o=n(1),r=n(2),a=new o({id:"ca-icon-kebab",use:"ca-icon-kebab-usage",viewBox:"0 0 20 20",content:'<symbol viewBox="0 0 20 20" id="ca-icon-kebab"><defs><path d="M-4 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM8 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM2 6C.9 6 0 6.9 0 8s.9 2 2 2 2-.9 2-2-.9-2-2-2z" id="ca-icon-kebab_a" /></defs><use fill="currentColor" transform="rotate(-90 7 5)" xlink:href="#ca-icon-kebab_a" fill-rule="evenodd" /></symbol>'});r.add(a);e.exports=a},141:function(e,t,n){var o=n(1),r=n(2),a=new o({id:"ca-icon-meatballs",use:"ca-icon-meatballs-usage",viewBox:"0 0 20 20",content:'<symbol viewBox="0 0 20 20" id="ca-icon-meatballs"><defs><path d="M4 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" id="ca-icon-meatballs_a" /></defs><use fill="currentColor" xlink:href="#ca-icon-meatballs_a" fill-rule="evenodd" /></symbol>'});r.add(a);e.exports=a},66:function(e,t,n){var o=n(1),r=n(2),a=new o({id:"ca-icon-print-white",use:"ca-icon-print-white-usage",viewBox:"0 0 20 20",content:'<symbol viewBox="0 0 20 20" id="ca-icon-print-white"><g fill="none" fill-rule="evenodd"><path d="M15.6 6.8H4.4A2.397 2.397 0 0 0 2 9.2V14h3.2v3.2h9.6V14H18V9.2c0-1.328-1.072-2.4-2.4-2.4zM5.2 6h9.6V2.8H5.2z" fill="currentColor" /><path d="M15.6 10c-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8.44 0 .8.36.8.8 0 .44-.36.8-.8.8zM6.8 15.6h6.4v-4H6.8z" fill="#FFF" /></g></symbol>'});r.add(a);e.exports=a}});
//# sourceMappingURL=component---src-pages-components-dropdown-index-md-415d1eb7d8713f8e5da5.js.map