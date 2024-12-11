<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import TextAnimated from '../components/TextAnimated.vue'
import NextButton from '../components/NextButton.vue'

const showInOrder = ref(Array(5).fill(false))

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

showText()

async function showText() {
  showInOrder.value[0] = true

  showInOrder.value.forEach((_, index) => {
    if (index === 0) {
      continue
    }

    await delay(5000)
    showInOrder.value[index -1 ] = false
    showInOrder.value[index] = true
  });
}
</script>

<template>
  <TextAnimated text='Regras' />

  <div class="text">
    <TextAnimated text='Vocês precisam passar por 3 níveis para vencer' v-if="showInOrder[0]" />
    <TextAnimated text='Caso vocês percam, ficam sem presente &#128520;' v-if="showInOrder[1]" />
    <TextAnimated text='Vocês precisam passar por 3 níveis para vencer' v-if="showInOrder[2]" />
    <TextAnimated text='Preparadas?' v-if="showInOrder[3]" />
    <NextButton url="/nivel-1" text="Começar o jogo" v-if="showInOrder[4]"/>
  </div>
</template>

<style lang="css" scoped>
.text {
  margin-top: 1rem;
}
</style>
