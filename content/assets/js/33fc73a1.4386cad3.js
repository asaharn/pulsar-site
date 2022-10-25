"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[69953],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>y});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(t),y=i,f=d["".concat(p,".").concat(y)]||d[y]||u[y]||o;return t?r.createElement(f,a(a({ref:n},s),{},{components:t})):r.createElement(f,a({ref:n},s))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},62885:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(87462),i=(t(67294),t(3905));const o={id:"functions-deploy-cluster-encryption",title:"Enable end-to-end-encryption",sidebar_label:"Enable end-to-end-encryption"},a=void 0,c={unversionedId:"functions-deploy-cluster-encryption",id:"functions-deploy-cluster-encryption",title:"Enable end-to-end-encryption",description:"To perform end-to-end encryption, you can specify --producer-config and --input-specs in the pulsar-admin CLI with the public and private key pair configured by the application. Only the consumers with a valid key can decrypt the encrypted messages.",source:"@site/docs/functions-deploy-cluster-encryption.md",sourceDirName:".",slug:"/functions-deploy-cluster-encryption",permalink:"/docs/next/functions-deploy-cluster-encryption",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/functions-deploy-cluster-encryption.md",tags:[],version:"current",frontMatter:{id:"functions-deploy-cluster-encryption",title:"Enable end-to-end-encryption",sidebar_label:"Enable end-to-end-encryption"},sidebar:"docsSidebar",previous:{title:"Enable parallel processing",permalink:"/docs/next/functions-deploy-cluster-parallelism"},next:{title:"Enable package management service",permalink:"/docs/next/functions-deploy-cluster-package"}},p={},l=[],s={toc:l};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To perform end-to-end ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/security-encryption"},"encryption"),", you can specify ",(0,i.kt)("inlineCode",{parentName:"p"},"--producer-config")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"--input-specs")," in the ",(0,i.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},(0,i.kt)("inlineCode",{parentName:"p"},"pulsar-admin"))," CLI with the public and private key pair configured by the application. Only the consumers with a valid key can decrypt the encrypted messages. "),(0,i.kt)("p",null,"The encryption/decryption relevant configuration ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/functions-cli"},(0,i.kt)("inlineCode",{parentName:"a"},"CryptoConfig"))," is included in both ",(0,i.kt)("inlineCode",{parentName:"p"},"ProducerConfig")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"inputSpecs"),". The specific configurable fields about ",(0,i.kt)("inlineCode",{parentName:"p"},"CryptoConfig")," are as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"public class CryptoConfig {\n    private String cryptoKeyReaderClassName;\n    private Map<String, Object> cryptoKeyReaderConfig;\n\n    private String[] encryptionKeys;\n    private ProducerCryptoFailureAction producerCryptoFailureAction;\n\n    private ConsumerCryptoFailureAction consumerCryptoFailureAction;\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"producerCryptoFailureAction")," defines the action that a producer takes if it fails to encrypt the data. Available options are ",(0,i.kt)("inlineCode",{parentName:"li"},"FAIL")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"SEND"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"consumerCryptoFailureAction")," defines the action that a consumer takes if it fails to decrypt the recieved data. Available options are ",(0,i.kt)("inlineCode",{parentName:"li"},"FAIL"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"DISCARD"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"CONSUME"),".")),(0,i.kt)("p",null,"For more information about these options, refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/client-libraries-java#configure-producer"},"producer configurations")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/client-libraries-java#configure-consumer"},"consumer configurations"),"."))}u.isMDXComponent=!0}}]);