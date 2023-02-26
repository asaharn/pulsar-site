"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[27261],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(t),d=i,h=p["".concat(u,".").concat(d)]||p[d]||m[d]||a;return t?r.createElement(h,o(o({ref:n},c),{},{components:t})):r.createElement(h,o({ref:n},c))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},60619:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(87462),i=(t(67294),t(3905));const a={id:"functions-runtime",title:"Configure Functions runtime",sidebar_label:"Setup: Configure Functions runtime",original_id:"functions-runtime"},o=void 0,s={unversionedId:"functions-runtime",id:"version-2.7.5/functions-runtime",title:"Configure Functions runtime",description:"You can use the following methods to run functions.",source:"@site/versioned_docs/version-2.7.5/functions-runtime.md",sourceDirName:".",slug:"/functions-runtime",permalink:"/docs/2.7.5/functions-runtime",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.5/functions-runtime.md",tags:[],version:"2.7.5",frontMatter:{id:"functions-runtime",title:"Configure Functions runtime",sidebar_label:"Setup: Configure Functions runtime",original_id:"functions-runtime"},sidebar:"version-2.7.5/docsSidebar",previous:{title:"Setup: Pulsar Functions Worker",permalink:"/docs/2.7.5/functions-worker"},next:{title:"How-to: Develop",permalink:"/docs/2.7.5/functions-develop"}},u={},l=[{value:"Configure thread runtime",id:"configure-thread-runtime",level:2},{value:"Configure process runtime",id:"configure-process-runtime",level:2},{value:"Configure Kubernetes runtime",id:"configure-kubernetes-runtime",level:2},{value:"Basic configuration",id:"basic-configuration",level:3},{value:"Run standalone functions worker on Kubernetes",id:"run-standalone-functions-worker-on-kubernetes",level:3},{value:"Run RBAC in Kubernetes clusters",id:"run-rbac-in-kubernetes-clusters",level:3},{value:"Integrate Kubernetes secrets",id:"integrate-kubernetes-secrets",level:3},{value:"Enable token authentication",id:"enable-token-authentication",level:3},{value:"Run clusters with authentication",id:"run-clusters-with-authentication",level:3},{value:"Customize Kubernetes runtime",id:"customize-kubernetes-runtime",level:3},{value:"Run clusters with geo-replication",id:"run-clusters-with-geo-replication",level:2},{value:"Configure standalone functions worker",id:"configure-standalone-functions-worker",level:2}],c={toc:l},p="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can use the following methods to run functions."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Thread"),": Invoke functions threads in functions worker."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Process"),": Invoke functions in processes forked by functions worker."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Kubernetes"),": Submit functions as Kubernetes StatefulSets by functions worker.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Pulsar supports adding labels to the Kubernetes StatefulSets and services while launching functions, which facilitates selecting the target Kubernetes objects.")),(0,i.kt)("p",null,"The differences of the thread and process modes are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Thread mode: when a function runs in thread mode, it runs on the same Java virtual machine (JVM) with functions worker."),(0,i.kt)("li",{parentName:"ul"},"Process mode: when a function runs in process mode, it runs on the same machine that functions worker runs.")),(0,i.kt)("h2",{id:"configure-thread-runtime"},"Configure thread runtime"),(0,i.kt)("p",null,"It is easy to configure ",(0,i.kt)("em",{parentName:"p"},"Thread")," runtime. In most cases, you do not need to configure anything. You can customize the thread group name with the following settings:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'\nfunctionRuntimeFactoryClassName: org.apache.pulsar.functions.runtime.thread.ThreadRuntimeFactory\nfunctionRuntimeFactoryConfigs:\n  threadGroupName: "Your Function Container Group"\n\n')),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Thread")," runtime is only supported in Java function."),(0,i.kt)("h2",{id:"configure-process-runtime"},"Configure process runtime"),(0,i.kt)("p",null,"When you enable ",(0,i.kt)("em",{parentName:"p"},"Process")," runtime, you do not need to configure anything."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"\nfunctionRuntimeFactoryClassName: org.apache.pulsar.functions.runtime.process.ProcessRuntimeFactory\nfunctionRuntimeFactoryConfigs:\n  # the directory for storing the function logs\n  logDirectory:\n  # change the jar location only when you put the java instance jar in a different location\n  javaInstanceJarLocation:\n  # change the python instance location only when you put the python instance jar in a different location\n  pythonInstanceLocation:\n  # change the extra dependencies location:\n  extraFunctionDependenciesDir:\n\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Process")," runtime is supported in Java, Python, and Go functions."),(0,i.kt)("h2",{id:"configure-kubernetes-runtime"},"Configure Kubernetes runtime"),(0,i.kt)("p",null,"When the functions worker generates Kubernetes manifests and apply the manifests, the Kubernetes runtime works. If you have run functions worker on Kubernetes, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"serviceAccount")," associated with the pod that the functions worker is running in. Otherwise, you can configure it to communicate with a Kubernetes cluster."),(0,i.kt)("p",null,"The manifests, generated by the functions worker, include a ",(0,i.kt)("inlineCode",{parentName:"p"},"StatefulSet"),", a ",(0,i.kt)("inlineCode",{parentName:"p"},"Service")," (used to communicate with the pods), and a ",(0,i.kt)("inlineCode",{parentName:"p"},"Secret")," for auth credentials (when applicable). The ",(0,i.kt)("inlineCode",{parentName:"p"},"StatefulSet"),' manifest (by default) has a single pod, with the number of replicas determined by the "parallelism" of the function. On pod boot, the pod downloads the function payload (via the functions worker REST API). The pod\'s container image is configurable, but must have the functions runtime.'),(0,i.kt)("p",null,"The Kubernetes runtime supports secrets, so you can create a Kubernetes secret and expose it as an environment variable in the pod. The Kubernetes runtime is extensible, you can implement classes and customize the way how to generate Kubernetes manifests, how to pass auth data to pods, and how to integrate secrets."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"For the rules of translating Pulsar object names into Kubernetes resource labels, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.7.5/admin-api-overview#how-to-define-pulsar-resource-names-when-running-pulsar-in-kubernetes"},"here"),".")),(0,i.kt)("h3",{id:"basic-configuration"},"Basic configuration"),(0,i.kt)("p",null,"It is easy to configure Kubernetes runtime. You can just uncomment the settings of ",(0,i.kt)("inlineCode",{parentName:"p"},"kubernetesContainerFactory")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"functions_worker.yaml")," file. The following is an example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"\nfunctionRuntimeFactoryClassName: org.apache.pulsar.functions.runtime.kubernetes.KubernetesRuntimeFactory\nfunctionRuntimeFactoryConfigs:\n  # uri to kubernetes cluster, leave it to empty and it will use the kubernetes settings in function worker\n  k8Uri:\n  # the kubernetes namespace to run the function instances. it is `default`, if this setting is left to be empty\n  jobNamespace:\n  # the docker image to run function instance. by default it is `apachepulsar/pulsar`\n  pulsarDockerImageName:\n  # the docker image to run function instance according to different configurations provided by users.\n  # By default it is `apachepulsar/pulsar`.\n  # e.g:\n  # functionDockerImages:\n  #   JAVA: JAVA_IMAGE_NAME\n  #   PYTHON: PYTHON_IMAGE_NAME\n  #   GO: GO_IMAGE_NAME\n  functionDockerImages:\n  # the root directory of pulsar home directory in `pulsarDockerImageName`. by default it is `/pulsar`.\n  # if you are using your own built image in `pulsarDockerImageName`, you need to set this setting accordingly\n  pulsarRootDir:\n  # this setting only takes effects if `k8Uri` is set to null. if your function worker is running as a k8 pod,\n  # setting this to true is let function worker to submit functions to the same k8s cluster as function worker\n  # is running. setting this to false if your function worker is not running as a k8 pod.\n  submittingInsidePod: false\n  # setting the pulsar service url that pulsar function should use to connect to pulsar\n  # if it is not set, it will use the pulsar service url configured in worker service\n  pulsarServiceUrl:\n  # setting the pulsar admin url that pulsar function should use to connect to pulsar\n  # if it is not set, it will use the pulsar admin url configured in worker service\n  pulsarAdminUrl:\n  # the custom labels that function worker uses to select the nodes for pods\n  customLabels:\n  # the directory for dropping extra function dependencies\n  # if it is not an absolute path, it is relative to `pulsarRootDir`\n  extraFunctionDependenciesDir:\n  # Additional memory padding added on top of the memory requested by the function per on a per instance basis\n  percentMemoryPadding: 10\n\n")),(0,i.kt)("p",null,"If you run functions worker embedded in a broker on Kubernetes, you can use the default settings. "),(0,i.kt)("h3",{id:"run-standalone-functions-worker-on-kubernetes"},"Run standalone functions worker on Kubernetes"),(0,i.kt)("p",null,"If you run functions worker standalone (that is, not embedded) on Kubernetes, you need to configure ",(0,i.kt)("inlineCode",{parentName:"p"},"pulsarSerivceUrl")," to be the URL of the broker and ",(0,i.kt)("inlineCode",{parentName:"p"},"pulsarAdminUrl")," as the URL to the functions worker."),(0,i.kt)("p",null,"For example, both Pulsar brokers and Function Workers run in the ",(0,i.kt)("inlineCode",{parentName:"p"},"pulsar")," K8S namespace. The brokers have a service called ",(0,i.kt)("inlineCode",{parentName:"p"},"brokers")," and the functions worker has a service called ",(0,i.kt)("inlineCode",{parentName:"p"},"func-worker"),". The settings are as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"\npulsarServiceUrl: pulsar://broker.pulsar:6650 // or pulsar+ssl://broker.pulsar:6651 if using TLS\npulsarAdminUrl: http://func-worker.pulsar:8080 // or https://func-worker:8443 if using TLS\n\n")),(0,i.kt)("h3",{id:"run-rbac-in-kubernetes-clusters"},"Run RBAC in Kubernetes clusters"),(0,i.kt)("p",null,"If you run RBAC in your Kubernetes cluster, make sure that the service account you use for running functions workers (or brokers, if functions workers run along with brokers) have permissions on the following Kubernetes APIs."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"services"),(0,i.kt)("li",{parentName:"ul"},"configmaps"),(0,i.kt)("li",{parentName:"ul"},"pods"),(0,i.kt)("li",{parentName:"ul"},"apps.statefulsets")),(0,i.kt)("p",null,"The following is sufficient:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"\napiVersion: rbac.authorization.k8s.io/v1beta1\nkind: ClusterRole\nmetadata:\n  name: functions-worker\nrules:\n- apiGroups: [\"\"]\n  resources:\n  - services\n  - configmaps\n  - pods\n  verbs:\n  - '*'\n- apiGroups:\n  - apps\n  resources:\n  - statefulsets\n  verbs:\n  - '*'\n---\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: functions-worker\n---\napiVersion: rbac.authorization.k8s.io/v1beta1\nkind: ClusterRoleBinding\nmetadata:\n  name: functions-worker\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: functions-worker\nsubjectsKubernetesSec:\n- kind: ServiceAccount\n  name: functions-worker\n\n")),(0,i.kt)("p",null,"If the service-account is not properly configured, an error message similar to this is displayed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n22:04:27.696 [Timer-0] ERROR org.apache.pulsar.functions.runtime.KubernetesRuntimeFactory - Error while trying to fetch configmap example-pulsar-4qvmb5gur3c6fc9dih0x1xn8b-function-worker-config at namespace pulsar\nio.kubernetes.client.ApiException: Forbidden\n    at io.kubernetes.client.ApiClient.handleResponse(ApiClient.java:882) ~[io.kubernetes-client-java-2.0.0.jar:?]\n    at io.kubernetes.client.ApiClient.execute(ApiClient.java:798) ~[io.kubernetes-client-java-2.0.0.jar:?]\n    at io.kubernetes.client.apis.CoreV1Api.readNamespacedConfigMapWithHttpInfo(CoreV1Api.java:23673) ~[io.kubernetes-client-java-api-2.0.0.jar:?]\n    at io.kubernetes.client.apis.CoreV1Api.readNamespacedConfigMap(CoreV1Api.java:23655) ~[io.kubernetes-client-java-api-2.0.0.jar:?]\n    at org.apache.pulsar.functions.runtime.KubernetesRuntimeFactory.fetchConfigMap(KubernetesRuntimeFactory.java:284) [org.apache.pulsar-pulsar-functions-runtime-2.4.0-42c3bf949.jar:2.4.0-42c3bf949]\n    at org.apache.pulsar.functions.runtime.KubernetesRuntimeFactory$1.run(KubernetesRuntimeFactory.java:275) [org.apache.pulsar-pulsar-functions-runtime-2.4.0-42c3bf949.jar:2.4.0-42c3bf949]\n    at java.util.TimerThread.mainLoop(Timer.java:555) [?:1.8.0_212]\n    at java.util.TimerThread.run(Timer.java:505) [?:1.8.0_212]\n\n")),(0,i.kt)("h3",{id:"integrate-kubernetes-secrets"},"Integrate Kubernetes secrets"),(0,i.kt)("p",null,"In order to safely distribute secrets, Pulsar Functions can reference Kubernetes secrets. To enable this, set the ",(0,i.kt)("inlineCode",{parentName:"p"},"secretsProviderConfiguratorClassName")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.functions.secretsproviderconfigurator.KubernetesSecretsProviderConfigurator"),"."),(0,i.kt)("p",null,"You can create a secret in the namespace where your functions are deployed. For example, you deploy functions to the ",(0,i.kt)("inlineCode",{parentName:"p"},"pulsar-func")," Kubernetes namespace, and you have a secret named ",(0,i.kt)("inlineCode",{parentName:"p"},"database-creds")," with a field name ",(0,i.kt)("inlineCode",{parentName:"p"},"password"),", which you want to mount in the pod as an environment variable called ",(0,i.kt)("inlineCode",{parentName:"p"},"DATABASE_PASSWORD"),". The following functions configuration enables you to reference that secret and mount the value as an environment variable in the pod."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Yaml"},'\ntenant: "mytenant"\nnamespace: "mynamespace"\nname: "myfunction"\ntopicName: "persistent://mytenant/mynamespace/myfuncinput"\nclassName: "com.company.pulsar.myfunction"\n\nsecrets:\n  # the secret will be mounted from the `password` field in the `database-creds` secret as an env var called `DATABASE_PASSWORD`\n  DATABASE_PASSWORD:\n    path: "database-creds"\n    key: "password"\n\n')),(0,i.kt)("h3",{id:"enable-token-authentication"},"Enable token authentication"),(0,i.kt)("p",null,"When you enable authentication for your Pulsar cluster, you need a mechanism for the pod running your function to authenticate with the broker."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.functions.auth.KubernetesFunctionAuthProvider")," interface provides support for any authentication mechanism. The ",(0,i.kt)("inlineCode",{parentName:"p"},"functionAuthProviderClassName")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"function-worker.yml")," is used to specify your path to this implementation. "),(0,i.kt)("p",null,"Pulsar includes an implementation of this interface for token authentication, and distributes the certificate authority via the same implementation. The configuration is similar as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Yaml"},"\nfunctionAuthProviderClassName: org.apache.pulsar.functions.auth.KubernetesSecretsTokenAuthProvider\n\n")),(0,i.kt)("p",null,"For token authentication, the functions worker captures the token that is used to deploy (or update) the function. The token is saved as a secret and mounted into the pod."),(0,i.kt)("p",null,"For custom authentication or TLS, you need to implement this interface or use an alternative mechanism to provide authentication. If you use token authentication and TLS encryption to secure the communication with the cluster, Pulsar passes your certificate authority (CA) to the client, so the client obtains what it needs to authenticate the cluster, and trusts the cluster with your signed certificate."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you use tokens that expire when deploying functions, these tokens will expire.")),(0,i.kt)("h3",{id:"run-clusters-with-authentication"},"Run clusters with authentication"),(0,i.kt)("p",null,"When you run a functions worker in a standalone process (that is, not embedded in the broker) in a cluster with authentication, you must configure your functions worker to interact with the broker and authenticate incoming requests. So you need to configure properties that the broker requires for authentication or authorization."),(0,i.kt)("p",null,"For example, if you use token authentication, you need to configure the following properties in the ",(0,i.kt)("inlineCode",{parentName:"p"},"function-worker.yml")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Yaml"},'\nclientAuthenticationPlugin: org.apache.pulsar.client.impl.auth.AuthenticationToken\nclientAuthenticationParameters: file:///etc/pulsar/token/admin-token.txt\nconfigurationStoreServers: zookeeper-cluster:2181 # auth requires a connection to zookeeper\nauthenticationProviders:\n - "org.apache.pulsar.broker.authentication.AuthenticationProviderToken"\nauthorizationEnabled: true\nauthenticationEnabled: true\nsuperUserRoles:\n  - superuser\n  - proxy\nproperties:\n  tokenSecretKey: file:///etc/pulsar/jwt/secret # if using a secret token\n  tokenPublicKey: file:///etc/pulsar/jwt/public.key # if using public/private key tokens\n\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You must configure both the Function Worker authorization or authentication for the server to authenticate requests and configure the client to be authenticated to communicate with the broker.")),(0,i.kt)("h3",{id:"customize-kubernetes-runtime"},"Customize Kubernetes runtime"),(0,i.kt)("p",null,"The Kubernetes integration enables you to implement a class and customize how to generate manifests. You can configure it by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"runtimeCustomizerClassName")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"functions-worker.yml")," file and use the fully qualified class name. You must implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.functions.runtime.kubernetes.KubernetesManifestCustomizer")," interface."),(0,i.kt)("p",null,"The functions (and sinks/sources) API provides a flag, ",(0,i.kt)("inlineCode",{parentName:"p"},"customRuntimeOptions"),", which is passed to this interface."),(0,i.kt)("p",null,"To initialize the ",(0,i.kt)("inlineCode",{parentName:"p"},"KubernetesManifestCustomizer"),", you can provide ",(0,i.kt)("inlineCode",{parentName:"p"},"runtimeCustomizerConfig")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"functions-worker.yml")," file. ",(0,i.kt)("inlineCode",{parentName:"p"},"runtimeCustomizerConfig")," is passed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"public void initialize(Map<String, Object> config)")," function of the interface. ",(0,i.kt)("inlineCode",{parentName:"p"},"runtimeCustomizerConfig"),"is different from the ",(0,i.kt)("inlineCode",{parentName:"p"},"customRuntimeOptions")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"runtimeCustomizerConfig")," is the same across all functions. If you provide both ",(0,i.kt)("inlineCode",{parentName:"p"},"runtimeCustomizerConfig"),"  and ",(0,i.kt)("inlineCode",{parentName:"p"},"customRuntimeOptions"),", you need to decide how to manage these two configurations in your implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"KubernetesManifestCustomizer"),". "),(0,i.kt)("p",null,"Pulsar includes a built-in implementation. To use the basic implementation, set ",(0,i.kt)("inlineCode",{parentName:"p"},"runtimeCustomizerClassName")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.functions.runtime.kubernetes.BasicKubernetesManifestCustomizer"),". The built-in implementation initialized with ",(0,i.kt)("inlineCode",{parentName:"p"},"runtimeCustomizerConfig")," enables you to pass a JSON document as ",(0,i.kt)("inlineCode",{parentName:"p"},"customRuntimeOptions")," with certain properties to augment, which decides how the manifests are generated. If both ",(0,i.kt)("inlineCode",{parentName:"p"},"runtimeCustomizerConfig")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"customRuntimeOptions")," are provided, ",(0,i.kt)("inlineCode",{parentName:"p"},"BasicKubernetesManifestCustomizer")," uses ",(0,i.kt)("inlineCode",{parentName:"p"},"customRuntimeOptions")," to override the configuration if there are conflicts in these two configurations. "),(0,i.kt)("p",null,"Below is an example of ",(0,i.kt)("inlineCode",{parentName:"p"},"customRuntimeOptions"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "jobName": "jobname", // the k8s pod name to run this function instance\n  "jobNamespace": "namespace", // the k8s namespace to run this function in\n  "extractLabels": {           // extra labels to attach to the statefulSet, service, and pods\n    "extraLabel": "value"\n  },\n  "extraAnnotations": {        // extra annotations to attach to the statefulSet, service, and pods\n    "extraAnnotation": "value"\n  },\n  "nodeSelectorLabels": {      // node selector labels to add on to the pod spec\n    "customLabel": "value"\n  },\n  "tolerations": [             // tolerations to add to the pod spec\n    {\n      "key": "custom-key",\n      "value": "value",\n      "effect": "NoSchedule"\n    }\n  ],\n  "resourceRequirements": {  // values for cpu and memory should be defined as described here: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container\n    "requests": {\n      "cpu": 1,\n      "memory": "4G"\n    },\n    "limits": {\n      "cpu": 2,\n      "memory": "8G"\n    }\n  }\n}\n\n')),(0,i.kt)("h2",{id:"run-clusters-with-geo-replication"},"Run clusters with geo-replication"),(0,i.kt)("p",null,"If you run multiple clusters tied together with geo-replication, it is important to use a different function namespace for each cluster. Otherwise, the function shares a namespace and potentially schedule across clusters."),(0,i.kt)("p",null,"For example, if you have two clusters: ",(0,i.kt)("inlineCode",{parentName:"p"},"east-1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"west-1"),", you can configure the functions workers for ",(0,i.kt)("inlineCode",{parentName:"p"},"east-1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"west-1")," perspectively as follows."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Yaml"},"\npulsarFunctionsCluster: east-1\npulsarFunctionsNamespace: public/functions-east-1\n\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Yaml"},"\npulsarFunctionsCluster: west-1\npulsarFunctionsNamespace: public/functions-west-1\n\n")),(0,i.kt)("p",null,"This ensures the two different Functions Workers use distinct sets of topics for their internal coordination."),(0,i.kt)("h2",{id:"configure-standalone-functions-worker"},"Configure standalone functions worker"),(0,i.kt)("p",null,"When configuring a standalone functions worker, you need to configure properties that the broker requires, especially if you use TLS. And then Functions Worker can communicate with the broker. "),(0,i.kt)("p",null,"You need to configure the following required properties."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Yaml"},"\nworkerPort: 8080\nworkerPortTls: 8443 # when using TLS\ntlsCertificateFilePath: /etc/pulsar/tls/tls.crt # when using TLS\ntlsKeyFilePath: /etc/pulsar/tls/tls.key # when using TLS\ntlsTrustCertsFilePath: /etc/pulsar/tls/ca.crt # when using TLS\npulsarServiceUrl: pulsar://broker.pulsar:6650/ # or pulsar+ssl://pulsar-prod-broker.pulsar:6651/ when using TLS\npulsarWebServiceUrl: http://broker.pulsar:8080/ # or https://pulsar-prod-broker.pulsar:8443/ when using TLS\nuseTls: true # when using TLS, critical!\n\n")))}m.isMDXComponent=!0}}]);