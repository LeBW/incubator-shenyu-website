"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[5076],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=i,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},22177:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],c={sidebar_position:2,title:"Configuration Flow Introduction",keywords:["soul"],description:"Configuration Flow Introduction"},u=void 0,l={unversionedId:"design/config",id:"version-2.3.0/design/config",isDocsHomePage:!1,title:"Configuration Flow Introduction",description:"Configuration Flow Introduction",source:"@site/versioned_docs/version-2.3.0/design/config.md",sourceDirName:"design",slug:"/design/config",permalink:"/docs/2.3.0/design/config",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.3.0/design/config.md",version:"2.3.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Configuration Flow Introduction",keywords:["soul"],description:"Configuration Flow Introduction"},sidebar:"version-2.3.0/tutorialSidebar",previous:{title:"Database Design",permalink:"/docs/2.3.0/design/database-design"},next:{title:"Data Synchronization Design",permalink:"/docs/2.3.0/design/data-sync"}},s=[{value:"Description",id:"description",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Feature",id:"feature",children:[]}],d={toc:s};function p(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This article introduces the flow of synchronizing to the gateway after the data operation of admin backend system.")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"User can arbitrary modify data in soul-admin backend and this will immediately synchronize to the jvm memory of the gateway.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Synchronize the plugin data of soul,selector,rule data, metadata, signature data, etc.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"All the rules of plugin selectors are dynamically configured and take effect immediately without restarting the service.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Data Flow Chart:\n",(0,o.kt)("img",{parentName:"p",src:"https://yu199195.github.io/images/soul/plugin-data.png",alt:null})))),(0,o.kt)("h2",{id:"feature"},"Feature"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"All the configurations of user can be dynamically updated, there is no need to restart the service for any modification."),(0,o.kt)("li",{parentName:"ul"},"Local cache is used to provide efficient performance during high concurrency.")))}p.isMDXComponent=!0}}]);