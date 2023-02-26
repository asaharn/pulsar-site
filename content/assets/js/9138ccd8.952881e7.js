"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[2134],{3905:(e,a,t)=>{t.d(a,{Zo:()=>o,kt:()=>g});var r=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,l=function(e,a){if(null==e)return{};var t,r,l={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=r.createContext({}),s=function(e){var a=r.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):n(n({},a),e)),t},o=function(e){var a=s(e.components);return r.createElement(u.Provider,{value:a},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},c=r.forwardRef((function(e,a){var t=e.components,l=e.mdxType,p=e.originalType,u=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),m=s(t),c=l,g=m["".concat(u,".").concat(c)]||m[c]||h[c]||p;return t?r.createElement(g,n(n({ref:a},o),{},{components:t})):r.createElement(g,n({ref:a},o))}));function g(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var p=t.length,n=new Array(p);n[0]=c;var i={};for(var u in a)hasOwnProperty.call(a,u)&&(i[u]=a[u]);i.originalType=e,i[m]="string"==typeof e?e:l,n[1]=i;for(var s=2;s<p;s++)n[s]=t[s];return r.createElement.apply(null,n)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},58365:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>n,default:()=>h,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var r=t(87462),l=(t(67294),t(3905));const p={id:"pulsar-manager",title:"Pulsar Manager Release Notes",sidebar_label:"Pulsar Manager Release Notes"},n=void 0,i={unversionedId:"pulsar-manager",id:"pulsar-manager",title:"Pulsar Manager Release Notes",description:"0.3.0 &mdash; 2022-05-25",source:"@site/release-notes/pulsar-manager.md",sourceDirName:".",slug:"/pulsar-manager",permalink:"/release-notes/pulsar-manager",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/pulsar-manager.md",tags:[],version:"current",frontMatter:{id:"pulsar-manager",title:"Pulsar Manager Release Notes",sidebar_label:"Pulsar Manager Release Notes"},sidebar:"releaseNote",previous:{title:"C# Client",permalink:"/release-notes/client-cs"}},u={},s=[{value:'0.3.0 \u2014 2022-05-25 <a id="0.3.0"></a>',id:"030--2022-05-25-",level:2},{value:'0.2.0 \u2014 2020-09-28 <a id="0.2.0"></a>',id:"020--2020-09-28-",level:2},{value:'0.1.0 \u2014 2019-11-25 <a id="0.1.0"></a>',id:"010--2019-11-25-",level:2}],o={toc:s},m="wrapper";function h(e){let{components:a,...t}=e;return(0,l.kt)(m,(0,r.Z)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"030--2022-05-25-"},"0.3.0 ","\u2014"," 2022-05-25 ",(0,l.kt)("a",{id:"0.3.0"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fix MySQL schema field token error ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/339"},"PR-339")),(0,l.kt)("li",{parentName:"ul"},"Fix the bugs in topics list page and search topics ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/342"},"PR-342")),(0,l.kt)("li",{parentName:"ul"},"Fix the issue of Swagger does not work ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/369"},"PR-369")),(0,l.kt)("li",{parentName:"ul"},"Add offload threshold input ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/375"},"PR-375")),(0,l.kt)("li",{parentName:"ul"},"Add dashboard service for aggregated information collection ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/326"},"PR-326")),(0,l.kt)("li",{parentName:"ul"},"Add multi bookie cluster support ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/388"},"PR-388")),(0,l.kt)("li",{parentName:"ul"},"Fix the bug that admin roles cannot be deleted ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/397"},"PR-397")),(0,l.kt)("li",{parentName:"ul"},"Add Filtering support for tenant/namespace/topic ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/440"},"PR-440")),(0,l.kt)("li",{parentName:"ul"},"Fix Log4J security vulnerabilities ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/438"},"PR-438")),(0,l.kt)("li",{parentName:"ul"},"Allow user to assign tenant as resource to role ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/436"},"PR-436")),(0,l.kt)("li",{parentName:"ul"},"Add support for Casdoor ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/446"},"PR-446")),(0,l.kt)("li",{parentName:"ul"},"Fix unload namespace error ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/386"},"PR-386"))),(0,l.kt)("h2",{id:"020--2020-09-28-"},"0.2.0 ","\u2014"," 2020-09-28 ",(0,l.kt)("a",{id:"0.2.0"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Support multiple addresses for the broker stats ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/306"},"PR-306"),"."),(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"PulsarAdmin")," instead of ",(0,l.kt)("inlineCode",{parentName:"li"},"HttpUti"),"l in ",(0,l.kt)("inlineCode",{parentName:"li"},"BrokerStatsServiceImpl")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/315"},"PR-315"),"."),(0,l.kt)("li",{parentName:"ul"},"Serve frontend directly from Pulsar Manager backend process ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/288"},"PR-288"),"."),(0,l.kt)("li",{parentName:"ul"},"Support docker for JWT ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/218"},"PR-218"),"."),(0,l.kt)("li",{parentName:"ul"},"Support sub and unsub operations ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/240"},"PR-240"),"."),(0,l.kt)("li",{parentName:"ul"},"Support peeking messages from the Pulsar broker ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/241"},"PR-241"),"."),(0,l.kt)("li",{parentName:"ul"},"Support BookKeeper visual manager 1.2.0 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/300"},"PR-300"),"."),(0,l.kt)("li",{parentName:"ul"},"Support forwarding messages through HTTPS ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/258"},"PR-258"),"."),(0,l.kt)("li",{parentName:"ul"},"Support displaying stats for tenants and namespaces ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/243"},"PR-243"),"."),(0,l.kt)("li",{parentName:"ul"},"Add a configuration file for the backend service of Pulsar manager ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/236"},"PR-236"),"."),(0,l.kt)("li",{parentName:"ul"},"Add default configurations for the environment ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/242"},"PR-242"),"."),(0,l.kt)("li",{parentName:"ul"},"Fixe an SQL syntax error ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/298"},"PR-298"),"."),(0,l.kt)("li",{parentName:"ul"},"Fix the issue that Pulsar Manager fail to process the request sent to the Pulsar proxy ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/281"},"PR-281"),"."),(0,l.kt)("li",{parentName:"ul"},"Change the default port and replace the request URI ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/316"},"PR-316"),".")),(0,l.kt)("h2",{id:"010--2019-11-25-"},"0.1.0 ","\u2014"," 2019-11-25 ",(0,l.kt)("a",{id:"0.1.0"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Remove streamnative from the project ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/213"},"PR-213"),"."),(0,l.kt)("li",{parentName:"ul"},"Add license file for pulsar-manager ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/209"},"PR-209"),"."),(0,l.kt)("li",{parentName:"ul"},"Support management of jwt for pulsar-manager ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/205"},"PR-205"),"."),(0,l.kt)("li",{parentName:"ul"},"Support redirect.scheme ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/204"},"PR-204"),"."),(0,l.kt)("li",{parentName:"ul"},"Fix reset cursor by time ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/179"},"PR-179"),"."),(0,l.kt)("li",{parentName:"ul"},"Fix wrong broker display error ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/187"},"PR-187"),"."),(0,l.kt)("li",{parentName:"ul"},"Remove dependency package jszip ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/189"},"PR-189"),"."),(0,l.kt)("li",{parentName:"ul"},"Add developer guide ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/186"},"PR-186"),"."),(0,l.kt)("li",{parentName:"ul"},"Keep table and column name fields lowercase ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/190"},"PR-190"),"."),(0,l.kt)("li",{parentName:"ul"},"Fix loggin level ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/191"},"PR-191"),"."),(0,l.kt)("li",{parentName:"ul"},"Fix wrong place for license scan badge ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/193"},"PR-193"),"."),(0,l.kt)("li",{parentName:"ul"},"Add support for HerdDB database ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/183"},"PR-183"),"."),(0,l.kt)("li",{parentName:"ul"},"Make default environment persistent ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/197"},"PR-197"),".")))}h.isMDXComponent=!0}}]);