"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[669],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>f});var r=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,r,i=function(e,a){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),u=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):n(n({},a),e)),t},c=function(e){var a=u(e.components);return r.createElement(o.Provider,{value:a},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},h=r.forwardRef((function(e,a){var t=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(t),h=i,f=s["".concat(o,".").concat(h)]||s[h]||m[h]||l;return t?r.createElement(f,n(n({ref:a},c),{},{components:t})):r.createElement(f,n({ref:a},c))}));function f(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=t.length,n=new Array(l);n[0]=h;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p[s]="string"==typeof e?e:i,n[1]=p;for(var u=2;u<l;u++)n[u]=t[u];return r.createElement.apply(null,n)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},15019:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>n,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=t(87462),i=(t(67294),t(3905));const l={id:"client-java-2.10.2",title:"Client Java 2.10.2",sidebar_label:"Client Java 2.10.2"},n=void 0,p={unversionedId:"versioned/client-java-2.10.2",id:"versioned/client-java-2.10.2",title:"Client Java 2.10.2",description:"- fix Fix PatternTopicsChangedListener blocked when topic removed #16842",source:"@site/release-notes/versioned/client-java-2.10.2.md",sourceDirName:"versioned",slug:"/versioned/client-java-2.10.2",permalink:"/release-notes/versioned/client-java-2.10.2",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/client-java-2.10.2.md",tags:[],version:"current",frontMatter:{id:"client-java-2.10.2",title:"Client Java 2.10.2",sidebar_label:"Client Java 2.10.2"}},o={},u=[],c={toc:u},s="wrapper";function m(e){let{components:a,...t}=e;return(0,i.kt)(s,(0,r.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[fix][java]"," Fix PatternTopicsChangedListener blocked when topic removed ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16842"},"#16842")),(0,i.kt)("li",{parentName:"ul"},"[fix][java]"," Forget to update memory usage when invalid message ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16835"},"#16835")),(0,i.kt)("li",{parentName:"ul"},"[fix][java]"," Send CloseConsumer on client timeout ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16616"},"#16616")),(0,i.kt)("li",{parentName:"ul"},"[fix][java]"," Fix ReconsumeLater will hang up if retryLetterProducer exception ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16655"},"#16655")),(0,i.kt)("li",{parentName:"ul"},"[fix][java]"," Fix load trust certificate ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16789"},"#16789")),(0,i.kt)("li",{parentName:"ul"},"[fix][java]"," Fix reach redeliverCount client can't send batch messags ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17317"},"#17317")),(0,i.kt)("li",{parentName:"ul"},"[fix][java]"," Fix reach redeliverCount client can't send messages to DLQ ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17287"},"#17287")),(0,i.kt)("li",{parentName:"ul"},"[fix][java]"," Fix the message present in incoming queue after go to DLQ ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17326"},"#17326")),(0,i.kt)("li",{parentName:"ul"},"[fix][java]"," Fix the startMessageId can't be respected as the ChunkMessageID ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16154"},"#16154")),(0,i.kt)("li",{parentName:"ul"},"[fix][java]"," Release semaphore before discarding messages in batchMessageContainer ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17019"},"#17019")),(0,i.kt)("li",{parentName:"ul"},"[fix][java]"," Remove consumer when close consumer command is received ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15761"},"#15761")),(0,i.kt)("li",{parentName:"ul"},"[fix][java]"," Remove producer when close producer command is received ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16028"},"#16028")),(0,i.kt)("li",{parentName:"ul"},"[fix][java]"," Remove redundant check for chunked message TotalChunkMsgSize in ConsumerImpl ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16797"},"#16797")),(0,i.kt)("li",{parentName:"ul"},"[fix][java]"," Fix MaxQueueSize semaphore release leak in createOpSendMsg ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16915"},"#16915")),(0,i.kt)("li",{parentName:"ul"},"[fix][java]"," Fix auto cluster failover can't resolve host bug ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16152"},"#16152")),(0,i.kt)("li",{parentName:"ul"},"[fix][java]"," Fix client memory limit currentUsage leak and semaphore release duplicated in ProducerImpl ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16837"},"#16837")),(0,i.kt)("li",{parentName:"ul"},"[fix][java]"," Fix newLookup TooManyRequestsException message ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16594"},"#16594")),(0,i.kt)("li",{parentName:"ul"},"[fix][java]"," Fix scheduledExecutorProvider not shutdown ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17527"},"#17527")),(0,i.kt)("li",{parentName:"ul"},"[fix][java]"," Fixed cnx channel Inactive causing the request fail to time out and fail to return ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17051"},"#17051")),(0,i.kt)("li",{parentName:"ul"},"[fix][java]"," Fix thread safety issue of ",(0,i.kt)("inlineCode",{parentName:"li"},"LastCumulativeAck")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16072"},"#16072")),(0,i.kt)("li",{parentName:"ul"},"[fix][java]"," Make DeadLetterPolicy deserializable ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16513"},"#16513")),(0,i.kt)("li",{parentName:"ul"},"[improve][java]"," Improve performance of multi-topic consumer with more than one IO thread ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16336"},"#16336")),(0,i.kt)("li",{parentName:"ul"},"[improve][java]"," Only trigger the batch receive timeout when having pending batch receives requests ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16160"},"#16160")),(0,i.kt)("li",{parentName:"ul"},"[improve][java]"," Replace ScheduledExecutor to improve performance of message consumption ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16236"},"#16236")),(0,i.kt)("li",{parentName:"ul"},"[improve][java]"," Support passing existing scheduled executor providers to the client ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16334"},"#16334")),(0,i.kt)("li",{parentName:"ul"},"[improve][java]"," Add classLoader field for ",(0,i.kt)("inlineCode",{parentName:"li"},"SchemaDefinition")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15915"},"#15915")),(0,i.kt)("li",{parentName:"ul"},"[improve][java]"," Add message key if exists to deadLetter messages ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16615"},"#16615")),(0,i.kt)("li",{parentName:"ul"},"[improve][java]"," Refactor SchemaHash to reduce call of hashFunction in SchemaHash ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17948"},"#17948"))))}m.isMDXComponent=!0}}]);