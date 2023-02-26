"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[9673],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94174:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={id:"io-connectors",title:"Builtin Connectors",sidebar_label:"Builtin Connectors",original_id:"io-connectors"},i=void 0,c={unversionedId:"io-connectors",id:"version-2.4.2/io-connectors",title:"Builtin Connectors",description:"Pulsar distribution includes a set of common connectors that have been packaged and tested with the rest of Apache Pulsar.",source:"@site/versioned_docs/version-2.4.2/io-connectors.md",sourceDirName:".",slug:"/io-connectors",permalink:"/docs/2.4.2/io-connectors",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.4.2/io-connectors.md",tags:[],version:"2.4.2",frontMatter:{id:"io-connectors",title:"Builtin Connectors",sidebar_label:"Builtin Connectors",original_id:"io-connectors"},sidebar:"version-2.4.2/docsSidebar",previous:{title:"Debug",permalink:"/docs/2.4.2/io-debug"},next:{title:"Developing Connectors",permalink:"/docs/2.4.2/io-develop"}},s={},l=[],p={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pulsar distribution includes a set of common connectors that have been packaged and tested with the rest of Apache Pulsar.\nThese connectors import and export data from some of the most commonly used data systems. Using any these connectors is\nas easy as writing a simple connector configuration and running the connector locally or submitting the connector to a\nPulsar Functions cluster."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/2.4.2/io-aerospike"},"Aerospike Sink Connector")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/2.4.2/io-cassandra"},"Cassandra Sink Connector")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/2.4.2/io-kafka#sink"},"Kafka Sink Connector")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/2.4.2/io-kafka#source"},"Kafka Source Connector")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/2.4.2/io-kinesis#sink"},"Kinesis Sink Connector")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/2.4.2/io-rabbitmq#source"},"RabbitMQ Source Connector")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/2.4.2/io-rabbitmq#sink"},"RabbitMQ Sink Connector")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/2.4.2/io-twitter"},"Twitter Firehose Source Connector")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/2.4.2/io-cdc"},"CDC Source Connector based on Debezium")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/2.4.2/io-netty#source"},"Netty Source Connector")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/2.4.2/io-hbase#sink"},"Hbase Sink Connector")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/2.4.2/io-elasticsearch#sink"},"ElasticSearch Sink Connector")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/2.4.2/io-file#source"},"File Source Connector")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/2.4.2/io-hdfs#sink"},"Hdfs Sink Connector")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/2.4.2/io-mongo#sink"},"MongoDB Sink Connector")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/2.4.2/io-redis#sink"},"Redis Sink Connector")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/2.4.2/io-solr#sink"},"Solr Sink Connector")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/2.4.2/io-influxdb#sink"},"InfluxDB Sink Connector")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/2.4.2/io-jdbc"},"JDBC Sink Connector"))))}m.isMDXComponent=!0}}]);