"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[2456],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>f});var r=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,r,i=function(e,a){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),o=function(e){var a=r.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):n(n({},a),e)),t},s=function(e){var a=o(e.components);return r.createElement(u.Provider,{value:a},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},h=r.forwardRef((function(e,a){var t=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=o(t),h=i,f=c["".concat(u,".").concat(h)]||c[h]||m[h]||l;return t?r.createElement(f,n(n({ref:a},s),{},{components:t})):r.createElement(f,n({ref:a},s))}));function f(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=t.length,n=new Array(l);n[0]=h;var p={};for(var u in a)hasOwnProperty.call(a,u)&&(p[u]=a[u]);p.originalType=e,p[c]="string"==typeof e?e:i,n[1]=p;for(var o=2;o<l;o++)n[o]=t[o];return r.createElement.apply(null,n)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},43054:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>n,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var r=t(87462),i=(t(67294),t(3905));const l={id:"client-java-2.11.0",title:"Client Java 2.11.0",sidebar_label:"Client Java 2.11.0"},n=void 0,p={unversionedId:"versioned/client-java-2.11.0",id:"versioned/client-java-2.11.0",title:"Client Java 2.11.0",description:"- feature Support Reader Interceptor #14729",source:"@site/release-notes/versioned/client-java-2.11.0.md",sourceDirName:"versioned",slug:"/versioned/client-java-2.11.0",permalink:"/release-notes/versioned/client-java-2.11.0",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/client-java-2.11.0.md",tags:[],version:"current",frontMatter:{id:"client-java-2.11.0",title:"Client Java 2.11.0",sidebar_label:"Client Java 2.11.0"}},u={},o=[],s={toc:o},c="wrapper";function m(e){let{components:a,...t}=e;return(0,i.kt)(c,(0,r.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[feature][Java]"," Support Reader Interceptor ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14729"},"#14729")),(0,i.kt)("li",{parentName:"ul"},"[improve][Java]"," Refactor SchemaHash to reduce call of hashFunction in SchemaHash ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17948"},"#17948")),(0,i.kt)("li",{parentName:"ul"},"[improve][Java]"," Improve performance of multi-topic consumer with more than one IO thread ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16336"},"#16336")),(0,i.kt)("li",{parentName:"ul"},"[improve][Java]"," Add initialization for the OpSendMsg ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16256"},"#16256")),(0,i.kt)("li",{parentName:"ul"},"[improve][Java]"," Replace ScheduledExecutor to improve performance of message consumption ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16236"},"#16236")),(0,i.kt)("li",{parentName:"ul"},"[improve][Java]"," Send CloseConsumer on client timeout ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16616"},"#16616")),(0,i.kt)("li",{parentName:"ul"},"[improve][Java]"," Make DeadLetterPolicy deserializable ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16513"},"#16513")),(0,i.kt)("li",{parentName:"ul"},"[improve][Java]"," Switch to rely on Netty for Hostname Verification ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15824"},"#15824")),(0,i.kt)("li",{parentName:"ul"},"[improve][Java]"," Remove sensitive msg from consumer/producer stats log ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15483"},"#15483")),(0,i.kt)("li",{parentName:"ul"},"[improve][Java]"," Add pending messages information while printing the producer stats ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15440"},"#15440")),(0,i.kt)("li",{parentName:"ul"},"[improve][Java]"," Check consumer schema null in advance ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15327"},"#15327")),(0,i.kt)("li",{parentName:"ul"},"[improve][Java]"," Returns immutable data set when using TableView ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14833"},"#14833")),(0,i.kt)("li",{parentName:"ul"},"[improve][Java]"," Avoid timer task run before previous subscribe complete ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14818"},"#14818")),(0,i.kt)("li",{parentName:"ul"},"[improve][Java]"," Optimize pause when creating sub consumers in multi-topic consumer ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14566"},"#14566")),(0,i.kt)("li",{parentName:"ul"},"[cleanup][Java]"," Reduce code duplication in admin client ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16377"},"#16377")),(0,i.kt)("li",{parentName:"ul"},"[cleanup][Java]"," Remove redundant check for chunked message TotalChunkMsgSize in ConsumerImpl ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16797"},"#16797")),(0,i.kt)("li",{parentName:"ul"},"[fix][Java]"," Fixed ack failure in ReaderImpl due to null messageId ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17728"},"#17728")),(0,i.kt)("li",{parentName:"ul"},"[fix][Java]"," Unwrap completion exception for Lookup Services ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17717"},"#17717")),(0,i.kt)("li",{parentName:"ul"},"[fix][Java]"," Fix scheduledExecutorProvider not shutdown ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17527"},"#17527")),(0,i.kt)("li",{parentName:"ul"},"[fix][Java]"," Fix the message present in incoming queue after going to DLQ ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17326"},"#17326")),(0,i.kt)("li",{parentName:"ul"},"[fix][Java]"," Fix reach redeliverCount client can't send batch messags ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17317"},"#17317")),(0,i.kt)("li",{parentName:"ul"},"[fix][Java]"," Fix reach redeliverCount client can't send messages to DLQ ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17287"},"#17287")),(0,i.kt)("li",{parentName:"ul"},"[fix][Java]"," LastBatchSendNanoTime initialization ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17058"},"#17058")),(0,i.kt)("li",{parentName:"ul"},"[fix][Java]"," Fixed inactive cnx channel causing the request to fail to time out and fail to return ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17051"},"#17051")),(0,i.kt)("li",{parentName:"ul"},"[fix][Java]"," Release semaphore before discarding messages in batchMessageContainer ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17019"},"#17019")),(0,i.kt)("li",{parentName:"ul"},"[fix][Java]"," Fix client memory limit currentUsage leak and semaphore release duplicated in ProducerImpl ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16837"},"#16837")),(0,i.kt)("li",{parentName:"ul"},"[fix][Java]"," Release memory usage for invalid messages ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16835"},"#16835")),(0,i.kt)("li",{parentName:"ul"},"[fix][Java]"," Fix subscription topic name error ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16719"},"#16719")),(0,i.kt)("li",{parentName:"ul"},"[fix][Java]"," Add message key if exists to deadLetter messages ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16615"},"#16615")),(0,i.kt)("li",{parentName:"ul"},"[fix][Java]"," Fix large messages sometimes cannot be split into chunks ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16196"},"#16196")),(0,i.kt)("li",{parentName:"ul"},"[fix][Java]"," Only trigger the batch receive timeout when having pending batch receives requests ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16160"},"#16160")),(0,i.kt)("li",{parentName:"ul"},"[fix][Java]"," Fix the startMessageId can't be respected as the ChunkMessageID ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16154"},"#16154")),(0,i.kt)("li",{parentName:"ul"},"[fix][Java]"," Fix auto cluster failover can't resolve host bug ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16152"},"#16152")),(0,i.kt)("li",{parentName:"ul"},"[fix][Java]"," Prevent the trigger from running concurrently in the memory limit controller ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15737"},"#15737")),(0,i.kt)("li",{parentName:"ul"},"[fix][Java]"," Fix messages sent by producers without schema cannot be decoded ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15622"},"#15622")),(0,i.kt)("li",{parentName:"ul"},"[fix][Java]"," Fix flaky BatchMessageTest by initializing lastBatchSendNanoTime ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15406"},"#15406")),(0,i.kt)("li",{parentName:"ul"},"[fix][Java]"," Fix inconsistent parameter of TopicPolicies.getSubscriptionDispatchRate ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15293"},"#15293")),(0,i.kt)("li",{parentName:"ul"},"[fix][Java]"," Fix typo in ConsumerBuilder ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15194"},"#15194")),(0,i.kt)("li",{parentName:"ul"},"[fix][Java]"," Fix performance regression with message listener ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15162"},"#15162")),(0,i.kt)("li",{parentName:"ul"},"[fix][Java]"," ConsumerBuilderImpl can not set null to deadLetterPolicy ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14980"},"#14980")),(0,i.kt)("li",{parentName:"ul"},"[fix][Java]"," Fix message publishing stuck when enabling batch ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14870"},"#14870")),(0,i.kt)("li",{parentName:"ul"},"[fix][Java]"," Fix NPE of MultiTopicsConsumerImpl due to race condition ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18287"},"#18287"))))}m.isMDXComponent=!0}}]);