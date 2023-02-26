"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[6410],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},91839:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={id:"concepts-replication",title:"Geo Replication",sidebar_label:"Geo Replication",original_id:"concepts-replication"},a=void 0,c={unversionedId:"concepts-replication",id:"version-2.5.1/concepts-replication",title:"Geo Replication",description:"Pulsar enables messages to be produced and consumed in different geo-locations. For instance, your application may be publishing data in one region or market and you would like to process it for consumption in other regions or markets. Geo-replication in Pulsar enables you to do that.",source:"@site/versioned_docs/version-2.5.1/concepts-replication.md",sourceDirName:".",slug:"/concepts-replication",permalink:"/docs/2.5.1/concepts-replication",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.5.1/concepts-replication.md",tags:[],version:"2.5.1",frontMatter:{id:"concepts-replication",title:"Geo Replication",sidebar_label:"Geo Replication",original_id:"concepts-replication"},sidebar:"version-2.5.1/docsSidebar",previous:{title:"Clients",permalink:"/docs/2.5.1/concepts-clients"},next:{title:"Multi Tenancy",permalink:"/docs/2.5.1/concepts-multi-tenancy"}},s={},l=[],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pulsar enables messages to be produced and consumed in different geo-locations. For instance, your application may be publishing data in one region or market and you would like to process it for consumption in other regions or markets. ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.5.1/administration-geo"},"Geo-replication")," in Pulsar enables you to do that."))}d.isMDXComponent=!0}}]);