import{_ as j}from"./office_party-CZEYPyoB.js";import{d as N,r as c,j as B,a as m,w as T,c as v,i,e as a,f as d,b as t,T as s,N as y,F as R,o as e,_ as f,h as D}from"./index-CWSde2Nw.js";import{C as $,I as z}from"./InputAnswer-CqcSxASV.js";import{r as G,g as M}from"./array-BW-tUbaS.js";const F="/christmas_prank/shrugging.gif",J={key:0,class:"title"},K={class:"text"},U={key:3},H={key:1,class:"text"},W={class:"menu"},X={class:"scale"},Y={class:"submit"},Z={key:2,class:"result"},ee={key:3,class:"result"},ae={key:4,class:"result"},te=N({__name:"ThirdLevel",setup(se){var A;const n=c(Array(6).fill(!1)),p=localStorage.getItem("currentPlayer")||"",O=localStorage.getItem("level2Rules"),h=(localStorage.getItem("level3Losers")||"").split(",")||[],g=((A=localStorage.getItem("players"))==null?void 0:A.split(","))||[],_=c(),x=c(!1),q=c(!1),b=c(!1),I=c(!1),o=c(Array(6).fill(!1)),k=[{question:"Qual o último elemento da tabela periódica?",answer:"Og"},{question:"Qual o primeiro ator à ganhar um oscar?",answer:"Emil Jannings"},{question:"Qual o único tipo de papagaio que não pode voar?",answer:"Kakapo"},{question:"Qual a velocidade de rotação da terra?",answer:"1669,8 km/h"},{question:"Qual ativista, agente secreto e empreendedor francês tem uma Cheeta como pet que se chama Chiquita?",answer:"Josephine Baker"},{question:"Qual o nome da disnatia atual de Monaco?",answer:"Grimaldi"},{question:"Quem ganhou a primeira copa do mundo?",answer:"Uruguai"},{question:"O que os romanos usavam como enxaguate bucal?",answer:"Urina"},{question:"Quantas terras cabem dentro da fotosfera do sol?",answer:"1.3 milhões"},{question:"O que pessoas com aletorofobia têm medo?",answer:"Galinhas"},{question:"Qual o único país do mundo que tem a biblía na bandeira nacional?",answer:"República Dominicana"},{question:"Qual grife está por trás do perfume <i>Light Blue</i>?",answer:"Dolce & Gabbana"},{question:"Qual o menor osso do corpo humano?",answer:"Estribo"},{question:"O que a palavra <i>Karaoke</i> siginificamente literalmente?",answer:"Osquestra vazia"},{question:"Em suéco, <i>Skvader</i> é um coelho com qual característica incomum?",answer:"Asas"}],C=c(),P=B(()=>localStorage.getItem("players")===""||g.length===1&&g[0]===p),u=c(Array(6).fill(!1)),S=c(""),Q=B(()=>M(0,k.length));V();async function V(){if(h.includes(p))return w();if(n.value[0]=!0,[null,void 0,"true"].includes(O)){for(let r=1;r<n.value.length;r++)await m(5e3),n.value[r-1]=!1,n.value[r]=!0;localStorage.setItem("level3Rules","false")}else{if(P.value){await m(5e3),n.value[0]=!1,u.value[0]=!0;let r=1;for(r=1;r<u.value.length;r++)await m(5e3),u.value[r-1]=!1,u.value[r]=!0}await m(5e3),n.value[0]=!1,u.value[u.value.length-1]=!1,n.value[5]=!0}}async function w(){var r;if(n.value[5]=!1,S.value=((r=_.value)==null?void 0:r.answer)||"",S.value.toLowerCase()===k[Q.value].answer.toLocaleLowerCase()?q.value=!0:(x.value=!0,h.includes(p)||localStorage.setItem("level3Losers",h.concat([p]).join(",")),g.includes(p)&&localStorage.setItem("players",G(g,p).join(","))),localStorage.getItem("players")===""){await m(5e3),x.value=!1,I.value=!0,o.value[0]=!0,await m(5e3);for(let l=1;l<7;l++)await m(5e3),o.value[l-1]=!1,o.value[l]=!0}else b.value=!0}function E(r){o.value[r-1]=!1,o.value[r]=!0}return T(()=>{var r;return(r=C.value)==null?void 0:r.finishedTimer},r=>{r&&w()}),(r,l)=>(e(),v(R,null,[n.value[0]?(e(),v("div",J,[i(s,{text:"Nível 3"})])):a("",!0),d("div",K,[n.value[1]?(e(),t(s,{key:0,text:"Este nível testará seus conhecimentos gerais"})):a("",!0),n.value[2]?(e(),t(s,{key:1,text:"Este é o último nível"})):a("",!0),n.value[3]?(e(),t(s,{key:2,text:"Se você ganhar, ganhará um presente maravilhoso"})):a("",!0),P.value?(e(),v("div",U,[u.value[0]?(e(),t(s,{key:0,text:"Parece que você é a última a jogar e ninguém passou deste nível até agora"})):a("",!0),u.value[1]?(e(),t(s,{key:1,text:"Então, vou diminuir a dificuldade"})):a("",!0),u.value[2]?(e(),t(s,{key:2,text:"Somente para você, valendo todos os presentes:"})):a("",!0),u.value[3]?(e(),t(s,{key:3,text:"Imagine que você está em um avião com outras 36 pessoas sentadas"})):a("",!0),u.value[4]?(e(),t(s,{key:4,text:"Metade se levanta e sai do avião"})):a("",!0),u.value[5]?(e(),t(s,{key:5,text:"Do restante, metade se levanta e se prepara para sair do avião"})):a("",!0)])):a("",!0)]),n.value[5]?(e(),v("div",H,[d("div",W,[i($,{seconds:5,ref_key:"counterElement",ref:C},null,512)]),i(s,{text:k[Q.value].question},null,8,["text"]),d("div",X,[i(z,{ref_key:"answerInput",ref:_},null,512)]),d("div",Y,[d("button",{class:"button-submit",role:"button",onClick:l[0]||(l[0]=L=>w())},"Enviar")])])):a("",!0),x.value?(e(),v("div",Z,[i(f,{file:"/fail_jingle_stereo.mp3"}),l[3]||(l[3]=d("img",{src:F,alt:"Shrugging"},null,-1)),i(s,{text:"Hmm, não era essa a resposta"}),i(s,{text:"Você chegou tão perto, mas perdeu mesmo assim"}),b.value?(e(),t(y,{key:0,url:"/rules",text:"Próxima jogadora"})):a("",!0)])):a("",!0),I.value?(e(),v("div",ee,[o.value[0]?(e(),t(f,{key:0,file:"/sci_fi_warning_alert.mp3"})):a("",!0),o.value[0]?(e(),t(s,{key:1,text:"Espera aí, não acabou"})):a("",!0),o.value[1]?(e(),t(s,{key:2,text:"Vocês chegaram tão perto, mas ninguém ganhou"})):a("",!0),o.value[2]?(e(),t(s,{key:3,text:"Como estamos em espírito natalino"})):a("",!0),o.value[3]?(e(),t(s,{key:4,text:"Vou fazer uma boa ação"})):a("",!0),o.value[4]?(e(),t(s,{key:5,text:"Vou sortear os presentes de vocês"})):a("",!0),o.value[5]?(e(),t(f,{key:6,file:"/drum_roll.mp3"})):a("",!0),o.value[5]?(e(),t(s,{key:7,text:"O resultado é ..."})):a("",!0),o.value[6]||o.value[7]||o.value[8]?(e(),t(f,{key:8,file:"/christmas_song.mp3"})):a("",!0),o.value[6]?(e(),t(s,{key:9,text:"Sandra, você ganhou o presente 3"})):a("",!0),o.value[6]?(e(),t(y,{key:10,text:"Próximo presente",onClick:l[1]||(l[1]=L=>E(7))})):a("",!0),o.value[7]?(e(),t(s,{key:11,text:"Carol, você ganhou o presente 1"})):a("",!0),o.value[7]?(e(),t(y,{key:12,text:"Próximo presente",onClick:l[2]||(l[2]=L=>E(8))})):a("",!0),o.value[8]?(e(),t(s,{key:13,text:"Viviane, você ganhou o presente 2"})):a("",!0),o.value[8]?(e(),t(s,{key:14,text:"Contudo esse presente, infelizemente não chegou a tempo."})):a("",!0),o.value[8]?(e(),t(s,{key:15,text:"Mas não se preocupe, ele está à caminho e será maravilhoso 😁"})):a("",!0)])):a("",!0),q.value?(e(),v("div",ae,[i(f,{file:"/pleased_crowd.mp3"}),l[4]||(l[4]=d("img",{src:j,alt:"Office Party"},null,-1)),i(s,{text:"Correto!!!"}),i(s,{text:"Parabéns!!"}),i(y,{url:"/rules",text:"Próxima jogadora"})])):a("",!0)],64))}}),ie=D(te,[["__scopeId","data-v-a21653ab"]]);export{ie as default};