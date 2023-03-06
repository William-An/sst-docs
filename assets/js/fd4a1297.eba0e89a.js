"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7511],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),d=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,y=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(y,l(l({ref:t},s),{},{components:n})):r.createElement(y,l({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:a,l[1]=c;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2252:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],c={title:"addRecvLatency"},i=void 0,d={unversionedId:"core/link/addRecvLatency",id:"core/link/addRecvLatency",title:"addRecvLatency",description:"Set additional latency to be added to all events that come in on this link.",source:"@site/../docs/core/link/addRecvLatency.md",sourceDirName:"core/link",slug:"/core/link/addRecvLatency",permalink:"/sst-docs/docs/core/link/addRecvLatency",draft:!1,editUrl:"https://github.com/sstsimulator/docs/edit/master/docs/../docs/core/link/addRecvLatency.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1675712938,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{title:"addRecvLatency"},sidebar:"Core API",previous:{title:"addSendLatency",permalink:"/sst-docs/docs/core/link/addSendLatency"},next:{title:"getDefaultTimeBase",permalink:"/sst-docs/docs/core/link/getDefaultTimeBase"}},s={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Header",id:"header",level:2}],u={toc:p},m="wrapper";function y(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"void addRecvLatency(int cycles, const std::string& timebase);\nvoid addRecvLatency(SimTime_t cycles, TimeConverter* timebase);\n")),(0,o.kt)("p",null,"Set additional latency to be added to all events that come in on this link. "),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"cycles")," (int or SimTime_t) number of cycles of latency to add"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"timebase")," (std::string or TimeConverter*) Base units for cycles"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"returns")," none")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"example-1"},"Example 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'// Configure a link connected to a port named \'port\' \nSST::Link* link = configureLink("port", new Event::Handler<example>(this, &example::handleEvent));\n\n// Add 20ns of latency\nlink->addRecvLatency(1, "20ns");\n\n// Add 4*1ns = 4ns of latency\nlink->addRecvLatency(4, "1GHz");\n\n// Total latency will be 20ns + 4ns + <amount configured on link in input file> \n')),(0,o.kt)("h2",{id:"header"},"Header"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/link.h>\n")))}y.isMDXComponent=!0}}]);