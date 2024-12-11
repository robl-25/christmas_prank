<script setup lang="ts">
import LogoItem from '../components/LogoItem.vue'
</script>

<template>
  <div class="container">
    <div class="logo">
      <LogoItem />
    </div>
    <div class="title">
      <p>
        Bem-vindas ao jogo de perguntas e respostas que te dá um presente de natal, caso você vença!
      </p>
    </div>
  </div>
</template>

<style lang="css" scoped>
.container {
  display: flex;
  flex-direction: column;
}

.title {
  font-size: xx-large;
  color: burlywood;
  font-family: Apple Chancery, cursive;
  font-variant: small-caps;
  text-align: center;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  width: 100%;
  height: 100%;
  margin-top: 2rem;
}
</style>
