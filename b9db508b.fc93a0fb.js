(window.webpackJsonp=window.webpackJsonp||[]).push([[1265],{1330:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(1770),a=n(1771),c=(n(0),n(1772)),i={title:"Taro.startDeviceMotionListening(callback)",sidebar_label:"startDeviceMotionListening"},o={unversionedId:"apis/device/deviceMotion/startDeviceMotionListening",id:"version-1.x/apis/device/deviceMotion/startDeviceMotionListening",isDocsHomePage:!1,title:"Taro.startDeviceMotionListening(callback)",description:"\u5f00\u59cb\u76d1\u542c\u8bbe\u5907\u65b9\u5411\u7684\u53d8\u5316\u3002",source:"@site/versioned_docs/version-1.x/apis/device/deviceMotion/startDeviceMotionListening.md",slug:"/apis/device/deviceMotion/startDeviceMotionListening",permalink:"/taro/docs/1.x/apis/device/deviceMotion/startDeviceMotionListening",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/device/deviceMotion/startDeviceMotionListening.md",version:"1.x",sidebar_label:"startDeviceMotionListening",sidebar:"version-1.x/API",previous:{title:"Taro.onAccelerometerChange(callback)",permalink:"/taro/docs/1.x/apis/device/accelerometer/onAccelerometerChange"},next:{title:"Taro.stopDeviceMotionListening(callback)",permalink:"/taro/docs/1.x/apis/device/deviceMotion/stopDeviceMotionListening"}},b=[{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[]}],l={rightToc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u5f00\u59cb\u76d1\u542c\u8bbe\u5907\u65b9\u5411\u7684\u53d8\u5316\u3002"),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"interval"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("code",null,"'","game","'")," / ",Object(c.b)("code",null,"'","ui","'")," / ",Object(c.b)("code",null,"'","normal","'")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("code",null,"normal")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u76d1\u542c\u8bbe\u5907\u65b9\u5411\u56de\u8c03\u51fd\u6570\u7684\u6267\u884c\u9891\u7387 game \u9002\u7528\u4e8e\u66f4\u65b0\u6e38\u620f\u7684\u56de\u8c03\u9891\u7387\uff0c\u5728 20ms/\u6b21 \u5de6\u53f3 ui \u9002\u7528\u4e8e\u66f4\u65b0 UI \u7684\u56de\u8c03\u9891\u7387\uff0c\u5728 60ms/\u6b21 \u5de6\u53f3 normal \u666e\u901a\u7684\u56de\u8c03\u9891\u7387\uff0c\u5728 200ms/\u6b21 \u5de6\u53f3")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"success"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("code",null,"function")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"fail"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("code",null,"function")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"complete"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("code",null,"function")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),Object(c.b)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Taro.startDeviceMotionListening"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}p.isMDXComponent=!0},1770:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},1771:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))},1772:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),u=p(n),s=r,d=u["".concat(i,".").concat(s)]||u[s]||O[s]||c;return n?a.a.createElement(d,o(o({ref:t},l),{},{components:n})):a.a.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=s;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<c;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);