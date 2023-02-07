"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2952],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},s=Object.keys(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),l=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=l(t.components);return r.createElement(p.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,s=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=l(n),d=a,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||s;return n?r.createElement(f,i(i({ref:e},u),{},{components:n})):r.createElement(f,i({ref:e},u))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[c]="string"==typeof t?t:a,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6993:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),i=["components"],o={id:"setStatisticOutput",title:"setStatisticOutput"},p=void 0,l={unversionedId:"config/stats/setStatisticOutput",id:"config/stats/setStatisticOutput",title:"setStatisticOutput",description:"\x3c!---",source:"@site/../docs/config/stats/setStatisticOutput.md",sourceDirName:"config/stats",slug:"/config/stats/setStatisticOutput",permalink:"/sst-docs/docs/config/stats/setStatisticOutput",draft:!1,editUrl:"https://github.com/sstsimulator/docs/edit/master/docs/../docs/config/stats/setStatisticOutput.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1666994206,formattedLastUpdatedAt:"Oct 28, 2022",frontMatter:{id:"setStatisticOutput",title:"setStatisticOutput"},sidebar:"Configuration",previous:{title:"setStatisticLoadLevelForComponentType",permalink:"/sst-docs/docs/config/stats/setStatisticLoadLevelForComponentType"},next:{title:"setStatisticOutputOption",permalink:"/sst-docs/docs/config/stats/setStatisticOutputOption"}},u={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Import",id:"import",level:2}],m={toc:c},d="wrapper";function f(t){var e=t.components,n=(0,a.Z)(t,i);return(0,s.kt)(d,(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Sets the global StatisticOutput to be of the module type specified. Built-in modules include:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"CSV")," statOutputCSV"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Console")," statOutputConsole"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Text")," statOutputTXT"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"JSON")," statOutputJSON"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"HDF5")," statOutputhdf5 (if core is configured with HDF5)")),(0,s.kt)("h2",{id:"syntax"},"Syntax"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"sst.setStatisticOutput(stat_output_module, options)\n")),(0,s.kt)("h2",{id:"parameters"},"Parameters"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"stat_output_module")," (type: string) name of the stat output module to load in lib.element format. "),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"options")," (type: dict) OPTIONAL. contents specify the option as dictionary keys with the options value being specified by the corresponding dictionary value. "),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"returns")," none")),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("h3",{id:"example-1"},"Example 1"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'import sst\n\nsst.setStatisticOutput("sst.statOutputCSV", { "filepath" : "stats.csv", "separator" : "," } )\n')),(0,s.kt)("h2",{id:"import"},"Import"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"import sst\n")))}f.isMDXComponent=!0}}]);