import{s as e,k as t,z as n,d as a,p as l,b as s,o,c as i,w as r,A as c,u,e as d,a as m,F as v,q as p,t as f,j as h}from"./vendor.9e925689.js";import{u as b}from"./config.26398668.js";import{u as k}from"./game.f343fb70.js";var g,A;(A=g||(g={})).DESTROYER="destroyer",A.SUBMARINE="submarine",A.CRUISER="cruiser",A.BATTLESHIP="battleship";function S(){const a=e(10),l=e([]),s=t((()=>{return e=a.value,[{id:1,name:g.DESTROYER,size:1,directions:{horizontal:[0],vertical:[0]},count:4},{id:2,name:g.SUBMARINE,size:2,directions:{horizontal:[0,1],vertical:[0,e]},count:3},{id:3,name:g.CRUISER,size:3,directions:{horizontal:[0,1,2],vertical:[0,e,2*e]},count:2},{id:4,name:g.BATTLESHIP,size:4,directions:{horizontal:[0,1,2,3],vertical:[0,e,2*e,3*e]},count:1}];var e})),{saveGameHistory:o,addSunkenShip:i,setTotalAttempts:r,setAttemptsRemaining:c,setWin:u,setGameOver:d}=k(),{setAttempts:m,config:v}=b();function p(){for(let e=0;e<a.value*a.value;e++)l.value.push({taken:!1,boom:!1,miss:!1})}function f(e){const t=Object.keys(e.directions),n=Math.floor(Math.random()*t.length),s=t[n],o=e.directions[s];let i=0;0===n&&(i=1),1===n&&(i=10);const r=Math.abs(Math.floor(Math.random()*l.value.length-o.length*i)),c=o.some((e=>l.value[r+e].taken)),u=o.some((e=>(r+e)%a.value==a.value-1)),d=o.some((e=>(r+e)%a.value==0));c||u||d?f(e):o.forEach((t=>{l.value[r+t].taken=!0,l.value[r+t].ship=e}))}const h=e(0),A=e(0),S=e(0),E=e(0);const I=e({info:"",destroyed:!1});function R(e){d(!0),u(e),c(v.numberOfAttempts),o()}return n((()=>{p(),s.value.forEach((e=>{for(let t=0;t<e.count;t++)f(e)})),r(v.numberOfAttempts)})),{cells:l,boardSize:a,sunkenShipsInfo:I,createBoard:p,generateShip:f,setCellAttacked:function(e){const t=l.value[e],{taken:n,ship:a}=t,o=v.numberOfAttempts-1;m(o),v.numberOfAttempts>0?(n?((null==a?void 0:a.name)===g.DESTROYER&&h.value++,(null==a?void 0:a.name)===g.SUBMARINE&&A.value++,(null==a?void 0:a.name)===g.CRUISER&&S.value++,(null==a?void 0:a.name)===g.BATTLESHIP&&E.value++,t.boom=!0,function(e){var t,n,a,s;if(e.taken&&e.ship){I.value.info=`${null==(t=e.ship)?void 0:t.name.toString().toUpperCase()} atacado`;const o=l.value.filter((t=>{var n,a;return(null==(n=t.ship)?void 0:n.name)===(null==(a=e.ship)?void 0:a.name)&&t.boom})),i=null!=(a=null==(n=e.ship)?void 0:n.size)?a:1;o.length%i==0&&(I.value.destroyed=!0,I.value.info=`${null==(s=e.ship)?void 0:s.name.toString().toUpperCase()} destruido`)}}(t)):t.miss=!0,function(){const e=10;s.value.forEach((t=>{const{name:n,size:a,count:l}=t,s=a*l;n===g.DESTROYER&&h.value===s&&(i(n),h.value=e),n===g.SUBMARINE&&A.value===s&&(A.value=e,i(n)),n===g.CRUISER&&S.value===s&&(S.value=e,i(n)),n===g.BATTLESHIP&&E.value===s&&(E.value=e,i(n))})),h.value+A.value+S.value+E.value===4*e&&R(!0)}()):R(!1)},shipArray:s}}var E=a({name:"Cell",props:{cell:{type:Object,required:!0},cellIndex:{type:Number,required:!0}},emits:["attack"],setup:(e,{emit:t})=>({handleAttack:()=>{t("attack",e.cellIndex)}})});const I=r();l("data-v-4147809a");const R={key:0,class:"cell miss"},x={key:1,class:"cell boom relative"};s();const y=I(((e,t,n,a,l,s)=>{var r;return e.cell.miss?(o(),i("div",R)):(null==(r=e.cell.ship)?void 0:r.name)&&e.cell.boom?(o(),i("div",x)):(o(),i("div",{key:2,class:"cell",onClick:t[1]||(t[1]=(...t)=>e.handleAttack&&e.handleAttack(...t))}))}));E.render=y,E.__scopeId="data-v-4147809a";var C=a({name:"BattleField",components:{Cell:E},setup(){const e=u(),{cells:t,setCellAttacked:n,sunkenShipsInfo:a}=S(),{config:l}=b(),{game:s}=k();return c((()=>{s.over&&e.push({name:"GameOver"})})),{config:l,sunkenShipsInfo:a,computerCells:t,setCellAttacked:n}}});const B=r();l("data-v-6ad9df18");const O={class:"lg:w-full lg:flex lg:flex-row lg:justify-between xl:justify-around"},z={class:"\n        px-2\n        py-1\n        md:px-6 md:py-2\n        bg-blue-300\n        rounded\n        shadow-inner\n        mb-6\n        lg:mb-0\n      "},T={class:"battleship-grid border-board"},U={class:"rounded text-lg lg:text-2xl"},j={class:"lg:text-center mb-6"},M=h(" Intentos restantes "),w={class:"block font-bold text-white mt-1"},H={class:"lg:text-center"},N=h(" Estado del combate ");s();const D=B(((e,t,n,a,l,s)=>{const r=d("Cell");return o(),i("div",O,[m("div",z,[m("div",T,[(o(!0),i(v,null,p(e.computerCells,((t,n)=>(o(),i(r,{key:n,cell:t,"cell-index":n,onAttack:e.setCellAttacked},null,8,["cell","cell-index","onAttack"])))),128))])]),m("div",U,[m("p",j,[M,m("span",w,f(e.config.numberOfAttempts===1/0?"Ilimitados":e.config.numberOfAttempts),1)]),m("p",H,[N,m("span",{class:["block font-bold mt-1",[e.sunkenShipsInfo.destroyed?"text-red-400":"text-yellow-300"]]},f(e.sunkenShipsInfo.info||"Empezando"),3)])])])}));C.render=D,C.__scopeId="data-v-6ad9df18";var F=a({name:"BattleshipBoard",components:{BattleField:C}});const L={class:"\n      min-h-screen\n      flex\n      justify-center\n      items-center\n      lg:container lg:mx-auto\n    "};F.render=function(e,t,n,a,l,s){const r=d("BattleField");return o(),i("div",L,[m(r)])};export default F;
