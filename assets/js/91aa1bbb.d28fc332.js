"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4744],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,b=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3058:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"Constant Distribution"},l=void 0,u={unversionedId:"core/rng/constant",id:"core/rng/constant",title:"Constant Distribution",description:"The Constant distribution returns a constant value. This can be used in situations where the user may not want to apply a distribution. The constant value is provided by the user.",source:"@site/../docs/core/rng/constant.md",sourceDirName:"core/rng",slug:"/core/rng/constant",permalink:"/sst-docs/docs/core/rng/constant",draft:!1,editUrl:"https://github.com/sstsimulator/docs/edit/master/docs/../docs/core/rng/constant.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1678138197,formattedLastUpdatedAt:"Mar 6, 2023",frontMatter:{title:"Constant Distribution"},sidebar:"Core API",previous:{title:"SST::RandomDistribution",permalink:"/sst-docs/docs/core/rng/distrib"},next:{title:"Discrete Distribution",permalink:"/sst-docs/docs/core/rng/discrete"}},c={},p=[{value:"Constructor",id:"constructor",level:2},{value:"Parameters",id:"parameters",level:4},{value:"getNextDouble",id:"getnextdouble",level:2},{value:"Parameters",id:"parameters-1",level:4},{value:"getMean",id:"getmean",level:2},{value:"Parameters",id:"parameters-2",level:4},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Header",id:"header",level:2}],d={toc:p},m="wrapper";function b(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Constant distribution returns a constant value. This can be used in situations where the user may not want to apply a distribution. The constant value is provided by the user."),(0,o.kt)("h2",{id:"constructor"},"Constructor"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"ConstantDistribution(double v);\n")),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"v")," (double) The constant value this distribution will prodcue.")),(0,o.kt)("h2",{id:"getnextdouble"},"getNextDouble"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"double getNextDouble();\n")),(0,o.kt)("p",null,"Return the next double in the distribution."),(0,o.kt)("h4",{id:"parameters-1"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"returns")," (double) The next double in the distribution")),(0,o.kt)("h2",{id:"getmean"},"getMean"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"double getMean();\n")),(0,o.kt)("p",null,"Return the mean of the distribution, in this case, the constant value."),(0,o.kt)("h4",{id:"parameters-2"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"returns")," (double) The mean of the distribution")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"example-1"},"Example 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"SST::RNG::ConstantDistribution* dist = new SST::RNG::ConstantDistribution(5.0);\n\ndouble next;\nnext = dist->getNextDouble();\n")),(0,o.kt)("h2",{id:"header"},"Header"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/rng/constant.h>\n")))}b.isMDXComponent=!0}}]);