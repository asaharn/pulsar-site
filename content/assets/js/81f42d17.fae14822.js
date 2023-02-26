"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[55681],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,k=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(k,s(s({ref:t},u),{},{components:n})):a.createElement(k,s({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,s),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),o=n(86010),s=n(72389),i=n(67392),l=n(7094),c=n(12466);const u={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function p(e){const{lazy:t,block:n,defaultValue:s,values:p,groupId:m,className:d}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=p??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,i.l)(h,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===s?s:s??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:v}=(0,l.U)(),[N,y]=(0,r.useState)(g),w=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=m){const e=b[m];null!=e&&e!==N&&h.some((t=>t.value===e))&&y(e)}const O=e=>{const t=e.currentTarget,n=w.indexOf(t),a=h[n].value;a!==N&&(E(t),y(a),null!=m&&v(m,String(a)))},T=e=>{let t=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;t=w[n]??w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;t=w[n]??w[w.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u.tabList)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},d)},h.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>w.push(e),onKeyDown:T,onClick:O},s,{className:(0,o.Z)("tabs__item",u.tabItem,s?.className,{"tabs__item--active":N===t})}),n??t)}))),t?(0,r.cloneElement)(k.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,s.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},80408:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(65488),s=n(85162);const i={id:"io-overview",title:"Pulsar connector overview",sidebar_label:"Overview",original_id:"io-overview"},l=void 0,c={unversionedId:"io-overview",id:"version-2.7.2/io-overview",title:"Pulsar connector overview",description:"Messaging systems are most powerful when you can easily use them with external systems like databases and other messaging systems.",source:"@site/versioned_docs/version-2.7.2/io-overview.md",sourceDirName:".",slug:"/io-overview",permalink:"/docs/2.7.2/io-overview",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.2/io-overview.md",tags:[],version:"2.7.2",frontMatter:{id:"io-overview",title:"Pulsar connector overview",sidebar_label:"Overview",original_id:"io-overview"},sidebar:"version-2.7.2/docsSidebar",previous:{title:"Window Functions: Context",permalink:"/docs/2.7.2/window-functions-context"},next:{title:"Get started",permalink:"/docs/2.7.2/io-quickstart"}},u={},p=[{value:"Concept",id:"concept",level:2},{value:"Source",id:"source",level:3},{value:"Sink",id:"sink",level:3},{value:"Processing guarantee",id:"processing-guarantee",level:2},{value:"Set",id:"set",level:3},{value:"Update",id:"update",level:3},{value:"Work with connector",id:"work-with-connector",level:2}],m={toc:p},d="wrapper";function k(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Messaging systems are most powerful when you can easily use them with external systems like databases and other messaging systems."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Pulsar IO connectors")," enable you to easily create, deploy, and manage connectors that interact with external systems, such as ",(0,r.kt)("a",{parentName:"p",href:"https://cassandra.apache.org"},"Apache Cassandra"),", ",(0,r.kt)("a",{parentName:"p",href:"https://www.aerospike.com"},"Aerospike"),", and many others."),(0,r.kt)("h2",{id:"concept"},"Concept"),(0,r.kt)("p",null,"Pulsar IO connectors come in two types: ",(0,r.kt)("strong",{parentName:"p"},"source")," and ",(0,r.kt)("strong",{parentName:"p"},"sink"),"."),(0,r.kt)("p",null,"This diagram illustrates the relationship between source, Pulsar, and sink:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Pulsar IO diagram",src:n(83030).Z,title:"Pulsar IO connectors (sources and sinks)",width:"1758",height:"352"})),(0,r.kt)("h3",{id:"source"},"Source"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Sources ",(0,r.kt)("strong",{parentName:"p"},"feed data from external systems into Pulsar"),".")),(0,r.kt)("p",null,"Common sources include other messaging systems and firehose-style data pipeline APIs."),(0,r.kt)("p",null,"For the complete list of Pulsar built-in source connectors, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.2/io-connectors#source-connector"},"source connector"),"."),(0,r.kt)("h3",{id:"sink"},"Sink"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Sinks ",(0,r.kt)("strong",{parentName:"p"},"feed data from Pulsar into external systems"),".")),(0,r.kt)("p",null,"Common sinks include other messaging systems and SQL and NoSQL databases."),(0,r.kt)("p",null,"For the complete list of Pulsar built-in sink connectors, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.2/io-connectors#sink-connector"},"sink connector"),"."),(0,r.kt)("h2",{id:"processing-guarantee"},"Processing guarantee"),(0,r.kt)("p",null,"Processing guarantees are used to handle errors when writing messages to Pulsar topics."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Pulsar connectors and Functions use the ",(0,r.kt)("strong",{parentName:"p"},"same")," processing guarantees as below.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Delivery semantic"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"at-most-once")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Each message sent to a connector is to be ",(0,r.kt)("strong",{parentName:"td"},"processed once")," or ",(0,r.kt)("strong",{parentName:"td"},"not to be processed"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"at-least-once")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Each message sent to a connector is to be ",(0,r.kt)("strong",{parentName:"td"},"processed once")," or ",(0,r.kt)("strong",{parentName:"td"},"more than once"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"effectively-once")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Each message sent to a connector has ",(0,r.kt)("strong",{parentName:"td"},"one output associated")," with it.")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Processing guarantees for connectors not just rely on Pulsar guarantee but also ",(0,r.kt)("strong",{parentName:"p"},"relate to external systems"),", that is, ",(0,r.kt)("strong",{parentName:"p"},"the implementation of source and sink"),".")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Source: Pulsar ensures that writing messages to Pulsar topics respects to the processing guarantees. It is within Pulsar's control.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Sink: the processing guarantees rely on the sink implementation. If the sink implementation does not handle retries in an idempotent way, the sink does not respect to the processing guarantees."))),(0,r.kt)("h3",{id:"set"},"Set"),(0,r.kt)("p",null,"When creating a connector, you can set the processing guarantee with the following semantics:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ATLEAST_ONCE"),(0,r.kt)("li",{parentName:"ul"},"ATMOST_ONCE"),(0,r.kt)("li",{parentName:"ul"},"EFFECTIVELY_ONCE")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If ",(0,r.kt)("inlineCode",{parentName:"p"},"--processing-guarantees")," is not specified when creating a connector, the default semantic is ",(0,r.kt)("inlineCode",{parentName:"p"},"ATLEAST_ONCE"),".")),(0,r.kt)("p",null,"Here takes ",(0,r.kt)("strong",{parentName:"p"},"Admin CLI")," as an example. For more information about ",(0,r.kt)("strong",{parentName:"p"},"REST API")," or ",(0,r.kt)("strong",{parentName:"p"},"JAVA Admin API"),", see ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.2/io-use#create"},"here"),". "),(0,r.kt)(o.Z,{defaultValue:"Source",values:[{label:"Source",value:"Source"},{label:"Sink",value:"Sink"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Source",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin sources create \\\n  --processing-guarantees ATMOST_ONCE \\\n  # Other source configs\n\n")),(0,r.kt)("p",null,"For more information about the options of ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin sources create"),", see ",(0,r.kt)("a",{parentName:"p",href:"reference-connector-admin.md#create"},"here"),".")),(0,r.kt)(s.Z,{value:"Sink",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin sinks create \\\n  --processing-guarantees EFFECTIVELY_ONCE \\\n  # Other sink configs\n\n")),(0,r.kt)("p",null,"For more information about the options of ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin sinks create"),", see ",(0,r.kt)("a",{parentName:"p",href:"reference-connector-admin.md#create-1"},"here"),"."))),(0,r.kt)("h3",{id:"update"},"Update"),(0,r.kt)("p",null,"After creating a connector, you can update the processing guarantee with the following semantics:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ATLEAST_ONCE"),(0,r.kt)("li",{parentName:"ul"},"ATMOST_ONCE"),(0,r.kt)("li",{parentName:"ul"},"EFFECTIVELY_ONCE")),(0,r.kt)("p",null,"Here takes ",(0,r.kt)("strong",{parentName:"p"},"Admin CLI")," as an example. For more information about ",(0,r.kt)("strong",{parentName:"p"},"REST API")," or ",(0,r.kt)("strong",{parentName:"p"},"JAVA Admin API"),", see ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.2/io-use#create"},"here"),". "),(0,r.kt)(o.Z,{defaultValue:"Source",values:[{label:"Source",value:"Source"},{label:"Sink",value:"Sink"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Source",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin sources update \\\n  --processing-guarantees EFFECTIVELY_ONCE \\\n  # Other source configs\n\n")),(0,r.kt)("p",null,"For more information about the options of ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin sources update"),", see ",(0,r.kt)("a",{parentName:"p",href:"reference-connector-admin.md#update"},"here"),".")),(0,r.kt)(s.Z,{value:"Sink",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin sinks update \\\n  --processing-guarantees ATMOST_ONCE \\\n  # Other sink configs\n\n")),(0,r.kt)("p",null,"For more information about the options of ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin sinks update"),", see ",(0,r.kt)("a",{parentName:"p",href:"reference-connector-admin.md#update-1"},"here"),"."))),(0,r.kt)("h2",{id:"work-with-connector"},"Work with connector"),(0,r.kt)("p",null,"You can manage Pulsar connectors (for example, create, update, start, stop, restart, reload, delete and perform other operations on connectors) via the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.2/reference-connector-admin"},"Connector Admin CLI")," with ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.2/reference-connector-admin#sources"},"sources")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.2/reference-connector-admin#sinks"},"sinks")," subcommands."),(0,r.kt)("p",null,"Connectors (sources and sinks) and Functions are components of instances, and they all run on Functions workers. When managing a source, sink or function via ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.2/reference-connector-admin"},"Connector Admin CLI")," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.2/functions-cli"},"Functions Admin CLI"),", an instance is started on a worker. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.2/functions-worker#run-functions-worker-separately"},"Functions worker"),"."))}k.isMDXComponent=!0},83030:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pulsar-io-8e834df5eaed9d5b0a7e0ffa162e850a.png"}}]);