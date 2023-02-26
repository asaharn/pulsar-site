"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[9994],{3905:(e,a,t)=>{t.d(a,{Zo:()=>o,kt:()=>f});var r=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,r,l=function(e,a){if(null==e)return{};var t,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=r.createContext({}),s=function(e){var a=r.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},o=function(e){var a=s(e.components);return r.createElement(u.Provider,{value:a},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,l=e.mdxType,n=e.originalType,u=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),c=s(t),m=l,f=c["".concat(u,".").concat(m)]||c[m]||h[m]||n;return t?r.createElement(f,i(i({ref:a},o),{},{components:t})):r.createElement(f,i({ref:a},o))}));function f(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var n=t.length,i=new Array(n);i[0]=m;var p={};for(var u in a)hasOwnProperty.call(a,u)&&(p[u]=a[u]);p.originalType=e,p[c]="string"==typeof e?e:l,i[1]=p;for(var s=2;s<n;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},50983:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>p,toc:()=>s});var r=t(87462),l=(t(67294),t(3905));const n={id:"client-java-2.9.2",title:"Client Java 2.9.2",sidebar_label:"Client Java 2.9.2"},i=void 0,p={unversionedId:"versioned/client-java-2.9.2",id:"versioned/client-java-2.9.2",title:"Client Java 2.9.2",description:"- Java] Fix ConsumerBuilderImpl#subscribeAsync blocks calling thread. [#14433",source:"@site/release-notes/versioned/client-java-2.9.2.md",sourceDirName:"versioned",slug:"/versioned/client-java-2.9.2",permalink:"/release-notes/versioned/client-java-2.9.2",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/client-java-2.9.2.md",tags:[],version:"current",frontMatter:{id:"client-java-2.9.2",title:"Client Java 2.9.2",sidebar_label:"Client Java 2.9.2"}},u={},s=[],o={toc:s},c="wrapper";function h(e){let{components:a,...t}=e;return(0,l.kt)(c,(0,r.Z)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[Java]"," Fix ConsumerBuilderImpl#subscribeAsync blocks calling thread. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14433"},"#14433")),(0,l.kt)("li",{parentName:"ul"},"[Java]"," Fix adding message to list potential issue ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14377"},"#14377")),(0,l.kt)("li",{parentName:"ul"},"[Java]"," Fix send to deadLetterTopic not working when reach maxRedeliverCount ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14317"},"#14317")),(0,l.kt)("li",{parentName:"ul"},"[Java]"," Fix time unit mismatch in errMsg when producer send fails. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14299"},"#14299")),(0,l.kt)("li",{parentName:"ul"},"[Java]"," Fix PersistentAcknowledgmentsGroupingTracker set BitSet issue. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14260"},"#14260")),(0,l.kt)("li",{parentName:"ul"},"[Java]"," Check ",(0,l.kt)("inlineCode",{parentName:"li"},"getTlsTrustStorePath")," NPE when user forget to set it. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14253"},"#14253")),(0,l.kt)("li",{parentName:"ul"},"[Java]"," Fix consume failure when BatchReceivePolicy#maxNumBytes < message size ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14139"},"#14139")),(0,l.kt)("li",{parentName:"ul"},"[Java]"," Use ",(0,l.kt)("inlineCode",{parentName:"li"},"scheduleWithFixedDelay")," instead of ",(0,l.kt)("inlineCode",{parentName:"li"},"scheduleAtFixedRate")," for java producer batch timer ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14125"},"#14125")),(0,l.kt)("li",{parentName:"ul"},"[Java]"," Add a default timeout for OAuth2 Metadata Resolver ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14056"},"#14056")),(0,l.kt)("li",{parentName:"ul"},"[Java]"," Fix send chunking message failed when ordering key is set. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13699"},"#13699")),(0,l.kt)("li",{parentName:"ul"},"[Java]"," Fix send chunking message failed when encryption enabled ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13689"},"#13689")),(0,l.kt)("li",{parentName:"ul"},"[Java]"," Fix Producer semaphore permit release issue ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13682"},"#13682")),(0,l.kt)("li",{parentName:"ul"},"[Java]"," Fix the wrong multi-topic has message available behavior ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13634"},"#13634")),(0,l.kt)("li",{parentName:"ul"},"[Java]"," Use PulsarByteBufAllocator to allocate buffer for chunks ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13536"},"#13536")),(0,l.kt)("li",{parentName:"ul"},"[Java]"," Fix resources leak when create producer failed ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13505"},"#13505")),(0,l.kt)("li",{parentName:"ul"},"[Java]"," Fix semaphore and memory leak when chunks failed to enqueue ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13454"},"#13454")),(0,l.kt)("li",{parentName:"ul"},"[Java]"," Fix invalid setting of enabled ciphers to fix warning from BoringSSL ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13435"},"#13435")),(0,l.kt)("li",{parentName:"ul"},"[Java]"," Fix multi topic reader has message available behavior ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13332"},"#13332")),(0,l.kt)("li",{parentName:"ul"},"[Java]"," Improve consumer listener logic ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13273"},"#13273")),(0,l.kt)("li",{parentName:"ul"},"[Java]"," Fix memory leak when message payload processor is configured ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13233"},"#13233")),(0,l.kt)("li",{parentName:"ul"},"[Java]"," Change the time units from ns to ms ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13057"},"#13057")),(0,l.kt)("li",{parentName:"ul"},"[Java]"," Use sendAsync instead of send when produce message to retry topic. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12946"},"#12946")),(0,l.kt)("li",{parentName:"ul"},"[Java]"," Avoid IllegalStateException in ClientCnx debug logs ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12899"},"#12899")),(0,l.kt)("li",{parentName:"ul"},"[Java]"," Fix pending queue-size stats for batch messages ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12704"},"#12704")),(0,l.kt)("li",{parentName:"ul"},"[Java]"," Fix invalid firstSentAt in log message when timeout first time ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12588"},"#12588")),(0,l.kt)("li",{parentName:"ul"},"[Java]"," Add conf backoff values ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12520"},"#12520")),(0,l.kt)("li",{parentName:"ul"},"[Java]"," Update producer stats when producer close ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12500"},"#12500")),(0,l.kt)("li",{parentName:"ul"},"[Java]"," Fix a typo in UnAckedMessageTracker ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12467"},"#12467")),(0,l.kt)("li",{parentName:"ul"},"[Java]"," Fix the retry topic's ",(0,l.kt)("inlineCode",{parentName:"li"},"REAL_TOPIC")," & ",(0,l.kt)("inlineCode",{parentName:"li"},"ORIGIN_MESSAGE_ID")," property ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12451"},"#12451")),(0,l.kt)("li",{parentName:"ul"},"[Java]"," Change the producer fence error log to debug level ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12447"},"#12447")),(0,l.kt)("li",{parentName:"ul"},"[Java]"," Add log error tracking for semaphore count leak ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12410"},"#12410")),(0,l.kt)("li",{parentName:"ul"},"[Java]"," Fix race condition of OpSendMsgQueue when publishing messages ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14231"},"#14231"))))}h.isMDXComponent=!0}}]);