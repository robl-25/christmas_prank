import{_ as P}from"./office_party-CZEYPyoB.js";import{d as C,r as c,a as b,c as r,i as t,e as m,f as s,F as N,g as S,o as u,T as n,_ as x,N as _,h}from"./index-DnnqbeH5.js";const $="/christmas_prank/office_sad.gif",B={key:0,class:"title"},F={key:1,class:"text"},I={class:"scale"},q={key:2,class:"result"},A={key:3,class:"result"},T=C({__name:"FirstLevel",setup(V){var p;const g=S(),o=c(Array(2).fill(!1)),y=c(!1),f=c(!1),v=c(!1),d=localStorage.getItem("currentPlayer")||"",k=((p=localStorage.getItem("loserPlayers"))==null?void 0:p.split(","))||[];d===""&&g.push({name:"home"}),w();async function w(){o.value[0]=!0;for(let a=1;a<o.value.length;a++)await b(5e3),o.value[a-1]=!1,o.value[a]=!0;await b(5e3),y.value=!0}function l(a){const e=o.value;o.value[e.length-1]=!1,a!=5?(f.value=!0,v.value=!1,localStorage.setItem("loserPlayers",k.concat([d]).join(","))):(f.value=!1,v.value=!0)}return(a,e)=>(u(),r(N,null,[o.value[0]?(u(),r("div",B,[t(n,{text:"Nível 1"})])):m("",!0),o.value[1]?(u(),r("div",F,[t(n,{text:"Numa escala de 1 à 5 o quão animada você está para receber seu presente?"}),s("div",I,[s("button",{class:"button button-1",role:"button",onClick:e[0]||(e[0]=i=>l(1))},"1"),s("button",{class:"button button-2",role:"button",onClick:e[1]||(e[1]=i=>l(2))},"2"),s("button",{class:"button button-3",role:"button",onClick:e[2]||(e[2]=i=>l(3))},"3"),s("button",{class:"button button-4",role:"button",onClick:e[3]||(e[3]=i=>l(4))},"4"),s("button",{class:"button neonShadow",role:"button",onClick:e[4]||(e[4]=i=>l(5))},e[5]||(e[5]=[s("span",null,"5",-1)]))])])):m("",!0),f.value?(u(),r("div",q,[t(x,{file:"/aww.mp3"}),e[6]||(e[6]=s("img",{src:$,alt:"Office Sad"},null,-1)),t(n,{text:"Hmm, você não parece animada o suficiente"}),t(n,{text:"Acho que não quer ganhar presente"}),t(n,{text:"Por isso, você perdeu"}),t(_,{url:"/rules",text:"Próxima jogadora"})])):m("",!0),v.value?(u(),r("div",A,[t(x,{file:"/yeah_song.mp3"}),e[7]||(e[7]=s("img",{src:P,alt:"Office Party"},null,-1)),t(n,{text:"Gostei da animação"}),t(n,{text:"Preparada para próxima fase?"}),t(_,{url:"/second-level",text:"Próximo nível"})])):m("",!0)],64))}}),H=h(T,[["__scopeId","data-v-30006671"]]);export{H as default};