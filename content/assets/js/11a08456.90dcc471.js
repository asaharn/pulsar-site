"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[4775],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(g,s(s({ref:t},c),{},{components:n})):a.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79509:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={id:"administration-geo",title:"Pulsar geo-replication",sidebar_label:"Geo-replication",original_id:"administration-geo"},s=void 0,o={unversionedId:"administration-geo",id:"version-2.3.2/administration-geo",title:"Pulsar geo-replication",description:"Geo-replication is the replication of persistently stored message data across multiple clusters of a Pulsar instance.",source:"@site/versioned_docs/version-2.3.2/administration-geo.md",sourceDirName:".",slug:"/administration-geo",permalink:"/docs/2.3.2/administration-geo",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.3.2/administration-geo.md",tags:[],version:"2.3.2",frontMatter:{id:"administration-geo",title:"Pulsar geo-replication",sidebar_label:"Geo-replication",original_id:"administration-geo"},sidebar:"version-2.3.2/docsSidebar",previous:{title:"ZooKeeper and BookKeeper",permalink:"/docs/2.3.2/administration-zk-bk"},next:{title:"Dashboard",permalink:"/docs/2.3.2/administration-dashboard"}},l={},p=[{value:"How it works",id:"how-it-works",level:2},{value:"Geo-replication and Pulsar properties",id:"geo-replication-and-pulsar-properties",level:2},{value:"Local persistence and forwarding",id:"local-persistence-and-forwarding",level:2},{value:"Configuring replication",id:"configuring-replication",level:2},{value:"Granting permissions to properties",id:"granting-permissions-to-properties",level:3},{value:"Enabling geo-replication namespaces",id:"enabling-geo-replication-namespaces",level:3},{value:"Using topics with geo-replication",id:"using-topics-with-geo-replication",level:3},{value:"Selective replication",id:"selective-replication",level:4},{value:"Topic stats",id:"topic-stats",level:4},{value:"Deleting a geo-replication topic",id:"deleting-a-geo-replication-topic",level:4}],c={toc:p},u="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Geo-replication")," is the replication of persistently stored message data across multiple clusters of a Pulsar instance."),(0,r.kt)("h2",{id:"how-it-works"},"How it works"),(0,r.kt)("p",null,"The diagram below illustrates the process of geo-replication across Pulsar clusters:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Replication Diagram",src:n(4005).Z,width:"709",height:"349"})),(0,r.kt)("p",null,"In this diagram, whenever ",(0,r.kt)("strong",{parentName:"p"},"P1"),", ",(0,r.kt)("strong",{parentName:"p"},"P2"),", and ",(0,r.kt)("strong",{parentName:"p"},"P3")," producers publish messages to the ",(0,r.kt)("strong",{parentName:"p"},"T1")," topic on ",(0,r.kt)("strong",{parentName:"p"},"Cluster-A"),", ",(0,r.kt)("strong",{parentName:"p"},"Cluster-B"),", and ",(0,r.kt)("strong",{parentName:"p"},"Cluster-C")," clusters respectively, those messages are instantly replicated across clusters. Once replicated, ",(0,r.kt)("strong",{parentName:"p"},"C1")," and ",(0,r.kt)("strong",{parentName:"p"},"C2")," consumers can consume those messages from their respective clusters."),(0,r.kt)("p",null,"Without geo-replication, ",(0,r.kt)("strong",{parentName:"p"},"C1")," and ",(0,r.kt)("strong",{parentName:"p"},"C2")," consumers are not able to consume messages published by ",(0,r.kt)("strong",{parentName:"p"},"P3")," producer."),(0,r.kt)("h2",{id:"geo-replication-and-pulsar-properties"},"Geo-replication and Pulsar properties"),(0,r.kt)("p",null,"Geo-replication must be enabled on a per-tenant basis in Pulsar. Geo-replication can be enabled between clusters only when a tenant has been created that allows access to both clusters."),(0,r.kt)("p",null,"Although geo-replication must be enabled between two clusters, it's actually managed at the namespace level. You must complete the following tasks to enable geo-replication for a namespace:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#enabling-geo-replication-namespaces"},"Enable geo-replication namespaces")),(0,r.kt)("li",{parentName:"ul"},"Configure that namespace to replicate across two or more provisioned clusters")),(0,r.kt)("p",null,"Any message published on ",(0,r.kt)("em",{parentName:"p"},"any")," topic in that namespace will be replicated to all clusters in the specified set."),(0,r.kt)("h2",{id:"local-persistence-and-forwarding"},"Local persistence and forwarding"),(0,r.kt)("p",null,"When messages are produced on a Pulsar topic, they are first persisted in the local cluster, and then forwarded asynchronously to the remote clusters."),(0,r.kt)("p",null,"In normal cases, when there are no connectivity issues, messages are replicated immediately, at the same time as they are dispatched to local consumers. Typically, end-to-end delivery latency is defined by the network ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Round-trip_delay_time"},"round-trip time")," (RTT) between the remote regions."),(0,r.kt)("p",null,"Applications can create producers and consumers in any of the clusters, even when the remote clusters are not reachable (like during a network partition)."),(0,r.kt)("blockquote",null,(0,r.kt)("h4",{parentName:"blockquote",id:"subscriptions-are-local-to-a-cluster"},"Subscriptions are local to a cluster"),(0,r.kt)("p",{parentName:"blockquote"},"While producers and consumers can publish to and consume from any cluster in a Pulsar instance, subscriptions are local to the clusters in which they are created and cannot be transferred between clusters. If you do need to transfer a subscription, you\u2019ll need to create a new subscription in the desired cluster.")),(0,r.kt)("p",null,"In the aforementioned example, the ",(0,r.kt)("strong",{parentName:"p"},"T1")," topic is being replicated among three clusters, ",(0,r.kt)("strong",{parentName:"p"},"Cluster-A"),", ",(0,r.kt)("strong",{parentName:"p"},"Cluster-B"),", and ",(0,r.kt)("strong",{parentName:"p"},"Cluster-C"),"."),(0,r.kt)("p",null,"All messages produced in any of the three clusters are delivered to all subscriptions in other clusters. In this case, ",(0,r.kt)("strong",{parentName:"p"},"C1")," and ",(0,r.kt)("strong",{parentName:"p"},"C2")," consumers will receive all messages published by ",(0,r.kt)("strong",{parentName:"p"},"P1"),", ",(0,r.kt)("strong",{parentName:"p"},"P2"),", and ",(0,r.kt)("strong",{parentName:"p"},"P3")," producers. Ordering is still guaranteed on a per-producer basis."),(0,r.kt)("h2",{id:"configuring-replication"},"Configuring replication"),(0,r.kt)("p",null,"As stated in ",(0,r.kt)("a",{parentName:"p",href:"#geo-replication-and-pulsar-properties"},"Geo-replication and Pulsar properties")," section, geo-replication in Pulsar is managed at the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.2/reference-terminology#tenant"},"tenant")," level."),(0,r.kt)("h3",{id:"granting-permissions-to-properties"},"Granting permissions to properties"),(0,r.kt)("p",null,"To replicate to a cluster, the tenant needs permission to use that cluster. You can grant permission to the tenant when you create it or grant later."),(0,r.kt)("p",null,"Specify all the intended clusters when creating a tenant:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin tenants create my-tenant \\\n  --admin-roles my-admin-role \\\n  --allowed-clusters us-west,us-east,us-cent\n\n")),(0,r.kt)("p",null,"To update permissions of an existing tenant, use ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"create"),"."),(0,r.kt)("h3",{id:"enabling-geo-replication-namespaces"},"Enabling geo-replication namespaces"),(0,r.kt)("p",null,"You can create a namespace with the following command sample."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin namespaces create my-tenant/my-namespace\n\n")),(0,r.kt)("p",null,"Initially, the namespace is not assigned to any cluster. You can assign the namespace to clusters using the ",(0,r.kt)("inlineCode",{parentName:"p"},"set-clusters")," subcommand:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin namespaces set-clusters my-tenant/my-namespace \\\n  --clusters us-west,us-east,us-cent\n\n")),(0,r.kt)("p",null,"The replication clusters for a namespace can be changed at any time, without disruption to ongoing traffic. Replication channels are immediately set up or stopped in all clusters as soon as the configuration changes."),(0,r.kt)("h3",{id:"using-topics-with-geo-replication"},"Using topics with geo-replication"),(0,r.kt)("p",null,"Once you've created a geo-replication namespace, any topics that producers or consumers create within that namespace will be replicated across clusters. Typically, each application will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"serviceUrl")," for the local cluster."),(0,r.kt)("h4",{id:"selective-replication"},"Selective replication"),(0,r.kt)("p",null,"By default, messages are replicated to all clusters configured for the namespace. You can restrict replication selectively by specifying a replication list for a message, and then that message will be replicated only to the subset in the replication list."),(0,r.kt)("p",null,"The following is an example for the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.2/client-libraries-java"},"Java API"),". Note the use of the ",(0,r.kt)("inlineCode",{parentName:"p"},"setReplicationClusters")," method when constructing the ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/client/org/apache/pulsar/client/api/Message"},"Message")," object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nList<String> restrictReplicationTo = Arrays.asList(\n        "us-west",\n        "us-east"\n);\n\nProducer producer = client.newProducer()\n        .topic("some-topic")\n        .create();\n\nproducer.newMessage()\n        .value("my-payload".getBytes())\n        .setReplicationClusters(restrictReplicationTo)\n        .send();\n\n')),(0,r.kt)("h4",{id:"topic-stats"},"Topic stats"),(0,r.kt)("p",null,"Topic-specific statistics for geo-replication topics are available via the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.2/reference-pulsar-admin"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," tool and ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin persistent stats persistent://my-tenant/my-namespace/my-topic\n\n")),(0,r.kt)("p",null,"Each cluster reports its own local stats, including the incoming and outgoing replication rates and backlogs."),(0,r.kt)("h4",{id:"deleting-a-geo-replication-topic"},"Deleting a geo-replication topic"),(0,r.kt)("p",null,"Given that geo-replication topics exist in multiple regions, it's not possible to directly delete a geo-replication topic. Instead, you should rely on automatic topic garbage collection."),(0,r.kt)("p",null,"In Pulsar, a topic is automatically deleted when it meets the following three conditions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"when no producers or consumers are connected to it;"),(0,r.kt)("li",{parentName:"ul"},"there are no subscriptions to it;"),(0,r.kt)("li",{parentName:"ul"},"no more messages are kept for retention.\nFor geo-replication topics, each region uses a fault-tolerant mechanism to decide when it's safe to delete the topic locally.")),(0,r.kt)("p",null,"You can explicitly disable topic garbage collection by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"brokerDeleteInactiveTopicsEnabled")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," in your ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.2/reference-configuration#broker"},"broker configuration"),"."),(0,r.kt)("p",null,"To delete a geo-replication topic, close all producers and consumers on the topic, and delete all of its local subscriptions in every replication cluster. When Pulsar determines that no valid subscription for the topic remains across the system, it will garbage collect the topic."))}d.isMDXComponent=!0},4005:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/geo-replication-34036a887215513a9173d150f92e093e.png"}}]);