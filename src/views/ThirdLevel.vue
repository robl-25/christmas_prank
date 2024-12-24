<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import TextAnimated from '../components/TextAnimated.vue'
import CounterDown from '../components/CounterDown.vue'
import { delay } from '../composables/time.ts'
import InputAnswer from '@/components/InputAnswer.vue'
import NextButton from '../components/NextButton.vue'
import { getRandomInt } from '@/composables/random.ts'
import { removeItemOnce } from '@/composables/array.ts'
import PlayAudio from '@/components/PlayAudio.vue'

const showElements = ref(Array(6).fill(false))
const currentPlayer = localStorage.getItem('currentPlayer') || ''
const showRules = localStorage.getItem('level2Rules')
const loserPlayersCookie = localStorage.getItem('level3Losers') || ''
const loserPlayers = loserPlayersCookie.split(',') || []
const players = localStorage.getItem('players')?.split(',') || []
const answerInput = ref()
const wrongAnswer = ref(false)
const correctAnswer = ref(false)
const showWrongAnswerButton = ref(false)
const showPresents = ref(false)
const showPresentsText = ref(Array(7).fill(false))
const questions = [
  {
    question: 'Qual o último elemento da tabela periódica?',
    answer: 'Og',
  },
  {
    question: 'Qual o primeiro ator à ganhar um oscar?',
    answer: 'Emil Jannings',
  },
  {
    question: 'Qual o único tipo de papagaio que não pode voar?',
    answer: 'Kakapo',
  },
  {
    question: 'Qual a velocidade de rotação da terra?',
    answer: '1669,8 km/h',
  },
  {
    question:
      'Qual ativista, agente secreto e empreendedor francês tem uma Cheeta como pet que se chama Chiquita?',
    answer: 'Josephine Baker',
  },
  {
    question: 'Qual o nome da disnatia atual de Monaco?',
    answer: 'Grimaldi',
  },
  {
    question: 'Quem ganhou a primeira copa do mundo?',
    answer: 'Uruguai',
  },
  {
    question: 'O que os romanos usavam como enxaguate bucal?',
    answer: 'Urina',
  },
  {
    question: 'Quantas terras cabem dentro da fotosfera do sol?',
    answer: '1.3 milhões',
  },
  {
    question: 'O que pessoas com aletorofobia têm medo?',
    answer: 'Galinhas',
  },
  {
    question: 'Qual o único país do mundo que tem a biblía na bandeira nacional?',
    answer: 'República Dominicana',
  },
  {
    question: 'Qual grife está por trás do perfume <i>Light Blue</i>?',
    answer: 'Dolce & Gabbana',
  },
  {
    question: 'Qual o menor osso do corpo humano?',
    answer: 'Estribo',
  },
  {
    question: 'O que a palavra <i>Karaoke</i> siginificamente literalmente?',
    answer: 'Osquestra vazia',
  },
  {
    question: 'Em suéco, <i>Skvader</i> é um coelho com qual característica incomum?',
    answer: 'Asas',
  },
]
const counterElement = ref()!
const showLastQuestion = computed(() => {
  return (
    localStorage.getItem('players') === '' || (players.length === 1 && players[0] === currentPlayer)
  )
})
const showQuestion = ref(Array(6).fill(false))

const answer = ref('')
const questionIndex = computed(() => {
  return getRandomInt(0, questions.length)
})

showText()

async function showText() {
  if (loserPlayers.includes(currentPlayer)) {
    return submit()
  }

  showElements.value[0] = true

  if ([null, undefined, 'true'].includes(showRules)) {
    for (let index = 1; index < showElements.value.length; index++) {
      await delay(5000)
      showElements.value[index - 1] = false
      showElements.value[index] = true
    }

    localStorage.setItem('level3Rules', 'false')
  } else {
    if (showLastQuestion.value) {
      await delay(5000)
      showElements.value[0] = false
      showQuestion.value[0] = true

      let index = 1

      for (index = 1; index < showQuestion.value.length; index++) {
        await delay(5000)
        showQuestion.value[index - 1] = false
        showQuestion.value[index] = true
      }
    }

    await delay(5000)
    showElements.value[0] = false
    showQuestion.value[showQuestion.value.length - 1] = false
    showElements.value[5] = true
  }
}

