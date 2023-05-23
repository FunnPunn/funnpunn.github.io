"use strict";(self.webpackChunkcircuits=self.webpackChunkcircuits||[]).push([[39177],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>b});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),s=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(c.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,c=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),p=s(n),m=r,b=p["".concat(c,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(b,i(i({ref:e},u),{},{components:n})):a.createElement(b,i({ref:e},u))}));function b(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o[p]="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64386:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_position:434,tags:["Chip"]},i="Play Handle Haptics",o={unversionedId:"documentation/chips/da6980ad-92eb-4ce8-a643-291e2bf82bc7",id:"documentation/chips/da6980ad-92eb-4ce8-a643-291e2bf82bc7",title:"Play Handle Haptics",description:"Plays haptic feedback through a held Handle object Duration is an integer in milliseconds between 1 and 500 Intensity is a float value from 0 to 1  At this time, haptics are only supported on VR.",source:"@site/docs/documentation/chips/da6980ad-92eb-4ce8-a643-291e2bf82bc7.mdx",sourceDirName:"documentation/chips",slug:"/documentation/chips/da6980ad-92eb-4ce8-a643-291e2bf82bc7",permalink:"/docs/documentation/chips/da6980ad-92eb-4ce8-a643-291e2bf82bc7",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation/chips/da6980ad-92eb-4ce8-a643-291e2bf82bc7.mdx",tags:[{label:"Chip",permalink:"/docs/tags/chip"}],version:"current",sidebarPosition:434,frontMatter:{sidebar_position:434,tags:["Chip"]},sidebar:"tutorialSidebar",previous:{title:"Player World UI",permalink:"/docs/documentation/chips/ff2d1f81-d76c-456f-acf0-af1861822681"},next:{title:"Power",permalink:"/docs/documentation/chips/288d4e89-ebed-41ed-a522-4c79bd48471a"}},c={},s=[{value:"Uses",id:"uses",level:3},{value:"Tips",id:"tips",level:3},{value:"Issues",id:"issues",level:3}],u={toc:s},p="wrapper";function d(t){let{components:e,...n}=t;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"play-handle-haptics"},"Play Handle Haptics"),(0,r.kt)("p",null,"Plays haptic feedback through a held Handle object Duration is an integer in milliseconds between 1 and 500 Intensity is a float value from 0 to 1  At this time, haptics are only supported on VR. "),(0,r.kt)("admonition",{title:"BETA",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'This chip requires beta content to be enabled in the room. You can access the setting in "This Room -> Settings".')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Input Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Input Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Play"),(0,r.kt)("td",{parentName:"tr",align:null},"exec")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Handle"),(0,r.kt)("td",{parentName:"tr",align:null},"Union(trigger handle , gun handle)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Duration (ms)"),(0,r.kt)("td",{parentName:"tr",align:null},"int")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Intensity"),(0,r.kt)("td",{parentName:"tr",align:null},"float")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Output Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Output Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Play"),(0,r.kt)("td",{parentName:"tr",align:null},"exec")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Properties"),(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Is beta required?"),(0,r.kt)("th",null,"\u2705")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Is this chip a trolling risk?"),(0,r.kt)("th",null,"\u274c")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Chip UUPD"),(0,r.kt)("th",null,"da6980ad-92eb-4ce8-a643-291e2bf82bc7"))))))),(0,r.kt)("h3",{id:"uses"},"Uses"),(0,r.kt)("p",null,"None so far!"),(0,r.kt)("h3",{id:"tips"},"Tips"),(0,r.kt)("p",null,"None so far!"),(0,r.kt)("h3",{id:"issues"},"Issues"),(0,r.kt)("p",null,"None so far!"))}d.isMDXComponent=!0}}]);