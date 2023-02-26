"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[78041],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,h=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return r?a.createElement(h,l(l({ref:t},u),{},{components:r})):a.createElement(h,l({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},48649:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={id:"helm-upgrade",title:"Upgrade Pulsar Helm release",sidebar_label:"Upgrade",original_id:"helm-upgrade"},l=void 0,i={unversionedId:"helm-upgrade",id:"version-2.7.2/helm-upgrade",title:"Upgrade Pulsar Helm release",description:"Before upgrading your Pulsar installation, you need to check the change log corresponding to the specific release you want to upgrade to and look for any release notes that might pertain to the new Pulsar helm chart version.",source:"@site/versioned_docs/version-2.7.2/helm-upgrade.md",sourceDirName:".",slug:"/helm-upgrade",permalink:"/docs/2.7.2/helm-upgrade",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.2/helm-upgrade.md",tags:[],version:"2.7.2",frontMatter:{id:"helm-upgrade",title:"Upgrade Pulsar Helm release",sidebar_label:"Upgrade",original_id:"helm-upgrade"},sidebar:"version-2.7.2/docsSidebar",previous:{title:"Deployment",permalink:"/docs/2.7.2/helm-deploy"},next:{title:"Required Tools",permalink:"/docs/2.7.2/helm-tools"}},p={},s=[{value:"Steps",id:"steps",level:2}],u={toc:s},m="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Before upgrading your Pulsar installation, you need to check the change log corresponding to the specific release you want to upgrade to and look for any release notes that might pertain to the new Pulsar helm chart version."),(0,n.kt)("p",null,"We also recommend that you need to provide all values using the ",(0,n.kt)("inlineCode",{parentName:"p"},"helm upgrade --set key=value")," syntax or the ",(0,n.kt)("inlineCode",{parentName:"p"},"-f values.yml")," instead of using ",(0,n.kt)("inlineCode",{parentName:"p"},"--reuse-values"),", because some of the current values might be deprecated."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"You can retrieve your previous ",(0,n.kt)("inlineCode",{parentName:"p"},"--set")," arguments cleanly, with ",(0,n.kt)("inlineCode",{parentName:"p"},"helm get values <release-name>"),". If you direct this into a file (",(0,n.kt)("inlineCode",{parentName:"p"},"helm get values <release-name> > pulsar.yml"),"), you can safely pass this file through ",(0,n.kt)("inlineCode",{parentName:"p"},"-f"),", namely ",(0,n.kt)("inlineCode",{parentName:"p"},"helm upgrade <release-name> apache/pulsar -f pulsar.yaml"),". This safely replaces the behavior of ",(0,n.kt)("inlineCode",{parentName:"p"},"--reuse-values"),".")),(0,n.kt)("h2",{id:"steps"},"Steps"),(0,n.kt)("p",null,"To upgrade Apache Pulsar to a newer version, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check the change log for the specific version you would like to upgrade to.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go through ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.7.2/helm-deploy"},"deployment documentation")," step by step.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Extract your previous ",(0,n.kt)("inlineCode",{parentName:"p"},"--set")," arguments with the following command."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\nhelm get values <release-name> > pulsar.yaml\n\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Decide all the values you need to set.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Perform the upgrade, with all ",(0,n.kt)("inlineCode",{parentName:"p"},"--set")," arguments extracted in step 4."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\nhelm upgrade <release-name> apache/pulsar \\\n    --version <new version> \\\n    -f pulsar.yaml \\\n    --set ...\n\n")))))}c.isMDXComponent=!0}}]);