import{u as e,v as t,x as n}from"./vendor.4873629a.js";const s=t({numberOfAttempts:0,numberOfAttemptsUsed:0,sunkenShipFleet:[],win:!1,over:!1});function r(){const t=n((()=>{const e=localStorage.getItem("_GAME_HISTORY")||"[]";return JSON.parse(e)||[]}));return e({game:s,addSunkenShip:function(e){s.sunkenShipFleet.push(e)},gameHistory:t,saveGameHistory:function(){const e=t.value;e.push(s),localStorage.setItem("_GAME_HISTORY",JSON.stringify(e))},setNumberOfAttempts:function(e){s.numberOfAttempts=e},setNumberOfAttemptsUsed:function(e){s.numberOfAttemptsUsed=e},setWin:function(e){s.win=e},setGameOver:function(e){s.over=e},resetGame:function(){s.numberOfAttempts=0,s.numberOfAttemptsUsed=0,s.sunkenShipFleet=[],s.win=!1,s.over=!1}})}export{r as u};
