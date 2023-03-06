"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[820],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),u=o,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||a;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8360:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),l=["components"],i={title:"SST_ELI_DELETE_PROFILE_POINT",sidebar_label:"Profile points"},p=void 0,s={unversionedId:"core/eli/delete/sst_eli_delete_profile_point",id:"core/eli/delete/sst_eli_delete_profile_point",title:"SST_ELI_DELETE_PROFILE_POINT",description:"Availability: Component, SubComponent",source:"@site/../docs/core/eli/delete/sst_eli_delete_profile_point.md",sourceDirName:"core/eli/delete",slug:"/core/eli/delete/sst_eli_delete_profile_point",permalink:"/sst-docs/docs/core/eli/delete/sst_eli_delete_profile_point",draft:!1,editUrl:"https://github.com/sstsimulator/docs/edit/master/docs/../docs/core/eli/delete/sst_eli_delete_profile_point.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1678138197,formattedLastUpdatedAt:"Mar 6, 2023",frontMatter:{title:"SST_ELI_DELETE_PROFILE_POINT",sidebar_label:"Profile points"},sidebar:"Core API",previous:{title:"Ports",permalink:"/sst-docs/docs/core/eli/delete/sst_eli_delete_port"},next:{title:"Statistics",permalink:"/sst-docs/docs/core/eli/delete/sst_eli_delete_stat"}},c={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Header",id:"header",level:2}],m={toc:d},u="wrapper";function f(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)(u,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'/* Macro */\nSST_ELI_DELETE_PROFILE_POINT("point_name")\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Availability:")," Component, SubComponent"),(0,a.kt)("p",null,"Use this macro inside an ",(0,a.kt)("a",{parentName:"p",href:"../document/sst_eli_document_profile_points"},(0,a.kt)("inlineCode",{parentName:"a"},"SST_ELI_DOCUMENT_PROFILE_POINTS"))," macro to remove a profile point from the object's ELI. This can be useful when an object has inherited ELI that it doesn't support. "),(0,a.kt)("admonition",{title:"Important",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This macro must reside in a ",(0,a.kt)("inlineCode",{parentName:"p"},"public")," section of the object's header file.")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"point_name")," (string) The name of the profiling point to remove.")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"example-1"},"Example 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'/* simpleElementExample/basicParams.h */\n SST_ELI_DOCUMENT_PROFILE_POINTS(\n   SST_ELI_DELETE_PROFILE_POINT("clock_profiler")\n )\n')),(0,a.kt)("h2",{id:"header"},"Header"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/component.h> // or\n#include <sst/core/subcomponent.h>\n")))}f.isMDXComponent=!0}}]);