(window.webpackJsonp=window.webpackJsonp||[]).push([[763],{1770:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return r}))},1771:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}n.d(e,"a",(function(){return r}))},1772:function(t,e,n){"use strict";n.d(e,"a",(function(){return O})),n.d(e,"b",(function(){return s}));var r=n(0),a=n.n(r);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=a.a.createContext({}),u=function(t){var e=a.a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},O=function(t){var e=u(t.components);return a.a.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},j=a.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,b=t.parentName,o=c(t,["components","mdxType","originalType","parentName"]),O=u(n),j=r,s=O["".concat(b,".").concat(j)]||O[j]||d[j]||l;return n?a.a.createElement(s,i(i({ref:e},o),{},{components:n})):a.a.createElement(s,i({ref:e},o))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,b=new Array(l);b[0]=j;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:r,b[1]=i;for(var o=2;o<l;o++)b[o]=n[o];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"},829:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return b})),n.d(e,"metadata",(function(){return i})),n.d(e,"rightToc",(function(){return c})),n.d(e,"default",(function(){return u}));var r=n(1770),a=n(1771),l=(n(0),n(1772)),b={title:"Taro.setNavigationBarColor(option)",sidebar_label:"setNavigationBarColor"},i={unversionedId:"apis/ui/navigation-bar/setNavigationBarColor",id:"version-3.x/apis/ui/navigation-bar/setNavigationBarColor",isDocsHomePage:!1,title:"Taro.setNavigationBarColor(option)",description:"\u8bbe\u7f6e\u9875\u9762\u5bfc\u822a\u6761\u989c\u8272",source:"@site/versioned_docs/version-3.x/apis/ui/navigation-bar/setNavigationBarColor.md",slug:"/apis/ui/navigation-bar/setNavigationBarColor",permalink:"/taro/docs/apis/ui/navigation-bar/setNavigationBarColor",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/ui/navigation-bar/setNavigationBarColor.md",version:"3.x",sidebar_label:"setNavigationBarColor",sidebar:"version-3.x/API",previous:{title:"Taro.setNavigationBarTitle(option)",permalink:"/taro/docs/apis/ui/navigation-bar/setNavigationBarTitle"},next:{title:"Taro.hideNavigationBarLoading(option)",permalink:"/taro/docs/apis/ui/navigation-bar/hideNavigationBarLoading"}},c=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"AnimationOption",id:"animationoption",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],o={rightToc:c};function u(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(l.b)("wrapper",Object(r.a)({},o,n,{components:e,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u8bbe\u7f6e\u9875\u9762\u5bfc\u822a\u6761\u989c\u8272"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.setNavigationBarColor.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<CallbackResult>\n")),Object(l.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(l.b)("h3",{id:"option"},"Option"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"backgroundColor"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(l.b)("td",null,"\u80cc\u666f\u989c\u8272\u503c\uff0c\u6709\u6548\u503c\u4e3a\u5341\u516d\u8fdb\u5236\u989c\u8272")),Object(l.b)("tr",null,Object(l.b)("td",null,"frontColor"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(l.b)("td",null,"\u524d\u666f\u989c\u8272\u503c\uff0c\u5305\u62ec\u6309\u94ae\u3001\u6807\u9898\u3001\u72b6\u6001\u680f\u7684\u989c\u8272\uff0c\u4ec5\u652f\u6301 #ffffff \u548c #000000")),Object(l.b)("tr",null,Object(l.b)("td",null,"animation"),Object(l.b)("td",null,Object(l.b)("code",null,"AnimationOption")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u52a8\u753b\u6548\u679c")),Object(l.b)("tr",null,Object(l.b)("td",null,"complete"),Object(l.b)("td",null,Object(l.b)("code",null,"(res: CallbackResult) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(l.b)("tr",null,Object(l.b)("td",null,"fail"),Object(l.b)("td",null,Object(l.b)("code",null,"(res: CallbackResult) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(l.b)("tr",null,Object(l.b)("td",null,"success"),Object(l.b)("td",null,Object(l.b)("code",null,"(res: CallbackResult) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(l.b)("h3",{id:"animationoption"},"AnimationOption"),Object(l.b)("p",null,"\u52a8\u753b\u6548\u679c"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"duration"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u52a8\u753b\u53d8\u5316\u65f6\u95f4\uff0c\u5355\u4f4d ms")),Object(l.b)("tr",null,Object(l.b)("td",null,"timingFunc"),Object(l.b)("td",null,Object(l.b)("code",null,'"linear" | "easeIn" | "easeOut" | "easeInOut"')),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u52a8\u753b\u53d8\u5316\u65b9\u5f0f",Object(l.b)("br",null),Object(l.b)("br",null),"\u53ef\u9009\u503c\uff1a",Object(l.b)("br",null),"- 'linear': \u52a8\u753b\u4ece\u5934\u5230\u5c3e\u7684\u901f\u5ea6\u662f\u76f8\u540c\u7684;",Object(l.b)("br",null),"- 'easeIn': \u52a8\u753b\u4ee5\u4f4e\u901f\u5f00\u59cb;",Object(l.b)("br",null),"- 'easeOut': \u52a8\u753b\u4ee5\u4f4e\u901f\u7ed3\u675f;",Object(l.b)("br",null),"- 'easeInOut': \u52a8\u753b\u4ee5\u4f4e\u901f\u5f00\u59cb\u548c\u7ed3\u675f;")))),Object(l.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.setNavigationBarColor({\n    frontColor: '#ffffff',\n    backgroundColor: '#ff0000',\n    animation: {\n        duration: 400,\n        timingFunc: 'easeIn'\n    }\n})\n")),Object(l.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Taro.setNavigationBarColor"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f(\u4e0d\u652f\u6301 animation \u53c2\u6570)")))))}u.isMDXComponent=!0}}]);