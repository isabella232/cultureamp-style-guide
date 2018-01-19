webpackJsonp([77462191801791],{82:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){return Math.floor(Math.random()*(t-e)+e)}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c=n(3),u=a(c),d=n(105),f=a(d),m=240,p=Symbol("small"),h=Symbol("medium"),v=Symbol("large"),y=Symbol("random"),b=Symbol("full"),g=function(e){function t(){var n,a,r;s(this,t);for(var i=arguments.length,c=Array(i),u=0;u<i;u++)c[u]=arguments[u];return n=a=o(this,e.call.apply(e,[this].concat(c))),a.state={selectedPreset:0,assignedCanvasWidth:null,actualCanvasDimensions:{width:null,height:null}},a.onSelectPreset=function(e){var t=parseInt(e.target.value);a.setState(l({},a.state,{selectedPreset:t}))},a.onResize=function(){a.resizing||(a.resizing=!0,window.requestAnimationFrame(a.onResizeFrame))},a.onResizeFrame=function(){if(a.isResizeComplete())return void(a.resizing=!1);var e=a.canvas,t=e.clientWidth,n=e.clientHeight;a.setState(l({},a.state,{actualCanvasDimensions:{width:t,height:n}})),window.requestAnimationFrame(a.onResizeFrame)},r=n,o(a,r)}return r(t,e),t.prototype.render=function(){return u.default.createElement("div",{className:f.default.root},this.renderPresetList(),this.renderCanvas(),u.default.createElement("div",{className:f.default.controls},this.renderSizePresets(),this.renderCanvasDimensions(),this.renderComponentTypes()))},t.prototype.renderPresetList=function(){var e=this.props.presets,t=this.state.selectedPreset;return u.default.createElement("div",{className:f.default.selectPreset},u.default.createElement("select",{onChange:this.onSelectPreset,value:t},e.map(function(e,t){return u.default.createElement("option",{key:t,value:t},e.name)})))},t.prototype.renderCanvas=function(){var e=this,t=this.props.component;return u.default.createElement("div",{className:f.default.frame,ref:function(t){return e.frame=t}},u.default.createElement("div",{className:f.default.canvas,style:{width:this.state.assignedCanvasWidth},ref:function(t){return e.canvas=t}},u.default.createElement(t,this.selectedPresetProps())))},t.prototype.selectedPresetProps=function(){return this.props.presets[this.state.selectedPreset].props},t.prototype.renderSizePresets=function(){return u.default.createElement("div",{className:f.default.sizePresets},u.default.createElement("button",{onClick:this.onClickResizeTo(b)},"Full"),u.default.createElement("button",{onClick:this.onClickResizeTo(y)},"Random"),u.default.createElement("button",{onClick:this.onClickResizeTo(v)},"Large"),u.default.createElement("button",{onClick:this.onClickResizeTo(h)},"Medium"),u.default.createElement("button",{onClick:this.onClickResizeTo(p)},"Small"))},t.prototype.renderCanvasDimensions=function(){var e=this.state.actualCanvasDimensions,t=e.width,n=e.height;return t&&n&&u.default.createElement("div",{className:f.default.canvasDimensions},u.default.createElement("span",{className:f.default.dimension},t,"px")," × ",u.default.createElement("span",{className:f.default.dimension},n,"px")," viewport")},t.prototype.renderComponentTypes=function(){return u.default.createElement("div",{className:f.default.componentTypes},u.default.createElement("button",null,"React"))},t.prototype.componentDidMount=function(){window.addEventListener("resize",this.onResize),this.onResize()},t.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.onResize)},t.prototype.onClickResizeTo=function(e){var t=this;return function(n){return t.resizeToSize(e)}},t.prototype.resizeToSize=function(e){switch(e){case b:this.resizeTo();break;case y:this.resizeTo(i(m,this.maxCanvasWidth()));break;case v:this.resizeTo(i(800,1200));break;case h:this.resizeTo(i(500,800));break;case p:this.resizeTo(i(m,500))}},t.prototype.resizeTo=function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t=t&&Math.min(t,this.maxCanvasWidth()),null===this.state.assignedCanvasWidth&&t&&this.setAssignedCanvasWidth(this.maxCanvasWidth()),window.requestAnimationFrame(function(){e.setAssignedCanvasWidth(t)})},t.prototype.setAssignedCanvasWidth=function(e){this.setState(l({},this.state,{assignedCanvasWidth:e})),this.onResize()},t.prototype.maxCanvasWidth=function(){return this.frame.clientWidth},t.prototype.isResizeComplete=function(){var e=this.canvas,t=e.clientWidth,n=e.clientHeight,a=this.state,s=a.assignedCanvasWidth,o=a.actualCanvasDimensions,r=o.width,i=o.height;return t==r&&n==i&&(!s||t==s)},t}(u.default.Component);t.default=g,e.exports=t.default},105:function(e,t){e.exports={root:"src-components----Demo-module---root---3wwTo",frame:"src-components----Demo-module---frame---3OdyG",canvas:"src-components----Demo-module---canvas---KNZxY",selectPreset:"src-components----Demo-module---selectPreset---HqP0Z",controls:"src-components----Demo-module---controls---2Soui",dimension:"src-components----Demo-module---dimension---15b1z"}},253:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=n(132),o=a(s),r=[{name:"Meaningful",props:{icon:o.default,role:"img",title:"Warning"}},{name:"Presentational",props:{icon:o.default,role:"presentation"}},{name:"Inherit size",props:{icon:o.default,inheritSize:!0,role:"presentation"}}];t.default=r,e.exports=t.default},268:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.className,n=e.style,a=e.elementProps;return c.default.createElement("div",{className:t,style:n},c.default.createElement("h1",o({id:"icon"},a.h1),"Icon"),c.default.createElement(y.default,a.IntroParagraph,c.default.createElement("p",a.p,"An icon! To control its color, set color on a parent element, and it will be inherited.")),c.default.createElement(m.default,o({component:g.default,presets:z.default},a.Demo)),c.default.createElement(h.default,o({to:"/"},a.Link),"Go back to the homepage"))}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=n(12),i=a(r),l=n(3),c=a(l),u=n(4),d=a(u),f=n(82),m=a(f),p=n(13),h=a(p),v=n(45),y=a(v),b=n(17),g=a(b),C=n(253),z=a(C);s.propTypes={className:d.default.string,style:d.default.object,elementProps:d.default.object},s.defaultProps={elementProps:{}};var w=function(){return c.default.createElement("div",{className:i.default.contentContainer},c.default.createElement(s,{elementProps:{h1:{className:i.default.h1},h2:{className:i.default.h2},h3:{className:i.default.h3},p:{className:i.default.p},table:{className:i.default.table},blockquote:{className:i.default.blockquote},hr:{className:i.default.hr},img:{className:i.default.img},a:{className:i.default.link}}}))};t.default=w},132:function(e,t,n){var a=n(2),s=n(1),o=new a({id:"ca-icon-configure",use:"ca-icon-configure-usage",viewBox:"0 0 20 20",content:'<symbol viewBox="0 0 20 20" id="ca-icon-configure"><defs><path d="M17.537 4.683L14.37 7.85l-2.22-2.22 3.167-3.165c-1.747-.837-3.93-.546-5.385.909a4.71 4.71 0 0 0-1.055 5.021l-6.658 6.66c-.292.29-.292.763 0 1.018l1.71 1.71c.255.29.728.29 1.018 0l6.659-6.659a4.71 4.71 0 0 0 5.021-1.055c1.454-1.455 1.746-3.638.91-5.385" id="ca-icon-configure_a" /></defs><use fill="currentColor" xlink:href="#ca-icon-configure_a" fill-rule="evenodd" /></symbol>'});s.add(o);e.exports=o}});
//# sourceMappingURL=component---src-pages-atoms-icon-mdx-668a6ba31edc0d7f0f5b.js.map