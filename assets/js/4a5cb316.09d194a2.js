"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4871],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=m(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||c[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3360:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>m,toc:()=>p});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Creating Motifs"},s=void 0,m={unversionedId:"elements/ember/CreatingMotifs",id:"elements/ember/CreatingMotifs",title:"Creating Motifs",description:"Ember",source:"@site/../docs/elements/ember/CreatingMotifs.md",sourceDirName:"elements/ember",slug:"/elements/ember/CreatingMotifs",permalink:"/sst-docs/docs/elements/ember/CreatingMotifs",draft:!1,editUrl:"https://github.com/sstsimulator/docs/edit/master/docs/../docs/elements/ember/CreatingMotifs.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1675712938,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{title:"Creating Motifs"},sidebar:"elements",previous:{title:"QuickStart Motif Guide",permalink:"/sst-docs/docs/elements/ember/QuickStart"},next:{title:"Running Motifs",permalink:"/sst-docs/docs/elements/ember/RunningMotifs"}},u={},p=[{value:"Ember",id:"ember",level:2},{value:"Motif",id:"motif",level:2},{value:"Register Subcomponent",id:"register-subcomponent",level:3},{value:"Writing a constructor",id:"writing-a-constructor",level:3},{value:"Writing a generate() function",id:"writing-a-generate-function",level:3},{value:"User-defined events",id:"user-defined-events",level:2},{value:"MPI Events",id:"mpi-events",level:2}],c={toc:p},d="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"ember"},"Ember"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://sst-simulator.org/SSTPages/SSTElementEmber/"},"Ember")," is a library representing various network communications. It accepts events from ",(0,i.kt)("em",{parentName:"p"},"motifs")," to drive network activities."),(0,i.kt)("h2",{id:"motif"},"Motif"),(0,i.kt)("p",null,"Motifs are condensed, efficient generators for simulating different kinds of communication/computation patterns.\nThe motif presented here does no real work, but more detailed motifs can be found in sst-elements/src/sst/elements/ember/mpi/motifs/."),(0,i.kt)("p",null,"Motifs are executed as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The motif generator is initialized (the constructor)"),(0,i.kt)("li",{parentName:"ol"},"The generate function is invoked, places events on the event queue, and returns either true or false"),(0,i.kt)("li",{parentName:"ol"},"The events on the event queue are processed."),(0,i.kt)("li",{parentName:"ol"},"If the generate function in step 2 returns false, go to step 2. Otherwise, the motif is complete.")),(0,i.kt)("p",null,"Motifs are intended to be run as a 'job submission.'\nThe generate function models an entire iteration of an application, using the event queue to mix compute and MPI operations in every iteration."),(0,i.kt)("h3",{id:"register-subcomponent"},"Register Subcomponent"),(0,i.kt)("p",null,"Ember motifs need to be ",(0,i.kt)("a",{parentName:"p",href:"../../core/eli/sst_eli_register_subcomponent"},"registered as an SST subcomponent"),". Motif SubComponents should implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"SST::Ember::EmberGenerator")," API. The ELI registration macro must be placed in a public section of the SubComponent header.\nFor example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'SST_ELI_REGISTER_SUBCOMPONENT(\n        Example,\n        "ember",\n        "ExampleMotif",\n        SST_ELI_ELEMENT_VERSION(1,0,0),\n        "Performs an idle on the node. No traffic can be generated.",\n        SST::Ember::EmberGenerator\n    );\n')),(0,i.kt)("p",null,"The parameters of this function are:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Class associated with this Motif"),(0,i.kt)("li",{parentName:"ol"},"Library that the SubComponent belongs to"),(0,i.kt)("li",{parentName:"ol"},"Identifier of the Motif. This name, prefixed by the library name ('ember'), will be used by SST to identify the subcomponent. Note that the end of this parameter must alwasy be 'Motif'."),(0,i.kt)("li",{parentName:"ol"},"SST elements version"),(0,i.kt)("li",{parentName:"ol"},"Comment describing what the motif does"),(0,i.kt)("li",{parentName:"ol"},"EmberGenerator API")),(0,i.kt)("h3",{id:"writing-a-constructor"},"Writing a constructor"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'EmberExample::EmberExample(SST::ComponentId_t id, Params& params) :\n    EmberMessagePassingGenerator(id, params, "Example"),\n\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"../../core/component/subcomponent/constructor"},"constructor")," also reads parameters from the python script.\nThe params are passed through the python file in the form: ",(0,i.kt)("inlineCode",{parentName:"p"},'ep.addMotif("Example firstParam=100 secondParam=200")'),'. Note no space is allowed before or after the = operator. Parameters read from the python file will be prepended with "arg." before being passed to the C++ file. i.e. "firstParam" becomes "arg.firstParam".\nThe constructor can be used to perform the setup operations necessary for the generating function.'),(0,i.kt)("p",null,"The params can be parsed in the C++ file with ",(0,i.kt)("inlineCode",{parentName:"p"},'firstParam = params.find<uint32_t>("arg.firstParam", 100);'),' where the name of the parameter is "firstParam".'),(0,i.kt)("h3",{id:"writing-a-generate-function"},"Writing a generate() function"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"bool Example::generate( std::queue<EmberEvent*>& evQ)\n")),(0,i.kt)("p",null,"The generate function is the 'main' function of a Motif.\nIf the python file invokes an ",(0,i.kt)("inlineCode",{parentName:"p"},"addMotif"),", the generating function will be invoked until the generate function returns true.\nOnce the generate function returns, the events queued in the evQ variable will be performed. "),(0,i.kt)("p",null,"The generate function takes an event queue as a parameter. The event queue allows the user to include computation operations and MPI events in the simulation. Motifs are intended to be designed so that every call to generate() mimics an entire iteration of the application. The events that can be added to the event queue are listed in subsequent sections. "),(0,i.kt)("h2",{id:"user-defined-events"},"User-defined events"),(0,i.kt)("p",null,"These functions allow the user to control how the simulation estimates computation time."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enQ_compute(Queue&, uint64_t nanoSecondDelay)"),"   -- The delay by the expected cost of the compute operation in nanoSeconds (without actually computing it)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enQ_compute( Queue& q, std::function<uint64_t()> func)"),"; -- A function is passed as a parameter and invoked. It returns a 64-bit unsigned integer that indicates the simulation delay associated with invoking the function (in nanoseconds)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enQ_getTime(evQ, &m_startTime)")," -- sets m_startTime to the current time")),(0,i.kt)("p",null,"There are two types of compute functions that can be enqueued."),(0,i.kt)("p",null,"The first computation operation takes a 64-bit integer as a parameter. This parameter is the amount of time needed in nanoseconds to perform the computation. The simulator then delays by that number of nanoseconds as if the actual computation had taken place.\nThe second compute takes a function as a parameter. When the event is processed, the function is invoked. The function returns the amount of time needed to perform the compute operation. The simulation is delayed by the return value of the function. The time delay could be estimated through a heuristic or measured through representative computation. "),(0,i.kt)("h2",{id:"mpi-events"},"MPI Events"),(0,i.kt)("p",null,"We list the supported MPI events below. For more detail, see MPI API documentation."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enQ_init(evQ)"),"  --  MPI  initialize"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enQ_fini(evQ)")," -- MPI finalize"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enQ_rank(evQ, m_newComm[0], &m_new_rank)")," -- MPI rank"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enQ_size(evQ, m_newComm[0], &m_new_size)")," --   MPI size"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enQ_send(evQ, x_neg, x_xferSize, 0, GroupWorld)"),"  --  MPI send"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enQ_recv(evQ, x_neg, x_xferSize, 0, GroupWorld)"),"  --  MPI  recv"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enQ_isend(evQ, next_comm_rank, itemsThisPhase, 0, GroupWorld, &requests[next_request])")," --  MPI isend"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enQ_irecv(evQ, xface_down, items_per_cell * sizeof_cell * ny * nz, 0, GroupWorld, &requests[nextRequest])")," --  MPI irecv"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enQ_cancel(evQ, m_req[i])")," -- MPI cancel"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enQ_sendrecv(evQ, m_sendBuf, m_messageSize, DATA_TYPE, destRank(), 0xdeadbeef, m_recvBuf, m_messageSize, DATA_TYPE, srcRank(),  0xdeadbeef, GroupWorld, &m_resp)"),"  --  MPI send or recv"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enQ_wait(evQ,  req)"),"  --  MPI wait"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enQ_waitany(evQ, m_req.size(), &m_req[0], &m_indx, &m_resp)")," --  MPI waitany"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enQ_waitall(evQ, 1, &m_req, (MessageResponse**)&m_resp)")," --  MPI waitall"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enQ_barrier(evQ, GroupWorld)")," -- MPI barrier"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enQ_bcast(evQ, m_sendBuf, m_count, DOUBLE, m_root, GroupWorld)")," -- MPI broadcast"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enQ_scatter(evQ, m_sendBuf, m_sendCnt, m_sendDsp.data(), LONG, m_recvBuf, m_count, LONG, m_root, GroupWorld)")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enQ_scatterv(evQ, m_sendBuf, &m_sendCnts[0], m_sendDsp.data(), LONG, m_recvBuf, m_count, LONG, m_root, GroupWorld)")," -- MPI Scatter variable message size"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enQ_reduce( evQ, m_sendBuf, m_recvBuf, m_count, DOUBLE, MP::SUM, m_redRoot, GroupWorld)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enQ_allreduce(evQ, m_sendBuf, m_recvBuf, m_count, DOUBLE, m_op, GroupWorld)")," -- MPI allreduce function"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enQ_alltoall(evQ, m_sendBuf, m_colSendCnt, &m_colSendDsp_f[0], DOUBLE, m_colComm)")," -- MPI alltoall with constant message size"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enQ_alltoallv(evQ, m_sendBuf, &m_colSendCnts_f[0], &m_colSendDsp_f[0], DOUBLE, m_colComm)")," -- MPI alltoall with varying message sizes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enQ_allgather(evQ, m_sendBuf, m_count, INT, m_recvBuf, m_count, INT, GroupWorld)")," --  MPI allgather with messages of constant size"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enQ_allgatherv(evQ, m_sendBuf, m_sendCnt, INT, m_recvBuf, &m_recvCnts[0], &m_recvDsp[0], INT, GroupWorld)")," --  MPI allgather with messages of varying sizes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enQ_commSplit(evQ, *comm, color, key, newComm)")," -- Splits the MPI comm"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enQ_commCreate(evQ, GroupWorld, m_rowGrpRanks, &m_rowComm)")," -- Creates MPI Com"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enQ_commDestroy(evQ, m_rowComm)")," --Destroys MPI comm")))}f.isMDXComponent=!0}}]);