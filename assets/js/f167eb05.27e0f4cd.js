"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5222],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=i(r),f=o,d=c["".concat(s,".").concat(f)]||c[f]||m[f]||a;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[c]="string"==typeof e?e:o,l[1]=u;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},77484:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>u,toc:()=>i});var n=r(87462),o=(r(67294),r(3905));const a={title:"verbose"},l=void 0,u={unversionedId:"core/output/verbose",id:"core/output/verbose",title:"verbose",description:"Output the verbose message with formatting as specified by the format parameter. Output will only occur if specified outputlevel and outputbits satisfy the verboselevel and verbosemask of the Output object. The output will be prepended with the expanded prefix set in either the constructor or init() function.",source:"@site/../docs/core/output/verbose.md",sourceDirName:"core/output",slug:"/core/output/verbose",permalink:"/sst-docs/docs/core/output/verbose",draft:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/output/verbose.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1695940750,formattedLastUpdatedAt:"Sep 28, 2023",frontMatter:{title:"verbose"},sidebar:"core",previous:{title:"output",permalink:"/sst-docs/docs/core/output/"},next:{title:"verbosePrefix",permalink:"/sst-docs/docs/core/output/verbosePrefix"}},s={},i=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"Header",id:"header",level:2}],p={toc:i},c="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"void verbose(uint32_t line, const char* file, const char* func, uint32_t output_level, \n             uint32_t output_bits, const char* format, ...) const;\n")),(0,o.kt)("p",null,"Output the verbose message with formatting as specified by the format parameter. Output will only occur if specified output_level and output_bits satisfy the verbose_level and verbose_mask of the Output object. The output will be prepended with the expanded prefix set in either the ",(0,o.kt)("a",{parentName:"p",href:"constructor"},"constructor")," or ",(0,o.kt)("a",{parentName:"p",href:"init"},"init()")," function."),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"line")," (uint32_t) Line number of calling function (use CALL_INFO macro)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"file")," (const char*) File name of calling function (use CALL_INFO macro)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"func")," (const char*) Name of calling function (use CALL_INFO macro)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"output_level")," (uint32_t) For output to occur, output_level must be less than or equal to the Output's verbose_level"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"output_bits")," (uint32_t) For output to occur, all bits set in this parameter must also be set in the Output's verbose_mask. It uses this logic: if (",(0,o.kt)("inlineCode",{parentName:"li"},"~verbose_mask & output_bits == 0"),"), then output is enabled."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"format")," (const char*) Format string. All valid formats for printf are available"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"...")," (variable) Arguments for format string"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"returns")," none")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"example-1"},"Example 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'// print message if out\'s verbose_level >= 16\nout->verbose(CALL_INFO, 16, 0, "Configured to print rank to block maps\\n");\n')),(0,o.kt)("h3",{id:"example-2"},"Example 2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'// print message if output\'s verbose_level >= 1\noutput->verbose(CALL_INFO, 1, 0, "Configuring for %" PRIu32 " memory levels; default level is %" PRIu32 ".\\n", memoryLevels, defaultLevel);\n')),(0,o.kt)("h2",{id:"header"},"Header"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/output.h>\n")))}m.isMDXComponent=!0}}]);