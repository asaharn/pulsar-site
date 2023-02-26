"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[3147],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),k=a,h=p["".concat(s,".").concat(k)]||p[k]||d[k]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1646:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={id:"security-kerberos",title:"Authentication using Kerberos",sidebar_label:"Authentication using Kerberos",original_id:"security-kerberos"},o=void 0,l={unversionedId:"security-kerberos",id:"version-2.3.2/security-kerberos",title:"Authentication using Kerberos",description:"Kerberos is a network authentication protocol. It is designed to provide strong authentication for client/server applications by using secret-key cryptography.",source:"@site/versioned_docs/version-2.3.2/security-kerberos.md",sourceDirName:".",slug:"/security-kerberos",permalink:"/docs/2.3.2/security-kerberos",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.3.2/security-kerberos.md",tags:[],version:"2.3.2",frontMatter:{id:"security-kerberos",title:"Authentication using Kerberos",sidebar_label:"Authentication using Kerberos",original_id:"security-kerberos"},sidebar:"version-2.3.2/docsSidebar",previous:{title:"Authentication using Athenz",permalink:"/docs/2.3.2/security-athenz"},next:{title:"Authorization and ACLs",permalink:"/docs/2.3.2/security-authorization"}},s={},u=[{value:"Configuration for Kerberos between Client and Broker",id:"configuration-for-kerberos-between-client-and-broker",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Kerberos Principals",id:"kerberos-principals",level:4},{value:"Configure how to connect to KDC",id:"configure-how-to-connect-to-kdc",level:4},{value:"JAAS configuration file",id:"jaas-configuration-file",level:4},{value:"Kerberos configuration for Brokers",id:"kerberos-configuration-for-brokers",level:3},{value:"Kerberos configuration for clients",id:"kerberos-configuration-for-clients",level:3},{value:"Kerberos configuration for working with Pulsar Proxy",id:"kerberos-configuration-for-working-with-pulsar-proxy",level:2},{value:"Create principal for Pulsar Proxy in Kerberos",id:"create-principal-for-pulsar-proxy-in-kerberos",level:3},{value:"Add a section in JAAS configuration file for Pulsar Proxy",id:"add-a-section-in-jaas-configuration-file-for-pulsar-proxy",level:3},{value:"Proxy Client configuration",id:"proxy-client-configuration",level:3},{value:"Kerberos configuration for Pulsar Proxy service",id:"kerberos-configuration-for-pulsar-proxy-service",level:3},{value:"Broker side configuration.",id:"broker-side-configuration",level:3},{value:"Regarding authorization and role token",id:"regarding-authorization-and-role-token",level:2},{value:"Regarding authorization between BookKeeper and ZooKeeper",id:"regarding-authorization-between-bookkeeper-and-zookeeper",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://web.mit.edu/kerberos/"},"Kerberos")," is a network authentication protocol. It is designed to provide strong authentication for client/server applications by using secret-key cryptography. "),(0,a.kt)("p",null,"In Pulsar, we use Kerberos with ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Simple_Authentication_and_Security_Layer"},"SASL")," as a choice for authentication. And Pulsar uses the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Java_Authentication_and_Authorization_Service"},"Java Authentication and Authorization Service (JAAS)")," for SASL configuration. You must provide JAAS configurations for Kerberos authentication. "),(0,a.kt)("p",null,"In this document, we will introduce how to configure ",(0,a.kt)("inlineCode",{parentName:"p"},"Kerberos")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"SASL")," between Pulsar clients and brokers in detail, and then how to configure Kerberos for Pulsar proxy."),(0,a.kt)("h2",{id:"configuration-for-kerberos-between-client-and-broker"},"Configuration for Kerberos between Client and Broker"),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To begin, you need to set up(or already have) a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Key_distribution_center"},"Key Distribution Center(KDC)")," configured and running. "),(0,a.kt)("p",null,"If your organization is already using a Kerberos server (for example, by using ",(0,a.kt)("inlineCode",{parentName:"p"},"Active Directory"),"), there is no need to install a new server for Pulsar. Otherwise you will need to install one. Your Linux vendor likely has packages for ",(0,a.kt)("inlineCode",{parentName:"p"},"Kerberos")," and a short guide on how to install and configure it: (",(0,a.kt)("a",{parentName:"p",href:"https://help.ubuntu.com/community/Kerberos"},"Ubuntu"),",\n",(0,a.kt)("a",{parentName:"p",href:"https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/6/html/Managing_Smart_Cards/installing-kerberos.html"},"Redhat"),")."),(0,a.kt)("p",null,"Note that if you are using Oracle Java, you need to download JCE policy files for your Java version and copy them to the ",(0,a.kt)("inlineCode",{parentName:"p"},"$JAVA_HOME/jre/lib/security")," directory."),(0,a.kt)("h4",{id:"kerberos-principals"},"Kerberos Principals"),(0,a.kt)("p",null,"If you are using existing Kerberos system, ask your Kerberos administrator for a principal for each Brokers in your cluster and for every operating system user that will access Pulsar with Kerberos authentication(via clients and tools)."),(0,a.kt)("p",null,"If you have installed your own Kerberos system, you can create these principals with the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\n### add Principals for broker\nsudo /usr/sbin/kadmin.local -q 'addprinc -randkey broker/{hostname}@{REALM}'\nsudo /usr/sbin/kadmin.local -q \"ktadd -k /etc/security/keytabs/{broker-keytabname}.keytab broker/{hostname}@{REALM}\"\n### add Principals for client\nsudo /usr/sbin/kadmin.local -q 'addprinc -randkey client/{hostname}@{REALM}'\nsudo /usr/sbin/kadmin.local -q \"ktadd -k /etc/security/keytabs/{client-keytabname}.keytab client/{hostname}@{REALM}\"\n\n")),(0,a.kt)("p",null,"Note that it is a ",(0,a.kt)("em",{parentName:"p"},"Kerberos")," requirement that all your hosts can be resolved with their FQDNs."),(0,a.kt)("h4",{id:"configure-how-to-connect-to-kdc"},"Configure how to connect to KDC"),(0,a.kt)("p",null,"You need to specify the path to the ",(0,a.kt)("inlineCode",{parentName:"p"},"krb5.conf")," file for both client and broker side. The contents of ",(0,a.kt)("inlineCode",{parentName:"p"},"krb5.conf")," file indicate the default Realm and KDC information. See ",(0,a.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/technotes/guides/security/jgss/tutorials/KerberosReq.html"},"JDK\u2019s Kerberos Requirements")," for more details."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\n-Djava.security.krb5.conf=/etc/pulsar/krb5.conf\n\n")),(0,a.kt)("p",null,"Here is an example of the krb5.conf file:"),(0,a.kt)("p",null,"In the configuration file, ",(0,a.kt)("inlineCode",{parentName:"p"},"EXAMPLE.COM")," is the default realm; ",(0,a.kt)("inlineCode",{parentName:"p"},"kdc = localhost:62037")," is the kdc server url for realm ",(0,a.kt)("inlineCode",{parentName:"p"},"EXAMPLE.COM "),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\n[libdefaults]\n default_realm = EXAMPLE.COM\n\n[realms]\n EXAMPLE.COM  = {\n  kdc = localhost:62037\n }\n\n")),(0,a.kt)("p",null,"Usually machines configured with kerberos already have a system wide configuration and this configuration is optional."),(0,a.kt)("h4",{id:"jaas-configuration-file"},"JAAS configuration file"),(0,a.kt)("p",null,"JAAS configuration file is needed for both client and broker sides. It provides the section of information that used to connect KDC. Here is an example named ",(0,a.kt)("inlineCode",{parentName:"p"},"pulsar_jaas.conf"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\n PulsarBroker {\n   com.sun.security.auth.module.Krb5LoginModule required\n   useKeyTab=true\n   storeKey=true\n   useTicketCache=false\n   keyTab="/etc/security/keytabs/pulsarbroker.keytab"\n   principal="broker/localhost@EXAMPLE.COM";\n};\n\n PulsarClient {\n   com.sun.security.auth.module.Krb5LoginModule required\n   useKeyTab=true\n   storeKey=true\n   useTicketCache=false\n   keyTab="/etc/security/keytabs/pulsarclient.keytab"\n   principal="client/localhost@EXAMPLE.COM";\n};\n\n')),(0,a.kt)("p",null,"You need to set the ",(0,a.kt)("inlineCode",{parentName:"p"},"JAAS")," configuration file path as JVM parameter for client and broker. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\n    -Djava.security.auth.login.config=/etc/pulsar/pulsar_jaas.conf\n\n")),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"pulsar_jaas.conf")," file above "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"PulsarBroker")," is a section name in the JAAS file used by each broker. This section tells the broker which principal to use inside Kerberos\nand the location of the keytab where the principal is stored. It allows the broker to use the keytab specified in this section."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"PulsarClient")," is a section name in the JASS file used by each client. This section tells the client which principal to use inside Kerberos\nand the location of the keytab where the principal is stored. It allows the client to use the keytab specified in this section.")),(0,a.kt)("p",null,"It is also a choice to have 2 separate JAAS configuration files: the file for broker will only have ",(0,a.kt)("inlineCode",{parentName:"p"},"PulsarBroker")," section; while the one for client only have ",(0,a.kt)("inlineCode",{parentName:"p"},"PulsarClient")," section."),(0,a.kt)("h3",{id:"kerberos-configuration-for-brokers"},"Kerberos configuration for Brokers"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("inlineCode",{parentName:"li"},"broker.conf")," file, set Kerberos related configuration.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Set ",(0,a.kt)("inlineCode",{parentName:"p"},"authenticationEnabled")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),";")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Set ",(0,a.kt)("inlineCode",{parentName:"p"},"authenticationProviders")," to choose ",(0,a.kt)("inlineCode",{parentName:"p"},"AuthenticationProviderSasl"),";")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Set ",(0,a.kt)("inlineCode",{parentName:"p"},"saslJaasClientAllowedIds")," regex for principal that is allowed to connect to broker. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Set ",(0,a.kt)("inlineCode",{parentName:"p"},"saslJaasBrokerSectionName")," that corresponding to the section in JAAS configuration file for broker."),(0,a.kt)("p",{parentName:"li"},"Here is an example:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\nauthenticationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderSasl\nsaslJaasClientAllowedIds=.*client.*\nsaslJaasBrokerSectionName=PulsarBroker\n\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Set JVM parameter for JAAS configuration file and krb5 configuration file with additional option.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\n   -Djava.security.auth.login.config=/etc/pulsar/pulsar_jaas.conf -Djava.security.krb5.conf=/etc/pulsar/krb5.conf\n\n")),(0,a.kt)("p",null,"You can add this at the end of ",(0,a.kt)("inlineCode",{parentName:"p"},"PULSAR_EXTRA_OPTS")," in the file ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/conf/pulsar_env.sh"},(0,a.kt)("inlineCode",{parentName:"a"},"pulsar_env.sh"))),(0,a.kt)("p",null,"Make sure that the keytabs configured in the ",(0,a.kt)("inlineCode",{parentName:"p"},"pulsar_jaas.conf")," file and kdc server in the ",(0,a.kt)("inlineCode",{parentName:"p"},"krb5.conf")," file are reachable by the operating system user who is starting broker."),(0,a.kt)("h3",{id:"kerberos-configuration-for-clients"},"Kerberos configuration for clients"),(0,a.kt)("p",null,"In client, we need to configure the authentication type to use ",(0,a.kt)("inlineCode",{parentName:"p"},"AuthenticationSasl"),", and also provide the authentication parameters to it. "),(0,a.kt)("p",null,"There are 2 parameters needed: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"saslJaasClientSectionName")," is corresponding to the section in JAAS configuration file for client; "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"serverType")," stands for whether this client is connect to broker or proxy, and client use this parameter to know which server side principal should be used. ")),(0,a.kt)("p",null,"When authenticate between client and broker with the setting in above JAAS configuration file, we need to set ",(0,a.kt)("inlineCode",{parentName:"p"},"saslJaasClientSectionName")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"PulsarClient")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"serverType")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"broker"),"."),(0,a.kt)("p",null,"The following is an example of creating a Java client:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'\nSystem.setProperty("java.security.auth.login.config", "/etc/pulsar/pulsar_jaas.conf");\nSystem.setProperty("java.security.krb5.conf", "/etc/pulsar/krb5.conf");\n\nMap<String, String> clientSaslConfig = Maps.newHashMap();\nclientSaslConfig.put("saslJaasClientSectionName", "PulsarClient");\nclientSaslConfig.put("serverType", "broker");\n\nAuthentication saslAuth = AuthenticationFactory\n        .create(org.apache.pulsar.client.impl.auth.AuthenticationSasl.class.getName(), authParams);\n\nPulsarClient client = PulsarClient.builder()\n        .serviceUrl("pulsar://my-broker.com:6650")\n        .authentication(saslAuth)\n        .build();\n\n')),(0,a.kt)("p",null,"Make sure that the keytabs configured in the ",(0,a.kt)("inlineCode",{parentName:"p"},"pulsar_jaas.conf")," file and kdc server in the ",(0,a.kt)("inlineCode",{parentName:"p"},"krb5.conf")," file are reachable by the operating system user who is starting pulsar client."),(0,a.kt)("h2",{id:"kerberos-configuration-for-working-with-pulsar-proxy"},"Kerberos configuration for working with Pulsar Proxy"),(0,a.kt)("p",null,"With the above configuration, client and broker can do authentication using Kerberos.  "),(0,a.kt)("p",null,"If a client wants to connect to Pulsar Proxy, it is a little different. Client (as a SASL client in Kerberos) will be authenticated by Pulsar Proxy (as a SASL Server in Kerberos) first; and then Pulsar Proxy will be authenticated by Pulsar broker. "),(0,a.kt)("p",null,"Now comparing with the above configuration between client and broker, we will show how to configure Pulsar Proxy. "),(0,a.kt)("h3",{id:"create-principal-for-pulsar-proxy-in-kerberos"},"Create principal for Pulsar Proxy in Kerberos"),(0,a.kt)("p",null,"Comparing with the above configuration, you need to add new principal for Pulsar Proxy. If you already have principals for client and broker, only add proxy principal here."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\n### add Principals for Pulsar Proxy\nsudo /usr/sbin/kadmin.local -q 'addprinc -randkey proxy/{hostname}@{REALM}'\nsudo /usr/sbin/kadmin.local -q \"ktadd -k /etc/security/keytabs/{proxy-keytabname}.keytab proxy/{hostname}@{REALM}\"\n### add Principals for broker\nsudo /usr/sbin/kadmin.local -q 'addprinc -randkey broker/{hostname}@{REALM}'\nsudo /usr/sbin/kadmin.local -q \"ktadd -k /etc/security/keytabs/{broker-keytabname}.keytab broker/{hostname}@{REALM}\"\n### add Principals for client\nsudo /usr/sbin/kadmin.local -q 'addprinc -randkey client/{hostname}@{REALM}'\nsudo /usr/sbin/kadmin.local -q \"ktadd -k /etc/security/keytabs/{client-keytabname}.keytab client/{hostname}@{REALM}\"\n\n")),(0,a.kt)("h3",{id:"add-a-section-in-jaas-configuration-file-for-pulsar-proxy"},"Add a section in JAAS configuration file for Pulsar Proxy"),(0,a.kt)("p",null,"Comparing with the above configuration, add a new section for Pulsar Proxy in JAAS configuration file."),(0,a.kt)("p",null,"Here is an example named ",(0,a.kt)("inlineCode",{parentName:"p"},"pulsar_jaas.conf"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\n PulsarBroker {\n   com.sun.security.auth.module.Krb5LoginModule required\n   useKeyTab=true\n   storeKey=true\n   useTicketCache=false\n   keyTab="/etc/security/keytabs/pulsarbroker.keytab"\n   principal="broker/localhost@EXAMPLE.COM";\n};\n\n PulsarProxy {\n   com.sun.security.auth.module.Krb5LoginModule required\n   useKeyTab=true\n   storeKey=true\n   useTicketCache=false\n   keyTab="/etc/security/keytabs/pulsarproxy.keytab"\n   principal="proxy/localhost@EXAMPLE.COM";\n};\n\n PulsarClient {\n   com.sun.security.auth.module.Krb5LoginModule required\n   useKeyTab=true\n   storeKey=true\n   useTicketCache=false\n   keyTab="/etc/security/keytabs/pulsarclient.keytab"\n   principal="client/localhost@EXAMPLE.COM";\n};\n\n')),(0,a.kt)("h3",{id:"proxy-client-configuration"},"Proxy Client configuration"),(0,a.kt)("p",null,"Pulsar client configuration is similar with client and broker configuration, except that ",(0,a.kt)("inlineCode",{parentName:"p"},"serverType")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"broker"),", because it needs to do Kerberos authentication between client and proxy."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'\nSystem.setProperty("java.security.auth.login.config", "/etc/pulsar/pulsar_jaas.conf");\nSystem.setProperty("java.security.krb5.conf", "/etc/pulsar/krb5.conf");\n\nMap<String, String> clientSaslConfig = Maps.newHashMap();\nclientSaslConfig.put("saslJaasClientSectionName", "PulsarClient");\nclientSaslConfig.put("serverType", "proxy");        // ** here is the different **\n\nAuthentication saslAuth = AuthenticationFactory\n        .create(org.apache.pulsar.client.impl.auth.AuthenticationSasl.class.getName(), authParams);\n\nPulsarClient client = PulsarClient.builder()\n        .serviceUrl("pulsar://my-broker.com:6650")\n        .authentication(saslAuth)\n        .build();\n\n')),(0,a.kt)("h3",{id:"kerberos-configuration-for-pulsar-proxy-service"},"Kerberos configuration for Pulsar Proxy service"),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy.conf")," file, set Kerberos related configuration. Here is an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\n## related to authenticate client.\nauthenticationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderSasl\nsaslJaasClientAllowedIds=.*client.*\nsaslJaasBrokerSectionName=PulsarProxy\n\n## related to be authenticated by broker\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationSasl\nbrokerClientAuthenticationParameters=saslJaasClientSectionName:PulsarProxy,serverType:broker\nforwardAuthorizationCredentials=true\n\n")),(0,a.kt)("p",null,"The first part is related to authenticate between client and Pulsar Proxy. In this phase, client works as SASL client, while Pulsar Proxy works as SASL server. "),(0,a.kt)("p",null,"The second part is related to authenticate between Pulsar Proxy and Pulsar Broker. In this phase, Pulsar Proxy works as SASL client, while Pulsar Broker works as SASL server."),(0,a.kt)("h3",{id:"broker-side-configuration"},"Broker side configuration."),(0,a.kt)("p",null,"The broker side configuration file is the same with the above ",(0,a.kt)("inlineCode",{parentName:"p"},"broker.conf"),", you do not need special configuration for Pulsar Proxy."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\nauthenticationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderSasl\nsaslJaasClientAllowedIds=.*client.*\nsaslJaasBrokerSectionName=PulsarBroker\n\n")),(0,a.kt)("h2",{id:"regarding-authorization-and-role-token"},"Regarding authorization and role token"),(0,a.kt)("p",null,"For Kerberos authentication, the authenticated principal is used as the role token for Pulsar authorization.  For more information of authorization in Pulsar, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.3.2/security-authorization"},"security authorization"),"."),(0,a.kt)("h2",{id:"regarding-authorization-between-bookkeeper-and-zookeeper"},"Regarding authorization between BookKeeper and ZooKeeper"),(0,a.kt)("p",null,"Adding ",(0,a.kt)("inlineCode",{parentName:"p"},"bookkeeperClientAuthenticationPlugin")," parameter in ",(0,a.kt)("inlineCode",{parentName:"p"},"broker.conf")," is a prerequisite for Broker (as a Kerberos client) being authenticated by Bookie (as a Kerberos Server):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\nbookkeeperClientAuthenticationPlugin=org.apache.bookkeeper.sasl.SASLClientProviderFactory\n\n")),(0,a.kt)("p",null,"For more details of how to configure Kerberos for BookKeeper and Zookeeper, refer to ",(0,a.kt)("a",{parentName:"p",href:"http://bookkeeper.apache.org/docs/latest/security/sasl/"},"BookKeeper document"),"."))}d.isMDXComponent=!0}}]);