"use strict";(self.webpackChunkcircuits=self.webpackChunkcircuits||[]).push([[51591],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64039:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={sidebar_position:160,tags:["Chip"]},o="For Each",i={unversionedId:"documentation/chips/744e5311-6cc7-4130-962e-fe050a475d43",id:"documentation/chips/744e5311-6cc7-4130-962e-fe050a475d43",title:"For Each",description:"Iterates over the input list. The loop exec fires for each element in the list. The Done exec fires once the end of the list has been reached.",source:"@site/docs/documentation/chips/744e5311-6cc7-4130-962e-fe050a475d43.mdx",sourceDirName:"documentation/chips",slug:"/documentation/chips/744e5311-6cc7-4130-962e-fe050a475d43",permalink:"/docs/documentation/chips/744e5311-6cc7-4130-962e-fe050a475d43",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation/chips/744e5311-6cc7-4130-962e-fe050a475d43.mdx",tags:[{label:"Chip",permalink:"/docs/tags/chip"}],version:"current",sidebarPosition:160,frontMatter:{sidebar_position:160,tags:["Chip"]},sidebar:"tutorialSidebar",previous:{title:"Room Fog Modify",permalink:"/docs/documentation/chips/471f7cf9-a4e4-4162-a6e9-d594b6ec28ef"},next:{title:"For",permalink:"/docs/documentation/chips/8f945c22-988b-45d2-b7f2-409ba304fef4"}},c={},s=[{value:"Uses",id:"uses",level:3},{value:"Tips",id:"tips",level:3},{value:"Issues",id:"issues",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"for-each"},"For Each"),(0,a.kt)("p",null,"Iterates over the input list. The loop exec fires for each element in the list. The Done exec fires once the end of the list has been reached."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Input Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Input Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"No name.")),(0,a.kt)("td",{parentName:"tr",align:null},"exec")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Items"),(0,a.kt)("td",{parentName:"tr",align:null},"List","[any]")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Output Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Output Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Loop"),(0,a.kt)("td",{parentName:"tr",align:null},"exec")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Item"),(0,a.kt)("td",{parentName:"tr",align:null},"any")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Done"),(0,a.kt)("td",{parentName:"tr",align:null},"exec")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Properties"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Is beta required?"),(0,a.kt)("th",null,"\u274c")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Is this chip a trolling risk?"),(0,a.kt)("th",null,"\u274c")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Chip UUPD"),(0,a.kt)("th",null,"744e5311-6cc7-4130-962e-fe050a475d43"))))))),(0,a.kt)("h3",{id:"uses"},"Uses"),(0,a.kt)("p",null,"None so far!"),(0,a.kt)("h3",{id:"tips"},"Tips"),(0,a.kt)("p",null,"None so far!"),(0,a.kt)("h3",{id:"issues"},"Issues"),(0,a.kt)("p",null,"None so far!"))}d.isMDXComponent=!0}}]);