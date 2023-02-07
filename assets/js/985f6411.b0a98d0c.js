"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8719],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>f});var r=n(7294);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,s=function(t,e){if(null==t)return{};var n,r,s={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},l=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,s=t.mdxType,i=t.originalType,p=t.parentName,l=o(t,["components","mdxType","originalType","parentName"]),u=c(n),m=s,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,a(a({ref:e},l),{},{components:n})):r.createElement(f,a({ref:e},l))}));function f(t,e){var n=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var i=n.length,a=new Array(i);a[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:s,a[1]=o;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},450:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>p,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(7462),s=n(3366),i=(n(7294),n(3905)),a=["components"],o={id:"setStatisticOutputOptions",title:"setStatisticOutputOptions"},p=void 0,c={unversionedId:"config/stats/setStatisticOutputOptions",id:"config/stats/setStatisticOutputOptions",title:"setStatisticOutputOptions",description:"\x3c!---",source:"@site/../docs/config/stats/setStatisticOutputOptions.md",sourceDirName:"config/stats",slug:"/config/stats/setStatisticOutputOptions",permalink:"/sst-docs/docs/config/stats/setStatisticOutputOptions",draft:!1,editUrl:"https://github.com/sstsimulator/docs/edit/master/docs/../docs/config/stats/setStatisticOutputOptions.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1666994206,formattedLastUpdatedAt:"Oct 28, 2022",frontMatter:{id:"setStatisticOutputOptions",title:"setStatisticOutputOptions"},sidebar:"Configuration",previous:{title:"setStatisticOutputOption",permalink:"/sst-docs/docs/config/stats/setStatisticOutputOption"},next:{title:"Statistics Objects",permalink:"/sst-docs/docs/config/stats/object/statisticObject"}},l={},u=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Import",id:"import",level:2}],d={toc:u},m="wrapper";function f(t){var e=t.components,n=(0,s.Z)(t,a);return(0,i.kt)(m,(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Set the specified options for the StatisticOutput object."),(0,i.kt)("h2",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"sst.setStatisticOutputOptions(options)\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"options")," (type: dict) dictionary the contents specify the option as dictionary keys with the options value being specified by the corresponding dictionary value. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"returns")," none")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"example-1"},"Example 1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import sst\n\noptions = {\n    "filepath" : "stats.csv",\n    "separator" : ", "\n}\nsst.setStatisticOutputOptions(options)\n')),(0,i.kt)("h2",{id:"import"},"Import"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import sst\n")))}f.isMDXComponent=!0}}]);