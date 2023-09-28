"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5323],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},94998:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"ariel"},o=void 0,l={unversionedId:"elements/ariel/intro",id:"elements/ariel/intro",title:"ariel",description:"The ariel library models a multicore CPU using a dynamic application trace. The CPU models memory accesses in detail and non-memory accesses as a single cycle operation. Instruction dependencies are not tracked. The ariel library divides the simulation into two parts: a frontend that provides a trace, and a CPU simulation model that consumes the trace and provides the modeling itself. The included frontend leverages Pin to dynamically trace a natively executing x86 application. This frontend supports threaded applications but not MPI applications. Ariel supports memory models that use the StandardMem interface.",source:"@site/../docs/elements/ariel/intro.md",sourceDirName:"elements/ariel",slug:"/elements/ariel/intro",permalink:"/sst-docs/docs/elements/ariel/intro",draft:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/elements/ariel/intro.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1695940750,formattedLastUpdatedAt:"Sep 28, 2023",frontMatter:{title:"ariel"},sidebar:"elements",previous:{title:"Overview",permalink:"/sst-docs/docs/elements/intro"},next:{title:"balar",permalink:"/sst-docs/docs/elements/balar/intro"}},s={},c=[{value:"Required dependencies",id:"required-dependencies",level:3},{value:"Optional dependencies",id:"optional-dependencies",level:3}],p={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"ariel")," library models a multicore CPU using a dynamic application trace. The CPU models memory accesses in detail and non-memory accesses as a single cycle operation. Instruction dependencies are not tracked. The ariel library divides the simulation into two parts: a frontend that provides a trace, and a CPU simulation model that consumes the trace and provides the modeling itself. The included frontend leverages Pin to dynamically trace a natively executing x86 application. This frontend supports threaded applications but not MPI applications. Ariel supports memory models that use the ",(0,a.kt)("a",{parentName:"p",href:"../../core/iface/Standardmem/class"},"StandardMem")," interface. "),(0,a.kt)("admonition",{title:"At a Glance",type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Source Code:")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/ariel"},"sst-elements/.../ariel")," ","\xa0",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"SST Name:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"ariel")," ","\xa0",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Maturity Level:")," Mature (3) ","\xa0",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Development Path:")," Active ","\xa0",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Last Released:")," SST 13.0")),(0,a.kt)("h3",{id:"required-dependencies"},"Required dependencies"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Pin")," Required for the built-in Pintool tracer. Note that the ariel CPU model will build without Pin but it is required for the included frontend tracer.")),(0,a.kt)("h3",{id:"optional-dependencies"},"Optional dependencies"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"zlib")," Enables generating a compressed execution trace")))}m.isMDXComponent=!0}}]);