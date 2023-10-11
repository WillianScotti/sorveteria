btn.addEventListener("click",function(){

    var nomeCliente = nome.value;
    var quantiaSorvetes = quantidade.value;
    var sabores = sabores.value
    
   
    pedidoNome.innerHTML = "Nome: " + nomeCliente;
    pedidoQuantia.innerHTML = "Quantia: " + quantiaSorvetes
    pedidoSabor.innerHTML = "Sabores: " + sabores;
 

    var btn = document.getElementById("btn");
var nome = document.getElementById("nome");
var quantidade = document.getElementById("Quantia");
var sabores = document.getElementById("Sabores"); 

var pedidoNome = document.getElementById("pedidoNome");
var pedidoQuantia = document.getElementById("pedidoQuantia");
var pedidoSabor = document.getElementById("pedidoSabor");
 
});S