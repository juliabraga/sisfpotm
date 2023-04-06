<template>
  <LinksUteis />
  <SortearGrupos />
  
</template>

<script>
import LinksUteis from './components/LinksUteis.vue'
// import ListaJogos from './components/ListaJogos.vue'
import SortearGrupos from './components/SortearGrupos.vue'


export default {
  name: 'sisF',
  components: {
    LinksUteis,
    // ListaJogos,
    SortearGrupos,
  }
}
</script>

<style src="./assets/css/style.css"></style>
