<script setup lang="ts">
import { onMounted, ref } from 'vue';

const props = defineProps<{
  file: string
}>()

const playerButtonElement = ref()
const playerButtonDisplay = ref('contents')
const audioElement = ref()

onMounted(() => {
  playerButtonElement.value.click()
})

function playMusic() {
  const promise = audioElement.value?.play()

  if (promise !== undefined) {
    promise.then((_: any) => {
      // Autoplay started!
      playerButtonDisplay.value = 'contents'
    }).catch((_: any) => {
      // Error to autostart. Show button for user to click to start audio
      playerButtonDisplay.value = 'block'
    });
  }
}
</script>

<template>
  <input 
    type="button" 
    value='Play' 
    ref="playerButtonElement" 
    @click="playMusic()" 
    :style="{ display: playerButtonDisplay }"
  >
  <audio loop ref="audioElement">
    <source :src="file" type="audio/mpeg"></source>
  </audio>
</template>