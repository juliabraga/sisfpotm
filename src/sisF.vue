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

<style>
#sisF {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}
#cbtmlogo {
  height: 61px;
  width: 168px; 
}

#fpotmlogo{
  height: 83.5px;
  width: 253.7px; 
}
img {
  opacity: 0.5;
}

img:hover {
  opacity: 1.0;
}

  textarea {
   height: 100px;
   background-color:khaki;
   border-radius: 10px;
   border: 2px solid #00984b;
  }
  
  body {
    text-align:center;
  }
  button {
    margin: 10px;
    color: white;
    background: #6495ED;
  }
  #btnresultados, #btnsorteador{
    margin: 10px;
    color: black;
    background: white;
  }
  .btnativo{
    margin: 10px;
    color: white;
    background: black;
  }
    
  .flex-cont {
    display: flex;
    margin: 5px;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-between;
  }
    .flex-cont > div  {
    display: flex;
    margin: 10px;
    flex-direction: column;
    align-items: center;
  }
  
    .flex-cont > div > div {
    display: flex;
    align-content: space-between;
  }

</style>
