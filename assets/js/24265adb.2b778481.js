"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7080],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3475:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"get-involved",title:"Get Involved"},s=void 0,u={unversionedId:"contribute/get-involved",id:"contribute/get-involved",title:"Get Involved",description:"Help us document SST by contributing to this site.",source:"@site/../docs/contribute/get-involved.md",sourceDirName:"contribute",slug:"/contribute/get-involved",permalink:"/sst-docs/docs/contribute/get-involved",draft:!1,editUrl:"https://github.com/sstsimulator/docs/edit/master/docs/../docs/contribute/get-involved.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1675789811,formattedLastUpdatedAt:"Feb 7, 2023",frontMatter:{id:"get-involved",title:"Get Involved"}},c={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Steps to Download the Git Repo and Submit Changes",id:"steps-to-download-the-git-repo-and-submit-changes",level:2}],d={toc:p},m="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Help us document SST by contributing to this site."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A text editor or IDE. Some options:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"Visual Studio Code")," is a free IDE that runs on Windows, Linux, and Mac."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/en/installation"},"Docusaurus")," so you can test changes locally. Docusaurus dependencies (see installation page for which version(s) are supported.):",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Node "),(0,o.kt)("li",{parentName:"ul"},"Yarn (recommended) ")))),(0,o.kt)("h2",{id:"steps-to-download-the-git-repo-and-submit-changes"},"Steps to Download the Git Repo and Submit Changes"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"General operations when updating the sst-docs content:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ensure Node is installed on development machine."),(0,o.kt)("li",{parentName:"ul"},"Fork and then clone the sst-docs repository.  "),(0,o.kt)("li",{parentName:"ul"},"Create a feature branch from your fork's master branch on your local repo."),(0,o.kt)("li",{parentName:"ul"},"cd into sst-docs/website "),(0,o.kt)("li",{parentName:"ul"},"Initialize Docusaurus ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"> npm install")))),(0,o.kt)("li",{parentName:"ul"},"Test local hosting operation",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"> npm start")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"NOTE:")," May need to run ",(0,o.kt)("inlineCode",{parentName:"li"},"> export NO_PROXY=localhost")," if behind a proxy (see ",(0,o.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/en/installation#launching-the-server-behind-a-proxy"},"Docusaurus Proxy Info")," )"),(0,o.kt)("li",{parentName:"ul"},"control-C to exit local hosting."))),(0,o.kt)("li",{parentName:"ul"},"Make changes to the source and test with local hosting      ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"> npm start")," "))),(0,o.kt)("li",{parentName:"ul"},"Add/Commit final changes back to the feature branch of your local repo"),(0,o.kt)("li",{parentName:"ul"},"Push feature branch up to your fork"),(0,o.kt)("li",{parentName:"ul"},"Generate a pull request from your feature branch to the ",(0,o.kt)("strong",{parentName:"li"},"master")," branch of ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/sstsimulator/sst-docs"},"sst-docs repo"))))}f.isMDXComponent=!0}}]);