"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[9849],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),m=d(a),c=r,g=m["".concat(o,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(g,i(i({ref:e},p),{},{components:a})):n.createElement(g,i({ref:e},p))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[m]="string"==typeof t?t:r,i[1]=s;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},26985:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={id:"administration-stats",title:"Pulsar stats",sidebar_label:"Pulsar statistics",original_id:"administration-stats"},i=void 0,s={unversionedId:"administration-stats",id:"version-2.6.2/administration-stats",title:"Pulsar stats",description:"Partitioned topics",source:"@site/versioned_docs/version-2.6.2/administration-stats.md",sourceDirName:".",slug:"/administration-stats",permalink:"/docs/2.6.2/administration-stats",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.2/administration-stats.md",tags:[],version:"2.6.2",frontMatter:{id:"administration-stats",title:"Pulsar stats",sidebar_label:"Pulsar statistics",original_id:"administration-stats"},sidebar:"version-2.6.2/docsSidebar",previous:{title:"Pulsar Manager",permalink:"/docs/2.6.2/administration-pulsar-manager"},next:{title:"Load balance",permalink:"/docs/2.6.2/administration-load-balance"}},o={},d=[{value:"Partitioned topics",id:"partitioned-topics",level:2},{value:"Topics",id:"topics",level:2}],p={toc:d},m="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"partitioned-topics"},"Partitioned topics"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Stat"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgRateIn"),(0,r.kt)("td",{parentName:"tr",align:null},"The sum of publish rates of all local and replication publishers in messages per second.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgThroughputIn"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as msgRateIn but in bytes per second instead of messages per second.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgRateOut"),(0,r.kt)("td",{parentName:"tr",align:null},"The sum of dispatch rates of all local and replication consumers in messages per second.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgThroughputOut"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as msgRateOut but in bytes per second instead of messages per second.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"averageMsgSize"),(0,r.kt)("td",{parentName:"tr",align:null},"Average message size, in bytes, from this publisher within the last interval.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"storageSize"),(0,r.kt)("td",{parentName:"tr",align:null},"The sum of storage size of the ledgers for this topic.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"publishers"),(0,r.kt)("td",{parentName:"tr",align:null},"The list of all local publishers into the topic. Publishers can be anywhere from zero to thousands.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"producerId"),(0,r.kt)("td",{parentName:"tr",align:null},"Internal identifier for this producer on this topic.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"producerName"),(0,r.kt)("td",{parentName:"tr",align:null},"Internal identifier for this producer, generated by the client library.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"IP address and source port for the connection of this producer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connectedSince"),(0,r.kt)("td",{parentName:"tr",align:null},"Timestamp this producer is created or last reconnected.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"subscriptions"),(0,r.kt)("td",{parentName:"tr",align:null},"The list of all local subscriptions to the topic.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"my-subscription"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of this subscription (client defined).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgBacklog"),(0,r.kt)("td",{parentName:"tr",align:null},"The count of messages in backlog for this subscription.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"This subscription type.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgRateExpired"),(0,r.kt)("td",{parentName:"tr",align:null},"The rate at which messages are discarded instead of dispatched from this subscription due to TTL.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"consumers"),(0,r.kt)("td",{parentName:"tr",align:null},"The list of connected consumers for this subscription.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"consumerName"),(0,r.kt)("td",{parentName:"tr",align:null},"Internal identifier for this consumer, generated by the client library.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"availablePermits"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of messages this consumer has space for in the listen queue of client library. A value of 0 means the queue of client library is full and receive() is not being called. A nonzero value means this consumer is ready to be dispatched messages.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"replication"),(0,r.kt)("td",{parentName:"tr",align:null},"This section gives the stats for cross-colo replication of this topic.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"replicationBacklog"),(0,r.kt)("td",{parentName:"tr",align:null},"The outbound replication backlog in messages.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connected"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the outbound replicator is connected.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"replicationDelayInSeconds"),(0,r.kt)("td",{parentName:"tr",align:null},"How long the oldest message has been waiting to be sent through the connection, if connected is true.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inboundConnection"),(0,r.kt)("td",{parentName:"tr",align:null},"The IP and port of the broker in the publisher connection of remote cluster to this broker.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inboundConnectedSince"),(0,r.kt)("td",{parentName:"tr",align:null},"The TCP connection being used to publish messages to the remote cluster. If no local publishers are connected, this connection is automatically closed after a minute.")))),(0,r.kt)("h2",{id:"topics"},"Topics"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Stat"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"entriesAddedCounter"),(0,r.kt)("td",{parentName:"tr",align:null},"Messages published since this broker loads this topic.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"numberOfEntries"),(0,r.kt)("td",{parentName:"tr",align:null},"Total number of messages being tracked.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"totalSize"),(0,r.kt)("td",{parentName:"tr",align:null},"Total storage size in bytes of all messages.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"currentLedgerEntries"),(0,r.kt)("td",{parentName:"tr",align:null},"Count of messages written to the ledger currently open for writing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"currentLedgerSize"),(0,r.kt)("td",{parentName:"tr",align:null},"Size in bytes of messages written to ledger currently open for writing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lastLedgerCreatedTimestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"Time when last ledger is created.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lastLedgerCreationFailureTimestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"Time when last ledger is failed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"waitingCursorsCount"),(0,r.kt)("td",{parentName:"tr",align:null},"How many cursors are caught up and waiting for a new message to be published.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pendingAddEntriesCount"),(0,r.kt)("td",{parentName:"tr",align:null},"How many messages have (asynchronous) write requests you are waiting on completion.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lastConfirmedEntry"),(0,r.kt)("td",{parentName:"tr",align:null},"The ledgerid:entryid of the last message successfully written. If the entryid is -1, then the ledger is opened or is being currently opened but has no entries written yet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"state"),(0,r.kt)("td",{parentName:"tr",align:null},"The state of the cursor ledger. Open means you have a cursor ledger for saving updates of the markDeletePosition.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ledgers"),(0,r.kt)("td",{parentName:"tr",align:null},"The ordered list of all ledgers for this topic holding its messages.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cursors"),(0,r.kt)("td",{parentName:"tr",align:null},"The list of all cursors on this topic. Every subscription you saw in the topic stats has one.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"markDeletePosition"),(0,r.kt)("td",{parentName:"tr",align:null},"The ack position: the last message the subscriber acknowledges receiving.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"readPosition"),(0,r.kt)("td",{parentName:"tr",align:null},"The latest position of subscriber for reading message.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"waitingReadOp"),(0,r.kt)("td",{parentName:"tr",align:null},"This is true when the subscription reads the latest message that is published to the topic and waits on new messages to be published.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pendingReadOps"),(0,r.kt)("td",{parentName:"tr",align:null},"The counter for how many outstanding read requests to the BookKeepers you have in progress.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"messagesConsumedCounter"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of messages this cursor acks since this broker loads this topic.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cursorLedger"),(0,r.kt)("td",{parentName:"tr",align:null},"The ledger used to persistently store the current markDeletePosition.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cursorLedgerLastEntry"),(0,r.kt)("td",{parentName:"tr",align:null},"The last entryid used to persistently store the current markDeletePosition.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"individuallyDeletedMessages"),(0,r.kt)("td",{parentName:"tr",align:null},"If Acks are done out of order, shows the ranges of messages Acked between the markDeletePosition and the read-position.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lastLedgerSwitchTimestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"The last time the cursor ledger is rolled over.")))))}u.isMDXComponent=!0}}]);