async function submit() {
  showElements.value[5] = false
  answer.value = answerInput.value?.answer || ''

  if (answer.value.toLowerCase() === questions[questionIndex.value].answer.toLocaleLowerCase()) {
    correctAnswer.value = true
  } else {
    wrongAnswer.value = true

    if (!loserPlayers.includes(currentPlayer)) {
      localStorage.setItem('level3Losers', loserPlayers.concat([currentPlayer]).join(','))
    }

    if (players.includes(currentPlayer)) {
      localStorage.setItem('players', removeItemOnce(players, currentPlayer).join(','))
    }
  }

  if (localStorage.getItem('players') === '') {
    await delay(5000)
    wrongAnswer.value = false
    showPresents.value = true
    showPresentsText.value[0] = true
    await delay(5000)

    for (let index = 1; index < showPresentsText.value.length; index++) {
      await delay(5000)
      showPresentsText.value[index - 1] = false
      showPresentsText.value[index] = true
    }
  } else {
    showWrongAnswerButton.value = true
  }
}

watch(
  () => counterElement.value?.finishedTimer,
  (timer) => {
    if (timer) {
      submit()
    }
  },
)
</script>

<template>
  <div class="title" v-if="showElements[0]">
    <TextAnimated text="Nível 3" />
  </div>

  <div class="text">
    <TextAnimated text="Este nível testará seus conhecimentos gerais" v-if="showElements[1]" />
    <TextAnimated text="Este é o último nível" v-if="showElements[2]" />
    <TextAnimated text="Se você ganhar, ganhará um presente maravilhoso" v-if="showElements[3]" />

    <div v-if="showLastQuestion">
      <TextAnimated
        text="Parece que você é a última a jogar e ninguém passou deste nível até agora"
        v-if="showQuestion[0]"
      />
      <TextAnimated text="Então, vou diminuir a dificuldade" v-if="showQuestion[1]" />
      <TextAnimated text="Somente para você, valendo todos os presentes:" v-if="showQuestion[2]" />
      <TextAnimated
        text="Imagine que você está em um avião com outras 36 pessoas sentadas"
        v-if="showQuestion[3]"
      />
      <TextAnimated text="Metade se levanta e sai do avião" v-if="showQuestion[4]" />
      <TextAnimated
        text="Do restante, metade se levanta e se prepara para sair do avião"
        v-if="showQuestion[5]"
      />
    </div>
  </div>

  <div class="text" v-if="showElements[5]">
    <div class="menu">
      <CounterDown :seconds="5" ref="counterElement" />
    </div>
    <TextAnimated :text="questions[questionIndex].question" />
    <div class="scale">
      <InputAnswer ref="answerInput" />
    </div>
    <div class="submit">
      <button class="button-submit" role="button" @click="submit()">Enviar</button>
    </div>
  </div>

  <div class="result" v-if="wrongAnswer">
    <PlayAudio file="/fail_jingle_stereo.mp3" />
    <img src="/shrugging.gif" alt="Shrugging" />
    <TextAnimated text="Hmm, não era essa a resposta" />
    <TextAnimated text="Você chegou tão perto, mas perdeu mesmo assim" />
    <NextButton url="/rules" text="Próxima jogadora" v-if="showWrongAnswerButton" />
  </div>

  <div class="result" v-if="showPresents">
    <PlayAudio file="/sci_fi_warning_alert.mp3" v-if="showPresentsText[0]" />
    <TextAnimated text="Espera aí, não acabou" v-if="showPresentsText[0]" />
    <TextAnimated text="Vocês chegaram tão perto, mas ninguém ganhou" v-if="showPresentsText[1]" />
    <TextAnimated text="Como estamos em espírito natalino" v-if="showPresentsText[2]" />
    <TextAnimated text="Vou fazer uma boa ação" v-if="showPresentsText[3]" />
    <TextAnimated text="Vou sortear os presentes de vocês" v-if="showPresentsText[4]" />
    <PlayAudio file="/drum_roll.mp3" v-if="showPresentsText[5]" />
    <TextAnimated text="O resultado é ..." v-if="showPresentsText[5]" />
    <PlayAudio file="/christmas_song.mp3" v-if="showPresentsText[6]" />
    <TextAnimated text="Sandra, você ganhou o presente 3" v-if="showPresentsText[6]" />
    <TextAnimated text="Carol, você ganhou o presente 1" v-if="showPresentsText[6]" />
    <TextAnimated text="Viviane, você ganhou o presente 2" v-if="showPresentsText[6]" />
  </div>

  <div class="result" v-if="correctAnswer">
    <PlayAudio file="/pleased_crowd.mp3" />
    <img src="/office_party.gif" alt="Office Party" />
    <TextAnimated text="Correto!!!" />
    <TextAnimated text="Parabéns!!" />
    <NextButton url="/rules" text="Próxima jogadora" />
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
