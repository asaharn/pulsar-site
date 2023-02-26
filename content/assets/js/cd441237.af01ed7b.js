"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[4978],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,g=m["".concat(o,".").concat(c)]||m[c]||k[c]||l;return a?n.createElement(g,i(i({ref:t},d),{},{components:a})):n.createElement(g,i({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},61432:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={id:"client-libraries-websocket",title:"Pulsar's WebSocket API",sidebar_label:"WebSocket",original_id:"client-libraries-websocket"},i=void 0,s={unversionedId:"client-libraries-websocket",id:"version-2.2.0/client-libraries-websocket",title:"Pulsar's WebSocket API",description:"Pulsar's WebSocket API is meant to provide a simple way to interact with Pulsar using languages that do not have an official client library. Through WebSockets you can publish and consume messages and use all the features available in the Java, Python, and C++ client libraries.",source:"@site/versioned_docs/version-2.2.0/client-libraries-websocket.md",sourceDirName:".",slug:"/client-libraries-websocket",permalink:"/docs/2.2.0/client-libraries-websocket",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.2.0/client-libraries-websocket.md",tags:[],version:"2.2.0",frontMatter:{id:"client-libraries-websocket",title:"Pulsar's WebSocket API",sidebar_label:"WebSocket",original_id:"client-libraries-websocket"},sidebar:"version-2.2.0/docsSidebar",previous:{title:"C++",permalink:"/docs/2.2.0/client-libraries-cpp"},next:{title:"Overview",permalink:"/docs/2.2.0/admin-api-overview"}},o={},p=[{value:"Running the WebSocket service",id:"running-the-websocket-service",level:2},{value:"Embedded with a Pulsar broker",id:"embedded-with-a-pulsar-broker",level:3},{value:"As a separate component",id:"as-a-separate-component",level:3},{value:"Starting the broker",id:"starting-the-broker",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Producer endpoint",id:"producer-endpoint",level:3},{value:"Query param",id:"query-param",level:5},{value:"Publishing a message",id:"publishing-a-message",level:4},{value:"Example success response",id:"example-success-response",level:5},{value:"Example failure response",id:"example-failure-response",level:5},{value:"Consumer endpoint",id:"consumer-endpoint",level:3},{value:"Query param",id:"query-param-1",level:5},{value:"Receiving messages",id:"receiving-messages",level:5},{value:"Acknowledging the message",id:"acknowledging-the-message",level:4},{value:"Reader endpoint",id:"reader-endpoint",level:3},{value:"Query param",id:"query-param-2",level:5},{value:"Receiving messages",id:"receiving-messages-1",level:5},{value:"Acknowledging the message",id:"acknowledging-the-message-1",level:4},{value:"Error codes",id:"error-codes",level:3},{value:"Client examples",id:"client-examples",level:2},{value:"Python",id:"python",level:3},{value:"Python producer",id:"python-producer",level:4},{value:"Python consumer",id:"python-consumer",level:4},{value:"Python reader",id:"python-reader",level:4},{value:"Node.js",id:"nodejs",level:3},{value:"Node.js producer",id:"nodejs-producer",level:4},{value:"Node.js consumer",id:"nodejs-consumer",level:4},{value:"NodeJS reader",id:"nodejs-reader",level:4}],d={toc:p},m="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Pulsar's ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"},"WebSocket")," API is meant to provide a simple way to interact with Pulsar using languages that do not have an official ",(0,r.kt)("a",{parentName:"p",href:"getting-started-clients.md"},"client library"),". Through WebSockets you can publish and consume messages and use all the features available in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.2.0/client-libraries-java"},"Java"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.2.0/client-libraries-python"},"Python"),", and ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.2.0/client-libraries-cpp"},"C++")," client libraries."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can use Pulsar's WebSocket API with any WebSocket client library. See examples for Python and Node.js ",(0,r.kt)("a",{parentName:"p",href:"#client-examples"},"below"),".")),(0,r.kt)("h2",{id:"running-the-websocket-service"},"Running the WebSocket service"),(0,r.kt)("p",null,"The standalone variant of Pulsar that we recommend using for ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.2.0/getting-started-standalone"},"local development")," already has the WebSocket service enabled."),(0,r.kt)("p",null,"In non-standalone mode, there are two ways to deploy the WebSocket service:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#embedded-with-a-pulsar-broker"},"embedded")," with a Pulsar broker"),(0,r.kt)("li",{parentName:"ul"},"as a ",(0,r.kt)("a",{parentName:"li",href:"#as-a-separate-component"},"separate component"))),(0,r.kt)("h3",{id:"embedded-with-a-pulsar-broker"},"Embedded with a Pulsar broker"),(0,r.kt)("p",null,"In this mode, the WebSocket service will run within the same HTTP service that's already running in the broker. To enable this mode, set the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.2.0/reference-configuration#broker-webSocketServiceEnabled"},(0,r.kt)("inlineCode",{parentName:"a"},"webSocketServiceEnabled"))," parameter in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.2.0/reference-configuration#broker"},(0,r.kt)("inlineCode",{parentName:"a"},"conf/broker.conf"))," configuration file in your installation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"\nwebSocketServiceEnabled=true\n\n")),(0,r.kt)("h3",{id:"as-a-separate-component"},"As a separate component"),(0,r.kt)("p",null,"In this mode, the WebSocket service will be run from a Pulsar ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.2.0/reference-terminology#broker"},"broker")," as a separate service. Configuration for this mode is handled in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.2.0/reference-configuration#websocket"},(0,r.kt)("inlineCode",{parentName:"a"},"conf/websocket.conf"))," configuration file. You'll need to set ",(0,r.kt)("em",{parentName:"p"},"at least")," the following parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/2.2.0/reference-configuration#websocket-configurationStoreServers"},(0,r.kt)("inlineCode",{parentName:"a"},"configurationStoreServers"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/2.2.0/reference-configuration#websocket-webServicePort"},(0,r.kt)("inlineCode",{parentName:"a"},"webServicePort"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/2.2.0/reference-configuration#websocket-clusterName"},(0,r.kt)("inlineCode",{parentName:"a"},"clusterName")))),(0,r.kt)("p",null,"Here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"\nconfigurationStoreServers=zk1:2181,zk2:2181,zk3:2181\nwebServicePort=8080\nclusterName=my-cluster\n\n")),(0,r.kt)("h3",{id:"starting-the-broker"},"Starting the broker"),(0,r.kt)("p",null,"When the configuration is set, you can start the service using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.2.0/reference-cli-tools#pulsar-daemon"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-daemon"))," tool:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-daemon start websocket\n\n")),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("p",null,"Pulsar's WebSocket API offers three endpoints for ",(0,r.kt)("a",{parentName:"p",href:"#producer-endpoint"},"producing")," messages, ",(0,r.kt)("a",{parentName:"p",href:"#consumer-endpoint"},"consuming")," messages and ",(0,r.kt)("a",{parentName:"p",href:"#reader-endpoint"},"reading")," messages."),(0,r.kt)("p",null,"All exchanges via the WebSocket API use JSON."),(0,r.kt)("h3",{id:"producer-endpoint"},"Producer endpoint"),(0,r.kt)("p",null,"The producer endpoint requires you to specify a tenant, namespace, and topic in the URL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"\nws://broker-service-url:8080/ws/v2/producer/persistent/:tenant/:namespace/:topic\n\n")),(0,r.kt)("h5",{id:"query-param"},"Query param"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Key"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required?"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Explanation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sendTimeoutMillis")),(0,r.kt)("td",{parentName:"tr",align:"left"},"long"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Send timeout (default: 30 secs)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"batchingEnabled")),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Enable batching of messages (default: false)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"batchingMaxMessages")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Maximum number of messages permitted in a batch (default: 1000)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"maxPendingMessages")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set the max size of the internal-queue holding the messages (default: 1000)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"batchingMaxPublishDelay")),(0,r.kt)("td",{parentName:"tr",align:"left"},"long"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Time period within which the messages will be batched (default: 10ms)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"messageRoutingMode")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Message ",(0,r.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/api/client/index.html?org/apache/pulsar/client/api/ProducerConfiguration.MessageRoutingMode.html"},"routing mode")," for the partitioned producer: ",(0,r.kt)("inlineCode",{parentName:"td"},"SinglePartition"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"RoundRobinPartition"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"compressionType")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Compression ",(0,r.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/api/client/index.html?org/apache/pulsar/client/api/CompressionType.html"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"LZ4"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ZLIB"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"producerName")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specify the name for the producer. Pulsar will enforce only one producer with same name can be publishing on a topic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"initialSequenceId")),(0,r.kt)("td",{parentName:"tr",align:"left"},"long"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set the baseline for the sequence ids for messages published by the producer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"hashingScheme")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"http://pulsar.apache.org/api/client/org/apache/pulsar/client/api/ProducerConfiguration.HashingScheme.html"},"Hashing function")," to use when publishing on a partitioned topic: ",(0,r.kt)("inlineCode",{parentName:"td"},"JavaStringHash"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Murmur3_32Hash"))))),(0,r.kt)("h4",{id:"publishing-a-message"},"Publishing a message"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "payload": "SGVsbG8gV29ybGQ=",\n  "properties": {"key1": "value1", "key2": "value2"},\n  "context": "1"\n}\n\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Key"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required?"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Explanation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"payload")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Base-64 encoded payload")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"properties")),(0,r.kt)("td",{parentName:"tr",align:"left"},"key-value pairs"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Application-defined properties")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"context")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Application-defined request identifier")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"key")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no"),(0,r.kt)("td",{parentName:"tr",align:"left"},"For partitioned topics, decides which partition to use")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"replicationClusters")),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Restrict replication to this list of ",(0,r.kt)("a",{parentName:"td",href:"/docs/2.2.0/reference-terminology#cluster"},"clusters"),", specified by name")))),(0,r.kt)("h5",{id:"example-success-response"},"Example success response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n   "result": "ok",\n   "messageId": "CAAQAw==",\n   "context": "1"\n }\n\n')),(0,r.kt)("h5",{id:"example-failure-response"},"Example failure response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n {\n   "result": "send-error:3",\n   "errorMsg": "Failed to de-serialize from JSON",\n   "context": "1"\n }\n\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Key"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required?"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Explanation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"result")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ok")," if successful or an error message if unsuccessful")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"messageId")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Message ID assigned to the published message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"context")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Application-defined request identifier")))),(0,r.kt)("h3",{id:"consumer-endpoint"},"Consumer endpoint"),(0,r.kt)("p",null,"The consumer endpoint requires you to specify a tenant, namespace, and topic, as well as a subscription, in the URL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"\nws://broker-service-url:8080/ws/v2/consumer/persistent/:tenant/:namespace/:topic/:subscription\n\n")),(0,r.kt)("h5",{id:"query-param-1"},"Query param"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Key"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required?"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Explanation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ackTimeoutMillis")),(0,r.kt)("td",{parentName:"tr",align:"left"},"long"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set the timeout for unacked messages (default: 0)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"subscriptionType")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/api/client/index.html?org/apache/pulsar/client/api/SubscriptionType.html"},"Subscription type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Exclusive"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Failover"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Shared"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"receiverQueueSize")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Size of the consumer receive queue (default: 1000)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"consumerName")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Consumer name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"priorityLevel")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Define a ",(0,r.kt)("a",{parentName:"td",href:"http://pulsar.apache.org/api/client/org/apache/pulsar/client/api/ConsumerConfiguration.html#setPriorityLevel-int-"},"priority")," for the consumer")))),(0,r.kt)("h5",{id:"receiving-messages"},"Receiving messages"),(0,r.kt)("p",null,"Server will push messages on the WebSocket session:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "messageId": "CAAQAw==",\n  "payload": "SGVsbG8gV29ybGQ=",\n  "properties": {"key1": "value1", "key2": "value2"},\n  "publishTime": "2016-08-30 16:45:57.785"\n}\n\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Key"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required?"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Explanation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"messageId")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Message ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"payload")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Base-64 encoded payload")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"publishTime")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Publish timestamp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"properties")),(0,r.kt)("td",{parentName:"tr",align:"left"},"key-value pairs"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Application-defined properties")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"key")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Original routing key set by producer")))),(0,r.kt)("h4",{id:"acknowledging-the-message"},"Acknowledging the message"),(0,r.kt)("p",null,"Consumer needs to acknowledge the successful processing of the message to\nhave the Pulsar broker delete it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "messageId": "CAAQAw=="\n}\n\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Key"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required?"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Explanation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"messageId")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Message ID of the processed message")))),(0,r.kt)("h3",{id:"reader-endpoint"},"Reader endpoint"),(0,r.kt)("p",null,"The reader endpoint requires you to specify a tenant, namespace, and topic in the URL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"\nws://broker-service-url:8080/ws/v2/reader/persistent/:tenant/:namespace/:topic\n\n")),(0,r.kt)("h5",{id:"query-param-2"},"Query param"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Key"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required?"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Explanation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"readerName")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Reader name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"receiverQueueSize")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Size of the consumer receive queue (default: 1000)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"messageId")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int or enum"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Message ID to start from, ",(0,r.kt)("inlineCode",{parentName:"td"},"earliest")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"latest")," (default: ",(0,r.kt)("inlineCode",{parentName:"td"},"latest"),")")))),(0,r.kt)("h5",{id:"receiving-messages-1"},"Receiving messages"),(0,r.kt)("p",null,"Server will push messages on the WebSocket session:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "messageId": "CAAQAw==",\n  "payload": "SGVsbG8gV29ybGQ=",\n  "properties": {"key1": "value1", "key2": "value2"},\n  "publishTime": "2016-08-30 16:45:57.785"\n}\n\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Key"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required?"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Explanation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"messageId")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Message ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"payload")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Base-64 encoded payload")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"publishTime")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Publish timestamp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"properties")),(0,r.kt)("td",{parentName:"tr",align:"left"},"key-value pairs"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Application-defined properties")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"key")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Original routing key set by producer")))),(0,r.kt)("h4",{id:"acknowledging-the-message-1"},"Acknowledging the message"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"In WebSocket"),", Reader needs to acknowledge the successful processing of the message to\nhave the Pulsar WebSocket service update the number of pending messages.\nIf you don't send acknowledgements, Pulsar WebSocket service will stop sending messages after reaching the pendingMessages limit."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "messageId": "CAAQAw=="\n}\n\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Key"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required?"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Explanation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"messageId")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Message ID of the processed message")))),(0,r.kt)("h3",{id:"error-codes"},"Error codes"),(0,r.kt)("p",null,"In case of error the server will close the WebSocket session using the\nfollowing error codes:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Error Code"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Error Message"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Failed to create producer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Failed to subscribe")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Failed to deserialize from JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Failed to serialize to JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Failed to authenticate client")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"6"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Client is not authorized")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"7"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Invalid payload encoding")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Unknown error")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The application is responsible for re-establishing a new WebSocket session after a backoff period.")),(0,r.kt)("h2",{id:"client-examples"},"Client examples"),(0,r.kt)("p",null,"Below you'll find code examples for the Pulsar WebSocket API in ",(0,r.kt)("a",{parentName:"p",href:"#python"},"Python")," and ",(0,r.kt)("a",{parentName:"p",href:"#nodejs"},"Node.js"),"."),(0,r.kt)("h3",{id:"python"},"Python"),(0,r.kt)("p",null,"This example uses the ",(0,r.kt)("a",{parentName:"p",href:"https://pypi.python.org/pypi/websocket-client"},(0,r.kt)("inlineCode",{parentName:"a"},"websocket-client"))," package. You can install it using ",(0,r.kt)("a",{parentName:"p",href:"https://pypi.python.org/pypi/pip"},"pip"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pip install websocket-client\n\n")),(0,r.kt)("p",null,"You can also download it from ",(0,r.kt)("a",{parentName:"p",href:"https://pypi.python.org/pypi/websocket-client"},"PyPI"),"."),(0,r.kt)("h4",{id:"python-producer"},"Python producer"),(0,r.kt)("p",null,"Here's an example Python producer that sends a simple message to a Pulsar ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.2.0/reference-terminology#topic"},"topic"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\nimport websocket, base64, json\n\nTOPIC = 'ws://localhost:8080/ws/producer/persistent/public/default/my-topic'\n\nws = websocket.create_connection(TOPIC)\n\n# Send one message as JSON\nws.send(json.dumps({\n    'payload' : base64.b64encode('Hello World'),\n    'properties': {\n        'key1' : 'value1',\n        'key2' : 'value2'\n    },\n    'context' : 5\n}))\n\nresponse =  json.loads(ws.recv())\nif response['result'] == 'ok':\n    print 'Message published successfully'\nelse:\n    print 'Failed to publish message:', response\nws.close()\n\n")),(0,r.kt)("h4",{id:"python-consumer"},"Python consumer"),(0,r.kt)("p",null,"Here's an example Python consumer that listens on a Pulsar topic and prints the message ID whenever a message arrives:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\nimport websocket, base64, json\n\nTOPIC = 'ws://localhost:8080/ws/v2/consumer/persistent/public/default/my-topic/my-sub'\n\nws = websocket.create_connection(TOPIC)\n\nwhile True:\n    msg = json.loads(ws.recv())\n    if not msg: break\n\n    print \"Received: {} - payload: {}\".format(msg, base64.b64decode(msg['payload']))\n\n    # Acknowledge successful processing\n    ws.send(json.dumps({'messageId' : msg['messageId']}))\n\nws.close()\n\n")),(0,r.kt)("h4",{id:"python-reader"},"Python reader"),(0,r.kt)("p",null,"Here's an example Python reader that listens on a Pulsar topic and prints the message ID whenever a message arrives:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\nimport websocket, base64, json\n\nTOPIC = 'ws://localhost:8080/ws/v2/reader/persistent/public/default/my-topic'\n\nws = websocket.create_connection(TOPIC)\n\nwhile True:\n    msg = json.loads(ws.recv())\n    if not msg: break\n\n    print \"Received: {} - payload: {}\".format(msg, base64.b64decode(msg['payload']))\n\n    # Acknowledge successful processing\n    ws.send(json.dumps({'messageId' : msg['messageId']}))\n\nws.close()\n\n")),(0,r.kt)("h3",{id:"nodejs"},"Node.js"),(0,r.kt)("p",null,"This example uses the ",(0,r.kt)("a",{parentName:"p",href:"https://websockets.github.io/ws/"},(0,r.kt)("inlineCode",{parentName:"a"},"ws"))," package. You can install it using ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ npm install ws\n\n")),(0,r.kt)("h4",{id:"nodejs-producer"},"Node.js producer"),(0,r.kt)("p",null,"Here's an example Node.js producer that sends a simple message to a Pulsar topic:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'\nvar WebSocket = require(\'ws\'),\n    topic = "ws://localhost:8080/ws/v2/producer/persistent/public/default/my-topic",\n    ws = new WebSocket(topic);\n\nvar message = {\n  "payload" : new Buffer("Hello World").toString(\'base64\'),\n  "properties": {\n    "key1" : "value1",\n    "key2" : "value2"\n  },\n  "context" : "1"\n};\n\nws.on(\'open\', function() {\n  // Send one message\n  ws.send(JSON.stringify(message));\n});\n\nws.on(\'message\', function(message) {\n  console.log(\'received ack: %s\', message);\n});\n\n')),(0,r.kt)("h4",{id:"nodejs-consumer"},"Node.js consumer"),(0,r.kt)("p",null,"Here's an example Node.js consumer that listens on the same topic used by the producer above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"\nvar WebSocket = require('ws'),\n    topic = \"ws://localhost:8080/ws/v2/consumer/persistent/public/default/my-topic/my-sub\",\n    ws = new WebSocket(topic);\n\nws.on('message', function(message) {\n    var receiveMsg = JSON.parse(message);\n    console.log('Received: %s - payload: %s', message, new Buffer(receiveMsg.payload, 'base64').toString());\n    var ackMsg = {\"messageId\" : receiveMsg.messageId};\n    ws.send(JSON.stringify(ackMsg));\n});\n\n")),(0,r.kt)("h4",{id:"nodejs-reader"},"NodeJS reader"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"\nvar WebSocket = require('ws'),\n    topic = \"ws://localhost:8080/ws/v2/reader/persistent/public/default/my-topic\",\n    ws = new WebSocket(topic);\n\nws.on('message', function(message) {\n    var receiveMsg = JSON.parse(message);\n    console.log('Received: %s - payload: %s', message, new Buffer(receiveMsg.payload, 'base64').toString());\n    var ackMsg = {\"messageId\" : receiveMsg.messageId};\n    ws.send(JSON.stringify(ackMsg));\n});\n\n")))}k.isMDXComponent=!0}}]);