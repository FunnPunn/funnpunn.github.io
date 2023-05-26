"use strict";(self.webpackChunkcircuits=self.webpackChunkcircuits||[]).push([[89358],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,b=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(b,l(l({ref:t},d),{},{components:n})):r.createElement(b,l({ref:t},d))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},480:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:82,tags:["Chip"]},l="Collision Data Get Player",o={unversionedId:"documentation/chips/2729e8db-62d1-4f9e-b076-74f27cd43332",id:"documentation/chips/2729e8db-62d1-4f9e-b076-74f27cd43332",title:"Collision Data Get Player",description:'Gets player of a collision data (or null for objects) returned from "Overlap Sphere" chip.',source:"@site/docs/documentation/chips/2729e8db-62d1-4f9e-b076-74f27cd43332.mdx",sourceDirName:"documentation/chips",slug:"/documentation/chips/2729e8db-62d1-4f9e-b076-74f27cd43332",permalink:"/docs/documentation/chips/2729e8db-62d1-4f9e-b076-74f27cd43332",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation/chips/2729e8db-62d1-4f9e-b076-74f27cd43332.mdx",tags:[{label:"Chip",permalink:"/docs/tags/chip"}],version:"current",sidebarPosition:82,frontMatter:{sidebar_position:82,tags:["Chip"]},sidebar:"tutorialSidebar",previous:{title:"Collision Data Get Object",permalink:"/docs/documentation/chips/8c8931da-1a8e-4164-a3a5-0f68db8cafb5"},next:{title:"Collision Data Get Position",permalink:"/docs/documentation/chips/5910618b-f862-49ce-9779-46130e47f985"}},s={},c=[{value:"Uses",id:"uses",level:3},{value:"Tips",id:"tips",level:3},{value:"Issues",id:"issues",level:3}],d={toc:c},p="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"collision-data-get-player"},"Collision Data Get Player"),(0,a.kt)("p",null,'Gets player of a collision data (or null for objects) returned from "Overlap Sphere" chip.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Example banner",src:n(34250).Z,width:"800",height:"316"})),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Input Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Input Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Target"),(0,a.kt)("td",{parentName:"tr",align:null},"collision data")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Output Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Output Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Player"),(0,a.kt)("td",{parentName:"tr",align:null},"player")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Properties"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Is beta required?"),(0,a.kt)("th",null,"\u274c")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Is this chip a trolling risk?"),(0,a.kt)("th",null,"\u274c")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Chip UUID"),(0,a.kt)("th",null,"2729e8db-62d1-4f9e-b076-74f27cd43332"))))))),(0,a.kt)("h3",{id:"uses"},"Uses"),(0,a.kt)("p",null,"None so far!"),(0,a.kt)("h3",{id:"tips"},"Tips"),(0,a.kt)("p",null,"None so far!"),(0,a.kt)("h3",{id:"issues"},"Issues"),(0,a.kt)("p",null,"None so far!"))}u.isMDXComponent=!0},34250:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjMxNS42IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdib3g9IjAgMCA4MDAgMzE1LjYiPjxwYXRoIGZpbGw9IiM4MTgwODEiIGQ9Ik0xNjAsIDQxIHYyNiBxMCwxMCwxMCwxMCBoMjk1LjYgcTEwLDAsMTAsLTEwIHYtMjYgaDMxNS42Ij48L3BhdGg+PHJlY3QgeD0iMTQ4IiB5PSI0OSIgd2lkdGg9IjIyIiBoZWlnaHQ9IjE1IiByeD0iMSIgZmlsbD0iI0Y1QzUxRiI+PC9yZWN0Pjx0ZXh0IHg9IjE3NiIgeT0iNjEuNSIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC1zaXplPSJtZWRpdW0iIGNsYXNzPSJ1d3VudHUiPlRhcmdldDwvdGV4dD48cmVjdCB4PSI0NjUuNiIgeT0iNDkiIHdpZHRoPSIyMiIgaGVpZ2h0PSIxNSIgcng9IjEiIGZpbGw9IiNGNUM1MUYiPjwvcmVjdD48dGV4dCB4PSI0NTkuNiIgeT0iNjEuNSIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJlbmQiIGZvbnQtc2l6ZT0ibWVkaXVtIiBjbGFzcz0idXd1bnR1Ij5QbGF5ZXI8L3RleHQ+PHBhdGggZD0iTTE2MCwgNDEgdi0zMSBxMCwtMTAsMTAsLTEwIGgyOTUuNiBxMTAsMCwxMCwxMCB2MzEgaC0zMTUuNiIgZmlsbD0iIzUyNTE1MiI+PC9wYXRoPjx0ZXh0IHg9IjMxNy44IiB5PSIyOS41IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxOHB4IiBjbGFzcz0iVXd1bnR1Ij5Db2xsaXNpb24gRGF0YSBHZXQgUGxheWVyPC90ZXh0Pjwvc3ZnPg=="}}]);