webpackJsonp([3297111231494],{186:function(e,t,r){function a(e,t){return Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2)+Math.pow(e[2]-t[2],2)}var n=r(187),o={};for(var l in n)n.hasOwnProperty(l)&&(o[n[l]]=l);var i=e.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var s in i)if(i.hasOwnProperty(s)){if(!("channels"in i[s]))throw new Error("missing channels property: "+s);if(!("labels"in i[s]))throw new Error("missing channel labels property: "+s);if(i[s].labels.length!==i[s].channels)throw new Error("channel and label counts mismatch: "+s);var u=i[s].channels,c=i[s].labels;delete i[s].channels,delete i[s].labels,Object.defineProperty(i[s],"channels",{value:u}),Object.defineProperty(i[s],"labels",{value:c})}i.rgb.hsl=function(e){var t,r,a,n=e[0]/255,o=e[1]/255,l=e[2]/255,i=Math.min(n,o,l),s=Math.max(n,o,l),u=s-i;return s===i?t=0:n===s?t=(o-l)/u:o===s?t=2+(l-n)/u:l===s&&(t=4+(n-o)/u),t=Math.min(60*t,360),t<0&&(t+=360),a=(i+s)/2,r=s===i?0:a<=.5?u/(s+i):u/(2-s-i),[t,100*r,100*a]},i.rgb.hsv=function(e){var t,r,a,n=e[0],o=e[1],l=e[2],i=Math.min(n,o,l),s=Math.max(n,o,l),u=s-i;return r=0===s?0:u/s*1e3/10,s===i?t=0:n===s?t=(o-l)/u:o===s?t=2+(l-n)/u:l===s&&(t=4+(n-o)/u),t=Math.min(60*t,360),t<0&&(t+=360),a=s/255*1e3/10,[t,r,a]},i.rgb.hwb=function(e){var t=e[0],r=e[1],a=e[2],n=i.rgb.hsl(e)[0],o=1/255*Math.min(t,Math.min(r,a));return a=1-1/255*Math.max(t,Math.max(r,a)),[n,100*o,100*a]},i.rgb.cmyk=function(e){var t,r,a,n,o=e[0]/255,l=e[1]/255,i=e[2]/255;return n=Math.min(1-o,1-l,1-i),t=(1-o-n)/(1-n)||0,r=(1-l-n)/(1-n)||0,a=(1-i-n)/(1-n)||0,[100*t,100*r,100*a,100*n]},i.rgb.keyword=function(e){var t=o[e];if(t)return t;var r,l=1/0;for(var i in n)if(n.hasOwnProperty(i)){var s=n[i],u=a(e,s);u<l&&(l=u,r=i)}return r},i.keyword.rgb=function(e){return n[e]},i.rgb.xyz=function(e){var t=e[0]/255,r=e[1]/255,a=e[2]/255;t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92,r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92,a=a>.04045?Math.pow((a+.055)/1.055,2.4):a/12.92;var n=.4124*t+.3576*r+.1805*a,o=.2126*t+.7152*r+.0722*a,l=.0193*t+.1192*r+.9505*a;return[100*n,100*o,100*l]},i.rgb.lab=function(e){var t,r,a,n=i.rgb.xyz(e),o=n[0],l=n[1],s=n[2];return o/=95.047,l/=100,s/=108.883,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,l=l>.008856?Math.pow(l,1/3):7.787*l+16/116,s=s>.008856?Math.pow(s,1/3):7.787*s+16/116,t=116*l-16,r=500*(o-l),a=200*(l-s),[t,r,a]},i.hsl.rgb=function(e){var t,r,a,n,o,l=e[0]/360,i=e[1]/100,s=e[2]/100;if(0===i)return o=255*s,[o,o,o];r=s<.5?s*(1+i):s+i-s*i,t=2*s-r,n=[0,0,0];for(var u=0;u<3;u++)a=l+1/3*-(u-1),a<0&&a++,a>1&&a--,o=6*a<1?t+6*(r-t)*a:2*a<1?r:3*a<2?t+(r-t)*(2/3-a)*6:t,n[u]=255*o;return n},i.hsl.hsv=function(e){var t,r,a=e[0],n=e[1]/100,o=e[2]/100,l=n,i=Math.max(o,.01);return o*=2,n*=o<=1?o:2-o,l*=i<=1?i:2-i,r=(o+n)/2,t=0===o?2*l/(i+l):2*n/(o+n),[a,100*t,100*r]},i.hsv.rgb=function(e){var t=e[0]/60,r=e[1]/100,a=e[2]/100,n=Math.floor(t)%6,o=t-Math.floor(t),l=255*a*(1-r),i=255*a*(1-r*o),s=255*a*(1-r*(1-o));switch(a*=255,n){case 0:return[a,s,l];case 1:return[i,a,l];case 2:return[l,a,s];case 3:return[l,i,a];case 4:return[s,l,a];case 5:return[a,l,i]}},i.hsv.hsl=function(e){var t,r,a,n=e[0],o=e[1]/100,l=e[2]/100,i=Math.max(l,.01);return a=(2-o)*l,t=(2-o)*i,r=o*i,r/=t<=1?t:2-t,r=r||0,a/=2,[n,100*r,100*a]},i.hwb.rgb=function(e){var t,r,a,n,o=e[0]/360,l=e[1]/100,i=e[2]/100,s=l+i;s>1&&(l/=s,i/=s),t=Math.floor(6*o),r=1-i,a=6*o-t,0!==(1&t)&&(a=1-a),n=l+a*(r-l);var u,c,h;switch(t){default:case 6:case 0:u=r,c=n,h=l;break;case 1:u=n,c=r,h=l;break;case 2:u=l,c=r,h=n;break;case 3:u=l,c=n,h=r;break;case 4:u=n,c=l,h=r;break;case 5:u=r,c=l,h=n}return[255*u,255*c,255*h]},i.cmyk.rgb=function(e){var t,r,a,n=e[0]/100,o=e[1]/100,l=e[2]/100,i=e[3]/100;return t=1-Math.min(1,n*(1-i)+i),r=1-Math.min(1,o*(1-i)+i),a=1-Math.min(1,l*(1-i)+i),[255*t,255*r,255*a]},i.xyz.rgb=function(e){var t,r,a,n=e[0]/100,o=e[1]/100,l=e[2]/100;return t=3.2406*n+o*-1.5372+l*-.4986,r=n*-.9689+1.8758*o+.0415*l,a=.0557*n+o*-.204+1.057*l,t=t>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t,r=r>.0031308?1.055*Math.pow(r,1/2.4)-.055:12.92*r,a=a>.0031308?1.055*Math.pow(a,1/2.4)-.055:12.92*a,t=Math.min(Math.max(0,t),1),r=Math.min(Math.max(0,r),1),a=Math.min(Math.max(0,a),1),[255*t,255*r,255*a]},i.xyz.lab=function(e){var t,r,a,n=e[0],o=e[1],l=e[2];return n/=95.047,o/=100,l/=108.883,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,l=l>.008856?Math.pow(l,1/3):7.787*l+16/116,t=116*o-16,r=500*(n-o),a=200*(o-l),[t,r,a]},i.lab.xyz=function(e){var t,r,a,n=e[0],o=e[1],l=e[2];r=(n+16)/116,t=o/500+r,a=r-l/200;var i=Math.pow(r,3),s=Math.pow(t,3),u=Math.pow(a,3);return r=i>.008856?i:(r-16/116)/7.787,t=s>.008856?s:(t-16/116)/7.787,a=u>.008856?u:(a-16/116)/7.787,t*=95.047,r*=100,a*=108.883,[t,r,a]},i.lab.lch=function(e){var t,r,a,n=e[0],o=e[1],l=e[2];return t=Math.atan2(l,o),r=360*t/2/Math.PI,r<0&&(r+=360),a=Math.sqrt(o*o+l*l),[n,a,r]},i.lch.lab=function(e){var t,r,a,n=e[0],o=e[1],l=e[2];return a=l/360*2*Math.PI,t=o*Math.cos(a),r=o*Math.sin(a),[n,t,r]},i.rgb.ansi16=function(e){var t=e[0],r=e[1],a=e[2],n=1 in arguments?arguments[1]:i.rgb.hsv(e)[2];if(n=Math.round(n/50),0===n)return 30;var o=30+(Math.round(a/255)<<2|Math.round(r/255)<<1|Math.round(t/255));return 2===n&&(o+=60),o},i.hsv.ansi16=function(e){return i.rgb.ansi16(i.hsv.rgb(e),e[2])},i.rgb.ansi256=function(e){var t=e[0],r=e[1],a=e[2];if(t===r&&r===a)return t<8?16:t>248?231:Math.round((t-8)/247*24)+232;var n=16+36*Math.round(t/255*5)+6*Math.round(r/255*5)+Math.round(a/255*5);return n},i.ansi16.rgb=function(e){var t=e%10;if(0===t||7===t)return e>50&&(t+=3.5),t=t/10.5*255,[t,t,t];var r=.5*(~~(e>50)+1),a=(1&t)*r*255,n=(t>>1&1)*r*255,o=(t>>2&1)*r*255;return[a,n,o]},i.ansi256.rgb=function(e){if(e>=232){var t=10*(e-232)+8;return[t,t,t]}e-=16;var r,a=Math.floor(e/36)/5*255,n=Math.floor((r=e%36)/6)/5*255,o=r%6/5*255;return[a,n,o]},i.rgb.hex=function(e){var t=((255&Math.round(e[0]))<<16)+((255&Math.round(e[1]))<<8)+(255&Math.round(e[2])),r=t.toString(16).toUpperCase();return"000000".substring(r.length)+r},i.hex.rgb=function(e){var t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];var r=t[0];3===t[0].length&&(r=r.split("").map(function(e){return e+e}).join(""));var a=parseInt(r,16),n=a>>16&255,o=a>>8&255,l=255&a;return[n,o,l]},i.rgb.hcg=function(e){var t,r,a=e[0]/255,n=e[1]/255,o=e[2]/255,l=Math.max(Math.max(a,n),o),i=Math.min(Math.min(a,n),o),s=l-i;return t=s<1?i/(1-s):0,r=s<=0?0:l===a?(n-o)/s%6:l===n?2+(o-a)/s:4+(a-n)/s+4,r/=6,r%=1,[360*r,100*s,100*t]},i.hsl.hcg=function(e){var t=e[1]/100,r=e[2]/100,a=1,n=0;return a=r<.5?2*t*r:2*t*(1-r),a<1&&(n=(r-.5*a)/(1-a)),[e[0],100*a,100*n]},i.hsv.hcg=function(e){var t=e[1]/100,r=e[2]/100,a=t*r,n=0;return a<1&&(n=(r-a)/(1-a)),[e[0],100*a,100*n]},i.hcg.rgb=function(e){var t=e[0]/360,r=e[1]/100,a=e[2]/100;if(0===r)return[255*a,255*a,255*a];var n=[0,0,0],o=t%1*6,l=o%1,i=1-l,s=0;switch(Math.floor(o)){case 0:n[0]=1,n[1]=l,n[2]=0;break;case 1:n[0]=i,n[1]=1,n[2]=0;break;case 2:n[0]=0,n[1]=1,n[2]=l;break;case 3:n[0]=0,n[1]=i,n[2]=1;break;case 4:n[0]=l,n[1]=0,n[2]=1;break;default:n[0]=1,n[1]=0,n[2]=i}return s=(1-r)*a,[255*(r*n[0]+s),255*(r*n[1]+s),255*(r*n[2]+s)]},i.hcg.hsv=function(e){var t=e[1]/100,r=e[2]/100,a=t+r*(1-t),n=0;return a>0&&(n=t/a),[e[0],100*n,100*a]},i.hcg.hsl=function(e){var t=e[1]/100,r=e[2]/100,a=r*(1-t)+.5*t,n=0;return a>0&&a<.5?n=t/(2*a):a>=.5&&a<1&&(n=t/(2*(1-a))),[e[0],100*n,100*a]},i.hcg.hwb=function(e){var t=e[1]/100,r=e[2]/100,a=t+r*(1-t);return[e[0],100*(a-t),100*(1-a)]},i.hwb.hcg=function(e){var t=e[1]/100,r=e[2]/100,a=1-r,n=a-t,o=0;return n<1&&(o=(a-n)/(1-n)),[e[0],100*n,100*o]},i.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},i.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},i.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},i.gray.hsl=i.gray.hsv=function(e){return[0,0,e[0]]},i.gray.hwb=function(e){return[0,100,e[0]]},i.gray.cmyk=function(e){return[0,0,0,e[0]]},i.gray.lab=function(e){return[e[0],0,0]},i.gray.hex=function(e){var t=255&Math.round(e[0]/100*255),r=(t<<16)+(t<<8)+t,a=r.toString(16).toUpperCase();return"000000".substring(a.length)+a},i.rgb.gray=function(e){var t=(e[0]+e[1]+e[2])/3;return[t/255*100]}},321:function(e,t,r){function a(e){var t=function(t){return void 0===t||null===t?t:(arguments.length>1&&(t=Array.prototype.slice.call(arguments)),e(t))};return"conversion"in e&&(t.conversion=e.conversion),t}function n(e){var t=function(t){if(void 0===t||null===t)return t;arguments.length>1&&(t=Array.prototype.slice.call(arguments));var r=e(t);if("object"==typeof r)for(var a=r.length,n=0;n<a;n++)r[n]=Math.round(r[n]);return r};return"conversion"in e&&(t.conversion=e.conversion),t}var o=r(186),l=r(322),i={},s=Object.keys(o);s.forEach(function(e){i[e]={},Object.defineProperty(i[e],"channels",{value:o[e].channels}),Object.defineProperty(i[e],"labels",{value:o[e].labels});var t=l(e),r=Object.keys(t);r.forEach(function(r){var o=t[r];i[e][r]=n(o),i[e][r].raw=a(o)})}),e.exports=i},322:function(e,t,r){function a(){for(var e={},t=Object.keys(i),r=t.length,a=0;a<r;a++)e[t[a]]={distance:-1,parent:null};return e}function n(e){var t=a(),r=[e];for(t[e].distance=0;r.length;)for(var n=r.pop(),o=Object.keys(i[n]),l=o.length,s=0;s<l;s++){var u=o[s],c=t[u];c.distance===-1&&(c.distance=t[n].distance+1,c.parent=n,r.unshift(u))}return t}function o(e,t){return function(r){return t(e(r))}}function l(e,t){for(var r=[t[e].parent,e],a=i[t[e].parent][e],n=t[e].parent;t[n].parent;)r.unshift(t[n].parent),a=o(i[t[n].parent][n],a),n=t[n].parent;return a.conversion=r,a}var i=r(186);e.exports=function(e){for(var t=n(e),r={},a=Object.keys(t),o=a.length,i=0;i<o;i++){var s=a[i],u=t[s];null!==u.parent&&(r[s]=l(s,t))}return r}},187:function(e,t){"use strict";e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},323:function(e,t,r){function a(e,t,r){return Math.min(Math.max(t,e),r)}function n(e){var t=e.toString(16).toUpperCase();return t.length<2?"0"+t:t}var o=r(187),l=r(630),i={};for(var s in o)o.hasOwnProperty(s)&&(i[o[s]]=s);var u=e.exports={to:{}};u.get=function(e){var t,r,a=e.substring(0,3).toLowerCase();switch(a){case"hsl":t=u.get.hsl(e),r="hsl";break;case"hwb":t=u.get.hwb(e),r="hwb";break;default:t=u.get.rgb(e),r="rgb"}return t?{model:r,value:t}:null},u.get.rgb=function(e){if(!e)return null;var t,r,n,l=/^#([a-f0-9]{3,4})$/i,i=/^#([a-f0-9]{6})([a-f0-9]{2})?$/i,s=/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,u=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,c=/(\D+)/,h=[0,0,0,1];if(t=e.match(i)){for(n=t[2],t=t[1],r=0;r<3;r++){var f=2*r;h[r]=parseInt(t.slice(f,f+2),16)}n&&(h[3]=Math.round(parseInt(n,16)/255*100)/100)}else if(t=e.match(l)){for(t=t[1],n=t[3],r=0;r<3;r++)h[r]=parseInt(t[r]+t[r],16);n&&(h[3]=Math.round(parseInt(n+n,16)/255*100)/100)}else if(t=e.match(s)){for(r=0;r<3;r++)h[r]=parseInt(t[r+1],0);t[4]&&(h[3]=parseFloat(t[4]))}else{if(!(t=e.match(u)))return(t=e.match(c))?"transparent"===t[1]?[0,0,0,0]:(h=o[t[1]])?(h[3]=1,h):null:null;for(r=0;r<3;r++)h[r]=Math.round(2.55*parseFloat(t[r+1]));t[4]&&(h[3]=parseFloat(t[4]))}for(r=0;r<3;r++)h[r]=a(h[r],0,255);return h[3]=a(h[3],0,1),h},u.get.hsl=function(e){if(!e)return null;var t=/^hsla?\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,r=e.match(t);if(r){var n=parseFloat(r[4]),o=(parseFloat(r[1])%360+360)%360,l=a(parseFloat(r[2]),0,100),i=a(parseFloat(r[3]),0,100),s=a(isNaN(n)?1:n,0,1);return[o,l,i,s]}return null},u.get.hwb=function(e){if(!e)return null;var t=/^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,r=e.match(t);if(r){var n=parseFloat(r[4]),o=(parseFloat(r[1])%360+360)%360,l=a(parseFloat(r[2]),0,100),i=a(parseFloat(r[3]),0,100),s=a(isNaN(n)?1:n,0,1);return[o,l,i,s]}return null},u.to.hex=function(){var e=l(arguments);return"#"+n(e[0])+n(e[1])+n(e[2])+(e[3]<1?n(Math.round(255*e[3])):"")},u.to.rgb=function(){var e=l(arguments);return e.length<4||1===e[3]?"rgb("+Math.round(e[0])+", "+Math.round(e[1])+", "+Math.round(e[2])+")":"rgba("+Math.round(e[0])+", "+Math.round(e[1])+", "+Math.round(e[2])+", "+e[3]+")"},u.to.rgb.percent=function(){var e=l(arguments),t=Math.round(e[0]/255*100),r=Math.round(e[1]/255*100),a=Math.round(e[2]/255*100);return e.length<4||1===e[3]?"rgb("+t+"%, "+r+"%, "+a+"%)":"rgba("+t+"%, "+r+"%, "+a+"%, "+e[3]+")"},u.to.hsl=function(){var e=l(arguments);return e.length<4||1===e[3]?"hsl("+e[0]+", "+e[1]+"%, "+e[2]+"%)":"hsla("+e[0]+", "+e[1]+"%, "+e[2]+"%, "+e[3]+")"},u.to.hwb=function(){var e=l(arguments),t="";return e.length>=4&&1!==e[3]&&(t=", "+e[3]),"hwb("+e[0]+", "+e[1]+"%, "+e[2]+"%"+t+")"},u.to.keyword=function(e){return i[e.slice(0,3)]}},188:function(e,t,r){"use strict";function a(e,t){if(!(this instanceof a))return new a(e,t);if(t&&t in d&&(t=null),t&&!(t in h))throw new Error("Unknown model: "+t);var r,n;if(e)if(e instanceof a)this.model=e.model,this.color=e.color.slice(),this.valpha=e.valpha;else if("string"==typeof e){var o=c.get(e);if(null===o)throw new Error("Unable to parse color from string: "+e);this.model=o.model,n=h[this.model].channels,this.color=o.value.slice(0,n),this.valpha="number"==typeof o.value[n]?o.value[n]:1}else if(e.length){this.model=t||"rgb",n=h[this.model].channels;var l=f.call(e,0,n);this.color=u(l,n),this.valpha="number"==typeof e[n]?e[n]:1}else if("number"==typeof e)e&=16777215,this.model="rgb",this.color=[e>>16&255,e>>8&255,255&e],this.valpha=1;else{this.valpha=1;var i=Object.keys(e);"alpha"in e&&(i.splice(i.indexOf("alpha"),1),this.valpha="number"==typeof e.alpha?e.alpha:0);var s=i.sort().join("");if(!(s in p))throw new Error("Unable to parse color from object: "+JSON.stringify(e));this.model=p[s];var g=h[this.model].labels,b=[];for(r=0;r<g.length;r++)b.push(e[g[r]]);this.color=u(b)}else this.model="rgb",this.color=[0,0,0],this.valpha=1;if(m[this.model])for(n=h[this.model].channels,r=0;r<n;r++){var v=m[this.model][r];v&&(this.color[r]=v(this.color[r]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}function n(e,t){return Number(e.toFixed(t))}function o(e){return function(t){return n(t,e)}}function l(e,t,r){return e=Array.isArray(e)?e:[e],e.forEach(function(e){(m[e]||(m[e]=[]))[t]=r}),e=e[0],function(a){var n;return arguments.length?(r&&(a=r(a)),n=this[e](),n.color[t]=a,n):(n=this[e]().color[t],r&&(n=r(n)),n)}}function i(e){return function(t){return Math.max(0,Math.min(e,t))}}function s(e){return Array.isArray(e)?e:[e]}function u(e,t){for(var r=0;r<t;r++)"number"!=typeof e[r]&&(e[r]=0);return e}var c=r(323),h=r(321),f=[].slice,d=["keyword","gray","hex"],p={};Object.keys(h).forEach(function(e){p[f.call(h[e].labels).sort().join("")]=e});var m={};a.prototype={toString:function(){return this.string()},toJSON:function(){return this[this.model]()},string:function(e){var t=this.model in c.to?this:this.rgb();t=t.round("number"==typeof e?e:1);var r=1===t.valpha?t.color:t.color.concat(this.valpha);return c.to[t.model](r)},percentString:function(e){var t=this.rgb().round("number"==typeof e?e:1),r=1===t.valpha?t.color:t.color.concat(this.valpha);return c.to.rgb.percent(r)},array:function(){return 1===this.valpha?this.color.slice():this.color.concat(this.valpha)},object:function(){for(var e={},t=h[this.model].channels,r=h[this.model].labels,a=0;a<t;a++)e[r[a]]=this.color[a];return 1!==this.valpha&&(e.alpha=this.valpha),e},unitArray:function(){var e=this.rgb().color;return e[0]/=255,e[1]/=255,e[2]/=255,1!==this.valpha&&e.push(this.valpha),e},unitObject:function(){var e=this.rgb().object();return e.r/=255,e.g/=255,e.b/=255,1!==this.valpha&&(e.alpha=this.valpha),e},round:function(e){return e=Math.max(e||0,0),new a(this.color.map(o(e)).concat(this.valpha),this.model)},alpha:function(e){return arguments.length?new a(this.color.concat(Math.max(0,Math.min(1,e))),this.model):this.valpha},red:l("rgb",0,i(255)),green:l("rgb",1,i(255)),blue:l("rgb",2,i(255)),hue:l(["hsl","hsv","hsl","hwb","hcg"],0,function(e){return(e%360+360)%360}),saturationl:l("hsl",1,i(100)),lightness:l("hsl",2,i(100)),saturationv:l("hsv",1,i(100)),value:l("hsv",2,i(100)),chroma:l("hcg",1,i(100)),gray:l("hcg",2,i(100)),white:l("hwb",1,i(100)),wblack:l("hwb",2,i(100)),cyan:l("cmyk",0,i(100)),magenta:l("cmyk",1,i(100)),yellow:l("cmyk",2,i(100)),black:l("cmyk",3,i(100)),x:l("xyz",0,i(100)),y:l("xyz",1,i(100)),z:l("xyz",2,i(100)),l:l("lab",0,i(100)),a:l("lab",1),b:l("lab",2),keyword:function(e){return arguments.length?new a(e):h[this.model].keyword(this.color)},hex:function(e){return arguments.length?new a(e):c.to.hex(this.rgb().round().color)},rgbNumber:function(){var e=this.rgb().color;return(255&e[0])<<16|(255&e[1])<<8|255&e[2]},luminosity:function(){for(var e=this.rgb().color,t=[],r=0;r<e.length;r++){var a=e[r]/255;t[r]=a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4)}return.2126*t[0]+.7152*t[1]+.0722*t[2]},contrast:function(e){var t=this.luminosity(),r=e.luminosity();return t>r?(t+.05)/(r+.05):(r+.05)/(t+.05)},level:function(e){var t=this.contrast(e);return t>=7.1?"AAA":t>=4.5?"AA":""},isDark:function(){var e=this.rgb().color,t=(299*e[0]+587*e[1]+114*e[2])/1e3;return t<128},isLight:function(){return!this.isDark()},negate:function(){for(var e=this.rgb(),t=0;t<3;t++)e.color[t]=255-e.color[t];return e},lighten:function(e){var t=this.hsl();return t.color[2]+=t.color[2]*e,t},darken:function(e){var t=this.hsl();return t.color[2]-=t.color[2]*e,t},saturate:function(e){var t=this.hsl();return t.color[1]+=t.color[1]*e,t},desaturate:function(e){var t=this.hsl();return t.color[1]-=t.color[1]*e,t},whiten:function(e){var t=this.hwb();return t.color[1]+=t.color[1]*e,t},blacken:function(e){var t=this.hwb();return t.color[2]+=t.color[2]*e,t},grayscale:function(){var e=this.rgb().color,t=.3*e[0]+.59*e[1]+.11*e[2];return a.rgb(t,t,t)},fade:function(e){return this.alpha(this.valpha-this.valpha*e)},opaquer:function(e){return this.alpha(this.valpha+this.valpha*e)},rotate:function(e){var t=this.hsl(),r=t.color[0];return r=(r+e)%360,r=r<0?360+r:r,t.color[0]=r,t},mix:function(e,t){var r=e.rgb(),n=this.rgb(),o=void 0===t?.5:t,l=2*o-1,i=r.alpha()-n.alpha(),s=((l*i===-1?l:(l+i)/(1+l*i))+1)/2,u=1-s;return a.rgb(s*r.red()+u*n.red(),s*r.green()+u*n.green(),s*r.blue()+u*n.blue(),r.alpha()*o+n.alpha()*(1-o))}},Object.keys(h).forEach(function(e){if(d.indexOf(e)===-1){var t=h[e].channels;a.prototype[e]=function(){if(this.model===e)return new a(this);if(arguments.length)return new a(arguments,e);var r="number"==typeof arguments[t]?t:this.valpha;return new a(s(h[this.model][e].raw(this.color)).concat(r),e)},a[e]=function(r){return"number"==typeof r&&(r=u(f.call(arguments),t)),new a(r,e)}}}),e.exports=a},539:function(e,t){"use strict";e.exports=function(e){return!!e&&(e instanceof Array||Array.isArray(e)||e.length>=0&&e.splice instanceof Function)}},630:function(e,t,r){"use strict";var a=r(539),n=Array.prototype.concat,o=Array.prototype.slice,l=e.exports=function(e){for(var t=[],r=0,l=e.length;r<l;r++){var i=e[r];a(i)?t=n.call(t,o.call(i)):t.push(i)}return t};l.wrap=function(e){return function(){return e(l(arguments))}}},732:function(e,t){function r(e){var t,r,a,n=Object.create(rgbClass);if("string"!=typeof e)throw new Error("must use string");return t=parseInt(e.slice(1,3),16),r=parseInt(e.slice(3,5),16),a=parseInt(e.slice(5,7),16),n.r=t,n.g=r,n.b=a,n}function a(e){var t=Object.create(rgbClass);return t.r=e.r,t.g=e.g,t.b=e.b,e}function n(e){var t,r=Object.create(rgbClass);for(t in e)e.hasOwnProperty(t)&&(r[t]=parseFloat(e[t]/255,10));return r}function o(e){var t,r=Object.create(rgbClass),a=0;for(t in e)e.hasOwnProperty(t)&&(a=parseFloat(e[t],10),a<=.03928?r[t]=a/12.92:r[t]=Math.pow((a+.055)/1.055,2.4));return r}function l(e){return.2126*e.r+.7152*e.g+.0722*e.b}rgbClass={toString:function(){return"<r: "+this.r+" g: "+this.g+" b: "+this.b+" >"}},t.relativeLuminance=function(e){var t,i,s,u=0;return t="string"==typeof e?r(e):a(e),i=n(t),s=o(i),u=l(s)}},237:function(e,t,r){var a=r(732),n=3,o=4.5,l=4.5,i=7,s=18,u={toString:function(){return"< WCAG-AA: "+(this.WCAG_AA?"pass":"fail")+" WCAG-AAA: "+(this.WCAG_AAA?"pass":"fail")+" >"}},c=function(e,t){var r,n,o,l,i;return n=a.relativeLuminance(e),o=a.relativeLuminance(t),n>=o?(l=n,i=o):(l=o,i=n),r=(l+.05)/(i+.05)},h=function(e,t,r){var a=0,h=Object.create(u),f=r||12;return a=c(e,t),f>=s?(h.WCAG_AA=a>=n,h.WCAG_AAA=a>=l):(h.WCAG_AA=a>=o,h.WCAG_AAA=a>=i),h};e.exports={getContrastRatio:c,verifyContrastRatio:h}},87:function(e,t){e.exports={colorCard:"ColorCard-module__colorCard--mHcIF Card-module__card--1WbKx",cardToggleButton:"ColorCard-module__cardToggleButton--329w6 HtmlContent-module__buttonReset--dwqWH Icon-module__interactiveIconWrapper--1FGog",toggleButtonLabel:"ColorCard-module__toggleButtonLabel--27nrM",toggleIconWrapper:"ColorCard-module__toggleIconWrapper--1FCFu",subheader:"ColorCard-module__subheader--1ADDx",tile:"ColorCard-module__tile--1wZXP",dark:"ColorCard-module__dark--374wt",small:"ColorCard-module__small--J3K0W",large:"ColorCard-module__large--3hzBl",colorBlock:"ColorCard-module__colorBlock--6gJ7q undefined",colorBlockHalf:"ColorCard-module__colorBlockHalf--3Y_Go",whiteText:"ColorCard-module__whiteText--3G_H_",accessibilityIcon:"ColorCard-module__accessibilityIcon--3fBrT",kebabContainer:"ColorCard-module__kebabContainer--3Lo5v",colorBlockLabel:"ColorCard-module__colorBlockLabel--2GIgI",dropdownItem:"ColorCard-module__dropdownItem--S1TI-"}},304:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){return e.mix((0,c.default)("#ffffff"),t/100)}function o(e,t){return e.mix((0,c.default)("#000000"),t/100)}function l(e){var t=p.default.getContrastRatio(e.hex(),"#ffffff"),r=p.default.getContrastRatio(e.hex(),C.default.ink.hex());return t>r}t.__esModule=!0;var i=r(1),s=a(i),u=r(188),c=a(u),h=r(8),f=a(h),d=r(237),p=a(d),m=r(305),g=a(m),b=r(182),v=a(b),y=r(87),w=a(y),k=r(115),C=a(k),M=function(e){var t,r=e.colorName,a=e.amount,i=e.showContrast,u=!1,c="100%",h="$ca-palette-"+r.toLowerCase(),d=C.default[r.toLowerCase()];if(0!=a){var p=Math.abs(a);a>0?(d=n(d,p),h="add-tint("+h+", "+p+"%)",c="+"+p+"% White"):(d=o(d,p),h="add-shade("+h+", "+p+"%)",c="+"+p+"% Black"),u=!0}var m=l(d),b=(0,f.default)((t={},t[w.default.colorBlock]=!0,t[w.default.colorBlockHalf]=u,t[w.default.whiteText]=m,t)),y=r+" "+c,k=i?[s.default.createElement(v.default,{color:d,name:y,text:"White",size:12,key:"white small"}),s.default.createElement(v.default,{color:d,name:y,text:"White",size:18,key:"white large"}),s.default.createElement(v.default,{color:d,name:y,text:"Ink",size:12,key:"ink small"}),s.default.createElement(v.default,{color:d,name:y,text:"Ink",size:18,key:"ink large"})]:s.default.createElement(g.default,{bgColor:d,sassVar:h});return s.default.createElement("div",{key:d.rgb().string(),className:b,style:{background:d.rgb().string()}},s.default.createElement("span",{className:w.default.colorBlockLabel},c),k)};M.displayName="ColorBlock",t.default=M,e.exports=t.default},305:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=r(1),o=a(n),l=r(33),i=a(l),s=r(28),u=r(87),c=a(u),h=r(167),f=a(h),d=function(e){var t=e.bgColor,r=e.sassVar,a=t.hex(),n=t.rgb().array().map(Math.round).join(", "),l=t.cmyk().array().map(Math.round).join(", ");return o.default.createElement("span",{className:c.default.kebabContainer},o.default.createElement(i.default,null,o.default.createElement(s.MenuList,null,o.default.createElement(s.MenuHeader,{title:"Color Values"}),o.default.createElement(s.MenuItem,p("SASS",r)),o.default.createElement(s.MenuItem,p("HEX",a)),o.default.createElement(s.MenuItem,p("RGB",n)),o.default.createElement(s.MenuItem,p("CMYK",l)))))};d.displayName="ColorBlockKebab";var p=function(e,t){var r=void 0;return{children:o.default.createElement("div",{className:c.default.dropdownItem,title:"Copy to clipboard"},o.default.createElement("strong",null,e),o.default.createElement("input",{type:"text",value:t,readOnly:!0,ref:function(e){return r=e}})),action:function(){r&&(r.select(),document.execCommand("copy"))},icon:f.default,hoverIcon:!0}};t.default=d,e.exports=t.default},306:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=r(1),s=a(i),u=r(20),c=a(u),h=r(165),f=a(h),d=r(164),p=a(d),m=r(87),g=a(m),b=r(304),v=a(b),y=r(115),w=a(y),k=r(182),C=function(e){function t(){var r,a,l;n(this,t);for(var i=arguments.length,s=Array(i),u=0;u<i;u++)s[u]=arguments[u];return r=a=o(this,e.call.apply(e,[this].concat(s))),a.state={expanded:!1},l=r,o(a,l)}return l(t,e),t.prototype.render=function(){var e=this.props.name;g.default[e.toLowerCase()];return s.default.createElement("div",null,s.default.createElement("div",{className:g.default.colorCard},s.default.createElement("h3",null,this.renderColorTitleAndToggle()),this.renderSubtitle(),this.renderColorBlocks(this.state.expanded)))},t.prototype.renderColorTitleAndToggle=function(){var e=this;if(!this.isExpandable())return s.default.createElement("span",null,this.props.name);var t=this.state.expanded?f.default:p.default,r=this.state.expanded?"Collapse Color":"Expand Color";return s.default.createElement("button",{className:g.default.cardToggleButton,onClick:function(){return e.toggleOpen()},onMouseDown:function(e){return e.preventDefault()}},s.default.createElement("span",{className:g.default.toggleButtonLabel},this.props.name),s.default.createElement("span",{className:g.default.toggleIconWrapper},s.default.createElement(c.default,{icon:t,role:"img",title:r})))},t.prototype.isExpandable=function(){return"Stone"!==this.props.name},t.prototype.toggleOpen=function(){this.setState({expanded:!this.state.expanded})},t.prototype.renderSubtitle=function(){var e=this.props.showAccessibility,t=e?"WCAG 2.0 AA":"Tint & Shade",r=w.default[this.props.name.toLowerCase()];return s.default.createElement("div",{className:g.default.subheader},s.default.createElement("h4",null,t),e&&(0,k.renderContrastHeaderIcons)(r))},t.prototype.renderColorBlocks=function(e){var t=this,r=this.props.name,a=e&&this.isExpandable()?[90,70,50,30,10,0,-10,-20,-30,-40,-50]:[0];return a.map(function(e){return s.default.createElement(v.default,{key:e,colorName:r,amount:e,showContrast:t.props.showAccessibility})})},t}(s.default.Component);C.displayName="ColorCard",t.default=C,e.exports=t.default},307:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},s=r(1),u=a(s),c=r(15),h=r(216),f=a(h),d=r(306),p=a(d),m=function(e){function t(){var r,a,l;n(this,t);for(var i=arguments.length,s=Array(i),u=0;u<i;u++)s[u]=arguments[u];return r=a=o(this,e.call.apply(e,[this].concat(s))),a.state={showAccessibility:{}},l=r,o(a,l)}return l(t,e),t.prototype.render=function(){return u.default.createElement("div",{
className:f.default.cardContainer},this.renderColorSection("Primary Colors",["Coral","Paper","Ink"]),this.renderColorSection("Secondary Colors",["Seedling","Ocean","Lapis","Wisteria","Peach","Yuzu"]),this.renderColorSection("Tertiary Colors",["Positive-Delta","Negative-Delta","Stone"]))},t.prototype.renderColorSection=function(e,t){var r=this,a=this.state.showAccessibility[e];return[u.default.createElement("div",{className:f.default.gridHeader,key:e},u.default.createElement("h2",{className:f.default.sectionHeader},e),u.default.createElement("div",{className:f.default.toggleAccessibilityButton},u.default.createElement(c.ActionLink,{action:function(){return r.toggleAccessibility(e)}},a?"Hide Contrast Checker":"Show Contrast Checker"))),t.map(function(e){return u.default.createElement(p.default,{name:e,key:e,showAccessibility:a})})]},t.prototype.toggleAccessibility=function(e){var t,r=this.state.showAccessibility[e];this.setState({showAccessibility:i({},this.state.showAccessibility,(t={},t[e]=!r,t))})},t}(u.default.Component);m.displayName="ColorShowcase",t.default=m,e.exports=t.default},182:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t,r){return c.default.verifyContrastRatio(e.hex(),t.hex(),r).WCAG_AA}function o(e,t,r){var a;return{bgColor:"light"==e&&r,className:(0,f.default)((a={},a[w.default.tile]=!0,a[w.default.small]="small"===t,a[w.default.large]="large"===t,a[w.default.whiteText]="light"===e,a)),title:("light"==e?"White text ":"Ink text ")+("large"==t?"18pt (24px) or larger":"smaller than 18pt (24px)")}}function l(e){var t=[o("light","small",e),o("light","large",e),o("dark","small",e),o("dark","large",e)];return t.map(function(e,t){return s.default.createElement("div",{key:t},s.default.createElement("span",{className:e.className,style:{background:e.bgColor},title:e.title},"A"))})}t.__esModule=!0,t.renderContrastHeaderIcons=l;var i=r(1),s=a(i),u=r(237),c=a(u),h=r(8),f=a(h),d=r(20),p=a(d),m=r(235),g=a(m),b=r(115),v=a(b),y=r(87),w=a(y),k=function(e){var t=e.color,r=(e.colorName,e.text),a=e.size,o=v.default[r.toLowerCase()],l=n(t,o,a),i=r+" text on '"+name+"' with a font size of at least "+a+"pt is level AA contrast.";return s.default.createElement("div",{className:w.default.accessibilityIcon,style:{color:o.rgb()}},l&&s.default.createElement(p.default,{icon:g.default,role:"img",title:i}))};k.displayName="ContrastIcon",t.default=k},115:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=r(188),o=a(n),l={white:(0,o.default)("#ffffff"),ink:(0,o.default)("#3e4543"),paper:(0,o.default)("#f2edde"),coral:(0,o.default)("#f04c5d"),seedling:(0,o.default)("#45ad8f"),ocean:(0,o.default)("#1b7688"),wisteria:(0,o.default)("#727193"),lapis:(0,o.default)("#253c64"),peach:(0,o.default)("#f3786d"),yuzu:(0,o.default)("#ffce1e"),stone:(0,o.default)("#f9f9f9"),"positive-delta":(0,o.default)("#43e699"),"negative-delta":(0,o.default)("#ff4757")};t.default=l,e.exports=t.default},259:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=e.className,r=e.style,a=e.elementProps;return u.default.createElement("div",{className:t,style:r},u.default.createElement("h1",o({id:"colors"},a.h1),"Colors"),u.default.createElement(m.default,a.IntroParagraph,u.default.createElement("p",a.p,"Our color palette is built with our core principles and guidelines as its foundation. We are committed to complying with ",u.default.createElement("a",o({href:"https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast"},a.a),"WCAG AA standard contrast ratios"),".")),u.default.createElement("hr",a.hr),u.default.createElement(d.default,a.ColorShowcase),u.default.createElement("h2",o({id:"best-practices"},a.h2),"Best practices"),u.default.createElement(g.TipContainer,a.TipContainer,u.default.createElement(g.TipCard,o({title:"Colors should…",type:"tip"},a.TipCard),u.default.createElement("ul",a.ul,u.default.createElement("li",a.li,u.default.createElement("p",a.p,"Add value to the page")),u.default.createElement("li",a.li,u.default.createElement("p",a.p,"Use more than colour alone to convey information (Be mindful of color blind / greyscale users)")),u.default.createElement("li",a.li,u.default.createElement("p",a.p,"Be mindful of color psychology values (e.g. Red is danger/bad/stop) vs cultural values")))),u.default.createElement(g.TipCard,o({title:"Colors should not…",type:"warning"},a.TipCard),u.default.createElement("ul",a.ul,u.default.createElement("li",a.li,u.default.createElement("p",a.p,"Be overused.")),u.default.createElement("li",a.li,u.default.createElement("p",a.p,"Create a ‘candy shop’ effect")),u.default.createElement("li",a.li,u.default.createElement("p",a.p,"Overload the user and create confusion"))))))}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},l=r(11),i=a(l),s=r(1),u=a(s),c=r(5),h=a(c),f=r(307),d=a(f),p=r(13),m=a(p),g=r(75),b=r(216);a(b);n.propTypes={className:h.default.string,style:h.default.object,elementProps:h.default.object},n.defaultProps={elementProps:{}},n.displayName="MarkdownComponent";var v=function(){return u.default.createElement("div",{className:i.default.contentContainer},u.default.createElement(n,{elementProps:{h1:{className:i.default.h1},h2:{className:i.default.h2},h3:{className:i.default.h3},h4:{className:i.default.h4},h5:{className:i.default.h5},h6:{className:i.default.h6},p:{className:i.default.p},table:{className:i.default.table},ul:{className:i.default.ul},ol:{className:i.default.ol},li:{className:i.default.li},blockquote:{className:i.default.blockquote},hr:{className:i.default.hr},img:{className:i.default.img},a:{className:i.default.link}}}))};v.displayName="WrappedMarkdownComponent",t.default=v},216:function(e,t){e.exports={cardContainer:"index-module__cardContainer--1cTk2",gridHeader:"index-module__gridHeader--BgL_g",sectionHeader:"index-module__sectionHeader--1bR3s HtmlContent-module__h3--23OW5",toggleAccessibilityButton:"index-module__toggleAccessibilityButton--1JV1X"}},165:function(e,t,r){var a=r(2),n=r(3),o=new a({id:"ca-icon-chevron-up",use:"ca-icon-chevron-up-usage",viewBox:"0 0 20 20",content:'<symbol viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="ca-icon-chevron-up"><defs><path id="ca-icon-chevron-up_a" d="M6.179 13.155L10 9.253l3.821 3.902 1.18-1.204L10 6.845l-5 5.106z" /></defs><use fill="currentColor" xlink:href="#ca-icon-chevron-up_a" fill-rule="evenodd" /></symbol>'});n.add(o);e.exports=o},167:function(e,t,r){var a=r(2),n=r(3),o=new a({id:"ca-icon-duplicate",use:"ca-icon-duplicate-usage",viewBox:"0 0 20 20",content:'<symbol viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="ca-icon-duplicate"><defs><path d="M13.273 2H4.545c-.803 0-1.454.65-1.454 1.455v10.181h1.454V3.455h8.728V2zm2.182 2.91h-8C6.65 4.91 6 5.56 6 6.363v10.181C6 17.35 6.65 18 7.455 18h8c.803 0 1.454-.65 1.454-1.455V6.364c0-.804-.65-1.455-1.454-1.455z" id="ca-icon-duplicate_a" /></defs><use fill="currentColor" xlink:href="#ca-icon-duplicate_a" fill-rule="evenodd" /></symbol>'});n.add(o);e.exports=o}});
//# sourceMappingURL=component---src-pages-styles-colors-index-md-2093975605607c45738a.js.map