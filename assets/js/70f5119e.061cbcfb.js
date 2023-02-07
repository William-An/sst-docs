"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4667],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>f});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=a.createContext({}),c=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(f,s(s({ref:e},p),{},{components:n})):a.createElement(f,s({ref:e},p))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[m]="string"==typeof t?t:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2405:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),s=["components"],i={id:"enableStatisticForComponentName",title:"enableStatisticForComponentName"},l=void 0,c={unversionedId:"config/stats/enableStatisticForComponentName",id:"config/stats/enableStatisticForComponentName",title:"enableStatisticForComponentName",description:"\x3c!---",source:"@site/../docs/config/stats/enableStatisticForComponentName.md",sourceDirName:"config/stats",slug:"/config/stats/enableStatisticForComponentName",permalink:"/sst-docs/docs/config/stats/enableStatisticForComponentName",draft:!1,editUrl:"https://github.com/sstsimulator/docs/edit/master/docs/../docs/config/stats/enableStatisticForComponentName.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1666994206,formattedLastUpdatedAt:"Oct 28, 2022",frontMatter:{id:"enableStatisticForComponentName",title:"enableStatisticForComponentName"},sidebar:"Configuration",previous:{title:"enableAllStatisticsForComponentType",permalink:"/sst-docs/docs/config/stats/enableAllStatisticsForComponentType"},next:{title:"enableStatisticsForComponentName",permalink:"/sst-docs/docs/config/stats/enableStatisticsForComponentName"}},p={},m=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Import",id:"import",level:2}],u={toc:m},d="wrapper";function f(t){var e=t.components,n=(0,o.Z)(t,s);return(0,r.kt)(d,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Enables a statistic for the component on which the call is made. "),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"sst.enableStatisticForComponentName(name, stat, stat_params_dict, apply_to_children=False)\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"name")," (type: string) name of the Component or SubComponent on which to enable the specified statistic. The name for SubComponents is described above. Slot indexes are optional in cases where only on SubComponent has been added to a slot, but you can also use ","[0]"," in all cases, even when the actual name will not display this way. If component with the provided name not found, the function will call fatal(). "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"stat")," (type: string) statistic to be enabled "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"stat_params_dict")," (type: dict) OPTIONAL. Python dictionary that specifies the statistic parameters "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"apply_to_children")," (type: bool) OPTIONAL. If set to True, will recursively enable specified statistic on all SubComponent descendants. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"returns")," none")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"example-1"},"Example 1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import sst\n\nsst.Component("c0", "simpleElementExample.basicStatistics")\nsst.Component("c1", "simpleElementExample.basicStatistics")\nsst.Component("c2", "simpleElementExample.basicStatistics")\n\nparams = { "rate" : "500ns" } # Report statistics every 500ns\n# \'UINT32_statistic\' is the name of a statistic in simpleElementExample.basicStatistics\nsst.enableStatisticForComponentName("c0", "UINT32_statistic")\nsst.enableStatisticForComponentName("c1", "UINT32_statistic", params)\nsst.enableStatisticForComponentName("c2", "UINT32_statistic", params, True)\n')),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import sst\n")))}f.isMDXComponent=!0}}]);