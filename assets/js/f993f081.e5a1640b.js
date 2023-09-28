"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4695],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={title:"merlin"},a=void 0,s={unversionedId:"elements/merlin/intro",id:"elements/merlin/intro",title:"merlin",description:"Merlin consists of models used for the simulation of high-performance interconnects. The models conform to the SimpleNetwork interface and consist of a configurable input/output queued high-radix router, and network interface for use by the endpoint model.  The router supports multiple network topologies and has pluggable implementations for crossbar arbitration and output arbitration. Merlin is primarily designed to model system-level interconnects, but is sufficiently flexible to be used as a node-level network as well.",source:"@site/../docs/elements/merlin/intro.md",sourceDirName:"elements/merlin",slug:"/elements/merlin/intro",permalink:"/sst-docs/docs/elements/merlin/intro",draft:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/elements/merlin/intro.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1695940750,formattedLastUpdatedAt:"Sep 28, 2023",frontMatter:{title:"merlin"},sidebar:"elements",previous:{title:"mercury",permalink:"/sst-docs/docs/elements/mercury/intro"},next:{title:"messier",permalink:"/sst-docs/docs/elements/messier/intro"}},l={},p=[{value:"Required dependencies",id:"required-dependencies",level:3},{value:"Optional dependencies",id:"optional-dependencies",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Merlin")," consists of models used for the simulation of high-performance interconnects. The models conform to the ",(0,o.kt)("a",{parentName:"p",href:"../../core/iface/SimpleNetwork/class"},"SimpleNetwork")," interface and consist of a configurable input/output queued high-radix router, and network interface for use by the endpoint model.  The router supports multiple network topologies and has pluggable implementations for crossbar arbitration and output arbitration. Merlin is primarily designed to model system-level interconnects, but is sufficiently flexible to be used as a node-level network as well."),(0,o.kt)("admonition",{title:"At a Glance",type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Source Code:")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/merlin"},"sst-elements/.../merlin")," ","\xa0",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"SST Name:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"merlin")," ","\xa0",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Maturity Level:")," Mature (3) ","\xa0",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Development Path:")," Active ","\xa0",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Last Released:")," SST 13.0")),(0,o.kt)("h3",{id:"required-dependencies"},"Required dependencies"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"None")),(0,o.kt)("h3",{id:"optional-dependencies"},"Optional dependencies"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"None")))}u.isMDXComponent=!0}}]);