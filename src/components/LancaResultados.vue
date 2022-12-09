<template>
<span>
<input v-model="Atleta1">
<input v-model="Atleta2">
<input v-model="Atleta3">
<input v-model="Atleta4">
<input v-model="Atleta5">
<p></p>
</span>

<div>
    <table>
    <tr>
        <th></th>
        <th>{{Atleta1}}</th>
        <th>{{Atleta2}}</th>
        <th>{{Atleta3}}</th>
        <th>{{Atleta4}}</th>
        <th>{{Atleta5}}</th>
        <th>Set (Pro-Contra)</th>
        <th>Pts (Pro-Contra)</th>
        <th>Class</th>
    </tr>
    <tr>
        <td>{{Atleta1}}</td>
        <td>----</td>
        <td>
            <!-- atleta 1 atleta 2 set 1 = j121 -->
            <input id="j121" type="number" class="pontos" min="0" >
            <input id="j122" type="number" class="pontos" min="0" >
            <input id="j123" type="number" class="pontos" min="0" >
        </td>
        <td>
            <input id="j131" type="number" class="pontos" min="0">
            <input id="j132" type="number" class="pontos" min="0">
            <input id="j133" type="number" class="pontos" min="0">
        </td>
        <td>
            <input id="j141" type="number" class="pontos" min="0">
            <input id="j142" type="number" class="pontos" min="0">
            <input id="j143" type="number" class="pontos" min="0">
        </td>
        <td>
            <input id="j151" type="number" class="pontos" min="0">
            <input id="j152" type="number" class="pontos" min="0">
            <input id="j153" type="number" class="pontos" min="0">
        </td>
        <td></td>
        <td></td>
        <td></td>    
    </tr>
    <tr>
        <td>{{Atleta2}}</td>
        <td><input id="j211" type="number" class="pontos" min="0">
            <input id="j212" type="number" class="pontos" min="0">
            <input id="j213" type="number" class="pontos" min="0"></td>
        <td>----</td>
        <td><input id="j231" type="number" class="pontos" min="0">
            <input id="j232" type="number" class="pontos" min="0">
            <input id="j233" type="number" class="pontos" min="0"></td>
        <td><input id="j241" type="number" class="pontos" min="0">
            <input id="j242" type="number" class="pontos" min="0">
            <input id="j243" type="number" class="pontos" min="0"></td>
        <td><input id="j251" type="number" class="pontos" min="0">
            <input id="j252" type="number" class="pontos" min="0">
            <input id="j253" type="number" class="pontos" min="0"></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>{{Atleta3}}</td>
        <td><input type="number" class="pontos" min="0">
            <input type="number" class="pontos" min="0">
            <input type="number" class="pontos" min="0"></td>
        <td><input type="number" class="pontos" min="0">
            <input type="number" class="pontos" min="0">
            <input type="number" class="pontos" min="0"></td>
        <td>----</td>
        <td><input type="number" class="pontos" min="0">
            <input type="number" class="pontos" min="0">
            <input type="number" class="pontos" min="0"></td>
        <td><input type="number" class="pontos" min="0">
            <input type="number" class="pontos" min="0">
            <input type="number" class="pontos" min="0"></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>{{Atleta4}}</td>
        <td><input type="number" class="pontos" min="0">
            <input type="number" class="pontos" min="0">
            <input type="number" class="pontos" min="0"></td>
        <td><input type="number" class="pontos" min="0">
            <input type="number" class="pontos" min="0">
            <input type="number" class="pontos" min="0"></td>
        <td><input type="number" class="pontos" min="0">
            <input type="number" class="pontos" min="0">
            <input type="number" class="pontos" min="0"></td>
        <td>----</td>
        <td><input type="number" class="pontos" min="0">
            <input type="number" class="pontos" min="0">
            <input type="number" class="pontos" min="0"></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>{{Atleta5}}</td>
        <td><input type="number" class="pontos" min="0">
            <input type="number" class="pontos" min="0">
            <input type="number" class="pontos" min="0"></td>
        <td><input type="number" class="pontos" min="0">
            <input type="number" class="pontos" min="0">
            <input type="number" class="pontos" min="0"></td>
        <td><input type="number" class="pontos" min="0">
            <input type="number" class="pontos" min="0">
            <input type="number" class="pontos" min="0"></td>
        <td><input type="number" class="pontos" min="0">
            <input type="number" class="pontos" min="0">
            <input type="number" class="pontos" min="0"></td>
        <td>----</td>
        <td>{{res}}</td>
        <td></td>
        <td></td>
    </tr>
    </table>
    <button id="btnset" @click="setProContra()">Calcular</button>
</div>
</template>
<script>
export default {
  name: 'LancaResultados',

data(){
    return{
        Atleta1:'Atleta 1',
        Atleta2:'Atleta 2',
        Atleta3:'Atleta 3',
        Atleta4:'Atleta 4',
        Atleta5:'Atleta 5',
    }
},
methods: {
    setProContra(x, y){
        let res = 0;
        res = x+y;
        return res;
    }
},
}
</script>

<style>
.pontos {
  width: 20px;
  margin: 0px;
  text-align:right;
}
input{
    margin: 10px;
}
table {
  border-collapse: collapse;
  border: 2px solid rgb(200,200,200);
  letter-spacing: 1px;
  font-size: 0.8rem;
}

td, th {
  border: 1px solid rgb(190,190,190);
  padding: 10px 20px;
}

th {
  background-color: rgb(235,235,235);
}

td {
  text-align: center;
}

tr:nth-child(even) td {
  background-color: rgb(250,250,250);
}

tr:nth-child(odd) td {
  background-color: rgb(245,245,245);
}

/* Hide arrows Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>
