import{_ as C,a as b}from"./office_party-CyIvg8th.js";import{d as N,r as u,j as x,a as y,w as A,c as i,i as a,e as r,f as l,b as c,T as s,F as B,o,_ as w,N as g,h as E}from"./index-nfsDun92.js";import{C as T,I as j}from"./InputAnswer-CGS6FNrn.js";const L={key:0,class:"title"},R={class:"text"},V={key:1,class:"text"},F={class:"menu"},O={class:"scale"},Q={class:"submit"},$={key:2,class:"result"},q={key:3,class:"result"},D=N({__name:"SecondLevel",setup(z){const e=u(Array(6).fill(!1)),m=localStorage.getItem("currentPlayer")||"",k=localStorage.getItem("level2Rules"),P=(localStorage.getItem("loserPlayers")||"").split(","),d=u(),v=u(!1),f=u(!1),p=u(),h=x(()=>{var t;return(t=d.value)==null?void 0:t.answer}),I=x(()=>m==="Sandra"?"Quem é a sua filha favorita?":"Quem é a sua irmã preferida?");S();async function S(){if(e.value[0]=!0,[null,void 0,"true"].includes(k)){for(let t=1;t<e.value.length;t++)await y(5e3),e.value[t-1]=!1,e.value[t]=!0;localStorage.setItem("level2Rules","false")}else await y(5e3),e.value[0]=!1,e.value[5]=!0}function _(){e.value[5]=!1,h.value.toLowerCase()==="mariane"?f.value=!0:(v.value=!0,localStorage.setItem("loserPlayers",P.concat([m]).join(",")))}return A(()=>{var t;return(t=p.value)==null?void 0:t.finishedTimer},t=>{t&&_()}),(t,n)=>(o(),i(B,null,[e.value[0]?(o(),i("div",L,[a(s,{text:"Nível 2"})])):r("",!0),l("div",R,[e.value[1]?(o(),c(s,{key:0,text:"Neste nível você terá 2 minutos para acertar a resposta"})):r("",!0),e.value[2]?(o(),c(s,{key:1,text:"A pergunta será relacionada à uma pessoa"})):r("",!0),e.value[3]?(o(),c(s,{key:2,text:"Somente será aceito o primero nome da pessoa"})):r("",!0),e.value[4]?(o(),c(s,{key:3,text:"Para pessoas com nome composto, é preciso digitar o nome composto"})):r("",!0)]),e.value[5]?(o(),i("div",V,[l("div",F,[a(T,{seconds:120})]),a(s,{text:I.value,ref_key:"counterElement",ref:p},null,8,["text"]),l("div",O,[a(j,{ref_key:"answerInput",ref:d},null,512)]),l("div",Q,[l("button",{class:"button-submit",role:"button",onClick:n[0]||(n[0]=H=>_())},"Enviar")])])):r("",!0),v.value?(o(),i("div",$,[a(w,{file:"/aww.mp3"}),n[1]||(n[1]=l("img",{src:C,alt:"Office Sad"},null,-1)),a(s,{text:"Não vale mentir!"}),a(s,{text:"Pela mentira você perdeu"}),a(g,{url:"/rules",text:"Próxima jogadora"})])):r("",!0),f.value?(o(),i("div",q,[a(w,{file:"/pleased_crowd.mp3"}),n[2]||(n[2]=l("img",{src:b,alt:"Office Party"},null,-1)),a(s,{text:"Correto!!!"}),a(s,{text:"Preparada para próxima fase?"}),a(g,{url:"/third-level",text:"Próximo nível"})])):r("",!0)],64))}}),U=E(D,[["__scopeId","data-v-4176bc4e"]]);export{U as default};