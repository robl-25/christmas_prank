<script setup lang="ts">
import { ref } from 'vue'
import LogoItem from '../components/LogoItem.vue'
import TextAnimated from '../components/TextAnimated.vue'
import NextButton from '../components/NextButton.vue'
import { delay } from '../composables/time.ts'
import PlayAudio from '@/components/PlayAudio.vue'

const showElements = ref(Array(3).fill(false))
const showButton = ref(false)

showText()

async function showText() {
  for (let index = 1; index < showElements.value.length; index++) {
    await delay(5000)
    showElements.value[index - 1] = false
    showElements.value[index] = true
  }

  showButton.value = true

  localStorage.setItem('players', 'Viviane,Carol,Sandra')
  localStorage.setItem('playersToGo', 'Viviane,Carol,Sandra')
  localStorage.setItem('level2Rules', 'true')
  localStorage.setItem('generalRules', 'true')
  localStorage.setItem('loserPlayers', '')
  localStorage.setItem('level3Rules', 'true')
  localStorage.setItem('level3Losers', '')
}
</script>

<template>
  <div class="container">
    <div class="logo">
      <LogoItem />
    </div>

    <PlayAudio file="xmas_bells.mp3" />

    <div class="text">
      <TextAnimated text="Ative o som para melhor experiência" v-if="showElements[0]" />
      <TextAnimated
        :text="'Bem-vindas ao jogo de perguntas e respostas que te dá um presente de natal'"
        v-if="showElements[1]"
      />
      <TextAnimated text="Caso vocês vençam! &#128527;" v-if="showElements[2]" />
      <NextButton url="/rules" text="Começar o jogo" v-if="showButton" />
    </div>
  </div>
</template>

<style lang="css" scoped>
.container {
  display: flex;
  flex-direction: column;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  width: 100%;
  height: 100%;
  margin-top: 2rem;
}
</style>
