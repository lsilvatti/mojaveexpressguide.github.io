"use strict";(self.webpackChunkmojaveexpressguide=self.webpackChunkmojaveexpressguide||[]).push([[5064],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||s;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:r,o[1]=a;for(var p=2;p<s;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},531:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var i=n(7462),r=(n(7294),n(3905));const s={sidebar_position:1},o="Known Issues",a={unversionedId:"Appendix/Known Issues",id:"Appendix/Known Issues",title:"Known Issues",description:"This page will document known issues with mods in the guide and will be frequently updated.",source:"@site/docs/Appendix/Known Issues.md",sourceDirName:"Appendix",slug:"/Appendix/Known Issues",permalink:"/docs/Appendix/Known Issues",draft:!1,editUrl:"https://github.com/mojaveexpressguide/mojaveexpressguide.github.io/edit/master/docs/Appendix/Known Issues.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"MEG - Post Install",permalink:"/docs/MEG - Post Install"},next:{title:"Information",permalink:"/docs/Appendix/Information"}},l={},p=[{value:"This page will document known issues with mods in the guide and will be frequently updated.",id:"this-page-will-document-known-issues-with-mods-in-the-guide-and-will-be-frequently-updated",level:4},{value:"Added Mod Issues:",id:"added-mod-issues",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"known-issues"},"Known Issues"),(0,r.kt)("h4",{id:"this-page-will-document-known-issues-with-mods-in-the-guide-and-will-be-frequently-updated"},"This page will document known issues with mods in the guide and will be frequently updated."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"KARPSOL armours clipping")," - These have been fixed as best as possible but its not perfect, weapon based fNearDistance can help with this."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Bullet time highlighting whilst ads with scopes looks weird:")," - This is an issue between B42 Optics and JAM's bullet time highlighing. The only way to fix is to either disable JAM's bullet time highlighting or B42 Optics."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"B42 Notify not working?")," - On a new save B42 Notify will not work initially this is because the B42 script only works on game load. All you need to do is save the game, restart and then load the save. "),(0,r.kt)("h2",{id:"added-mod-issues"},"Added Mod Issues:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"B42 Bows and KARPSOL:")," - If you decide to add B42 Bows to the game, when an npc or yourself has both a bow and a poncho equipped the game will crash. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Contextual Hud & JIP Companions Command and Control.")," - If your interaction prompts disappear then this is why. You can mess with the Anti-Overlap setting in JIP CCC's MCM and that may fix it."))}c.isMDXComponent=!0}}]);