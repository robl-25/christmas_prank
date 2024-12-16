<script setup lang="ts">
import { delay } from '@/composables/time'
import { ref } from 'vue'

const props = defineProps<{
  seconds: number,
}>()

const total = props.seconds
const counter = ref(props.seconds)

loop()

async function loop() {
  for (let index = props.seconds; index > 0; index--) {
    counter.value -= 1
    
    await delay(1000)
  }
}
</script>

<template>
  <div class="clock clock-reverse">
    <div class="up" :class="'up-' + counter + ' gradient-white-gray'" >{{ counter }}</div>
    <div class="down" :class="'down-' + counter" >{{ counter }}</div>
  </div>
  <div class="body">
    <p>{{ counter }}</p>
  </div>
</template>

<style lang="scss" scoped>

$clockReverseWidth: 100px;
$clockReverseHeight: 50px;
$clockReversePadding: 10px;
$clockReverseTotal: 120;

* {
  box-sizing: border-box;
}

.gradient-white-gray {
  background: linear-gradient(to bottom, #000000 0%,#111 100%); /* W3C */
}

.clock {
   display: inline-block;
   vertical-align: top;
   color: #E74C3C;
   margin: 40px 50px;

   .up, .down {
    left: 0; right: 0;
    text-align: center;
    overflow: hidden;
    position: absolute;
    backface-visibility: hidden;
    animation-fill-mode: forwards;  
  } 

  .up {
    top: 0; bottom: 50%;
    transform-origin: 50% 100%;
  }   

  .down {
    top: 50%; bottom: 0;    
    background: black;
    transform-origin: 50% 0%;
    line-height: 0px;
  }
}

.clock-reverse {
   width: $clockReverseWidth;
   height: $clockReverseHeight;
   background: black;
   position: relative;
   padding: $clockReversePadding;
   perspective: 1000px;

  .up, .down {
    font-size: $clockReverseHeight - $clockReversePadding; 
  }

  .up {
    line-height: $clockReverseHeight;
  }

  $i: $clockReverseTotal;

  @while $i > 0 { 
    .up-#{$i} {
      animation: flip-up 1s 1; 
      animation-delay: #{$clockReverseTotal - $i}s;
      animation-fill-mode: forwards;  
      z-index: $i;
    }
    $i : $i - 1;
  }
  
  $i: $clockReverseTotal;

  @while $i >= 0 {
    .down-#{$i} {
      animation: flip-up-back 1s 1;
      transform: rotate3d(-1, 0, 0,180deg);
      animation-delay: #{$clockReverseTotal - $i - 1}s;
      animation-fill-mode: forwards;   
      z-index: $clockReverseTotal - $i; 
    }

    $i : $i - 1;
  }
}

 
@-webkit-keyframes flip-up /* Safari and Chrome */
{
  from {transform: rotate3d(0,0,0,0deg)}
  to {transform: rotate3d(1, 0, 0, 180deg)}
} 

@-webkit-keyframes flip-up-back /* Safari and Chrome */
{
  from {transform: rotate3d(-1, 0, 0,180deg); }
  to {transform: rotate3d(0,0,0,0deg);}
} 

@keyframes flip-up 
{
  from {transform: rotate3d(0,0,0,0deg)}
  to {transform: rotate3d(1, 0, 0, 180deg)}
} 

@keyframes flip-up-back
{
  from {transform: rotate3d(-1, 0, 0,180deg); }
  to {transform: rotate3d(0,0,0,0deg);}
} 

@-webkit-keyframes fade /* Safari and Chrome */
{
  0% {opacity: 0; -webkit-filter: blur(2px); }
  25% {opacity: 1; -webkit-filter: blur(0px);}
  75% {opacity: 1; -webkit-filter: blur(0px);}
  100% {opacity: 0; -webkit-filter: blur(2px);}
} 

@keyframes fade
{
  0% {opacity: 0; }
  25% {opacity: 1;}
  75% {opacity: 1;}
  100% {opacity: 0}
}
</style>