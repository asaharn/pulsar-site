"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[82786],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=o,f=c["".concat(i,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:o,l[1]=s;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},17461:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={id:"sql-deployment-configurations",title:"Pulsar SQL configuration and deployment",sidebar_label:"Configuration and deployment",original_id:"sql-deployment-configurations"},l=void 0,s={unversionedId:"sql-deployment-configurations",id:"version-2.7.1/sql-deployment-configurations",title:"Pulsar SQL configuration and deployment",description:"You can configure Presto Pulsar connector and deploy a cluster with the following instruction.",source:"@site/versioned_docs/version-2.7.1/sql-deployment-configurations.md",sourceDirName:".",slug:"/sql-deployment-configurations",permalink:"/docs/2.7.1/sql-deployment-configurations",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.1/sql-deployment-configurations.md",tags:[],version:"2.7.1",frontMatter:{id:"sql-deployment-configurations",title:"Pulsar SQL configuration and deployment",sidebar_label:"Configuration and deployment",original_id:"sql-deployment-configurations"},sidebar:"version-2.7.1/docsSidebar",previous:{title:"Query data",permalink:"/docs/2.7.1/sql-getting-started"},next:{title:"REST APIs",permalink:"/docs/2.7.1/sql-rest-api"}},i={},p=[{value:"Configure Presto Pulsar Connector",id:"configure-presto-pulsar-connector",level:2},{value:"Query data from existing Presto clusters",id:"query-data-from-existing-presto-clusters",level:2},{value:"Deploy a new cluster",id:"deploy-a-new-cluster",level:2},{value:"Deploy a cluster on multiple nodes",id:"deploy-a-cluster-on-multiple-nodes",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can configure Presto Pulsar connector and deploy a cluster with the following instruction."),(0,o.kt)("h2",{id:"configure-presto-pulsar-connector"},"Configure Presto Pulsar Connector"),(0,o.kt)("p",null,"You can configure Presto Pulsar Connector in the ",(0,o.kt)("inlineCode",{parentName:"p"},"${project.root}/conf/presto/catalog/pulsar.properties")," properties file. The configuration for the connector and the default values are as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"\n# name of the connector to be displayed in the catalog\nconnector.name=pulsar\n\n# the url of Pulsar broker service\npulsar.broker-service-url=http://localhost:8080\n\n# URI of Zookeeper cluster\npulsar.zookeeper-uri=localhost:2181\n\n# minimum number of entries to read at a single time\npulsar.entry-read-batch-size=100\n\n# default number of splits to use per query\npulsar.target-num-splits=4\n\n")),(0,o.kt)("p",null,"You can connect Presto to a Pulsar cluster with multiple hosts. To configure multiple hosts for brokers, add multiple URLs to ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar.broker-service-url"),". To configure multiple hosts for ZooKeeper, add multiple URIs to ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar.zookeeper-uri"),". The following is an example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\npulsar.broker-service-url=http://localhost:8080,localhost:8081,localhost:8082\npulsar.zookeeper-uri=localhost1,localhost2:2181\n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note: by default, Pulsar SQL does not get the last message in a topic"),". It is by design and controlled by settings. By default, BookKeeper LAC only advances when subsequent entries are added. If there is no subsequent entry added, the last written entry is not visible to readers until the ledger is closed. This is not a problem for Pulsar which uses managed ledger, but Pulsar SQL directly reads from BookKeeper ledger. "),(0,o.kt)("p",null,"If you want to get the last message in a topic, set the following configurations:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"For the broker configuration, set ",(0,o.kt)("inlineCode",{parentName:"li"},"bookkeeperExplicitLacIntervalInMills")," > 0 in ",(0,o.kt)("inlineCode",{parentName:"li"},"broker.conf")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"standalone.conf"),"."),(0,o.kt)("li",{parentName:"ol"},"For the Presto configuration, set ",(0,o.kt)("inlineCode",{parentName:"li"},"pulsar.bookkeeper-explicit-interval")," > 0 and ",(0,o.kt)("inlineCode",{parentName:"li"},"pulsar.bookkeeper-use-v2-protocol=false"),".")),(0,o.kt)("p",null,"However, using BookKeeper V3 protocol introduces additional GC overhead to BK as it uses Protobuf."),(0,o.kt)("h2",{id:"query-data-from-existing-presto-clusters"},"Query data from existing Presto clusters"),(0,o.kt)("p",null,"If you already have a Presto cluster, you can copy the Presto Pulsar connector plugin to your existing cluster. Download the archived plugin package with the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ wget https://archive.apache.org/dist/pulsar/pulsar-2.7.1/apache-pulsar-2.7.1-bin.tar.gz\n\n")),(0,o.kt)("h2",{id:"deploy-a-new-cluster"},"Deploy a new cluster"),(0,o.kt)("p",null,"Since Pulsar SQL is powered by ",(0,o.kt)("a",{parentName:"p",href:"https://prestosql.io"},"Presto"),", the configuration for deployment is the same for the Pulsar SQL worker. "),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For how to set up a standalone single node environment, refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.7.1/sql-getting-started"},"Query data"),". ")),(0,o.kt)("p",null,"You can use the same CLI args as the Presto launcher."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ ./bin/pulsar sql-worker --help\nUsage: launcher [options] command\n\nCommands: run, start, stop, restart, kill, status\n\nOptions:\n  -h, --help            show this help message and exit\n  -v, --verbose         Run verbosely\n  --etc-dir=DIR         Defaults to INSTALL_PATH/etc\n  --launcher-config=FILE\n                        Defaults to INSTALL_PATH/bin/launcher.properties\n  --node-config=FILE    Defaults to ETC_DIR/node.properties\n  --jvm-config=FILE     Defaults to ETC_DIR/jvm.config\n  --config=FILE         Defaults to ETC_DIR/config.properties\n  --log-levels-file=FILE\n                        Defaults to ETC_DIR/log.properties\n  --data-dir=DIR        Defaults to INSTALL_PATH\n  --pid-file=FILE       Defaults to DATA_DIR/var/run/launcher.pid\n  --launcher-log-file=FILE\n                        Defaults to DATA_DIR/var/log/launcher.log (only in\n                        daemon mode)\n  --server-log-file=FILE\n                        Defaults to DATA_DIR/var/log/server.log (only in\n                        daemon mode)\n  -D NAME=VALUE         Set a Java system property\n\n")),(0,o.kt)("p",null,"The default configuration for the cluster is located in ",(0,o.kt)("inlineCode",{parentName:"p"},"${project.root}/conf/presto"),". You can customize your deployment by modifying the default configuration."),(0,o.kt)("p",null,"You can set the worker to read from a different configuration directory, or set a different directory to write data. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ ./bin/pulsar sql-worker run --etc-dir /tmp/incubator-pulsar/conf/presto --data-dir /tmp/presto-1\n\n")),(0,o.kt)("p",null,"You can start the worker as daemon process."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ ./bin/pulsar sql-worker start\n\n")),(0,o.kt)("h3",{id:"deploy-a-cluster-on-multiple-nodes"},"Deploy a cluster on multiple nodes"),(0,o.kt)("p",null,"You can deploy a Pulsar SQL cluster or Presto cluster on multiple nodes. The following example shows how to deploy a cluster on three-node cluster. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Copy the Pulsar binary distribution to three nodes.")),(0,o.kt)("p",null,"The first node runs as Presto coordinator. The minimal configuration requirement in the ",(0,o.kt)("inlineCode",{parentName:"p"},"${project.root}/conf/presto/config.properties")," file is as follows. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"\ncoordinator=true\nnode-scheduler.include-coordinator=true\nhttp-server.http.port=8080\nquery.max-memory=50GB\nquery.max-memory-per-node=1GB\ndiscovery-server.enabled=true\ndiscovery.uri=<coordinator-url>\n\n")),(0,o.kt)("p",null,"The other two nodes serve as worker nodes, you can use the following configuration for worker nodes. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"\ncoordinator=false\nhttp-server.http.port=8080\nquery.max-memory=50GB\nquery.max-memory-per-node=1GB\ndiscovery.uri=<coordinator-url>\n\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Modify ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar.broker-service-url")," and  ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar.zookeeper-uri")," configuration in the ",(0,o.kt)("inlineCode",{parentName:"p"},"${project.root}/conf/presto/catalog/pulsar.properties")," file accordingly for the three nodes.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start the coordinator node."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\n$ ./bin/pulsar sql-worker run\n\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Start worker nodes.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\n$ ./bin/pulsar sql-worker run\n\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Start the SQL CLI and check the status of your cluster.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ ./bin/pulsar sql --server <coordinate_url>\n\n")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Check the status of your nodes.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\npresto> SELECT * FROM system.runtime.nodes;\n node_id |        http_uri         | node_version | coordinator | state  \n---------+-------------------------+--------------+-------------+--------\n 1       | http://192.168.2.1:8081 | testversion  | true        | active \n 3       | http://192.168.2.2:8081 | testversion  | false       | active \n 2       | http://192.168.2.3:8081 | testversion  | false       | active\n\n")),(0,o.kt)("p",null,"For more information about deployment in Presto, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://prestosql.io/docs/current/installation/deployment.html"},"Presto deployment"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},'The broker does not advance LAC, so when Pulsar SQL bypass broker to query data, it can only read entries up to the LAC that all the bookies learned. You can enable periodically write LAC on the broker by setting "bookkeeperExplicitLacIntervalInMills" in the broker.conf.')))}d.isMDXComponent=!0}}]);