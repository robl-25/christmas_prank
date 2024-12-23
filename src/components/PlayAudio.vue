<script setup lang="ts">
import { onMounted, ref } from 'vue'

const props = defineProps<{
  file: string
}>()

const playerButtonElement = ref()
const playerButtonDisplay = ref('contents')
const audioElement = ref()
const error = ref('')

onMounted(() => {
  playerButtonElement.value.click()
})

function playMusic() {
  const promise = audioElement.value?.play()

  if (promise !== undefined) {
    promise
      .then((_: unknown) => {
        // Autoplay started!
        playerButtonDisplay.value = 'contents'
      })
      .catch((err: { message: string }) => {
        // Error to autostart. Show button for user to click to start audio
        playerButtonDisplay.value = 'block'
        error.value = err.message
      })
  }
}
</script>

<template>
  <input type="button" value="Play" ref="playerButtonElement" @click="playMusic()" class="button" />
  <audio controls loop ref="audioElement" :style="{ display: playerButtonDisplay }">
    <source :src="file" type="audio/mpeg" />
    Your browser does not support the audio tag.
  </audio>
  {{ error }}
</template>

<style lang="scss" scoped>
.button {
  display: contents;
}
</style>
