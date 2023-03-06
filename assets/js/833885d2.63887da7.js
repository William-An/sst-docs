"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6239],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5707:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),s=["components"],l={title:"sst_types"},o=void 0,p={unversionedId:"core/types/class",id:"core/types/class",title:"sst_types",description:"SST defines a number of types that developers may encounter throughout the codebase. Several of these types are defined in the sst_types.h header and described below.",source:"@site/../docs/core/types/class.md",sourceDirName:"core/types",slug:"/core/types/class",permalink:"/sst-docs/docs/core/types/class",draft:!1,editUrl:"https://github.com/sstsimulator/docs/edit/master/docs/../docs/core/types/class.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1678138197,formattedLastUpdatedAt:"Mar 6, 2023",frontMatter:{title:"sst_types"},sidebar:"Core API",previous:{title:"getPeriod",permalink:"/sst-docs/docs/core/timeconverter/getPeriod"},next:{title:"SST::UnitAlgebra",permalink:"/sst-docs/docs/core/unitalgebra/class"}},c={},u=[{value:"Identifiers",id:"identifiers",level:2},{value:"Time",id:"time",level:2},{value:"Units",id:"units",level:2},{value:"Macros",id:"macros",level:2},{value:"Header",id:"header",level:2}],d={toc:u},m="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"SST defines a number of types that developers may encounter throughout the codebase. Several of these types are defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"sst_types.h")," header and described below."),(0,i.kt)("h2",{id:"identifiers"},"Identifiers"),(0,i.kt)("p",null,"These types are used to uniquely tag SST objects."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"ComponentId_t")," (uint64_t)"),(0,i.kt)("p",{parentName:"li"},"  A unique identifier assigned to each component and subcomponent in the simulation. SubComponent IDs share lower-order bits with their parent Component ID. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"StatisticId_t")," (uint64_t)"),(0,i.kt)("p",{parentName:"li"},"  An identifier assigned to each statistic in the simulation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"LinkId_t")," (uint32_t)"),(0,i.kt)("p",{parentName:"li"},"  A unique identifier assigned to each link in the simulation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"HandlerId_t")," (uint64_t)"),(0,i.kt)("p",{parentName:"li"},"  A unique identifier assigned to handler functions (clock, link, etc.)"))),(0,i.kt)("h2",{id:"time"},"Time"),(0,i.kt)("p",null,"Several time types are used through SST."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Cycle_t")," (uint64_t)"),(0,i.kt)("p",{parentName:"li"},"  A count of clock cycles")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"SimTime_t")," (uint64_t)"),(0,i.kt)("p",{parentName:"li"},"  Time counted in the simulation's base time quanta. By default this is picoseconds (ps).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Time_t")," (double)"),(0,i.kt)("p",{parentName:"li"},"  Time in seconds"))),(0,i.kt)("h2",{id:"units"},"Units"),(0,i.kt)("p",null,"Typedefs are included for the following units."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"watts")," (double)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"joules")," (double)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"farads")," (double)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"volts")," (double)")),(0,i.kt)("h2",{id:"macros"},"Macros"),(0,i.kt)("p",null,"Lastly, ",(0,i.kt)("inlineCode",{parentName:"p"},"sst_types.h")," includes some macros for optimizing branch code. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#define LIKELY(x)   __builtin_expect((int)(x), 1)\n#define UNLIKELY(x) __builtin_expect((int)(x), 0)\n")),(0,i.kt)("h2",{id:"header"},"Header"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"sst_types.h")," header file is included in many SST header files already but can also be included directly if needed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/sst_types.h>\n")))}f.isMDXComponent=!0}}]);