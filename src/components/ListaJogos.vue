<template>
	<div>
		<div>
			Seleciona o grupo pra distribuir
			<select v-model="grupoDividir">
				<option disabled value="">Selecione</option>
				<option>A</option>
				<option>B</option>
				<option>C</option>
				<option>D</option>
				<option>E</option>
				<option>F</option>
				<option>G</option>
				<option>H</option>
			</select>
			<button id="btnDistribua" @click="distribua()">Distribua jogos</button>
			<ul class="listaCriada"></ul>
		</div>
	</div>
	<div>
		<br>
		Copie e cole na sua planilha:<br>
		<textarea id="resultado" style="width: 70%;height: 200px"></textarea>
	</div>
	<div>
		<button id="download" style="background: #A9A9A9">
			Download Excel
		</button>
	</div>
</template>

<script>
export default {
	name: 'ListaJogos',
	props: {

	},
	data() {
		return {
			grupos: '',
			qntGrupos: '',
			grupoDividir: '',
		}
	},
	methods: {
		distribuirGrupo(grupo) {
			const saida = document.querySelector('.listaCriada')
			saida.innerHTML = ''

			let qtd = Object.keys(grupo).length - 1;
			let resultado = document.getElementById("resultado");
			let result = "FASE" + "\t" + "GRUPO" + "\t" + "ATLETA 1" + "\t" + "SET" + "\t" + "x" + "\t" + "SET" + "\t" + "ATLETA 2" + "\n";
			let separador = "\t\t" + "x" + "\t\t";
			let grupoDiv = "G" + "\t" + this.grupoDividir + "\t"
			if (qtd == 2) {
				result += grupoDiv + grupo[0] + separador + grupo[1];
			}
			if (qtd == 3) {
				result += grupoDiv + grupo[0] + separador + grupo[2] + "\n";
				result += grupoDiv + grupo[1] + separador + grupo[2] + "\n";
				result += grupoDiv + grupo[0] + separador + grupo[1];
			}
			if (qtd == 4) {
				result += grupoDiv + grupo[0] + separador + grupo[3] + "\n";
				result += grupoDiv + grupo[1] + separador + grupo[2] + "\n";
				result += grupoDiv + grupo[0] + separador + grupo[2] + "\n";
				result += grupoDiv + grupo[1] + separador + grupo[3] + "\n";
				result += grupoDiv + grupo[2] + separador + grupo[3] + "\n";
				result += grupoDiv + grupo[0] + separador + grupo[1];
			}
			if (qtd == 5) {
				result += grupoDiv + grupo[4] + separador + grupo[1] + "\n";
				result += grupoDiv + grupo[3] + separador + grupo[2] + "\n";
				result += grupoDiv + grupo[3] + separador + grupo[0] + "\n";
				result += grupoDiv + grupo[2] + separador + grupo[1] + "\n";
				result += grupoDiv + grupo[2] + separador + grupo[4] + "\n";
				result += grupoDiv + grupo[1] + separador + grupo[0] + "\n";
				result += grupoDiv + grupo[1] + separador + grupo[3] + "\n";
				result += grupoDiv + grupo[0] + separador + grupo[4] + "\n";
				result += grupoDiv + grupo[0] + separador + grupo[2] + "\n";
				result += grupoDiv + grupo[4] + separador + grupo[3];
			}
			resultado.value += result;
			let itens = resultado.value.split("\n")
			console.log(itens)
			// for (let i = 0; i < itens.length; i++) {
			// 	saida.innerHTML += `<li>${itens[i]}</li>`
			// }
		},

		distribua() {
			document.getElementById("resultado").value = "";
			let jogadoresNogrupo = document.getElementById(this.grupoDividir);
			if (this.grupoDividir != "Todos") {
				let linhas = jogadoresNogrupo.value.split("\n");
				let grupo = linhas.reduce(function (target, key, index) {
					target[index] = key;
					return target;
				}, {});
				this.distribuirGrupo(grupo);
			}
		}
	},
}

</script>
