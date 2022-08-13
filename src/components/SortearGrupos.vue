<template>
<div>
    <h1>
        Digite os jogadores da categoria
    </h1>
    <textarea id="nomesAtletas" style="width: 50%;height: 200px"></textarea>

    <div>
    Dividir os jogadores em quantos grupos?
        <select v-model="selected">
        <option disabled value="">Selecione</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        </select>
    </div>
    <div>
    <button id="btnDistribua" @click="sorteio()">Sortear Grupos</button>
    </div>
	<div v-show=mostraA>
    <p>Grupo A</p>
    <textarea id="A" style="width: 50%;height: 100px" ></textarea><br>
    </div>
	<div v-show=mostraB>
    <p>Grupo B</p>
    <textarea id="B" style="width: 50%;height: 100px" ></textarea><br>
    </div>
    <div v-show=mostraC>
    <p>Grupo C</p>
    <textarea id="C" style="width: 50%;height: 100px" ></textarea><br>
    </div>
    <div v-show=mostraD>
    <p>Grupo D</p>
    <textarea id="D" style="width: 50%;height: 100px" ></textarea><br>
    </div>
    <div v-show=mostraE>
    <p>Grupo E</p>
    <textarea id="E" style="width: 50%;height: 100px" ></textarea><br>
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
}
},
methods: {
    sorteio(){
    let grupoA = document.getElementById("A");
    let grupoB = document.getElementById("B");
    let grupoC = document.getElementById("C");
    let grupoD = document.getElementById("D");
    let grupoE = document.getElementById("E");
    grupoA.value = "";
    grupoB.value = "";
    grupoC.value = "";
    grupoD.value = "";
    grupoE.value = "";

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
    }
}
})
</script>