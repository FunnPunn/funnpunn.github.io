"use strict";(self.webpackChunkcircuits=self.webpackChunkcircuits||[]).push([[9945],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>b});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var o=a.createContext({}),s=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(o.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,o=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),p=s(n),m=i,b=p["".concat(o,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(b,l(l({ref:e},u),{},{components:n})):a.createElement(b,l({ref:e},u))}));function b(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,l=new Array(r);l[0]=m;var c={};for(var o in e)hasOwnProperty.call(e,o)&&(c[o]=e[o]);c.originalType=t,c[p]="string"==typeof t?t:i,l[1]=c;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25325:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={sidebar_position:334,tags:["Chip"]},l="List Min",c={unversionedId:"documentation/chips/73e9cc79-66cc-4526-8ed7-87500e208c6b",id:"documentation/chips/73e9cc79-66cc-4526-8ed7-87500e208c6b",title:"List Min",description:"Outputs the lowest value in the target list.",source:"@site/docs/documentation/chips/73e9cc79-66cc-4526-8ed7-87500e208c6b.mdx",sourceDirName:"documentation/chips",slug:"/documentation/chips/73e9cc79-66cc-4526-8ed7-87500e208c6b",permalink:"/docs/documentation/chips/73e9cc79-66cc-4526-8ed7-87500e208c6b",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation/chips/73e9cc79-66cc-4526-8ed7-87500e208c6b.mdx",tags:[{label:"Chip",permalink:"/docs/tags/chip"}],version:"current",sidebarPosition:334,frontMatter:{sidebar_position:334,tags:["Chip"]},sidebar:"tutorialSidebar",previous:{title:"List Max",permalink:"/docs/documentation/chips/47428133-4492-422a-aeab-82c21667543e"},next:{title:"List Multiply",permalink:"/docs/documentation/chips/585aebe5-5df3-423a-8bc4-66b4e2b8bc5b"}},o={},s=[{value:"Uses",id:"uses",level:3},{value:"Tips",id:"tips",level:3},{value:"Issues",id:"issues",level:3}],u={toc:s},p="wrapper";function d(t){let{components:e,...r}=t;return(0,i.kt)(p,(0,a.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"list-min"},"List Min"),(0,i.kt)("p",null,"Outputs the lowest value in the target list."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example banner",src:n(88924).Z,width:"800",height:"176"})),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Input Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Input Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Target"),(0,i.kt)("td",{parentName:"tr",align:null},"List","[Union(float , int)]")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Output Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Output Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Result"),(0,i.kt)("td",{parentName:"tr",align:null},"Union(float , int)")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Properties"),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Is beta required?"),(0,i.kt)("th",null,"\u274c")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"Is this chip a trolling risk?"),(0,i.kt)("th",null,"\u274c")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"Chip UUPD"),(0,i.kt)("th",null,"._uuid"))))))),(0,i.kt)("h3",{id:"uses"},"Uses"),(0,i.kt)("p",null,"None so far!"),(0,i.kt)("h3",{id:"tips"},"Tips"),(0,i.kt)("p",null,"None so far!"),(0,i.kt)("h3",{id:"issues"},"Issues"),(0,i.kt)("p",null,"None so far!"))}d.isMDXComponent=!0},88924:(t,e,n)=>{n.d(e,{Z:()=>a});const a="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjE3Ni4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdib3g9IjAgMCA4MDAgMTc2LjEiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+QGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VWJ1bnR1Jyk7PC9zdHlsZT48L2RlZnM+PHBhdGggZmlsbD0iIzgxODA4MSIgZD0iTTE2MCwgNDEgdjI2IHEwLDEwLDEwLDEwIGgxNTYuMSBxMTAsMCwxMCwtMTAgdi0yNiBoMTc2LjEiPjwvcGF0aD48cmVjdCB4PSIxNDgiIHk9IjQ5IiB3aWR0aD0iMjIiIGhlaWdodD0iMTUiIHJ4PSIxIiBmaWxsPSIjRjZFRUU4Ij48L3JlY3Q+PHRleHQgeD0iMTc2IiB5PSI2MS41IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXNpemU9Im1lZGl1bSIgZm9udC1mYW1pbHk9IlVidW50dSI+VGFyZ2V0PC90ZXh0PjxyZWN0IHg9IjMyNi4xIiB5PSI0OSIgd2lkdGg9IjIyIiBoZWlnaHQ9IjE1IiByeD0iMSIgZmlsbD0iI0Y2RUVFOCI+PC9yZWN0Pjx0ZXh0IHg9IjMyMC4xIiB5PSI2MS41IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9ImVuZCIgZm9udC1zaXplPSJtZWRpdW0iIGZvbnQtZmFtaWx5PSJVYnVudHUiPlJlc3VsdDwvdGV4dD48cGF0aCBkPSJNMTYwLCA0MSB2LTMxIHEwLC0xMCwxMCwtMTAgaDE1Ni4xIHExMCwwLDEwLDEwIHYzMSBoLTE3Ni4xIiBmaWxsPSIjNTI1MTUyIj48L3BhdGg+PHRleHQgeD0iMjQ4LjA1IiB5PSIyOS41IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxOHB4IiBmb250LWZhbWlseT0iVWJ1bnR1Ij5MaXN0IE1pbjwvdGV4dD48L3N2Zz4="}}]);