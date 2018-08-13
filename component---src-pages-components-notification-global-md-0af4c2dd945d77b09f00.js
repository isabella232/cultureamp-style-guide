webpackJsonp([0x849f3b1aa8f5],{51:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=a(3),l=o(r),s=a(17),c=n(s),u=function(e){return l.createElement(c.default,i({style:"global",persistent:!1},e))};u.displayName="GlobalNotification",t.default=u,e.exports=t.default},52:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=a(3),l=o(r),s=a(17),c=n(s),u=function(e){return l.createElement(c.default,i({style:"inline"},e))};u.displayName="InlineNotification",u.defaultProps={persistent:!1},t.default=u,e.exports=t.default},53:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function i(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l=a(3),s=o(l),c=a(17),u=n(c),f=function(e){var t=e.hideCloseIcon,a=i(e,["hideCloseIcon"]),n=a.autohide&&t;return s.createElement(u.default,r({style:"toast",persistent:n},a))};f.displayName="ToastNotification",f.defaultProps={autohide:!1,hideCloseIcon:!1},t.default=f,e.exports=t.default},17:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=a(3),c=o(s),u=a(11),f=n(u),d=a(101),p=n(d),m=a(100),h=n(m),y=a(75),v=n(y),N=a(73),_=n(N),b=a(72),g=n(b),E=a(6),w=n(E),O=function(e){function t(){var a,n,o;i(this,t);for(var l=arguments.length,s=Array(l),c=0;c<l;c++)s[c]=arguments[c];return a=n=r(this,e.call.apply(e,[this].concat(s))),n.state={hidden:!0,removed:!1},o=a,r(n,o)}return l(t,e),t.prototype.componentDidMount=function(){var e=this;requestAnimationFrame(function(){return e.setState({hidden:!1})}),"toast"===this.props.style&&this.props.autohide&&setTimeout(function(){return e.hide()},5e3)},t.prototype.render=function(){var e=this;return this.state.removed?null:c.createElement("div",{className:this.className(),style:{marginTop:this.marginTop()},ref:function(t){return e.container=t},onTransitionEnd:function(t){return e.onTransitionEnd(t)},"data-automation-id":this.props.automationId},c.createElement("div",{className:g.default.icon},c.createElement(f.default,{icon:this.iconType(),role:"presentation",inheritSize:!0})),c.createElement("div",{className:g.default.textContainer},this.props.title&&c.createElement("h6",{className:g.default.title},this.props.title),c.createElement("p",{className:g.default.text},this.props.children)),!this.props.persistent&&c.createElement(M,{onClick:function(){return e.hide()}}))},t.prototype.className=function(){var e;return(0,w.default)(g.default.notification,g.default[this.props.type],g.default[this.props.style],(e={},e[g.default.hidden]=this.state.hidden,e))},t.prototype.marginTop=function(){if(this.state.hidden&&this.container){var e=this.container,t=e.getBoundingClientRect().height,a=getComputedStyle(e),n=parseInt(a.marginBottom,10);return-(t+n)+"px"}},t.prototype.onTransitionEnd=function(e){this.state.hidden&&"margin-top"===e.propertyName&&(this.setState({removed:!0}),this.props.onHide&&this.props.onHide())},t.prototype.iconType=function(){switch(this.props.type){case"affirmative":return p.default;case"negative":return h.default;case"cautionary":return h.default;case"informative":return v.default;default:return v.default}},t.prototype.hide=function(){this.setState({hidden:!0})},t}(c.Component);O.defaultProps={persistent:!1,autohide:!1};var M=function(e){var t=e.onClick;return c.createElement("button",{className:g.default.cancel,onClick:t},c.createElement("span",{className:g.default.cancelInner},c.createElement(f.default,{icon:_.default,role:"img",title:"close notification"})))};M.displayName="CancelButton",t.default=O,e.exports=t.default},72:function(e,t){e.exports={notification:"GenericNotification-module__notification--3m-jh",inline:"GenericNotification-module__inline--1j0No",toast:"GenericNotification-module__toast--aeMT1",global:"GenericNotification-module__global--3y-4J",affirmative:"GenericNotification-module__affirmative--Wpu_K",informative:"GenericNotification-module__informative--1qhej",cautionary:"GenericNotification-module__cautionary--11NZQ",negative:"GenericNotification-module__negative--28BR7",hidden:"GenericNotification-module__hidden--3cCt8",icon:"GenericNotification-module__icon--32nze",textContainer:"GenericNotification-module__textContainer--H-JwU",title:"GenericNotification-module__title--RI8W7",text:"GenericNotification-module__text--Uf1sw",cancel:"GenericNotification-module__cancel--2LKbS Icon-module__interactiveIconWrapper--1FGog",cancelInner:"GenericNotification-module__cancelInner--1_M2D"}},54:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.ToastNotification=t.InlineNotification=t.GlobalNotification=void 0;var o=a(51),i=n(o),r=a(52),l=n(r),s=a(53),c=n(s);t.GlobalNotification=i.default,t.InlineNotification=l.default,t.ToastNotification=c.default},245:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=a(54),i=a(3),r=n(i),l=[{name:"Affirmative",node:r.default.createElement(o.GlobalNotification,{type:"affirmative"},"New user data, imported by mackenzie@hooli.com has successfully uploaded. ",r.default.createElement("a",{href:"/"},"Manage users is now available"))},{name:"Informative",node:r.default.createElement(o.GlobalNotification,{type:"informative"},"New user data is currently being processed. We'll let you know when the process is completed. ",r.default.createElement("a",{href:"/"},"Manage users"))},{name:"Cautionary",node:r.default.createElement(o.GlobalNotification,{type:"cautionary"},"New user data, imported by mackenzie@hooli.com has uploaded with some minor issues. ",r.default.createElement("a",{href:"/"},"View issues"))},{name:"Negative",node:r.default.createElement(o.GlobalNotification,{type:"negative"},"Oh, snap! Some shit's just gone down. We're trying to fix it as quickly as possible. For assistance, please ",r.default.createElement("a",{href:"/"},"contact support"))},{name:"Multiple notifications",node:r.default.createElement("div",{style:{width:"100%"}},r.default.createElement(o.GlobalNotification,{type:"affirmative"},"New user data, imported by mackenzie@hooli.com has successfully uploaded. ",r.default.createElement("a",{href:"/"},"Manage users is now available")),r.default.createElement(o.GlobalNotification,{type:"informative"},"New user data is currently being processed. We'll let you know when the process is completed. ",r.default.createElement("a",{href:"/"},"Manage users")),r.default.createElement(o.GlobalNotification,{type:"cautionary"},"New user data, imported by mackenzie@hooli.com has uploaded with some minor issues. ",r.default.createElement("a",{href:"/"},"View issues")),r.default.createElement(o.GlobalNotification,{type:"negative"},"Oh, snap! Some shit's just gone down. We're trying to fix it as quickly as possible. For assistance, please"," ",r.default.createElement("a",{href:"/"},"contact support")))}];t.default=l,e.exports=t.default},269:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.className,a=e.style,n=e.elementProps;return c.default.createElement("div",{className:t,style:a},c.default.createElement("h1",i({id:"global-notification"},n.h1),"Global Notification"),c.default.createElement(h.default,n.IntroParagraph,c.default.createElement("p",n.p,"A global notification!"),c.default.createElement("p",n.p,"Available for both Elm and React.")),c.default.createElement(p.default,i({presets:v.default},n.Demo)))}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=a(7),l=n(r),s=a(3),c=n(s),u=a(4),f=n(u),d=a(18),p=n(d),m=a(10),h=n(m),y=a(245),v=n(y);o.propTypes={className:f.default.string,style:f.default.object,elementProps:f.default.object},o.defaultProps={elementProps:{}},o.displayName="MarkdownComponent";var N=function(){return c.default.createElement("div",{className:l.default.contentContainer},c.default.createElement(o,{elementProps:{h1:{className:l.default.h1},h2:{className:l.default.h2},h3:{className:l.default.h3},h4:{className:l.default.h4},h5:{className:l.default.h5},h6:{className:l.default.h6},p:{className:l.default.p},table:{className:l.default.table},ul:{className:l.default.ul},ol:{className:l.default.ol},li:{className:l.default.li},blockquote:{className:l.default.blockquote},hr:{className:l.default.hr},img:{className:l.default.img},a:{className:l.default.link}}}))};N.displayName="WrappedMarkdownComponent",t.default=N},75:function(e,t,a){var n=a(1),o=a(2),i=new n({id:"ca-icon-information",use:"ca-icon-information-usage",viewBox:"0 0 20 20",content:'<symbol viewBox="0 0 20 20" id="ca-icon-information"><defs><path d="M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm-.8 5.6h1.6V6H9.2v1.6zm0 6.4h1.6V9.2H9.2V14z" id="ca-icon-information_a" /></defs><use fill="currentColor" xlink:href="#ca-icon-information_a" fill-rule="evenodd" /></symbol>'});o.add(i);e.exports=i}});
//# sourceMappingURL=component---src-pages-components-notification-global-md-0af4c2dd945d77b09f00.js.map