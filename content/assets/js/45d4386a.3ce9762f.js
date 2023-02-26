"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[1025],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(t),d=r,f=c["".concat(u,".").concat(d)]||c[d]||m[d]||i;return t?a.createElement(f,o(o({ref:n},p),{},{components:t})):a.createElement(f,o({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},68745:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const i={id:"functions-deploying",title:"Deploying and managing Pulsar Functions",sidebar_label:"Deploying functions",original_id:"functions-deploying"},o=void 0,l={unversionedId:"functions-deploying",id:"version-2.3.0/functions-deploying",title:"Deploying and managing Pulsar Functions",description:"At the moment, there are two deployment modes available for Pulsar Functions:",source:"@site/versioned_docs/version-2.3.0/functions-deploying.md",sourceDirName:".",slug:"/functions-deploying",permalink:"/docs/2.3.0/functions-deploying",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.3.0/functions-deploying.md",tags:[],version:"2.3.0",frontMatter:{id:"functions-deploying",title:"Deploying and managing Pulsar Functions",sidebar_label:"Deploying functions",original_id:"functions-deploying"},sidebar:"version-2.3.0/docsSidebar",previous:{title:"API",permalink:"/docs/2.3.0/functions-api"},next:{title:"Processing guarantees",permalink:"/docs/2.3.0/functions-guarantees"}},u={},s=[{value:"Requirements",id:"requirements",level:2},{value:"Command-line interface",id:"command-line-interface",level:2},{value:"Fully Qualified Function Name (FQFN)",id:"fully-qualified-function-name-fqfn",level:3},{value:"Default arguments",id:"default-arguments",level:3},{value:"Example use of defaults",id:"example-use-of-defaults",level:4},{value:"Local run mode",id:"local-run-mode",level:2},{value:"Cluster mode",id:"cluster-mode",level:2},{value:"Updating cluster mode functions",id:"updating-cluster-mode-functions",level:3},{value:"Parallelism",id:"parallelism",level:3},{value:"Function instance resources",id:"function-instance-resources",level:3},{value:"Triggering Pulsar Functions",id:"triggering-pulsar-functions",level:2}],p={toc:s},c="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"At the moment, there are two deployment modes available for Pulsar Functions:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mode"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Local run mode"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The function runs in your local environment, for example on your laptop")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Cluster mode"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The function runs ",(0,r.kt)("em",{parentName:"td"},"inside of")," your Pulsar cluster, on the same machines as your Pulsar brokers")))),(0,r.kt)("blockquote",null,(0,r.kt)("h4",{parentName:"blockquote",id:"contributing-new-deployment-modes"},"Contributing new deployment modes"),(0,r.kt)("p",{parentName:"blockquote"},"The Pulsar Functions feature was designed, however, with extensibility in mind. Other deployment options will be available in the future. If you'd like to add a new deployment option, we recommend getting in touch with the Pulsar developer community at ",(0,r.kt)("a",{parentName:"p",href:"mailto:dev@pulsar.apache.org"},"dev@pulsar.apache.org"),".")),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"In order to deploy and manage Pulsar Functions, you need to have a Pulsar cluster running. There are several options for this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can run a ",(0,r.kt)("a",{parentName:"li",href:"/docs/2.3.0/getting-started-standalone"},"standalone cluster")," locally on your own machine"),(0,r.kt)("li",{parentName:"ul"},"You can deploy a Pulsar cluster on ",(0,r.kt)("a",{parentName:"li",href:"/docs/2.3.0/deploy-kubernetes"},"Kubernetes"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/2.3.0/deploy-aws"},"Amazon Web Services"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/2.3.0/deploy-bare-metal"},"bare metal"),", ",(0,r.kt)("a",{parentName:"li",href:"https://dcos.io/"},"DC/OS"),", and more")),(0,r.kt)("p",null,"If you're running a non-",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.0/reference-terminology#standalone"},"standalone")," cluster, you'll need to obtain the service URL for the cluster. How you obtain the service URL will depend on how you deployed your Pulsar cluster."),(0,r.kt)("p",null,"If you're going to deploy and trigger python user-defined functions, you should install ",(0,r.kt)("a",{parentName:"p",href:"http://pulsar.apache.org/docs/en/client-libraries-python/"},"the pulsar python client")," first."),(0,r.kt)("h2",{id:"command-line-interface"},"Command-line interface"),(0,r.kt)("p",null,"Pulsar Functions are deployed and managed using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.0/reference-pulsar-admin#functions"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-admin functions"))," interface, which contains commands such as ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.0/reference-pulsar-admin#functions-create"},(0,r.kt)("inlineCode",{parentName:"a"},"create"))," for deploying functions in ",(0,r.kt)("a",{parentName:"p",href:"#cluster-mode"},"cluster mode"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.0/reference-pulsar-admin#trigger"},(0,r.kt)("inlineCode",{parentName:"a"},"trigger"))," for ",(0,r.kt)("a",{parentName:"p",href:"#triggering-pulsar-functions"},"triggering")," functions, ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.0/reference-pulsar-admin#list-2"},(0,r.kt)("inlineCode",{parentName:"a"},"list"))," for listing deployed functions, and several others."),(0,r.kt)("h3",{id:"fully-qualified-function-name-fqfn"},"Fully Qualified Function Name (FQFN)"),(0,r.kt)("p",null,"Each Pulsar Function has a ",(0,r.kt)("strong",{parentName:"p"},"Fully Qualified Function Name")," (FQFN) that consists of three elements: the function's tenant, namespace, and function name. FQFN's look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"\ntenant/namespace/name\n\n")),(0,r.kt)("p",null,"FQFNs enable you to, for example, create multiple functions with the same name provided that they're in different namespaces."),(0,r.kt)("h3",{id:"default-arguments"},"Default arguments"),(0,r.kt)("p",null,"When managing Pulsar Functions, you'll need to specify a variety of information about those functions, including tenant, namespace, input and output topics, etc. There are some parameters, however, that have default values that will be supplied if omitted. The table below lists the defaults:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Function name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Whichever value is specified for the class name (minus org, library, etc.). The flag ",(0,r.kt)("inlineCode",{parentName:"td"},"--classname org.example.MyFunction"),", for example, would give the function a name of ",(0,r.kt)("inlineCode",{parentName:"td"},"MyFunction"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Tenant"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Derived from the input topics' names. If the input topics are under the ",(0,r.kt)("inlineCode",{parentName:"td"},"marketing")," tenant---i.e. the topic names have the form ",(0,r.kt)("inlineCode",{parentName:"td"},"persistent://marketing/{namespace}/{topicName}"),"---then the tenant will be ",(0,r.kt)("inlineCode",{parentName:"td"},"marketing"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Namespace"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Derived from the input topics' names. If the input topics are under the ",(0,r.kt)("inlineCode",{parentName:"td"},"asia")," namespace under the ",(0,r.kt)("inlineCode",{parentName:"td"},"marketing")," tenant---i.e. the topic names have the form ",(0,r.kt)("inlineCode",{parentName:"td"},"persistent://marketing/asia/{topicName}"),", then the namespace will be ",(0,r.kt)("inlineCode",{parentName:"td"},"asia"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Output topic"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"{input topic}-{function name}-output"),". A function with an input topic name of ",(0,r.kt)("inlineCode",{parentName:"td"},"incoming")," and a function name of ",(0,r.kt)("inlineCode",{parentName:"td"},"exclamation"),", for example, would have an output topic of ",(0,r.kt)("inlineCode",{parentName:"td"},"incoming-exclamation-output"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Subscription type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"For at-least-once and at-most-once ",(0,r.kt)("a",{parentName:"td",href:"/docs/2.3.0/functions-guarantees"},"processing guarantees"),", the ",(0,r.kt)("a",{parentName:"td",href:"/docs/2.3.0/concepts-messaging#shared"},(0,r.kt)("inlineCode",{parentName:"a"},"SHARED"))," is applied by default; for effectively-once guarantees, ",(0,r.kt)("a",{parentName:"td",href:"/docs/2.3.0/concepts-messaging#failover"},(0,r.kt)("inlineCode",{parentName:"a"},"FAILOVER"))," is applied")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Processing guarantees"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/2.3.0/functions-guarantees"},(0,r.kt)("inlineCode",{parentName:"a"},"ATLEAST_ONCE")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Pulsar service URL"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pulsar://localhost:6650"))))),(0,r.kt)("h4",{id:"example-use-of-defaults"},"Example use of defaults"),(0,r.kt)("p",null,"Take this ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions create \\\n  --jar my-pulsar-functions.jar \\\n  --classname org.example.MyFunction \\\n  --inputs my-function-input-topic1,my-function-input-topic2\n\n")),(0,r.kt)("p",null,"The created function would have default values supplied for the function name (",(0,r.kt)("inlineCode",{parentName:"p"},"MyFunction"),"), tenant (",(0,r.kt)("inlineCode",{parentName:"p"},"public"),"), namespace (",(0,r.kt)("inlineCode",{parentName:"p"},"default"),"), subscription type (",(0,r.kt)("inlineCode",{parentName:"p"},"SHARED"),"), processing guarantees (",(0,r.kt)("inlineCode",{parentName:"p"},"ATLEAST_ONCE"),"), and Pulsar service URL (",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar://localhost:6650"),")."),(0,r.kt)("h2",{id:"local-run-mode"},"Local run mode"),(0,r.kt)("p",null,"If you run a Pulsar Function in ",(0,r.kt)("strong",{parentName:"p"},"local run")," mode, it will run on the machine from which the command is run (this could be your laptop, an ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/ec2/"},"AWS EC2")," instance, etc.). Here's an example ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.0/reference-pulsar-admin#localrun"},(0,r.kt)("inlineCode",{parentName:"a"},"localrun"))," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions localrun \\\n  --py myfunc.py \\\n  --classname myfunc.SomeFunction \\\n  --inputs persistent://public/default/input-1 \\\n  --output persistent://public/default/output-1\n\n")),(0,r.kt)("p",null,"By default, the function will connect to a Pulsar cluster running on the same machine, via a local ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.0/reference-terminology#broker"},"broker")," service URL of ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar://localhost:6650"),". If you'd like to use local run mode to run a function but connect it to a non-local Pulsar cluster, you can specify a different broker URL using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--brokerServiceUrl")," flag. Here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions localrun \\\n  --broker-service-url pulsar://my-cluster-host:6650 \\\n  # Other function parameters\n\n")),(0,r.kt)("h2",{id:"cluster-mode"},"Cluster mode"),(0,r.kt)("p",null,"When you run a Pulsar Function in ",(0,r.kt)("strong",{parentName:"p"},"cluster mode"),", the function code will be uploaded to a Pulsar broker and run ",(0,r.kt)("em",{parentName:"p"},"alongside the broker")," rather than in your ",(0,r.kt)("a",{parentName:"p",href:"#local-run-mode"},"local environment"),". You can run a function in cluster mode using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.0/reference-pulsar-admin#create-1"},(0,r.kt)("inlineCode",{parentName:"a"},"create"))," command. Here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions create \\\n  --py myfunc.py \\\n  --classname myfunc.SomeFunction \\\n  --inputs persistent://public/default/input-1 \\\n  --output persistent://public/default/output-1\n\n")),(0,r.kt)("h3",{id:"updating-cluster-mode-functions"},"Updating cluster mode functions"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.0/reference-pulsar-admin#update-1"},(0,r.kt)("inlineCode",{parentName:"a"},"update"))," command to update a Pulsar Function running in cluster mode. This command, for example, would update the function created in the section ",(0,r.kt)("a",{parentName:"p",href:"#cluster-mode"},"above"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions update \\\n  --py myfunc.py \\\n  --classname myfunc.SomeFunction \\\n  --inputs persistent://public/default/new-input-topic \\\n  --output persistent://public/default/new-output-topic\n\n")),(0,r.kt)("h3",{id:"parallelism"},"Parallelism"),(0,r.kt)("p",null,"Pulsar Functions run as processes called ",(0,r.kt)("strong",{parentName:"p"},"instances"),". When you run a Pulsar Function, it runs as a single instance by default (and in ",(0,r.kt)("a",{parentName:"p",href:"#local-run-mode"},"local run mode")," you can ",(0,r.kt)("em",{parentName:"p"},"only")," run a single instance of a function)."),(0,r.kt)("p",null,"You can also specify the ",(0,r.kt)("em",{parentName:"p"},"parallelism")," of a function, i.e. the number of instances to run, when you create the function. You can set the parallelism factor using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--parallelism")," flag of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.0/reference-pulsar-admin#functions-create"},(0,r.kt)("inlineCode",{parentName:"a"},"create"))," command. Here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions create \\\n  --parallelism 3 \\\n  # Other function info\n\n")),(0,r.kt)("p",null,"You can adjust the parallelism of an already created function using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.0/reference-pulsar-admin#update-1"},(0,r.kt)("inlineCode",{parentName:"a"},"update"))," interface."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions update \\\n  --parallelism 5 \\\n  # Other function\n\n")),(0,r.kt)("p",null,"If you're specifying a function's configuration via YAML, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"parallelism")," parameter. Here's an example config file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"\n# function-config.yaml\nparallelism: 3\ninputs:\n- persistent://public/default/input-1\noutput: persistent://public/default/output-1\n# other parameters\n\n")),(0,r.kt)("p",null,"And here's the corresponding update command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions update \\\n  --function-config-file function-config.yaml\n\n")),(0,r.kt)("h3",{id:"function-instance-resources"},"Function instance resources"),(0,r.kt)("p",null,"When you run Pulsar Functions in ",(0,r.kt)("a",{parentName:"p",href:"#cluster-mode"},"cluster run")," mode, you can specify the resources that are assigned to each function ",(0,r.kt)("a",{parentName:"p",href:"#parallelism"},"instance"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Resource"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Specified as..."),(0,r.kt)("th",{parentName:"tr",align:"left"},"Runtimes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CPU"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of cores"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Docker (coming soon)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"RAM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Process, Docker")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Disk space"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Docker")))),(0,r.kt)("p",null,"Here's an example function creation command that allocates 8 cores, 8 GB of RAM, and 10 GB of disk space to a function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions create \\\n  --jar target/my-functions.jar \\\n  --classname org.example.functions.MyFunction \\\n  --cpu 8 \\\n  --ram 8589934592 \\\n  --disk 10737418240\n\n")),(0,r.kt)("blockquote",null,(0,r.kt)("h4",{parentName:"blockquote",id:"resources-are-per-instance"},"Resources are ",(0,r.kt)("em",{parentName:"h4"},"per instance")),(0,r.kt)("p",{parentName:"blockquote"},"The resources that you apply to a given Pulsar Function are applied to each ",(0,r.kt)("a",{parentName:"p",href:"#parallelism"},"instance")," of the function. If you apply 8 GB of RAM to a function with a parallelism of 5, for example, then you are applying 40 GB of RAM total for the function. You should always make sure to factor parallelism---i.e. the number of instances---into your resource calculations")),(0,r.kt)("h2",{id:"triggering-pulsar-functions"},"Triggering Pulsar Functions"),(0,r.kt)("p",null,"If a Pulsar Function is running in ",(0,r.kt)("a",{parentName:"p",href:"#cluster-mode"},"cluster mode"),", you can ",(0,r.kt)("strong",{parentName:"p"},"trigger")," it at any time using the command line. Triggering a function means that you send a message with a specific value to the function and get the function's output (if any) via the command line."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Triggering a function is ultimately no different from invoking a function by producing a message on one of the function's input topics. The ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.0/reference-pulsar-admin#trigger"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-admin functions trigger"))," command is essentially a convenient mechanism for sending messages to functions without needing to use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.0/reference-cli-tools#pulsar-client"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-client"))," tool or a language-specific client library.")),(0,r.kt)("p",null,"To show an example of function triggering, let's start with a simple ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.0/functions-api#functions-for-python"},"Python function")," that returns a simple string based on the input:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\n# myfunc.py\ndef process(input):\n    return "This function has been triggered with a value of {0}".format(input)\n\n')),(0,r.kt)("p",null,"Let's run that function in ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.0/functions-deploying#local-run-mode"},"local run mode"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions create \\\n  --tenant public \\\n  --namespace default \\\n  --name myfunc \\\n  --py myfunc.py \\\n  --classname myfunc \\\n  --inputs persistent://public/default/in \\\n  --output persistent://public/default/out\n\n")),(0,r.kt)("p",null,"Now let's make a consumer listen on the output topic for messages coming from the ",(0,r.kt)("inlineCode",{parentName:"p"},"myfunc")," function using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.0/reference-cli-tools#consume"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-client consume"))," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-client consume persistent://public/default/out \\\n  --subscription-name my-subscription\n  --num-messages 0 # Listen indefinitely\n\n")),(0,r.kt)("p",null,"Now let's trigger that function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\n$ bin/pulsar-admin functions trigger \\\n  --tenant public \\\n  --namespace default \\\n  --name myfunc \\\n  --trigger-value "hello world"\n\n')),(0,r.kt)("p",null,"The consumer listening on the output topic should then produce this in its logs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\n----- got message -----\nThis function has been triggered with a value of hello world\n\n")),(0,r.kt)("blockquote",null,(0,r.kt)("h4",{parentName:"blockquote",id:"topic-info-not-required"},"Topic info not required"),(0,r.kt)("p",{parentName:"blockquote"},"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"trigger")," command above, you may have noticed that you only need to specify basic information about the function (tenant, namespace, and name). To trigger the function, you didn't need to know the function's input topic(s).")))}m.isMDXComponent=!0}}]);