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
      grupoA.value = "";
      grupoB.value = "";
      grupoC.value = "";
      grupoD.value = "";
      grupoE.value = "";
      grupoF.value = "";
      grupoG.value = "";
      grupoH.value = "";

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
      grupoA.value = "";
      grupoB.value = "";
      grupoC.value = "";
      grupoD.value = "";
      grupoE.value = "";
      grupoF.value = "";
      grupoG.value = "";
      grupoH.value = "";

      let grupoAArray = [];
      let grupoBArray = [];
      let grupoCArray = [];
      let grupoDArray = [];
      let grupoEArray = [];
      let grupoFArray = [];
      let grupoGArray = [];
      let grupoHArray = [];

      let nomesJogadores = document.getElementById("nomesAtletas");
      let atletas = nomesJogadores.value.split("\n");
      // console.log(typeof atletas) //é um Array
      const qtdGrupos = this.selected;
      const qtdJogadores = atletas.length;

      //tornar a lista de jogadores aleatoria
      for (let i = 0; i < atletas.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [atletas[i], atletas[j]] = [atletas[j], atletas[i]];
      }

      const sobra = qtdJogadores % qtdGrupos;

      if (qtdGrupos == 1) {
        for (let i = 0; i < (qtdJogadores - sobra); i++) {
          this.mostraGrupoA();
          grupoAArray.push(atletas[i]);
          grupoA.value += atletas[i] + "\n";
        }

      }

      if (qtdGrupos == 2) {
        for (let i = 0; i < (qtdJogadores - sobra); i += 2) {
          this.mostraGrupoB();
          grupoAArray.push(atletas[i]);
          grupoA.value += atletas[i] + "\n";
          grupoBArray.push(atletas[i + 1]);
          grupoB.value += atletas[i + 1] + "\n";
        }
        if (sobra == 1) {
          grupoBArray.push(atletas[qtdJogadores - 1]);
          grupoB.value += atletas[qtdJogadores - 1] + "\n";
        }
        console.log(grupoAArray, grupoBArray)
      }

      if (qtdGrupos == 3) {
        for (let i = 0; i < (qtdJogadores - sobra); i += 3) {
          this.mostraGrupoC();
          grupoAArray.push(atletas[i]);
          grupoA.value += atletas[i] + "\n";
          grupoBArray.push(atletas[i + 1]);
          grupoB.value += atletas[i + 1] + "\n";
          grupoCArray.push(atletas[i + 2]);
          grupoC.value += atletas[i + 2] + "\n";
        }
        if (sobra == 1) {
          grupoCArray.push(atletas[qtdJogadores - 1]);
          grupoC.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 2) {
          grupoBArray.push(atletas[qtdJogadores - 2]);
          grupoB.value += atletas[qtdJogadores - 2] + "\n";
          grupoCArray.push(atletas[qtdJogadores - 1]);
          grupoC.value += atletas[qtdJogadores - 1] + "\n";
        }
        console.log(grupoAArray, grupoBArray, grupoCArray)
      }

      if (qtdGrupos == 4) {
        for (let i = 0; i < (qtdJogadores - sobra); i += 4) {
          this.mostraGrupoD();
          grupoAArray.push(atletas[i]);
          grupoA.value += atletas[i] + "\n";
          grupoBArray.push(atletas[i + 1]);
          grupoB.value += atletas[i + 1] + "\n";
          grupoCArray.push(atletas[i + 2]);
          grupoC.value += atletas[i + 2] + "\n";
          grupoDArray.push(atletas[i + 3])
          grupoD.value += atletas[i + 3] + "\n";
        }
        if (sobra == 1) {
          grupoDArray.push(atletas[qtdJogadores - 1]);
          grupoD.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 2) {
          grupoCArray.push(atletas[qtdJogadores - 2]);
          grupoC.value += atletas[qtdJogadores - 2] + "\n";
          grupoDArray.push(atletas[qtdJogadores - 1]);
          grupoD.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 3) {
          grupoBArray.push(atletas[qtdJogadores - 3]);
          grupoB.value += atletas[qtdJogadores - 3] + "\n";
          grupoCArray.push(atletas[qtdJogadores - 2]);
          grupoC.value += atletas[qtdJogadores - 2] + "\n";
          grupoDArray.push(atletas[qtdJogadores - 1]);
          grupoD.value += atletas[qtdJogadores - 1] + "\n";
        }
        console.log(grupoAArray, grupoBArray, grupoCArray, grupoDArray)
      }
      if (qtdGrupos == 5) {
        for (let i = 0; i < (qtdJogadores - sobra); i += 5) {
          this.mostraGrupoE();
          grupoAArray.push(atletas[i]);
          grupoA.value += atletas[i] + "\n";
          grupoBArray.push(atletas[i + 1]);
          grupoB.value += atletas[i + 1] + "\n";
          grupoCArray.push(atletas[i + 2]);
          grupoC.value += atletas[i + 2] + "\n";
          grupoDArray.push(atletas[i + 3])
          grupoD.value += atletas[i + 3] + "\n";
          grupoEArray.push(atletas[i + 4])
          grupoE.value += atletas[i + 4] + "\n";
        }
        if (sobra == 1) {
          grupoEArray.push(atletas[qtdJogadores - 1]);
          grupoE.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 2) {
          grupoDArray.push(atletas[qtdJogadores - 2]);
          grupoD.value += atletas[qtdJogadores - 2] + "\n";
          grupoEArray.push(atletas[qtdJogadores - 1]);
          grupoE.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 3) {
          grupoCArray.push(atletas[qtdJogadores - 3]);
          grupoC.value += atletas[qtdJogadores - 3] + "\n";
          grupoDArray.push(atletas[qtdJogadores - 2]);
          grupoD.value += atletas[qtdJogadores - 2] + "\n";
          grupoEArray.push(atletas[qtdJogadores - 1]);
          grupoE.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 4) {
          grupoBArray.push(atletas[qtdJogadores - 4]);
          grupoB.value += atletas[qtdJogadores - 4] + "\n";
          grupoCArray.push(atletas[qtdJogadores - 3]);
          grupoC.value += atletas[qtdJogadores - 3] + "\n";
          grupoDArray.push(atletas[qtdJogadores - 2]);
          grupoD.value += atletas[qtdJogadores - 2] + "\n";
          grupoEArray.push(atletas[qtdJogadores - 1]);
          grupoE.value += atletas[qtdJogadores - 1] + "\n";
        }
        console.log(grupoAArray, grupoBArray, grupoCArray, grupoDArray, grupoEArray)
      }
      if (qtdGrupos == 6) {
        for (let i = 0; i < (qtdJogadores - sobra); i += 6) {
          this.mostraGrupoF();
          grupoAArray.push(atletas[i]);
          grupoA.value += atletas[i] + "\n";
          grupoBArray.push(atletas[i + 1]);
          grupoB.value += atletas[i + 1] + "\n";
          grupoCArray.push(atletas[i + 2]);
          grupoC.value += atletas[i + 2] + "\n";
          grupoDArray.push(atletas[i + 3])
          grupoD.value += atletas[i + 3] + "\n";
          grupoEArray.push(atletas[i + 4])
          grupoE.value += atletas[i + 4] + "\n";
          grupoFArray.push(atletas[i + 5])
          grupoF.value += atletas[i + 5] + "\n";
        }
        if (sobra == 1) {
          grupoFArray.push(atletas[qtdJogadores - 1])
          grupoF.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 2) {
          grupoEArray.push(atletas[qtdJogadores - 2])
          grupoE.value += atletas[qtdJogadores - 2] + "\n";
          grupoFArray.push(atletas[qtdJogadores - 1])
          grupoF.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 3) {
          grupoDArray.push(atletas[qtdJogadores - 3])
          grupoD.value += atletas[qtdJogadores - 3] + "\n";
          grupoEArray.push(atletas[qtdJogadores - 2])
          grupoE.value += atletas[qtdJogadores - 2] + "\n";
          grupoFArray.push(atletas[qtdJogadores - 1])
          grupoF.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 4) {
          grupoCArray.push(atletas[qtdJogadores - 4])
          grupoC.value += atletas[qtdJogadores - 4] + "\n";
          grupoDArray.push(atletas[qtdJogadores - 3])
          grupoD.value += atletas[qtdJogadores - 3] + "\n";
          grupoEArray.push(atletas[qtdJogadores - 2])
          grupoE.value += atletas[qtdJogadores - 2] + "\n";
          grupoFArray.push(atletas[qtdJogadores - 1])
          grupoF.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 5) {
          grupoBArray.push(atletas[qtdJogadores - 5])
          grupoB.value += atletas[qtdJogadores - 5] + "\n";
          grupoCArray.push(atletas[qtdJogadores - 4])
          grupoC.value += atletas[qtdJogadores - 4] + "\n";
          grupoDArray.push(atletas[qtdJogadores - 3])
          grupoD.value += atletas[qtdJogadores - 3] + "\n";
          grupoEArray.push(atletas[qtdJogadores - 2])
          grupoE.value += atletas[qtdJogadores - 2] + "\n";
          grupoFArray.push(atletas[qtdJogadores - 1])
          grupoF.value += atletas[qtdJogadores - 1] + "\n";
        }
        console.log(grupoAArray, grupoBArray, grupoCArray, grupoDArray, grupoEArray, grupoFArray)
      }
      if (qtdGrupos == 7) {
        for (let i = 0; i < (qtdJogadores - sobra); i += 7) {
          this.mostraGrupoG();
          grupoAArray.push(atletas[i]);
          grupoA.value += atletas[i] + "\n";
          grupoBArray.push(atletas[i + 1]);
          grupoB.value += atletas[i + 1] + "\n";
          grupoCArray.push(atletas[i + 2]);
          grupoC.value += atletas[i + 2] + "\n";
          grupoDArray.push(atletas[i + 3])
          grupoD.value += atletas[i + 3] + "\n";
          grupoEArray.push(atletas[i + 4])
          grupoE.value += atletas[i + 4] + "\n";
          grupoFArray.push(atletas[i + 5])
          grupoF.value += atletas[i + 5] + "\n";
          grupoGArray.push(atletas[i + 6])
          grupoG.value += atletas[i + 6] + "\n";
        }
        if (sobra == 1) {
          grupoGArray.push(atletas[qtdJogadores - 1])
          grupoG.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 2) {
          grupoFArray.push(atletas[qtdJogadores - 2])
          grupoF.value += atletas[qtdJogadores - 2] + "\n";
          grupoGArray.push(atletas[qtdJogadores - 1])
          grupoG.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 3) {
          grupoEArray.push(atletas[qtdJogadores - 3])
          grupoE.value += atletas[qtdJogadores - 3] + "\n";
          grupoFArray.push(atletas[qtdJogadores - 2])
          grupoF.value += atletas[qtdJogadores - 2] + "\n";
          grupoGArray.push(atletas[qtdJogadores - 1])
          grupoG.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 4) {
          grupoDArray.push(atletas[qtdJogadores - 4])
          grupoD.value += atletas[qtdJogadores - 4] + "\n";
          grupoEArray.push(atletas[qtdJogadores - 3])
          grupoE.value += atletas[qtdJogadores - 3] + "\n";
          grupoFArray.push(atletas[qtdJogadores - 2])
          grupoF.value += atletas[qtdJogadores - 2] + "\n";
          grupoGArray.push(atletas[qtdJogadores - 1])
          grupoG.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 5) {
          grupoCArray.push(atletas[qtdJogadores - 5])
          grupoC.value += atletas[qtdJogadores - 5] + "\n";
          grupoDArray.push(atletas[qtdJogadores - 4])
          grupoD.value += atletas[qtdJogadores - 4] + "\n";
          grupoEArray.push(atletas[qtdJogadores - 3])
          grupoE.value += atletas[qtdJogadores - 3] + "\n";
          grupoFArray.push(atletas[qtdJogadores - 2])
          grupoF.value += atletas[qtdJogadores - 2] + "\n";
          grupoGArray.push(atletas[qtdJogadores - 1])
          grupoG.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 6) {
          grupoBArray.push(atletas[qtdJogadores - 6])
          grupoB.value += atletas[qtdJogadores - 6] + "\n";
          grupoCArray.push(atletas[qtdJogadores - 5])
          grupoC.value += atletas[qtdJogadores - 5] + "\n";
          grupoDArray.push(atletas[qtdJogadores - 4])
          grupoD.value += atletas[qtdJogadores - 4] + "\n";
          grupoEArray.push(atletas[qtdJogadores - 3])
          grupoE.value += atletas[qtdJogadores - 3] + "\n";
          grupoFArray.push(atletas[qtdJogadores - 2])
          grupoF.value += atletas[qtdJogadores - 2] + "\n";
          grupoGArray.push(atletas[qtdJogadores - 1])
          grupoG.value += atletas[qtdJogadores - 1] + "\n";
        }
        console.log(grupoAArray, grupoBArray, grupoCArray, grupoDArray, grupoEArray, grupoFArray, grupoGArray)
      }
      if (qtdGrupos == 8) {
        for (let i = 0; i < (qtdJogadores - sobra); i += 8) {
          this.mostraGrupoH();
          grupoAArray.push(atletas[i]);
          grupoA.value += atletas[i] + "\n";
          grupoBArray.push(atletas[i + 1]);
          grupoB.value += atletas[i + 1] + "\n";
          grupoCArray.push(atletas[i + 2]);
          grupoC.value += atletas[i + 2] + "\n";
          grupoDArray.push(atletas[i + 3])
          grupoD.value += atletas[i + 3] + "\n";
          grupoEArray.push(atletas[i + 4])
          grupoE.value += atletas[i + 4] + "\n";
          grupoFArray.push(atletas[i + 5])
          grupoF.value += atletas[i + 5] + "\n";
          grupoGArray.push(atletas[i + 6])
          grupoG.value += atletas[i + 6] + "\n";
          grupoHArray.push(atletas[i + 7])
          grupoH.value += atletas[i + 7] + "\n";
        }
        if (sobra == 1) {
          grupoHArray.push(atletas[qtdJogadores - 1])
          grupoH.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 2) {
          grupoGArray.push(atletas[qtdJogadores - 2])
          grupoG.value += atletas[qtdJogadores - 2] + "\n";
          grupoHArray.push(atletas[qtdJogadores - 1])
          grupoH.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 3) {
          grupoFArray.push(atletas[qtdJogadores - 3])
          grupoF.value += atletas[qtdJogadores - 3] + "\n";
          grupoGArray.push(atletas[qtdJogadores - 2])
          grupoG.value += atletas[qtdJogadores - 2] + "\n";
          grupoHArray.push(atletas[qtdJogadores - 1])
          grupoH.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 4) {
          grupoEArray.push(atletas[qtdJogadores - 4])
          grupoE.value += atletas[qtdJogadores - 4] + "\n";
          grupoFArray.push(atletas[qtdJogadores - 3])
          grupoF.value += atletas[qtdJogadores - 3] + "\n";
          grupoGArray.push(atletas[qtdJogadores - 2])
          grupoG.value += atletas[qtdJogadores - 2] + "\n";
          grupoHArray.push(atletas[qtdJogadores - 1])
          grupoH.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 5) {
          grupoDArray.push(atletas[qtdJogadores - 5])
          grupoD.value += atletas[qtdJogadores - 5] + "\n";
          grupoEArray.push(atletas[qtdJogadores - 4])
          grupoE.value += atletas[qtdJogadores - 4] + "\n";
          grupoFArray.push(atletas[qtdJogadores - 3])
          grupoF.value += atletas[qtdJogadores - 3] + "\n";
          grupoGArray.push(atletas[qtdJogadores - 2])
          grupoG.value += atletas[qtdJogadores - 2] + "\n";
          grupoHArray.push(atletas[qtdJogadores - 1])
          grupoH.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 6) {
          grupoCArray.push(atletas[qtdJogadores - 6])
          grupoC.value += atletas[qtdJogadores - 6] + "\n";
          grupoDArray.push(atletas[qtdJogadores - 5])
          grupoD.value += atletas[qtdJogadores - 5] + "\n";
          grupoEArray.push(atletas[qtdJogadores - 4])
          grupoE.value += atletas[qtdJogadores - 4] + "\n";
          grupoFArray.push(atletas[qtdJogadores - 3])
          grupoF.value += atletas[qtdJogadores - 3] + "\n";
          grupoGArray.push(atletas[qtdJogadores - 2])
          grupoG.value += atletas[qtdJogadores - 2] + "\n";
          grupoHArray.push(atletas[qtdJogadores - 1])
          grupoH.value += atletas[qtdJogadores - 1] + "\n";
        }
        if (sobra == 7) {
          grupoBArray.push(atletas[qtdJogadores - 7])
          grupoB.value += atletas[qtdJogadores - 7] + "\n";
          grupoCArray.push(atletas[qtdJogadores - 6])
          grupoC.value += atletas[qtdJogadores - 6] + "\n";
          grupoDArray.push(atletas[qtdJogadores - 5])
          grupoD.value += atletas[qtdJogadores - 5] + "\n";
          grupoEArray.push(atletas[qtdJogadores - 4])
          grupoE.value += atletas[qtdJogadores - 4] + "\n";
          grupoFArray.push(atletas[qtdJogadores - 3])
          grupoF.value += atletas[qtdJogadores - 3] + "\n";
          grupoGArray.push(atletas[qtdJogadores - 2])
          grupoG.value += atletas[qtdJogadores - 2] + "\n";
          grupoHArray.push(atletas[qtdJogadores - 1])
          grupoH.value += atletas[qtdJogadores - 1] + "\n";
        }
        console.log(grupoAArray, grupoBArray, grupoCArray, grupoDArray, grupoEArray, grupoFArray, grupoGArray, grupoHArray)
      }

    }

  }
})
</script>