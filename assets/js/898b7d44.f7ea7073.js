"use strict";(self.webpackChunkcircuits=self.webpackChunkcircuits||[]).push([[56047],{3905:(e,t,i)=>{i.d(t,{Zo:()=>o,kt:()=>m});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function I(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?I(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):I(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},I=Object.keys(e);for(a=0;a<I.length;a++)i=I[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(e);for(a=0;a<I.length;a++)i=I[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var d=a.createContext({}),c=function(e){var t=a.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},o=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,I=e.originalType,d=e.parentName,o=r(e,["components","mdxType","originalType","parentName"]),p=c(i),u=n,m=p["".concat(d,".").concat(u)]||p[u]||s[u]||I;return i?a.createElement(m,l(l({ref:t},o),{},{components:i})):a.createElement(m,l({ref:t},o))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var I=i.length,l=new Array(I);l[0]=u;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r[p]="string"==typeof e?e:n,l[1]=r;for(var c=2;c<I;c++)l[c]=i[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},70418:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>s,frontMatter:()=>I,metadata:()=>r,toc:()=>c});var a=i(87462),n=(i(67294),i(3905));const I={sidebar_position:570,tags:["Chip"]},l="Spherecast",r={unversionedId:"documentation/chips/0ea23792-e987-459e-8cd7-c0c60f667e08",id:"documentation/chips/0ea23792-e987-459e-8cd7-c0c60f667e08",title:"Spherecast",description:"Fires an invisible sphere of the specified Radius from the Start Position, in the Direction specified. Returns true if any object or player is hit within the target Max Distance. Otherwise, returns false. You can configure the chip itself to ignore players or objects specifically.",source:"@site/docs/documentation/chips/0ea23792-e987-459e-8cd7-c0c60f667e08.mdx",sourceDirName:"documentation/chips",slug:"/documentation/chips/0ea23792-e987-459e-8cd7-c0c60f667e08",permalink:"/docs/documentation/chips/0ea23792-e987-459e-8cd7-c0c60f667e08",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation/chips/0ea23792-e987-459e-8cd7-c0c60f667e08.mdx",tags:[{label:"Chip",permalink:"/docs/tags/chip"}],version:"current",sidebarPosition:570,frontMatter:{sidebar_position:570,tags:["Chip"]},sidebar:"tutorialSidebar",previous:{title:"Respawn Point Set Active",permalink:"/docs/documentation/chips/bf3275dc-686f-4a63-87b7-5422a70cc4d2"},next:{title:"Stop Camera Shake",permalink:"/docs/documentation/chips/a06b802b-bb80-4f66-937e-3a764a419c4d"}},d={},c=[{value:"Uses",id:"uses",level:3},{value:"Tips",id:"tips",level:3},{value:"Issues",id:"issues",level:3}],o={toc:c},p="wrapper";function s(e){let{components:t,...I}=e;return(0,n.kt)(p,(0,a.Z)({},o,I,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spherecast"},"Spherecast"),(0,n.kt)("p",null,"Fires an invisible sphere of the specified Radius from the Start Position, in the Direction specified. Returns true if any object or player is hit within the target Max Distance. Otherwise, returns false. You can configure the chip itself to ignore players or objects specifically."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Example banner",src:i(29417).Z,width:"800",height:"268"})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Input Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Input Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Start Position"),(0,n.kt)("td",{parentName:"tr",align:null},"vector3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Radius"),(0,n.kt)("td",{parentName:"tr",align:null},"float")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Direction"),(0,n.kt)("td",{parentName:"tr",align:null},"vector3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Max Distance (m)"),(0,n.kt)("td",{parentName:"tr",align:null},"float")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Output Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Output Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Hit"),(0,n.kt)("td",{parentName:"tr",align:null},"bool")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Player"),(0,n.kt)("td",{parentName:"tr",align:null},"player")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Object"),(0,n.kt)("td",{parentName:"tr",align:null},"rec room object")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Distance"),(0,n.kt)("td",{parentName:"tr",align:null},"float")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Hit Position"),(0,n.kt)("td",{parentName:"tr",align:null},"vector3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Surface Normal"),(0,n.kt)("td",{parentName:"tr",align:null},"vector3")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Properties"),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Is beta required?"),(0,n.kt)("th",null,"\u274c")),(0,n.kt)("tr",null,(0,n.kt)("th",null,"Is this chip a trolling risk?"),(0,n.kt)("th",null,"\u274c")),(0,n.kt)("tr",null,(0,n.kt)("th",null,"Chip UUID"),(0,n.kt)("th",null,"0ea23792-e987-459e-8cd7-c0c60f667e08"))))))),(0,n.kt)("h3",{id:"uses"},"Uses"),(0,n.kt)("p",null,"None so far!"),(0,n.kt)("h3",{id:"tips"},"Tips"),(0,n.kt)("p",null,"None so far!"),(0,n.kt)("h3",{id:"issues"},"Issues"),(0,n.kt)("p",null,"None so far!"))}s.isMDXComponent=!0},29417:(e,t,i)=>{i.d(t,{Z:()=>a});const a="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjI2OC40IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdib3g9IjAgMCA4MDAgMjY4LjQiPjxwYXRoIGZpbGw9IiM4MTgwODEiIGQ9Ik0xNjAsIDQxIHYxNTEgcTAsMTAsMTAsMTAgaDI0OC4zOTk5OTk5OTk5OTk5OCBxMTAsMCwxMCwtMTAgdi0xNTEgaDI2OC40Ij48L3BhdGg+PHJlY3QgeD0iMTQ4IiB5PSI0OSIgd2lkdGg9IjIyIiBoZWlnaHQ9IjE1IiByeD0iMSIgZmlsbD0iI0Y1QzUxRiI+PC9yZWN0Pjx0ZXh0IHg9IjE3NiIgeT0iNjEuNSIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC1zaXplPSJtZWRpdW0iIGNsYXNzPSJ1d3VudHUiPlN0YXJ0IFBvc2l0aW9uPC90ZXh0PjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2RpXzI1NTZfMTkxMzIpIj48cmVjdCB4PSIxNDgiIHk9IjcwIiB3aWR0aD0iMjIiIGhlaWdodD0iMTUiIHJ4PSIxIiBmaWxsPSIjMTg2QkREIj48L3JlY3Q+PC9nPjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIxX2RpXzI1NTZfMTkxMzIpIj48cmVjdCB4PSI5NCIgeT0iNjYiIHdpZHRoPSI0NSIgaGVpZ2h0PSIyMyIgcng9IjEiIGZpbGw9IiMxODZCREQiPjwvcmVjdD48cmVjdCB4PSI5OCIgeT0iNzAuMDAxIiB3aWR0aD0iMzciIGhlaWdodD0iMTUiIHJ4PSIxIiBmaWxsPSIjODE4MDgxIj48L3JlY3Q+PC9nPjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIyX2RpXzI1NTZfMTkxMzIpIj48cmVjdCB4PSIxMzkiIHk9Ijc0IiB3aWR0aD0iOSIgaGVpZ2h0PSI3IiBmaWxsPSIjMTg2QkREIj48L3JlY3Q+PC9nPjx0ZXh0IHg9IjE3NiIgeT0iODIuNSIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC1zaXplPSJtZWRpdW0iIGNsYXNzPSJ1d3VudHUiPlJhZGl1czwvdGV4dD48cmVjdCB4PSIxNDgiIHk9IjkxIiB3aWR0aD0iMjIiIGhlaWdodD0iMTUiIHJ4PSIxIiBmaWxsPSIjRjVDNTFGIj48L3JlY3Q+PHRleHQgeD0iMTc2IiB5PSIxMDMuNSIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC1zaXplPSJtZWRpdW0iIGNsYXNzPSJ1d3VudHUiPkRpcmVjdGlvbjwvdGV4dD48ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9kaV8yNTU2XzE5MTMyKSI+PHJlY3QgeD0iMTQ4IiB5PSIxMTIiIHdpZHRoPSIyMiIgaGVpZ2h0PSIxNSIgcng9IjEiIGZpbGw9IiMxODZCREQiPjwvcmVjdD48L2c+PGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjFfZGlfMjU1Nl8xOTEzMikiPjxyZWN0IHg9Ijk0IiB5PSIxMDgiIHdpZHRoPSI0NSIgaGVpZ2h0PSIyMyIgcng9IjEiIGZpbGw9IiMxODZCREQiPjwvcmVjdD48cmVjdCB4PSI5OCIgeT0iMTEyLjAwMSIgd2lkdGg9IjM3IiBoZWlnaHQ9IjE1IiByeD0iMSIgZmlsbD0iIzgxODA4MSI+PC9yZWN0PjwvZz48ZyBmaWx0ZXI9InVybCgjZmlsdGVyMl9kaV8yNTU2XzE5MTMyKSI+PHJlY3QgeD0iMTM5IiB5PSIxMTYiIHdpZHRoPSI5IiBoZWlnaHQ9IjciIGZpbGw9IiMxODZCREQiPjwvcmVjdD48L2c+PHRleHQgeD0iMTc2IiB5PSIxMjQuNSIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC1zaXplPSJtZWRpdW0iIGNsYXNzPSJ1d3VudHUiPk1heCBEaXN0YW5jZSAobSk8L3RleHQ+PHJlY3QgeD0iNDE4LjQiIHk9IjQ5IiB3aWR0aD0iMjIiIGhlaWdodD0iMTUiIHJ4PSIxIiBmaWxsPSIjRUEyRTUwIj48L3JlY3Q+PHRleHQgeD0iNDEyLjQiIHk9IjYxLjUiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0iZW5kIiBmb250LXNpemU9Im1lZGl1bSIgY2xhc3M9InV3dW50dSI+SGl0PC90ZXh0PjxyZWN0IHg9IjQxOC40IiB5PSI3MCIgd2lkdGg9IjIyIiBoZWlnaHQ9IjE1IiByeD0iMSIgZmlsbD0iI0Y1QzUxRiI+PC9yZWN0Pjx0ZXh0IHg9IjQxMi40IiB5PSI4Mi41IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9ImVuZCIgZm9udC1zaXplPSJtZWRpdW0iIGNsYXNzPSJ1d3VudHUiPlBsYXllcjwvdGV4dD48cmVjdCB4PSI0MTguNCIgeT0iOTEiIHdpZHRoPSIyMiIgaGVpZ2h0PSIxNSIgcng9IjEiIGZpbGw9IiNGNUM1MUYiPjwvcmVjdD48dGV4dCB4PSI0MTIuNCIgeT0iMTAzLjUiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0iZW5kIiBmb250LXNpemU9Im1lZGl1bSIgY2xhc3M9InV3dW50dSI+T2JqZWN0PC90ZXh0PjxyZWN0IHg9IjQxOC40IiB5PSIxMTIiIHdpZHRoPSIyMiIgaGVpZ2h0PSIxNSIgcng9IjEiIGZpbGw9IiMxODZCREQiPjwvcmVjdD48dGV4dCB4PSI0MTIuNCIgeT0iMTI0LjUiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0iZW5kIiBmb250LXNpemU9Im1lZGl1bSIgY2xhc3M9InV3dW50dSI+RGlzdGFuY2U8L3RleHQ+PHJlY3QgeD0iNDE4LjQiIHk9IjEzMyIgd2lkdGg9IjIyIiBoZWlnaHQ9IjE1IiByeD0iMSIgZmlsbD0iI0Y1QzUxRiI+PC9yZWN0Pjx0ZXh0IHg9IjQxMi40IiB5PSIxNDUuNSIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJlbmQiIGZvbnQtc2l6ZT0ibWVkaXVtIiBjbGFzcz0idXd1bnR1Ij5IaXQgUG9zaXRpb248L3RleHQ+PHJlY3QgeD0iNDE4LjQiIHk9IjE1NCIgd2lkdGg9IjIyIiBoZWlnaHQ9IjE1IiByeD0iMSIgZmlsbD0iI0Y1QzUxRiI+PC9yZWN0Pjx0ZXh0IHg9IjQxMi40IiB5PSIxNjYuNSIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJlbmQiIGZvbnQtc2l6ZT0ibWVkaXVtIiBjbGFzcz0idXd1bnR1Ij5TdXJmYWNlIE5vcm1hbDwvdGV4dD48cGF0aCBkPSJNMTYwLCA0MSB2LTMxIHEwLC0xMCwxMCwtMTAgaDI0OC4zOTk5OTk5OTk5OTk5OCBxMTAsMCwxMCwxMCB2MzEgaC0yNjguNCIgZmlsbD0iIzUyNTE1MiI+PC9wYXRoPjx0ZXh0IHg9IjI5NC4yIiB5PSIyOS41IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxOHB4IiBjbGFzcz0iVXd1bnR1Ij5TcGhlcmVjYXN0PC90ZXh0Pjwvc3ZnPg=="}}]);