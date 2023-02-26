"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[9250],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),h=i,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||r;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},37406:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var n=a(87462),i=(a(67294),a(3905));const r={title:"What\u2019s New in Apache Pulsar 2.10.3",date:new Date("2023-01-09T00:00:00.000Z"),author:"liangyepianzhou, momo-jun"},o=void 0,s={permalink:"/blog/2023/01/09/Apache-Pulsar-2-10-3",editUrl:"https://github.com/apache/pulsar-site/edit/main/blog/2023-01-09-Apache-Pulsar-2-10-3.md",source:"@site/blog/2023-01-09-Apache-Pulsar-2-10-3.md",title:"What\u2019s New in Apache Pulsar 2.10.3",description:"The Apache Pulsar community releases version 2.10.3! 50 contributors provided improvements and bug fixes that delivered 155 commits. Thanks for all your contributions.",date:"2023-01-09T00:00:00.000Z",formattedDate:"January 9, 2023",tags:[],readingTime:2.04,hasTruncateMarker:!0,authors:[{name:"liangyepianzhou, momo-jun"}],frontMatter:{title:"What\u2019s New in Apache Pulsar 2.10.3",date:"2023-01-09T00:00:00.000Z",author:"liangyepianzhou, momo-jun"},prevItem:{title:"Apache Pulsar 2022 Year in Review",permalink:"/blog/2023/01/10/pulsar-2022-year-in-review"},nextItem:{title:"Pulsar Summit Asia 2022 Recap",permalink:"/blog/2022/12/01/pulsar-summit-asia-2022-recap"}},l={authorsImageUrls:[void 0]},u=[{value:"Add <code>getState</code> in transactions for client APIs (PR-17423)",id:"add-getstate-in-transactions-for-client-apis-pr-17423",level:3},{value:"Issue",id:"issue",level:4},{value:"Resolution",id:"resolution",level:4},{value:"Enable delayed transaction messages (PR-17548)",id:"enable-delayed-transaction-messages-pr-17548",level:3},{value:"Issue",id:"issue-1",level:4},{value:"Resolution",id:"resolution-1",level:4},{value:"Allow configuring and disabling the size of <code>lookahead</code> for detecting fixed delays in messages (PR-17907)",id:"allow-configuring-and-disabling-the-size-of-lookahead-for-detecting-fixed-delays-in-messages-pr-17907",level:3},{value:"Issue",id:"issue-2",level:4},{value:"Resolution",id:"resolution-2",level:4},{value:"Fix memory leak while offloading ledgers (PR-18500)",id:"fix-memory-leak-while-offloading-ledgers-pr-18500",level:3},{value:"Issue",id:"issue-3",level:4},{value:"Fix namespace cannot be deleted by force (PR-18307)",id:"fix-namespace-cannot-be-deleted-by-force-pr-18307",level:3},{value:"Issue",id:"issue-4",level:4},{value:"Resolution",id:"resolution-3",level:4}],c={toc:u},p="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Apache Pulsar community releases version 2.10.3! 50 contributors provided improvements and bug fixes that delivered 155 commits. Thanks for all your contributions."),(0,i.kt)("p",null,"This blog walks through the most noteworthy changes. For the complete list including all feature enhancements and bug fixes, check out the ",(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/release-notes/versioned/pulsar-2.10.3/"},"Pulsar 2.10.3 Release Notes"),"."),(0,i.kt)("h3",{id:"add-getstate-in-transactions-for-client-apis-pr-17423"},"Add ",(0,i.kt)("inlineCode",{parentName:"h3"},"getState")," in transactions for client APIs (",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/17423"},"PR-17423"),")"),(0,i.kt)("h4",{id:"issue"},"Issue"),(0,i.kt)("p",null,"In earlier versions, the state of transactions on the client side could not be obtained with the client APIs. Users have no way to check the state of transactions before ending them."),(0,i.kt)("h4",{id:"resolution"},"Resolution"),(0,i.kt)("p",null,"Add an interface to get the state of transactions."),(0,i.kt)("h3",{id:"enable-delayed-transaction-messages-pr-17548"},"Enable delayed transaction messages (",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/17548"},"PR-17548"),")"),(0,i.kt)("h4",{id:"issue-1"},"Issue"),(0,i.kt)("p",null,"In earlier versions, delayed message delivery and transaction messages could not be used simultaneously. When sending a transaction message with a certain delay and committing this transaction, the messages sent by transactions are immediately received by consumers without any expected delay."),(0,i.kt)("h4",{id:"resolution-1"},"Resolution"),(0,i.kt)("p",null,"Allow clients to send delayed messages with transactions using ",(0,i.kt)("inlineCode",{parentName:"p"},"trackDelayedDelivery"),"."),(0,i.kt)("h3",{id:"allow-configuring-and-disabling-the-size-of-lookahead-for-detecting-fixed-delays-in-messages-pr-17907"},"Allow configuring and disabling the size of ",(0,i.kt)("inlineCode",{parentName:"h3"},"lookahead")," for detecting fixed delays in messages (",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/17907"},"PR-17907"),")"),(0,i.kt)("h4",{id:"issue-2"},"Issue"),(0,i.kt)("p",null,"When detecting that all messages have a fixed delay time, it\u2019s helpful that users can configure the size of ",(0,i.kt)("inlineCode",{parentName:"p"},"lookahead")," to detect and pause the reads from cursors. But in earlier versions, the size of `lookahead is pre-defined and fixed, which lacks flexibility and limits the usage."),(0,i.kt)("h4",{id:"resolution-2"},"Resolution"),(0,i.kt)("p",null,"Allow configuring and disabling the size of ",(0,i.kt)("inlineCode",{parentName:"p"},"lookahead")," for detecting fixed delays in messages."),(0,i.kt)("h3",{id:"fix-memory-leak-while-offloading-ledgers-pr-18500"},"Fix memory leak while offloading ledgers (",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/18500"},"PR-18500"),")"),(0,i.kt)("h4",{id:"issue-3"},"Issue"),(0,i.kt)("p",null,"In earlier versions, ",(0,i.kt)("inlineCode",{parentName:"p"},"BlockAwareSegmentInputStreamImpl")," never releases the BookKeeper entries in the ",(0,i.kt)("inlineCode",{parentName:"p"},"close")," method, leading to ",(0,i.kt)("inlineCode",{parentName:"p"},"OutOfDirectMemory")," errors on brokers that frequently run offloading activities. This PR fixes the incorrect ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," conditions."),(0,i.kt)("h3",{id:"fix-namespace-cannot-be-deleted-by-force-pr-18307"},"Fix namespace cannot be deleted by force (",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/18307"},"PR-18307"),")"),(0,i.kt)("h4",{id:"issue-4"},"Issue"),(0,i.kt)("p",null,"In earlier versions, when you delete a namespace by force, if ",(0,i.kt)("inlineCode",{parentName:"p"},"__transaction_buffer_snapshot")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"__change_events")," (system topic for topic policies) have been deleted, then the deletion of regular topics will fail because it cannot clear the snapshots and topic policies."),(0,i.kt)("h4",{id:"resolution-3"},"Resolution"),(0,i.kt)("p",null,"Delete regular topics before deleting system topics when deleting a namespace. And deleting the system topic ",(0,i.kt)("inlineCode",{parentName:"p"},"__change_events")," does not clear its topic policy."),(0,i.kt)("h1",{id:"whats-next"},"What\u2019s Next?"),(0,i.kt)("p",null,"If you are interested in learning more about Pulsar 2.10.3, you can ",(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/download/"},"download")," and try it out now! "),(0,i.kt)("p",null,"For more information about the Apache Pulsar project and current progress, visit\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org"},"Pulsar website"),", follow the project on Twitter\n",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/apache_pulsar"},"@apache_pulsar"),", and join ",(0,i.kt)("a",{parentName:"p",href:"https://apache-pulsar.slack.com/"},"Pulsar Slack"),"!"))}d.isMDXComponent=!0}}]);