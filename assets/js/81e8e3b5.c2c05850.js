"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9483],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(r),g=a,m=p["".concat(u,".").concat(g)]||p[g]||d[g]||l;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=g;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},4188:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),o=["components"],i={title:"getRoundedValue"},u=void 0,s={unversionedId:"core/unitalgebra/getRoundedValue",id:"core/unitalgebra/getRoundedValue",title:"getRoundedValue",description:"Return the value portion of the UnitAlgebra as a signed 64-bit integer. This discards the units and returns the value in its base units (without SI prefixes). For example, calling getRoundedValue() on a unit algebra of 4KB will return 4000.",source:"@site/../docs/core/unitalgebra/getRoundedValue.md",sourceDirName:"core/unitalgebra",slug:"/core/unitalgebra/getRoundedValue",permalink:"/sst-docs/docs/core/unitalgebra/getRoundedValue",draft:!1,editUrl:"https://github.com/sstsimulator/docs/edit/master/docs/../docs/core/unitalgebra/getRoundedValue.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1678138197,formattedLastUpdatedAt:"Mar 6, 2023",frontMatter:{title:"getRoundedValue"},sidebar:"Core API",previous:{title:"getDoubleValue",permalink:"/sst-docs/docs/core/unitalgebra/getDoubleValue"},next:{title:"getValue",permalink:"/sst-docs/docs/core/unitalgebra/getValue"}},c={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Header",id:"header",level:2}],d={toc:p},g="wrapper";function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)(g,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"int64_t getRoundedValue() const;\n")),(0,l.kt)("p",null,"Return the value portion of the UnitAlgebra as a signed 64-bit integer. This discards the units and returns the value in its base units (without SI prefixes). For example, calling ",(0,l.kt)("inlineCode",{parentName:"p"},"getRoundedValue()")," on a unit algebra of ",(0,l.kt)("inlineCode",{parentName:"p"},"4KB")," will return ",(0,l.kt)("inlineCode",{parentName:"p"},"4000"),". "),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"returns")," (int64_t) The value portion of the UnitAlgebra as an int64_t.")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h3",{id:"example-1"},"Example 1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'SST::UnitAlgebra* num = new UnitAlgebra("2GHz");\nint64_t hz = num->getRoundedValue();\n// hz = 2000000000\n')),(0,l.kt)("h2",{id:"header"},"Header"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/unitalgebra.h>\n")))}m.isMDXComponent=!0}}]);