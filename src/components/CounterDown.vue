<script setup lang="ts">
import { delay } from '@/composables/time'
import { ref } from 'vue'
import PlayAudio from '@/components/PlayAudio.vue'

const props = defineProps<{
  seconds: number
}>()

const counterMinutes = ref(Math.floor(props.seconds / 60))
const counterSeconds = ref(props.seconds - counterMinutes.value * 60)
const finishedTimer = ref(false)

loop()

function subMinute() {
  const minutes = counterMinutes.value

  if (minutes === 0) {
    return
  }

  counterMinutes.value = minutes - 1
}

function subSeconds(number: number) {
  const seconds = counterSeconds.value - number
  const minutes = counterMinutes.value

  if (seconds <= 0 && minutes !== 0) {
    counterSeconds.value = 59 + seconds
    subMinute()
    return
  }

  if (seconds > 0) {
    counterSeconds.value = seconds
    return
  }

  counterSeconds.value = 0
}

async function loop() {
  for (let index = props.seconds; index > 0; index--) {
    subSeconds(1)

    await delay(1000)
  }

  finishedTimer.value = true
}

function decreaseCounter(number: number): void {
  subSeconds(number)
}

defineExpose({ decreaseCounter, finishedTimer })
</script>

<template>
  <div class="timer">
    <div class="minutes">{{ counterMinutes < 10 ? '0' : '' }}{{ counterMinutes }}</div>
    <div class="separator">:</div>
    <div class="seconds">{{ counterSeconds < 10 ? '0' : '' }}{{ counterSeconds }}</div>
  </div>
  
  <PlayAudio file="/clock_sound.mp3" />
</template>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Covered+By+Your+Grace);

.minutes {
  font-size: 50px;
  color: #f6da74;
}

.seconds {
  font-size: 50px;
  color: #abcd58;
}

.separator {
  color: #f6da74;
}

div {
  display: inline-block;
  line-height: 1;
  font-size: 40px;
}

span {
  display: block;
  font-size: 20px;
  color: white;
}

.timer {
  text-align: center;
  font-family: 'Covered By Your Grace', cursive;
  color: white;
}
</style>
