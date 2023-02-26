"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[8166],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(a),h=n,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return a?r.createElement(m,s(s({ref:t},c),{},{components:a})):r.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var d=2;d<o;d++)s[d]=a[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},79974:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const o={id:"administration-dashboard",title:"The Pulsar dashboard",sidebar_label:"Dashboard",original_id:"administration-dashboard"},s=void 0,i={unversionedId:"administration-dashboard",id:"version-2.3.1/administration-dashboard",title:"The Pulsar dashboard",description:"The Pulsar dashboard is a web application that enables users to monitor current stats for all topics in tabular form.",source:"@site/versioned_docs/version-2.3.1/administration-dashboard.md",sourceDirName:".",slug:"/administration-dashboard",permalink:"/docs/2.3.1/administration-dashboard",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.3.1/administration-dashboard.md",tags:[],version:"2.3.1",frontMatter:{id:"administration-dashboard",title:"The Pulsar dashboard",sidebar_label:"Dashboard",original_id:"administration-dashboard"},sidebar:"version-2.3.1/docsSidebar",previous:{title:"Geo-replication",permalink:"/docs/2.3.1/administration-geo"},next:{title:"Pulsar statistics",permalink:"/docs/2.3.1/administration-stats"}},l={},d=[{value:"Install",id:"install",level:2},{value:"Known issues",id:"known-issues",level:3}],c={toc:d},p="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Pulsar dashboard is a web application that enables users to monitor current stats for all ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.3.1/reference-terminology#topic"},"topics")," in tabular form."),(0,n.kt)("p",null,"The dashboard is a data collector that polls stats from all the brokers in a Pulsar instance (across multiple clusters) and stores all the information in a ",(0,n.kt)("a",{parentName:"p",href:"https://www.postgresql.org/"},"PostgreSQL")," database."),(0,n.kt)("p",null,"A ",(0,n.kt)("a",{parentName:"p",href:"https://www.djangoproject.com"},"Django")," web app is used to render the collected data."),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)("p",null,"The easiest way to use the dashboard is to run it inside a ",(0,n.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker"},"Docker")," container. A ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//dashboard/Dockerfile"},"Dockerfile")," to generate the image is provided."),(0,n.kt)("p",null,"To generate the Docker image:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ docker build -t apachepulsar/pulsar-dashboard dashboard\n\n")),(0,n.kt)("p",null,"To run the dashboard:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ SERVICE_URL=http://broker.example.com:8080/\n$ docker run -p 80:80 \\\n  -e SERVICE_URL=$SERVICE_URL \\\n  apachepulsar/pulsar-dashboard\n\n")),(0,n.kt)("p",null,"If token authentication is enabled:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Provided token should have super-user access. ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ SERVICE_URL=http://broker.example.com:8080/\n$ JWT_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\n$ docker run -p 80:80 \\\n  -e SERVICE_URL=$SERVICE_URL \\\n  -e JWT_TOKEN=$JWT_TOKEN \\\n  apachepulsar/pulsar-dashboard\n\n")),(0,n.kt)("p",null,"You need to specify only one service URL for a Pulsar cluster. Internally, the collector will figure out all the existing clusters and the brokers from where it needs to pull the metrics. If you're connecting the dashboard to Pulsar running in standalone mode, the URL will be ",(0,n.kt)("inlineCode",{parentName:"p"},"http://<broker-ip>:8080")," by default. ",(0,n.kt)("inlineCode",{parentName:"p"},"<broker-ip>")," is the ip address or hostname of the machine running Pulsar standalone. The ip address or hostname should be accessible from the docker instance running dashboard."),(0,n.kt)("p",null,"Once the Docker container is running, the web dashboard will be accessible via ",(0,n.kt)("inlineCode",{parentName:"p"},"localhost")," or whichever host is being used by Docker."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"SERVICE_URL")," that the dashboard uses needs to be reachable from inside the Docker container")),(0,n.kt)("p",null,"If the Pulsar service is running in standalone mode in ",(0,n.kt)("inlineCode",{parentName:"p"},"localhost"),", the ",(0,n.kt)("inlineCode",{parentName:"p"},"SERVICE_URL")," would have to\nbe the IP of the machine."),(0,n.kt)("p",null,"Similarly, given the Pulsar standalone advertises itself with localhost by default, we need to\nexplicitly set the advertise address to the host IP. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar standalone --advertised-address 1.2.3.4\n\n")),(0,n.kt)("h3",{id:"known-issues"},"Known issues"),(0,n.kt)("p",null,"Only Pulsar Token ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.3.1/security-overview#authentication-providers"},"authentication"),"  is supported as of now."))}u.isMDXComponent=!0}}]);