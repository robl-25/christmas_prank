<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import TextAnimated from '../components/TextAnimated.vue'
import CounterDown from '../components/CounterDown.vue'
import { delay } from '../composables/time.ts'
import { getCookie, setCookie } from '@/composables/cookies.ts'
import InputAnswer from '@/components/InputAnswer.vue'
import NextButton from '../components/NextButton.vue'

const showElements = ref(Array(6).fill(false))
const currentPlayer = getCookie('currentPlayer') || ''
const showRules = getCookie('level2Rules')
const loserPlayersCookie = getCookie('loserPlayers') || ''
const loserPlayers = loserPlayersCookie.split(',')
const answerInput = ref()
const wrongAnswer = ref(false)
const correctAnswer = ref(false)
const counterElement = ref()!

const answer = computed(() => answerInput.value?.answer)
const question = computed(() => {
  if (currentPlayer === 'Sandra') {
    return 'Quem é a sua filha favorita?'
  }

  return 'Quem é a sua irmã preferida?'
})

showText()

async function showText() {
  showElements.value[0] = true

  if ([null, undefined, 'true'].includes(showRules)) {
    for (let index = 1; index < showElements.value.length; index++) {
      await delay(5000)
      showElements.value[index - 1] = false
      showElements.value[index] = true
    }

    setCookie('level2Rules', 'false')
  } else {
    await delay(5000)
    showElements.value[0] = false
    showElements.value[5] = true
  }
}

function submit() {
  showElements.value[5] = false

  if (answer.value.toLowerCase() === 'mariane') {
    correctAnswer.value = true
  } else {
    wrongAnswer.value = true
    setCookie('loserPlayers', loserPlayers.concat([currentPlayer]).join(','))
  }
}

watch(
  () => counterElement.value?.finishedTimer,
  (timer) => {
    if (timer) {
      submit()
    }
  }
)
</script>

<template>
  <div class="title" v-if="showElements[0]">
    <TextAnimated text="Nível 2" />
  </div>

  <div class="text">
    <TextAnimated
      text="Neste nível você terá 2 minutos para acertar a resposta"
      v-if="showElements[1]"
    />
    <TextAnimated text="A pergunta será relacionada à uma pessoa" v-if="showElements[2]" />
    <TextAnimated text="Somente será aceito o primero nome da pessoa" v-if="showElements[3]" />
    <TextAnimated
      text="Para pessoas com nome composto, é preciso digitar o nome composto"
      v-if="showElements[4]"
    />
  </div>

  <div class="text" v-if="showElements[5]">
    <div class="menu">
      <CounterDown :seconds="120" />
    </div>
    <TextAnimated :text="question" ref="counterElement" />
    <div class="scale">
      <InputAnswer ref="answerInput" />
    </div>
    <div class="submit">
      <button class="button-submit" role="button" @click="submit()">Enviar</button>
    </div>
  </div>

  <div class="result" v-if="wrongAnswer">
    <img src="/office_sad.gif" alt="Office Sad" />
    <TextAnimated text="Não vale mentir!" />
    <TextAnimated text="Pela mentira você perdeu" />
    <NextButton url="/rules" text="Próxima jogadora" />
  </div>

  <div class="result" v-if="correctAnswer">
    <img src="/office_party.gif" alt="Office Party" />
    <TextAnimated text="Correto!!!" />
    <TextAnimated text="Preparada para próxima fase?" />
    <NextButton url="/third-level" text="Próximo nível" />
  </div>
</template>

<style lang="css" scoped>
.result {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
  flex-direction: column;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    max-width: 498px;
    max-height: 199px;
  }
}

.text {
  margin-top: 1rem;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
}

.scale {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

.menu {
  display: flex;
}

.submit {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.button-submit {
  background: linear-gradient(to bottom right, #ef4765, #ff9a5a);
  border: 0;
  border-radius: 12px;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 2.5;
  outline: transparent;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
}

.button-submit:not([disabled]):focus {
  box-shadow:
    0 0 0.25rem rgba(0, 0, 0, 0.5),
    -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
    0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
}

.button-submit:not([disabled]):hover {
  box-shadow:
    0 0 0.25rem rgba(0, 0, 0, 0.5),
    -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
    0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
}
</style>
