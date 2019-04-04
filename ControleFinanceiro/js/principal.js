// var titulo = document.querySelector(".titulo");
// console.log(titulo.textContent = "Controle Finandisney");

// var receita = document.querySelector('#primeira-receita');
// var valor = receita.querySelector(".info-valor");
// var saldo = receita.querySelector(".info-saldo");
// saldo.textContent = valor.textContent;
// -------------
let tdSaldo= 0
let aux = 0
function percorre(item,index){
    
}

let saldos = document.querySelectorAll(".info-saldo");
saldos = Array.from(saldos)


let valores = document.querySelectorAll(".info-valor");
valores = Array.from(valores)


for(let i = 0; i <valores.length; i++){
    aux += parseFloat(valores[i].textContent);
    console.log(saldos[i].innerHTML = aux.toFixed(2));
    tdSaldo = parseFloat(saldos[i].innerHTML);
    if (tdSaldo < 0){
        saldos[i].style.color = "rgb(80,0,0)";
        //saldos[i].style.backgroundColor = "rgb(80,0,0)";
    }else{
        saldos[i].style.color = "rgb(0,80,0)";
      //  saldos[i].style.backgroundColor = "rgb(0,80,0)";
    }

}
let btn = document.querySelector("#adicionar-receita");


btn.addEventListener("click",function(e){
    let errod = document.querySelector(".errosDescricao");
    let erroc = document.querySelector(".errosCategoria");
    let erroda = document.querySelector(".errosData");
    let errov = document.querySelector(".errosValor");

    let descricao = document.querySelector("#descricao").value;
    let categoria = document.querySelector("#categoria").value;
    let data = document.querySelector("#data").value;
    let valor = document.querySelector('#valor').value;

    e.preventDefault()
    if(descricao.length < 3){
        errod.innerHTML = "<p style='color:red'><sup>*</sup>Digite mais do que 3 letras"
    }else{
        errod.innerHTML = ''
    }
    categoria  = categoria.toUpperCase()
    if (categoria == 'DÉBITO' || categoria == 'CRÉDITO'){
        erroc.textContent = ''
    }else{
        erroc.innerHTML ="<p style='color:red'><sup>*</sup>Digite Crédito ou Débito</p>"; 
    }
    datas = data.split('-')
    console.log(datas[1])
})




// console.log(receita);
// console.log(saldo);
