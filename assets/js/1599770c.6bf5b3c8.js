"use strict";(self.webpackChunkcircuits=self.webpackChunkcircuits||[]).push([[93690],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),p=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(c.Provider,{value:e},t.children)},d="mdxType",I={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=p(n),u=r,m=d["".concat(c,".").concat(u)]||d[u]||I[u]||i;return n?a.createElement(m,l(l({ref:e},s),{},{components:n})):a.createElement(m,l({ref:e},s))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o[d]="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},87483:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>I,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:371,tags:["Chip"]},l="Parse Color",o={unversionedId:"documentation/chips/7a36c4b7-fb89-4ddc-a3b2-bff8597f7b17",id:"documentation/chips/7a36c4b7-fb89-4ddc-a3b2-bff8597f7b17",title:"Parse Color",description:"Attempt to parse the given string as a hexadecimal color in the '#RRGGBB' format.",source:"@site/docs/documentation/chips/7a36c4b7-fb89-4ddc-a3b2-bff8597f7b17.mdx",sourceDirName:"documentation/chips",slug:"/documentation/chips/7a36c4b7-fb89-4ddc-a3b2-bff8597f7b17",permalink:"/docs/documentation/chips/7a36c4b7-fb89-4ddc-a3b2-bff8597f7b17",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation/chips/7a36c4b7-fb89-4ddc-a3b2-bff8597f7b17.mdx",tags:[{label:"Chip",permalink:"/docs/tags/chip"}],version:"current",sidebarPosition:371,frontMatter:{sidebar_position:371,tags:["Chip"]},sidebar:"tutorialSidebar",previous:{title:"Parse Bool",permalink:"/docs/documentation/chips/92c05ebc-1967-49a4-94b5-2d01fe1e6b85"},next:{title:"Parse Float",permalink:"/docs/documentation/chips/5e25f40a-2b8c-4327-a89c-7a749838da7d"}},c={},p=[{value:"Uses",id:"uses",level:3},{value:"Tips",id:"tips",level:3},{value:"Issues",id:"issues",level:3}],s={toc:p},d="wrapper";function I(t){let{components:e,...i}=t;return(0,r.kt)(d,(0,a.Z)({},s,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"parse-color"},"Parse Color"),(0,r.kt)("p",null,"Attempt to parse the given string as a hexadecimal color in the '#RRGGBB' format."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Chip Image",src:n(50383).Z,width:"800",height:"800"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Input Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Input Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"string")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Output Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Output Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"color")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Parse Success"),(0,r.kt)("td",{parentName:"tr",align:null},"bool")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Properties"),(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Is beta required?"),(0,r.kt)("th",null,"\u274c")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Is this chip a trolling risk?"),(0,r.kt)("th",null,"\u274c")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Chip UUPD"),(0,r.kt)("th",null,"._uuid"))))))),(0,r.kt)("h3",{id:"uses"},"Uses"),(0,r.kt)("p",null,"None so far!"),(0,r.kt)("h3",{id:"tips"},"Tips"),(0,r.kt)("p",null,"None so far!"),(0,r.kt)("h3",{id:"issues"},"Issues"),(0,r.kt)("p",null,"None so far!"))}I.isMDXComponent=!0},50383:(t,e,n)=>{n.d(e,{Z:()=>a});const a="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1VYnVudHUnKTs8L3N0eWxlPjwvZGVmcz48cGF0aCBmaWxsPSIjODE4MDgxIiBkPSJNMTYwLCA0MSB2NTEgcTAsMTAsMTAsMTAgaDE4MiBxMTAsMCwxMCwtMTAgdi01MSBoMjAyIj48L3BhdGg+PGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZGlfMjU1Nl8xOTEzMikiPjxyZWN0IHg9IjE0OCIgeT0iNDkiIHdpZHRoPSIyMiIgaGVpZ2h0PSIxNSIgcng9IjEiIGZpbGw9IiM3ODQyODMiPjwvcmVjdD48L2c+PGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjFfZGlfMjU1Nl8xOTEzMikiPjxyZWN0IHg9Ijk0IiB5PSI0NSIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjIzIiByeD0iMSIgZmlsbD0iIzc4NDI4MyI+PC9yZWN0PjxyZWN0IHg9Ijk4IiB5PSI0OS4wMDEiIHdpZHRoPSIzNyIgaGVpZ2h0PSIxNSIgcng9IjEiIGZpbGw9IiM4MTgwODEiPjwvcmVjdD48L2c+PGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjJfZGlfMjU1Nl8xOTEzMikiPjxyZWN0IHg9IjEzOSIgeT0iNTMiIHdpZHRoPSI5IiBoZWlnaHQ9IjciIGZpbGw9IiM3ODQyODMiPjwvcmVjdD48L2c+PHRleHQgeD0iMTc2IiB5PSI2MS41IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXNpemU9Im1lZGl1bSIgZm9udC1mYW1pbHk9IlVidW50dSI+U3RyaW5nPC90ZXh0PjxyZWN0IHg9IjM1MCIgeT0iNDkiIHdpZHRoPSIyMiIgaGVpZ2h0PSIxNSIgcng9IjEiIGZpbGw9IiMwMDRGQjkiPjwvcmVjdD48dGV4dCB4PSIzNDYiIHk9IjYxLjUiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0iZW5kIiBmb250LXNpemU9Im1lZGl1bSIgZm9udC1mYW1pbHk9IlVidW50dSI+UmVzdWx0PC90ZXh0PjxyZWN0IHg9IjM1MCIgeT0iNzAiIHdpZHRoPSIyMiIgaGVpZ2h0PSIxNSIgcng9IjEiIGZpbGw9IiNFQTJFNTAiPjwvcmVjdD48dGV4dCB4PSIzNDYiIHk9IjgyLjUiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0iZW5kIiBmb250LXNpemU9Im1lZGl1bSIgZm9udC1mYW1pbHk9IlVidW50dSI+UGFyc2UgU3VjY2VzczwvdGV4dD48cGF0aCBkPSJNMTYwLCA0MSB2LTMxIHEwLC0xMCwxMCwtMTAgaDE4MiBxMTAsMCwxMCwxMCB2MzEgaC0yMDIiIGZpbGw9IiM1MjUxNTIiPjwvcGF0aD48dGV4dCB4PSIyNjEiIHk9IjI4LjUiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9Im1lZGl1bSIgZm9udC1mYW1pbHk9IlVidW50dSI+UGFyc2UgQ29sb3I8L3RleHQ+PC9zdmc+"}}]);