import{q as e,x as t,y as a,d as l,o as s,c as n,z as o,A as r,p as c,b as i,e as u,a as m,F as d,n as v,w as f}from"./vendor.4873629a.js";import{u as p}from"./config.8c65e145.js";import{u as h}from"./game.7f79494e.js";var A,b;(b=A||(A={})).DESTROYER="destroyer",b.SUBMARINE="submarine",b.CRUISER="cruiser",b.BATTLESHIP="battleship";function E(){const l=e(10),s=e([]),n=t((()=>{return e=l.value,[{id:1,name:A.DESTROYER,size:1,directions:{horizontal:[0],vertical:[0]},count:4},{id:2,name:A.SUBMARINE,size:2,directions:{horizontal:[0,1],vertical:[0,e]},count:3},{id:3,name:A.CRUISER,size:3,directions:{horizontal:[0,1,2],vertical:[0,e,2*e]},count:2},{id:4,name:A.BATTLESHIP,size:4,directions:{horizontal:[0,1,2,3],vertical:[0,e,2*e,3*e]},count:1}];var e})),{saveGameHistory:o,addSunkenShip:r,setNumberOfAttempts:c,setNumberOfAttemptsUsed:i,setWin:u,setGameOver:m}=h(),{setAttempts:d,config:v}=p();function f(){for(let e=0;e<l.value*l.value;e++)s.value.push({taken:!1,boom:!1,miss:!1})}function b(e){const t=Object.keys(e.directions),a=Math.floor(Math.random()*t.length),n=t[a],o=e.directions[n];let r=0;0===a&&(r=1),1===a&&(r=10);const c=Math.abs(Math.floor(Math.random()*s.value.length-o.length*r)),i=o.some((e=>s.value[c+e].taken)),u=o.some((e=>(c+e)%l.value==l.value-1)),m=o.some((e=>(c+e)%l.value==0));i||u||m?b(e):o.forEach((t=>{s.value[c+t].taken=!0,s.value[c+t].shipName=e.name.toLowerCase()}))}const E=e(0),k=e(0),R=e(0),S=e(0);function C(e){m(!0),u(e),i(v.numberOfAttempts),o()}return a((()=>{f(),n.value.forEach((e=>{for(let t=0;t<e.count;t++)b(e)})),c(v.numberOfAttempts)})),{cells:s,boardSize:l,createBoard:f,generateShip:b,setCellAttacked:function(e){const t=s.value[e],{taken:a,shipName:l}=t,o=v.numberOfAttempts-1;d(o),v.numberOfAttempts>0?(a?(l===A.DESTROYER&&E.value++,l===A.SUBMARINE&&k.value++,l===A.CRUISER&&R.value++,l===A.BATTLESHIP&&S.value++,t.boom=!0):t.miss=!0,function(){const e=10;n.value.forEach((t=>{const{name:a,size:l,count:s}=t,n=l*s;a===A.DESTROYER&&E.value===n&&(r(a),E.value=e),a===A.SUBMARINE&&k.value===n&&(k.value=e,r(a)),a===A.CRUISER&&R.value===n&&(R.value=e,r(a)),a===A.BATTLESHIP&&S.value===n&&(S.value=e,r(a))})),E.value+k.value+R.value+S.value===4*e&&C(!0)}()):C(!1)},shipArray:n}}var k=l({name:"Cell",props:{cell:{type:Object,required:!0},cellIndex:{type:Number,required:!0}},emits:{attack:e=>e},setup:(e,{emit:t})=>({handleAttack:()=>{t("attack",e.cellIndex)}})});const R={key:0,class:"bg-gray-100"},S={key:1,class:"bg-red-500"};k.render=function(e,t,a,l,o,r){return e.cell.miss?(s(),n("div",R)):e.cell.shipName&&e.cell.boom?(s(),n("div",S)):(s(),n("div",{key:2,onClick:t[1]||(t[1]=(...t)=>e.handleAttack&&e.handleAttack(...t))}))};var C=l({name:"BattleField",components:{Cell:k},setup(){const e=r(),{cells:t,setCellAttacked:a}=E(),{config:l}=p(),{game:s}=h();return o((()=>{s.over&&e.push({name:"GameOver"})})),{config:l,computerCells:t,setCellAttacked:a}}});const I=f();c("data-v-5e2f6ea0");const g={class:"flex justify-center w-full"},B={class:"battleship-grid border-board"};i();const O=I(((e,t,a,l,o,r)=>{const c=u("Cell");return s(),n("div",g,[m("div",B,[(s(!0),n(d,null,v(e.computerCells,((t,a)=>(s(),n(c,{key:a,class:"border-board",cell:t,"cell-index":a,onAttack:e.setCellAttacked},null,8,["cell","cell-index","onAttack"])))),128))])])}));C.render=O,C.__scopeId="data-v-5e2f6ea0";var y=l({name:"BattleshipBoard",components:{BattleField:C}});y.render=function(e,t,a,l,o,r){const c=u("BattleField");return s(),n(c)};export default y;
