"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[9701],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return b}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=s(r),b=o,d=l["".concat(c,".").concat(b)]||l[b]||h[b]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=l;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},37953:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return h},toc:function(){return l}});var n=r(87462),o=r(63366),a=r(67294),i=r(3905),u=function(e){var t=(0,a.useState)([]),r=t[0],n=t[1];(0,a.useEffect)((function(){var t,o=null!=(t=e.repo)?t:"apache/incubator-shenyu";r&&0!==r.length||fetch("https://api.github.com/repos/"+o+"/contributors?page=1&per_page=10000").then((function(e){return e.json()})).then((function(e){n(e)}))}));var o="<table>";return r&&Array.isArray(r)&&r.forEach((function(e,t){t%5==0&&(t>0&&(o+="</tr>"),o+="<tr>"),o+='<td>\n                        <a href="'+e.html_url+'" target="_blank">\n                            <img src="'+e.avatar_url+'" height="20" /> \n                            <span style={{ whiteSpace: \'nowrap\' }}>@'+e.login+"</span>\n                        </a>\n                    </td>",t===r.length-1&&(o+="</tr>")})),o+="</table>",a.createElement("div",{dangerouslySetInnerHTML:{__html:o}})},c=["components"],s={title:"Contributors",sidebar_position:10,description:"Apache ShenYu Contributors",author:"xiaoyu",loadContributorList:!0,categories:"Apache ShenYu",tags:["ContributorList"]},p=void 0,h={unversionedId:"contributors",id:"contributors",isDocsHomePage:!1,title:"Contributors",description:"Apache ShenYu Contributors",source:"@site/community/9-contributors.mdx",sourceDirName:".",slug:"/contributors",permalink:"/community/contributors",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/community/9-contributors.mdx",version:"current",lastUpdatedBy:"Zhang Yonglun",lastUpdatedAt:1647505120,formattedLastUpdatedAt:"3/17/2022",sidebarPosition:10,frontMatter:{title:"Contributors",sidebar_position:10,description:"Apache ShenYu Contributors",author:"xiaoyu",loadContributorList:!0,categories:"Apache ShenYu",tags:["ContributorList"]},sidebar:"community",previous:{title:"Sign ICLA Guide",permalink:"/community/icla"},next:{title:"User Registration",permalink:"/community/user-registration"}},l=[{value:"Apache ShenYu",id:"apache-shenyu",children:[]},{value:"Apache ShenYu Dashboard",id:"apache-shenyu-dashboard",children:[]},{value:"Apache ShenYu Website",id:"apache-shenyu-website",children:[]}],b={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Hundreds of people have contributed articles and code to Apache ShenYu so far, thank you very much!"),(0,i.kt)("p",null,"If you want to contribute, you can go to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/"},"Apache ShenYu")," and fork it."),(0,i.kt)("h3",{id:"apache-shenyu"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/apache/incubator-shenyu"},"Apache ShenYu")),(0,i.kt)(u,{repo:"apache/incubator-shenyu",mdxType:"Contributors"}),(0,i.kt)("h3",{id:"apache-shenyu-dashboard"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/apache/incubator-shenyu-dashboard"},"Apache ShenYu Dashboard")),(0,i.kt)(u,{repo:"apache/incubator-shenyu-dashboard",mdxType:"Contributors"}),(0,i.kt)("h3",{id:"apache-shenyu-website"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/apache/incubator-shenyu-website"},"Apache ShenYu Website")),(0,i.kt)(u,{repo:"apache/incubator-shenyu-website",mdxType:"Contributors"}))}d.isMDXComponent=!0}}]);