<script setup lang="ts">
import { ref } from 'vue'
import LogoItem from '../components/LogoItem.vue'
import TextAnimated from '../components/TextAnimated.vue'
import NextButton from '../components/NextButton.vue'
import { delay } from '../composables/time.ts'
import { setCookie } from '../composables/cookies.ts'

const showFirst = ref(true)
const showSecond = ref(false)
const showButton = ref(false)

showText()

async function showText() {
  await delay(5000)
  showFirst.value = false
  showSecond.value = true

  await delay(5000)
  showSecond.value = false
  showButton.value = true

  setCookie('players', 'Viviane,Carol,Sandra')
  setCookie('playersToGo', 'Viviane,Carol,Sandra')
  setCookie('level2Rules', 'true')
  setCookie('generalRules', 'true')
  setCookie('loserPlayers', '')
  setCookie('level3Rules', 'true')
  setCookie('level3Losers', '')
}
</script>

<template>
  <div class="container">
    <div class="logo">
      <LogoItem />
    </div>

    <div class="text">
      <TextAnimated
        :text="'Bem-vindas ao jogo de perguntas e respostas que te dá um presente de natal'"
        v-if="showFirst"
      />
      <TextAnimated :text="'Caso vocês vençam! &#128527;'" v-if="showSecond" />
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
