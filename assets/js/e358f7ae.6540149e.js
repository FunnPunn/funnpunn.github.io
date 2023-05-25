"use strict";(self.webpackChunkcircuits=self.webpackChunkcircuits||[]).push([[63785],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=a.createContext({}),I=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},s=function(t){var e=I(t.components);return a.createElement(c.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,l=t.originalType,c=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=I(n),p=i,m=u["".concat(c,".").concat(p)]||u[p]||d[p]||l;return n?a.createElement(m,r(r({ref:e},s),{},{components:n})):a.createElement(m,r({ref:e},s))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var l=n.length,r=new Array(l);r[0]=p;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o[u]="string"==typeof t?t:i,r[1]=o;for(var I=2;I<l;I++)r[I]=n[I];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},61746:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>I});var a=n(87462),i=(n(67294),n(3905));const l={sidebar_position:86,tags:["Chip"]},r="Color To HSV",o={unversionedId:"documentation/chips/d697171e-56ac-41b7-aa1e-dabc4538c029",id:"documentation/chips/d697171e-56ac-41b7-aa1e-dabc4538c029",title:"Color To HSV",description:"Return hue, saturation, and value from the given color.",source:"@site/docs/documentation/chips/d697171e-56ac-41b7-aa1e-dabc4538c029.mdx",sourceDirName:"documentation/chips",slug:"/documentation/chips/d697171e-56ac-41b7-aa1e-dabc4538c029",permalink:"/docs/documentation/chips/d697171e-56ac-41b7-aa1e-dabc4538c029",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation/chips/d697171e-56ac-41b7-aa1e-dabc4538c029.mdx",tags:[{label:"Chip",permalink:"/docs/tags/chip"}],version:"current",sidebarPosition:86,frontMatter:{sidebar_position:86,tags:["Chip"]},sidebar:"tutorialSidebar",previous:{title:"Color Variable",permalink:"/docs/documentation/chips/3d2fd0b5-eeac-45cc-a622-1701710f0792"},next:{title:"Color To Int",permalink:"/docs/documentation/chips/8e412141-635d-435c-a900-f40d8a261906"}},c={},I=[{value:"Uses",id:"uses",level:3},{value:"Tips",id:"tips",level:3},{value:"Issues",id:"issues",level:3}],s={toc:I},u="wrapper";function d(t){let{components:e,...l}=t;return(0,i.kt)(u,(0,a.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"color-to-hsv"},"Color To HSV"),(0,i.kt)("p",null,"Return hue, saturation, and value from the given color."),(0,i.kt)("admonition",{title:"BETA",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},'This chip requires beta content to be enabled in the room. You can access the setting in "This Room -> Settings".')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Chip Image",src:n(68728).Z,width:"800",height:"800"})),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Input Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Input Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Color"),(0,i.kt)("td",{parentName:"tr",align:null},"color")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Output Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Output Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Hue"),(0,i.kt)("td",{parentName:"tr",align:null},"float")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Saturation"),(0,i.kt)("td",{parentName:"tr",align:null},"float")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Value"),(0,i.kt)("td",{parentName:"tr",align:null},"float")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Properties"),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Is beta required?"),(0,i.kt)("th",null,"\u2705")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"Is this chip a trolling risk?"),(0,i.kt)("th",null,"\u274c")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"Chip UUPD"),(0,i.kt)("th",null,"._uuid"))))))),(0,i.kt)("h3",{id:"uses"},"Uses"),(0,i.kt)("p",null,"None so far!"),(0,i.kt)("h3",{id:"tips"},"Tips"),(0,i.kt)("p",null,"None so far!"),(0,i.kt)("h3",{id:"issues"},"Issues"),(0,i.kt)("p",null,"None so far!"))}d.isMDXComponent=!0},68728:(t,e,n)=>{n.d(e,{Z:()=>a});const a="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1VYnVudHUnKTs8L3N0eWxlPjwvZGVmcz48cGF0aCBmaWxsPSIjODE4MDgxIiBkPSJNMTYwLCA0MSB2NzYgcTAsMTAsMTAsMTAgaDE5MCBxMTAsMCwxMCwtMTAgdi03NiBoMjEwIj48L3BhdGg+PGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZGlfMjU1Nl8xOTEzMikiPjxyZWN0IHg9IjE0OCIgeT0iNDkiIHdpZHRoPSIyMiIgaGVpZ2h0PSIxNSIgcng9IjEiIGZpbGw9IiMwMDRGQjkiPjwvcmVjdD48L2c+PGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjFfZGlfMjU1Nl8xOTEzMikiPjxyZWN0IHg9Ijk0IiB5PSI0NSIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjIzIiByeD0iMSIgZmlsbD0iIzAwNEZCOSI+PC9yZWN0PjxyZWN0IHg9Ijk4IiB5PSI0OS4wMDEiIHdpZHRoPSIzNyIgaGVpZ2h0PSIxNSIgcng9IjEiIGZpbGw9IiM4MTgwODEiPjwvcmVjdD48L2c+PGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjJfZGlfMjU1Nl8xOTEzMikiPjxyZWN0IHg9IjEzOSIgeT0iNTMiIHdpZHRoPSI5IiBoZWlnaHQ9IjciIGZpbGw9IiMwMDRGQjkiPjwvcmVjdD48L2c+PHRleHQgeD0iMTc2IiB5PSI2MS41IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXNpemU9Im1lZGl1bSIgZm9udC1mYW1pbHk9IlVidW50dSI+Q29sb3I8L3RleHQ+PHJlY3QgeD0iMzU4IiB5PSI0OSIgd2lkdGg9IjIyIiBoZWlnaHQ9IjE1IiByeD0iMSIgZmlsbD0iIzE4NkJERCI+PC9yZWN0Pjx0ZXh0IHg9IjM1NCIgeT0iNjEuNSIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJlbmQiIGZvbnQtc2l6ZT0ibWVkaXVtIiBmb250LWZhbWlseT0iVWJ1bnR1Ij5IdWU8L3RleHQ+PHJlY3QgeD0iMzU4IiB5PSI3MCIgd2lkdGg9IjIyIiBoZWlnaHQ9IjE1IiByeD0iMSIgZmlsbD0iIzE4NkJERCI+PC9yZWN0Pjx0ZXh0IHg9IjM1NCIgeT0iODIuNSIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJlbmQiIGZvbnQtc2l6ZT0ibWVkaXVtIiBmb250LWZhbWlseT0iVWJ1bnR1Ij5TYXR1cmF0aW9uPC90ZXh0PjxyZWN0IHg9IjM1OCIgeT0iOTEiIHdpZHRoPSIyMiIgaGVpZ2h0PSIxNSIgcng9IjEiIGZpbGw9IiMxODZCREQiPjwvcmVjdD48dGV4dCB4PSIzNTQiIHk9IjEwMy41IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9ImVuZCIgZm9udC1zaXplPSJtZWRpdW0iIGZvbnQtZmFtaWx5PSJVYnVudHUiPlZhbHVlPC90ZXh0PjxwYXRoIGQ9Ik0xNjAsIDQxIHYtMzEgcTAsLTEwLDEwLC0xMCBoMTkwIHExMCwwLDEwLDEwIHYzMSBoLTIxMCIgZmlsbD0iIzUyNTE1MiI+PC9wYXRoPjx0ZXh0IHg9IjI2NSIgeT0iMjguNSIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0ibWVkaXVtIiBmb250LWZhbWlseT0iVWJ1bnR1Ij5Db2xvciBUbyBIU1Y8L3RleHQ+PC9zdmc+"}}]);