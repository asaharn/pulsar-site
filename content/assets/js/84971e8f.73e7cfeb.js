"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[6458],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),f=a,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},32623:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={id:"sql-overview",title:"Pulsar SQL Overview",sidebar_label:"Overview",original_id:"sql-overview"},s=void 0,i={unversionedId:"sql-overview",id:"version-2.6.2/sql-overview",title:"Pulsar SQL Overview",description:"Apache Pulsar is used to store streams of event data, and the event data is structured with predefined fields. With the implementation of the Schema Registry, you can store structured data in Pulsar and query the data by using Presto.",source:"@site/versioned_docs/version-2.6.2/sql-overview.md",sourceDirName:".",slug:"/sql-overview",permalink:"/docs/2.6.2/sql-overview",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.2/sql-overview.md",tags:[],version:"2.6.2",frontMatter:{id:"sql-overview",title:"Pulsar SQL Overview",sidebar_label:"Overview",original_id:"sql-overview"},sidebar:"version-2.6.2/docsSidebar",previous:{title:"CLI",permalink:"/docs/2.6.2/io-cli"},next:{title:"Query data",permalink:"/docs/2.6.2/sql-getting-started"}},c={},l=[],u={toc:l},p="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Apache Pulsar is used to store streams of event data, and the event data is structured with predefined fields. With the implementation of the ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.6.2/schema-get-started"},"Schema Registry"),", you can store structured data in Pulsar and query the data by using ",(0,a.kt)("a",{parentName:"p",href:"https://prestosql.io/"},"Presto"),".  "),(0,a.kt)("p",null,"As the core of Pulsar SQL, Presto Pulsar connector enables Presto workers within a Presto cluster to query data from Pulsar."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The Pulsar consumer and reader interfaces",src:r(35478).Z,width:"1847",height:"854"})),(0,a.kt)("p",null,"The query performance is efficient and highly scalable, because Pulsar adopts ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.6.2/concepts-architecture-overview#apache-bookkeeper"},"two level segment based architecture"),". "),(0,a.kt)("p",null,"Topics in Pulsar are stored as segments in ",(0,a.kt)("a",{parentName:"p",href:"https://bookkeeper.apache.org/"},"Apache BookKeeper"),". Each topic segment is replicated to some BookKeeper nodes, which enables concurrent reads and high read throughput. You can configure the number of BookKeeper nodes, and the default number is ",(0,a.kt)("inlineCode",{parentName:"p"},"3"),". In Presto Pulsar connector, data is read directly from BookKeeper, so Presto workers can read concurrently from horizontally scalable number BookKeeper nodes."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The Pulsar consumer and reader interfaces",src:r(50623).Z,width:"1847",height:"854"})))}d.isMDXComponent=!0},50623:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/pulsar-sql-arch-1-8b257e31ca5666ee351dbd8bfd3289aa.png"},35478:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/pulsar-sql-arch-2-a5eba8dcb20b1e762f3f459e05bad282.png"}}]);