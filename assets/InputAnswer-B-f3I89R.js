import{d as _,r as c,a as h,o as p,c as f,f as a,t as u,i as C,_ as I,F as k,h as m,k as y,v as D}from"./index-CaD46AhJ.js";const M={class:"timer"},g={class:"minutes"},B={class:"seconds"},N=_({__name:"CounterDown",props:{seconds:{}},setup(i,{expose:l}){const n=i,o=c(Math.floor(n.seconds/60)),e=c(n.seconds-o.value*60),r=c(!1);x();function v(){const s=o.value;s!==0&&(o.value=s-1)}function d(s){const t=e.value-s,b=o.value;if(t<=0&&b!==0){e.value=59+t,v();return}if(t>0){e.value=t;return}e.value=0}async function x(){for(let s=n.seconds;s>0;s--)d(1),await h(1e3);r.value=!0}function w(s){d(s)}return l({decreaseCounter:w,finishedTimer:r}),(s,t)=>(p(),f(k,null,[a("div",M,[a("div",g,u(o.value<10?"0":"")+u(o.value),1),t[0]||(t[0]=a("div",{class:"separator"},":",-1)),a("div",B,u(e.value<10?"0":"")+u(e.value),1)]),C(I,{file:"/clock_sound.mp3"})],64))}}),A=m(N,[["__scopeId","data-v-0211309d"]]),S={class:"form__group field"},V=_({__name:"InputAnswer",setup(i,{expose:l}){const n=c("");return l({answer:n}),(o,e)=>(p(),f("div",S,[y(a("input",{type:"input",class:"form__field",placeholder:"Name",name:"name",id:"name","onUpdate:modelValue":e[0]||(e[0]=r=>n.value=r),required:""},null,512),[[D,n.value]]),e[1]||(e[1]=a("label",{for:"name",class:"form__label"},"Resposta",-1))]))}}),F=m(V,[["__scopeId","data-v-49c83bdb"]]);export{A as C,F as I};