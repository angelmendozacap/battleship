import{x as t,y as n,k as s}from"./vendor.73fd8485.js";const e=n({numberOfAttempts:0});function i(){const n=s((()=>[{value:1/0,description:"Fácil (turnos infinitos)"},{value:100,description:"Medio (100 turnos)"},{value:50,description:"Difícil (50 turnos)"}]));return t({config:e,setAttempts:function(t){e.numberOfAttempts=Number(t)},defaultAttemptsOptions:n})}export{i as u};