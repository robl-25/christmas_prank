<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import TextAnimated from '../components/TextAnimated.vue'
import NextButton from '../components/NextButton.vue'

const showFirst = ref(false)
const showSecond = ref(false)
const showThird = ref(false)
const showButton = ref(false)

const delay = ms => new Promise(res => setTimeout(res, ms));

showText()

async function showText() {
  await delay(2000)
  showFirst.value = true

  await delay(5000)
  showFirst.value = false
  showSecond.value = true

  await delay(5000)
  showSecond.value = false
  showThird.value = true

  await delay(5000)
  showThird.value = false
  showButton.value = true
}
</script>

<template>
  <TextAnimated text='Regras' />

  <div class="text">
    <TextAnimated text='Vocês precisam passar por 3 níveis para vencer' v-if="showFirst" />
    <TextAnimated text='Caso vocês percam, ficam sem presente &#128520;' v-if="showSecond" />
    <TextAnimated text='Preparadas?' v-if="showThird" />
    <NextButton url="/nivel-1" text="Começar o jogo" v-if="showButton"/>
  </div>
</template>

<style lang="css" scoped>
.text {
  margin-top: 1rem;
}
</style>
