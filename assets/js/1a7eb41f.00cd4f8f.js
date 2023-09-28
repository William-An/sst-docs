"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4368],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(r),u=a,f=p["".concat(c,".").concat(u)]||p[u]||d[u]||i;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(67294),a=r(86010),i=r(53438),o=r(39960),s=r(13919),c=r(95999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:t,children:r}=e;return n.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",l.cardContainer)},r)}function p(e){let{href:t,icon:r,title:i,description:o}=e;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",l.cardTitle),title:i},r," ",i),o&&n.createElement("p",{className:(0,a.Z)("text--truncate",l.cardDescription),title:o},o))}function d(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const r=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:t.description??a?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(u,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,i.jA)();return n.createElement(b,{items:r.items,className:t})}function b(e){const{items:t,className:r}=e;if(!t)return n.createElement(h,e);const o=(0,i.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},43398:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var n=r(87462),a=(r(67294),r(3905)),i=r(52991);const o={title:"ember"},s=void 0,c={unversionedId:"elements/ember/intro",id:"elements/ember/intro",title:"ember",description:"The ember library provides infrastructure for modeling network endpoints and generating network traffic for large-scale network simulations. Applications are modeled as motifs which generate network traffic. Both MPI-like and SHMEM-like motifs are supported. Ember integrates with Firefly which models the NIC and uses the Hermes interface. These in turn integrate with network simulators that implement the SST:SimpleNetwork interface.",source:"@site/../docs/elements/ember/intro.md",sourceDirName:"elements/ember",slug:"/elements/ember/intro",permalink:"/sst-docs/docs/elements/ember/intro",draft:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/elements/ember/intro.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1695940750,formattedLastUpdatedAt:"Sep 28, 2023",frontMatter:{title:"ember"},sidebar:"elements",previous:{title:"CramSim",permalink:"/sst-docs/docs/elements/cramsim/intro"},next:{title:"QuickStart Motif Guide",permalink:"/sst-docs/docs/elements/ember/QuickStart"}},l={},m=[{value:"Required dependencies",id:"required-dependencies",level:3},{value:"Optional dependencies",id:"optional-dependencies",level:3}],p={toc:m},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"ember")," library provides infrastructure for modeling network endpoints and generating network traffic for large-scale network simulations. Applications are modeled as motifs which generate network traffic. Both MPI-like and SHMEM-like motifs are supported. Ember integrates with Firefly which models the NIC and uses the Hermes interface. These in turn integrate with network simulators that implement the ",(0,a.kt)("a",{parentName:"p",href:"../../core/iface/SimpleNetwork/class"},"SST:SimpleNetwork")," interface."),(0,a.kt)("admonition",{title:"At a Glance",type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Source Code:")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/ember"},"sst-elements/.../ember")," ","\xa0",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"SST Name:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"ember")," ","\xa0",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Maturity Level:")," Mature (3) ","\xa0",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Development Path:")," Active ","\xa0",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Last Released:")," SST 13.0")),(0,a.kt)("h3",{id:"required-dependencies"},"Required dependencies"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"None")),(0,a.kt)("h3",{id:"optional-dependencies"},"Optional dependencies"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"None")),(0,a.kt)(i.Z,{mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);