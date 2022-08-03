<template>
    <div>
	<div>
		<div>Qual grupo você quer distribuir?</div>
			<select v-model="grupoDividir">
			<option disabled value="">Please select one</option>
			<option>grupoA</option>
			<option>grupoB</option>
			<option>grupoC</option>
			<option>grupoD</option>
			</select>
	</div>
    <button id="btnDistribua" @click="distribua()">Distribua jogos</button>
	</div>
	<div>
		<br>
		Copie e cole na sua planilha:<br>
		<textarea id="resultado" style="width: 50%;height: 200px"></textarea>
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
    distribuirGrupo(linhas) {
			var qtd = Object.keys(linhas).length;
			var resultado = document.getElementById("resultado");
			var result = "";
			var separador = "\t\t" + "x"+ "\t\t";
      if (qtd == 2) {
				result += linhas[0] + separador + linhas[1] + "\n";
			}
      if (qtd == 3) {
				result += linhas[0] + separador + linhas[2] + "\n";
				result += linhas[1] + separador + linhas[2] + "\n";
				result += linhas[0] + separador + linhas[1] + "\n";
			}
			if (qtd == 4) {
				result += linhas[0] + separador + linhas[3] + "\n";
				result += linhas[1] + separador + linhas[2] + "\n";
				result += linhas[0] + separador + linhas[2] + "\n";
				result += linhas[1] + separador + linhas[3] + "\n";
				result += linhas[2] + separador + linhas[3] + "\n";
				result += linhas[0] + separador + linhas[1] + "\n";
			}
			if (qtd == 5) {
				result += linhas[4] + separador + linhas[1] + "\n";
				result += linhas[3] + separador + linhas[2] + "\n";
				result += linhas[3] + separador + linhas[0] + "\n";
				result += linhas[2] + separador + linhas[1] + "\n";
				result += linhas[2] + separador + linhas[4] + "\n";
				result += linhas[1] + separador + linhas[0] + "\n";
				result += linhas[1] + separador + linhas[3] + "\n";
				result += linhas[0] + separador + linhas[4] + "\n";
				result += linhas[0] + separador + linhas[2] + "\n";
				result += linhas[4] + separador + linhas[3] + "\n";
			}
			resultado.value += result;
			
		},

    distribua() {
		document.getElementById("resultado").value = "";
		let nomesJogadores = document.getElementById(this.grupoDividir);
		let linhas = nomesJogadores.value.split("\n");
		let linhas2 = linhas.pop();
		console.log(linhas2)
           
      let grupo = linhas.reduce(function(target, key, index) {
      target[index] = key; 
      return target;}, {})
	
			this.distribuirGrupo(grupo);
		}
  },
}

</script>
