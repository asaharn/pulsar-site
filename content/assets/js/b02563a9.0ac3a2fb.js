"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[9162],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),o=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=o(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=o(t),m=l,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return t?a.createElement(h,i(i({ref:n},c),{},{components:t})):a.createElement(h,i({ref:n},c))}));function h(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=m;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u[p]="string"==typeof e?e:l,i[1]=u;for(var o=2;o<r;o++)i[o]=t[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},28718:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>u,toc:()=>o});var a=t(87462),l=(t(67294),t(3905));const r={id:"functions-quickstart",title:"Getting started with Pulsar Functions",sidebar_label:"Getting started",original_id:"functions-quickstart"},i=void 0,u={unversionedId:"functions-quickstart",id:"version-2.2.0/functions-quickstart",title:"Getting started with Pulsar Functions",description:"This tutorial will walk you through running a standalone Pulsar cluster on your machine and then running your first Pulsar Functions using that cluster. The first function will run in local run mode (outside your Pulsar cluster), while the second will run in cluster mode (inside your cluster).",source:"@site/versioned_docs/version-2.2.0/functions-quickstart.md",sourceDirName:".",slug:"/functions-quickstart",permalink:"/docs/2.2.0/functions-quickstart",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.2.0/functions-quickstart.md",tags:[],version:"2.2.0",frontMatter:{id:"functions-quickstart",title:"Getting started with Pulsar Functions",sidebar_label:"Getting started",original_id:"functions-quickstart"},sidebar:"version-2.2.0/docsSidebar",previous:{title:"Overview",permalink:"/docs/2.2.0/functions-overview"},next:{title:"API",permalink:"/docs/2.2.0/functions-api"}},s={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Run a standalone Pulsar cluster",id:"run-a-standalone-pulsar-cluster",level:2},{value:"Run a Pulsar Function in local run mode",id:"run-a-pulsar-function-in-local-run-mode",level:2},{value:"Run a Pulsar Function in cluster mode",id:"run-a-pulsar-function-in-cluster-mode",level:2},{value:"Writing and running a new function",id:"writing-and-running-a-new-function",level:2}],c={toc:o},p="wrapper";function d(e){let{components:n,...t}=e;return(0,l.kt)(p,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This tutorial will walk you through running a ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.2.0/reference-terminology#standalone"},"standalone")," Pulsar ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.2.0/reference-terminology#cluster"},"cluster")," on your machine and then running your first Pulsar Functions using that cluster. The first function will run in local run mode (outside your Pulsar ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.2.0/reference-terminology#cluster"},"cluster"),"), while the second will run in cluster mode (inside your cluster)."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"In local run mode, your Pulsar Function will communicate with your Pulsar cluster but will run outside of the cluster.")),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"In order to follow along with this tutorial, you'll need to have ",(0,l.kt)("a",{parentName:"p",href:"https://maven.apache.org/download.cgi"},"Maven")," installed on your machine."),(0,l.kt)("h2",{id:"run-a-standalone-pulsar-cluster"},"Run a standalone Pulsar cluster"),(0,l.kt)("p",null,"In order to run our Pulsar Functions, we'll need to run a Pulsar cluster locally first. The easiest way to do that is to run Pulsar in ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.2.0/reference-terminology#standalone"},"standalone")," mode. Follow these steps to start up a standalone cluster:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ wget https://archive.apache.org/dist/pulsar/pulsar-2.2.0/apache-pulsar-2.2.0-bin.tar.gz\n$ tar xvfz apache-pulsar-2.2.0-bin.tar.gz\n$ cd apache-pulsar-2.2.0\n$ bin/pulsar standalone \\\n  --advertised-address 127.0.0.1\n\n")),(0,l.kt)("p",null,"When running Pulsar in standalone mode, the ",(0,l.kt)("inlineCode",{parentName:"p"},"public")," tenant and ",(0,l.kt)("inlineCode",{parentName:"p"},"default")," namespace will be created automatically for you. That tenant and namespace will be used throughout this tutorial."),(0,l.kt)("h2",{id:"run-a-pulsar-function-in-local-run-mode"},"Run a Pulsar Function in local run mode"),(0,l.kt)("p",null,"Let's start with a simple function that takes a string as input from a Pulsar topic, adds an exclamation point to the end of the string, and then publishes that new string to another Pulsar topic. Here's the code for the function:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'\npackage org.apache.pulsar.functions.api.examples;\n\nimport java.util.function.Function;\n\npublic class ExclamationFunction implements Function<String, String> {\n    @Override\n    public String apply(String input) {\n        return String.format("%s!", input);\n    }\n}\n\n')),(0,l.kt)("p",null,"A JAR file containing this and several other functions (written in Java) is included with the binary distribution you downloaded above (in the ",(0,l.kt)("inlineCode",{parentName:"p"},"examples")," folder). To run the function in local mode, i.e. on our laptop but outside our Pulsar cluster:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions localrun \\\n  --jar examples/api-examples.jar \\\n  --classname org.apache.pulsar.functions.api.examples.ExclamationFunction \\\n  --inputs persistent://public/default/exclamation-input \\\n  --output persistent://public/default/exclamation-output \\\n  --name exclamation\n\n")),(0,l.kt)("blockquote",null,(0,l.kt)("h4",{parentName:"blockquote",id:"multiple-input-topics-allowed"},"Multiple input topics allowed"),(0,l.kt)("p",{parentName:"blockquote"},"In the example above, a single topic was specified using the ",(0,l.kt)("inlineCode",{parentName:"p"},"--inputs")," flag. You can also specify multiple input topics as a comma-separated list using the same flag. Here's an example:")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n--inputs topic1,topic2\n\n\n"))),(0,l.kt)("p",null,"We can open up another shell and use the ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.2.0/reference-cli-tools#pulsar-client"},(0,l.kt)("inlineCode",{parentName:"a"},"pulsar-client"))," tool to listen for messages on the output topic:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-client consume persistent://public/default/exclamation-output \\\n  --subscription-name my-subscription \\\n  --num-messages 0\n\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Setting the ",(0,l.kt)("inlineCode",{parentName:"p"},"--num-messages")," flag to 0 means that the consumer will listen on the topic indefinitely (rather than only accepting a certain number of messages).")),(0,l.kt)("p",null,"With a listener up and running, we can open up another shell and produce a message on the input topic that we specified:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'\n$ bin/pulsar-client produce persistent://public/default/exclamation-input \\\n  --num-produce 1 \\\n  --messages "Hello world"\n\n')),(0,l.kt)("p",null,"In the output, you should see the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n----- got message -----\nHello world!\n\n")),(0,l.kt)("p",null,"Success! As you can see, the message has been successfully processed by the exclamation function. To shut down the function, simply hit ",(0,l.kt)("strong",{parentName:"p"},"Ctrl+C"),"."),(0,l.kt)("p",null,"Here's what happened:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"Hello world")," message that we published to the input topic (",(0,l.kt)("inlineCode",{parentName:"li"},"persistent://public/default/exclamation-input"),") was passed to the exclamation function that we ran on our machine"),(0,l.kt)("li",{parentName:"ul"},"The exclamation function processed the message (providing a result of ",(0,l.kt)("inlineCode",{parentName:"li"},"Hello world!"),") and published the result to the output topic (",(0,l.kt)("inlineCode",{parentName:"li"},"persistent://public/default/exclamation-output"),")."),(0,l.kt)("li",{parentName:"ul"},"If our exclamation function ",(0,l.kt)("em",{parentName:"li"},"hadn't")," been running, Pulsar would have durably stored the message data published to the input topic in ",(0,l.kt)("a",{parentName:"li",href:"https://bookkeeper.apache.org"},"Apache BookKeeper")," until a consumer consumed and acknowledged the message")),(0,l.kt)("h2",{id:"run-a-pulsar-function-in-cluster-mode"},"Run a Pulsar Function in cluster mode"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"#run-a-pulsar-function-in-local-run-mode"},"Local run mode")," is useful for development and experimentation, but if you want to use Pulsar Functions in a real Pulsar deployment, you'll want to run them in ",(0,l.kt)("strong",{parentName:"p"},"cluster mode"),". In this mode, Pulsar Functions run ",(0,l.kt)("em",{parentName:"p"},"inside")," your Pulsar cluster and are managed using the same ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.2.0/reference-pulsar-admin#functions"},(0,l.kt)("inlineCode",{parentName:"a"},"pulsar-admin functions"))," interface that we've been using thus far."),(0,l.kt)("p",null,"This command, for example, would deploy the same exclamation function we ran locally above ",(0,l.kt)("em",{parentName:"p"},"in our Pulsar cluster")," (rather than outside it):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions create \\\n  --jar examples/api-examples.jar \\\n  --classname org.apache.pulsar.functions.api.examples.ExclamationFunction \\\n  --inputs persistent://public/default/exclamation-input \\\n  --output persistent://public/default/exclamation-output \\\n  --name exclamation\n\n")),(0,l.kt)("p",null,"You should see ",(0,l.kt)("inlineCode",{parentName:"p"},"Created successfully")," in the output. Now, let's see a list of functions running in our cluster:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions list \\\n  --tenant public \\\n  --namespace default\n\n")),(0,l.kt)("p",null,"We should see just the ",(0,l.kt)("inlineCode",{parentName:"p"},"exclamation")," function listed there. We can also check the status of our deployed function using the ",(0,l.kt)("inlineCode",{parentName:"p"},"getstatus")," command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions getstatus \\\n  --tenant public \\\n  --namespace default \\\n  --name exclamation\n\n")),(0,l.kt)("p",null,"You should see this JSON output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "functionStatusList": [\n    {\n      "running": true,\n      "instanceId": "0"\n    }\n  ]\n}\n\n')),(0,l.kt)("p",null,"As we can see, (a) the instance is currently running and (b) there is one instance, with an ID of 0, running. We can get other information about the function (topics, tenant, namespace, etc.) using the ",(0,l.kt)("inlineCode",{parentName:"p"},"get")," command instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"getstatus"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions get \\\n  --tenant public \\\n  --namespace default \\\n  --name exclamation\n\n")),(0,l.kt)("p",null,"You should see this JSON output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "tenant": "public",\n  "namespace": "default",\n  "name": "exclamation",\n  "className": "org.apache.pulsar.functions.api.examples.ExclamationFunction",\n  "output": "persistent://public/default/exclamation-output",\n  "autoAck": true,\n  "inputs": [\n    "persistent://public/default/exclamation-input"\n  ],\n  "parallelism": 1\n}\n\n')),(0,l.kt)("p",null,"As we can see, the parallelism of the function is 1, meaning that only one instance of the function is running in our cluster. Let's update our function to a parallelism of 3 using the ",(0,l.kt)("inlineCode",{parentName:"p"},"update")," command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions update \\\n  --jar examples/api-examples.jar \\\n  --classname org.apache.pulsar.functions.api.examples.ExclamationFunction \\\n  --inputs persistent://public/default/exclamation-input \\\n  --output persistent://public/default/exclamation-output \\\n  --tenant public \\\n  --namespace default \\\n  --name exclamation \\\n  --parallelism 3\n\n")),(0,l.kt)("p",null,"You should see ",(0,l.kt)("inlineCode",{parentName:"p"},"Updated successfully")," in the output. If you run the ",(0,l.kt)("inlineCode",{parentName:"p"},"get")," command from above for the function, you can see that the parallelism has increased to 3, meaning that there are now three instances of the function running in our cluster:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "tenant": "public",\n  "namespace": "default",\n  "name": "exclamation",\n  "className": "org.apache.pulsar.functions.api.examples.ExclamationFunction",\n  "output": "persistent://public/default/exclamation-output",\n  "autoAck": true,\n  "inputs": [\n    "persistent://public/default/exclamation-input"\n  ],\n  "parallelism": 3\n}\n\n')),(0,l.kt)("p",null,"Finally, we can shut down our running function using the ",(0,l.kt)("inlineCode",{parentName:"p"},"delete")," command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions delete \\\n  --tenant public \\\n  --namespace default \\\n  --name exclamation\n\n")),(0,l.kt)("p",null,"If you see ",(0,l.kt)("inlineCode",{parentName:"p"},"Deleted successfully")," in the output, then you've successfully run, updated, and shut down a Pulsar Function running in cluster mode. Congrats! Now, let's go even further and run a brand new function in the next section."),(0,l.kt)("h2",{id:"writing-and-running-a-new-function"},"Writing and running a new function"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"In order to write and run the ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.2.0/functions-api#functions-for-python"},"Python")," function below, you'll need to install a few dependencies:")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ pip install pulsar-client\n\n\n"))),(0,l.kt)("p",null,"In the above examples, we ran and managed a pre-written Pulsar Function and saw how it worked. To really get our hands dirty, let's write and our own function from scratch, using the Python API. This simple function will also take a string as input but it will reverse the string and publish the resulting, reversed string to the specified topic."),(0,l.kt)("p",null,"First, create a new Python file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ touch reverse.py\n\n")),(0,l.kt)("p",null,"In that file, add the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\ndef process(input):\n    return input[::-1]\n\n")),(0,l.kt)("p",null,"Here, the ",(0,l.kt)("inlineCode",{parentName:"p"},"process")," method defines the processing logic of the Pulsar Function. It simply uses some Python slice magic to reverse each incoming string. Now, we can deploy the function using ",(0,l.kt)("inlineCode",{parentName:"p"},"create"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions create \\\n  --py reverse.py \\\n  --classname reverse \\\n  --inputs persistent://public/default/backwards \\\n  --output persistent://public/default/forwards \\\n  --tenant public \\\n  --namespace default \\\n  --name reverse\n\n")),(0,l.kt)("p",null,"If you see ",(0,l.kt)("inlineCode",{parentName:"p"},"Created successfully"),", the function is ready to accept incoming messages. Because the function is running in cluster mode, we can ",(0,l.kt)("strong",{parentName:"p"},"trigger")," the function using the ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.2.0/reference-pulsar-admin#trigger"},(0,l.kt)("inlineCode",{parentName:"a"},"trigger"))," command. This command will send a message that we specify to the function and also give us the function's output. Here's an example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'\n$ bin/pulsar-admin functions trigger \\\n  --name reverse \\\n  --tenant public \\\n  --namespace default \\\n  --trigger-value "sdrawrof won si tub sdrawkcab saw gnirts sihT"\n\n')),(0,l.kt)("p",null,"You should get this output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\nThis string was backwards but is now forwards\n\n")),(0,l.kt)("p",null,"Once again, success! We created a brand new Pulsar Function, deployed it in our Pulsar standalone cluster in ",(0,l.kt)("a",{parentName:"p",href:"#run-a-pulsar-function-in-cluster-mode"},"cluster mode")," and successfully triggered the function. If you're ready for more, check out one of these docs:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/2.2.0/functions-api"},"The Pulsar Functions API")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/2.2.0/functions-deploying"},"Deploying Pulsar Functions"))))}d.isMDXComponent=!0}}]);