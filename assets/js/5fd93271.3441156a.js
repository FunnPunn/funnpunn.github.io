"use strict";(self.webpackChunkcircuits=self.webpackChunkcircuits||[]).push([[9927],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>b});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),s=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=s(t.components);return n.createElement(c.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),p=s(a),m=r,b=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return a?n.createElement(b,o(o({ref:e},u),{},{components:a})):n.createElement(b,o({ref:e},u))}));function b(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[p]="string"==typeof t?t:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},87569:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_position:184,tags:["Chip"]},o="Get Local Camera Position",l={unversionedId:"documentation/chips/c19eff8a-980c-444a-983f-bb4c53a94daf",id:"documentation/chips/c19eff8a-980c-444a-983f-bb4c53a94daf",title:"Get Local Camera Position",description:"Gets the position of your avatar's view, output as a Vector3.",source:"@site/docs/documentation/chips/c19eff8a-980c-444a-983f-bb4c53a94daf.mdx",sourceDirName:"documentation/chips",slug:"/documentation/chips/c19eff8a-980c-444a-983f-bb4c53a94daf",permalink:"/docs/documentation/chips/c19eff8a-980c-444a-983f-bb4c53a94daf",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation/chips/c19eff8a-980c-444a-983f-bb4c53a94daf.mdx",tags:[{label:"Chip",permalink:"/docs/tags/chip"}],version:"current",sidebarPosition:184,frontMatter:{sidebar_position:184,tags:["Chip"]},sidebar:"tutorialSidebar",previous:{title:"Get Local Camera Rotation",permalink:"/docs/documentation/chips/912f0e1b-267d-4424-8002-3f82a2d835fe"},next:{title:"Get Local Camera Up",permalink:"/docs/documentation/chips/5d9da95f-a64f-4660-a11f-bf0855769659"}},c={},s=[{value:"Uses",id:"uses",level:3},{value:"Tips",id:"tips",level:3},{value:"Issues",id:"issues",level:3}],u={toc:s},p="wrapper";function d(t){let{components:e,...i}=t;return(0,r.kt)(p,(0,n.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"get-local-camera-position"},"Get Local Camera Position"),(0,r.kt)("p",null,"Gets the position of your avatar's view, output as a Vector3."),(0,r.kt)("admonition",{title:"BETA",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'This chip requires beta content to be enabled in the room. You can access the setting in "This Room -> Settings".')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Chip Image",src:a(25934).Z,width:"800",height:"800"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Input Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Input Type")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Output Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Output Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Position"),(0,r.kt)("td",{parentName:"tr",align:null},"vector3")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Properties"),(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Is beta required?"),(0,r.kt)("th",null,"\u2705")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Is this chip a trolling risk?"),(0,r.kt)("th",null,"\u274c")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Chip UUPD"),(0,r.kt)("th",null,"._uuid"))))))),(0,r.kt)("h3",{id:"uses"},"Uses"),(0,r.kt)("p",null,"None so far!"),(0,r.kt)("h3",{id:"tips"},"Tips"),(0,r.kt)("p",null,"None so far!"),(0,r.kt)("h3",{id:"issues"},"Issues"),(0,r.kt)("p",null,"None so far!"))}d.isMDXComponent=!0},25934:(t,e,a)=>{a.d(e,{Z:()=>n});const n="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1VYnVudHUnKTs8L3N0eWxlPjwvZGVmcz48cGF0aCBmaWxsPSIjODE4MDgxIiBkPSJNMTYwLCA0MSB2MjYgcTAsMTAsMTAsMTAgaDI5NCBxMTAsMCwxMCwtMTAgdi0yNiBoMzE0Ij48L3BhdGg+PHJlY3QgeD0iNDYyIiB5PSI0OSIgd2lkdGg9IjIyIiBoZWlnaHQ9IjE1IiByeD0iMSIgZmlsbD0iI0Y1QzUxRiI+PC9yZWN0Pjx0ZXh0IHg9IjQ1OCIgeT0iNjEuNSIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJlbmQiIGZvbnQtc2l6ZT0ibWVkaXVtIiBmb250LWZhbWlseT0iVWJ1bnR1Ij5Qb3NpdGlvbjwvdGV4dD48cGF0aCBkPSJNMTYwLCA0MSB2LTMxIHEwLC0xMCwxMCwtMTAgaDI5NCBxMTAsMCwxMCwxMCB2MzEgaC0zMTQiIGZpbGw9IiM1MjUxNTIiPjwvcGF0aD48dGV4dCB4PSIzMTciIHk9IjI4LjUiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9Im1lZGl1bSIgZm9udC1mYW1pbHk9IlVidW50dSI+R2V0IExvY2FsIENhbWVyYSBQb3NpdGlvbjwvdGV4dD48L3N2Zz4="}}]);