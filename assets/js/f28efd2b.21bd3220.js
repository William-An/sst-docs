"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8806],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3893:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={title:"SST_ELI_DOCUMENT_ATTRIBUTES",sidebar_label:"Attributes"},s=void 0,c={unversionedId:"core/eli/document/sst_eli_document_attributes",id:"core/eli/document/sst_eli_document_attributes",title:"SST_ELI_DOCUMENT_ATTRIBUTES",description:"Availability: Component, SubComponent",source:"@site/../docs/core/eli/document/sst_eli_document_attributes.md",sourceDirName:"core/eli/document",slug:"/core/eli/document/sst_eli_document_attributes",permalink:"/sst-docs/docs/core/eli/document/sst_eli_document_attributes",draft:!1,editUrl:"https://github.com/sstsimulator/docs/edit/master/docs/../docs/core/eli/document/sst_eli_document_attributes.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1678138197,formattedLastUpdatedAt:"Mar 6, 2023",frontMatter:{title:"SST_ELI_DOCUMENT_ATTRIBUTES",sidebar_label:"Attributes"},sidebar:"Core API",previous:{title:"Python Module",permalink:"/sst-docs/docs/core/eli/register/sst_eli_register_python_module"},next:{title:"Parameters",permalink:"/sst-docs/docs/core/eli/document/sst_eli_document_params"}},u={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Header",id:"header",level:2}],m={toc:p},d="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'/* Macro */\nSST_ELI_DOCUMENT_ATTRIBUTES ( \n    { "key0", "value0" },\n    { "key1", "value1" },\n    { "key2", "value2" },\n    ...\n    { "keyX", "valueX" }\n )\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Availability:")," Component, SubComponent"),(0,o.kt)("p",null,"Use this macro to register arbitrary key/value pairs on an SST object. SST returns these attributes as part of ",(0,o.kt)("inlineCode",{parentName:"p"},"sst-info")," queries and they can be used to assist with lookup and identification of objects. They have no impact on simulation itself."),(0,o.kt)("admonition",{title:"Important",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This macro must reside in a ",(0,o.kt)("inlineCode",{parentName:"p"},"public")," section of the object's header file.")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"keyX")," (string) A key"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"valueX")," (string) A value")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"example-1"},"Example 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},' SST_ELI_DOCUMENT_ATTRIBUTES(\n    { "for_testing",    "true" }\n )\n\n')),(0,o.kt)("h2",{id:"header"},"Header"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/component.h> // or\n#include <sst/core/subcomponent.h>\n")))}f.isMDXComponent=!0}}]);