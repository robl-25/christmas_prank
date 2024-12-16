<script setup lang="ts">
import { computed, ref } from 'vue'
import TextAnimated from '../components/TextAnimated.vue'
import NextButton from '../components/NextButton.vue'
import CounterDown from '../components/CounterDown.vue'
import { delay } from '../composables/time.ts'
import { getRandomInt } from '@/composables/random.ts'
import { getCookie, setCookie } from '@/composables/cookies.ts'

const showElements = ref(Array(10).fill(false))
const showSadness = ref(false)
const showHapiness = ref(false)
const questions = ['Quem é a pessoa mais inteligente?']
const showTips = getCookie('level2Tips')

const question = computed(() => {
  return questions[getRandomInt(0, questions.length - 1)]
})

showText()

async function showText() {
  showElements.value[0] = true

  if ([null, undefined, 'true'].includes(showTips)) {
    for (let index = 1; index < showElements.value.length; index++) {
      await delay(5000)
      showElements.value[index - 1] = false
      showElements.value[index] = true
    }

    setCookie('level2Tips', 'false')
  } else {
    await delay(5000)
    showElements.value[0] = false
    showElements.value[9] = true
  }
}

function hapinessSelection(scale: number) {
  const elements = showElements.value

  showElements.value[elements.length - 1] = false

  if (scale != 5) {
    showSadness.value = true
    showHapiness.value = false
  } else {
    showSadness.value = false
    showHapiness.value = true
  }
}
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
    <TextAnimated text="Você terá direito à 3 dicas" v-if="showElements[5]" />
    <TextAnimated text="A primeira dica diminui 10 segundos do seu tempo" v-if="showElements[6]" />
    <TextAnimated text="A segunda diminui 20 segundos do seu tempo" v-if="showElements[7]" />
    <TextAnimated text="E a terceira diminui 45 segundos do seu tempo" v-if="showElements[8]" />
  </div>

  <div class="text" v-if="showElements[9]">
    <CounterDown :seconds="10" />
    <TextAnimated :text="question" />
    <div class="scale">
      <button class="button button-1" role="button" @click="hapinessSelection(1)">1</button>
      <button class="button button-2" role="button" @click="hapinessSelection(2)">2</button>
      <button class="button button-3" role="button" @click="hapinessSelection(3)">3</button>
      <button class="button button-4" role="button" @click="hapinessSelection(4)">4</button>
      <button class="button neonShadow" role="button" @click="hapinessSelection(5)">
        <span>5</span>
      </button>
    </div>
  </div>

  <div class="result" v-if="showSadness">
    <img src="/office_sad.gif" alt="Office Sad" />
    <TextAnimated text="Hmm, você não parece animada o suficiente" />
    <NextButton url="/rules" text="Próxima jogadora" />
  </div>

  <div class="result" v-if="showHapiness">
    <img src="/office_party.gif" alt="Office Party" />
    <TextAnimated text="Gostei da animação" />
    <TextAnimated text="Preparada para próxima fase?" />
    <NextButton url="/second-level" text="Próximo nível" />
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
  height: 60vh;
}

.button {
  width: 40px;
}

.button-1 {
  align-items: center;
  background-color: #ffe7e7;
  background-position: 0 0;
  border: 1px solid #fee0e0;
  border-radius: 11px;
  box-sizing: border-box;
  color: #d33a2c;
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  font-weight: 700;
  line-height: 33.4929px;
  list-style: outside url(https://www.smashingmagazine.com/images/bullet.svg) none;
  padding: 2px 12px;
  text-align: left;
  text-decoration: none;
  text-shadow: none;
  text-underline-offset: 1px;
  transition:
    border 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  word-break: break-word;
}

.button-1:active,
.button-1:hover,
.button-1:focus {
  outline: 0;
}

.button-1:active {
  background-color: #d33a2c;
  box-shadow: rgba(0, 0, 0, 0.12) 0 1px 3px 0 inset;
  color: #ffffff;
}

.button-1:hover {
  background-color: #ffe3e3;
  border-color: #faa4a4;
}

.button-1:active:hover,
.button-1:focus:hover,
.button-1:focus {
  background-color: #d33a2c;
  box-shadow: rgba(0, 0, 0, 0.12) 0 1px 3px 0 inset;
  color: #ffffff;
}

.button-2 {
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

.button-2:not([disabled]):focus {
  box-shadow:
    0 0 0.25rem rgba(0, 0, 0, 0.5),
    -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
    0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
}

.button-2:not([disabled]):hover {
  box-shadow:
    0 0 0.25rem rgba(0, 0, 0, 0.5),
    -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
    0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
}

.button-3 {
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  display: block;
  border: 0px;
  font-weight: 700;
  box-shadow: 0px 0px 14px -7px #f09819;
  background-image: linear-gradient(45deg, #ff512f 0%, #f09819 51%, #ff512f 100%);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  line-height: 2.5;
  font-size: 16px;
}

.button-3:hover {
  background-position: right center;
  /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}

.button-3:active {
  transform: scale(0.95);
}

.button-4 {
  text-align: center;
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  padding: 0.7em 1.4em 0.7em 1.1em;
  color: white;
  background: #ad5389;
  background: linear-gradient(0deg, rgba(20, 167, 62, 1) 0%, rgba(102, 247, 113, 1) 100%);
  border: none;
  box-shadow: 0 0.7em 1.5em -0.5em #14a73e98;
  letter-spacing: 0.05em;
  border-radius: 10px;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-4:hover {
  box-shadow: 0 0.5em 1.5em -0.5em #14a73e98;
}

.button-4:active {
  box-shadow: 0 0.3em 1em -0.5em #14a73e98;
}

.neonShadow {
  border: none;
  border-radius: 10px;
  transition: 0.3s;
  background-color: rgba(156, 161, 160, 0.3);
  animation: glow 1s infinite;
  transition: 0.5s;
  width: 45px;
  cursor: pointer;
}

span {
  display: block;
  width: 100%;
  height: 100%;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  padding-top: 15%;
  padding-right: 2.5%;
  margin-right: 0px;
  font-size: 1.2rem;
  transition: 0.3s;
  line-height: 2;
}
span:hover {
  transition: 0.3s;
  font-weight: 700;
}

.neonShadow:hover {
  transform: translateX(-20px) rotate(30deg);
  border-radius: 5px;
  background-color: #c3bacc;
  transition: 0.5s;
}

@keyframes glow {
  0% {
    box-shadow:
      5px 5px 20px rgb(93, 52, 168),
      -5px -5px 20px rgb(93, 52, 168);
  }

  50% {
    box-shadow:
      5px 5px 20px rgb(81, 224, 210),
      -5px -5px 20px rgb(81, 224, 210);
  }
  100% {
    box-shadow:
      5px 5px 20px rgb(93, 52, 168),
      -5px -5px 20px rgb(93, 52, 168);
  }
}
</style>
