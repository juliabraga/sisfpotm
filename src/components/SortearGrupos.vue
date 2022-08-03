<template>
    <div>
    <h1>
        Digite os jogadores da categoria
    </h1>
    <textarea id="nomesAtletas" style="width: 50%;height: 200px"></textarea>

    <div>
    <div>Quantos grupos?</div>
        <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        </select>
    </div>
<div>
    <button id="btnDistribua" @click="sorteio()">Sortear Grupos</button>
    </div>
	A<textarea id="grupoA" style="width: 50%;height: 100px"></textarea><br>
    <GruposDivididos />
    B<textarea id="grupoB" style="width: 50%;height: 100px"></textarea><br>
    C<textarea id="grupoC" style="width: 50%;height: 100px"></textarea><br>
    D<textarea id="grupoD" style="width: 50%;height: 100px"></textarea><br>
    </div>


</template>

<script>
import GruposDivididos from './GruposDivididos.vue'

export default ({
components: {
    GruposDivididos,
},
name: 'SortearGrupos',

data() {
    return {
        selected: '',
    
}
},

methods: {
    sorteio(){
    let grupoA = document.getElementById("grupoA");
    let grupoB = document.getElementById("grupoB");
    let grupoC = document.getElementById("grupoC");
    let grupoD = document.getElementById("grupoD");
    document.getElementById("grupoA").value = "";
    document.getElementById("grupoB").value = "";
    document.getElementById("grupoC").value = "";
    document.getElementById("grupoD").value = "";
    let nomesJogadores = document.getElementById("nomesAtletas");
	let linhas = nomesJogadores.value.split("\n");

    let qtdGrupos = this.selected;
    let qtdJogadores = linhas.length;

    //Criar um objeto com o nome dos jogadores
    /*     let jogadoresObj = linhas.reduce(function(target, key, index) {
    target[index] = key; 
    return target;}, {})*/

    if (qtdGrupos == 2){
      for (let i = 0; i < linhas.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [linhas[i], linhas[j]] = [linhas[j], linhas[i]];    }

    let jogadorNoGrupo = Math.round(qtdJogadores/2);

    for (let i=0; i<jogadorNoGrupo; i++){
    grupoA.value += linhas[i] + "\n";}
    
    for (let i=jogadorNoGrupo; i<qtdJogadores; i++){
    grupoB.value += linhas[i] + "\n";}
    }

    if (qtdGrupos == 3){
    for (let i = 0; i < linhas.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [linhas[i], linhas[j]] = [linhas[j], linhas[i]];    
    }
    let jogadorNoGrupo = Math.round(qtdJogadores/3);

    for (let i=0; i<jogadorNoGrupo; i++){
    grupoA.value += linhas[i] + "\n";}
    for (let i=jogadorNoGrupo; i<jogadorNoGrupo*2; i++){
    grupoB.value += linhas[i] + "\n";}
    for (let i=jogadorNoGrupo*2; i<qtdJogadores; i++){
    grupoC.value += linhas[i] + "\n";}
    }
    

    if (qtdGrupos == 4){
    for (let i = 0; i < linhas.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [linhas[i], linhas[j]] = [linhas[j], linhas[i]];    
    }
    let jogadorNoGrupo = Math.round(qtdJogadores/4);
    console.log(jogadorNoGrupo)
    for (let i=0; i<jogadorNoGrupo; i++){
    grupoA.value += linhas[i] + "\n";}
    for (let i=jogadorNoGrupo; i<jogadorNoGrupo*2; i++){
    grupoB.value += linhas[i] + "\n";}
    for (let i=jogadorNoGrupo*2; i<jogadorNoGrupo*3; i++){
    grupoC.value += linhas[i] + "\n";}
    for (let i=jogadorNoGrupo*3; i<qtdJogadores; i++){
    grupoD.value += linhas[i] + "\n";}
    
    }

    }
    
}
})
</script>
