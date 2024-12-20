<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, watch } from 'vue'
import TextAnimated from '../components/TextAnimated.vue'
import NextButton from '../components/NextButton.vue'
import { delay } from '../composables/time.ts'
import { getRandomInt } from '../composables/random.ts'
import { removeItemOnce } from '../composables/array.ts'
import PlayAudio from '@/components/PlayAudio.vue'

const router = useRouter()
const cookiePlayers = localStorage.getItem('players')
const cookiePlayersToGo = localStorage.getItem('playersToGo')
const showRulesCookie = localStorage.getItem('generalRules')
const loserPlayersCookie = localStorage.getItem('loserPlayers')
const showRules = ref(true)
const loserPlayers = loserPlayersCookie?.split(',')

if (!cookiePlayers) {
  router.push({ name: 'home' })
}

const showElements = ref(Array(7).fill(false))
const showButton = ref(false)
const player = ref('')

if (cookiePlayers) {
  const players = cookiePlayers.split(',')
  const playersToGo = cookiePlayersToGo ? cookiePlayersToGo.split(',') : players
  
  player.value = playersToGo[getRandomInt(0, playersToGo.length - 1)]
  
  localStorage.setItem('playersToGo', removeItemOnce(playersToGo, player.value).join(','))
  localStorage.setItem('currentPlayer', player.value)
}

const isLoserPlayer = (loserPlayers !== undefined && loserPlayers.includes(player.value))

if (isLoserPlayer) {
  localStorage.setItem('loserPlayers', removeItemOnce(loserPlayers, player.value).join(','))
}

showText()

async function showText() {
  if ([null, undefined, 'true'].includes(showRulesCookie)) {
    showElements.value[0] = true

    for (let index = 1; index < showElements.value.length; index++) {
      await delay(5000)
      showElements.value[index - 1] = false
      showElements.value[index] = true
    }

    localStorage.setItem('generalRules', 'false')
  } else {
    showRules.value = false
    showElements.value[5] = true

    for (let index = 6; index < showElements.value.length; index++) {
      await delay(5000)
      showElements.value[index - 1] = false
      showElements.value[index] = true
    }
  }

  showButton.value = true
}
</script>

<template>
  <TextAnimated text="Regras" v-if="showRules" />

  <div class="text">
    <TextAnimated text="Vocês precisam passar por 3 níveis para vencer" v-if="showElements[0]" />
    <TextAnimated text="Caso vocês percam, ficam sem presente &#128520;" v-if="showElements[1]" />
    <TextAnimated text="Cada uma terá a sua vez de jogar" v-if="showElements[2]" />
    <TextAnimated text="Quando seu nome aparecer na tela, é a sua vez" v-if="showElements[3]" />
    <TextAnimated text="Preparadas?" v-if="showElements[4]" />
    <PlayAudio file="/drum_roll.mp3" v-if="showElements[5]" />
    <TextAnimated text="Como sou bozinha, vou dar mais uma chance para ..." v-if="isLoserPlayer && showElements[5]" />
    <TextAnimated text="Quem joga agora é ..." v-if="!isLoserPlayer && showElements[5]" />
    <TextAnimated :text="player" v-if="showElements[6]" />
    <PlayAudio file="/crowd_yay_applause.mp3" v-if="showElements[6]" />
    <NextButton url="/first-level" text="Começar o jogo" v-if="showButton" />
  </div>
</template>

<style lang="css" scoped>
.text {
  margin-top: 1rem;
}
</style>
