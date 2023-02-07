"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9342],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>E});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,E=c["".concat(l,".").concat(d)]||c[d]||u[d]||a;return n?r.createElement(E,i(i({ref:t},m),{},{components:n})):r.createElement(E,i({ref:t},m))}));function E(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6153:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>E,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={title:"SST_ELI_REGISTER_COMPONENT",sidebar_label:"Register Component"},l=void 0,p={unversionedId:"core/eli/sst_eli_register_component",id:"core/eli/sst_eli_register_component",title:"SST_ELI_REGISTER_COMPONENT",description:"All components must register themselves with SST using this macro. The library and name strings provided in this macro",source:"@site/../docs/core/eli/sst_eli_register_component.md",sourceDirName:"core/eli",slug:"/core/eli/sst_eli_register_component",permalink:"/sst-docs/docs/core/eli/sst_eli_register_component",draft:!1,editUrl:"https://github.com/sstsimulator/docs/edit/master/docs/../docs/core/eli/sst_eli_register_component.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1675712938,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{title:"SST_ELI_REGISTER_COMPONENT",sidebar_label:"Register Component"},sidebar:"Core API",previous:{title:"getOutputDirectory",permalink:"/sst-docs/docs/core/component/output/getOutputDirectory"},next:{title:"Register SubComponent",permalink:"/sst-docs/docs/core/eli/sst_eli_register_subcomponent"}},m={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3}],u={toc:c},d="wrapper";function E(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'SST_ELI_REGISTER_COMPONENT(class_name, "library", "name", \n    SST_ELI_ELEMENT_VERSION(major, minorX, minorY), "description", CATEGORY)\n')),(0,a.kt)("p",null,'All components must register themselves with SST using this macro. The library and name strings provided in this macro\nwill be used by SST to identify the component as "library.name". The version, description, and category are displayed\nby ',(0,a.kt)("inlineCode",{parentName:"p"},"sst-info")," to document the purpose and version of the Component."),(0,a.kt)("admonition",{title:"Important",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This macro must reside in a ",(0,a.kt)("inlineCode",{parentName:"p"},"public")," section of the Component's header file.")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"class_name")," (class) The name of the Component class. This is not a string."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"library")," (string) The name of the library that this Component belongs to. If the library name does not exist, it will be created."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"name")," (string) The name that will be used to instantiate this Component in the simulation input configuration. It can be the same as the class_name but does not need to be. The full name of the Component will be ",(0,a.kt)("inlineCode",{parentName:"li"},"library.name"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SST_ELI_ELEMENT_VERSION(major, minorX, minorY)")," This is a macro that specifies the version of a Component. ",(0,a.kt)("inlineCode",{parentName:"li"},"major"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"minorX"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"minorY")," are integers that form a version number major.minorX.minorY. For example: SST_ELI_ELEMENT_VERSION(3, 0, 9) yields a version of 3.0.9. Versions are not checked by SST, this is provided for developers to version and manage their libraries."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"description")," (string) A description of the component"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"CATEGORY")," (CATEGORY) One of a few built-in component categories. This is provided to help users search for components of interest. Options are:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"COMPONENT_CATEGORY_UNCATEGORIZED"),(0,a.kt)("li",{parentName:"ul"},"COMPONENT_CATEGORY_PROCESSOR"),(0,a.kt)("li",{parentName:"ul"},"COMPONENT_CATEGORY_MEMORY"),(0,a.kt)("li",{parentName:"ul"},"COMPONENT_CATEGORY_NETWORK"),(0,a.kt)("li",{parentName:"ul"},"COMPONENT_CATEGORY_SYSTEM")))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"example-1"},"Example 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'class example1 : public SST::Component\n{\npublic:\n\n    SST_ELI_REGISTER_COMPONENT(\n        example1,                           // Component class\n        "simpleElementExample",             // Component library (for Python/library lookup)\n        "example1",                         // Component name (for Python/library lookup)\n        SST_ELI_ELEMENT_VERSION(1,0,0),     // Version of the component (not related to SST version)\n        "Example #2, statistics & RNG",     // Description\n        COMPONENT_CATEGORY_UNCATEGORIZED    // Category\n    )\n\n/* Rest of class */\n};\n\n')))}E.isMDXComponent=!0}}]);