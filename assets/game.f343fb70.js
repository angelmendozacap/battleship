import{x as t,y as e,k as n}from"./vendor.9e925689.js";const s=e({totalAttempts:0,attemptsRemaining:0,sunkenShipFleet:[],win:!1,over:!1,date:""});function a(){const e=n((()=>{const t=localStorage.getItem("_GAME_HISTORY")||"[]";return JSON.parse(t)||[]}));return t({game:s,addSunkenShip:function(t){s.sunkenShipFleet.push(t)},gameHistory:e,saveGameHistory:function(){const t=e.value;s.date=new Date,t.push(s),localStorage.setItem("_GAME_HISTORY",JSON.stringify(t))},setTotalAttempts:function(t){s.totalAttempts=t},setAttemptsRemaining:function(t){s.attemptsRemaining=t},setWin:function(t){s.win=t},setGameOver:function(t){s.over=t},resetGame:function(){s.totalAttempts=0,s.attemptsRemaining=0,s.sunkenShipFleet=[],s.win=!1,s.over=!1,s.date=""}})}export{a as u};