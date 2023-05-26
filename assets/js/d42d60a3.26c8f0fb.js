"use strict";(self.webpackChunkcircuits=self.webpackChunkcircuits||[]).push([[67473],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>g});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},s="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},b=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=u(n),b=a,g=s["".concat(c,".").concat(b)]||s[b]||p[b]||i;return n?r.createElement(g,l(l({ref:e},d),{},{components:n})):r.createElement(g,l({ref:e},d))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=b;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o[s]="string"==typeof t?t:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},40940:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:304,tags:["Chip"]},l="Light Get Specular Contribution",o={unversionedId:"documentation/chips/b7e74ebc-9ed7-4302-abf1-d2fe42b92a6d",id:"documentation/chips/b7e74ebc-9ed7-4302-abf1-d2fe42b92a6d",title:"Light Get Specular Contribution",description:"Returns the specular contribution of the target light.",source:"@site/docs/documentation/chips/b7e74ebc-9ed7-4302-abf1-d2fe42b92a6d.mdx",sourceDirName:"documentation/chips",slug:"/documentation/chips/b7e74ebc-9ed7-4302-abf1-d2fe42b92a6d",permalink:"/docs/documentation/chips/b7e74ebc-9ed7-4302-abf1-d2fe42b92a6d",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation/chips/b7e74ebc-9ed7-4302-abf1-d2fe42b92a6d.mdx",tags:[{label:"Chip",permalink:"/docs/tags/chip"}],version:"current",sidebarPosition:304,frontMatter:{sidebar_position:304,tags:["Chip"]},sidebar:"tutorialSidebar",previous:{title:"Light Get Softness",permalink:"/docs/documentation/chips/afc674dc-06b5-44fc-9d01-95d8ca56db41"},next:{title:"Light Set Angle",permalink:"/docs/documentation/chips/873d8765-9dc7-41ea-87ef-dd6e32119af8"}},c={},u=[{value:"Uses",id:"uses",level:3},{value:"Tips",id:"tips",level:3},{value:"Issues",id:"issues",level:3}],d={toc:u},s="wrapper";function p(t){let{components:e,...i}=t;return(0,a.kt)(s,(0,r.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"light-get-specular-contribution"},"Light Get Specular Contribution"),(0,a.kt)("p",null,"Returns the specular contribution of the target light."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Example banner",src:n(13079).Z,width:"800",height:"366"})),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Input Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Input Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Target"),(0,a.kt)("td",{parentName:"tr",align:null},"light")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Output Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Output Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Specular Contribution"),(0,a.kt)("td",{parentName:"tr",align:null},"float")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Properties"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Is beta required?"),(0,a.kt)("th",null,"\u274c")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Is this chip a trolling risk?"),(0,a.kt)("th",null,"\u274c")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Chip UUID"),(0,a.kt)("th",null,"b7e74ebc-9ed7-4302-abf1-d2fe42b92a6d"))))))),(0,a.kt)("h3",{id:"uses"},"Uses"),(0,a.kt)("p",null,"None so far!"),(0,a.kt)("h3",{id:"tips"},"Tips"),(0,a.kt)("p",null,"None so far!"),(0,a.kt)("h3",{id:"issues"},"Issues"),(0,a.kt)("p",null,"None so far!"))}p.isMDXComponent=!0},13079:(t,e,n)=>{n.d(e,{Z:()=>r});const r="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjM2Ni4xNzk5OTk5OTk5OTk5NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Ym94PSIwIDAgODAwIDM2Ni4xNzk5OTk5OTk5OTk5NSI+PHBhdGggZmlsbD0iIzgxODA4MSIgZD0iTTE2MCwgNDEgdjI2IHEwLDEwLDEwLDEwIGgzNDYuMTc5OTk5OTk5OTk5OTUgcTEwLDAsMTAsLTEwIHYtMjYgaDM2Ni4xNzk5OTk5OTk5OTk5NSI+PC9wYXRoPjxyZWN0IHg9IjE0OCIgeT0iNDkiIHdpZHRoPSIyMiIgaGVpZ2h0PSIxNSIgcng9IjEiIGZpbGw9IiNGNUM1MUYiPjwvcmVjdD48dGV4dCB4PSIxNzYiIHk9IjYxLjUiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtc2l6ZT0ibWVkaXVtIiBjbGFzcz0idXd1bnR1Ij5UYXJnZXQ8L3RleHQ+PHJlY3QgeD0iNTE2LjE4IiB5PSI0OSIgd2lkdGg9IjIyIiBoZWlnaHQ9IjE1IiByeD0iMSIgZmlsbD0iIzE4NkJERCI+PC9yZWN0Pjx0ZXh0IHg9IjUxMC4xNzk5OTk5OTk5OTk5NSIgeT0iNjEuNSIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJlbmQiIGZvbnQtc2l6ZT0ibWVkaXVtIiBjbGFzcz0idXd1bnR1Ij5TcGVjdWxhciBDb250cmlidXRpb248L3RleHQ+PHBhdGggZD0iTTE2MCwgNDEgdi0zMSBxMCwtMTAsMTAsLTEwIGgzNDYuMTc5OTk5OTk5OTk5OTUgcTEwLDAsMTAsMTAgdjMxIGgtMzY2LjE3OTk5OTk5OTk5OTk1IiBmaWxsPSIjNTI1MTUyIj48L3BhdGg+PHRleHQgeD0iMzQzLjA5IiB5PSIyOS41IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxOHB4IiBjbGFzcz0iVXd1bnR1Ij5MaWdodCBHZXQgU3BlY3VsYXIgQ29udHJpYnV0aW9uPC90ZXh0Pjwvc3ZnPg=="}}]);