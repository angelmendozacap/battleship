import{d as n,A as t,o as a,c as e,a as r}from"./vendor.4873629a.js";import{u as o}from"./config.f650ac0a.js";import{u as s}from"./game.a6ed6d1f.js";var u=n({name:"GameOver",setup(){const n=t(),{resetGame:a}=s(),{setAttempts:e}=o();return{tryAgain:function(){a(),e(0),n.push({name:"Config"})}}}});const i=r("h1",null,"Juego terminado",-1);u.render=function(n,t,o,s,u,m){return a(),e("div",null,[i,r("button",{onClick:t[1]||(t[1]=(...t)=>n.tryAgain&&n.tryAgain(...t))},"Intentar de nuevo")])};export default u;
