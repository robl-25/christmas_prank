import{_ as N}from"./office_party-CZEYPyoB.js";import{d as R,r as c,j,a as v,w as D,c as d,i,e as a,f,b as o,T as t,F as G,g as z,o as e,_ as g,N as B,h as F}from"./index-BM99LMcU.js";import{C as J,I as K}from"./InputAnswer-CinOAroX.js";import{r as M,g as U}from"./array-BW-tUbaS.js";const $="/christmas_prank/shrugging.gif",H={key:0,class:"title"},W={class:"text"},X={key:3},Y={key:1,class:"text"},Z={class:"menu"},ee={class:"scale"},ae={class:"submit"},te={key:2,class:"result"},se={key:3,class:"result"},oe={key:4,class:"result"},re=R({__name:"ThirdLevel",setup(le){var A,P,L;const O=z(),n=c(Array(6).fill(!1)),m=localStorage.getItem("currentPlayer")||"",V=localStorage.getItem("level2Rules"),h=((A=localStorage.getItem("level3Losers"))==null?void 0:A.split(","))||[],p=((P=localStorage.getItem("players"))==null?void 0:P.split(","))||[],k=c(),w=c(!1),q=c(!1),b=c(!1),I=c(!1),r=c(Array(7).fill(!1)),S=((L=localStorage.getItem("askedQuestions"))==null?void 0:L.split(","))||[],y=[{question:"Qual o último elemento da tabela periódica?",answer:"Og"},{question:"Qual o primeiro ator à ganhar um oscar?",answer:"Emil Jannings"},{question:"Qual o único tipo de papagaio que não pode voar?",answer:"Kakapo"},{question:"Qual a velocidade de rotação da terra?",answer:"1669,8 km/h"},{question:"Qual ativista, agente secreto e empreendedor francês tem uma Cheeta como pet que se chama Chiquita?",answer:"Josephine Baker"},{question:"Qual o nome da disnatia atual de Monaco?",answer:"Grimaldi"},{question:"Quem ganhou a primeira copa do mundo?",answer:"Uruguai"},{question:"O que os romanos usavam como enxaguate bucal?",answer:"Urina"},{question:"Quantas terras cabem dentro da fotosfera do sol?",answer:"1.3 milhões"},{question:"O que pessoas com aletorofobia têm medo?",answer:"Galinhas"},{question:"Qual o único país do mundo que tem a biblía na bandeira nacional?",answer:"República Dominicana"},{question:"Qual grife está por trás do perfume <i>Light Blue</i>?",answer:"Dolce & Gabbana"},{question:"Qual o menor osso do corpo humano?",answer:"Estribo"},{question:"O que a palavra <i>Karaoke</i> siginificamente literalmente?",answer:"Osquestra vazia"},{question:"Em suéco, <i>Skvader</i> é um coelho com qual característica incomum?",answer:"Asas"}],Q=c(),C=j(()=>localStorage.getItem("players")===""||p.length===1&&p[0]===m),u=c(Array(6).fill(!1)),E=c(""),x=j(()=>{let s=!0,l=0;for(;s;)l=U(0,y.length),S.includes(l.toString(10))||(s=!1);return l});T();async function T(){if(m===""&&O.push({name:"home"}),h.includes(m))return _();if(localStorage.setItem("askedQuestions",S.concat([x.value.toString(10)]).join(",")),n.value[0]=!0,[null,void 0,"true"].includes(V)){for(let s=1;s<n.value.length;s++)await v(5e3),n.value[s-1]=!1,n.value[s]=!0;localStorage.setItem("level3Rules","false")}else{if(C.value){await v(5e3),n.value[0]=!1,u.value[0]=!0;let s=1;for(s=1;s<u.value.length;s++)await v(5e3),u.value[s-1]=!1,u.value[s]=!0}await v(5e3),n.value[0]=!1,u.value[u.value.length-1]=!1,n.value[5]=!0}}async function _(){var s;if(n.value[5]=!1,E.value=((s=k.value)==null?void 0:s.answer)||"",E.value.toLowerCase()===y[x.value].answer.toLocaleLowerCase()?q.value=!0:(w.value=!0,h.includes(m)||localStorage.setItem("level3Losers",h.concat([m]).join(",")),p.includes(m)&&localStorage.setItem("players",M(p,m).join(","))),localStorage.getItem("players")===""){await v(5e3),w.value=!1,I.value=!0,r.value[0]=!0,await v(5e3);for(let l=1;l<r.value.length;l++)await v(5e3),r.value[l-1]=!1,r.value[l]=!0}else b.value=!0}return D(()=>{var s;return(s=Q.value)==null?void 0:s.finishedTimer},s=>{s&&_()}),(s,l)=>(e(),d(G,null,[n.value[0]?(e(),d("div",H,[i(t,{text:"Nível 3"})])):a("",!0),f("div",W,[n.value[1]?(e(),o(t,{key:0,text:"Este nível testará seus conhecimentos gerais"})):a("",!0),n.value[2]?(e(),o(t,{key:1,text:"Este é o último nível"})):a("",!0),n.value[3]?(e(),o(t,{key:2,text:"Se você ganhar, ganhará um presente maravilhoso"})):a("",!0),C.value?(e(),d("div",X,[u.value[0]?(e(),o(t,{key:0,text:"Parece que você é a última a jogar e ninguém passou deste nível até agora"})):a("",!0),u.value[1]?(e(),o(t,{key:1,text:"Então, vou diminuir a dificuldade"})):a("",!0),u.value[2]?(e(),o(t,{key:2,text:"Somente para você, valendo todos os presentes:"})):a("",!0),u.value[3]?(e(),o(t,{key:3,text:"Imagine que você está em um avião com outras 36 pessoas sentadas"})):a("",!0),u.value[4]?(e(),o(t,{key:4,text:"Metade se levanta e sai do avião"})):a("",!0),u.value[5]?(e(),o(t,{key:5,text:"Do restante, metade se levanta e se prepara para sair do avião"})):a("",!0)])):a("",!0)]),n.value[5]?(e(),d("div",Y,[f("div",Z,[i(J,{seconds:5,ref_key:"counterElement",ref:Q},null,512)]),i(t,{text:y[x.value].question},null,8,["text"]),f("div",ee,[i(K,{ref_key:"answerInput",ref:k},null,512)]),f("div",ae,[f("button",{class:"button-submit",role:"button",onClick:l[0]||(l[0]=ne=>_())},"Enviar")])])):a("",!0),w.value?(e(),d("div",te,[i(g,{file:"/fail_jingle_stereo.mp3"}),l[1]||(l[1]=f("img",{src:$,alt:"Shrugging"},null,-1)),i(t,{text:"Hmm, não era essa a resposta"}),i(t,{text:"Você chegou tão perto, mas perdeu mesmo assim"}),b.value?(e(),o(B,{key:0,url:"/rules",text:"Próxima jogadora"})):a("",!0)])):a("",!0),I.value?(e(),d("div",se,[r.value[0]?(e(),o(g,{key:0,file:"/sci_fi_warning_alert.mp3"})):a("",!0),r.value[0]?(e(),o(t,{key:1,text:"Espera aí, não acabou"})):a("",!0),r.value[1]?(e(),o(t,{key:2,text:"Vocês chegaram tão perto, mas ninguém ganhou"})):a("",!0),r.value[2]?(e(),o(t,{key:3,text:"Como estamos em espírito natalino"})):a("",!0),r.value[3]?(e(),o(t,{key:4,text:"Vou fazer uma boa ação"})):a("",!0),r.value[4]?(e(),o(t,{key:5,text:"Vou sortear os presentes de vocês"})):a("",!0),r.value[5]?(e(),o(g,{key:6,file:"/drum_roll.mp3"})):a("",!0),r.value[5]?(e(),o(t,{key:7,text:"O resultado é ..."})):a("",!0),r.value[6]?(e(),o(g,{key:8,file:"/christmas_song.mp3"})):a("",!0),r.value[6]?(e(),o(t,{key:9,text:"Sandra, você ganhou o presente 3"})):a("",!0),r.value[6]?(e(),o(t,{key:10,text:"Carol, você ganhou o presente 1"})):a("",!0),r.value[6]?(e(),o(t,{key:11,text:"Viviane, você ganhou o presente 2"})):a("",!0)])):a("",!0),q.value?(e(),d("div",oe,[i(g,{file:"/pleased_crowd.mp3"}),l[2]||(l[2]=f("img",{src:N,alt:"Office Party"},null,-1)),i(t,{text:"Correto!!!"}),i(t,{text:"Parabéns!!"}),i(B,{url:"/rules",text:"Próxima jogadora"})])):a("",!0)],64))}}),ve=F(re,[["__scopeId","data-v-a86d82fc"]]);export{ve as default};
