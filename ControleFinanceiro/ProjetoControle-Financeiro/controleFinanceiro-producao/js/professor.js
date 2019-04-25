
var titulo = document.querySelector(".titulo");
titulo.textContent = "Banco de Gringotts";




// var registro = 0;
// while (registro < receitas.length){

//     var receita = receitas[registro];
//     var tdValor = receita.querySelector(".info-valor");
//     var tdSaldo = receita.querySelector(".info-saldo");

//     var valor =  parseFloat(tdValor.textContent)
//     saldo += valor;
//     tdSaldo.textContent = `R$ ${saldo.toFixed(2)}`;    

//     if (saldo < 0) {
//         tdSaldo.style.color = "red";
//     }

//     registro++;
// }
var saldo = 0.0;
var receitas = document.querySelectorAll('.receita');

	for (let registro = 0; registro < receitas.length; registro++) {
		
		var receita = receitas[registro];
		var tdValor = receita.querySelector(".info-valor");
		var tdSaldo = receita.querySelector(".info-saldo");

		var valor = parseFloat(tdValor.textContent)
		saldo += valor;
		tdSaldo.textContent = `R$ ${saldo.toFixed(2)}`;

		if (saldo < 0) {
			tdSaldo.classList.add('receita-negativa');
		}

	}


var botao = document.querySelector("#adicionar-receita");
botao.addEventListener("click", function (evento) {
	evento.preventDefault();
	var form = document.formulario;
	var descricao = form.descricao.value;
	var categoria = form.categoria.value;
	var data = form.data.value;
	var valor = parseFloat(form.valor.value);
	var msgErros = document.querySelector(".erros");
	var erros = [];




	if (descricao.length <= 0) {
		erros.push("A descrição é obrigatória.");
	}

	if (categoria.length <= 0) {
		erros.push("A categoria é obrigatória.");
	}

	if (data.length <= 0) {
		erros.push("A data é obrigatória.");
	}

	if (isNaN(valor)) {
		erros.push("O valor é obrigatório.");
	} else {
		if (valor == 0) {
			erros.push("O valor deve ser diferente de zero (0).");
		}
	}

	if (erros.length > 0) {
		limparErros(msgErros);
		// for (let erro = 0; erro < erros.length; erro++) {
			erros.forEach(function(erro) {
				var li = document.createElement('li');
				li.textContent = erro;
				msgErros.appendChild(li);
		})
		return;
	}
	var tabela = document.querySelector('#tabela-receitas');
	var tr = document.createElement('tr');
	
	var tdDescricao = document.createElement('td');
	var tdCategoria = document.createElement('td');
	var tdData = document.createElement('td');
	var tdValor = document.createElement('td');
	var tdSaldo = document.createElement('td');
	
	tdDescricao.textContent = descricao;
	tdDescricao.classList.add('info-descricao')
	tr.appendChild(tdDescricao);

	tdCategoria.textContent = categoria;
	tdCategoria.classList.add('info-categoria')
	tr.appendChild(tdCategoria);

	tdData.textContent = data;
	tdData.classList.add('info-data')
	tr.appendChild(tdData);

	tdValor.textContent = valor;
	tdValor.classList.add('info-valor')
	tr.appendChild(tdValor)

	var receitas = document.querySelectorAll('.receita');
	var saldoAnterior = parseFloat(receitas[receitas.length - 1].querySelector('.info-saldo').textContent)
	var saldo = saldoAnterior + valor;
	tdSaldo.textContent = parseFloat(saldo);
	tdSaldo.classList.add('info-saldo');
	tr.appendChild(tdSaldo);
	if (saldo < 0){
		tdSaldo.classList.add('receita-negativa');
	}
	tr.classList.add('receita');
	tabela.appendChild(tr);
	

	formulario.reset();

});

function limparErros(erros) {
	erros.innerHTML = "";
}







