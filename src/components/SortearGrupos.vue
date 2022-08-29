<template>
<div>
    <p>Digite os jogadores da categoria</p>
    <textarea id="nomesAtletas" style="width: 200px;height: 200px"></textarea>
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
    <button id="btnDistribua" @click="sorteio()">Sortear Grupos</button>
    </div>
    <div class="flex-cont">
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
</template>

<script>
//import GruposDivididos from './GruposDivididos.vue'

export default ({
components: {
    //GruposDivididos,
},
name: 'SortearGrupos',

data() {
    return {
    selected: '',
    grupos: '',
    qntGrupos: '',
	grupoDividir: '',
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
    sorteio(){
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

    let nomesJogadores = document.getElementById("nomesAtletas");
    let linhas = nomesJogadores.value.split("\n");
    let qtdJogadores = linhas.length;
    console.log(qtdJogadores);
    
    
      for (let i = 0; i < linhas.length; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      [linhas[i], linhas[j]] = [linhas[j], linhas[i]];
      }
    let sobra = qtdJogadores%this.selected;
      
      if (this.selected == 1){
        for (let i=0; i<(qtdJogadores-sobra); i+=1){
          this.mostraA = true;
          this.mostraB = false;
          this.mostraC = false;
          this.mostraD = false;
          this.mostraE = false;
          this.mostraF = false;
          this.mostraG = false;
          this.mostraH = false;
          grupoA.value += linhas[i] + "\n";
        }
      }
      
      if (this.selected == 2){
        for (let i=0; i<(qtdJogadores-sobra); i+=2){
            this.mostraA = true;
            this.mostraB = true;
            this.mostraC = false;
            this.mostraD = false;
            this.mostraE = false;
            this.mostraF = false;
            this.mostraG = false;
            this.mostraH = false;
            grupoB.value += linhas[i] + "\n";
            grupoA.value += linhas[i+1] + "\n";
        }
        if (sobra == 1){
          grupoB.value += linhas[qtdJogadores-1] + "\n";
        }
      }
      
      if (this.selected == 3){
        for (let i=0; i<(qtdJogadores-sobra); i+=3){
          this.mostraA = true;
          this.mostraB = true;
          this.mostraC = true;
          this.mostraD = false;
          this.mostraE = false;
          this.mostraF = false;
          this.mostraG = false;
          this.mostraH = false;
          grupoC.value += linhas[i] + "\n";
          grupoB.value += linhas[i+1] + "\n";
          grupoA.value += linhas[i+2] + "\n";
        } 
        if (sobra == 1){
          grupoC.value += linhas[qtdJogadores-1] + "\n";
        }
        if (sobra == 2){
          grupoB.value += linhas[qtdJogadores-2] + "\n";
          grupoC.value += linhas[qtdJogadores-1] + "\n";
        }
      }
    
      if (this.selected == 4){
        for (let i=0; i<(qtdJogadores - sobra); i+=4){
          this.mostraA = true;
          this.mostraB = true;
          this.mostraC = true;
          this.mostraD = true;
          this.mostraE = false;
          this.mostraF = false;
          this.mostraG = false;
          this.mostraH = false;
          grupoD.value += linhas[i] + "\n";
          grupoC.value += linhas[i+1] + "\n";
          grupoB.value += linhas[i+2] + "\n";
          grupoA.value += linhas[i+3] + "\n";
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
     if (this.selected == 5){
        for (let i=0; i<(qtdJogadores - sobra); i+=5){
          this.mostraA = true;
          this.mostraB = true;
          this.mostraC = true;
          this.mostraD = true;
          this.mostraE = true;
          this.mostraF = false;
          this.mostraG = false;
          this.mostraH = false;
          grupoE.value += linhas[i] + "\n";
          grupoD.value += linhas[i+1] + "\n";
          grupoC.value += linhas[i+2] + "\n";
          grupoB.value += linhas[i+3] + "\n";
          grupoA.value += linhas[i+4] + "\n";
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
     if (this.selected == 6){
        for (let i=0; i<(qtdJogadores - sobra); i+=6){
          this.mostraA = true;
          this.mostraB = true;
          this.mostraC = true;
          this.mostraD = true;
          this.mostraE = true;
          this.mostraF = true;
          this.mostraG = false;
          this.mostraH = false;
          grupoF.value += linhas[i] + "\n";
          grupoE.value += linhas[i+1] + "\n";
          grupoD.value += linhas[i+2] + "\n";
          grupoC.value += linhas[i+3] + "\n";
          grupoB.value += linhas[i+4] + "\n";
          grupoA.value += linhas[i+5] + "\n";
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
     if (this.selected == 7){
        for (let i=0; i<(qtdJogadores - sobra); i+=7){
          this.mostraA = true;
          this.mostraB = true;
          this.mostraC = true;
          this.mostraD = true;
          this.mostraE = true;
          this.mostraF = true;
          this.mostraG = true;
          this.mostraH = false;
          grupoG.value += linhas[i] + "\n";
          grupoF.value += linhas[i+1] + "\n";
          grupoE.value += linhas[i+2] + "\n";
          grupoD.value += linhas[i+3] + "\n";
          grupoC.value += linhas[i+4] + "\n";
          grupoB.value += linhas[i+5] + "\n";
          grupoA.value += linhas[i+6] + "\n";
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
          if (this.selected == 8){
        for (let i=0; i<(qtdJogadores - sobra); i+=8){
          this.mostraA = true;
          this.mostraB = true;
          this.mostraC = true;
          this.mostraD = true;
          this.mostraE = true;
          this.mostraF = true;
          this.mostraG = true;
          this.mostraH = true;
          grupoH.value += linhas[i] + "\n";
          grupoG.value += linhas[i+1] + "\n";
          grupoF.value += linhas[i+2] + "\n";
          grupoE.value += linhas[i+3] + "\n";
          grupoD.value += linhas[i+4] + "\n";
          grupoC.value += linhas[i+5] + "\n";
          grupoB.value += linhas[i+6] + "\n";
          grupoA.value += linhas[i+7] + "\n";
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
    }
}
})
</script>