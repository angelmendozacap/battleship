import{d as e,c as t,a as n,w as a,p as o,b as r,o as s,T as i,r as d,e as m,f as p,g as c,h as _}from"./vendor.4873629a.js";var l=e({name:"App"});const u=a();o("data-v-43fcf4a0");const f={class:"text-gray-500"};r();const h=u(((e,a,o,r,p,c)=>{const _=m("router-view");return s(),t("div",f,[n(_,null,{default:u((({Component:e})=>[n(i,{name:"bounce"},{default:u((()=>[(s(),t(d(e)))])),_:2},1024)])),_:1})])}));let E;l.render=h,l.__scopeId="data-v-43fcf4a0";const v={},L=function(e,t){if(!t)return e();if(void 0===E){const e=document.createElement("link").relList;E=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in v)return;v[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":E,t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((e,t)=>{a.addEventListener("load",e),a.addEventListener("error",t)})):void 0}))).then((()=>e()))},b=[{name:"Home",path:"/",component:()=>L((()=>import("./index.b7d596c1.js")),["/assets/index.b7d596c1.js","/assets/vendor.4873629a.js"])},{name:"Config",path:"/configuration",component:()=>L((()=>import("./index.25e9babd.js")),["/assets/index.25e9babd.js","/assets/index.fb02c49f.css","/assets/vendor.4873629a.js","/assets/config.8c65e145.js"])},{name:"BattleshipBoard",path:"/battleship",component:()=>L((()=>import("./index.52972fab.js")),["/assets/index.52972fab.js","/assets/index.bfd0eafa.css","/assets/vendor.4873629a.js","/assets/config.8c65e145.js","/assets/game.7f79494e.js"])},{name:"GameOver",path:"/gameover",component:()=>L((()=>import("./index.2ac8f548.js")),["/assets/index.2ac8f548.js","/assets/vendor.4873629a.js","/assets/config.8c65e145.js","/assets/game.7f79494e.js"])},{name:"GameHistory",path:"/game-history",component:()=>L((()=>import("./index.13f4a3ad.js")),["/assets/index.13f4a3ad.js","/assets/vendor.4873629a.js","/assets/game.7f79494e.js"])}],g=p({history:c(),routes:b});const y=_(l);y.use(g),y.mount("#app");