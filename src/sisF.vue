<template>
  <FooterLink />
  <SortearGrupos />
  <ListaJogos />
</template>

<script>
import FooterLink from './components/FooterLink.vue'
import ListaJogos from './components/ListaJogos.vue'
import SortearGrupos from './components/SortearGrupos.vue'


export default {
  name: 'sisF',
  components: {
    FooterLink,
    ListaJogos,
    SortearGrupos,
  }
}
</script>

<style>
#sisF {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
textarea {
   height: 100px;
  }
  body {
    text-align:center;
  }
  button {
    margin: 10px;
    color: white;
    background: #6495ED;
  }
  
  .flex-cont {
    display: flex;
    margin: 5px;
    justify-content: center;
  }
  
    .flex-cont > div  {
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
    flex-direction: column;
    align-content: space-between;
    align-items: center;	
  }
  
    .flex-cont > div > div {
    display: flex;
    align-content: space-between;
  }

</style>
