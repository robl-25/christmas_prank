import{_ as A,a as B}from"./office_party-CyIvg8th.js";import{d as E,r as u,g as m,j as y,a as k,s as w,w as I,c as i,i as s,e as r,f as l,b as c,T as a,F as S,o,N as P,_ as T}from"./index-CVutXtT4.js";import{C as j,I as L}from"./InputAnswer-CzyzKM4j.js";const R={key:0,class:"title"},V={class:"text"},F={key:1,class:"text"},O={class:"menu"},Q={class:"scale"},q={class:"submit"},D={key:2,class:"result"},$={key:3,class:"result"},z=E({__name:"SecondLevel",setup(G){const e=u(Array(6).fill(!1)),v=m("currentPlayer")||"",h=m("level2Rules"),C=(m("loserPlayers")||"").split(","),d=u(),f=u(!1),p=u(!1),_=u(),g=y(()=>{var t;return(t=d.value)==null?void 0:t.answer}),N=y(()=>v==="Sandra"?"Quem é a sua filha favorita?":"Quem é a sua irmã preferida?");b();async function b(){if(e.value[0]=!0,[null,void 0,"true"].includes(h)){for(let t=1;t<e.value.length;t++)await k(5e3),e.value[t-1]=!1,e.value[t]=!0;w("level2Rules","false")}else await k(5e3),e.value[0]=!1,e.value[5]=!0}function x(){e.value[5]=!1,g.value.toLowerCase()==="mariane"?p.value=!0:(f.value=!0,w("loserPlayers",C.concat([v]).join(",")))}return I(()=>{var t;return(t=_.value)==null?void 0:t.finishedTimer},t=>{t&&x()}),(t,n)=>(o(),i(S,null,[e.value[0]?(o(),i("div",R,[s(a,{text:"Nível 2"})])):r("",!0),l("div",V,[e.value[1]?(o(),c(a,{key:0,text:"Neste nível você terá 2 minutos para acertar a resposta"})):r("",!0),e.value[2]?(o(),c(a,{key:1,text:"A pergunta será relacionada à uma pessoa"})):r("",!0),e.value[3]?(o(),c(a,{key:2,text:"Somente será aceito o primero nome da pessoa"})):r("",!0),e.value[4]?(o(),c(a,{key:3,text:"Para pessoas com nome composto, é preciso digitar o nome composto"})):r("",!0)]),e.value[5]?(o(),i("div",F,[l("div",O,[s(j,{seconds:120})]),s(a,{text:N.value,ref_key:"counterElement",ref:_},null,8,["text"]),l("div",Q,[s(L,{ref_key:"answerInput",ref:d},null,512)]),l("div",q,[l("button",{class:"button-submit",role:"button",onClick:n[0]||(n[0]=J=>x())},"Enviar")])])):r("",!0),f.value?(o(),i("div",D,[n[1]||(n[1]=l("img",{src:A,alt:"Office Sad"},null,-1)),s(a,{text:"Não vale mentir!"}),s(a,{text:"Pela mentira você perdeu"}),s(P,{url:"/rules",text:"Próxima jogadora"})])):r("",!0),p.value?(o(),i("div",$,[n[2]||(n[2]=l("img",{src:B,alt:"Office Party"},null,-1)),s(a,{text:"Correto!!!"}),s(a,{text:"Preparada para próxima fase?"}),s(P,{url:"/third-level",text:"Próximo nível"})])):r("",!0)],64))}}),W=T(z,[["__scopeId","data-v-c49506ea"]]);export{W as default};
