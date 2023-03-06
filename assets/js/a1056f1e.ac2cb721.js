"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3826],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),m=l(r),d=n,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return r?a.createElement(f,s(s({ref:t},i),{},{components:r})):a.createElement(f,s({ref:t},i))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[m]="string"==typeof e?e:n,s[1]=c;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8746:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>m});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),s=["components"],c={title:"constructor"},p=void 0,l={unversionedId:"core/params/constructor",id:"core/params/constructor",title:"constructor",description:"Create a new Params object, either empty or copying from an existing set.",source:"@site/../docs/core/params/constructor.md",sourceDirName:"core/params",slug:"/core/params/constructor",permalink:"/sst-docs/docs/core/params/constructor",draft:!1,editUrl:"https://github.com/sstsimulator/docs/edit/master/docs/../docs/core/params/constructor.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1678138197,formattedLastUpdatedAt:"Mar 6, 2023",frontMatter:{title:"constructor"},sidebar:"Core API",previous:{title:"SST::Params",permalink:"/sst-docs/docs/core/params/class"},next:{title:"destructor",permalink:"/sst-docs/docs/core/params/destructor"}},i={},m=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Header",id:"header",level:2}],u={toc:m},d="wrapper";function f(e){var t=e.components,r=(0,n.Z)(e,s);return(0,o.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"// Create a new empty Params object\nParams();\n// Create a copy of an existing Params object\nParams(const Params& old);\n")),(0,o.kt)("p",null,"Create a new Params object, either empty or copying from an existing set."),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"old")," (Params) An existing set of parameters to duplicate.")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"example-1"},"Example 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'SST::Params params;\nparams.insert("amount", "1");\n')),(0,o.kt)("h2",{id:"header"},"Header"),(0,o.kt)("p",null,"The Params header file is included with any SST object that supports Params."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/component.h> // or\n#include <sst/core/subcomponent.h> // or\n#include <sst/core/componentExtension.h> // or\n#include <sst/core/params.h> // if not included in base class\n")))}f.isMDXComponent=!0}}]);