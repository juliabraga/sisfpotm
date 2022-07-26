<template>
  <!-- <img alt="FPoTM logo" src="./assets/FPoTM.png" width="250" height="300"> -->
  <ListaAtleta />
  <FooterLink />
</template>

<script>
import FooterLink from './components/FooterLink.vue'
import ListaAtleta from './components/ListaAtleta.vue' 


export default {
  name: 'App',
  components: {
    FooterLink,
    ListaAtleta
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
