<template>
  <ul class="lightrope">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</template>

<style lang="css" scoped>
* {
  --globe-width: 12px;
  --globe-height: 28px;
  --globe-spacing: 40px;
  --globe-spread: 3px;
  --light-off-opacity: 0.4;
}

.lightrope {
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  margin: 0;
  padding: 0;
  pointer-events: none;
  width: 100%;

  li {
    position: relative;
    animation-fill-mode: both;
    animation-iteration-count:infinite;
    list-style: none;
    margin: calc(var(--globe-spacing) / 2);
    padding: 0;
    display: block;
    width: var(--globe-width);
    height: var(--globe-height);
    border-radius: 50%;
    display: inline-block;
    background: rgba(0,247,165,1);
    box-shadow: 0px var(--globe-height) / 6 var(--globe-width) * 2 var(--globe-spread) rgba(0,247,165,1);
    animation-name: flash-1;
    animation-duration: 2s;

    &:nth-child(2n+1) {
      background: rgba(0,255,255,1);
      box-shadow: 0px var(--globe-height) / 6 var(--globe-width) * 2 var(--globe-spread) rgba(0,255,255,0.5);
      animation-name: flash-2;
      animation-duration: 0.4s;
    }

    &:nth-child(4n+2) {
      background: rgba(247,0,148,1);
      box-shadow: 0px var(--globe-height) / 6 var(--globe-width) * 2 var(--globe-spread) rgba(247,0,148,1);
      animation-name: flash-3;
      animation-duration: 1.1s;
    }

    &:nth-child(odd) {
      animation-duration: 1.8s;
    }

    &:nth-child(3n+1) {
      animation-duration: 1.4s;
    }

    &:before {
      content: "";
      position: absolute;
      background: #222;
      width: calc(var(--globe-width) - 2px);
      height: calc(var(--globe-height) / 3);
      border-radius: 3px;
      top: calc(0px - (var(--globe-height) / 6));
      left: 1px;
    }

    &:after {
      content: "";
      top: calc(0px - var(--globe-height) / 2);
      left: calc(var(--globe-width) - 3px);
      position: absolute;
      width: calc(var(--globe-spacing) + 12px);
      height: calc(var(--globe-height) / 3 * 2);
      border-bottom: solid #222 2px;
      border-radius: 50%;
    }

    &:last-child:after {
      content: none;
    }
  }
}
@keyframes flash-1 {
    0%, 100% { background: rgba(0,247,165,1);
    box-shadow: 0px var(--globe-height) / 6 var(--globe-width) * 2 var(--globe-spread) rgba(0,247,165,1);}
    50% { background: rgba(0,247,165,var(--light-off-opacity));
    box-shadow: 0px var(--globe-height) / 6 var(--globe-width) * 2 var(--globe-spread) rgba(0,247,165,0.2);}
}
@keyframes flash-2 {
    0%, 100% { background: rgba(0,255,255,1);
    box-shadow: 0px var(--globe-height) / 6 var(--globe-width) * 2 var(--globe-spread) rgba(0,255,255,1);}
    50% { background: rgba(0, 255, 255, var(--light-off-opacity));
    box-shadow: 0px var(--globe-height)/6 var(--globe-width) * 2 var(--globe-spread) rgba(0,255,255,0.2);}
}
@keyframes flash-3 {
    0%, 100% { background: rgba(247,0,148,1);
    box-shadow: 0px var(--globe-height) / 6 var(--globe-width) * 2 var(--globe-spread) rgba(247,0,148,1);}
    50% { background: rgba(247, 0, 148, var(--light-off-opacity));
    box-shadow: 0px var(--globe-height) / 6 var(--globe-width) * 2 var(--globe-spread) rgba(247,0,148,0.2);}
}
</style>
