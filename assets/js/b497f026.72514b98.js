"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9138],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,f=c["".concat(u,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2156:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"constructor"},u=void 0,s={unversionedId:"core/output/constructor",id:"core/output/constructor",title:"constructor",description:"Create a new Output object. If the default constructor is used, Output::init() must be called to initialize the object.",source:"@site/../docs/core/output/constructor.md",sourceDirName:"core/output",slug:"/core/output/constructor",permalink:"/sst-docs/docs/core/output/constructor",draft:!1,editUrl:"https://github.com/sstsimulator/docs/edit/master/docs/../docs/core/output/constructor.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1675712938,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{title:"constructor"},sidebar:"Core API",previous:{title:"SST::Output",permalink:"/sst-docs/docs/core/output/class"},next:{title:"destructor",permalink:"/sst-docs/docs/core/output/destructor"}},p={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Header",id:"header",level:2}],m={toc:c},d="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'Output(const std::string& prefix, uint32_t verbose_level, uint32_t verbose_mask, \n        output_location_t location, const std::string& localoutputfilename = "");\n\n// Default constructor\nOutput();\n')),(0,o.kt)("p",null,"Create a new Output object. If the default constructor is used, ",(0,o.kt)("a",{parentName:"p",href:"init"},"Output::init()")," must be called to initialize the object."),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"prefix")," (std::string) Prefix to be prepended to all strings emitted by calls to ",(0,o.kt)("a",{parentName:"li",href:"debug"},(0,o.kt)("inlineCode",{parentName:"a"},"debug()")),", ",(0,o.kt)("a",{parentName:"li",href:"verbose"},(0,o.kt)("inlineCode",{parentName:"a"},"verbose()")),", ",(0,o.kt)("a",{parentName:"li",href:"fatal"},(0,o.kt)("inlineCode",{parentName:"a"},"fatal()"))," and ",(0,o.kt)("a",{parentName:"li",href:"../output"},(0,o.kt)("inlineCode",{parentName:"a"},"output()"))," (depends on which variant of ",(0,o.kt)("inlineCode",{parentName:"li"},"output()")," is used). No space will be inserted between the prepended prefix string and the normal output string. The following escape codes may be used in prefixes:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\\@f")," Name of the file in which output call was made."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\\@l")," Line number in the file in which output call was made."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\\@p")," Name of the function from which output call was made."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\\@r")," MPI rank of the calling process.  Will be empty if MPI_COMM_WORLD size is 1."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\\@R")," MPI rank of the calling process.  Will be 0 if MPI_COMM_WORLD size is 1."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\\@i")," Thread Id of the calling process.  Will be empty if number of threads is 1."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\\@I")," Thread Id of the calling process.  Will be 0 if number of threads is 1."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\\@x")," Rank information of the calling process.  Will be empty if number of MPI ranks and number of threads are both 1. Same as ","[",(0,o.kt)("inlineCode",{parentName:"li"},"\\@r:\\@i"),"]"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\\@X")," Rank information of the calling process.  Will be ","[0.0]"," if number of MPI ranks and number of threads are both 1. Same as ","[",(0,o.kt)("inlineCode",{parentName:"li"},"\\@R:\\@I"),"]"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\\@t")," Simulation time.  Will be the raw simulation cycle time."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"verbose_level")," (uint32_t) Debugging output level. Calls to debug() and verbose() are only output if their output_level parameter is less than or equal to the verbose_level currently set for the object."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"verbose_mask")," (uint32_t) Bitmask of allowed message types for debug() and verbose(). The Output object will only output the message if the set bits of the output_bits parameter are set in the verbose_mask of the object. It uses this logic: if (",(0,o.kt)("inlineCode",{parentName:"li"},"~verbose_mask & output_bits == 0"),") then output is enabled."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"location"),"  (output_location_t) Output location. Output can be directed to STDOUT, STDERR, FILE, or NONE.  If FILE output is selected, the output will be directed to the file defined by the --debug-file runtime parameter, or to the file 'sst_output' if the --debug-file parameter is not defined.  If the size of MPI_COMM_WORLD is > 1, then the rank process will be appended to the file name."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"localoutputfilename")," (std::string) If not an empty string and the location parameter is set to FILE, send the output of this object to this file instead of SST's default file. If the size of MPI_COMM_WORLD is > 1, then the rank process will be appended to the file name."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"returns")," An SST::Output object")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"example-1"},"Example 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'\n// Allocate a new output object and send to stdout\n// Prefix is empty, verbose set to 1, no mask used\nSST::Output* out = new Output("", 1, 0, Output::STDOUT);\n\n// Use default constructor\n// Initialize with a prefix of "CPU "\nSST::Output* out1 = new Output();\nout1->init("CPU ", 4, 0, Output::STDERR);\n')),(0,o.kt)("h2",{id:"header"},"Header"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/output.h>\n")))}f.isMDXComponent=!0}}]);