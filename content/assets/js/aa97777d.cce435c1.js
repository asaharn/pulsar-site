"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[9440],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(r),h=n,g=s["".concat(p,".").concat(h)]||s[h]||m[h]||l;return r?a.createElement(g,i(i({ref:t},u),{},{components:r})):a.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},62130:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const l={id:"pulsar-client-go-0.7.0",title:"Pulsar Client Go",sidebar_label:"Pulsar Client Go"},i=void 0,o={unversionedId:"versioned/pulsar-client-go-0.7.0",id:"versioned/pulsar-client-go-0.7.0",title:"Pulsar Client Go",description:"Feature",source:"@site/release-notes/versioned/pulsar-client-go-0.7.0.md",sourceDirName:"versioned",slug:"/versioned/pulsar-client-go-0.7.0",permalink:"/release-notes/versioned/pulsar-client-go-0.7.0",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/pulsar-client-go-0.7.0.md",tags:[],version:"current",frontMatter:{id:"pulsar-client-go-0.7.0",title:"Pulsar Client Go",sidebar_label:"Pulsar Client Go"}},p={},c=[{value:"Feature",id:"feature",level:2},{value:"Improve",id:"improve",level:2}],u={toc:c},s="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"feature"},"Feature"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Encryption support for producer, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/560"},"PR-560")),(0,n.kt)("li",{parentName:"ul"},"Decrytion support for consumer, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/612"},"PR-612")),(0,n.kt)("li",{parentName:"ul"},"User-defined metric cardinality, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/604"},"PR-604")),(0,n.kt)("li",{parentName:"ul"},"Better support for Azure AD OAuth 2.0, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/630"},"PR-630"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/633"},"PR-633"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/634"},"PR-634")),(0,n.kt)("li",{parentName:"ul"},"Removed testing for go versions 1.11 and 1.12, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/632"},"PR-632")),(0,n.kt)("li",{parentName:"ul"},"Add epoch to create producer to prevent a duplicate producer when broker is not available., see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/582"},"PR-582"))),(0,n.kt)("h2",{id:"improve"},"Improve"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fix batch size limit validation, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/528"},"PR-528")),(0,n.kt)("li",{parentName:"ul"},"Fix logic of command for sendError, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/622"},"PR-622")),(0,n.kt)("li",{parentName:"ul"},"Drain connection requests channel without closing, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/645"},"PR-645")),(0,n.kt)("li",{parentName:"ul"},"Fix ConsumersOpened counter not incremented when use multitopic or regexp consumer, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/619"},"PR-619")),(0,n.kt)("li",{parentName:"ul"},"Fix reconnection logic when topic is deleted, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/627"},"PR-627")),(0,n.kt)("li",{parentName:"ul"},"Fix panic when scale down partitions, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/601"},"PR-601")),(0,n.kt)("li",{parentName:"ul"},"Fix missing metrics for topics by registration of existing collector, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/600"},"PR-600")),(0,n.kt)("li",{parentName:"ul"},"Fix producer panic by oldProducers, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/598"},"PR-598")),(0,n.kt)("li",{parentName:"ul"},"Fail pending messages when topic is terminated, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/588"},"PR-588")),(0,n.kt)("li",{parentName:"ul"},"Fix handle send error panic, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/576"},"PR-576"))))}m.isMDXComponent=!0}}]);