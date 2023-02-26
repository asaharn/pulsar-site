"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[1115],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,h=c["".concat(o,".").concat(u)]||c[u]||d[u]||l;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},50234:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={id:"schema-understand",title:"Understand schema",sidebar_label:"Understand schema",original_id:"schema-understand"},i=void 0,s={unversionedId:"schema-understand",id:"version-2.5.2/schema-understand",title:"Understand schema",description:"This chapter explains the basic concepts of Pulsar schema, focuses on the topics of particular importance, and provides additional background.",source:"@site/versioned_docs/version-2.5.2/schema-understand.md",sourceDirName:".",slug:"/schema-understand",permalink:"/docs/2.5.2/schema-understand",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.5.2/schema-understand.md",tags:[],version:"2.5.2",frontMatter:{id:"schema-understand",title:"Understand schema",sidebar_label:"Understand schema",original_id:"schema-understand"},sidebar:"version-2.5.2/docsSidebar",previous:{title:"Get started",permalink:"/docs/2.5.2/schema-get-started"},next:{title:"Schema evolution and compatibility",permalink:"/docs/2.5.2/schema-evolution-compatibility"}},o={},p=[{value:"SchemaInfo",id:"schemainfo",level:2},{value:"Schema type",id:"schema-type",level:2},{value:"Primitive type",id:"primitive-type",level:3},{value:"Complex type",id:"complex-type",level:3},{value:"keyvalue",id:"keyvalue",level:4},{value:"INLINE",id:"inline",level:5},{value:"SEPARATED",id:"separated",level:5},{value:"struct",id:"struct",level:4},{value:"static",id:"static",level:5},{value:"generic",id:"generic",level:5},{value:"Auto Schema",id:"auto-schema",level:3},{value:"AUTO_PRODUCE",id:"auto_produce",level:4},{value:"AUTO_CONSUME",id:"auto_consume",level:4},{value:"Schema version",id:"schema-version",level:2},{value:"How does schema work",id:"how-does-schema-work",level:2},{value:"Producer side",id:"producer-side",level:3},{value:"Consumer side",id:"consumer-side",level:3}],m={toc:p},c="wrapper";function d(e){let{components:t,...l}=e;return(0,r.kt)(c,(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This chapter explains the basic concepts of Pulsar schema, focuses on the topics of particular importance, and provides additional background."),(0,r.kt)("h2",{id:"schemainfo"},"SchemaInfo"),(0,r.kt)("p",null,"Pulsar schema is defined in a data structure called ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaInfo"),". "),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaInfo")," is stored and enforced on a per-topic basis and cannot be stored at the namespace or tenant level."),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaInfo")," consists of the following fields:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"Schema name (a string).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},"Schema type, which determines how to interpret the schema data. ",(0,r.kt)("li",null,"Predefined schema: see ",(0,r.kt)("a",{parentName:"td",href:"/docs/2.5.2/schema-understand#schema-type"},"here"),". "),(0,r.kt)("li",null,"Customized schema: it is left as an empty string. "))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"schema"),"\uff08",(0,r.kt)("inlineCode",{parentName:"td"},"payload"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"Schema data, which is a sequence of 8-bit unsigned bytes and schema-type specific.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"properties")),(0,r.kt)("td",{parentName:"tr",align:null},"It is a user defined properties as a string/string map. Applications can use this bag for carrying any application specific logics. Possible properties might be the Git hash associated with the schema, an environment string like ",(0,r.kt)("inlineCode",{parentName:"td"},"dev")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"prod"),".")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,"This is the ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaInfo")," of a string."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n    "name": "test-string-schema",\n    "type": "STRING",\n    "schema": "",\n    "properties": {}\n}\n\n')),(0,r.kt)("h2",{id:"schema-type"},"Schema type"),(0,r.kt)("p",null,"Pulsar supports various schema types, which are mainly divided into two categories: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Primitive type ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Complex type"))),(0,r.kt)("h3",{id:"primitive-type"},"Primitive type"),(0,r.kt)("p",null,"Currently, Pulsar supports the following primitive types:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Primitive Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BOOLEAN")),(0,r.kt)("td",{parentName:"tr",align:null},"A binary value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"INT8")),(0,r.kt)("td",{parentName:"tr",align:null},"A 8-bit signed integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"INT16")),(0,r.kt)("td",{parentName:"tr",align:null},"A 16-bit signed integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"INT32")),(0,r.kt)("td",{parentName:"tr",align:null},"A 32-bit signed integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"INT64")),(0,r.kt)("td",{parentName:"tr",align:null},"A 64-bit signed integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FLOAT")),(0,r.kt)("td",{parentName:"tr",align:null},"A single precision (32-bit) IEEE 754 floating-point number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DOUBLE")),(0,r.kt)("td",{parentName:"tr",align:null},"A double-precision (64-bit) IEEE 754 floating-point number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BYTES")),(0,r.kt)("td",{parentName:"tr",align:null},"A sequence of 8-bit unsigned bytes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRING")),(0,r.kt)("td",{parentName:"tr",align:null},"A Unicode character sequence")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TIMESTAMP")," (",(0,r.kt)("inlineCode",{parentName:"td"},"DATE"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"TIME"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"A logic type represents a specific instant in time with millisecond precision. ",(0,r.kt)("br",null),"It stores the number of milliseconds since ",(0,r.kt)("inlineCode",{parentName:"td"},"January 1, 1970, 00:00:00 GMT")," as an ",(0,r.kt)("inlineCode",{parentName:"td"},"INT64")," value")))),(0,r.kt)("p",null,"For primitive types, Pulsar does not store any schema data in ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaInfo"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaInfo")," is used to determine how to serialize and deserialize the data. "),(0,r.kt)("p",null,"Some of the primitive schema implementations can use ",(0,r.kt)("inlineCode",{parentName:"p"},"properties")," to store implementation-specific tunable settings. For example, a ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," schema can use ",(0,r.kt)("inlineCode",{parentName:"p"},"properties")," to store the encoding charset to serialize and deserialize strings."),(0,r.kt)("p",null,"The conversions between ",(0,r.kt)("strong",{parentName:"p"},"Pulsar schema types")," and ",(0,r.kt)("strong",{parentName:"p"},"language-specific primitive types")," are as below."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Schema Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Java Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Python Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Go Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"bool")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INT8"),(0,r.kt)("td",{parentName:"tr",align:null},"byte"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"int8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INT16"),(0,r.kt)("td",{parentName:"tr",align:null},"short"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"int16")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INT32"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"int32")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INT64"),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"int64")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"float32")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.kt)("td",{parentName:"tr",align:null},"double"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"float64")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BYTES"),(0,r.kt)("td",{parentName:"tr",align:null},"byte[], ByteBuffer, ByteBuf"),(0,r.kt)("td",{parentName:"tr",align:null},"bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"[]byte")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STRING"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP"),(0,r.kt)("td",{parentName:"tr",align:null},"java.sql.Timestamp"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TIME"),(0,r.kt)("td",{parentName:"tr",align:null},"java.sql.Time"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATE"),(0,r.kt)("td",{parentName:"tr",align:null},"java.util.Date"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,"This example demonstrates how to use a string schema."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a producer with a string schema and send messages."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nProducer<String> producer = client.newProducer(Schema.STRING).create();\nproducer.newMessage().value("Hello Pulsar!").send();\n\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a consumer with a string schema and receive messages.  "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nConsumer<String> consumer = client.newConsumer(Schema.STRING).subscribe();\nconsumer.receive();\n\n")))),(0,r.kt)("h3",{id:"complex-type"},"Complex type"),(0,r.kt)("p",null,"Currently, Pulsar supports the following complex types:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Complex Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"keyvalue")),(0,r.kt)("td",{parentName:"tr",align:null},"Represents a complex type of a key/value pair.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"struct")),(0,r.kt)("td",{parentName:"tr",align:null},"Supports ",(0,r.kt)("strong",{parentName:"td"},"AVRO"),", ",(0,r.kt)("strong",{parentName:"td"},"JSON"),", and ",(0,r.kt)("strong",{parentName:"td"},"Protobuf"),".")))),(0,r.kt)("h4",{id:"keyvalue"},"keyvalue"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Keyvalue")," schema helps applications define schemas for both key and value. "),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaInfo")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"keyvalue")," schema, Pulsar stores the ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaInfo")," of key schema and the ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaInfo")," of value schema together."),(0,r.kt)("p",null,"Pulsar provides two methods to encode a key/value pair in messages\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"INLINE"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"SEPARATED")))),(0,r.kt)("p",null,"Users can choose the encoding type when constructing the key/value schema."),(0,r.kt)("h5",{id:"inline"},"INLINE"),(0,r.kt)("p",null,"Key/value pairs will be encoded together in the message payload."),(0,r.kt)("h5",{id:"separated"},"SEPARATED"),(0,r.kt)("p",null,"Key will be encoded in the message key and the value will be encoded in the message payload. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,"This example shows how to construct a key/value schema and then use it to produce and consume messages."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Construct a key/value schema with ",(0,r.kt)("inlineCode",{parentName:"p"},"INLINE")," encoding type."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nSchema<KeyValue<Integer, String>> kvSchema = Schema.KeyValue(\nSchema.INT32,\nSchema.STRING,\nKeyValueEncodingType.INLINE\n);\n\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Optionally, construct a key/value schema with ",(0,r.kt)("inlineCode",{parentName:"p"},"SEPARATED")," encoding type."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nSchema<KeyValue<Integer, String>> kvSchema = Schema.KeyValue(\nSchema.INT32,\nSchema.STRING,\nKeyValueEncodingType.SEPARATED\n);\n\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Produce messages using a key/value schema."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nSchema<KeyValue<Integer, String>> kvSchema = Schema.KeyValue(\nSchema.INT32,\nSchema.STRING,\nKeyValueEncodingType.SEPARATED\n);\n\nProducer<KeyValue<Integer, String>> producer = client.newProducer(kvSchema)\n    .topic(TOPIC)\n    .create();\n\nfinal int key = 100;\nfinal String value = "value-100";\n\n// send the key/value message\nproducer.newMessage()\n.value(new KeyValue(key, value))\n.send();\n\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Consume messages using a key/value schema."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nSchema<KeyValue<Integer, String>> kvSchema = Schema.KeyValue(\nSchema.INT32,\nSchema.STRING,\nKeyValueEncodingType.SEPARATED\n);\n\nConsumer<KeyValue<Integer, String>> consumer = client.newConsumer(kvSchema)\n    ...\n    .topic(TOPIC)\n    .subscriptionName(SubscriptionName).subscribe();\n\n// receive key/value pair\nMessage<KeyValue<Integer, String>> msg = consumer.receive();\nKeyValue<Integer, String> kv = msg.getValue();\n\n")))),(0,r.kt)("h4",{id:"struct"},"struct"),(0,r.kt)("p",null,"Pulsar uses ",(0,r.kt)("a",{parentName:"p",href:"http://avro.apache.org/docs/current/spec.html"},"Avro Specification")," to declare the schema definition for ",(0,r.kt)("inlineCode",{parentName:"p"},"struct")," schema. "),(0,r.kt)("p",null,"This allows Pulsar:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"to use same tools to manage schema definitions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"to use different serialization/deserialization methods to handle data"))),(0,r.kt)("p",null,"There are two methods to use ",(0,r.kt)("inlineCode",{parentName:"p"},"struct")," schema\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"static"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"generic")))),(0,r.kt)("h5",{id:"static"},"static"),(0,r.kt)("p",null,"You can predefine the ",(0,r.kt)("inlineCode",{parentName:"p"},"struct")," schema, and it can be a POJO in Java, a ",(0,r.kt)("inlineCode",{parentName:"p"},"struct")," in Go, or classes generated by Avro or Protobuf tools. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")," "),(0,r.kt)("p",null,"Pulsar gets the schema definition from the predefined ",(0,r.kt)("inlineCode",{parentName:"p"},"struct")," using an Avro library. The schema definition is the schema data stored as a part of the ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaInfo"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create the ",(0,r.kt)("em",{parentName:"p"},"User")," class to define the messages sent to Pulsar topics."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\npublic class User {\n    String name;\n    int age;\n}\n\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a producer with a ",(0,r.kt)("inlineCode",{parentName:"p"},"struct")," schema and send messages."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nProducer<User> producer = client.newProducer(Schema.AVRO(User.class)).create();\nproducer.newMessage().value(User.builder().userName("pulsar-user").userId(1L).build()).send();\n\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a consumer with a ",(0,r.kt)("inlineCode",{parentName:"p"},"struct")," schema and receive messages"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nConsumer<User> consumer = client.newConsumer(Schema.AVRO(User.class)).subscribe();\nUser user = consumer.receive();\n\n")))),(0,r.kt)("h5",{id:"generic"},"generic"),(0,r.kt)("p",null,"Sometimes applications do not have pre-defined structs, and you can use this method to define schema and access data."),(0,r.kt)("p",null,"You can define the ",(0,r.kt)("inlineCode",{parentName:"p"},"struct")," schema using the ",(0,r.kt)("inlineCode",{parentName:"p"},"GenericSchemaBuilder"),", generate a generic struct using ",(0,r.kt)("inlineCode",{parentName:"p"},"GenericRecordBuilder")," and consume messages into ",(0,r.kt)("inlineCode",{parentName:"p"},"GenericRecord"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")," "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"RecordSchemaBuilder")," to build a schema."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nRecordSchemaBuilder recordSchemaBuilder = SchemaBuilder.record("schemaName");\nrecordSchemaBuilder.field("intField").type(SchemaType.INT32);\nSchemaInfo schemaInfo = recordSchemaBuilder.build(SchemaType.AVRO);\n\nProducer<GenericRecord> producer = client.newProducer(Schema.generic(schemaInfo)).create();\n\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"RecordBuilder")," to build the struct records."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nproducer.newMessage().value(schema.newRecordBuilder()\n            .set("intField", 32)\n            .build()).send();\n\n')))),(0,r.kt)("h3",{id:"auto-schema"},"Auto Schema"),(0,r.kt)("p",null,"If you don't know the schema type of a Pulsar topic in advance, you can use AUTO schema to produce or consume generic records to or from brokers."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Auto Schema Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AUTO_PRODUCE")),(0,r.kt)("td",{parentName:"tr",align:null},"This is useful for transferring data ",(0,r.kt)("strong",{parentName:"td"},"from a producer to a Pulsar topic that has a schema"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AUTO_CONSUME")),(0,r.kt)("td",{parentName:"tr",align:null},"This is useful for transferring data ",(0,r.kt)("strong",{parentName:"td"},"from a Pulsar topic that has a schema to a consumer"),".")))),(0,r.kt)("h4",{id:"auto_produce"},"AUTO_PRODUCE"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AUTO_PRODUCE")," schema helps a producer validate whether the bytes sent by the producer is compatible with the schema of a topic. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,"Suppose that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You have a producer processing messages from a Kafka topic ",(0,r.kt)("em",{parentName:"p"},"K"),". ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You have a Pulsar topic ",(0,r.kt)("em",{parentName:"p"},"P"),", and you do not know its schema type.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Your application reads the messages from ",(0,r.kt)("em",{parentName:"p"},"K")," and writes the messages to ",(0,r.kt)("em",{parentName:"p"},"P"),".",(0,r.kt)("br",{parentName:"p"}),"\n",""))),(0,r.kt)("p",null,"In this case, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"AUTO_PRODUCE")," to verify whether the bytes produced by ",(0,r.kt)("em",{parentName:"p"},"K")," can be sent to ",(0,r.kt)("em",{parentName:"p"},"P")," or not."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nProduce<byte[]> pulsarProducer = client.newProducer(Schema.AUTO_PRODUCE())\n    \u2026\n    .create();\n\nbyte[] kafkaMessageBytes = \u2026 ; \n\npulsarProducer.produce(kafkaMessageBytes);\n\n")),(0,r.kt)("h4",{id:"auto_consume"},"AUTO_CONSUME"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AUTO_CONSUME")," schema helps a Pulsar topic validate whether the bytes sent by a Pulsar topic is compatible with a consumer, that is, the Pulsar topic deserializes messages into language-specific objects using the ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaInfo")," retrieved from broker-side. "),(0,r.kt)("p",null,"Currently, ",(0,r.kt)("inlineCode",{parentName:"p"},"AUTO_CONSUME")," only supports ",(0,r.kt)("strong",{parentName:"p"},"AVRO")," and ",(0,r.kt)("strong",{parentName:"p"},"JSON")," schemas. It deserializes messages into ",(0,r.kt)("inlineCode",{parentName:"p"},"GenericRecord"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,"Suppose that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You have a Pulsar topic ",(0,r.kt)("em",{parentName:"p"},"P"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You have a consumer (for example, MySQL) receiving messages from the topic ",(0,r.kt)("em",{parentName:"p"},"P"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Your application reads the messages from ",(0,r.kt)("em",{parentName:"p"},"P")," and writes the messages to MySQL.\n"))),(0,r.kt)("p",null,"In this case, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"AUTO_CONSUME")," to verify whether the bytes produced by ",(0,r.kt)("em",{parentName:"p"},"P")," can be sent to MySQL or not."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nConsumer<GenericRecord> pulsarConsumer = client.newConsumer(Schema.AUTO_CONSUME())\n    \u2026\n    .subscribe();\n\nMessage<GenericRecord> msg = consumer.receive() ; \nGenericRecord record = msg.getValue();\n\n")),(0,r.kt)("h2",{id:"schema-version"},"Schema version"),(0,r.kt)("p",null,"Each ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaInfo")," stored with a topic has a version. Schema version manages schema changes happening within a topic. "),(0,r.kt)("p",null,"Messages produced with a given ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaInfo")," is tagged with a schema version, so when a message is consumed by a Pulsar client, the Pulsar client can use the schema version to retrieve the corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaInfo")," and then use the ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaInfo")," to deserialize data."),(0,r.kt)("p",null,"Schemas are versioned in succession. Schema storage happens in a broker that handles the associated topics so that version assignments can be made. "),(0,r.kt)("p",null,"Once a version is assigned/fetched to/for a schema, all subsequent messages produced by that producer are tagged with the appropriate version."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,"The following example illustrates how the schema version works."),(0,r.kt)("p",null,"Suppose that a Pulsar ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.5.2/client-libraries-java"},"Java client")," created using the code below attempts to connect to Pulsar and begins to send messages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nPulsarClient client = PulsarClient.builder()\n        .serviceUrl("pulsar://localhost:6650")\n        .build();\n\nProducer<SensorReading> producer = client.newProducer(JSONSchema.of(SensorReading.class))\n        .topic("sensor-data")\n        .sendTimeout(3, TimeUnit.SECONDS)\n        .create();\n\n')),(0,r.kt)("p",null,"The table below lists the possible scenarios when this connection attempt occurs and what happens in each scenario:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Scenario"),(0,r.kt)("th",{parentName:"tr",align:null},"What happens"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("li",null,"No schema exists for the topic. ")),(0,r.kt)("td",{parentName:"tr",align:null},"(1) The producer is created using the given schema. (2) Since no existing schema is compatible with the ",(0,r.kt)("inlineCode",{parentName:"td"},"SensorReading")," schema, the schema is transmitted to the broker and stored. (3) Any consumer created using the same schema or topic can consume messages from the ",(0,r.kt)("inlineCode",{parentName:"td"},"sensor-data")," topic.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("li",null,"A schema already exists. "),(0,r.kt)("li",null,"The producer connects using the same schema that is already stored. ")),(0,r.kt)("td",{parentName:"tr",align:null},"(1) The schema is transmitted to the broker. (2) The broker determines that the schema is compatible. (3) The broker attempts to store the schema in ",(0,r.kt)("a",{parentName:"td",href:"/docs/2.5.2/concepts-architecture-overview#persistent-storage"},"BookKeeper")," but then determines that it's already stored, so it is used to tag produced messages.")))),(0,r.kt)("h2",{id:"how-does-schema-work"},"How does schema work"),(0,r.kt)("p",null,"Pulsar schemas are applied and enforced at the ",(0,r.kt)("strong",{parentName:"p"},"topic")," level (schemas cannot be applied at the namespace or tenant level). "),(0,r.kt)("p",null,"Producers and consumers upload schemas to brokers, so Pulsar schemas work on the producer side and the consumer side."),(0,r.kt)("h3",{id:"producer-side"},"Producer side"),(0,r.kt)("p",null,"This diagram illustrates how does schema work on the Producer side."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Schema works at the producer side",src:a(42529).Z,width:"1278",height:"1228"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The application uses a schema instance to construct a producer instance. "),(0,r.kt)("p",{parentName:"li"},"The schema instance defines the schema for the data being produced using the producer instance. "),(0,r.kt)("p",{parentName:"li"},"Take AVRO as an example, Pulsar extracts schema definition from the POJO class and constructs the ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaInfo")," that the producer needs to pass to a broker when it connects.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The producer connects to the broker with the ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaInfo")," extracted from the passed-in schema instance.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The broker looks up the schema in the schema storage to check if it is already a registered schema. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If yes, the broker skips the schema validation since it is a known schema, and returns the schema version to the producer.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If no, the broker verifies whether a schema can be automatically created in this namespace:"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"isAllowAutoUpdateSchema")," sets to ",(0,r.kt)("strong",{parentName:"li"},"true"),", then a schema can be created, and the broker validates the schema based on the schema compatibility check strategy defined for the topic."),(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"isAllowAutoUpdateSchema")," sets to ",(0,r.kt)("strong",{parentName:"li"},"false"),", then a schema can not be created, and the producer is rejected to connect to the broker.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tip"),":"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"isAllowAutoUpdateSchema")," can be set via ",(0,r.kt)("strong",{parentName:"p"},"Pulsar admin API")," or ",(0,r.kt)("strong",{parentName:"p"},"REST API.")," "),(0,r.kt)("p",null,"For how to set ",(0,r.kt)("inlineCode",{parentName:"p"},"isAllowAutoUpdateSchema")," via Pulsar admin API, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.5.2/schema-manage/#manage-autoupdate-strategy"},"Manage AutoUpdate Strategy"),". "),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"If the schema is allowed to be updated, then the compatible strategy check is performed.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the schema is compatible, the broker stores it and returns the schema version to the producer. "),(0,r.kt)("p",{parentName:"li"},"All the messages produced by this producer are tagged with the schema version. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the schema is incompatible, the broker rejects it."))),(0,r.kt)("h3",{id:"consumer-side"},"Consumer side"),(0,r.kt)("p",null,"This diagram illustrates how does Schema work on the consumer side. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Schema works at the consumer side",src:a(14175).Z,width:"1404",height:"1298"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The application uses a schema instance to construct a consumer instance."),(0,r.kt)("p",{parentName:"li"},"The schema instance defines the schema that the consumer uses for decoding messages received from a broker.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The consumer connects to the broker with the ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaInfo")," extracted from the passed-in schema instance.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The broker determines whether the topic has one of them (a schema/data/a local consumer and a local producer).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If a topic does not have all of them (a schema/data/a local consumer and a local producer):"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"isAllowAutoUpdateSchema")," sets to ",(0,r.kt)("strong",{parentName:"li"},"true"),", then the consumer registers a schema and it is connected to a broker."),(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"isAllowAutoUpdateSchema")," sets to ",(0,r.kt)("strong",{parentName:"li"},"false"),", then the consumer is rejected to connect to a broker."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If a topic has one of them (a schema/data/a local consumer and a local producer), then the schema compatibility check is performed."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If the schema passes the compatibility check, then the consumer is connected to the broker."),(0,r.kt)("li",{parentName:"ul"},"If the schema does not pass the compatibility check, then the consumer is rejected to connect to the broker. "))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The consumer receives messages from the broker. "),(0,r.kt)("p",{parentName:"li"},"If the schema used by the consumer supports schema versioning (for example, AVRO schema), the consumer fetches the ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaInfo")," of the version tagged in messages and uses the passed-in schema and the schema tagged in messages to decode the messages."))))}d.isMDXComponent=!0},14175:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/schema-consumer-436361129cf2d37ee3764960fb377789.png"},42529:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/schema-producer-2682d94503cecdc1dd96dd54bbca105d.png"}}]);