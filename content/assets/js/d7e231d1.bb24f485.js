"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[2945],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||i;return r?n.createElement(d,l(l({ref:t},s),{},{components:r})):n.createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},31045:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={id:"client-cpp-2.8.3",title:"Client CPP 2.8.3",sidebar_label:"Client CPP 2.8.3"},l=void 0,o={unversionedId:"versioned/client-cpp-2.8.3",id:"versioned/client-cpp-2.8.3",title:"Client CPP 2.8.3",description:"- Fix GCC compilation failure caused by warning macro 14402",source:"@site/release-notes/versioned/client-cpp-2.8.3.md",sourceDirName:"versioned",slug:"/versioned/client-cpp-2.8.3",permalink:"/release-notes/versioned/client-cpp-2.8.3",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/client-cpp-2.8.3.md",tags:[],version:"current",frontMatter:{id:"client-cpp-2.8.3",title:"Client CPP 2.8.3",sidebar_label:"Client CPP 2.8.3"}},p={},c=[],s={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fix GCC compilation failure caused by warning macro ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14402"},"14402")),(0,a.kt)("li",{parentName:"ul"},"Fix pulsar client cpp build fail in gcc-4.8.5 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14053"},"14053")),(0,a.kt)("li",{parentName:"ul"},"Fix hasMessageAvailable returns wrong value for last message ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13883"},"13883")),(0,a.kt)("li",{parentName:"ul"},"Fix Version.h not found when CMake binary directory is customized ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13324"},"13324")),(0,a.kt)("li",{parentName:"ul"},"Fix in macOS CMake might find error boost-python libs path ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13193"},"13193"))))}m.isMDXComponent=!0}}]);