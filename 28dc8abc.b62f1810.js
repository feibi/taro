(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{1770:function(e,n,t){"use strict";function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return a}))},1771:function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}t.d(n,"a",(function(){return a}))},1772:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),i=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=i(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=i(t),u=a,m=s["".concat(c,".").concat(u)]||s[u]||d[u]||o;return t?r.a.createElement(m,p(p({ref:n},l),{},{components:t})):r.a.createElement(m,p({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=u;var p={};for(var b in n)hasOwnProperty.call(n,b)&&(p[b]=n[b]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var l=2;l<o;l++)c[l]=t[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},356:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return b})),t.d(n,"default",(function(){return i}));var a=t(1770),r=t(1771),o=(t(0),t(1772)),c={title:"\u6700\u4f73\u5b9e\u8df5"},p={unversionedId:"best-practice",id:"version-3.x/best-practice",isDocsHomePage:!1,title:"\u6700\u4f73\u5b9e\u8df5",description:"\u5173\u4e8e JSX \u652f\u6301\u7a0b\u5ea6\u8865\u5145\u8bf4\u660e",source:"@site/versioned_docs/version-3.x/best-practice.md",slug:"/best-practice",permalink:"/taro/docs/best-practice",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/best-practice.md",version:"3.x"},b=[{value:"\u5173\u4e8e JSX \u652f\u6301\u7a0b\u5ea6\u8865\u5145\u8bf4\u660e",id:"\u5173\u4e8e-jsx-\u652f\u6301\u7a0b\u5ea6\u8865\u5145\u8bf4\u660e",children:[]},{value:"\u6700\u4f73\u7f16\u7801\u65b9\u5f0f",id:"\u6700\u4f73\u7f16\u7801\u65b9\u5f0f",children:[{value:"\u7ec4\u4ef6\u6837\u5f0f\u8bf4\u660e",id:"\u7ec4\u4ef6\u6837\u5f0f\u8bf4\u660e",children:[]},{value:"\u7ed9\u7ec4\u4ef6\u8bbe\u7f6e <code>defaultProps</code>",id:"\u7ed9\u7ec4\u4ef6\u8bbe\u7f6e-defaultprops",children:[]},{value:"\u7ec4\u4ef6\u4f20\u9012\u51fd\u6570\u5c5e\u6027\u540d\u4ee5 <code>on</code> \u5f00\u5934",id:"\u7ec4\u4ef6\u4f20\u9012\u51fd\u6570\u5c5e\u6027\u540d\u4ee5-on-\u5f00\u5934",children:[]},{value:"\u5c0f\u7a0b\u5e8f\u7aef\u4e0d\u8981\u5728\u7ec4\u4ef6\u4e2d\u6253\u5370\u4f20\u5165\u7684\u51fd\u6570",id:"\u5c0f\u7a0b\u5e8f\u7aef\u4e0d\u8981\u5728\u7ec4\u4ef6\u4e2d\u6253\u5370\u4f20\u5165\u7684\u51fd\u6570",children:[]},{value:"\u5c0f\u7a0b\u5e8f\u7aef\u4e0d\u8981\u5c06\u5728\u6a21\u677f\u4e2d\u7528\u5230\u7684\u6570\u636e\u8bbe\u7f6e\u4e3a <code>undefined</code>",id:"\u5c0f\u7a0b\u5e8f\u7aef\u4e0d\u8981\u5c06\u5728\u6a21\u677f\u4e2d\u7528\u5230\u7684\u6570\u636e\u8bbe\u7f6e\u4e3a-undefined",children:[]},{value:"\u5c0f\u7a0b\u5e8f\u7aef\u4e0d\u8981\u5728\u7ec4\u4ef6\u4e2d\u6253\u5370 <code>this.props.children</code>",id:"\u5c0f\u7a0b\u5e8f\u7aef\u4e0d\u8981\u5728\u7ec4\u4ef6\u4e2d\u6253\u5370-thispropschildren",children:[]},{value:"\u652f\u6301 props \u4f20\u5165 JSX",id:"\u652f\u6301-props-\u4f20\u5165-jsx",children:[]},{value:"\u7ec4\u4ef6\u5c5e\u6027\u4f20\u9012\u6ce8\u610f",id:"\u7ec4\u4ef6\u5c5e\u6027\u4f20\u9012\u6ce8\u610f",children:[]},{value:"\u7ec4\u4ef6 <code>state</code> \u4e0e <code>props</code> \u91cc\u5b57\u6bb5\u91cd\u540d\u7684\u95ee\u9898",id:"\u7ec4\u4ef6-state-\u4e0e-props-\u91cc\u5b57\u6bb5\u91cd\u540d\u7684\u95ee\u9898",children:[]},{value:"\u5c0f\u7a0b\u5e8f\u4e2d\u9875\u9762\u751f\u547d\u5468\u671f <code>componentWillMount</code> \u4e0d\u4e00\u81f4\u95ee\u9898",id:"\u5c0f\u7a0b\u5e8f\u4e2d\u9875\u9762\u751f\u547d\u5468\u671f-componentwillmount-\u4e0d\u4e00\u81f4\u95ee\u9898",children:[]},{value:"\u7ec4\u4ef6\u7684 <code>constructor</code> \u4e0e <code>render</code> \u63d0\u524d\u8c03\u7528",id:"\u7ec4\u4ef6\u7684-constructor-\u4e0e-render-\u63d0\u524d\u8c03\u7528",children:[]},{value:"JS \u7f16\u7801\u5fc5\u987b\u7528\u5355\u5f15\u53f7",id:"js-\u7f16\u7801\u5fc5\u987b\u7528\u5355\u5f15\u53f7",children:[]},{value:"\u73af\u5883\u53d8\u91cf <code>process.env</code> \u7684\u4f7f\u7528",id:"\u73af\u5883\u53d8\u91cf-processenv-\u7684\u4f7f\u7528",children:[]},{value:"\u4f7f\u7528 <code>this.$componentType</code> \u6765\u5224\u65ad\u5f53\u524d Taro.Component \u662f\u9875\u9762\u8fd8\u662f\u7ec4\u4ef6",id:"\u4f7f\u7528-thiscomponenttype-\u6765\u5224\u65ad\u5f53\u524d-tarocomponent-\u662f\u9875\u9762\u8fd8\u662f\u7ec4\u4ef6",children:[]},{value:"\u539f\u751f\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\u4f20\u9012 props \u7ed9 Taro \u7ec4\u4ef6",id:"\u539f\u751f\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\u4f20\u9012-props-\u7ed9-taro-\u7ec4\u4ef6",children:[]}]},{value:"\u5168\u5c40\u53d8\u91cf",id:"\u5168\u5c40\u53d8\u91cf",children:[]}],l={rightToc:b};function i(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u5173\u4e8e-jsx-\u652f\u6301\u7a0b\u5ea6\u8865\u5145\u8bf4\u660e"},"\u5173\u4e8e JSX \u652f\u6301\u7a0b\u5ea6\u8865\u5145\u8bf4\u660e"),Object(o.b)("p",null,"\u7531\u4e8e JSX \u4e2d\u7684\u5199\u6cd5\u5343\u53d8\u4e07\u5316\uff0c\u6211\u4eec\u4e0d\u80fd\u652f\u6301\u5230\u6240\u6709\u7684 JSX \u5199\u6cd5\uff0c\u540c\u65f6\u7531\u4e8e\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7aef\u7684\u9650\u5236\uff0c\u4e5f\u6709\u90e8\u5206 JSX \u7684\u4f18\u79c0\u7528\u6cd5\u6682\u65f6\u4e0d\u80fd\u5f97\u5230\u5f88\u597d\u5730\u652f\u6301\uff0c\u7279\u5728\u6b64\u8865\u5145\u8bf4\u660e\u4e00\u4e0b\u5bf9\u4e8e JSX \u7684\u652f\u6301\u7a0b\u5ea6:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/NervJS/taro/blob/master/packages/eslint-plugin-taro/docs/manipulate-jsx-as-array.md"}),"\u4e0d\u80fd\u4f7f\u7528 Array#map \u4e4b\u5916\u7684\u65b9\u6cd5\u64cd\u4f5c JSX \u6570\u7ec4")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/NervJS/taro/blob/master/packages/eslint-plugin-taro/docs/no-jsx-in-class-method.md"}),"\u6682\u4e0d\u652f\u6301\u5728 render() \u4e4b\u5916\u7684\u65b9\u6cd5\u5b9a\u4e49 JSX")," (\u81ea v1.3.0-beta.0 \u8d77\u652f\u6301)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/NervJS/taro/blob/master/packages/eslint-plugin-taro/docs/no-spread-in-props.md"}),"\u4e0d\u80fd\u5728 JSX \u53c2\u6570\u4e2d\u4f7f\u7528\u5bf9\u8c61\u5c55\u5f00\u7b26")," (\u81ea v1.3.0-beta.0 \u8d77\uff0c\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u53ef\u4ee5\u4f7f\u7528\u5bf9\u8c61\u5c55\u5f00\u7b26\uff0c\u5185\u7f6e\u7ec4\u4ef6\u4ecd\u7136\u9700\u8981\u5206\u522b\u5355\u72ec\u4f20\u5165\u53c2\u6570)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/NervJS/taro/blob/master/packages/eslint-plugin-taro/docs/no-stateless-function.md"}),"\u4e0d\u652f\u6301\u65e0\u72b6\u6001\u7ec4\u4ef6")," (\u81ea v1.3.0-beta.0 \u8d77\u652f\u6301)")),Object(o.b)("p",null,"\u4ee5\u4e0a\u7684\u89c4\u5219\u5728 Taro \u9ed8\u8ba4\u751f\u6210\u7684\u6a21\u677f\u90fd\u6709 ESLint \u68c0\u6d4b\uff0c\u65e0\u9700\u505a\u4efb\u4f55\u914d\u7f6e\u3002\u5982\u679c\u4f60\u7684\u7f16\u8f91\u5668\u6ca1\u6709\u5b89\u88c5 ESLint \u63d2\u4ef6\u53ef\u4ee5\u53c2\u8003\u4ee5\u4e0b\u6559\u7a0b\u5728\u4f60\u7684\u7f16\u8f91\u5668\u5b89\u88c5\uff1a"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"}),"VSCode")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.jetbrains.com/help/idea/eslint.html"}),"IntelliJ IDEA(WebStorm \u7b49 JetBrains \u7cfb)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://packagecontrol.io/packages/ESLint"}),"Sublime Text"))),Object(o.b)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b Taro \u7684\u7f16\u8bd1\u5668\u4e5f\u4f1a\u5bf9\u65e0\u6cd5\u8fd0\u884c\u7684\u4ee3\u7801\u8fdb\u884c\u8b66\u544a\uff0c\u5f53\u6ca1\u6709\u8c03\u7528\u6808\u4fe1\u606f\u65f6\u4ee3\u7801\u662f\u53ef\u4ee5\u751f\u6210\u7684\u3002\u5982\u679c\u4f60\u9700\u8981\u5728\u7f16\u8bd1\u65f6\u7981\u7528\u6389 ESLint \u68c0\u67e5\uff0c\u53ef\u4ee5\u5728\u547d\u4ee4\u524d\u52a0\u5165 ",Object(o.b)("inlineCode",{parentName:"p"},"ESLINT=false")," \u53c2\u6570\uff0c\u4f8b\u5982\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ ESLINT=false taro build --type weapp --watch\n")),Object(o.b)("h2",{id:"\u6700\u4f73\u7f16\u7801\u65b9\u5f0f"},"\u6700\u4f73\u7f16\u7801\u65b9\u5f0f"),Object(o.b)("p",null,"\u7ecf\u8fc7\u8f83\u957f\u65f6\u95f4\u7684\u63a2\u7d22\u4e0e\u9a8c\u8bc1\uff0c\u76ee\u524d Taro \u5728\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7aef\u662f\u91c7\u7528\u4f9d\u6258\u4e8e\u5c0f\u7a0b\u5e8f\u539f\u751f\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7cfb\u7edf\u6765\u8bbe\u8ba1\u5b9e\u73b0 Taro \u7ec4\u4ef6\u5316\u7684\uff0c\u6240\u4ee5\u76ee\u524d\u5c0f\u7a0b\u5e8f\u7aef\u7684\u7ec4\u4ef6\u5316\u4f1a\u53d7\u5230\u5c0f\u7a0b\u5e8f\u539f\u751f\u7ec4\u4ef6\u7cfb\u7edf\u7684\u9650\u5236\uff0c\u800c\u540c\u65f6\u4e3a\u4e86\u5b9e\u73b0\u4ee5 React \u65b9\u5f0f\u7f16\u5199\u4ee3\u7801\u7684\u76ee\u6807\uff0cTaro \u672c\u8eab\u505a\u4e86\u4e00\u4e9b\u7f16\u8bd1\u65f6\u4ee5\u53ca\u8fd0\u884c\u65f6\u7684\u5904\u7406\uff0c\u8fd9\u6837\u4e5f\u5e26\u6765\u4e86\u4e00\u4e9b\u503c\u5f97\u6ce8\u610f\u7684\u7ea6\u675f\uff0c\u6240\u4ee5\u6709\u5fc5\u8981\u9610\u8ff0\u4e00\u4e0b Taro \u7f16\u7801\u4e0a\u7684\u6700\u4f73\u5b9e\u8df5\u3002"),Object(o.b)("h3",{id:"\u7ec4\u4ef6\u6837\u5f0f\u8bf4\u660e"},"\u7ec4\u4ef6\u6837\u5f0f\u8bf4\u660e"),Object(o.b)("p",null,"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7684",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html"}),"\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u6837\u5f0f"),"\u9ed8\u8ba4\u662f\u4e0d\u80fd\u53d7\u5916\u90e8\u6837\u5f0f\u5f71\u54cd\u7684\uff0c\u4f8b\u5982\u5728\u9875\u9762\u4e2d\u5f15\u7528\u4e86\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7ec4\u4ef6\uff0c\u5728\u9875\u9762\u6837\u5f0f\u4e2d\u76f4\u63a5\u5199\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5143\u7d20\u7684\u6837\u5f0f\u662f\u65e0\u6cd5\u751f\u6548\u7684\u3002\u8fd9\u4e00\u70b9\uff0c\u5728 Taro \u4e2d\u4e5f\u662f\u4e00\u6837\uff0c\u800c\u8fd9\u4e5f\u662f\u4e0e\u5927\u5bb6\u8ba4\u77e5\u7684\u4f20\u7edf Web \u5f00\u53d1\u4e0d\u592a\u4e00\u6837\u3002"),Object(o.b)("h3",{id:"\u7ed9\u7ec4\u4ef6\u8bbe\u7f6e-defaultprops"},"\u7ed9\u7ec4\u4ef6\u8bbe\u7f6e ",Object(o.b)("inlineCode",{parentName:"h3"},"defaultProps")),Object(o.b)("p",null,"\u5728\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7aef\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4e2d\uff0c\u53ea\u6709\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"properties")," \u4e2d\u6307\u5b9a\u7684\u5c5e\u6027\uff0c\u624d\u80fd\u4ece\u7236\u7ec4\u4ef6\u4f20\u5165\u5e76\u63a5\u6536"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"Component({\n  properties: {\n    myProperty: { // \u5c5e\u6027\u540d\n      type: String, // \u7c7b\u578b\uff08\u5fc5\u586b\uff09\uff0c\u76ee\u524d\u63a5\u53d7\u7684\u7c7b\u578b\u5305\u62ec\uff1aString, Number, Boolean, Object, Array, null\uff08\u8868\u793a\u4efb\u610f\u7c7b\u578b\uff09\n      value: '', // \u5c5e\u6027\u521d\u59cb\u503c\uff08\u53ef\u9009\uff09\uff0c\u5982\u679c\u672a\u6307\u5b9a\u5219\u4f1a\u6839\u636e\u7c7b\u578b\u9009\u62e9\u4e00\u4e2a\n      observer: function (newVal, oldVal, changedPath) {\n         // \u5c5e\u6027\u88ab\u6539\u53d8\u65f6\u6267\u884c\u7684\u51fd\u6570\uff08\u53ef\u9009\uff09\uff0c\u4e5f\u53ef\u4ee5\u5199\u6210\u5728 methods \u6bb5\u4e2d\u5b9a\u4e49\u7684\u65b9\u6cd5\u540d\u5b57\u7b26\u4e32, \u5982\uff1a'_propertyChange'\n         // \u901a\u5e38 newVal \u5c31\u662f\u65b0\u8bbe\u7f6e\u7684\u6570\u636e\uff0c oldVal \u662f\u65e7\u6570\u636e\n      }\n    },\n    myProperty2: String // \u7b80\u5316\u7684\u5b9a\u4e49\u65b9\u5f0f\n  }\n  ...\n})\n")),Object(o.b)("p",null,"\u800c\u5728 Taro \u4e2d\uff0c\u5bf9\u4e8e\u5728\u7ec4\u4ef6\u4ee3\u7801\u4e2d\u4f7f\u7528\u5230\u7684\u6765\u81ea ",Object(o.b)("inlineCode",{parentName:"p"},"props")," \u7684\u5c5e\u6027\uff0c\u4f1a\u5728\u7f16\u8bd1\u65f6\u88ab\u8bc6\u522b\u5e76\u52a0\u5165\u5230\u7f16\u8bd1\u540e\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"properties")," \u4e2d\uff0c\u6682\u65f6\u652f\u6301\u5230\u4e86\u4ee5\u4e0b\u5199\u6cd5"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"this.props.property\n\nconst { property } = this.props\n\nconst property = this.props.property\n")),Object(o.b)("p",null,"\u4f46\u662f\u4e00\u5343\u4e2a\u4eba\u5fc3\u4e2d\u6709\u4e00\u5343\u4e2a\u54c8\u59c6\u96f7\u7279\uff0c\u4e0d\u540c\u4eba\u7684\u4ee3\u7801\u5199\u6cd5\u80af\u5b9a\u4e5f\u4e0d\u5c3d\u76f8\u540c\uff0c\u6240\u4ee5 Taro \u7684\u7f16\u8bd1\u80af\u5b9a\u4e0d\u80fd\u8986\u76d6\u5230\u6240\u6709\u7684\u5199\u6cd5\uff0c\u800c\u540c\u65f6\u53ef\u80fd\u4f1a\u6709\u67d0\u4e00\u5c5e\u6027\u6ca1\u6709\u4f7f\u7528\u800c\u662f\u76f4\u63a5\u4f20\u9012\u7ed9\u5b50\u7ec4\u4ef6\u7684\u60c5\u51b5\uff0c\u8fd9\u79cd\u60c5\u51b5\u662f\u7f16\u8bd1\u65f6\u65e0\u8bba\u5982\u4f55\u4e5f\u5904\u7406\u4e0d\u5230\u7684\uff0c\u8fd9\u65f6\u5019\u5c31\u9700\u8981\u5927\u5bb6\u5728\u7f16\u7801\u65f6\u7ed9\u7ec4\u4ef6\u8bbe\u7f6e ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/taro/docs/apis/about/tarocomponent#defaultprops"}),Object(o.b)("inlineCode",{parentName:"a"},"defaultProps"))," \u6765\u89e3\u51b3\u4e86\u3002"),Object(o.b)("p",null,"\u7ec4\u4ef6\u8bbe\u7f6e\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"defaultProps")," \u4f1a\u5728\u8fd0\u884c\u65f6\u7528\u6765\u5f25\u8865\u7f16\u8bd1\u65f6\u5904\u7406\u4e0d\u5230\u7684\u60c5\u51b5\uff0c\u91cc\u9762\u6240\u6709\u7684\u5c5e\u6027\u90fd\u4f1a\u88ab\u8bbe\u7f6e\u5230 ",Object(o.b)("inlineCode",{parentName:"p"},"properties")," \u4e2d\u521d\u59cb\u5316\u7ec4\u4ef6\uff0c\u6b63\u786e\u8bbe\u7f6e ",Object(o.b)("inlineCode",{parentName:"p"},"defaultProps")," \u53ef\u4ee5\u907f\u514d\u5f88\u591a\u5f02\u5e38\u7684\u60c5\u51b5\u7684\u51fa\u73b0\u3002"),Object(o.b)("h3",{id:"\u7ec4\u4ef6\u4f20\u9012\u51fd\u6570\u5c5e\u6027\u540d\u4ee5-on-\u5f00\u5934"},"\u7ec4\u4ef6\u4f20\u9012\u51fd\u6570\u5c5e\u6027\u540d\u4ee5 ",Object(o.b)("inlineCode",{parentName:"h3"},"on")," \u5f00\u5934"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u5728 v1.3.0-beta.0 \u4e4b\u540e\uff0c\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u95f4\u7684\u4e8b\u4ef6\u4f20\u9012\u53ef\u4ee5\u4e0d\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"on")," \u5f00\u5934\uff0c\u4f46\u5185\u7f6e\u7ec4\u4ef6\u7684\u4e8b\u4ef6\u4f9d\u7136\u662f\u4ee5 ",Object(o.b)("inlineCode",{parentName:"p"},"on")," \u5f00\u5934\u7684\uff0c\u4e3a\u4e86\u4e00\u81f4\u6027\u6211\u4eec\u4ecd\u7136\u63a8\u8350\u4f60\u4ee5 ",Object(o.b)("inlineCode",{parentName:"p"},"on")," \u5f00\u5934\u547d\u540d\u4f60\u7684\u4e8b\u4ef6\u3002")),Object(o.b)("p",null,"\u5728 Taro \u4e2d\uff0c\u7236\u7ec4\u4ef6\u8981\u5f80\u5b50\u7ec4\u4ef6\u4f20\u9012\u51fd\u6570\uff0c\u5c5e\u6027\u540d\u5fc5\u987b\u4ee5 ",Object(o.b)("inlineCode",{parentName:"p"},"on")," \u5f00\u5934"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// \u8c03\u7528 Custom \u7ec4\u4ef6\uff0c\u4f20\u5165 handleEvent \u51fd\u6570\uff0c\u5c5e\u6027\u540d\u4e3a onTrigger\nclass Parent extends Component {\n\n  handleEvent () {\n\n  }\n\n  render () {\n    return (\n      <Custom onTrigger={this.handleEvent}></Custom>\n    )\n  }\n}\n")),Object(o.b)("p",null,"\u8fd9\u662f\u56e0\u4e3a\uff0c\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7aef\u7ec4\u4ef6\u5316\u662f\u4e0d\u80fd\u76f4\u63a5\u4f20\u9012\u51fd\u6570\u7c7b\u578b\u7ed9\u5b50\u7ec4\u4ef6\u7684\uff0c\u5728 Taro \u4e2d\u662f\u501f\u52a9\u7ec4\u4ef6\u7684",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/events.html"}),"\u4e8b\u4ef6\u673a\u5236"),"\u6765\u5b9e\u73b0\u8fd9\u4e00\u7279\u6027\uff0c\u800c\u5c0f\u7a0b\u5e8f\u4e2d\u4f20\u5165\u4e8b\u4ef6\u7684\u65f6\u5019\u5c5e\u6027\u540d\u5199\u6cd5\u4e3a ",Object(o.b)("inlineCode",{parentName:"p"},"bindmyevent")," \u6216\u8005 ",Object(o.b)("inlineCode",{parentName:"p"},"bind:myevent")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'\x3c!-- \u5f53\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u89e6\u53d1 myevent \u4e8b\u4ef6\u65f6\uff0c\u8c03\u7528 onMyEvent \u65b9\u6cd5 --\x3e\n<component-tag-name bindmyevent="onMyEvent" />\n\x3c!-- \u6216\u8005\u53ef\u4ee5\u5199\u6210 --\x3e\n<component-tag-name bind:myevent="onMyEvent" />\n')),Object(o.b)("p",null,"\u6240\u4ee5 Taro \u4e2d\u7ea6\u5b9a\u7ec4\u4ef6\u4f20\u9012\u51fd\u6570\u5c5e\u6027\u540d\u4ee5 ",Object(o.b)("inlineCode",{parentName:"p"},"on")," \u5f00\u5934\uff0c\u540c\u65f6\u8fd9\u4e5f\u548c\u5185\u7f6e\u7ec4\u4ef6\u7684\u4e8b\u4ef6\u7ed1\u5b9a\u5199\u6cd5\u4fdd\u6301\u4e00\u81f4\u4e86\u3002"),Object(o.b)("h3",{id:"\u5c0f\u7a0b\u5e8f\u7aef\u4e0d\u8981\u5728\u7ec4\u4ef6\u4e2d\u6253\u5370\u4f20\u5165\u7684\u51fd\u6570"},"\u5c0f\u7a0b\u5e8f\u7aef\u4e0d\u8981\u5728\u7ec4\u4ef6\u4e2d\u6253\u5370\u4f20\u5165\u7684\u51fd\u6570"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u81ea v1.3.0-beta.0 \u6ca1\u6709\u8fd9\u6761\u9650\u5236")),Object(o.b)("p",null,"\u524d\u9762\u5df2\u7ecf\u63d0\u5230\u5c0f\u7a0b\u5e8f\u7aef\u7684\u7ec4\u4ef6\u4f20\u5165\u51fd\u6570\u7684\u539f\u7406\uff0c\u6240\u4ee5\u5728\u5c0f\u7a0b\u5e8f\u7aef\u4e0d\u8981\u5728\u7ec4\u4ef6\u4e2d\u6253\u5370\u4f20\u5165\u7684\u51fd\u6570\uff0c\u56e0\u4e3a\u62ff\u4e0d\u5230\u7ed3\u679c\uff0c\u4f46\u662f ",Object(o.b)("inlineCode",{parentName:"p"},"this.props.onXxx && this.props.onXxx()")," \u8fd9\u79cd\u5224\u65ad\u51fd\u6570\u662f\u5426\u4f20\u5165\u6765\u8fdb\u884c\u8c03\u7528\u7684\u5199\u6cd5\u662f\u5b8c\u5168\u652f\u6301\u7684\u3002"),Object(o.b)("h3",{id:"\u5c0f\u7a0b\u5e8f\u7aef\u4e0d\u8981\u5c06\u5728\u6a21\u677f\u4e2d\u7528\u5230\u7684\u6570\u636e\u8bbe\u7f6e\u4e3a-undefined"},"\u5c0f\u7a0b\u5e8f\u7aef\u4e0d\u8981\u5c06\u5728\u6a21\u677f\u4e2d\u7528\u5230\u7684\u6570\u636e\u8bbe\u7f6e\u4e3a ",Object(o.b)("inlineCode",{parentName:"h3"},"undefined")),Object(o.b)("p",null,"\u7531\u4e8e\u5c0f\u7a0b\u5e8f\u4e0d\u652f\u6301\u5c06 data \u4e2d\u4efb\u4f55\u4e00\u9879\u7684 value \u8bbe\u4e3a ",Object(o.b)("inlineCode",{parentName:"p"},"undefined")," \uff0c\u5728 setState \u7684\u65f6\u5019\u4e5f\u8bf7\u907f\u514d\u8fd9\u4e48\u7528\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 null \u6765\u66ff\u4ee3\u3002"),Object(o.b)("h3",{id:"\u5c0f\u7a0b\u5e8f\u7aef\u4e0d\u8981\u5728\u7ec4\u4ef6\u4e2d\u6253\u5370-thispropschildren"},"\u5c0f\u7a0b\u5e8f\u7aef\u4e0d\u8981\u5728\u7ec4\u4ef6\u4e2d\u6253\u5370 ",Object(o.b)("inlineCode",{parentName:"h3"},"this.props.children")),Object(o.b)("p",null,"\u5728\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7aef\u662f\u901a\u8fc7 ",Object(o.b)("inlineCode",{parentName:"p"},"<slot />")," \u6765\u5b9e\u73b0\u5f80\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4e2d\u4f20\u5165\u5143\u7d20\u7684\uff0c\u800c Taro \u5229\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"this.props.children")," \u5728\u7f16\u8bd1\u65f6\u5b9e\u73b0\u4e86\u8fd9\u4e00\u529f\u80fd\uff0c ",Object(o.b)("inlineCode",{parentName:"p"},"this.props.children")," \u4f1a\u76f4\u63a5\u88ab\u7f16\u8bd1\u6210 ",Object(o.b)("inlineCode",{parentName:"p"},"<slot />")," \u6807\u7b7e\uff0c\u6240\u4ee5\u5b83\u5728\u5c0f\u7a0b\u5e8f\u7aef\u5c5e\u4e8e\u8bed\u6cd5\u7cd6\u7684\u5b58\u5728\uff0c\u8bf7\u4e0d\u8981\u5728\u7ec4\u4ef6\u4e2d\u6253\u5370\u5b83\u3002"),Object(o.b)("h3",{id:"\u652f\u6301-props-\u4f20\u5165-jsx"},"\u652f\u6301 props \u4f20\u5165 JSX"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u81ea ",Object(o.b)("inlineCode",{parentName:"p"},"1.1.9")," \u5f00\u59cb\u652f\u6301")),Object(o.b)("p",null,"\u652f\u6301 props \u4f20\u5165 JSX\uff0c\u4f46\u662f\u5143\u7d20\u4f20\u5165 JSX \u7684\u5c5e\u6027\u540d\u5fc5\u987b\u4ee5 ",Object(o.b)("inlineCode",{parentName:"p"},"render")," \u5f00\u5934"),Object(o.b)("p",null,"\u4f8b\u5982\uff0c\u5b50\u7ec4\u4ef6\u5199\u6cd5"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"class Dialog extends Component {\n  render () {\n    return (\n      <View className='dialog'>\n        <View className='header'>\n          {this.props.renderHeader}\n        </View>\n        <View className='body'>\n          {this.props.children}\n        </View>\n        <View className='footer'>\n          {this.props.renderFooter}\n        </View>\n      </View>\n    )\n  }\n}\n")),Object(o.b)("p",null,"\u7236\u7ec4\u4ef6\u8c03\u7528\u5b50\u7ec4\u4ef6\u662f\u4f20\u5165 JSX"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"class App extends Component {\n  render () {\n    return (\n      <View className='container'>\n        <Dialog\n          renderHeader={\n            <View className='welcome-message'>Welcome!</View>\n          }\n          renderFooter={\n            <Button className='close'>Close</Button>\n          }\n        >\n          <View className=\"dialog-message\">\n            Thank you for using Taro.\n          </View>\n        </Dialog>\n      </View>\n    )\n  }\n}\n")),Object(o.b)("h3",{id:"\u7ec4\u4ef6\u5c5e\u6027\u4f20\u9012\u6ce8\u610f"},"\u7ec4\u4ef6\u5c5e\u6027\u4f20\u9012\u6ce8\u610f"),Object(o.b)("p",null,"\u4e0d\u8981\u4ee5 ",Object(o.b)("inlineCode",{parentName:"p"},"id"),"\u3001",Object(o.b)("inlineCode",{parentName:"p"},"class"),"\u3001",Object(o.b)("inlineCode",{parentName:"p"},"style")," \u4f5c\u4e3a\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684\u5c5e\u6027\u4e0e\u5185\u90e8 state \u7684\u540d\u79f0\uff0c\u56e0\u4e3a\u8fd9\u4e9b\u5c5e\u6027\u540d\u5728\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5c0f\u7a0b\u5e8f\u4e2d\u4f1a\u4e22\u5931\u3002"),Object(o.b)("h3",{id:"\u7ec4\u4ef6-state-\u4e0e-props-\u91cc\u5b57\u6bb5\u91cd\u540d\u7684\u95ee\u9898"},"\u7ec4\u4ef6 ",Object(o.b)("inlineCode",{parentName:"h3"},"state")," \u4e0e ",Object(o.b)("inlineCode",{parentName:"h3"},"props")," \u91cc\u5b57\u6bb5\u91cd\u540d\u7684\u95ee\u9898"),Object(o.b)("p",null,"\u4e0d\u8981\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"state")," \u4e0e ",Object(o.b)("inlineCode",{parentName:"p"},"props")," \u4e0a\u7528\u540c\u540d\u7684\u5b57\u6bb5\uff0c\u56e0\u4e3a\u8fd9\u4e9b\u5b57\u6bb5\u5728\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u4e2d\u90fd\u4f1a\u6302\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"data")," \u4e0a\u3002"),Object(o.b)("h3",{id:"\u5c0f\u7a0b\u5e8f\u4e2d\u9875\u9762\u751f\u547d\u5468\u671f-componentwillmount-\u4e0d\u4e00\u81f4\u95ee\u9898"},"\u5c0f\u7a0b\u5e8f\u4e2d\u9875\u9762\u751f\u547d\u5468\u671f ",Object(o.b)("inlineCode",{parentName:"h3"},"componentWillMount")," \u4e0d\u4e00\u81f4\u95ee\u9898"),Object(o.b)("p",null,"\u7531\u4e8e\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u91cc\u9875\u9762\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"onLoad")," \u65f6\u624d\u80fd\u62ff\u5230\u9875\u9762\u7684\u8def\u7531\u53c2\u6570\uff0c\u800c\u9875\u9762 onLoad \u524d\u7ec4\u4ef6\u90fd\u5df2\u7ecf ",Object(o.b)("inlineCode",{parentName:"p"},"attached")," \u4e86\u3002\u56e0\u6b64\u9875\u9762\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"componentWillMount")," \u53ef\u80fd\u4f1a\u4e0e\u9884\u671f\u4e0d\u592a\u4e00\u81f4\u3002\u4f8b\u5982\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// \u9519\u8bef\u5199\u6cd5\nrender () {\n  // \u5728 willMount \u4e4b\u524d\u65e0\u6cd5\u62ff\u5230\u8def\u7531\u53c2\u6570\n  const abc = this.$router.params.abc\n  return <Custom adc={abc} />\n}\n\n// \u6b63\u786e\u5199\u6cd5\ncomponentWillMount () {\n  const abc = this.$router.params.abc\n  this.setState({\n    abc\n  })\n}\nrender () {\n  // \u589e\u52a0\u4e00\u4e2a\u517c\u5bb9\u5224\u65ad\n  return this.state.abc && <Custom adc={abc} />\n}\n")),Object(o.b)("p",null,"\u5bf9\u4e8e\u4e0d\u9700\u8981\u7b49\u5230\u9875\u9762 willMount \u4e4b\u540e\u53d6\u8def\u7531\u53c2\u6570\u7684\u9875\u9762\u5219\u6ca1\u6709\u4efb\u4f55\u5f71\u54cd\u3002"),Object(o.b)("h3",{id:"\u7ec4\u4ef6\u7684-constructor-\u4e0e-render-\u63d0\u524d\u8c03\u7528"},"\u7ec4\u4ef6\u7684 ",Object(o.b)("inlineCode",{parentName:"h3"},"constructor")," \u4e0e ",Object(o.b)("inlineCode",{parentName:"h3"},"render")," \u63d0\u524d\u8c03\u7528"),Object(o.b)("p",null,"\u5f88\u591a\u7ec6\u5fc3\u7684\u5f00\u53d1\u8005\u5e94\u8be5\u5df2\u7ecf\u6ce8\u610f\u5230\u4e86\uff0c\u5728 Taro \u7f16\u8bd1\u5230\u5c0f\u7a0b\u5e8f\u7aef\u540e\uff0c\u7ec4\u4ef6\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"constructor")," \u4e0e ",Object(o.b)("inlineCode",{parentName:"p"},"render")," \u9ed8\u8ba4\u4f1a\u591a\u8c03\u7528\u4e00\u6b21\uff0c\u8868\u73b0\u5f97\u4e0e React \u4e0d\u592a\u4e00\u81f4\u3002"),Object(o.b)("p",null,"\u8fd9\u662f\u56e0\u4e3a\uff0cTaro \u7684\u7ec4\u4ef6\u7f16\u8bd1\u540e\u5c31\u662f\u5c0f\u7a0b\u5e8f\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6\uff0c\u800c\u5c0f\u7a0b\u5e8f\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684\u521d\u59cb\u5316\u65f6\u662f\u53ef\u4ee5\u6307\u5b9a ",Object(o.b)("inlineCode",{parentName:"p"},"data")," \u6765\u8ba9\u7ec4\u4ef6\u62e5\u6709\u521d\u59cb\u5316\u6570\u636e\u7684\u3002\u5f00\u53d1\u8005\u4e00\u822c\u4f1a\u5728\u7ec4\u4ef6\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"constructor")," \u4e2d\u8bbe\u7f6e\u4e00\u4e9b\u521d\u59cb\u5316\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"state"),"\uff0c\u540c\u65f6\u4e5f\u53ef\u80fd\u4f1a\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"render")," \u4e2d\u5904\u7406 ",Object(o.b)("inlineCode",{parentName:"p"},"state"),"  \u4e0e ",Object(o.b)("inlineCode",{parentName:"p"},"props")," \u4ea7\u751f\u65b0\u7684\u6570\u636e\uff0c\u5728 Taro \u4e2d\u591a\u51fa\u7684\u8fd9\u4e00\u6b21\u63d0\u524d\u8c03\u7528\uff0c\u5c31\u662f\u4e3a\u4e86\u6536\u96c6\u7ec4\u4ef6\u7684\u521d\u59cb\u5316\u6570\u636e\uff0c\u7ed9\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u63d0\u524d\u751f\u6210 ",Object(o.b)("inlineCode",{parentName:"p"},"data")," \uff0c\u4ee5\u4fdd\u8bc1\u7ec4\u4ef6\u521d\u59cb\u5316\u65f6\u80fd\u5e26\u6709\u6570\u636e\uff0c\u8ba9\u7ec4\u4ef6\u521d\u6b21\u6e32\u67d3\u6b63\u5e38\u3002"),Object(o.b)("p",null,"\u6240\u4ee5\uff0c\u5728\u7f16\u7801\u65f6\uff0c\u9700\u8981\u5728\u5904\u7406\u6570\u636e\u7684\u65f6\u5019\u505a\u4e00\u4e9b\u5bb9\u9519\u5904\u7406\uff0c\u8fd9\u6837\u53ef\u4ee5\u907f\u514d\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"constructor")," \u4e0e ",Object(o.b)("inlineCode",{parentName:"p"},"render")," \u63d0\u524d\u8c03\u7528\u65f6\u51fa\u73b0\u7531\u4e8e\u6ca1\u6709\u6570\u636e\u5bfc\u81f4\u51fa\u9519\u7684\u60c5\u51b5\u3002"),Object(o.b)("h3",{id:"js-\u7f16\u7801\u5fc5\u987b\u7528\u5355\u5f15\u53f7"},"JS \u7f16\u7801\u5fc5\u987b\u7528\u5355\u5f15\u53f7"),Object(o.b)("p",null,"\u5728 Taro \u4e2d\uff0cJS \u4ee3\u7801\u91cc\u5fc5\u987b\u4e66\u5199\u5355\u5f15\u53f7\uff0c\u7279\u522b\u662f JSX \u4e2d\uff0c\u5982\u679c\u51fa\u73b0\u53cc\u5f15\u53f7\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u7f16\u8bd1\u9519\u8bef\u3002"),Object(o.b)("h3",{id:"\u73af\u5883\u53d8\u91cf-processenv-\u7684\u4f7f\u7528"},"\u73af\u5883\u53d8\u91cf ",Object(o.b)("inlineCode",{parentName:"h3"},"process.env")," \u7684\u4f7f\u7528"),Object(o.b)("p",null,"\u4e0d\u8981\u4ee5\u89e3\u6784\u7684\u65b9\u5f0f\u6765\u83b7\u53d6\u901a\u8fc7 ",Object(o.b)("inlineCode",{parentName:"p"},"env")," \u914d\u7f6e\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"process.env")," \u73af\u5883\u53d8\u91cf\uff0c\u8bf7\u76f4\u63a5\u4ee5\u5b8c\u6574\u4e66\u5199\u7684\u65b9\u5f0f ",Object(o.b)("inlineCode",{parentName:"p"},"process.env.NODE_ENV")," \u6765\u8fdb\u884c\u4f7f\u7528"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// \u9519\u8bef\u5199\u6cd5\uff0c\u4e0d\u652f\u6301\nconst { NODE_ENV = 'development' } = process.env\nif (NODE_ENV === 'development') {\n  ...\n}\n\n// \u6b63\u786e\u5199\u6cd5\nif (process.env.NODE_ENV === 'development') {\n\n}\n")),Object(o.b)("h3",{id:"\u4f7f\u7528-thiscomponenttype-\u6765\u5224\u65ad\u5f53\u524d-tarocomponent-\u662f\u9875\u9762\u8fd8\u662f\u7ec4\u4ef6"},"\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"h3"},"this.$componentType")," \u6765\u5224\u65ad\u5f53\u524d Taro.Component \u662f\u9875\u9762\u8fd8\u662f\u7ec4\u4ef6"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"this.$componentType")," \u53ef\u80fd\u53d6\u503c\u5206\u522b\u4e3a ",Object(o.b)("inlineCode",{parentName:"p"},"PAGE")," \u548c ",Object(o.b)("inlineCode",{parentName:"p"},"COMPONENT"),"\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u6839\u636e\u6b64\u53d8\u91cf\u7684\u53d6\u503c\u5206\u522b\u91c7\u53d6\u4e0d\u540c\u903b\u8f91\u3002"),Object(o.b)("h3",{id:"\u539f\u751f\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\u4f20\u9012-props-\u7ed9-taro-\u7ec4\u4ef6"},"\u539f\u751f\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\u4f20\u9012 props \u7ed9 Taro \u7ec4\u4ef6"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Taro v1.3+")," \u5bf9 props \u7cfb\u7edf\u8fdb\u884c\u4e86\u6539\u9020\uff0c\u4f7f\u5f97\u4e0d\u80fd\u517c\u5bb9\u539f\u751f\u7ec4\u4ef6\u901a\u8fc7 properties \u4f20\u5165\u7684\u5c5e\u6027\u3002"),Object(o.b)("p",null,"\u76ee\u524d\u53ef\u4ee5\u901a\u8fc7\u628a\u6240\u6709\u9700\u8981\u4f20\u5165 Taro \u7ec4\u4ef6\u7684 props\uff0c\u901a\u8fc7\u501f\u52a9 ",Object(o.b)("inlineCode",{parentName:"p"},"extraProps")," \u5c5e\u6027\u6765\u89e3\u51b3\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'// \u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\u5e38\u89c4 props \u4f20\u9012\n<plugin title="{{name}}" desc="{{desc}}" bindonclick="onClick"></plugin>\n\n// \u539f\u751f\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\u8c03\u7528 Taro \u7ec4\u4ef6\u65f6\u9700\u8981\u6539\u9020\u6210\u4ee5\u4e0b\u5f62\u5f0f\uff1a\nthis.setData({\n  extraProps: {\n    name,\n    desc,\n    onClick: this.onClick\n  }\n})\n<plugin extraProps="{{extraProps}}" ></plugin>\n')),Object(o.b)("h2",{id:"\u5168\u5c40\u53d8\u91cf"},"\u5168\u5c40\u53d8\u91cf"),Object(o.b)("p",null,"\u5728 Taro \u4e2d\u63a8\u8350\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"Redux")," \u6765\u8fdb\u884c\u5168\u5c40\u53d8\u91cf\u7684\u7ba1\u7406\uff0c\u4f46\u662f\u5bf9\u4e8e\u4e00\u4e9b\u5c0f\u578b\u7684\u5e94\u7528\uff0c ",Object(o.b)("inlineCode",{parentName:"p"},"Redux")," \u5c31\u53ef\u80fd\u663e\u5f97\u6bd4\u8f83\u91cd\u4e86\uff0c\u8fd9\u65f6\u5019\u5982\u679c\u60f3\u4f7f\u7528\u5168\u5c40\u53d8\u91cf\uff0c\u63a8\u8350\u5982\u4e0b\u4f7f\u7528\u3002"),Object(o.b)("p",null,"\u65b0\u589e\u4e00\u4e2a\u81ea\u884c\u547d\u540d\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"JS")," \u6587\u4ef6\uff0c\u4f8b\u5982 ",Object(o.b)("inlineCode",{parentName:"p"},"global_data.js"),"\uff0c\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const globalData = {}\n\nexport function set (key, val) {\n  globalData[key] = val\n}\n\nexport function get (key) {\n  return globalData[key]\n}\n")),Object(o.b)("p",null,"\u968f\u540e\u5c31\u53ef\u4ee5\u5728\u4efb\u610f\u4f4d\u7f6e\u8fdb\u884c\u4f7f\u7528\u5566"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { set as setGlobalData, get as getGlobalData } from './path/name/global_data'\n\nsetGlobalData('test', 1)\n\ngetGlobalData('test')\n")))}i.isMDXComponent=!0}}]);