"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[3540],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(a),h=n,f=u["".concat(p,".").concat(h)]||u[h]||m[h]||i;return a?r.createElement(f,l(l({ref:t},s),{},{components:a})):r.createElement(f,l({ref:t},s))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},97347:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const i={id:"client-java-2.9.3",title:"Client Java 2.9.3",sidebar_label:"Client Java 2.9.3"},l=void 0,o={unversionedId:"versioned/client-java-2.9.3",id:"versioned/client-java-2.9.3",title:"Client Java 2.9.3",description:"- fix Fix ConsumerBuilderImpl can not set null to deadLetterPolicy #14980",source:"@site/release-notes/versioned/client-java-2.9.3.md",sourceDirName:"versioned",slug:"/versioned/client-java-2.9.3",permalink:"/release-notes/versioned/client-java-2.9.3",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/client-java-2.9.3.md",tags:[],version:"current",frontMatter:{id:"client-java-2.9.3",title:"Client Java 2.9.3",sidebar_label:"Client Java 2.9.3"}},p={},c=[],s={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[fix][java]"," Fix ConsumerBuilderImpl can not set null to deadLetterPolicy ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14980"},"#14980")),(0,n.kt)("li",{parentName:"ul"},"[fix][java]"," Fix conversion of ",(0,n.kt)("inlineCode",{parentName:"li"},"TimestampMillisConversion")," has no effect when Jsr310Conversion enabled ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15863"},"#15863")),(0,n.kt)("li",{parentName:"ul"},"[fix][java]"," Fix messages sent by producers without schema cannot be decoded ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15622"},"#15622")),(0,n.kt)("li",{parentName:"ul"},"[fix][java]"," Fix performance regression with message listener ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15162"},"#15162")),(0,n.kt)("li",{parentName:"ul"},"[fix][java]"," Fix potentially unfinished CompletableFuture in doReconsumeLater ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14947"},"#14947")),(0,n.kt)("li",{parentName:"ul"},"[fix][java]"," Fix race condition in consumer redelivery ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14687"},"#14687")),(0,n.kt)("li",{parentName:"ul"},"[fix][java]"," Fix the producer OOM if got an exception while adding messages to batch container ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12170"},"#12170")),(0,n.kt)("li",{parentName:"ul"},"[fix][java]"," PartitionsAutoUpdateFuture never complete ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14625"},"#14625")),(0,n.kt)("li",{parentName:"ul"},"[fix][java]"," Remove consumer when close consumer command is received ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15761"},"#15761")),(0,n.kt)("li",{parentName:"ul"},"[fix][java]"," Fix PartitionedProducerImpl flushAsync always fail when one partition send TimeOutException ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14602"},"#14602")),(0,n.kt)("li",{parentName:"ul"},"[improve][java]"," Add pending messages information while printing the producer stats ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15440"},"#15440")),(0,n.kt)("li",{parentName:"ul"},"[improve][java]"," AsyncHttpConnector doesn't use the system properties configured ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15307"},"#15307")),(0,n.kt)("li",{parentName:"ul"},"[improve][java]"," Avoid timer task run before previous subscribe complete ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14818"},"#14818")),(0,n.kt)("li",{parentName:"ul"},"[improve][java]"," Process maxRedeliverCount is 0 of DeadLeddterPolicy ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14706"},"#14706")),(0,n.kt)("li",{parentName:"ul"},"[improve][java]"," Improve logic when ACK grouping tracker checks duplicated message id ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15465"},"#15465"))))}m.isMDXComponent=!0}}]);