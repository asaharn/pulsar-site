"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[3778],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),h=a,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||o;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},58885:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={id:"administration-proxy",title:"The Pulsar proxy",sidebar_label:"Pulsar proxy",original_id:"administration-proxy"},l=void 0,i={unversionedId:"administration-proxy",id:"version-2.6.3/administration-proxy",title:"The Pulsar proxy",description:"The Pulsar proxy is an optional gateway that you can run in front of the brokers in a Pulsar cluster. You can run a Pulsar proxy in cases when direction connections between clients and Pulsar brokers are either infeasible, undesirable, or both, for example when you run Pulsar in a cloud environment or on Kubernetes or an analogous platform.",source:"@site/versioned_docs/version-2.6.3/administration-proxy.md",sourceDirName:".",slug:"/administration-proxy",permalink:"/docs/2.6.3/administration-proxy",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.3/administration-proxy.md",tags:[],version:"2.6.3",frontMatter:{id:"administration-proxy",title:"The Pulsar proxy",sidebar_label:"Pulsar proxy",original_id:"administration-proxy"},sidebar:"version-2.6.3/docsSidebar",previous:{title:"Load balance",permalink:"/docs/2.6.3/administration-load-balance"},next:{title:"Upgrade",permalink:"/docs/2.6.3/administration-upgrade"}},s={},u=[{value:"Configure the proxy",id:"configure-the-proxy",level:2},{value:"Option 1: Use service discovery",id:"option-1-use-service-discovery",level:3},{value:"Option 2: Use broker URLs",id:"option-2-use-broker-urls",level:3},{value:"Start the proxy",id:"start-the-proxy",level:2},{value:"Stop the proxy",id:"stop-the-proxy",level:2},{value:"Proxy frontends",id:"proxy-frontends",level:2},{value:"Use Pulsar clients with the proxy",id:"use-pulsar-clients-with-the-proxy",level:2},{value:"Proxy configuration",id:"proxy-configuration",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.6.3/concepts-architecture-overview#pulsar-proxy"},"Pulsar proxy")," is an optional gateway that you can run in front of the brokers in a Pulsar cluster. You can run a Pulsar proxy in cases when direction connections between clients and Pulsar brokers are either infeasible, undesirable, or both, for example when you run Pulsar in a cloud environment or on ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io"},"Kubernetes")," or an analogous platform."),(0,a.kt)("h2",{id:"configure-the-proxy"},"Configure the proxy"),(0,a.kt)("p",null,"The proxy must have some way to find the addresses of the brokers of the cluster. You can do this by either configuring the proxy to connect directly to service discovery or by specifying a broker URL in the configuration. "),(0,a.kt)("h3",{id:"option-1-use-service-discovery"},"Option 1: Use service discovery"),(0,a.kt)("p",null,"Pulsar uses ",(0,a.kt)("a",{parentName:"p",href:"https://zookeeper.apache.org"},"ZooKeeper")," for service discovery. To connect the proxy to ZooKeeper, specify the following in ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/proxy.conf"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"\nzookeeperServers=zk-0,zk-1,zk-2\nconfigurationStoreServers=zk-0:2184,zk-remote:2184\n\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you use service discovery, the network ACL must allow the proxy to talk to the ZooKeeper nodes on the zookeeper client port, which is usually 2181, and on the configuration store client port, which is 2184 by default. Opening the network ACLs means that if someone compromises a proxy, they have full access to ZooKeeper. For this reason, using broker URLs to configure the proxy is more secure.")),(0,a.kt)("h3",{id:"option-2-use-broker-urls"},"Option 2: Use broker URLs"),(0,a.kt)("p",null,"The more secure method of configuring the proxy is to specify a URL to connect to the brokers."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"security-authorization#enable-authorization-and-assign-superusers"},"Authorization")," at the proxy requires access to ZooKeeper, so if you use these broker URLs to connect to the brokers, you should disable the Proxy level authorization. Brokers still authorize requests after the proxy forwards them.")),(0,a.kt)("p",null,"You can configure the broker URLs in ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/proxy.conf")," as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"\nbrokerServiceURL=pulsar://brokers.example.com:6650\nbrokerWebServiceURL=http://brokers.example.com:8080\nfunctionWorkerWebServiceURL=http://function-workers.example.com:8080\n\n")),(0,a.kt)("p",null,"Or if you use TLS:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"\nbrokerServiceURLTLS=pulsar+ssl://brokers.example.com:6651\nbrokerWebServiceURLTLS=https://brokers.example.com:8443\nfunctionWorkerWebServiceURL=https://function-workers.example.com:8443\n\n")),(0,a.kt)("p",null,"The hostname in the URLs provided should be a DNS entry which points to multiple brokers or a Virtual IP which is backed by multiple broker IP addresses so that the proxy does not lose connectivity to the pulsar cluster if a single broker becomes unavailable."),(0,a.kt)("p",null,"The ports to connect to the brokers (6650 and 8080, or in the case of TLS, 6651 and 8443) should be open in the network ACLs."),(0,a.kt)("p",null,"Note that if you do not use functions, then you do not need to configure ",(0,a.kt)("inlineCode",{parentName:"p"},"functionWorkerWebServiceURL"),"."),(0,a.kt)("h2",{id:"start-the-proxy"},"Start the proxy"),(0,a.kt)("p",null,"To start the proxy:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ cd /path/to/pulsar/directory\n$ bin/pulsar proxy\n\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You can run as many instances of the Pulsar proxy in a cluster as you want.")),(0,a.kt)("h2",{id:"stop-the-proxy"},"Stop the proxy"),(0,a.kt)("p",null,"The Pulsar proxy runs by default in the foreground. To stop the proxy, simply stop the process in which the proxy is running."),(0,a.kt)("h2",{id:"proxy-frontends"},"Proxy frontends"),(0,a.kt)("p",null,"You can run the Pulsar proxy behind some kind of load-distributing frontend, such as an ",(0,a.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/an-introduction-to-haproxy-and-load-balancing-concepts"},"HAProxy")," load balancer."),(0,a.kt)("h2",{id:"use-pulsar-clients-with-the-proxy"},"Use Pulsar clients with the proxy"),(0,a.kt)("p",null,"Once your Pulsar proxy is up and running, preferably behind a load-distributing ",(0,a.kt)("a",{parentName:"p",href:"#proxy-frontends"},"frontend"),", clients can connect to the proxy via whichever address that the frontend uses. If the address is the DNS address ",(0,a.kt)("inlineCode",{parentName:"p"},"pulsar.cluster.default"),", for example, then the connection URL for clients is ",(0,a.kt)("inlineCode",{parentName:"p"},"pulsar://pulsar.cluster.default:6650"),"."),(0,a.kt)("h2",{id:"proxy-configuration"},"Proxy configuration"),(0,a.kt)("p",null,"You can configure the Pulsar proxy using the ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.6.3/reference-configuration#proxy"},(0,a.kt)("inlineCode",{parentName:"a"},"proxy.conf"))," configuration file. The following parameters are available in that file:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"zookeeperServers"),(0,a.kt)("td",{parentName:"tr",align:null},"The ZooKeeper quorum connection string (as a comma-separated list)"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"configurationStoreServers"),(0,a.kt)("td",{parentName:"tr",align:null},"Configuration store connection string (as a comma-separated list)"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"zookeeperSessionTimeoutMs"),(0,a.kt)("td",{parentName:"tr",align:null},"ZooKeeper session timeout (in milliseconds)"),(0,a.kt)("td",{parentName:"tr",align:null},"30000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"servicePort"),(0,a.kt)("td",{parentName:"tr",align:null},"The port to use for server binary Protobuf requests"),(0,a.kt)("td",{parentName:"tr",align:null},"6650")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"servicePortTls"),(0,a.kt)("td",{parentName:"tr",align:null},"The port to use to server binary Protobuf TLS requests"),(0,a.kt)("td",{parentName:"tr",align:null},"6651")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"statusFilePath"),(0,a.kt)("td",{parentName:"tr",align:null},"Path for the file used to determine the rotation status for the proxy instance when responding to service discovery health checks"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"advertisedAddress"),(0,a.kt)("td",{parentName:"tr",align:null},"Hostname or IP address the service advertises to the outside world."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"InetAddress.getLocalHost().getHostname()"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"authenticationEnabled"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether authentication is enabled for the Pulsar proxy"),(0,a.kt)("td",{parentName:"tr",align:null},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"authenticateMetricsEndpoint"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether the '/metrics' endpoint requires authentication. Defaults to true. 'authenticationEnabled' must also be set for this to take effect."),(0,a.kt)("td",{parentName:"tr",align:null},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"authenticationProviders"),(0,a.kt)("td",{parentName:"tr",align:null},"Authentication provider name list (a comma-separated list of class names)"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"authorizationEnabled"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether authorization is enforced by the Pulsar proxy"),(0,a.kt)("td",{parentName:"tr",align:null},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"authorizationProvider"),(0,a.kt)("td",{parentName:"tr",align:null},"Authorization provider as a fully qualified class name"),(0,a.kt)("td",{parentName:"tr",align:null},"org.apache.pulsar.broker.authorization.PulsarAuthorizationProvider")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"brokerClientAuthenticationPlugin"),(0,a.kt)("td",{parentName:"tr",align:null},"The authentication plugin used by the Pulsar proxy to authenticate with Pulsar brokers"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"brokerClientAuthenticationParameters"),(0,a.kt)("td",{parentName:"tr",align:null},"The authentication parameters used by the Pulsar proxy to authenticate with Pulsar brokers"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"brokerClientTrustCertsFilePath"),(0,a.kt)("td",{parentName:"tr",align:null},"The path to trusted certificates used by the Pulsar proxy to authenticate with Pulsar brokers"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"superUserRoles"),(0,a.kt)("td",{parentName:"tr",align:null},'Role names that are treated as "super-users," meaning that they are able to perform all admin'),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"forwardAuthorizationCredentials"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether client authorization credentials are forwarded to the broker for re-authorization. Authentication must be enabled via authenticationEnabled=true for this to take effect."),(0,a.kt)("td",{parentName:"tr",align:null},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"maxConcurrentInboundConnections"),(0,a.kt)("td",{parentName:"tr",align:null},"Max concurrent inbound connections. The proxy rejects requests beyond that."),(0,a.kt)("td",{parentName:"tr",align:null},"10000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"maxConcurrentLookupRequests"),(0,a.kt)("td",{parentName:"tr",align:null},"Max concurrent outbound connections. The proxy errors out requests beyond that."),(0,a.kt)("td",{parentName:"tr",align:null},"50000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tlsEnabledInProxy"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether TLS is enabled for the proxy"),(0,a.kt)("td",{parentName:"tr",align:null},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tlsEnabledWithBroker"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether TLS is enabled when communicating with Pulsar brokers"),(0,a.kt)("td",{parentName:"tr",align:null},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tlsCertificateFilePath"),(0,a.kt)("td",{parentName:"tr",align:null},"Path for the TLS certificate file"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tlsKeyFilePath"),(0,a.kt)("td",{parentName:"tr",align:null},"Path for the TLS private key file"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tlsTrustCertsFilePath"),(0,a.kt)("td",{parentName:"tr",align:null},"Path for the trusted TLS certificate pem file"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tlsHostnameVerificationEnabled"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether the hostname is validated when the proxy creates a TLS connection with brokers"),(0,a.kt)("td",{parentName:"tr",align:null},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tlsRequireTrustedClientCertOnConnect"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether client certificates are required for TLS. Connections are rejected if the client certificate is not trusted."),(0,a.kt)("td",{parentName:"tr",align:null},"false")))))}c.isMDXComponent=!0}}]);