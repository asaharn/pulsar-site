"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[5342],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,b=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return a?n.createElement(b,s(s({ref:t},u),{},{components:a})):n.createElement(b,s({ref:t},u))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},88015:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={id:"io-debezium-source",title:"Debezium source onnector",sidebar_label:"Debezium source connector",original_id:"io-debezium-source"},s=void 0,l={unversionedId:"io-debezium-source",id:"version-2.5.0/io-debezium-source",title:"Debezium source onnector",description:"The Debezium source connector pulls messages from MySQL or PostgreSQL to Pulsar topics.",source:"@site/versioned_docs/version-2.5.0/io-debezium-source.md",sourceDirName:".",slug:"/io-debezium-source",permalink:"/docs/2.5.0/io-debezium-source",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.5.0/io-debezium-source.md",tags:[],version:"2.5.0",frontMatter:{id:"io-debezium-source",title:"Debezium source onnector",sidebar_label:"Debezium source connector",original_id:"io-debezium-source"}},i={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Example of MySQL",id:"example-of-mysql",level:2},{value:"Configuration",id:"configuration-1",level:3},{value:"Usage",id:"usage",level:3},{value:"Example of PostgreSQL",id:"example-of-postgresql",level:2},{value:"Configuration",id:"configuration-2",level:3},{value:"Usage",id:"usage-1",level:3},{value:"FAQ",id:"faq",level:2},{value:"Debezium postgres connector will hang when create snap",id:"debezium-postgres-connector-will-hang-when-create-snap",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Debezium source connector pulls messages from MySQL or PostgreSQL to Pulsar topics."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"The configuration of the Debezium source connector has the following properties."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"task.class")),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"A source task class that implemented in Debezium.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"database.hostname")),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"The address of a database server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"database.port")),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"The port number of a database server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"database.user")),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of a database user that has the required privileges.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"database.password")),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"The password for a database user that has the required privileges.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"database.server.id")),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"The connector\u2019s identifier that must be unique within a database cluster and similar to the database\u2019s server-id configuration property.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"database.server.name")),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"The logical name of a database server/cluster, which forms a namespace and it is used in all the names of Kafka topics to which the connector writes, the Kafka Connect schema names, and the namespaces of the corresponding Avro schema when the Avro Connector is used.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"database.whitelist")),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"A list of all databases hosted by this server which is monitored by the  connector.",(0,r.kt)("br",null),(0,r.kt)("br",null)," This is optional, and there are other properties for listing databases and tables to include or exclude from monitoring.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"key.converter")),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"The converter provided by Kafka Connect to convert record key.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value.converter")),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"The converter provided by Kafka Connect to convert record value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"database.history")),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the database history class.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"database.history.pulsar.topic")),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the database history topic where the connector writes and recovers DDL statements. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Note: this topic is for internal use only and should not be used by consumers."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"database.history.pulsar.service.url")),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Pulsar cluster service URL for history topic.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pulsar.service.url")),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Pulsar cluster service URL.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"offset.storage.topic")),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Record the last committed offsets that the connector successfully completes.")))),(0,r.kt)("h2",{id:"example-of-mysql"},"Example of MySQL"),(0,r.kt)("p",null,"You need to create a configuration file before using the Pulsar Debezium connector."),(0,r.kt)("h3",{id:"configuration-1"},"Configuration"),(0,r.kt)("p",null,"You can use one of the following methods to create a configuration file."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"JSON "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n    "database.hostname": "localhost",\n    "database.port": "3306",\n    "database.user": "debezium",\n    "database.password": "dbz",\n    "database.server.id": "184054",\n    "database.server.name": "dbserver1",\n    "database.whitelist": "inventory",\n    "database.history": "org.apache.pulsar.io.debezium.PulsarDatabaseHistory",\n    "database.history.pulsar.topic": "history-topic",\n    "database.history.pulsar.service.url": "pulsar://127.0.0.1:6650",\n    "key.converter": "org.apache.kafka.connect.json.JsonConverter",\n    "value.converter": "org.apache.kafka.connect.json.JsonConverter",\n    "pulsar.service.url": "pulsar://127.0.0.1:6650",\n    "offset.storage.topic": "offset-topic"\n}\n\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"YAML "),(0,r.kt)("p",{parentName:"li"},"You can create a ",(0,r.kt)("inlineCode",{parentName:"p"},"debezium-mysql-source-config.yaml")," file and copy the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/debezium/mysql/src/main/resources/debezium-mysql-source-config.yaml"},"contents")," below to the ",(0,r.kt)("inlineCode",{parentName:"p"},"debezium-mysql-source-config.yaml")," file."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'\ntenant: "public"\nnamespace: "default"\nname: "debezium-mysql-source"\ntopicName: "debezium-mysql-topic"\narchive: "connectors/pulsar-io-debezium-mysql-2.5.0.nar"\nparallelism: 1\n\nconfigs:\n\n    ## config for mysql, docker image: debezium/example-mysql:0.8\n    database.hostname: "localhost"\n    database.port: "3306"\n    database.user: "debezium"\n    database.password: "dbz"\n    database.server.id: "184054"\n    database.server.name: "dbserver1"\n    database.whitelist: "inventory"\n    database.history: "org.apache.pulsar.io.debezium.PulsarDatabaseHistory"\n    database.history.pulsar.topic: "history-topic"\n    database.history.pulsar.service.url: "pulsar://127.0.0.1:6650"\n\n    ## KEY_CONVERTER_CLASS_CONFIG, VALUE_CONVERTER_CLASS_CONFIG\n    key.converter: "org.apache.kafka.connect.json.JsonConverter"\n    value.converter: "org.apache.kafka.connect.json.JsonConverter"\n\n    ## PULSAR_SERVICE_URL_CONFIG\n    pulsar.service.url: "pulsar://127.0.0.1:6650"\n\n    ## OFFSET_STORAGE_TOPIC_CONFIG\n    offset.storage.topic: "offset-topic"\n\n')))),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("p",null,"This example shows how to change the data of a MySQL table using the Pulsar Debezium connector."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start a MySQL server with a database from which Debezium can capture changes."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ docker run -it --rm \\\n--name mysql \\\n-p 3306:3306 \\\n-e MYSQL_ROOT_PASSWORD=debezium \\\n-e MYSQL_USER=mysqluser \\\n-e MYSQL_PASSWORD=mysqlpw debezium/example-mysql:0.8\n\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start a Pulsar service locally in standalone mode."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar standalone\n\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start the Pulsar Debezium connector in local run mode using one of the following methods."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use the ",(0,r.kt)("strong",{parentName:"p"},"JSON")," configuration file as shown previously. "),(0,r.kt)("p",{parentName:"li"}," Make sure the nar file is available at ",(0,r.kt)("inlineCode",{parentName:"p"},"connectors/pulsar-io-debezium-mysql-2.5.0.nar"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\n$ bin/pulsar-admin source localrun \\\n--archive connectors/pulsar-io-debezium-mysql-2.5.0.nar \\\n--name debezium-mysql-source --destination-topic-name debezium-mysql-topic \\\n--tenant public \\\n--namespace default \\\n--source-config \'{"database.hostname": "localhost","database.port": "3306","database.user": "debezium","database.password": "dbz","database.server.id": "184054","database.server.name": "dbserver1","database.whitelist": "inventory","database.history": "org.apache.pulsar.io.debezium.PulsarDatabaseHistory","database.history.pulsar.topic": "history-topic","database.history.pulsar.service.url": "pulsar://127.0.0.1:6650","key.converter": "org.apache.kafka.connect.json.JsonConverter","value.converter": "org.apache.kafka.connect.json.JsonConverter","pulsar.service.url": "pulsar://127.0.0.1:6650","offset.storage.topic": "offset-topic"}\'\n\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use the ",(0,r.kt)("strong",{parentName:"p"},"YAML")," configuration file as shown previously."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin source localrun \\\n--source-config-file debezium-mysql-source-config.yaml\n\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Subscribe the topic ",(0,r.kt)("em",{parentName:"p"},"sub-products")," for the table ",(0,r.kt)("em",{parentName:"p"},"inventory.products"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\n$ bin/pulsar-client consume -s "sub-products" public/default/dbserver1.inventory.products -n 0\n\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start a MySQL client in docker."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\n$ docker run -it --rm \\\n--name mysqlterm \\\n--link mysql \\\n--rm mysql:5.7 sh \\\n-c \'exec mysql -h"$MYSQL_PORT_3306_TCP_ADDR" -P"$MYSQL_PORT_3306_TCP_PORT" -uroot -p"$MYSQL_ENV_MYSQL_ROOT_PASSWORD"\'\n\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A MySQL client pops out. "),(0,r.kt)("p",{parentName:"li"},"Use the following commands to change the data of the table ",(0,r.kt)("em",{parentName:"p"},"products"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"\nmysql> use inventory;\nmysql> show tables;\nmysql> SELECT * FROM  products;\nmysql> UPDATE products SET name='1111111111' WHERE id=101;\nmysql> UPDATE products SET name='1111111111' WHERE id=107;\n\n")),(0,r.kt)("p",{parentName:"li"},"In the terminal window of subscribing topic, you can find the data changes have been kept in the ",(0,r.kt)("em",{parentName:"p"},"sub-products")," topic."))),(0,r.kt)("h2",{id:"example-of-postgresql"},"Example of PostgreSQL"),(0,r.kt)("p",null,"You need to create a configuration file before using the Pulsar Debezium connector."),(0,r.kt)("h3",{id:"configuration-2"},"Configuration"),(0,r.kt)("p",null,"You can use one of the following methods to create a configuration file."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"JSON "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n    "database.hostname": "localhost",\n    "database.port": "5432",\n    "database.user": "postgres",\n    "database.password": "postgres",\n    "database.dbname": "postgres",\n    "database.server.name": "dbserver1",\n    "schema.whitelist": "inventory",\n    "pulsar.service.url": "pulsar://127.0.0.1:6650"\n}\n\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"YAML "),(0,r.kt)("p",{parentName:"li"},"You can create a ",(0,r.kt)("inlineCode",{parentName:"p"},"debezium-postgres-source-config.yaml")," file and copy the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/debezium/postgres/src/main/resources/debezium-postgres-source-config.yaml"},"contents")," below to the ",(0,r.kt)("inlineCode",{parentName:"p"},"debezium-postgres-source-config.yaml")," file."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'\ntenant: "public"\nnamespace: "default"\nname: "debezium-postgres-source"\ntopicName: "debezium-postgres-topic"\narchive: "connectors/pulsar-io-debezium-postgres-2.5.0.nar"\nparallelism: 1\n\nconfigs:\n\n    ## config for pg, docker image: debezium/example-postgress:0.8\n    database.hostname: "localhost"\n    database.port: "5432"\n    database.user: "postgres"\n    database.password: "postgres"\n    database.dbname: "postgres"\n    database.server.name: "dbserver1"\n    schema.whitelist: "inventory"\n\n    ## PULSAR_SERVICE_URL_CONFIG\n    pulsar.service.url: "pulsar://127.0.0.1:6650"\n\n')))),(0,r.kt)("h3",{id:"usage-1"},"Usage"),(0,r.kt)("p",null,"This example shows how to change the data of a PostgreSQL table using the Pulsar Debezium connector."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start a PostgreSQL server with a database from which Debezium can capture changes."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ docker pull debezium/example-postgres:0.8\n$ docker run -d -it --rm --name pulsar-postgresql -p 5432:5432  debezium/example-postgres:0.8\n\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start a Pulsar service locally in standalone mode."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar standalone\n\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start the Pulsar Debezium connector in local run mode using one of the following methods."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use the ",(0,r.kt)("strong",{parentName:"p"},"JSON")," configuration file as shown previously. "),(0,r.kt)("p",{parentName:"li"},"Make sure the nar file is available at ",(0,r.kt)("inlineCode",{parentName:"p"},"connectors/pulsar-io-debezium-postgres-2.5.0.nar"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\n$ bin/pulsar-admin source localrun \\\n--archive connectors/pulsar-io-debezium-postgres-2.5.0.nar \\\n--name debezium-postgres-source \\\n--destination-topic-name debezium-postgres-topic \\\n--tenant public \\\n--namespace default \\\n--source-config \'{"database.hostname": "localhost","database.port": "5432","database.user": "postgres","database.password": "postgres","database.dbname": "postgres","database.server.name": "dbserver1","schema.whitelist": "inventory","pulsar.service.url": "pulsar://127.0.0.1:6650"}\'\n\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use the ",(0,r.kt)("strong",{parentName:"p"},"YAML")," configuration file as shown previously."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin source localrun  \\\n--source-config-file debezium-postgres-source-config.yaml\n\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Subscribe the topic ",(0,r.kt)("em",{parentName:"p"},"sub-products")," for the ",(0,r.kt)("em",{parentName:"p"},"inventory.products")," table."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'\n$ bin/pulsar-client consume -s "sub-products" public/default/dbserver1.inventory.products -n 0\n\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start a PostgreSQL client in docker."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ docker exec -it pulsar-postgresql /bin/bash\n\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A MySQL client pops out. "),(0,r.kt)("p",{parentName:"li"},"Use the following commands to change the data of the table ",(0,r.kt)("em",{parentName:"p"},"products"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"\npsql -U postgres postgres\npostgres=# \\c postgres;\nYou are now connected to database \"postgres\" as user \"postgres\".\npostgres=# SET search_path TO inventory;\nSET\npostgres=# select * from products;\n id  |        name        |                       description                       | weight\n-----+--------------------+---------------------------------------------------------+--------\n 102 | car battery        | 12V car battery                                         |    8.1\n 103 | 12-pack drill bits | 12-pack of drill bits with sizes ranging from #40 to #3 |    0.8\n 104 | hammer             | 12oz carpenter's hammer                                 |   0.75\n 105 | hammer             | 14oz carpenter's hammer                                 |  0.875\n 106 | hammer             | 16oz carpenter's hammer                                 |      1\n 107 | rocks              | box of assorted rocks                                   |    5.3\n 108 | jacket             | water resistent black wind breaker                      |    0.1\n 109 | spare tire         | 24 inch spare tire                                      |   22.2\n 101 | 1111111111         | Small 2-wheel scooter                                   |   3.14\n(9 rows)\n\npostgres=# UPDATE products SET name='1111111111' WHERE id=107;\nUPDATE 1\n\n")),(0,r.kt)("p",{parentName:"li"},"In the terminal window of subscribing topic, you can receive the following messages."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\n----- got message -----\n{"schema":{"type":"struct","fields":[{"type":"int32","optional":false,"field":"id"}],"optional":false,"name":"dbserver1.inventory.products.Key"},"payload":{"id":107}}\ufffd{"schema":{"type":"struct","fields":[{"type":"struct","fields":[{"type":"int32","optional":false,"field":"id"},{"type":"string","optional":false,"field":"name"},{"type":"string","optional":true,"field":"description"},{"type":"double","optional":true,"field":"weight"}],"optional":true,"name":"dbserver1.inventory.products.Value","field":"before"},{"type":"struct","fields":[{"type":"int32","optional":false,"field":"id"},{"type":"string","optional":false,"field":"name"},{"type":"string","optional":true,"field":"description"},{"type":"double","optional":true,"field":"weight"}],"optional":true,"name":"dbserver1.inventory.products.Value","field":"after"},{"type":"struct","fields":[{"type":"string","optional":true,"field":"version"},{"type":"string","optional":true,"field":"connector"},{"type":"string","optional":false,"field":"name"},{"type":"string","optional":false,"field":"db"},{"type":"int64","optional":true,"field":"ts_usec"},{"type":"int64","optional":true,"field":"txId"},{"type":"int64","optional":true,"field":"lsn"},{"type":"string","optional":true,"field":"schema"},{"type":"string","optional":true,"field":"table"},{"type":"boolean","optional":true,"default":false,"field":"snapshot"},{"type":"boolean","optional":true,"field":"last_snapshot_record"}],"optional":false,"name":"io.debezium.connector.postgresql.Source","field":"source"},{"type":"string","optional":false,"field":"op"},{"type":"int64","optional":true,"field":"ts_ms"}],"optional":false,"name":"dbserver1.inventory.products.Envelope"},"payload":{"before":{"id":107,"name":"rocks","description":"box of assorted rocks","weight":5.3},"after":{"id":107,"name":"1111111111","description":"box of assorted rocks","weight":5.3},"source":{"version":"0.9.2.Final","connector":"postgresql","name":"dbserver1","db":"postgres","ts_usec":1559208957661080,"txId":577,"lsn":23862872,"schema":"inventory","table":"products","snapshot":false,"last_snapshot_record":null},"op":"u","ts_ms":1559208957692}}\n\n')))),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("h3",{id:"debezium-postgres-connector-will-hang-when-create-snap"},"Debezium postgres connector will hang when create snap"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-$xslt"},"\n#18 prio=5 os_prio=31 tid=0x00007fd83096f800 nid=0xa403 waiting on condition [0x000070000f534000]\n    java.lang.Thread.State: WAITING (parking)\n     at sun.misc.Unsafe.park(Native Method)\n     - parking to wait for  <0x00000007ab025a58> (a java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject)\n     at java.util.concurrent.locks.LockSupport.park(LockSupport.java:175)\n     at java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject.await(AbstractQueuedSynchronizer.java:2039)\n     at java.util.concurrent.LinkedBlockingDeque.putLast(LinkedBlockingDeque.java:396)\n     at java.util.concurrent.LinkedBlockingDeque.put(LinkedBlockingDeque.java:649)\n     at io.debezium.connector.base.ChangeEventQueue.enqueue(ChangeEventQueue.java:132)\n     at io.debezium.connector.postgresql.PostgresConnectorTask$Lambda$203/385424085.accept(Unknown Source)\n     at io.debezium.connector.postgresql.RecordsSnapshotProducer.sendCurrentRecord(RecordsSnapshotProducer.java:402)\n     at io.debezium.connector.postgresql.RecordsSnapshotProducer.readTable(RecordsSnapshotProducer.java:321)\n     at io.debezium.connector.postgresql.RecordsSnapshotProducer.lambda$takeSnapshot$6(RecordsSnapshotProducer.java:226)\n     at io.debezium.connector.postgresql.RecordsSnapshotProducer$Lambda$240/1347039967.accept(Unknown Source)\n     at io.debezium.jdbc.JdbcConnection.queryWithBlockingConsumer(JdbcConnection.java:535)\n     at io.debezium.connector.postgresql.RecordsSnapshotProducer.takeSnapshot(RecordsSnapshotProducer.java:224)\n     at io.debezium.connector.postgresql.RecordsSnapshotProducer.lambda$start$0(RecordsSnapshotProducer.java:87)\n     at io.debezium.connector.postgresql.RecordsSnapshotProducer$Lambda$206/589332928.run(Unknown Source)\n     at java.util.concurrent.CompletableFuture.uniRun(CompletableFuture.java:705)\n     at java.util.concurrent.CompletableFuture.uniRunStage(CompletableFuture.java:717)\n     at java.util.concurrent.CompletableFuture.thenRun(CompletableFuture.java:2010)\n     at io.debezium.connector.postgresql.RecordsSnapshotProducer.start(RecordsSnapshotProducer.java:87)\n     at io.debezium.connector.postgresql.PostgresConnectorTask.start(PostgresConnectorTask.java:126)\n     at io.debezium.connector.common.BaseSourceTask.start(BaseSourceTask.java:47)\n     at org.apache.pulsar.io.kafka.connect.KafkaConnectSource.open(KafkaConnectSource.java:127)\n     at org.apache.pulsar.io.debezium.DebeziumSource.open(DebeziumSource.java:100)\n     at org.apache.pulsar.functions.instance.JavaInstanceRunnable.setupInput(JavaInstanceRunnable.java:690)\n     at org.apache.pulsar.functions.instance.JavaInstanceRunnable.setupJavaInstance(JavaInstanceRunnable.java:200)\n     at org.apache.pulsar.functions.instance.JavaInstanceRunnable.run(JavaInstanceRunnable.java:230)\n     at java.lang.Thread.run(Thread.java:748)\n\n")),(0,r.kt)("p",null,"If you encounter the above problems in synchronizing data, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/issues/4075"},"this")," and add the following configuration to the configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-$xslt"},"\nmax.queue.size=\n\n")))}d.isMDXComponent=!0}}]);