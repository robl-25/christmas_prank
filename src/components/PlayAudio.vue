<script setup lang="ts">
import { onMounted, ref } from 'vue'

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
    promise
      .then(() => {
        // Autoplay started!
        playerButtonDisplay.value = 'contents'
      })
      .catch(() => {
        // Error to autostart. Show button for user to click to start audio
        playerButtonDisplay.value = 'block'
      })
  }
}
</script>

<template>
  <input type="button" value="Play" ref="playerButtonElement" @click="playMusic()" class="button" />
  <audio controls loop autoplay ref="audioElement" :style="{ display: playerButtonDisplay }">
    <source :src="file" type="audio/mpeg" />
  </audio>
</template>

<style lang="scss" scoped>
.button {
  display: contents;
}
</style>
