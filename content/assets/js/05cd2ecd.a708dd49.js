"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[12189],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=i,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},91192:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const o={id:"testing-licenses",title:"License Format"},a=void 0,c={unversionedId:"testing-licenses",id:"testing-licenses",title:"License Format",description:"All code contributed to Pulsar will be licensed under Apache License 2.0. You need to ensure every new files you are adding have the right license header. You can add license header to your files by running following command:",source:"@site/contribute/testing-licenses.md",sourceDirName:".",slug:"/testing-licenses",permalink:"/contribute/testing-licenses",draft:!1,editUrl:"https://github.com/apache/pulsar-site/tree/main/site2/website-next/contribute/testing-licenses.md",tags:[],version:"current",lastUpdatedBy:"tison",lastUpdatedAt:1671114739,formattedLastUpdatedAt:"Dec 15, 2022",frontMatter:{id:"testing-licenses",title:"License Format"},sidebar:"sidebarDevelopment",previous:{title:"Testing and CI",permalink:"/contribute/category/testing-and-ci"},next:{title:"Personal CI",permalink:"/contribute/personal-ci"}},s={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"All code contributed to Pulsar will be licensed under ",(0,i.kt)("a",{parentName:"p",href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache License 2.0"),". You need to ensure every new files you are adding have the right license header. You can add license header to your files by running following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mvn initialize license:format\n")))}p.isMDXComponent=!0}}]);