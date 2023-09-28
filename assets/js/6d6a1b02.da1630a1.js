"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2415],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,g=c["".concat(o,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(g,s(s({ref:t},u),{},{components:n})):a.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25204:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"SST::UnitAlgebra",keywords:["seconds","bytes","bits","events","Hz","hz","Bps","bps","event","SI","unit"]},s=void 0,l={unversionedId:"core/unitalgebra/class",id:"core/unitalgebra/class",title:"SST::UnitAlgebra",description:"The UnitAlgebra class can be used to manipulate values with units that are common in architectural simulations. The class includes support for basic arithmetic with units (addition, subtraction, multiplication, division), as well as conversion between related units such as bits and bytes. UnitAlgebra also handles SI units.",source:"@site/../docs/core/unitalgebra/class.md",sourceDirName:"core/unitalgebra",slug:"/core/unitalgebra/class",permalink:"/sst-docs/docs/core/unitalgebra/class",draft:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/unitalgebra/class.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1695940750,formattedLastUpdatedAt:"Sep 28, 2023",frontMatter:{title:"SST::UnitAlgebra",keywords:["seconds","bytes","bits","events","Hz","hz","Bps","bps","event","SI","unit"]},sidebar:"core",previous:{title:"sst_types",permalink:"/sst-docs/docs/core/types/class"},next:{title:"constructor",permalink:"/sst-docs/docs/core/unitalgebra/constructor"}},o={},p=[{value:"Serialization",id:"serialization",level:2},{value:"Header",id:"header",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The UnitAlgebra class can be used to manipulate values with units that are common in architectural simulations. The class includes support for basic arithmetic with units (addition, subtraction, multiplication, division), as well as conversion between related units such as bits and bytes. UnitAlgebra also handles SI units."),(0,r.kt)("p",null,"Each UnitAlgebra consists of a value, stored in a decimal fixed point format, and units, which can include both a numerator and denominator (e.g., bytes/second). "),(0,r.kt)("p",null,"UnitAlgebra supports the following units. For compound units (Hz, Bps, bps), it also automatically converts the numerator/denominator form of the unit to the compound form."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"s")," seconds"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"B")," bytes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"b")," bits"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"events")," events"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Hz")," 1/s, converts units of '1/s'"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hz")," 1/s"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Bps")," B/s, converts units of 'B/s'"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"bps")," b/s, converts units of 'b/s'"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"event")," events")),(0,r.kt)("p",null,"All units can also include standard SI prefixes as follows. UnitAlgebra uses the convention that appending an 'i' to a prefix indicates a binary versus a decimal prefix."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"a")," atto, 1e-18"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"f")," femto, 1e-15"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"p")," pico, 1e-12"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"n")," nano, 1e-9"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"u")," micro, 1e-6"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"m")," milli, 1e-3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"k"),", ",(0,r.kt)("strong",{parentName:"li"},"K")," kilo, 1e3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"M")," mega, 1e6"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"G")," giga, 1e9"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"T")," tera, 1e12"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"P")," peta, 1e15"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"E")," exa, 1e18"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ki"),", ",(0,r.kt)("strong",{parentName:"li"},"Ki")," kibi, x1024"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Mi")," mebi, x1024^2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Gi")," gibi, x1024^3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ti")," tebi, x1024^4"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Pi")," pebi, x1024^5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ei"),", exbi, x1024^6")),(0,r.kt)("h2",{id:"serialization"},"Serialization"),(0,r.kt)("p",null,"The UnitAlgebra class supports serialization and can be used in event serializers."),(0,r.kt)("admonition",{title:"Speed Check",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"UnitAlgebra is designed for convenience, not performance. It employs string operations to manipulate units. Use it outside of SST's run phase for things like parsing parameters and calculating values needed for simulation. During the run phase, use this class sparingly or in situations where performance is not a critical concern (e.g., for pretty-printing debug information).")),(0,r.kt)("h2",{id:"header"},"Header"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/unitalgebra.h>\n")))}m.isMDXComponent=!0}}]);