<script setup lang="ts">
const props = defineProps<{
  file: string
}>()
</script>

<template>
  <audio controls loop autoplay ref="audioElement">
    <source :src="file" type="audio/mpeg" />
  </audio>
</template>
