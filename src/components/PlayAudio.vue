<script setup lang="ts">
const props = defineProps<{
  file: string
}>()
</script>

<template>
  <audio controls loop autoplay ref="audioElement" :style="{ display: 'contents' }">
    <source :src="file" type="audio/mpeg" />
  </audio>
</template>
