"use strict";(self.webpackChunkcircuits=self.webpackChunkcircuits||[]).push([[57170],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var i=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=i.createContext({}),s=function(t){var e=i.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=s(t.components);return i.createElement(p.Provider,{value:e},t.children)},c="mdxType",I={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=s(n),d=a,m=c["".concat(p,".").concat(d)]||c[d]||I[d]||r;return n?i.createElement(m,l(l({ref:e},u),{},{components:n})):i.createElement(m,l({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[c]="string"==typeof t?t:a,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51195:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>I,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var i=n(87462),a=(n(67294),n(3905));const r={sidebar_position:574,tags:["Chip"]},l="String Format",o={unversionedId:"documentation/chips/77afc9dd-baa9-4312-b8b8-7ef479c840e6",id:"documentation/chips/77afc9dd-baa9-4312-b8b8-7ef479c840e6",title:"String Format",description:'Use this chip to combine multiple strings together into a single string output. The "Format" input is part of final string output and can include other string inputs by using this syntax: {input pin # starting at 0}. For example, a "Format" input with a default value of \u201cHello, !\u201d with a single additional input pin with the value "World" is fully output as "Hello, World!". If you had another input pin you would use {1} to denote the 2nd pin. You can add more string inputs by configuring the chip and pressing "Add Input".',source:"@site/docs/documentation/chips/77afc9dd-baa9-4312-b8b8-7ef479c840e6.mdx",sourceDirName:"documentation/chips",slug:"/documentation/chips/77afc9dd-baa9-4312-b8b8-7ef479c840e6",permalink:"/docs/documentation/chips/77afc9dd-baa9-4312-b8b8-7ef479c840e6",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation/chips/77afc9dd-baa9-4312-b8b8-7ef479c840e6.mdx",tags:[{label:"Chip",permalink:"/docs/tags/chip"}],version:"current",sidebarPosition:574,frontMatter:{sidebar_position:574,tags:["Chip"]},sidebar:"tutorialSidebar",previous:{title:"String Contains",permalink:"/docs/documentation/chips/aa24edab-c707-4cff-8c73-07e479b4cd07"},next:{title:"String Length",permalink:"/docs/documentation/chips/dcde9345-00f2-41fb-9a2d-5a938f39bfb5"}},p={},s=[{value:"Uses",id:"uses",level:3},{value:"Tips",id:"tips",level:3},{value:"Issues",id:"issues",level:3}],u={toc:s},c="wrapper";function I(t){let{components:e,...r}=t;return(0,a.kt)(c,(0,i.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"string-format"},"String Format"),(0,a.kt)("p",null,'Use this chip to combine multiple strings together into a single string output. The "Format" input is part of final string output and can include other string inputs by using this syntax: {input pin # starting at 0}. For example, a "Format" input with a default value of \u201cHello, {0}!\u201d with a single additional input pin with the value "World" is fully output as "Hello, World!". If you had another input pin you would use {1} to denote the 2nd pin. You can add more string inputs by configuring the chip and pressing "Add Input".'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Chip Image",src:n(19163).Z,width:"800",height:"800"})),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Input Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Input Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Format"),(0,a.kt)("td",{parentName:"tr",align:null},"string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Value"),(0,a.kt)("td",{parentName:"tr",align:null},"string")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Output Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Output Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Result"),(0,a.kt)("td",{parentName:"tr",align:null},"string")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Properties"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Is beta required?"),(0,a.kt)("th",null,"\u274c")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Is this chip a trolling risk?"),(0,a.kt)("th",null,"\u274c")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Chip UUPD"),(0,a.kt)("th",null,"._uuid"))))))),(0,a.kt)("h3",{id:"uses"},"Uses"),(0,a.kt)("p",null,"None so far!"),(0,a.kt)("h3",{id:"tips"},"Tips"),(0,a.kt)("p",null,"None so far!"),(0,a.kt)("h3",{id:"issues"},"Issues"),(0,a.kt)("p",null,"None so far!"))}I.isMDXComponent=!0},19163:(t,e,n)=>{n.d(e,{Z:()=>i});const i="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1VYnVudHUnKTs8L3N0eWxlPjwvZGVmcz48cGF0aCBmaWxsPSIjODE4MDgxIiBkPSJNMTYwLCA0MSB2NTEgcTAsMTAsMTAsMTAgaDE5OCBxMTAsMCwxMCwtMTAgdi01MSBoMjE4Ij48L3BhdGg+PGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZGlfMjU1Nl8xOTEzMikiPjxyZWN0IHg9IjE0OCIgeT0iNDkiIHdpZHRoPSIyMiIgaGVpZ2h0PSIxNSIgcng9IjEiIGZpbGw9IiM3ODQyODMiPjwvcmVjdD48L2c+PGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjFfZGlfMjU1Nl8xOTEzMikiPjxyZWN0IHg9Ijk0IiB5PSI0NSIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjIzIiByeD0iMSIgZmlsbD0iIzc4NDI4MyI+PC9yZWN0PjxyZWN0IHg9Ijk4IiB5PSI0OS4wMDEiIHdpZHRoPSIzNyIgaGVpZ2h0PSIxNSIgcng9IjEiIGZpbGw9IiM4MTgwODEiPjwvcmVjdD48L2c+PGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjJfZGlfMjU1Nl8xOTEzMikiPjxyZWN0IHg9IjEzOSIgeT0iNTMiIHdpZHRoPSI5IiBoZWlnaHQ9IjciIGZpbGw9IiM3ODQyODMiPjwvcmVjdD48L2c+PHRleHQgeD0iMTc2IiB5PSI2MS41IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXNpemU9Im1lZGl1bSIgZm9udC1mYW1pbHk9IlVidW50dSI+Rm9ybWF0PC90ZXh0PjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2RpXzI1NTZfMTkxMzIpIj48cmVjdCB4PSIxNDgiIHk9IjcwIiB3aWR0aD0iMjIiIGhlaWdodD0iMTUiIHJ4PSIxIiBmaWxsPSIjNzg0MjgzIj48L3JlY3Q+PC9nPjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIxX2RpXzI1NTZfMTkxMzIpIj48cmVjdCB4PSI5NCIgeT0iNjYiIHdpZHRoPSI0NSIgaGVpZ2h0PSIyMyIgcng9IjEiIGZpbGw9IiM3ODQyODMiPjwvcmVjdD48cmVjdCB4PSI5OCIgeT0iNzAuMDAxIiB3aWR0aD0iMzciIGhlaWdodD0iMTUiIHJ4PSIxIiBmaWxsPSIjODE4MDgxIj48L3JlY3Q+PC9nPjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIyX2RpXzI1NTZfMTkxMzIpIj48cmVjdCB4PSIxMzkiIHk9Ijc0IiB3aWR0aD0iOSIgaGVpZ2h0PSI3IiBmaWxsPSIjNzg0MjgzIj48L3JlY3Q+PC9nPjx0ZXh0IHg9IjE3NiIgeT0iODIuNSIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC1zaXplPSJtZWRpdW0iIGZvbnQtZmFtaWx5PSJVYnVudHUiPlZhbHVlPC90ZXh0PjxyZWN0IHg9IjM2NiIgeT0iNDkiIHdpZHRoPSIyMiIgaGVpZ2h0PSIxNSIgcng9IjEiIGZpbGw9IiM3ODQyODMiPjwvcmVjdD48dGV4dCB4PSIzNjIiIHk9IjYxLjUiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0iZW5kIiBmb250LXNpemU9Im1lZGl1bSIgZm9udC1mYW1pbHk9IlVidW50dSI+UmVzdWx0PC90ZXh0PjxwYXRoIGQ9Ik0xNjAsIDQxIHYtMzEgcTAsLTEwLDEwLC0xMCBoMTk4IHExMCwwLDEwLDEwIHYzMSBoLTIxOCIgZmlsbD0iIzUyNTE1MiI+PC9wYXRoPjx0ZXh0IHg9IjI2OSIgeT0iMjguNSIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0ibWVkaXVtIiBmb250LWZhbWlseT0iVWJ1bnR1Ij5TdHJpbmcgRm9ybWF0PC90ZXh0Pjwvc3ZnPg=="}}]);