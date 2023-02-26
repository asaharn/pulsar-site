"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[5219],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},594:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={id:"client-java-2.10.3",title:"Client Java 2.10.3",sidebar_label:"Client Java 2.10.3"},l=void 0,o={unversionedId:"versioned/client-java-2.10.3",id:"versioned/client-java-2.10.3",title:"Client Java 2.10.3",description:"* fix For exclusive subscriptions, if two consumers are created repeatedly, the second consumer will block #18633",source:"@site/release-notes/versioned/client-java-2.10.3.md",sourceDirName:"versioned",slug:"/versioned/client-java-2.10.3",permalink:"/release-notes/versioned/client-java-2.10.3",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/client-java-2.10.3.md",tags:[],version:"current",frontMatter:{id:"client-java-2.10.3",title:"Client Java 2.10.3",sidebar_label:"Client Java 2.10.3"}},c={},s=[],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[fix][client]"," For exclusive subscriptions, if two consumers are created repeatedly, the second consumer will block #18633"),(0,i.kt)("li",{parentName:"ul"},"[fix][client]"," Fixes batch_size not checked in MessageId#fromByteArrayWithTopic (#18405)"),(0,i.kt)("li",{parentName:"ul"},"[fix][client]"," Fix possible npe (#18406)"),(0,i.kt)("li",{parentName:"ul"},"[fix][client]"," Fix exception when calling loadConf on a ConsumerBuilder that has a KeySharedPolicy (#18345)"),(0,i.kt)("li",{parentName:"ul"},"[fix][client]"," Support LocalDateTime Conversion (#18334)"),(0,i.kt)("li",{parentName:"ul"},"[fix][pulsar-client]"," Fix pendingLookupRequestSemaphore leak when Ser\u2026 (#18219)"),(0,i.kt)("li",{parentName:"ul"},"[fix][client]"," Fix failover/exclusive consumer with batch cumulate ack issue. (#18454)"),(0,i.kt)("li",{parentName:"ul"},"[improve][java-client]","Add init capacity for messages in BatchMessageContainerImpl (#17822)"),(0,i.kt)("li",{parentName:"ul"},"[fix][pulsar-client]"," Fix pendingLookupRequestSemaphore leak when channel inactive (#17856)"),(0,i.kt)("li",{parentName:"ul"},"[fix][client]"," Unwrap completion exception for Lookup Services (#17717)"),(0,i.kt)("li",{parentName:"ul"},"[fix][client]"," Avoid redelivering duplicated messages when batching is enabled #18486"),(0,i.kt)("li",{parentName:"ul"},"[fix][client]"," Fix multi-topic consumer stuck after redeliver messages (#18491)"),(0,i.kt)("li",{parentName:"ul"},"[fix][client]"," Fix IllegalThreadStateException when using newThread in ExecutorProvider.ExtendedThreadFactory"),(0,i.kt)("li",{parentName:"ul"},"[fix][client]"," Fix NPE of MultiTopicsConsumerImpl due to race condition (#18287)")))}m.isMDXComponent=!0}}]);