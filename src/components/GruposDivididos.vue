<template>
    <div>
        <button @click="ativar">Clica</button>
        <span v-show="ativo">
            <textarea style="width: 50%;height: 100px"></textarea><br>
        </span>
    </div>
</template>

<script>


export default {
    name: 'GruposDivididos',
    data(){
        return {
        idGrupo: "A",
        ativo: false,
        }
    },
    methods: {
        ativar(){
            this.ativo = !this.ativo
        }
    },
}
</script>

