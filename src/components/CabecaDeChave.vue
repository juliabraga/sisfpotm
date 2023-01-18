<template>
    <div>
        <button id="btnCabecas" @click="ativar()">Cabeças de chave</button>
    <div>
        <span v-if="ativo">
            Escreva os cabeça de chave aqui<br>
            <textarea id="cabecas" style="height: 100px"></textarea><br>
        </span>
    </div>
    </div>
</template>

<script>
export default {
    name: 'CabecaDeChave',
    data(){
        return {
        ativo: false,
        arrayCabecas: "",
        }
    },
    methods: {
        ativar(){
            this.ativo = !this.ativo;
        },
        distribuirCabecas(){
            let nomesCabecas = document.getElementById("cabecas");
            let arrayCabecas = nomesCabecas.value.split("\n");
            return arrayCabecas;     
        }
    },
}
</script>

