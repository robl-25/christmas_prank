<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

const props = defineProps<{
  file: string
}>()

const audioElement = ref()
const showElement = ref('none')
const env = import.meta.env.MODE
const audioFile = computed(() => {
  if (env === 'production') {
    return '/christmas_prank/' + props.file
  }

  return props.file
})

onMounted(() => {
  const promise = audioElement.value?.play()

  promise.then(() => (showElement.value = 'none')).catch(() => (showElement.value = 'block'))
})
</script>

<template>
  <audio controls loop autoplay ref="audioElement" :style="{ display: showElement }">
    <source :src="audioFile" type="audio/mpeg" />
  </audio>
</template>
