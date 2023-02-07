"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3143],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),f=c(n),d=a,u=f["".concat(l,".").concat(d)]||f[d]||m[d]||s;return n?o.createElement(u,i(i({ref:t},p),{},{components:n})):o.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[f]="string"==typeof e?e:a,i[1]=r;for(var c=2;c<s;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8709:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>f});var o=n(7462),a=n(3366),s=(n(7294),n(3905)),i=["components"],r={id:"sst-config",title:"sst-config"},l=void 0,c={unversionedId:"tools/commandLine/sst-config",id:"tools/commandLine/sst-config",title:"sst-config",description:"This page has not been reviewed recently to ensure that it is up-to-date with the latest SST specification. It is possible the information is out of date.",source:"@site/../docs/tools/commandLine/sst-config.md",sourceDirName:"tools/commandLine",slug:"/tools/commandLine/sst-config",permalink:"/sst-docs/docs/tools/commandLine/sst-config",draft:!1,editUrl:"https://github.com/sstsimulator/docs/edit/master/docs/../docs/tools/commandLine/sst-config.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1675712938,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{id:"sst-config",title:"sst-config"},sidebar:"Tools",next:{title:"sst-info",permalink:"/sst-docs/docs/tools/commandLine/sst-info"}},p={},f=[{value:"Remarks",id:"remarks",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"All config values",id:"all-config-values",level:3},{value:"C++ compiler",id:"c-compiler",level:3},{value:"C++ compiler flags",id:"c-compiler-flags",level:3},{value:"C++ LD flags",id:"c-ld-flags",level:3},{value:"In a makefile",id:"in-a-makefile",level:3},{value:"See Also",id:"see-also",level:2}],m={toc:f},d="wrapper";function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)(d,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"This page has not been reviewed recently to ensure that it is up-to-date with the latest SST specification. It is possible the information is out of date.")),(0,s.kt)("h2",{id:"remarks"},"Remarks"),(0,s.kt)("p",null,"The command line utility, sst-config, retrieves information on how the SST Core was compiled. "),(0,s.kt)("p",null,"Most often it is used when compiling elements. It is called in the makefile to get the correct compiler and flags to use."),(0,s.kt)("h2",{id:"syntax"},"Syntax"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sst-config\nsst-config --<KEY>\nsst-config <GROUP> <KEY>\n\n<GROUP>    Name of group to which the key belongs\n           (e.g. DRAMSim group contains all DRAMSim\n           KEY=VALUE settings).\n<KEY>      Name of the setting key to find.\n           If <GROUP> not specified this is found in\n           the 'SSTCore' default group.\n\n")),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("h3",{id:"all-config-values"},"All config values"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sst-config\n")),(0,s.kt)("h3",{id:"c-compiler"},"C++ compiler"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sst-config --CXX\n")),(0,s.kt)("h3",{id:"c-compiler-flags"},"C++ compiler flags"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sst-config --ELEMENT_CXXFLAGS\n")),(0,s.kt)("h3",{id:"c-ld-flags"},"C++ LD flags"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sst-config --ELEMENT_LDFLAGS\n")),(0,s.kt)("h3",{id:"in-a-makefile"},"In a makefile"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-makefile"},"CXX=$(shell sst-config --CXX)\nCXXFLAGS=$(shell sst-config --ELEMENT_CXXFLAGS)\nLDFLAGS=$(shell sst-config --ELEMENT_LDFLAGS)\n")),(0,s.kt)("h2",{id:"see-also"},"See Also"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/sst-docs/docs/guides/files/basics_makefile"},"Basics: Makefile"))))}u.isMDXComponent=!0}}]);