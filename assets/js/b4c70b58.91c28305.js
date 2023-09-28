"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[545],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,f=p["".concat(l,".").concat(u)]||p[u]||d[u]||i;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},34807:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"miranda"},o=void 0,s={unversionedId:"elements/miranda/intro",id:"elements/miranda/intro",title:"miranda",description:"Miranda is a state-machine based core model. The model is split into a core model and an instruction stream generator. Built-in generators include patterns such as SPMV, GUPS, Stream kernels, and stencils. Additionally, the Stake generator integrates with the Spike RISC-V functional simulator to provide timing simulation. The Miranda core accepts memory instructions; other instructions are simulated via timing delays only. Dependencies between instructions are observed. The processor interfaces with memory via the SST::StandardMem interface.",source:"@site/../docs/elements/miranda/intro.md",sourceDirName:"elements/miranda",slug:"/elements/miranda/intro",permalink:"/sst-docs/docs/elements/miranda/intro",draft:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/elements/miranda/intro.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1695940750,formattedLastUpdatedAt:"Sep 28, 2023",frontMatter:{title:"miranda"},sidebar:"elements",previous:{title:"messier",permalink:"/sst-docs/docs/elements/messier/intro"},next:{title:"mmu",permalink:"/sst-docs/docs/elements/mmu/intro"}},l={},c=[{value:"Required dependencies",id:"required-dependencies",level:3},{value:"Optional dependencies",id:"optional-dependencies",level:3}],m={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Miranda")," is a state-machine based core model. The model is split into a core model and an instruction stream generator. Built-in generators include patterns such as SPMV, GUPS, Stream kernels, and stencils. Additionally, the Stake generator integrates with the Spike RISC-V functional simulator to provide timing simulation. The Miranda core accepts memory instructions; other instructions are simulated via timing delays only. Dependencies between instructions are observed. The processor interfaces with memory via the ",(0,a.kt)("a",{parentName:"p",href:"../../core/iface/StandardMem/class"},"SST::StandardMem")," interface."),(0,a.kt)("admonition",{title:"At a Glance",type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Source Code:")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/miranda"},"sst-elements/.../miranda")," ","\xa0",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"SST Name:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"miranda")," ","\xa0",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Maturity Level:")," Mature (3) ","\xa0",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Development Path:")," Active ","\xa0",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Last Released:")," SST 13.0")),(0,a.kt)("h3",{id:"required-dependencies"},"Required dependencies"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"None")),(0,a.kt)("h3",{id:"optional-dependencies"},"Optional dependencies"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/riscv-software-src/riscv-isa-sim"},(0,a.kt)("strong",{parentName:"a"},"Spike"))," Miranda's ",(0,a.kt)("em",{parentName:"li"},"Stake")," generator takes input from the Spike RISC-V functional simulator rather than synthetically generating instructions.")))}d.isMDXComponent=!0}}]);