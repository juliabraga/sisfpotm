<template>
  <div>
    <div>
      <button id="btnCabecas" @click="ativar()">Tem cabeças de chave? Clique AQUI</button>
      <div>
        <span v-if="ativo">
          Escreva os cabeça de chave aqui<br>
          <textarea id="cabecas" style="height: 100px"></textarea><br>
        </span>
      </div>
    </div>
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
        <option>12</option>
        <option>13</option>
        <option>16</option>
      </select>
      <span v-if="!ativo">
        <button id="btnSemCabeca" @click="sorteio()">Sortear Grupos</button>
      </span>
      <span v-if="ativo">
        <button id="btnComCabeca" @click="sorteioCabeca()">Sortear Grupos Com cabeças de chave</button>
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
      <div v-show=mostraI>
          <p>Grupo I</p>
          <textarea id="I"></textarea><br>
      </div>
      <div v-show=mostraJ>
          <p>Grupo J</p>
          <textarea id="J"></textarea><br>
      </div>
      <div v-show=mostraK>
          <p>Grupo K</p>
          <textarea id="K"></textarea><br>
        </div>
      <div v-show=mostraL>
          <p>Grupo L</p>
          <textarea id="L"></textarea><br>
        </div>
      <div v-show=mostraM>
          <p>Grupo M</p>
          <textarea id="M"></textarea><br>
        </div>
      <div v-show=mostraN>
          <p>Grupo N</p>
          <textarea id="N"></textarea><br>
        </div>
      <div v-show=mostraO>
          <p>Grupo O</p>
          <textarea id="O"></textarea><br>
        </div>
      <div v-show=mostraP>
          <p>Grupo P</p>
          <textarea id="P"></textarea><br>
        </div>
    </div>
  </div>
  <span v-if="jogos">
    <ListaJogos />
  </span>
</template>


<script>

import ListaJogos from './ListaJogos.vue'

