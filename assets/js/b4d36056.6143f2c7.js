"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3357],{63533:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var i=n(74848),t=n(28453);const l={title:"sst-config"},o=void 0,r={id:"tools/commandLine/sst-config",title:"sst-config",description:"sst-config is a command line utility that queries SST's configuration to retrieve information about how SST was compiled and libraries that have been registered with it. A common use of this command is to pull compiler flags for element library compilation. Passing the --help flag to sst-config will print a brief usage description.",source:"@site/../docs/tools/commandLine/sst-config.md",sourceDirName:"tools/commandLine",slug:"/tools/commandLine/sst-config",permalink:"/sst-docs/docs/tools/commandLine/sst-config",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/tools/commandLine/sst-config.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1727462588e3,frontMatter:{title:"sst-config"},sidebar:"tools",previous:{title:"Tools",permalink:"/sst-docs/docs/category/tools"},next:{title:"sst-info",permalink:"/sst-docs/docs/tools/commandLine/sst-info"}},a={},c=[{value:"Examples",id:"examples",level:2},{value:"Print the entire configuration",id:"print-the-entire-configuration",level:3},{value:"Locate the compiler used to compile SST",id:"locate-the-compiler-used-to-compile-sst",level:3},{value:"Determine the path to the sst-elements libraries",id:"determine-the-path-to-the-sst-elements-libraries",level:3},{value:"Understanding the SST configuration file",id:"understanding-the-sst-configuration-file",level:2},{value:"What is available through <code>sst-config</code>",id:"what-is-available-through-sst-config",level:2},{value:"Examples",id:"examples-1",level:2},{value:"All config values",id:"all-config-values",level:3},{value:"C++ compiler",id:"c-compiler",level:3},{value:"C++ compiler flags",id:"c-compiler-flags",level:3},{value:"C++ LD flags",id:"c-ld-flags",level:3},{value:"In a makefile",id:"in-a-makefile",level:3},{value:"See Also",id:"see-also",level:2}];function d(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"sst-config"})," is a command line utility that queries SST's configuration to retrieve information about how SST was compiled and libraries that have been registered with it. A common use of this command is to pull compiler flags for element library compilation. Passing the ",(0,i.jsx)(s.code,{children:"--help"})," flag to ",(0,i.jsx)(s.code,{children:"sst-config"})," will print a brief usage description."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"$ sst-config\n$ sst-config --<KEY>  # Valid for keys belonging to the SSTCore group only\n$ sst-config <GROUP> <KEY>\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"GROUP"})})," (Optional) Which group to search. Must be used with the ",(0,i.jsx)(s.code,{children:"KEY"})," argument."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"KEY"})})," (Optional) Which key value to return. If ",(0,i.jsx)(s.code,{children:"GROUP"})," is not specified, the ",(0,i.jsx)(s.code,{children:"SSTCore"})," group will be searched."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(s.h3,{id:"print-the-entire-configuration",children:"Print the entire configuration"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"$ sst-config\n# Group: DRAMSIM ----------------------------------------------------------------\nLIBDIR=\n# Group: DRAMSIM3 ---------------------------------------------------------------\nLIBDIR=\n# Group: FDSIM ------------------------------------------------------------------\nLIBDIR=\n# Group: GOBLIN_HMCSIM ----------------------------------------------------------\nLIBDIR=/home/sst/ext/gc64-hmcsim-sst-8.0.0-release\n# Group: HBMDRAMSIM -------------------------------------------------------------\nLIBDIR=\n# Group: HYBRIDSIM --------------------------------------------------------------\nLIBDIR=\n# Group: NVDIMMSIM --------------------------------------------------------------\nLIBDIR=\n# Group: RAMULATOR --------------------------------------------------------------\nLIBDIR=\n# Group: SSTCore ----------------------------------------------------------------\nAR=ar\nCC=gcc\nCFLAGS=\nCORE_TEST_ELEMENT_LIBDIR=/home/sst/build/sst-core/lib/sstcore\nCPP=gcc -E\nCXX=g++\nCXXCPP=g++ -E\nCXXFLAGS= -std=c++17\nELEMENT_CXXFLAGS= -std=c++17 -fPIC -DHAVE_CONFIG_H -I/home/sst/build/sst-core/include\nELEMENT_LDFLAGS=-shared -fno-common -Wl,-undefined -Wl,dynamic_lookup\nLD=/Library/Developer/CommandLineTools/usr/bin/ld\n...\n...\n"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash"})}),"\n",(0,i.jsx)(s.h3,{id:"locate-the-compiler-used-to-compile-sst",children:"Locate the compiler used to compile SST"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"$ sst-config --CXX\ng++\n"})}),"\n",(0,i.jsx)(s.h3,{id:"determine-the-path-to-the-sst-elements-libraries",children:"Determine the path to the sst-elements libraries"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"$ sst-config SST_ELEMENT_LIBRARY SST_ELEMENT_LIBRARY_BINDIR\n/home/sst/build/sst-elements/bin\n"})}),"\n",(0,i.jsx)(s.h2,{id:"understanding-the-sst-configuration-file",children:"Understanding the SST configuration file"}),"\n",(0,i.jsxs)(s.p,{children:["When SST-Core is compiled, it generates a configuration file. This file can be found in ",(0,i.jsx)(s.code,{children:"$SSTCORE_BUILD_DIR/etc/sst/sstsimulator.conf"}),". As elements are registered with SST using ",(0,i.jsx)(s.code,{children:"sst-register"}),", information about those elements is added to this same file. The file is separated into sections called ",(0,i.jsx)(s.em,{children:"groups"}),". Each group has a name which is enclosed in square brackets. Any lines following a group name belong to the most recently declared group. Common groups that can be found in the file include:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"SSTCore"})," Information about the core compilation including compiler and linker flags, compiler version, Python version and flags, etc."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"SST_ELEMENT_SOURCE"})," When element libraries register their source code location with SST, the paths are captured in this group."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"SST_ELEMENT_TESTS"})," This group records the location of test suites that have been registered with SST and is used by the SST test infrastructure to locate available tests."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"SST_ELEMENT_LIBRARY"})," If you have built and installed elements from the sst-elements repository, you will see this group. It contains the library install path. Other elements should be registered to their own groups, for example the sst-external-element repository registers its ",(0,i.jsx)(s.code,{children:"simpleExternalElement"})," library under a group of the same name: ",(0,i.jsx)(s.code,{children:"simpleExternalElement"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.h2,{id:"what-is-available-through-sst-config",children:["What is available through ",(0,i.jsx)(s.code,{children:"sst-config"})]}),"\n",(0,i.jsxs)(s.p,{children:["One of the important usages of ",(0,i.jsx)(s.code,{children:"sst-config"})," is to acquire information about how sst was compiled for subsequent element compilations. Some of the critical keys"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"           If <GROUP> not specified this is found in\n           the 'SSTCore' default group.\n\n"})}),"\n",(0,i.jsx)(s.h2,{id:"examples-1",children:"Examples"}),"\n",(0,i.jsx)(s.h3,{id:"all-config-values",children:"All config values"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"sst-config\n"})}),"\n",(0,i.jsx)(s.h3,{id:"c-compiler",children:"C++ compiler"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"sst-config --CXX\n"})}),"\n",(0,i.jsx)(s.h3,{id:"c-compiler-flags",children:"C++ compiler flags"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"sst-config --ELEMENT_CXXFLAGS\n"})}),"\n",(0,i.jsx)(s.h3,{id:"c-ld-flags",children:"C++ LD flags"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"sst-config --ELEMENT_LDFLAGS\n"})}),"\n",(0,i.jsx)(s.h3,{id:"in-a-makefile",children:"In a makefile"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-makefile",children:"CXX=$(shell sst-config --CXX)\nCXXFLAGS=$(shell sst-config --ELEMENT_CXXFLAGS)\nLDFLAGS=$(shell sst-config --ELEMENT_LDFLAGS)\n"})}),"\n",(0,i.jsx)(s.h2,{id:"see-also",children:"See Also"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/sst-docs/docs/guides/files/basics_makefile",children:"Basics: Makefile"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>r});var i=n(96540);const t={},l=i.createContext(t);function o(e){const s=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(l.Provider,{value:s},e.children)}}}]);