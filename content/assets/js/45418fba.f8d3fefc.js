"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[4775],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4926:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={id:"client-cpp-2.9.4",title:"Client CPP 2.9.4",sidebar_label:"Client CPP 2.9.4"},o=void 0,l={unversionedId:"versioned/client-cpp-2.9.4",id:"versioned/client-cpp-2.9.4",title:"Client CPP 2.9.4",description:"What's Changed",source:"@site/release-notes/versioned/client-cpp-2.9.4.md",sourceDirName:"versioned",slug:"/versioned/client-cpp-2.9.4",permalink:"/release-notes/versioned/client-cpp-2.9.4",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/client-cpp-2.9.4.md",tags:[],version:"current",frontMatter:{id:"client-cpp-2.9.4",title:"Client CPP 2.9.4",sidebar_label:"Client CPP 2.9.4"}},c={},p=[{value:"What&#39;s Changed",id:"whats-changed",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"whats-changed"},"What's Changed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[fix][cpp]"," Wrong consumers size: execute ",(0,a.kt)("inlineCode",{parentName:"li"},"callback")," before executing ",(0,a.kt)("inlineCode",{parentName:"li"},"readerCreatedCallback_")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17629"},"#17629")),(0,a.kt)("li",{parentName:"ul"},"[fix][cpp]","[branch-2.9]"," zlib download path ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18127"},"#18127"))))}d.isMDXComponent=!0}}]);