export default ({

  components: {
    ListaJogos,
  },
  name: 'SortearGrupos',

  data() {
    return {
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
      mostraI: false,
      mostraJ: false,
      mostraK: false,
      mostraL: false,
      mostraM: false,
      mostraN: false,
      mostraO: false,
      mostraP: false,
    }
  },
  methods: {
    mostraGrupoA() {
      this.mostraGrupos = true
      this.mostraA = true
      this.mostraB = false
      this.mostraC = false
      this.mostraD = false
      this.mostraE = false
      this.mostraF = false
      this.mostraG = false
      this.mostraH = false
      this.mostraI = false
      this.mostraJ = false
      this.mostrak = false
      this.mostraL = false
      this.mostraM = false
      this.mostraN = false
      this.mostraO = false
      this.mostraP = false
    },
    mostraGrupoB() {
      this.mostraGrupoA(),
        this.mostraB = true
    },
    mostraGrupoC() {
      this.mostraGrupoB(),
        this.mostraC = true
    },
    mostraGrupoD() {
      this.mostraGrupoC(),
        this.mostraD = true
    },
    mostraGrupoE() {
      this.mostraGrupoD(),
        this.mostraE = true
    },
    mostraGrupoF() {
      this.mostraGrupoE(),
        this.mostraF = true
    },
    mostraGrupoG() {
      this.mostraGrupoF(),
        this.mostraG = true
    },
    mostraGrupoH() {
      this.mostraGrupoG(),
        this.mostraH = true
    },
    mostraGrupoI() {
      this.mostraGrupoH(),
        this.mostraI = true
    },
    mostraGrupoJ() {
      this.mostraGrupoI(),
        this.mostraJ = true
    },
    mostraGrupoK() {
      this.mostraGrupoJ(),
        this.mostraK = true
    },
    mostraGrupoL() {
      this.mostraGrupoK(),
        this.mostraL = true
    },
    mostraGrupoM() {
      this.mostraGrupoL(),
        this.mostraM = true
    },
    mostraGrupoN() {
      this.mostraGrupoM(),
        this.mostraN = true
    },
    mostraGrupoO() {
      this.mostraGrupoN(),
        this.mostraO = true
    },
    mostraGrupoP() {
      this.mostraGrupoO(),
        this.mostraP = true
    },
    ativar() {
      this.ativo = !this.ativo;
      this.mostraGrupos = false;
      this.jogos = false;
    },
    sorteioCabeca() {
      this.jogos = true;
      let grupoA = document.getElementById("A");
      let grupoB = document.getElementById("B");
      let grupoC = document.getElementById("C");
      let grupoD = document.getElementById("D");
      let grupoE = document.getElementById("E");
      let grupoF = document.getElementById("F");
      let grupoG = document.getElementById("G");
      let grupoH = document.getElementById("H");
      let grupoI = document.getElementById("I");
      let grupoJ = document.getElementById("J");
      let grupoK = document.getElementById("K");
      let grupoL = document.getElementById("L");
      let grupoM = document.getElementById("M");
      let grupoN = document.getElementById("N");
      let grupoO = document.getElementById("O");
      let grupoP = document.getElementById("P");
      grupoA.value = "";
      grupoB.value = "";
      grupoC.value = "";
      grupoD.value = "";
      grupoE.value = "";
      grupoF.value = "";
      grupoG.value = "";
      grupoH.value = "";
      grupoI.value = "";
      grupoJ.value = "";
      grupoK.value = "";
      grupoL.value = "";
      grupoM.value = "";
      grupoN.value = "";
      grupoO.value = "";
      grupoP.value = "";

      let nomesJogadores = document.getElementById("nomesAtletas");
      let atletas = nomesJogadores.value.split("\n");
      let qtdGrupos = this.selected;
      let qtdJogadores = atletas.length;
      let nomesCabecas = document.getElementById("cabecas");
      let arrayCabecas = nomesCabecas.value.split("\n");

      //cria uma lista aleatoria com o nome dos atletas
      for (let i = 0; i < atletas.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [atletas[i], atletas[j]] = [atletas[j], atletas[i]];
      }
      //Inclui cabecas de chave no começo lista aleatoria
      atletas = arrayCabecas.concat(atletas)
      qtdJogadores = atletas.length;

      let sobra = qtdJogadores % qtdGrupos;

      if (qtdGrupos == 1) {
        for (let i = 0; i < (qtdJogadores - sobra); i++) {
          this.mostraGrupoA();
          grupoA.value += atletas[i] + "\n";
        }
      }

      if (qtdGrupos == 2) {
        for (let i = 0; i < (qtdJogadores - sobra); i += 2) {
          this.mostraGrupoB();
          grupoA.value += atletas[i] + "\n";
          grupoB.value += atletas[i + 1] + "\n";
        }
        if (sobra == 1) {
          grupoB.value += atletas[qtdJogadores - 1] + "\n";
        }
      }

      if (qtdGrupos == 3) {
        for (let i = 0; i < (qtdJogadores - sobra); i += 3) {
          this.mostraGrupoC();
          grupoA.value += atletas[i] + "\n";
          grupoB.value += atletas[i + 1] + "\n";
          grupoC.value += atletas[i + 2] + "\n";
        }
        if (sobra == 1) {
          grupoC.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 2) {
          grupoB.value += atletas[qtdJogadores - 2] + "\n";
          grupoC.value += atletas[qtdJogadores - 1] + "\n";
        }
      }

      if (qtdGrupos == 4) {
        for (let i = 0; i < (qtdJogadores - sobra); i += 4) {
          this.mostraGrupoD();
          grupoA.value += atletas[i] + "\n";
          grupoB.value += atletas[i + 1] + "\n";
          grupoC.value += atletas[i + 2] + "\n";
          grupoD.value += atletas[i + 3] + "\n";
        }
        if (sobra == 1) {
          grupoD.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 2) {
          grupoC.value += atletas[qtdJogadores - 2] + "\n";
          grupoD.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 3) {
          grupoB.value += atletas[qtdJogadores - 3] + "\n";
          grupoC.value += atletas[qtdJogadores - 2] + "\n";
          grupoD.value += atletas[qtdJogadores - 1] + "\n";
        }
      }
      if (qtdGrupos == 5) {
        for (let i = 0; i < (qtdJogadores - sobra); i += 5) {
          this.mostraGrupoE();
          grupoA.value += atletas[i] + "\n";
          grupoB.value += atletas[i + 1] + "\n";
          grupoC.value += atletas[i + 2] + "\n";
          grupoD.value += atletas[i + 3] + "\n";
          grupoE.value += atletas[i + 4] + "\n";
        }
        if (sobra == 1) {
          grupoE.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 2) {
          grupoD.value += atletas[qtdJogadores - 2] + "\n";
          grupoE.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 3) {
          grupoC.value += atletas[qtdJogadores - 3] + "\n";
          grupoD.value += atletas[qtdJogadores - 2] + "\n";
          grupoE.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 4) {
          grupoB.value += atletas[qtdJogadores - 4] + "\n";
          grupoC.value += atletas[qtdJogadores - 3] + "\n";
          grupoD.value += atletas[qtdJogadores - 2] + "\n";
          grupoE.value += atletas[qtdJogadores - 1] + "\n";
        }
      }
      if (qtdGrupos == 6) {
        for (let i = 0; i < (qtdJogadores - sobra); i += 6) {
          this.mostraGrupoF();
          grupoA.value += atletas[i] + "\n";
          grupoB.value += atletas[i + 1] + "\n";
          grupoC.value += atletas[i + 2] + "\n";
          grupoD.value += atletas[i + 3] + "\n";
          grupoE.value += atletas[i + 4] + "\n";
          grupoF.value += atletas[i + 5] + "\n";
        }
        if (sobra == 1) {
          grupoF.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 2) {
          grupoE.value += atletas[qtdJogadores - 2] + "\n";
          grupoF.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 3) {
          grupoD.value += atletas[qtdJogadores - 3] + "\n";
          grupoE.value += atletas[qtdJogadores - 2] + "\n";
          grupoF.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 4) {
          grupoC.value += atletas[qtdJogadores - 4] + "\n";
          grupoD.value += atletas[qtdJogadores - 3] + "\n";
          grupoE.value += atletas[qtdJogadores - 2] + "\n";
          grupoF.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 5) {
          grupoB.value += atletas[qtdJogadores - 5] + "\n";
          grupoC.value += atletas[qtdJogadores - 4] + "\n";
          grupoD.value += atletas[qtdJogadores - 3] + "\n";
          grupoE.value += atletas[qtdJogadores - 2] + "\n";
          grupoF.value += atletas[qtdJogadores - 1] + "\n";
        }
      }
      if (qtdGrupos == 7) {
        for (let i = 0; i < (qtdJogadores - sobra); i += 7) {
          this.mostraGrupoG();
          grupoA.value += atletas[i] + "\n";
          grupoB.value += atletas[i + 1] + "\n";
          grupoC.value += atletas[i + 2] + "\n";
          grupoD.value += atletas[i + 3] + "\n";
          grupoE.value += atletas[i + 4] + "\n";
          grupoF.value += atletas[i + 5] + "\n";
          grupoG.value += atletas[i + 6] + "\n";
        }
        if (sobra == 1) {
          grupoG.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 2) {
          grupoF.value += atletas[qtdJogadores - 2] + "\n";
          grupoG.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 3) {
          grupoE.value += atletas[qtdJogadores - 3] + "\n";
          grupoF.value += atletas[qtdJogadores - 2] + "\n";
          grupoG.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 4) {
          grupoD.value += atletas[qtdJogadores - 4] + "\n";
          grupoE.value += atletas[qtdJogadores - 3] + "\n";
          grupoF.value += atletas[qtdJogadores - 2] + "\n";
          grupoG.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 5) {
          grupoC.value += atletas[qtdJogadores - 5] + "\n";
          grupoD.value += atletas[qtdJogadores - 4] + "\n";
          grupoE.value += atletas[qtdJogadores - 3] + "\n";
          grupoF.value += atletas[qtdJogadores - 2] + "\n";
          grupoG.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 6) {
          grupoB.value += atletas[qtdJogadores - 6] + "\n";
          grupoC.value += atletas[qtdJogadores - 5] + "\n";
          grupoD.value += atletas[qtdJogadores - 4] + "\n";
          grupoE.value += atletas[qtdJogadores - 3] + "\n";
          grupoF.value += atletas[qtdJogadores - 2] + "\n";
          grupoG.value += atletas[qtdJogadores - 1] + "\n";
        }
      }
      if (qtdGrupos == 8) {
        for (let i = 0; i < (qtdJogadores - sobra); i += 8) {
          this.mostraGrupoH();
          grupoA.value += atletas[i] + "\n";
          grupoB.value += atletas[i + 1] + "\n";
          grupoC.value += atletas[i + 2] + "\n";
          grupoD.value += atletas[i + 3] + "\n";
          grupoE.value += atletas[i + 4] + "\n";
          grupoF.value += atletas[i + 5] + "\n";
          grupoG.value += atletas[i + 6] + "\n";
          grupoH.value += atletas[i + 7] + "\n";
        }
        if (sobra == 1) {
          grupoH.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 2) {
          grupoG.value += atletas[qtdJogadores - 2] + "\n";
          grupoH.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 3) {
          grupoF.value += atletas[qtdJogadores - 3] + "\n";
          grupoG.value += atletas[qtdJogadores - 2] + "\n";
          grupoH.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 4) {
          grupoE.value += atletas[qtdJogadores - 4] + "\n";
          grupoF.value += atletas[qtdJogadores - 3] + "\n";
          grupoG.value += atletas[qtdJogadores - 2] + "\n";
          grupoH.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 5) {
          grupoD.value += atletas[qtdJogadores - 5] + "\n";
          grupoE.value += atletas[qtdJogadores - 4] + "\n";
          grupoF.value += atletas[qtdJogadores - 3] + "\n";
          grupoG.value += atletas[qtdJogadores - 2] + "\n";
          grupoH.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 6) {
          grupoC.value += atletas[qtdJogadores - 6] + "\n";
          grupoD.value += atletas[qtdJogadores - 5] + "\n";
          grupoE.value += atletas[qtdJogadores - 4] + "\n";
          grupoF.value += atletas[qtdJogadores - 3] + "\n";
          grupoG.value += atletas[qtdJogadores - 2] + "\n";
          grupoH.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 7) {
          grupoB.value += atletas[qtdJogadores - 7] + "\n";
          grupoC.value += atletas[qtdJogadores - 6] + "\n";
          grupoD.value += atletas[qtdJogadores - 5] + "\n";
          grupoE.value += atletas[qtdJogadores - 4] + "\n";
          grupoF.value += atletas[qtdJogadores - 3] + "\n";
          grupoG.value += atletas[qtdJogadores - 2] + "\n";
          grupoH.value += atletas[qtdJogadores - 1] + "\n";
        }
      }
      if (qtdGrupos == 12) {
        for (let i = 0; i < (qtdJogadores - sobra); i += 12) {
          this.mostraGrupoL();
          grupoA.value += atletas[i] + "\n";
          grupoB.value += atletas[i + 1] + "\n";
          grupoC.value += atletas[i + 2] + "\n";
          grupoD.value += atletas[i + 3] + "\n";
          grupoE.value += atletas[i + 4] + "\n";
          grupoF.value += atletas[i + 5] + "\n";
          grupoG.value += atletas[i + 6] + "\n";
          grupoH.value += atletas[i + 7] + "\n";
          grupoI.value += atletas[i + 8] + "\n";
          grupoJ.value += atletas[i + 9] + "\n";
          grupoK.value += atletas[i + 10] + "\n";
          grupoL.value += atletas[i + 11] + "\n";
        }
        if (sobra == 1) {
          grupoL.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 2) {
          grupoK.value += atletas[qtdJogadores - 2] + "\n";
          grupoL.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 3) {
          grupoJ.value += atletas[qtdJogadores - 3] + "\n";
          grupoK.value += atletas[qtdJogadores - 2] + "\n";
          grupoL.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 4) {
          grupoI.value += atletas[qtdJogadores - 4] + "\n";
          grupoJ.value += atletas[qtdJogadores - 3] + "\n";
          grupoK.value += atletas[qtdJogadores - 2] + "\n";
          grupoL.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 5) {
          grupoH.value += atletas[qtdJogadores - 5] + "\n";
          grupoI.value += atletas[qtdJogadores - 4] + "\n";
          grupoJ.value += atletas[qtdJogadores - 3] + "\n";
          grupoK.value += atletas[qtdJogadores - 2] + "\n";
          grupoL.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 6) {
          grupoG.value += atletas[qtdJogadores - 6] + "\n";
          grupoH.value += atletas[qtdJogadores - 5] + "\n";
          grupoI.value += atletas[qtdJogadores - 4] + "\n";
          grupoJ.value += atletas[qtdJogadores - 3] + "\n";
          grupoK.value += atletas[qtdJogadores - 2] + "\n";
          grupoL.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 7) {
          grupoF.value += atletas[qtdJogadores - 7] + "\n";
          grupoG.value += atletas[qtdJogadores - 6] + "\n";
          grupoH.value += atletas[qtdJogadores - 5] + "\n";
          grupoI.value += atletas[qtdJogadores - 4] + "\n";
          grupoJ.value += atletas[qtdJogadores - 3] + "\n";
          grupoK.value += atletas[qtdJogadores - 2] + "\n";
          grupoL.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 8) {
          grupoE.value += atletas[qtdJogadores - 8] + "\n";
          grupoF.value += atletas[qtdJogadores - 7] + "\n";
          grupoG.value += atletas[qtdJogadores - 6] + "\n";
          grupoH.value += atletas[qtdJogadores - 5] + "\n";
          grupoI.value += atletas[qtdJogadores - 4] + "\n";
          grupoJ.value += atletas[qtdJogadores - 3] + "\n";
          grupoK.value += atletas[qtdJogadores - 2] + "\n";
          grupoL.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 9) {
          grupoD.value += atletas[qtdJogadores - 9] + "\n";
          grupoE.value += atletas[qtdJogadores - 8] + "\n";
          grupoF.value += atletas[qtdJogadores - 7] + "\n";
          grupoG.value += atletas[qtdJogadores - 6] + "\n";
          grupoH.value += atletas[qtdJogadores - 5] + "\n";
          grupoI.value += atletas[qtdJogadores - 4] + "\n";
          grupoJ.value += atletas[qtdJogadores - 3] + "\n";
          grupoK.value += atletas[qtdJogadores - 2] + "\n";
          grupoL.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 10) {
          grupoC.value += atletas[qtdJogadores - 10] + "\n";
          grupoD.value += atletas[qtdJogadores - 9] + "\n";
          grupoE.value += atletas[qtdJogadores - 8] + "\n";
          grupoF.value += atletas[qtdJogadores - 7] + "\n";
          grupoG.value += atletas[qtdJogadores - 6] + "\n";
          grupoH.value += atletas[qtdJogadores - 5] + "\n";
          grupoI.value += atletas[qtdJogadores - 4] + "\n";
          grupoJ.value += atletas[qtdJogadores - 3] + "\n";
          grupoK.value += atletas[qtdJogadores - 2] + "\n";
          grupoL.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 11) {
          grupoB.value += atletas[qtdJogadores - 11] + "\n";
          grupoC.value += atletas[qtdJogadores - 10] + "\n";
          grupoD.value += atletas[qtdJogadores - 9] + "\n";
          grupoE.value += atletas[qtdJogadores - 8] + "\n";
          grupoF.value += atletas[qtdJogadores - 7] + "\n";
          grupoG.value += atletas[qtdJogadores - 6] + "\n";
          grupoH.value += atletas[qtdJogadores - 5] + "\n";
          grupoI.value += atletas[qtdJogadores - 4] + "\n";
          grupoJ.value += atletas[qtdJogadores - 3] + "\n";
          grupoK.value += atletas[qtdJogadores - 2] + "\n";
          grupoL.value += atletas[qtdJogadores - 1] + "\n";
        }
      }
      if (qtdGrupos == 13) {
        for (let i = 0; i < (qtdJogadores - sobra); i += 13) {
          this.mostraGrupoM();
          grupoA.value += atletas[i] + "\n";
          grupoB.value += atletas[i + 1] + "\n";
          grupoC.value += atletas[i + 2] + "\n";
          grupoD.value += atletas[i + 3] + "\n";
          grupoE.value += atletas[i + 4] + "\n";
          grupoF.value += atletas[i + 5] + "\n";
          grupoG.value += atletas[i + 6] + "\n";
          grupoH.value += atletas[i + 7] + "\n";
          grupoI.value += atletas[i + 8] + "\n";
          grupoJ.value += atletas[i + 9] + "\n";
          grupoK.value += atletas[i + 10] + "\n";
          grupoL.value += atletas[i + 11] + "\n";
          grupoM.value += atletas[i + 12] + "\n";
        }
        if (sobra == 1) {
          grupoM.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 2) {
          grupoL.value += atletas[qtdJogadores - 2] + "\n";
          grupoM.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 3) {
          grupoK.value += atletas[qtdJogadores - 3] + "\n";
          grupoL.value += atletas[qtdJogadores - 2] + "\n";
          grupoM.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 4) {
          grupoJ.value += atletas[qtdJogadores - 4] + "\n";
          grupoK.value += atletas[qtdJogadores - 3] + "\n";
          grupoL.value += atletas[qtdJogadores - 2] + "\n";
          grupoM.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 5) {
          grupoI.value += atletas[qtdJogadores - 5] + "\n";
          grupoJ.value += atletas[qtdJogadores - 4] + "\n";
          grupoK.value += atletas[qtdJogadores - 3] + "\n";
          grupoL.value += atletas[qtdJogadores - 2] + "\n";
          grupoM.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 6) {
          grupoH.value += atletas[qtdJogadores - 6] + "\n";
          grupoI.value += atletas[qtdJogadores - 5] + "\n";
          grupoJ.value += atletas[qtdJogadores - 4] + "\n";
          grupoK.value += atletas[qtdJogadores - 3] + "\n";
          grupoL.value += atletas[qtdJogadores - 2] + "\n";
          grupoM.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 7) {
          grupoG.value += atletas[qtdJogadores - 7] + "\n";
          grupoH.value += atletas[qtdJogadores - 6] + "\n";
          grupoI.value += atletas[qtdJogadores - 5] + "\n";
          grupoJ.value += atletas[qtdJogadores - 4] + "\n";
          grupoK.value += atletas[qtdJogadores - 3] + "\n";
          grupoL.value += atletas[qtdJogadores - 2] + "\n";
          grupoM.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 8) {
          grupoF.value += atletas[qtdJogadores - 8] + "\n";
          grupoG.value += atletas[qtdJogadores - 7] + "\n";
          grupoH.value += atletas[qtdJogadores - 6] + "\n";
          grupoI.value += atletas[qtdJogadores - 5] + "\n";
          grupoJ.value += atletas[qtdJogadores - 4] + "\n";
          grupoK.value += atletas[qtdJogadores - 3] + "\n";
          grupoL.value += atletas[qtdJogadores - 2] + "\n";
          grupoM.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 9) {
          grupoE.value += atletas[qtdJogadores - 9] + "\n";
          grupoF.value += atletas[qtdJogadores - 8] + "\n";
          grupoG.value += atletas[qtdJogadores - 7] + "\n";
          grupoH.value += atletas[qtdJogadores - 6] + "\n";
          grupoI.value += atletas[qtdJogadores - 5] + "\n";
          grupoJ.value += atletas[qtdJogadores - 4] + "\n";
          grupoK.value += atletas[qtdJogadores - 3] + "\n";
          grupoL.value += atletas[qtdJogadores - 2] + "\n";
          grupoM.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 10) {
          grupoD.value += atletas[qtdJogadores - 10] + "\n";
          grupoE.value += atletas[qtdJogadores - 9] + "\n";
          grupoF.value += atletas[qtdJogadores - 8] + "\n";
          grupoG.value += atletas[qtdJogadores - 7] + "\n";
          grupoH.value += atletas[qtdJogadores - 6] + "\n";
          grupoI.value += atletas[qtdJogadores - 5] + "\n";
          grupoJ.value += atletas[qtdJogadores - 4] + "\n";
          grupoK.value += atletas[qtdJogadores - 3] + "\n";
          grupoL.value += atletas[qtdJogadores - 2] + "\n";
          grupoM.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 11) {
          grupoC.value += atletas[qtdJogadores - 11] + "\n";
          grupoD.value += atletas[qtdJogadores - 10] + "\n";
          grupoE.value += atletas[qtdJogadores - 9] + "\n";
          grupoF.value += atletas[qtdJogadores - 8] + "\n";
          grupoG.value += atletas[qtdJogadores - 7] + "\n";
          grupoH.value += atletas[qtdJogadores - 6] + "\n";
          grupoI.value += atletas[qtdJogadores - 5] + "\n";
          grupoJ.value += atletas[qtdJogadores - 4] + "\n";
          grupoK.value += atletas[qtdJogadores - 3] + "\n";
          grupoL.value += atletas[qtdJogadores - 2] + "\n";
          grupoM.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 12) {
          grupoB.value += atletas[qtdJogadores - 12] + "\n";
          grupoC.value += atletas[qtdJogadores - 11] + "\n";
          grupoD.value += atletas[qtdJogadores - 10] + "\n";
          grupoE.value += atletas[qtdJogadores - 9] + "\n";
          grupoF.value += atletas[qtdJogadores - 8] + "\n";
          grupoG.value += atletas[qtdJogadores - 7] + "\n";
          grupoH.value += atletas[qtdJogadores - 6] + "\n";
          grupoI.value += atletas[qtdJogadores - 5] + "\n";
          grupoJ.value += atletas[qtdJogadores - 4] + "\n";
          grupoK.value += atletas[qtdJogadores - 3] + "\n";
          grupoL.value += atletas[qtdJogadores - 2] + "\n";
          grupoM.value += atletas[qtdJogadores - 1] + "\n";
        }
       }
       if (qtdGrupos == 16) {
        for (let i = 0; i < (qtdJogadores - sobra); i += 16) {
          this.mostraGrupoP();
          grupoA.value += atletas[i] + "\n";
          grupoB.value += atletas[i + 1] + "\n";
          grupoC.value += atletas[i + 2] + "\n";
          grupoD.value += atletas[i + 3] + "\n";
          grupoE.value += atletas[i + 4] + "\n";
          grupoF.value += atletas[i + 5] + "\n";
          grupoG.value += atletas[i + 6] + "\n";
          grupoH.value += atletas[i + 7] + "\n";
          grupoI.value += atletas[i + 8] + "\n";
          grupoJ.value += atletas[i + 9] + "\n";
          grupoK.value += atletas[i + 10] + "\n";
          grupoL.value += atletas[i + 11] + "\n";
          grupoM.value += atletas[i + 12] + "\n";
          grupoN.value += atletas[i + 12] + "\n";
          grupoO.value += atletas[i + 12] + "\n";
          grupoP.value += atletas[i + 12] + "\n";
        }
        if (sobra == 1) {
          grupoP.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 2) {
          grupoO.value += atletas[qtdJogadores - 2] + "\n";
          grupoP.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 3) {
          grupoN.value += atletas[qtdJogadores - 3] + "\n";
          grupoO.value += atletas[qtdJogadores - 2] + "\n";
          grupoP.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 4) {
          grupoM.value += atletas[qtdJogadores - 4] + "\n";
          grupoN.value += atletas[qtdJogadores - 3] + "\n";
          grupoO.value += atletas[qtdJogadores - 2] + "\n";
          grupoP.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 5) {
          grupoL.value += atletas[qtdJogadores - 5] + "\n";
          grupoM.value += atletas[qtdJogadores - 4] + "\n";
          grupoN.value += atletas[qtdJogadores - 3] + "\n";
          grupoO.value += atletas[qtdJogadores - 2] + "\n";
          grupoP.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 6) {
          grupoK.value += atletas[qtdJogadores - 6] + "\n";
          grupoL.value += atletas[qtdJogadores - 5] + "\n";
          grupoM.value += atletas[qtdJogadores - 4] + "\n";
          grupoN.value += atletas[qtdJogadores - 3] + "\n";
          grupoO.value += atletas[qtdJogadores - 2] + "\n";
          grupoP.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 7) {
          grupoJ.value += atletas[qtdJogadores - 7] + "\n";
          grupoK.value += atletas[qtdJogadores - 6] + "\n";
          grupoL.value += atletas[qtdJogadores - 5] + "\n";
          grupoM.value += atletas[qtdJogadores - 4] + "\n";
          grupoN.value += atletas[qtdJogadores - 3] + "\n";
          grupoO.value += atletas[qtdJogadores - 2] + "\n";
          grupoP.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 8) {
          grupoI.value += atletas[qtdJogadores - 8] + "\n";
          grupoJ.value += atletas[qtdJogadores - 7] + "\n";
          grupoK.value += atletas[qtdJogadores - 6] + "\n";
          grupoL.value += atletas[qtdJogadores - 5] + "\n";
          grupoM.value += atletas[qtdJogadores - 4] + "\n";
          grupoN.value += atletas[qtdJogadores - 3] + "\n";
          grupoO.value += atletas[qtdJogadores - 2] + "\n";
          grupoP.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 9) {
          grupoH.value += atletas[qtdJogadores - 9] + "\n";
          grupoI.value += atletas[qtdJogadores - 8] + "\n";
          grupoJ.value += atletas[qtdJogadores - 7] + "\n";
          grupoK.value += atletas[qtdJogadores - 6] + "\n";
          grupoL.value += atletas[qtdJogadores - 5] + "\n";
          grupoM.value += atletas[qtdJogadores - 4] + "\n";
          grupoN.value += atletas[qtdJogadores - 3] + "\n";
          grupoO.value += atletas[qtdJogadores - 2] + "\n";
          grupoP.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 10) {
          grupoG.value += atletas[qtdJogadores - 10] + "\n";
          grupoH.value += atletas[qtdJogadores - 9] + "\n";
          grupoI.value += atletas[qtdJogadores - 8] + "\n";
          grupoJ.value += atletas[qtdJogadores - 7] + "\n";
          grupoK.value += atletas[qtdJogadores - 6] + "\n";
          grupoL.value += atletas[qtdJogadores - 5] + "\n";
          grupoM.value += atletas[qtdJogadores - 4] + "\n";
          grupoN.value += atletas[qtdJogadores - 3] + "\n";
          grupoO.value += atletas[qtdJogadores - 2] + "\n";
          grupoP.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 11) {
          grupoF.value += atletas[qtdJogadores - 11] + "\n";
          grupoG.value += atletas[qtdJogadores - 10] + "\n";
          grupoH.value += atletas[qtdJogadores - 9] + "\n";
          grupoI.value += atletas[qtdJogadores - 8] + "\n";
          grupoJ.value += atletas[qtdJogadores - 7] + "\n";
          grupoK.value += atletas[qtdJogadores - 6] + "\n";
          grupoL.value += atletas[qtdJogadores - 5] + "\n";
          grupoM.value += atletas[qtdJogadores - 4] + "\n";
          grupoN.value += atletas[qtdJogadores - 3] + "\n";
          grupoO.value += atletas[qtdJogadores - 2] + "\n";
          grupoP.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 12) {
          grupoE.value += atletas[qtdJogadores - 12] + "\n";
          grupoF.value += atletas[qtdJogadores - 11] + "\n";
          grupoG.value += atletas[qtdJogadores - 10] + "\n";
          grupoH.value += atletas[qtdJogadores - 9] + "\n";
          grupoI.value += atletas[qtdJogadores - 8] + "\n";
          grupoJ.value += atletas[qtdJogadores - 7] + "\n";
          grupoK.value += atletas[qtdJogadores - 6] + "\n";
          grupoL.value += atletas[qtdJogadores - 5] + "\n";
          grupoM.value += atletas[qtdJogadores - 4] + "\n";
          grupoN.value += atletas[qtdJogadores - 3] + "\n";
          grupoO.value += atletas[qtdJogadores - 2] + "\n";
          grupoP.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 13) {
          grupoD.value += atletas[qtdJogadores - 13] + "\n";
          grupoE.value += atletas[qtdJogadores - 12] + "\n";
          grupoF.value += atletas[qtdJogadores - 11] + "\n";
          grupoG.value += atletas[qtdJogadores - 10] + "\n";
          grupoH.value += atletas[qtdJogadores - 9] + "\n";
          grupoI.value += atletas[qtdJogadores - 8] + "\n";
          grupoJ.value += atletas[qtdJogadores - 7] + "\n";
          grupoK.value += atletas[qtdJogadores - 6] + "\n";
          grupoL.value += atletas[qtdJogadores - 5] + "\n";
          grupoM.value += atletas[qtdJogadores - 4] + "\n";
          grupoN.value += atletas[qtdJogadores - 3] + "\n";
          grupoO.value += atletas[qtdJogadores - 2] + "\n";
          grupoP.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 14) {
          grupoC.value += atletas[qtdJogadores - 14] + "\n";
          grupoD.value += atletas[qtdJogadores - 13] + "\n";
          grupoE.value += atletas[qtdJogadores - 12] + "\n";
          grupoF.value += atletas[qtdJogadores - 11] + "\n";
          grupoG.value += atletas[qtdJogadores - 10] + "\n";
          grupoH.value += atletas[qtdJogadores - 9] + "\n";
          grupoI.value += atletas[qtdJogadores - 8] + "\n";
          grupoJ.value += atletas[qtdJogadores - 7] + "\n";
          grupoK.value += atletas[qtdJogadores - 6] + "\n";
          grupoL.value += atletas[qtdJogadores - 5] + "\n";
          grupoM.value += atletas[qtdJogadores - 4] + "\n";
          grupoN.value += atletas[qtdJogadores - 3] + "\n";
          grupoO.value += atletas[qtdJogadores - 2] + "\n";
          grupoP.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 15) {
          grupoB.value += atletas[qtdJogadores - 15] + "\n";
          grupoC.value += atletas[qtdJogadores - 14] + "\n";
          grupoD.value += atletas[qtdJogadores - 13] + "\n";
          grupoE.value += atletas[qtdJogadores - 12] + "\n";
          grupoF.value += atletas[qtdJogadores - 11] + "\n";
          grupoG.value += atletas[qtdJogadores - 10] + "\n";
          grupoH.value += atletas[qtdJogadores - 9] + "\n";
          grupoI.value += atletas[qtdJogadores - 8] + "\n";
          grupoJ.value += atletas[qtdJogadores - 7] + "\n";
          grupoK.value += atletas[qtdJogadores - 6] + "\n";
          grupoL.value += atletas[qtdJogadores - 5] + "\n";
          grupoM.value += atletas[qtdJogadores - 4] + "\n";
          grupoN.value += atletas[qtdJogadores - 3] + "\n";
          grupoO.value += atletas[qtdJogadores - 2] + "\n";
          grupoP.value += atletas[qtdJogadores - 1] + "\n";
        }
       }
    },

    sorteio() {
      this.jogos = true;
      let grupoA = document.getElementById("A");
      let grupoB = document.getElementById("B");
      let grupoC = document.getElementById("C");
      let grupoD = document.getElementById("D");
      let grupoE = document.getElementById("E");
      let grupoF = document.getElementById("F");
      let grupoG = document.getElementById("G");
      let grupoH = document.getElementById("H");
      let grupoI = document.getElementById("I");
      let grupoJ = document.getElementById("J");
      let grupoK = document.getElementById("K");
      let grupoL = document.getElementById("L");
      let grupoM = document.getElementById("M");
      let grupoN = document.getElementById("N");
      let grupoO = document.getElementById("O");
      let grupoP = document.getElementById("P");
      grupoA.value = "";
      grupoB.value = "";
      grupoC.value = "";
      grupoD.value = "";
      grupoE.value = "";
      grupoF.value = "";
      grupoG.value = "";
      grupoH.value = "";
      grupoI.value = "";
      grupoJ.value = "";
      grupoK.value = "";
      grupoL.value = "";
      grupoM.value = "";
      grupoN.value = "";
      grupoO.value = "";
      grupoP.value = "";

      let nomesJogadores = document.getElementById("nomesAtletas");
      let atletas = nomesJogadores.value.split("\n");
      const qtdGrupos = this.selected;
      const qtdJogadores = atletas.length;

      //tornar a lista de jogadores aleatoria
      for (let i = 0; i < atletas.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [atletas[i], atletas[j]] = [atletas[j], atletas[i]];
      }
      /* 
        atletas.forEach(e => {
          console.log(e)
        });
      */
      const sobra = qtdJogadores % qtdGrupos;

      if (qtdGrupos == 1) {
        for (let i = 0; i < (qtdJogadores - sobra); i++) {
          this.mostraGrupoA();
          grupoA.value += atletas[i] + "\n";
        }
      }

      if (qtdGrupos == 2) {
        for (let i = 0; i < (qtdJogadores - sobra); i += 2) {
          this.mostraGrupoB();
          grupoA.value += atletas[i] + "\n";
          grupoB.value += atletas[i + 1] + "\n";
        }
        if (sobra == 1) {
          grupoB.value += atletas[qtdJogadores - 1] + "\n";
        }
      }
      if (qtdGrupos == 3) {
        this.mostraGrupoC();
        for (let i = 0; i < (qtdJogadores - sobra); i += 3) {
          grupoA.value += atletas[i] + "\n";
          grupoB.value += atletas[i + 1] + "\n";
          grupoC.value += atletas[i + 2] + "\n";
        }
        if (sobra == 1) {
          grupoC.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 2) {
          grupoB.value += atletas[qtdJogadores - 2] + "\n";
          grupoC.value += atletas[qtdJogadores - 1] + "\n";
        }
      }
      if (qtdGrupos == 4) {
        for (let i = 0; i < (qtdJogadores - sobra); i += 4) {
          this.mostraGrupoD();
          grupoA.value += atletas[i] + "\n";
          grupoB.value += atletas[i + 1] + "\n";
          grupoC.value += atletas[i + 2] + "\n";
          grupoD.value += atletas[i + 3] + "\n";
        }
        if (sobra == 1) {
          grupoD.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 2) {
          grupoC.value += atletas[qtdJogadores - 2] + "\n";
          grupoD.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 3) {
          grupoB.value += atletas[qtdJogadores - 3] + "\n";
          grupoC.value += atletas[qtdJogadores - 2] + "\n";
          grupoD.value += atletas[qtdJogadores - 1] + "\n";
        }
      }
      if (qtdGrupos == 5) {
        for (let i = 0; i < (qtdJogadores - sobra); i += 5) {
          this.mostraGrupoE();
          grupoA.value += atletas[i] + "\n";
          grupoB.value += atletas[i + 1] + "\n";
          grupoC.value += atletas[i + 2] + "\n";
          grupoD.value += atletas[i + 3] + "\n";
          grupoE.value += atletas[i + 4] + "\n";
        }
        if (sobra == 1) {
          grupoE.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 2) {
          grupoD.value += atletas[qtdJogadores - 2] + "\n";
          grupoE.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 3) {
          grupoC.value += atletas[qtdJogadores - 3] + "\n";
          grupoD.value += atletas[qtdJogadores - 2] + "\n";
          grupoE.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 4) {
          grupoB.value += atletas[qtdJogadores - 4] + "\n";
          grupoC.value += atletas[qtdJogadores - 3] + "\n";
          grupoD.value += atletas[qtdJogadores - 2] + "\n";
          grupoE.value += atletas[qtdJogadores - 1] + "\n";
        }
      }
      if (qtdGrupos == 6) {
        for (let i = 0; i < (qtdJogadores - sobra); i += 6) {
          this.mostraGrupoF();
          grupoA.value += atletas[i] + "\n";
          grupoB.value += atletas[i + 1] + "\n";
          grupoC.value += atletas[i + 2] + "\n";
          grupoD.value += atletas[i + 3] + "\n";
          grupoE.value += atletas[i + 4] + "\n";
          grupoF.value += atletas[i + 5] + "\n";
        }
        if (sobra == 1) {
          grupoF.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 2) {
          grupoE.value += atletas[qtdJogadores - 2] + "\n";
          grupoF.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 3) {
          grupoD.value += atletas[qtdJogadores - 3] + "\n";
          grupoE.value += atletas[qtdJogadores - 2] + "\n";
          grupoF.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 4) {
          grupoC.value += atletas[qtdJogadores - 4] + "\n";
          grupoD.value += atletas[qtdJogadores - 3] + "\n";
          grupoE.value += atletas[qtdJogadores - 2] + "\n";
          grupoF.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 5) {
          grupoB.value += atletas[qtdJogadores - 5] + "\n";
          grupoC.value += atletas[qtdJogadores - 4] + "\n";
          grupoD.value += atletas[qtdJogadores - 3] + "\n";
          grupoE.value += atletas[qtdJogadores - 2] + "\n";
          grupoF.value += atletas[qtdJogadores - 1] + "\n";
        }
      }
      if (qtdGrupos == 7) {
        for (let i = 0; i < (qtdJogadores - sobra); i += 7) {
          this.mostraGrupoG();
          grupoA.value += atletas[i] + "\n";
          grupoB.value += atletas[i + 1] + "\n";
          grupoC.value += atletas[i + 2] + "\n";
          grupoD.value += atletas[i + 3] + "\n";
          grupoE.value += atletas[i + 4] + "\n";
          grupoF.value += atletas[i + 5] + "\n";
          grupoG.value += atletas[i + 6] + "\n";
        }
        if (sobra == 1) {
          grupoG.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 2) {
          grupoF.value += atletas[qtdJogadores - 2] + "\n";
          grupoG.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 3) {
          grupoE.value += atletas[qtdJogadores - 3] + "\n";
          grupoF.value += atletas[qtdJogadores - 2] + "\n";
          grupoG.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 4) {
          grupoD.value += atletas[qtdJogadores - 4] + "\n";
          grupoE.value += atletas[qtdJogadores - 3] + "\n";
          grupoF.value += atletas[qtdJogadores - 2] + "\n";
          grupoG.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 5) {
          grupoC.value += atletas[qtdJogadores - 5] + "\n";
          grupoD.value += atletas[qtdJogadores - 4] + "\n";
          grupoE.value += atletas[qtdJogadores - 3] + "\n";
          grupoF.value += atletas[qtdJogadores - 2] + "\n";
          grupoG.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 6) {
          grupoB.value += atletas[qtdJogadores - 6] + "\n";
          grupoC.value += atletas[qtdJogadores - 5] + "\n";
          grupoD.value += atletas[qtdJogadores - 4] + "\n";
          grupoE.value += atletas[qtdJogadores - 3] + "\n";
          grupoF.value += atletas[qtdJogadores - 2] + "\n";
          grupoG.value += atletas[qtdJogadores - 1] + "\n";
        }
      }
      if (qtdGrupos == 8) {
        for (let i = 0; i < (qtdJogadores - sobra); i += 8) {
          this.mostraGrupoH();
          grupoA.value += atletas[i] + "\n";
          grupoB.value += atletas[i + 1] + "\n";
          grupoC.value += atletas[i + 2] + "\n";
          grupoD.value += atletas[i + 3] + "\n";
          grupoE.value += atletas[i + 4] + "\n";
          grupoF.value += atletas[i + 5] + "\n";
          grupoG.value += atletas[i + 6] + "\n";
          grupoH.value += atletas[i + 7] + "\n";
        }
        if (sobra == 1) {
          grupoH.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 2) {
          grupoG.value += atletas[qtdJogadores - 2] + "\n";
          grupoH.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 3) {
          grupoF.value += atletas[qtdJogadores - 3] + "\n";
          grupoG.value += atletas[qtdJogadores - 2] + "\n";
          grupoH.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 4) {
          grupoE.value += atletas[qtdJogadores - 4] + "\n";
          grupoF.value += atletas[qtdJogadores - 3] + "\n";
          grupoG.value += atletas[qtdJogadores - 2] + "\n";
          grupoH.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 5) {
          grupoD.value += atletas[qtdJogadores - 5] + "\n";
          grupoE.value += atletas[qtdJogadores - 4] + "\n";
          grupoF.value += atletas[qtdJogadores - 3] + "\n";
          grupoG.value += atletas[qtdJogadores - 2] + "\n";
          grupoH.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 6) {
          grupoC.value += atletas[qtdJogadores - 6] + "\n";
          grupoD.value += atletas[qtdJogadores - 5] + "\n";
          grupoE.value += atletas[qtdJogadores - 4] + "\n";
          grupoF.value += atletas[qtdJogadores - 3] + "\n";
          grupoG.value += atletas[qtdJogadores - 2] + "\n";
          grupoH.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 7) {
          grupoB.value += atletas[qtdJogadores - 7] + "\n";
          grupoC.value += atletas[qtdJogadores - 6] + "\n";
          grupoD.value += atletas[qtdJogadores - 5] + "\n";
          grupoE.value += atletas[qtdJogadores - 4] + "\n";
          grupoF.value += atletas[qtdJogadores - 3] + "\n";
          grupoG.value += atletas[qtdJogadores - 2] + "\n";
          grupoH.value += atletas[qtdJogadores - 1] + "\n";
        }
      }
        if (qtdGrupos == 12) {
        for (let i = 0; i < (qtdJogadores - sobra); i += 12) {
          this.mostraGrupoL();
          grupoA.value += atletas[i] + "\n";
          grupoB.value += atletas[i + 1] + "\n";
          grupoC.value += atletas[i + 2] + "\n";
          grupoD.value += atletas[i + 3] + "\n";
          grupoE.value += atletas[i + 4] + "\n";
          grupoF.value += atletas[i + 5] + "\n";
          grupoG.value += atletas[i + 6] + "\n";
          grupoH.value += atletas[i + 7] + "\n";
          grupoI.value += atletas[i + 8] + "\n";
          grupoJ.value += atletas[i + 9] + "\n";
          grupoK.value += atletas[i + 10] + "\n";
          grupoL.value += atletas[i + 11] + "\n";
        }
        if (sobra == 1) {
          grupoL.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 2) {
          grupoK.value += atletas[qtdJogadores - 2] + "\n";
          grupoL.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 3) {
          grupoJ.value += atletas[qtdJogadores - 3] + "\n";
          grupoK.value += atletas[qtdJogadores - 2] + "\n";
          grupoL.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 4) {
          grupoI.value += atletas[qtdJogadores - 4] + "\n";
          grupoJ.value += atletas[qtdJogadores - 3] + "\n";
          grupoK.value += atletas[qtdJogadores - 2] + "\n";
          grupoL.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 5) {
          grupoH.value += atletas[qtdJogadores - 5] + "\n";
          grupoI.value += atletas[qtdJogadores - 4] + "\n";
          grupoJ.value += atletas[qtdJogadores - 3] + "\n";
          grupoK.value += atletas[qtdJogadores - 2] + "\n";
          grupoL.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 6) {
          grupoG.value += atletas[qtdJogadores - 6] + "\n";
          grupoH.value += atletas[qtdJogadores - 5] + "\n";
          grupoI.value += atletas[qtdJogadores - 4] + "\n";
          grupoJ.value += atletas[qtdJogadores - 3] + "\n";
          grupoK.value += atletas[qtdJogadores - 2] + "\n";
          grupoL.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 7) {
          grupoF.value += atletas[qtdJogadores - 7] + "\n";
          grupoG.value += atletas[qtdJogadores - 6] + "\n";
          grupoH.value += atletas[qtdJogadores - 5] + "\n";
          grupoI.value += atletas[qtdJogadores - 4] + "\n";
          grupoJ.value += atletas[qtdJogadores - 3] + "\n";
          grupoK.value += atletas[qtdJogadores - 2] + "\n";
          grupoL.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 8) {
          grupoE.value += atletas[qtdJogadores - 8] + "\n";
          grupoF.value += atletas[qtdJogadores - 7] + "\n";
          grupoG.value += atletas[qtdJogadores - 6] + "\n";
          grupoH.value += atletas[qtdJogadores - 5] + "\n";
          grupoI.value += atletas[qtdJogadores - 4] + "\n";
          grupoJ.value += atletas[qtdJogadores - 3] + "\n";
          grupoK.value += atletas[qtdJogadores - 2] + "\n";
          grupoL.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 9) {
          grupoD.value += atletas[qtdJogadores - 9] + "\n";
          grupoE.value += atletas[qtdJogadores - 8] + "\n";
          grupoF.value += atletas[qtdJogadores - 7] + "\n";
          grupoG.value += atletas[qtdJogadores - 6] + "\n";
          grupoH.value += atletas[qtdJogadores - 5] + "\n";
          grupoI.value += atletas[qtdJogadores - 4] + "\n";
          grupoJ.value += atletas[qtdJogadores - 3] + "\n";
          grupoK.value += atletas[qtdJogadores - 2] + "\n";
          grupoL.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 10) {
          grupoC.value += atletas[qtdJogadores - 10] + "\n";
          grupoD.value += atletas[qtdJogadores - 9] + "\n";
          grupoE.value += atletas[qtdJogadores - 8] + "\n";
          grupoF.value += atletas[qtdJogadores - 7] + "\n";
          grupoG.value += atletas[qtdJogadores - 6] + "\n";
          grupoH.value += atletas[qtdJogadores - 5] + "\n";
          grupoI.value += atletas[qtdJogadores - 4] + "\n";
          grupoJ.value += atletas[qtdJogadores - 3] + "\n";
          grupoK.value += atletas[qtdJogadores - 2] + "\n";
          grupoL.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 11) {
          grupoB.value += atletas[qtdJogadores - 11] + "\n";
          grupoC.value += atletas[qtdJogadores - 10] + "\n";
          grupoD.value += atletas[qtdJogadores - 9] + "\n";
          grupoE.value += atletas[qtdJogadores - 8] + "\n";
          grupoF.value += atletas[qtdJogadores - 7] + "\n";
          grupoG.value += atletas[qtdJogadores - 6] + "\n";
          grupoH.value += atletas[qtdJogadores - 5] + "\n";
          grupoI.value += atletas[qtdJogadores - 4] + "\n";
          grupoJ.value += atletas[qtdJogadores - 3] + "\n";
          grupoK.value += atletas[qtdJogadores - 2] + "\n";
          grupoL.value += atletas[qtdJogadores - 1] + "\n";
        }
       }
       if (qtdGrupos == 13) {
        for (let i = 0; i < (qtdJogadores - sobra); i += 13) {
          this.mostraGrupoM();
          grupoA.value += atletas[i] + "\n";
          grupoB.value += atletas[i + 1] + "\n";
          grupoC.value += atletas[i + 2] + "\n";
          grupoD.value += atletas[i + 3] + "\n";
          grupoE.value += atletas[i + 4] + "\n";
          grupoF.value += atletas[i + 5] + "\n";
          grupoG.value += atletas[i + 6] + "\n";
          grupoH.value += atletas[i + 7] + "\n";
          grupoI.value += atletas[i + 8] + "\n";
          grupoJ.value += atletas[i + 9] + "\n";
          grupoK.value += atletas[i + 10] + "\n";
          grupoL.value += atletas[i + 11] + "\n";
          grupoM.value += atletas[i + 12] + "\n";
        }
        if (sobra == 1) {
          grupoM.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 2) {
          grupoL.value += atletas[qtdJogadores - 2] + "\n";
          grupoM.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 3) {
          grupoK.value += atletas[qtdJogadores - 3] + "\n";
          grupoL.value += atletas[qtdJogadores - 2] + "\n";
          grupoM.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 4) {
          grupoJ.value += atletas[qtdJogadores - 4] + "\n";
          grupoK.value += atletas[qtdJogadores - 3] + "\n";
          grupoL.value += atletas[qtdJogadores - 2] + "\n";
          grupoM.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 5) {
          grupoI.value += atletas[qtdJogadores - 5] + "\n";
          grupoJ.value += atletas[qtdJogadores - 4] + "\n";
          grupoK.value += atletas[qtdJogadores - 3] + "\n";
          grupoL.value += atletas[qtdJogadores - 2] + "\n";
          grupoM.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 6) {
          grupoH.value += atletas[qtdJogadores - 6] + "\n";
          grupoI.value += atletas[qtdJogadores - 5] + "\n";
          grupoJ.value += atletas[qtdJogadores - 4] + "\n";
          grupoK.value += atletas[qtdJogadores - 3] + "\n";
          grupoL.value += atletas[qtdJogadores - 2] + "\n";
          grupoM.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 7) {
          grupoG.value += atletas[qtdJogadores - 7] + "\n";
          grupoH.value += atletas[qtdJogadores - 6] + "\n";
          grupoI.value += atletas[qtdJogadores - 5] + "\n";
          grupoJ.value += atletas[qtdJogadores - 4] + "\n";
          grupoK.value += atletas[qtdJogadores - 3] + "\n";
          grupoL.value += atletas[qtdJogadores - 2] + "\n";
          grupoM.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 8) {
          grupoF.value += atletas[qtdJogadores - 8] + "\n";
          grupoG.value += atletas[qtdJogadores - 7] + "\n";
          grupoH.value += atletas[qtdJogadores - 6] + "\n";
          grupoI.value += atletas[qtdJogadores - 5] + "\n";
          grupoJ.value += atletas[qtdJogadores - 4] + "\n";
          grupoK.value += atletas[qtdJogadores - 3] + "\n";
          grupoL.value += atletas[qtdJogadores - 2] + "\n";
          grupoM.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 9) {
          grupoE.value += atletas[qtdJogadores - 9] + "\n";
          grupoF.value += atletas[qtdJogadores - 8] + "\n";
          grupoG.value += atletas[qtdJogadores - 7] + "\n";
          grupoH.value += atletas[qtdJogadores - 6] + "\n";
          grupoI.value += atletas[qtdJogadores - 5] + "\n";
          grupoJ.value += atletas[qtdJogadores - 4] + "\n";
          grupoK.value += atletas[qtdJogadores - 3] + "\n";
          grupoL.value += atletas[qtdJogadores - 2] + "\n";
          grupoM.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 10) {
          grupoD.value += atletas[qtdJogadores - 10] + "\n";
          grupoE.value += atletas[qtdJogadores - 9] + "\n";
          grupoF.value += atletas[qtdJogadores - 8] + "\n";
          grupoG.value += atletas[qtdJogadores - 7] + "\n";
          grupoH.value += atletas[qtdJogadores - 6] + "\n";
          grupoI.value += atletas[qtdJogadores - 5] + "\n";
          grupoJ.value += atletas[qtdJogadores - 4] + "\n";
          grupoK.value += atletas[qtdJogadores - 3] + "\n";
          grupoL.value += atletas[qtdJogadores - 2] + "\n";
          grupoM.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 11) {
          grupoC.value += atletas[qtdJogadores - 11] + "\n";
          grupoD.value += atletas[qtdJogadores - 10] + "\n";
          grupoE.value += atletas[qtdJogadores - 9] + "\n";
          grupoF.value += atletas[qtdJogadores - 8] + "\n";
          grupoG.value += atletas[qtdJogadores - 7] + "\n";
          grupoH.value += atletas[qtdJogadores - 6] + "\n";
          grupoI.value += atletas[qtdJogadores - 5] + "\n";
          grupoJ.value += atletas[qtdJogadores - 4] + "\n";
          grupoK.value += atletas[qtdJogadores - 3] + "\n";
          grupoL.value += atletas[qtdJogadores - 2] + "\n";
          grupoM.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 12) {
          grupoB.value += atletas[qtdJogadores - 12] + "\n";
          grupoC.value += atletas[qtdJogadores - 11] + "\n";
          grupoD.value += atletas[qtdJogadores - 10] + "\n";
          grupoE.value += atletas[qtdJogadores - 9] + "\n";
          grupoF.value += atletas[qtdJogadores - 8] + "\n";
          grupoG.value += atletas[qtdJogadores - 7] + "\n";
          grupoH.value += atletas[qtdJogadores - 6] + "\n";
          grupoI.value += atletas[qtdJogadores - 5] + "\n";
          grupoJ.value += atletas[qtdJogadores - 4] + "\n";
          grupoK.value += atletas[qtdJogadores - 3] + "\n";
          grupoL.value += atletas[qtdJogadores - 2] + "\n";
          grupoM.value += atletas[qtdJogadores - 1] + "\n";
        }
       }
       if (qtdGrupos == 16) {
        for (let i = 0; i < (qtdJogadores - sobra); i += 16) {
          this.mostraGrupoP();
          grupoA.value += atletas[i] + "\n";
          grupoB.value += atletas[i + 1] + "\n";
          grupoC.value += atletas[i + 2] + "\n";
          grupoD.value += atletas[i + 3] + "\n";
          grupoE.value += atletas[i + 4] + "\n";
          grupoF.value += atletas[i + 5] + "\n";
          grupoG.value += atletas[i + 6] + "\n";
          grupoH.value += atletas[i + 7] + "\n";
          grupoI.value += atletas[i + 8] + "\n";
          grupoJ.value += atletas[i + 9] + "\n";
          grupoK.value += atletas[i + 10] + "\n";
          grupoL.value += atletas[i + 11] + "\n";
          grupoM.value += atletas[i + 12] + "\n";
          grupoN.value += atletas[i + 12] + "\n";
          grupoO.value += atletas[i + 12] + "\n";
          grupoP.value += atletas[i + 12] + "\n";
        }
        if (sobra == 1) {
          grupoP.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 2) {
          grupoO.value += atletas[qtdJogadores - 2] + "\n";
          grupoP.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 3) {
          grupoN.value += atletas[qtdJogadores - 3] + "\n";
          grupoO.value += atletas[qtdJogadores - 2] + "\n";
          grupoP.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 4) {
          grupoM.value += atletas[qtdJogadores - 4] + "\n";
          grupoN.value += atletas[qtdJogadores - 3] + "\n";
          grupoO.value += atletas[qtdJogadores - 2] + "\n";
          grupoP.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 5) {
          grupoL.value += atletas[qtdJogadores - 5] + "\n";
          grupoM.value += atletas[qtdJogadores - 4] + "\n";
          grupoN.value += atletas[qtdJogadores - 3] + "\n";
          grupoO.value += atletas[qtdJogadores - 2] + "\n";
          grupoP.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 6) {
          grupoK.value += atletas[qtdJogadores - 6] + "\n";
          grupoL.value += atletas[qtdJogadores - 5] + "\n";
          grupoM.value += atletas[qtdJogadores - 4] + "\n";
          grupoN.value += atletas[qtdJogadores - 3] + "\n";
          grupoO.value += atletas[qtdJogadores - 2] + "\n";
          grupoP.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 7) {
          grupoJ.value += atletas[qtdJogadores - 7] + "\n";
          grupoK.value += atletas[qtdJogadores - 6] + "\n";
          grupoL.value += atletas[qtdJogadores - 5] + "\n";
          grupoM.value += atletas[qtdJogadores - 4] + "\n";
          grupoN.value += atletas[qtdJogadores - 3] + "\n";
          grupoO.value += atletas[qtdJogadores - 2] + "\n";
          grupoP.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 8) {
          grupoI.value += atletas[qtdJogadores - 8] + "\n";
          grupoJ.value += atletas[qtdJogadores - 7] + "\n";
          grupoK.value += atletas[qtdJogadores - 6] + "\n";
          grupoL.value += atletas[qtdJogadores - 5] + "\n";
          grupoM.value += atletas[qtdJogadores - 4] + "\n";
          grupoN.value += atletas[qtdJogadores - 3] + "\n";
          grupoO.value += atletas[qtdJogadores - 2] + "\n";
          grupoP.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 9) {
          grupoH.value += atletas[qtdJogadores - 9] + "\n";
          grupoI.value += atletas[qtdJogadores - 8] + "\n";
          grupoJ.value += atletas[qtdJogadores - 7] + "\n";
          grupoK.value += atletas[qtdJogadores - 6] + "\n";
          grupoL.value += atletas[qtdJogadores - 5] + "\n";
          grupoM.value += atletas[qtdJogadores - 4] + "\n";
          grupoN.value += atletas[qtdJogadores - 3] + "\n";
          grupoO.value += atletas[qtdJogadores - 2] + "\n";
          grupoP.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 10) {
          grupoG.value += atletas[qtdJogadores - 10] + "\n";
          grupoH.value += atletas[qtdJogadores - 9] + "\n";
          grupoI.value += atletas[qtdJogadores - 8] + "\n";
          grupoJ.value += atletas[qtdJogadores - 7] + "\n";
          grupoK.value += atletas[qtdJogadores - 6] + "\n";
          grupoL.value += atletas[qtdJogadores - 5] + "\n";
          grupoM.value += atletas[qtdJogadores - 4] + "\n";
          grupoN.value += atletas[qtdJogadores - 3] + "\n";
          grupoO.value += atletas[qtdJogadores - 2] + "\n";
          grupoP.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 11) {
          grupoF.value += atletas[qtdJogadores - 11] + "\n";
          grupoG.value += atletas[qtdJogadores - 10] + "\n";
          grupoH.value += atletas[qtdJogadores - 9] + "\n";
          grupoI.value += atletas[qtdJogadores - 8] + "\n";
          grupoJ.value += atletas[qtdJogadores - 7] + "\n";
          grupoK.value += atletas[qtdJogadores - 6] + "\n";
          grupoL.value += atletas[qtdJogadores - 5] + "\n";
          grupoM.value += atletas[qtdJogadores - 4] + "\n";
          grupoN.value += atletas[qtdJogadores - 3] + "\n";
          grupoO.value += atletas[qtdJogadores - 2] + "\n";
          grupoP.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 12) {
          grupoE.value += atletas[qtdJogadores - 12] + "\n";
          grupoF.value += atletas[qtdJogadores - 11] + "\n";
          grupoG.value += atletas[qtdJogadores - 10] + "\n";
          grupoH.value += atletas[qtdJogadores - 9] + "\n";
          grupoI.value += atletas[qtdJogadores - 8] + "\n";
          grupoJ.value += atletas[qtdJogadores - 7] + "\n";
          grupoK.value += atletas[qtdJogadores - 6] + "\n";
          grupoL.value += atletas[qtdJogadores - 5] + "\n";
          grupoM.value += atletas[qtdJogadores - 4] + "\n";
          grupoN.value += atletas[qtdJogadores - 3] + "\n";
          grupoO.value += atletas[qtdJogadores - 2] + "\n";
          grupoP.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 13) {
          grupoD.value += atletas[qtdJogadores - 13] + "\n";
          grupoE.value += atletas[qtdJogadores - 12] + "\n";
          grupoF.value += atletas[qtdJogadores - 11] + "\n";
          grupoG.value += atletas[qtdJogadores - 10] + "\n";
          grupoH.value += atletas[qtdJogadores - 9] + "\n";
          grupoI.value += atletas[qtdJogadores - 8] + "\n";
          grupoJ.value += atletas[qtdJogadores - 7] + "\n";
          grupoK.value += atletas[qtdJogadores - 6] + "\n";
          grupoL.value += atletas[qtdJogadores - 5] + "\n";
          grupoM.value += atletas[qtdJogadores - 4] + "\n";
          grupoN.value += atletas[qtdJogadores - 3] + "\n";
          grupoO.value += atletas[qtdJogadores - 2] + "\n";
          grupoP.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 14) {
          grupoC.value += atletas[qtdJogadores - 14] + "\n";
          grupoD.value += atletas[qtdJogadores - 13] + "\n";
          grupoE.value += atletas[qtdJogadores - 12] + "\n";
          grupoF.value += atletas[qtdJogadores - 11] + "\n";
          grupoG.value += atletas[qtdJogadores - 10] + "\n";
          grupoH.value += atletas[qtdJogadores - 9] + "\n";
          grupoI.value += atletas[qtdJogadores - 8] + "\n";
          grupoJ.value += atletas[qtdJogadores - 7] + "\n";
          grupoK.value += atletas[qtdJogadores - 6] + "\n";
          grupoL.value += atletas[qtdJogadores - 5] + "\n";
          grupoM.value += atletas[qtdJogadores - 4] + "\n";
          grupoN.value += atletas[qtdJogadores - 3] + "\n";
          grupoO.value += atletas[qtdJogadores - 2] + "\n";
          grupoP.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 15) {
          grupoB.value += atletas[qtdJogadores - 15] + "\n";
          grupoC.value += atletas[qtdJogadores - 14] + "\n";
          grupoD.value += atletas[qtdJogadores - 13] + "\n";
          grupoE.value += atletas[qtdJogadores - 12] + "\n";
          grupoF.value += atletas[qtdJogadores - 11] + "\n";
          grupoG.value += atletas[qtdJogadores - 10] + "\n";
          grupoH.value += atletas[qtdJogadores - 9] + "\n";
          grupoI.value += atletas[qtdJogadores - 8] + "\n";
          grupoJ.value += atletas[qtdJogadores - 7] + "\n";
          grupoK.value += atletas[qtdJogadores - 6] + "\n";
          grupoL.value += atletas[qtdJogadores - 5] + "\n";
          grupoM.value += atletas[qtdJogadores - 4] + "\n";
          grupoN.value += atletas[qtdJogadores - 3] + "\n";
          grupoO.value += atletas[qtdJogadores - 2] + "\n";
          grupoP.value += atletas[qtdJogadores - 1] + "\n";
        }
       }
      }
    }

  })
</script>