// BOTOES
let btnCadastrar = document.getElementById("cadastar");
let btnSalvar = document.getElementById("salvar");

//INPUTS
let nome =  document.querySelectorAll('#inp input')[0];
let estoque =  document.querySelectorAll('#inp input')[1];
let preco =  document.querySelectorAll('#inp input')[2];

//OUTRAS VARIAVEIS
var final = [];
let i = 0;

// CADASTRAR
btnCadastrar.onclick = function(){ cadastrar() };

function cadastrar() {
    var produto = new Object();
    i++;
    produto.nome = nome.value;
    produto.estoque = estoque.value;
    produto.preco = preco.value;
    final.push(produto);
    id = "id" + i;
    document.getElementById("vazio").style.display = "none"
    document.getElementById("table1").innerHTML += "<tr class=' "+ id +"' id='"+ id +"'> <td><p onclick='return excluir("+ id +")'>EXCLUIR</p></td> <td align = 'center' id='nome'"+i+"> " + produto.nome + "</td> <td align = 'center' id='estoque'"+i+"> " + produto.estoque + "</td><td align = 'center' id='preco'"+i+"> " + produto.preco + "</td><td><p onclick='return editar("+ id +")'>EDITAR</p></td></tr>"

}

// EXCLUIR
function excluir(elemento){
    var id = elemento.id
    document.getElementById(id).style.display = "none"
}

// EDITAR
function editar(elemento){
    document.getElementById("modalEditar").style.visibility = 'visible';
    document.getElementById("table1").style.visibility = 'hidden';

    let nome2 =  document.getElementById("produto2");
    let estoque2 =  document.getElementById("estoque2");
    let preco2 =  document.getElementById("preco2");

    btnSalvar.onclick = function(){ salvar(elemento, nome2, estoque2, preco2) };
  
}

function salvar(elemento, nome, estoque, preco){
    document.getElementById("modalEditar").style.visibility = 'hidden';
    document.getElementById("table1").style.visibility = 'visible';
    
    var id = elemento.id;
    document.getElementById(id).innerHTML = "<tr class=' "+ id +"' id='"+ id +"'> <td><p onclick='return excluir("+ id +")'>EXCLUIR</p></td> <td align = 'center' id='nome'"+i+"> " + nome.value + "</td> <td align = 'center' id='estoque'"+i+"> " + estoque.value + "</td><td align = 'center' id='preco'"+i+"> " + preco.value + "</td><td><p onclick='return editar("+ id +")'>EDITAR</p></td></tr>"
}
