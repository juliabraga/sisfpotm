<template>
<div>
  <div>
        <button id="btnCabecas" @click="ativar()">Tem cabeças de chave? Clique AQUI</button>
    <div>
        <span v-if="ativo">
            Escreva os cabeça de chave aqui<br>
            <textarea id="cabecas" style="height: 100px" v-model="CabecasDeChave"></textarea><br>
        </span>
    </div>
    </div>
    <p>Digite os jogadores da categoria</p>
    <textarea id="nomesAtletas" style="width: 200px;height: 200px" v-model="Jogadores"></textarea>
    <div>
    Dividir os jogadores em quantos grupos?
        <select v-model="selected">
        <option disabled value="">Selecione</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        </select>
    <span v-if="!ativo">
    <button  id="btnSemCabeca" @click="sorteio()">Sortear Grupos</button>
    </span>
    <span v-if="ativo">
    <button  id="btnComCabeca" @click="sorteioCabeca()">Sortear Grupos Com cabeças de chave</button>
    </span>
    </div>
    <div v-show=mostraGrupos class="flex-cont">
      <div v-show=mostraA>
      <p>Grupo A</p>
      <textarea id="A"></textarea><br>
      </div>
      <div v-show=mostraB>
      <p>Grupo B</p>
      <textarea id="B"></textarea><br>
      </div>
      <div v-show=mostraC>
      <p>Grupo C</p>
      <textarea id="C"></textarea><br>
      </div>
      <div v-show=mostraD>
      <p>Grupo D</p>
      <textarea id="D"></textarea><br>
      </div>
      <div v-show=mostraE>
      <p>Grupo E</p>
      <textarea id="E"></textarea><br>
      </div>
      <div v-show=mostraF>
      <p>Grupo F</p>
      <textarea id="F"></textarea><br>
      </div>
      <div v-show=mostraG>
      <p>Grupo G</p>
      <textarea id="G"></textarea><br>
      </div>
      <div v-show=mostraH>
      <p>Grupo H</p>
      <textarea id="H"></textarea><br>
      </div>
    </div>
</div>
<span v-if="jogos">
<ListaJogos />
</span>

</template>


<script>
// import CabecaDeChave from './CabecaDeChave.vue'
import ListaJogos from './ListaJogos.vue'

