<script setup lang="ts">
import { delay } from '@/composables/time'
import { ref } from 'vue'

const props = defineProps<{
  seconds: number
}>()

const total = props.seconds
const counter = ref(props.seconds)
const counterMinutes = ref(Math.floor(props.seconds / 60))
const counterSeconds = ref(props.seconds - counterMinutes.value * 60)

loop()

function subMinute() {
  const minutes = counterMinutes.value

  if (minutes === 0) {
    return
  }

  counterMinutes.value = minutes - 1
}

function subSeconds() {
  const seconds = counterSeconds.value
  const minutes = counterMinutes.value

  if (seconds === 0 && minutes !== 0) {
    counterSeconds.value = 59
    subMinute()
    return
  }

  if (seconds > 0) {
    counterSeconds.value = seconds - 1
  }
}

async function loop() {
  for (let index = props.seconds; index > 0; index--) {
    counter.value -= 1
    subSeconds()

    await delay(1000)
  }
}
</script>

<template>
  <div class="timer">
    <div class="minutes">{{ counterMinutes < 10 ? '0' : '' }}{{ counterMinutes }}</div>
    <div class="separator">:</div>
    <div class="seconds">{{ counterSeconds < 10 ? '0' : '' }}{{ counterSeconds }}</div>
  </div>
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
