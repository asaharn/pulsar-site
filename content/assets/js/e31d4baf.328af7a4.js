"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[758],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),d=i,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),i=a(86010);const r={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(r.tabItem,l),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),i=a(67294),r=a(86010),l=a(72389),o=a(67392),s=a(7094),c=a(12466);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function u(e){const{lazy:t,block:a,defaultValue:l,values:u,groupId:m,className:d}=e,h=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=u??h.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),k=(0,o.l)(g,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===l?l:l??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==b&&!g.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:v}=(0,s.U)(),[y,N]=(0,i.useState)(b),w=[],{blockElementScrollPositionUntilNextRender:C}=(0,c.o5)();if(null!=m){const e=f[m];null!=e&&e!==y&&g.some((t=>t.value===e))&&N(e)}const T=e=>{const t=e.currentTarget,a=w.indexOf(t),n=g[a].value;n!==y&&(C(t),N(n),null!=m&&v(m,String(n)))},E=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const a=w.indexOf(e.currentTarget)+1;t=w[a]??w[0];break}case"ArrowLeft":{const a=w.indexOf(e.currentTarget)-1;t=w[a]??w[w.length-1];break}}t?.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",p.tabList)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},d)},g.map((e=>{let{value:t,label:a,attributes:l}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>w.push(e),onKeyDown:E,onClick:T},l,{className:(0,r.Z)("tabs__item",p.tabItem,l?.className,{"tabs__item--active":y===t})}),a??t)}))),t?(0,i.cloneElement)(h.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function m(e){const t=(0,l.Z)();return i.createElement(u,(0,n.Z)({key:String(t)},e))}},7904:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=a(87462),i=(a(67294),a(3905)),r=a(65488),l=a(85162);const o={id:"administration-geo",title:"Pulsar geo-replication",sidebar_label:"Geo-replication"},s=void 0,c={unversionedId:"administration-geo",id:"version-2.2.0/administration-geo",title:"Pulsar geo-replication",description:"Enable geo-replication for a namespace",source:"@site/versioned_docs/version-2.2.0/administration-geo.md",sourceDirName:".",slug:"/administration-geo",permalink:"/docs/2.2.0/administration-geo",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.2.0/administration-geo.md",tags:[],version:"2.2.0",frontMatter:{id:"administration-geo",title:"Pulsar geo-replication",sidebar_label:"Geo-replication"},sidebar:"version-2.2.0/docsSidebar",previous:{title:"ZooKeeper and BookKeeper",permalink:"/docs/2.2.0/administration-zk-bk"},next:{title:"Dashboard",permalink:"/docs/2.2.0/administration-dashboard"}},p={},u=[{value:"Enable geo-replication for a namespace",id:"enable-geo-replication-for-a-namespace",level:2},{value:"Local persistence and forwarding",id:"local-persistence-and-forwarding",level:2},{value:"Configure replication",id:"configure-replication",level:2},{value:"Connect replication clusters",id:"connect-replication-clusters",level:3},{value:"Grant permissions to properties",id:"grant-permissions-to-properties",level:3},{value:"Enable geo-replication",id:"enable-geo-replication",level:3},{value:"Enable geo-replication at namespace level",id:"enable-geo-replication-at-namespace-level",level:4},{value:"Use topics with geo-replication",id:"use-topics-with-geo-replication",level:3},{value:"Selective replication",id:"selective-replication",level:4},{value:"Topic stats",id:"topic-stats",level:4},{value:"Delete a geo-replication topic",id:"delete-a-geo-replication-topic",level:4},{value:"Replicated subscriptions",id:"replicated-subscriptions",level:2},{value:"Enable replicated subscription",id:"enable-replicated-subscription",level:3},{value:"Advantages",id:"advantages",level:3},{value:"Limitations",id:"limitations",level:3},{value:"Migrate data between clusters using geo-replication",id:"migrate-data-between-clusters-using-geo-replication",level:2}],m={toc:u},d="wrapper";function h(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"enable-geo-replication-for-a-namespace"},"Enable geo-replication for a namespace"),(0,i.kt)("p",null,"You must enable geo-replication on a ",(0,i.kt)("a",{parentName:"p",href:"#concepts-multi-tenancy"},"per-tenant basis")," in Pulsar. For example, you can enable geo-replication between two specific clusters only when a tenant has access to both clusters."),(0,i.kt)("p",null,"Geo-replication is managed at the namespace level, which means you only need to create and configure a namespace to replicate messages between two or more provisioned clusters that a tenant can access."),(0,i.kt)("p",null,"Complete the following tasks to enable geo-replication for a namespace:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#enable-geo-replication-at-namespace-level"},"Enable a geo-replication namespace")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/2.2.0/admin-api-namespaces/#configure-replication-clusters"},"Configure that namespace to replicate across two or more provisioned clusters"))),(0,i.kt)("p",null,"Any message published on ",(0,i.kt)("em",{parentName:"p"},"any")," topic in that namespace is replicated to all clusters in the specified set."),(0,i.kt)("h2",{id:"local-persistence-and-forwarding"},"Local persistence and forwarding"),(0,i.kt)("p",null,"When messages are produced on a Pulsar topic, messages are first persisted in the local cluster, and then forwarded asynchronously to the remote clusters."),(0,i.kt)("p",null,"In normal cases, when connectivity issues are none, messages are replicated immediately, at the same time as they are dispatched to local consumers. Typically, the network ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Round-trip_delay_time"},"round-trip time")," (RTT) between the remote regions defines end-to-end delivery latency."),(0,i.kt)("p",null,"Applications can create producers and consumers in any of the clusters, even when the remote clusters are not reachable (like during a network partition)."),(0,i.kt)("p",null,"Producers and consumers can publish messages to and consume messages from any cluster in a Pulsar instance. However, subscriptions cannot only be local to the cluster where the subscriptions are created but also can be transferred between clusters after replicated subscription is enabled. Once replicated subscription is enabled, you can keep subscription state in synchronization. Therefore, a topic can be asynchronously replicated across multiple geographical regions. In case of failover, a consumer can restart consuming messages from the failure point in a different cluster."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"A typical geo-replication example with full-mesh pattern",src:a(4005).Z,width:"709",height:"349"})),(0,i.kt)("p",null,"In the aforementioned example, the ",(0,i.kt)("strong",{parentName:"p"},"T1")," topic is replicated among three clusters, ",(0,i.kt)("strong",{parentName:"p"},"Cluster-A"),", ",(0,i.kt)("strong",{parentName:"p"},"Cluster-B"),", and ",(0,i.kt)("strong",{parentName:"p"},"Cluster-C"),"."),(0,i.kt)("p",null,"All messages produced in any of the three clusters are delivered to all subscriptions in other clusters. In this case, ",(0,i.kt)("strong",{parentName:"p"},"C1")," and ",(0,i.kt)("strong",{parentName:"p"},"C2")," consumers receive all messages that ",(0,i.kt)("strong",{parentName:"p"},"P1"),", ",(0,i.kt)("strong",{parentName:"p"},"P2"),", and ",(0,i.kt)("strong",{parentName:"p"},"P3")," producers publish. Ordering is still guaranteed on a per-producer basis."),(0,i.kt)("h2",{id:"configure-replication"},"Configure replication"),(0,i.kt)("p",null,"This section guides you through the steps to configure geo-replicated clusters."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#connect-replication-clusters"},"Connect replication clusters")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#grant-permissions-to-properties"},"Grant permissions to properties")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#enable-geo-replication"},"Enable geo-replication")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#use-topics-with-geo-replication"},"Use topics with geo-replication"))),(0,i.kt)("h3",{id:"connect-replication-clusters"},"Connect replication clusters"),(0,i.kt)("p",null,"To replicate data among clusters, you need to configure each cluster to connect to the other. You can use the ",(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/tools/pulsar-admin/"},(0,i.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," tool to create a connection."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("p",null,"Suppose that you have 3 replication clusters: ",(0,i.kt)("inlineCode",{parentName:"p"},"us-west"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"us-cent"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"us-east"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Configure the connection from ",(0,i.kt)("inlineCode",{parentName:"p"},"us-west")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"us-east"),"."),(0,i.kt)("p",{parentName:"li"},"Run the following command on ",(0,i.kt)("inlineCode",{parentName:"p"},"us-west"),"."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin clusters create \\\n  --broker-url pulsar://<DNS-OF-US-EAST>:<PORT> \\\n  --url http://<DNS-OF-US-EAST>:<PORT> \\\n  us-east\n\n")),(0,i.kt)("p",null,"   :::tip"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you want to use a secure connection for a cluster, you can use the flags ",(0,i.kt)("inlineCode",{parentName:"p"},"--broker-url-secure")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"--url-secure"),". For more information, see ",(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/tools/pulsar-admin/"},"pulsar-admin clusters create"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Different clusters may have different authentications. You can use the authentication flag ",(0,i.kt)("inlineCode",{parentName:"p"},"--auth-plugin")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"--auth-parameters")," together to set cluster authentication, which overrides ",(0,i.kt)("inlineCode",{parentName:"p"},"brokerClientAuthenticationPlugin")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"brokerClientAuthenticationParameters")," if ",(0,i.kt)("inlineCode",{parentName:"p"},"authenticationEnabled")," sets to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"broker.conf")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"standalone.conf"),". For more information, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.2.0/concepts-authentication"},"authentication and authorization"),"."),(0,i.kt)("p",{parentName:"li"},":::"))),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Configure the connection from ",(0,i.kt)("inlineCode",{parentName:"p"},"us-west")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"us-cent"),"."),(0,i.kt)("p",{parentName:"li"},"Run the following command on ",(0,i.kt)("inlineCode",{parentName:"p"},"us-west"),"."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin clusters create \\\n  --broker-url pulsar://<DNS-OF-US-CENT>:<PORT> \\\n  --url http://<DNS-OF-US-CENT>:<PORT> \\\n  us-cent\n\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Run similar commands on ",(0,i.kt)("inlineCode",{parentName:"li"},"us-east")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"us-cent")," to create connections among clusters.")),(0,i.kt)("h3",{id:"grant-permissions-to-properties"},"Grant permissions to properties"),(0,i.kt)("p",null,"To replicate to a cluster, the tenant needs permission to use that cluster. You can grant permission to the tenant when you create the tenant or grant later."),(0,i.kt)("p",null,"Specify all the intended clusters when you create a tenant:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin tenants create my-tenant \\\n  --admin-roles my-admin-role \\\n  --allowed-clusters us-west,us-east,us-cent\n\n")),(0,i.kt)("p",null,"To update permissions of an existing tenant, use ",(0,i.kt)("inlineCode",{parentName:"p"},"update")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"create"),"."),(0,i.kt)("h3",{id:"enable-geo-replication"},"Enable geo-replication"),(0,i.kt)("p",null,"You can enable geo-replication at ",(0,i.kt)("strong",{parentName:"p"},"namespace")," or ",(0,i.kt)("strong",{parentName:"p"},"topic")," level."),(0,i.kt)("h4",{id:"enable-geo-replication-at-namespace-level"},"Enable geo-replication at namespace level"),(0,i.kt)("p",null,"You can create a namespace with the following command sample."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin namespaces create my-tenant/my-namespace\n\n")),(0,i.kt)("p",null,"Initially, the namespace is not assigned to any cluster. You can assign the namespace to clusters using the ",(0,i.kt)("inlineCode",{parentName:"p"},"set-clusters")," subcommand:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin namespaces set-clusters my-tenant/my-namespace \\\n  --clusters us-west,us-east,us-cent\n\n")),(0,i.kt)("h3",{id:"use-topics-with-geo-replication"},"Use topics with geo-replication"),(0,i.kt)("h4",{id:"selective-replication"},"Selective replication"),(0,i.kt)("p",null,"By default, messages are replicated to all clusters configured for the namespace. You can restrict replication selectively by specifying a replication list for a message, and then that message is replicated only to the subset in the replication list."),(0,i.kt)("p",null,"The following is an example for the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.2.0/client-libraries-java"},"Java API"),". Note the use of the ",(0,i.kt)("inlineCode",{parentName:"p"},"setReplicationClusters")," method when you construct the ",(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/client/org/apache/pulsar/client/api/Message"},"Message")," object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nList<String> restrictReplicationTo = Arrays.asList(\n        "us-west",\n        "us-east"\n);\n\nProducer producer = client.newProducer()\n        .topic("some-topic")\n        .create();\n\nproducer.newMessage()\n        .value("my-payload".getBytes())\n        .setReplicationClusters(restrictReplicationTo)\n        .send();\n\n')),(0,i.kt)("h4",{id:"topic-stats"},"Topic stats"),(0,i.kt)("p",null,"You can check topic-specific statistics for geo-replication topics using one of the following methods."),(0,i.kt)(r.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/tools/pulsar-admin/"},(0,i.kt)("inlineCode",{parentName:"a"},"pulsar-admin topics stats"))," command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin topics stats persistent://my-tenant/my-namespace/my-topic\n\n"))),(0,i.kt)(l.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.2.0&apiversion=v2#operation/getStats"},"GET /admin/v2/:schema/:tenant/:namespace/:topic/stats")))),(0,i.kt)("p",null,"Each cluster reports its own local stats, including the incoming and outgoing replication rates and backlogs."),(0,i.kt)("h4",{id:"delete-a-geo-replication-topic"},"Delete a geo-replication topic"),(0,i.kt)("p",null,"Given that geo-replication topics exist in multiple regions, directly deleting a geo-replication topic is not possible. Instead, you should rely on automatic topic garbage collection."),(0,i.kt)("p",null,"In Pulsar, a topic is automatically deleted when the topic meets the following three conditions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"no producers or consumers are connected to it;"),(0,i.kt)("li",{parentName:"ul"},"no subscriptions to it;"),(0,i.kt)("li",{parentName:"ul"},"no more messages are kept for retention.\nFor geo-replication topics, each region uses a fault-tolerant mechanism to decide when deleting the topic locally is safe.")),(0,i.kt)("p",null,"You can explicitly disable topic garbage collection by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"brokerDeleteInactiveTopicsEnabled")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," in your ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.2.0/reference-configuration#broker"},"broker configuration"),"."),(0,i.kt)("p",null,"To delete a geo-replication topic, close all producers and consumers on the topic, and delete all of its local subscriptions in every replication cluster. When Pulsar determines that no valid subscription for the topic remains across the system, it will garbage collect the topic."),(0,i.kt)("h2",{id:"replicated-subscriptions"},"Replicated subscriptions"),(0,i.kt)("p",null,"Pulsar supports replicated subscriptions, so you can keep subscription state in sync, within a sub-second timeframe, in the context of a topic that is being asynchronously replicated across multiple geographical regions."),(0,i.kt)("p",null,"In case of failover, a consumer can restart consuming from the failure point in a different cluster. "),(0,i.kt)("h3",{id:"enable-replicated-subscription"},"Enable replicated subscription"),(0,i.kt)("p",null,"Replicated subscription is disabled by default. You can enable replicated subscription when creating a consumer. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nConsumer<String> consumer = client.newConsumer(Schema.STRING)\n            .topic("my-topic")\n            .subscriptionName("my-subscription")\n            .replicateSubscriptionState(true)\n            .subscribe();\n\n')),(0,i.kt)("h3",{id:"advantages"},"Advantages"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It is easy to implement the logic. "),(0,i.kt)("li",{parentName:"ul"},"You can choose to enable or disable replicated subscription."),(0,i.kt)("li",{parentName:"ul"},"When you enable it, the overhead is low, and it is easy to configure. "),(0,i.kt)("li",{parentName:"ul"},"When you disable it, the overhead is zero.")),(0,i.kt)("h3",{id:"limitations"},"Limitations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When you enable replicated subscription, you're creating a consistent distributed snapshot to establish an association between message ids from different clusters. The snapshots are taken periodically. The default value is ",(0,i.kt)("inlineCode",{parentName:"li"},"1 second"),". It means that a consumer failing over to a different cluster can potentially receive 1 second of duplicates. You can also configure the frequency of the snapshot in the ",(0,i.kt)("inlineCode",{parentName:"li"},"broker.conf")," file."),(0,i.kt)("li",{parentName:"ul"},"Only the base line cursor position is synced in replicated subscriptions while the individual acknowledgments are not synced. This means the messages acknowledged out-of-order could end up getting delivered again, in the case of a cluster failover.")),(0,i.kt)("h2",{id:"migrate-data-between-clusters-using-geo-replication"},"Migrate data between clusters using geo-replication"),(0,i.kt)("p",null,"Using geo-replication to migrate data between clusters is a special use case of the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.2.0/concepts-replication/#active-active-replication"},"active-active replication pattern")," when you don't have a large amount of data."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create your new cluster."),(0,i.kt)("li",{parentName:"ol"},"Add the new cluster to your old cluster.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n  bin/pulsar-admin cluster create new-cluster\n\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Add the new cluster to your tenant.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n  bin/pulsar-admin tenants update my-tenant --cluster old-cluster,new-cluster\n\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Set the clusters on your namespace.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n  bin/pulsar-admin namespaces set-clusters my-tenant/my-ns --cluster old-cluster,new-cluster\n\n")),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Update your applications using ",(0,i.kt)("a",{parentName:"li",href:"#replicated-subscriptions"},"replicated subscriptions"),"."),(0,i.kt)("li",{parentName:"ol"},"Validate subscription replication is active.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n  bin/pulsar-admin topics stats-internal public/default/t1\n\n")),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"Move your consumers and producers to the new cluster by modifying the values of ",(0,i.kt)("inlineCode",{parentName:"li"},"serviceURL"),".")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"The replication starts from step 4, which means existing messages in your old cluster are not replicated. "),(0,i.kt)("li",{parentName:"ul"},"If you have some older messages to migrate, you can pre-create the replication subscriptions for each topic and set it at the earliest position by using ",(0,i.kt)("inlineCode",{parentName:"li"},"pulsar-admin topics create-subscription -s pulsar.repl.new-cluster -m earliest <topic>"),"."))))}h.isMDXComponent=!0},4005:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/geo-replication-34036a887215513a9173d150f92e093e.png"}}]);