export default ({
// mixins: [CabecaDeChave],
components: {
  // CabecaDeChave,
  ListaJogos,
},
name: 'SortearGrupos',

data() {
    return {
    Jogadores: '',
    CabecasDeChave: '',
    jogos: false,
    ativo: false,
    selected: '',
    grupos: '',
    qntGrupos: '',
    grupoDividir: '',
    mostraGrupos: false,
    mostraA: false,
    mostraB: false,
    mostraC: false,
    mostraD: false,
    mostraE: false,
    mostraF: false,
    mostraG: false,
    mostraH: false,
}
},
methods: {
    ativar(){this.ativo = !this.ativo;
    this.mostraGrupos = false;
    this.jogos = false;
    },
    sortearGrupos(qtdJogadores, sobra, inc, linhas){
    this.jogos = true;
    let grupoA = document.getElementById("A");
    let grupoB = document.getElementById("B");
    let grupoC = document.getElementById("C");
    let grupoD = document.getElementById("D");
    let grupoE = document.getElementById("E");
    let grupoF = document.getElementById("F");
    let grupoG = document.getElementById("G");
    let grupoH = document.getElementById("H");
    grupoA.value = "";
    grupoB.value = "";
    grupoC.value = "";
    grupoD.value = "";
    grupoE.value = "";
    grupoF.value = "";
    grupoG.value = "";
    grupoH.value = "";

      if (inc == 1){
        for (let i=0; i<(qtdJogadores-sobra); i++){
          this.mostraGrupos = true;
          this.mostraA = true; this.mostraB = false; this.mostraC = false; this.mostraD = false;
          this.mostraE = false; this.mostraF = false; this.mostraG = false; this.mostraH = false;
          grupoA.value += linhas[i] + "\n";
        }
      }
      
      if (inc == 2){
        for (let i=0; i<(qtdJogadores-sobra); i+=2){
            this.mostraGrupos = true;
            this.mostraA = true; this.mostraB = true; this.mostraC = false; this.mostraD = false; 
            this.mostraE = false; this.mostraF = false; this.mostraG = false; this.mostraH = false;
            grupoA.value += linhas[i] + "\n";
            grupoB.value += linhas[i+1] + "\n";
        }
        if (sobra == 1){
          grupoB.value += linhas[qtdJogadores-1] + "\n";
        }
      }
      
      if (inc == 3){
        for (let i=0; i<(qtdJogadores-sobra); i+=3){
          this.mostraGrupos = true;
          this.mostraA = true; this.mostraB = true; this.mostraC = true; this.mostraD = false;
          this.mostraE = false; this.mostraF = false; this.mostraG = false; this.mostraH = false;
          grupoA.value += linhas[i] + "\n";
          grupoB.value += linhas[i+1] + "\n";
          grupoC.value += linhas[i+2] + "\n";
        } 
        if (sobra == 1){
          grupoC.value += linhas[qtdJogadores-1] + "\n";
        }
        if (sobra == 2){
          grupoB.value += linhas[qtdJogadores-2] + "\n";
          grupoC.value += linhas[qtdJogadores-1] + "\n";
        }
      }
    
      if (inc == 4){
        for (let i=0; i<(qtdJogadores - sobra); i+=4){
          this.mostraGrupos = true;
          this.mostraA = true; this.mostraB = true; this.mostraC = true; this.mostraD = true;
          this.mostraE = false; this.mostraF = false; this.mostraG = false; this.mostraH = false;
          grupoA.value += linhas[i] + "\n";
          grupoB.value += linhas[i+1] + "\n";
          grupoC.value += linhas[i+2] + "\n";
          grupoD.value += linhas[i+3] + "\n";
        }
        if (sobra == 1){
          grupoD.value += linhas[qtdJogadores-1] + "\n";
        }
        if (sobra == 2){
          grupoC.value += linhas[qtdJogadores-2] + "\n";
          grupoD.value += linhas[qtdJogadores-1] + "\n";
        }
        if (sobra == 3){
          grupoB.value += linhas[qtdJogadores-3] + "\n";
          grupoC.value += linhas[qtdJogadores-2] + "\n";
          grupoD.value += linhas[qtdJogadores-1] + "\n";
        }
     }
     if (inc == 5){
        for (let i=0; i<(qtdJogadores - sobra); i+=5){
          this.mostraGrupos = true;
          this.mostraA = true; this.mostraB = true; this.mostraC = true; this.mostraD = true;
          this.mostraE = true; this.mostraF = false; this.mostraG = false; this.mostraH = false;
          grupoA.value += linhas[i] + "\n";
          grupoB.value += linhas[i+1] + "\n";
          grupoC.value += linhas[i+2] + "\n";
          grupoD.value += linhas[i+3] + "\n";
          grupoE.value += linhas[i+4] + "\n";
        }
        if (sobra == 1){
          grupoE.value += linhas[qtdJogadores-1] + "\n";
        }
        if (sobra == 2){
          grupoD.value += linhas[qtdJogadores-2] + "\n";
          grupoE.value += linhas[qtdJogadores-1] + "\n";
        }
        if (sobra == 3){
          grupoC.value += linhas[qtdJogadores-3] + "\n";
          grupoD.value += linhas[qtdJogadores-2] + "\n";
          grupoE.value += linhas[qtdJogadores-1] + "\n";
        }
        if (sobra == 4){
          grupoB.value += linhas[qtdJogadores-4] + "\n";
          grupoC.value += linhas[qtdJogadores-3] + "\n";
          grupoD.value += linhas[qtdJogadores-2] + "\n";
          grupoE.value += linhas[qtdJogadores-1] + "\n";
        }
     }
     if (inc == 6){
        for (let i=0; i<(qtdJogadores - sobra); i+=6){
          this.mostraGrupos = true;
          this.mostraA = true; this.mostraB = true; this.mostraC = true; this.mostraD = true;
          this.mostraE = true; this.mostraF = true; this.mostraG = false; this.mostraH = false;
          grupoA.value += linhas[i] + "\n";
          grupoB.value += linhas[i+1] + "\n";
          grupoC.value += linhas[i+2] + "\n";
          grupoD.value += linhas[i+3] + "\n";
          grupoE.value += linhas[i+4] + "\n";
          grupoF.value += linhas[i+5] + "\n";
        }
        if (sobra == 1){
          grupoF.value += linhas[qtdJogadores-1] + "\n";
        }
        if (sobra == 2){
          grupoE.value += linhas[qtdJogadores-2] + "\n";
          grupoF.value += linhas[qtdJogadores-1] + "\n";
        }
        if (sobra == 3){
          grupoD.value += linhas[qtdJogadores-3] + "\n";
          grupoE.value += linhas[qtdJogadores-2] + "\n";
          grupoF.value += linhas[qtdJogadores-1] + "\n";
        }
        if (sobra == 4){
          grupoC.value += linhas[qtdJogadores-4] + "\n";
          grupoD.value += linhas[qtdJogadores-3] + "\n";
          grupoE.value += linhas[qtdJogadores-2] + "\n";
          grupoF.value += linhas[qtdJogadores-1] + "\n";
        }
        if (sobra == 5){
          grupoB.value += linhas[qtdJogadores-5] + "\n";
          grupoC.value += linhas[qtdJogadores-4] + "\n";
          grupoD.value += linhas[qtdJogadores-3] + "\n";
          grupoE.value += linhas[qtdJogadores-2] + "\n";
          grupoF.value += linhas[qtdJogadores-1] + "\n";
        }
     }
     if (inc == 7){
        for (let i=0; i<(qtdJogadores - sobra); i+=7){
          this.mostraGrupos = true;
          this.mostraA = true; this.mostraB = true; this.mostraC = true; this.mostraD = true;
          this.mostraE = true; this.mostraF = true; this.mostraG = true; this.mostraH = false;
          grupoA.value += linhas[i] + "\n";
          grupoB.value += linhas[i+1] + "\n";
          grupoC.value += linhas[i+2] + "\n";
          grupoD.value += linhas[i+3] + "\n";
          grupoE.value += linhas[i+4] + "\n";
          grupoF.value += linhas[i+5] + "\n";
          grupoG.value += linhas[i+6] + "\n";
        }
        if (sobra == 1){
          grupoG.value += linhas[qtdJogadores-1] + "\n";
        }
        if (sobra == 2){
          grupoF.value += linhas[qtdJogadores-2] + "\n";
          grupoG.value += linhas[qtdJogadores-1] + "\n";
        }
        if (sobra == 3){
          grupoE.value += linhas[qtdJogadores-3] + "\n";
          grupoF.value += linhas[qtdJogadores-2] + "\n";
          grupoG.value += linhas[qtdJogadores-1] + "\n";
        }
        if (sobra == 4){
          grupoD.value += linhas[qtdJogadores-4] + "\n";
          grupoE.value += linhas[qtdJogadores-3] + "\n";
          grupoF.value += linhas[qtdJogadores-2] + "\n";
          grupoG.value += linhas[qtdJogadores-1] + "\n";
        }
        if (sobra == 5){
          grupoC.value += linhas[qtdJogadores-5] + "\n";
          grupoD.value += linhas[qtdJogadores-4] + "\n";
          grupoE.value += linhas[qtdJogadores-3] + "\n";
          grupoF.value += linhas[qtdJogadores-2] + "\n";
          grupoG.value += linhas[qtdJogadores-1] + "\n";
        }
        if (sobra == 6){
          grupoB.value += linhas[qtdJogadores-6] + "\n";
          grupoC.value += linhas[qtdJogadores-5] + "\n";
          grupoD.value += linhas[qtdJogadores-4] + "\n";
          grupoE.value += linhas[qtdJogadores-3] + "\n";
          grupoF.value += linhas[qtdJogadores-2] + "\n";
          grupoG.value += linhas[qtdJogadores-1] + "\n";
        }
     }
    if (inc == 8){
        for (let i=0; i<(qtdJogadores - sobra); i+=8){
          this.mostraGrupos = true;
          this.mostraA = true; this.mostraB = true; this.mostraC = true; this.mostraD = true;
          this.mostraE = true; this.mostraF = true; this.mostraG = true; this.mostraH = true;
          grupoA.value += linhas[i] + "\n";
          grupoB.value += linhas[i+1] + "\n";
          grupoC.value += linhas[i+2] + "\n";
          grupoD.value += linhas[i+3] + "\n";
          grupoE.value += linhas[i+4] + "\n";
          grupoF.value += linhas[i+5] + "\n";
          grupoG.value += linhas[i+6] + "\n";
          grupoH.value += linhas[i+7] + "\n";
        }
        if (sobra == 1){
          grupoH.value += linhas[qtdJogadores-1] + "\n";
        }
        if (sobra == 2){
          grupoG.value += linhas[qtdJogadores-2] + "\n";
          grupoH.value += linhas[qtdJogadores-1] + "\n";
        }
        if (sobra == 3){
          grupoF.value += linhas[qtdJogadores-3] + "\n";
          grupoG.value += linhas[qtdJogadores-2] + "\n";
          grupoH.value += linhas[qtdJogadores-1] + "\n";
        }
        if (sobra == 4){
          grupoE.value += linhas[qtdJogadores-4] + "\n";
          grupoF.value += linhas[qtdJogadores-3] + "\n";
          grupoG.value += linhas[qtdJogadores-2] + "\n";
          grupoH.value += linhas[qtdJogadores-1] + "\n";
        }
        if (sobra == 5){
          grupoD.value += linhas[qtdJogadores-5] + "\n";
          grupoE.value += linhas[qtdJogadores-4] + "\n";
          grupoF.value += linhas[qtdJogadores-3] + "\n";
          grupoG.value += linhas[qtdJogadores-2] + "\n";
          grupoH.value += linhas[qtdJogadores-1] + "\n";
        }
        if (sobra == 6){
          grupoC.value += linhas[qtdJogadores-6] + "\n";
          grupoD.value += linhas[qtdJogadores-5] + "\n";
          grupoE.value += linhas[qtdJogadores-4] + "\n";
          grupoF.value += linhas[qtdJogadores-3] + "\n";
          grupoG.value += linhas[qtdJogadores-2] + "\n";
          grupoH.value += linhas[qtdJogadores-1] + "\n";
        }
        if (sobra == 7){
          grupoB.value += linhas[qtdJogadores-7] + "\n";
          grupoC.value += linhas[qtdJogadores-6] + "\n";
          grupoD.value += linhas[qtdJogadores-5] + "\n";
          grupoE.value += linhas[qtdJogadores-4] + "\n";
          grupoF.value += linhas[qtdJogadores-3] + "\n";
          grupoG.value += linhas[qtdJogadores-2] + "\n";
          grupoH.value += linhas[qtdJogadores-1] + "\n";
        }
    }
    },
    sorteioCabeca(){
    let linhas = this.Jogadores.split("\n");
    let inc = this.selected;
    let qtdJogadores = linhas.length;
    
    for (let i = 0; i < qtdJogadores; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      [linhas[i], linhas[j]] = [linhas[j], linhas[i]];
    }
    let arrayCabecas = this.CabecasDeChave.split("\n");
    linhas = arrayCabecas.concat(linhas)
    qtdJogadores = linhas.length;
    
    let sobra = qtdJogadores%inc;
    
    this.sortearGrupos(qtdJogadores, sobra, inc, linhas)   
    
    },
    sorteio(){
    let nomesJogadores = document.getElementById("nomesAtletas");
    let linhas = nomesJogadores.value.split("\n");
    let inc = this.selected;
    let qtdJogadores = linhas.length;
        
      for (let i = 0; i < linhas.length; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      [linhas[i], linhas[j]] = [linhas[j], linhas[i]];
      }
        
    let sobra = qtdJogadores%inc;
    this.sortearGrupos(qtdJogadores, sobra, inc, linhas)

    }
}
})
</script>