import{_ as B,a as V}from"./office_party-CyIvg8th.js";import{d as j,r as i,j as y,a as c,w as T,c as m,i as u,e as a,f as v,b as o,T as s,F as N,o as e,_ as p,N as E,h as R}from"./index-nfsDun92.js";import{C as D,I as G}from"./InputAnswer-CGS6FNrn.js";import{r as z,g as F}from"./array-BW-tUbaS.js";const J={key:0,class:"title"},K={class:"text"},M={key:3},U={key:1,class:"text"},$={class:"menu"},H={class:"scale"},W={class:"submit"},X={key:2,class:"result"},Y={key:3,class:"result"},Z={key:4,class:"result"},ee=j({__name:"ThirdLevel",setup(ae){var Q;const l=i(Array(6).fill(!1)),f=localStorage.getItem("currentPlayer")||"",P=localStorage.getItem("level2Rules"),A=(localStorage.getItem("level3Losers")||"").split(","),g=((Q=localStorage.getItem("players"))==null?void 0:Q.split(","))||[],x=i(),h=i(!1),_=i(!1),k=i(!1),q=i(!1),r=i(Array(7).fill(!1)),w=[{question:"Qual o último elemento da tabela periódica?",answer:"Og"},{question:"Qual o primeiro ator à ganhar um oscar?",answer:"Emil Jannings"},{question:"Qual o único tipo de papagaio que não pode voar?",answer:"Kakapo"},{question:"Qual a velocidade de rotação da terra?",answer:"1669,8 km/h"},{question:"Qual ativista, agente secreto e empreendedor francês tem uma Cheeta como pet que se chama Chiquita?",answer:"Josephine Baker"},{question:"Qual o nome da disnatia atual de Monaco?",answer:"Grimaldi"},{question:"Quem ganhou a primeira copa do mundo?",answer:"Uruguai"},{question:"O que os romanos usavam como enxaguate bucal?",answer:"Urina"},{question:"Quantas terras cabem dentro da fotosfera do sol?",answer:"1.3 milhões"},{question:"O que pessoas com aletorofobia têm medo?",answer:"Galinhas"},{question:"Qual o único país do mundo que tem a biblía na bandeira nacional?",answer:"República Dominicana"},{question:"Qual grife está por trás do perfume <i>Light Blue</i>?",answer:"Dolce & Gabbana"},{question:"Qual o menor osso do corpo humano?",answer:"Estribo"},{question:"O que a palavra <i>Karaoke</i> siginificamente literalmente?",answer:"Osquestra vazia"},{question:"Em suéco, <i>Skvader</i> é um coelho com qual característica incomum?",answer:"Asas"}],b=i(),I=y(()=>localStorage.getItem("players")===""||g.length===1&&g[0]===f),n=i(Array(6).fill(!1)),L=y(()=>{var t;return(t=x.value)==null?void 0:t.answer}),C=y(()=>F(0,w.length));O();async function O(){if(l.value[0]=!0,[null,void 0,"true"].includes(P)){for(let t=1;t<l.value.length;t++)await c(5e3),l.value[t-1]=!1,l.value[t]=!0;localStorage.setItem("level3Rules","false")}else{if(I.value){await c(5e3),l.value[0]=!1,n.value[0]=!0;let t=1;for(t=1;t<n.value.length;t++)await c(5e3),n.value[t-1]=!1,n.value[t]=!0}await c(5e3),n.value[n.value.length-1]=!1,l.value[5]=!0}}async function S(){if(l.value[5]=!1,L.value.toLowerCase()===w[C.value].answer.toLocaleLowerCase())_.value=!0;else if(h.value=!0,localStorage.setItem("level3Losers",A.concat([f]).join(",")),localStorage.setItem("players",z(g,f).join(",")),localStorage.getItem("players")===""){await c(5e3),h.value=!1,q.value=!0,r.value[0]=!0,await c(5e3);for(let t=1;t<r.value.length;t++)await c(5e3),r.value[t-1]=!1,r.value[t]=!0}else k.value=!0}return T(()=>{var t;return(t=b.value)==null?void 0:t.finishedTimer},t=>{t&&S()}),(t,d)=>(e(),m(N,null,[l.value[0]?(e(),m("div",J,[u(s,{text:"Nível 3"})])):a("",!0),v("div",K,[l.value[1]?(e(),o(s,{key:0,text:"Este nível testará seus conhecimentos gerais"})):a("",!0),l.value[2]?(e(),o(s,{key:1,text:"Este é o último nível"})):a("",!0),l.value[3]?(e(),o(s,{key:2,text:"Se você ganhar, ganhará um presente maravilhoso"})):a("",!0),I.value?(e(),m("div",M,[n.value[0]?(e(),o(s,{key:0,text:"Parece que você é a última a jogar e ninguém passou deste nível até agora"})):a("",!0),n.value[1]?(e(),o(s,{key:1,text:"Então, vou diminuir a dificuldade deste nível"})):a("",!0),n.value[2]?(e(),o(s,{key:2,text:"Somente para você, valendo 3 presentes:"})):a("",!0),n.value[3]?(e(),o(s,{key:3,text:"Imagine que você está em um avião com outras 36 pessoas sentadas"})):a("",!0),n.value[4]?(e(),o(s,{key:4,text:"Metade se levanta e sai do avião"})):a("",!0),n.value[5]?(e(),o(s,{key:5,text:"Do restante, metade se levanta e se prepara para sair do avião"})):a("",!0)])):a("",!0)]),l.value[5]?(e(),m("div",U,[v("div",$,[u(D,{seconds:5,ref_key:"counterElement",ref:b},null,512)]),u(s,{text:w[C.value].question},null,8,["text"]),v("div",H,[u(G,{ref_key:"answerInput",ref:x},null,512)]),v("div",W,[v("button",{class:"button-submit",role:"button",onClick:d[0]||(d[0]=se=>S())},"Enviar")])])):a("",!0),h.value?(e(),m("div",X,[u(p,{file:"/fail_jingle_stereo.mp3"}),d[1]||(d[1]=v("img",{src:B,alt:"Office Sad"},null,-1)),u(s,{text:"Hmm, não era essa a resposta"}),u(s,{text:"Você chegou tão perto, mas perdeu mesmo assim"}),k.value?(e(),o(E,{key:0,url:"/rules",text:"Próxima jogadora"})):a("",!0)])):a("",!0),q.value?(e(),m("div",Y,[r.value[0]?(e(),o(p,{key:0,file:"/sci_fi_warning_alert.mp3"})):a("",!0),r.value[0]?(e(),o(s,{key:1,text:"Espera aí, não acabou"})):a("",!0),r.value[1]?(e(),o(s,{key:2,text:"Vocês chegaram tão perto, mas ninguém ganhou"})):a("",!0),r.value[2]?(e(),o(s,{key:3,text:"Como estamos em espirito natalino"})):a("",!0),r.value[3]?(e(),o(s,{key:4,text:"Vou fazer uma boa ação"})):a("",!0),r.value[4]?(e(),o(s,{key:5,text:"Vou sortear os presentes de vocês"})):a("",!0),r.value[5]?(e(),o(s,{key:6,text:"O resultado é ..."})):a("",!0),r.value[6]?(e(),o(p,{key:7,file:"/christmas_song.mp3"})):a("",!0),r.value[6]?(e(),o(s,{key:8,text:"Sandra, você ganhou o presente 3"})):a("",!0),r.value[6]?(e(),o(s,{key:9,text:"Carol, você ganhou o presente 1"})):a("",!0),r.value[6]?(e(),o(s,{key:10,text:"Viviane, você ganhou o presente 2"})):a("",!0)])):a("",!0),_.value?(e(),m("div",Z,[u(p,{file:"/pleased_crowd.mp3"}),d[2]||(d[2]=v("img",{src:V,alt:"Office Party"},null,-1)),u(s,{text:"Correto!!!"}),u(s,{text:"Parabéns!!"}),u(E,{url:"/rules",text:"Próxima jogadora"})])):a("",!0)],64))}}),ue=R(ee,[["__scopeId","data-v-fcd91ab9"]]);export{ue as default};