"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[96582],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,d=u["".concat(s,".").concat(h)]||u[h]||m[h]||i;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},88154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={id:"document-preview",title:"Content Preview"},o=void 0,l={unversionedId:"document-preview",id:"document-preview",title:"Content Preview",description:"This guide explains why and how to preview Pulsar content locally with detailed steps and various examples.",source:"@site/contribute/document-preview.md",sourceDirName:".",slug:"/document-preview",permalink:"/contribute/document-preview",draft:!1,editUrl:"https://github.com/apache/pulsar-site/tree/main/site2/website-next/contribute/document-preview.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1671286151,formattedLastUpdatedAt:"Dec 17, 2022",frontMatter:{id:"document-preview",title:"Content Preview"},sidebar:"sidebarDevelopment",previous:{title:"Writing Syntax",permalink:"/contribute/document-syntax"},next:{title:"Releases",permalink:"/contribute/category/releases"}},s={},p=[{value:"Why preview changes locally?",id:"why-preview-changes-locally",level:2},{value:"How to preview changes locally?",id:"how-to-preview-changes-locally",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Preview documentation changes",id:"preview-documentation-changes",level:3},{value:"Preview Java API document changes",id:"preview-java-api-document-changes",level:3},{value:"Preview website changes",id:"preview-website-changes",level:3},{value:"Stop preview",id:"stop-preview",level:3}],c={toc:p};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide explains why and how to preview Pulsar content locally with detailed steps and various examples."),(0,r.kt)("h2",{id:"why-preview-changes-locally"},"Why preview changes locally?"),(0,r.kt)("p",null,"It is ",(0,r.kt)("strong",{parentName:"p"},"required")," to preview your changes locally and attach the preview screenshots in your PR description. It brings many benefits, including but not limited to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can test your writings. It's a way to check whether you use the correct ",(0,r.kt)("a",{parentName:"li",href:"/contribute/document-syntax"},"syntax")," and debug issues. You ",(0,r.kt)("strong",{parentName:"li"},"must ensure")," docs can be compiled and published correctly."),(0,r.kt)("li",{parentName:"ul"},"You can get your PR merged more quickly. Reviewers know your changes clearly and can speed up the review process.")),(0,r.kt)("h2",{id:"how-to-preview-changes-locally"},"How to preview changes locally?"),(0,r.kt)("p",null,"Pulsar documentation is built using Docusaurus. To preview your changes as you edit the files, you can run a local development server that serves your website and reflect the latest changes."),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To verify docs are built correctly before submitting a contribution, you should set up your local environment to build and display the docs locally."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Node >= 16.14"),(0,r.kt)("li",{parentName:"ul"},"Yarn >= 1.5"),(0,r.kt)("li",{parentName:"ul"},"Although you can use Linux, macOS, or Windows to build locally the Pulsar documentation, macOS is the preferred build environment as it offers the most complete support for documentation building.")),(0,r.kt)("h3",{id:"preview-documentation-changes"},"Preview documentation changes"),(0,r.kt)("p",null,"Follow these steps to preview documentation changes on the ",(0,r.kt)("strong",{parentName:"p"},"master")," branch."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Change to the working directory:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd pulsar/site2/website\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the following command to preview changes:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Preview changes on latest stable version\nsh start.sh\n\n# Preview changes on a specific version version\nsh start.sh 2.10.x \n\n# Preview changes on multiple versions\nsh start.sh 2.10.x 2.9.x ...\n")),(0,r.kt)("p",{parentName:"li"},"By default, a browser window will open at http://localhost:3000 to show the changes."),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you want to preview changes on ",(0,r.kt)("inlineCode",{parentName:"p"},"master"),", change the URL to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/docs/next"),".")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"alt_text",src:n(73183).Z,width:"936",height:"678"})))),(0,r.kt)("h3",{id:"preview-java-api-document-changes"},"Preview Java API document changes"),(0,r.kt)("p",null,"Follow these steps to preview Java API document changes on the ",(0,r.kt)("strong",{parentName:"p"},"master")," branch."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Change to the working directory:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd pulsar/site2/tools\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the following command to generate the ",(0,r.kt)("inlineCode",{parentName:"p"},".html")," files:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sh javadoc-gen.sh\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the target ",(0,r.kt)("inlineCode",{parentName:"p"},".html")," file to preview the updates."),(0,r.kt)("p",{parentName:"li"},"Supposed you change JavaDoc for ",(0,r.kt)("inlineCode",{parentName:"p"},"ConsumerBuilder.java"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd generated-site/api/client/{version}/org/apache/pulsar/client/api/\nopen ConsumerBuilder.html\n")))),(0,r.kt)("h3",{id:"preview-website-changes"},"Preview website changes"),(0,r.kt)("p",null,"Pulsar website changes refer to all the changes made to the Pulsar website, including but not limited to the following pages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"pathname:///release-notes/"},"Release Notes page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"pathname:///ecosystem"},"Ecosystem page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"pathname:///case-studies"},"Case studies page")),(0,r.kt)("li",{parentName:"ul"},"...")),(0,r.kt)("p",null,"Follow these steps to preview the website changes."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Change to the working directory:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd pulsar-site/site2/website-next\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the following command to preview changes:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," # Preview changes on master\n ./preview.sh current\n\n # preview changes on a specific version\n ./preview.sh 2.10.x\n\n # preview changes on multiple versions\n ./preview.sh 2.10.x 2.9.x ...\n")))),(0,r.kt)("h3",{id:"stop-preview"},"Stop preview"),(0,r.kt)("p",null,"Switch to your command-line interface and press ",(0,r.kt)("strong",{parentName:"p"},"Control+C"),"."))}u.isMDXComponent=!0},73183:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/website-preview-3e284d8b7c2292bcb606955218a65a23.png"}}]);