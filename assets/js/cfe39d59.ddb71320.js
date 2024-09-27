"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1601],{79388:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=t(74848),o=t(28453);const s={title:"Compilation tips"},r=void 0,a={id:"guides/tips/compilation",title:"Compilation tips",description:"Avoid unnecessary recompilation",source:"@site/../docs/guides/tips/compilation.md",sourceDirName:"guides/tips",slug:"/guides/tips/compilation",permalink:"/sst-docs/docs/guides/tips/compilation",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/guides/tips/compilation.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1727462588e3,frontMatter:{title:"Compilation tips"},sidebar:"guides",previous:{title:"Tips and Tricks",permalink:"/sst-docs/docs/category/tips-and-tricks"},next:{title:"Debugging tips",permalink:"/sst-docs/docs/guides/tips/debugging"}},l={},c=[{value:"Avoid unnecessary recompilation",id:"avoid-unnecessary-recompilation",level:2},{value:"Ignore particular SST Elements",id:"ignore-particular-sst-elements",level:2}];function d(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"avoid-unnecessary-recompilation",children:"Avoid unnecessary recompilation"}),"\n",(0,i.jsxs)(n.p,{children:["To avoid a majority of redundant recompilation when developing SST Core and Elements, you can have the ",(0,i.jsx)(n.code,{children:"install"})," utility preserve timestamps of installed files. To do this, override the ",(0,i.jsx)(n.code,{children:"INSTALL"})," variable when configuring SST, prior to running ",(0,i.jsx)(n.code,{children:"make"}),". This will allow ",(0,i.jsx)(n.code,{children:"make"})," and friends to continue to work properly while reducing the amount of recompilation. Appending the ",(0,i.jsx)(n.code,{children:"INSTALL"})," flag to your configure script invocation will set it appropriately."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'$ ../configure --prefix=$HOME/install <other configure flags> INSTALL="/usr/bin/install -p"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["You may need to adjust the path to reflect the location of your ",(0,i.jsx)(n.code,{children:"install"})," binary.\nOnce this is done, you should no longer need to perform unnecessary recompilations.\nPlease note that you must adjust your configuration for Core, Elements, and any other SST libraries."]}),"\n",(0,i.jsx)(n.h2,{id:"ignore-particular-sst-elements",children:"Ignore particular SST Elements"}),"\n",(0,i.jsxs)(n.p,{children:["To avoid compiling SST Elements that are not of interest, put a ",(0,i.jsx)(n.code,{children:".ignore"})," file in the element directory and run ",(0,i.jsx)(n.code,{children:"./autogen.sh"})," followed by configure and make. Note that this may cause some tests to fail if one element has a testing dependency on another that is not built. Additionally, placing a .unignore file in the same directory will override a .ignore file."]}),"\n",(0,i.jsx)(n.p,{children:"For example, to ignore the Ariel library:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"$ cd sst-elements\n$ touch src/sst/elements/ariel/.ignore\n$ ./autogen.sh\n$ ./configure <configure flags>\n$ make all install\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(96540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);