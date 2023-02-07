"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2218],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,y=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return n?o.createElement(y,s(s({ref:t},c),{},{components:n})):o.createElement(y,s({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8649:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),s=["components"],i={id:"setStatisticLoadLevelForComponentType",title:"setStatisticLoadLevelForComponentType"},l=void 0,p={unversionedId:"config/stats/setStatisticLoadLevelForComponentType",id:"config/stats/setStatisticLoadLevelForComponentType",title:"setStatisticLoadLevelForComponentType",description:"\x3c!---",source:"@site/../docs/config/stats/setStatisticLoadLevelForComponentType.md",sourceDirName:"config/stats",slug:"/config/stats/setStatisticLoadLevelForComponentType",permalink:"/sst-docs/docs/config/stats/setStatisticLoadLevelForComponentType",draft:!1,editUrl:"https://github.com/sstsimulator/docs/edit/master/docs/../docs/config/stats/setStatisticLoadLevelForComponentType.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1666994206,formattedLastUpdatedAt:"Oct 28, 2022",frontMatter:{id:"setStatisticLoadLevelForComponentType",title:"setStatisticLoadLevelForComponentType"},sidebar:"Configuration",previous:{title:"setStatisticLoadLevelForComponentName",permalink:"/sst-docs/docs/config/stats/setStatisticLoadLevelForComponentName"},next:{title:"setStatisticOutput",permalink:"/sst-docs/docs/config/stats/setStatisticOutput"}},c={},m=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Import",id:"import",level:2}],d={toc:m},u="wrapper";function y(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)(u,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Sets the statistic load level for all components of the specified type. "),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"sst.setStatisticLoadLevelForComponentType(comp_type, level, apply_to_children=False)\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"comp_type")," (type: string) type of the Component or SubComponent on which to set the statistic load level. All previously instanced elements of this type will have their level set. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"level")," (type: int) statistic load level for the component "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"apply_to_children")," : (type:bool) OPTIONAL. If set to True, will recursively enable specified statistic on all SubComponent descendants. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"returns")," none")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"example-1"},"Example 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import sst\n\nsst.Component("c0", "simpleElementExample.basicStatistics")\n\nsst.setStatisticLoadLevelForComponentType("simpleElementExample.basicStatistics", 3)\n')),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import sst\n")))}y.isMDXComponent=!0}}]);