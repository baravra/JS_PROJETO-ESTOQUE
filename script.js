// BOTOES
let btnCadastrar = document.getElementById("cadastar");
let btnSalvar = document.getElementById("salvar");
let btnProcurar = document.getElementById("procurar");

//INPUTS
let nome =  document.querySelectorAll('#inp input')[0];
let estoque =  document.querySelectorAll('#inp input')[1];
let preco =  document.querySelectorAll('#inp input')[2];

//OUTRAS VARIAVEIS
var final = [];
let i = 0;
var juntos = [];

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
    document.getElementById("table1").innerHTML += "<tr class='"+ id +"' id='"+ id +"'> <td align = 'center'><p onclick='return excluir("+ id +")'>EXCLUIR</p></td> <td align = 'center' id='nome'"+i+"> " + produto.nome + "</td> <td align = 'center' id='estoque'"+i+"> " + produto.estoque + "</td><td align = 'center' id='preco'"+i+"> " + produto.preco + "</td><td align = 'center'><p onclick='return editar("+ id +")'>EDITAR</p></td></tr>"
    juntos.push(produto);
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
    document.getElementById(id).innerHTML = "<tr class=' "+ id +"' id='"+ id +"'> <td align = 'center'><p onclick='return excluir("+ id +")'>EXCLUIR</p></td> <td align = 'center' id='nome'"+i+"> " + nome.value + "</td> <td align = 'center' id='estoque'"+i+"> " + estoque.value + "</td><td align = 'center' id='preco'"+i+"> " + preco.value + "</td><td align = 'center'><p onclick='return editar("+ id +")'>EDITAR</p></td></tr>"

    var index = id.replace("id","")
    index = (parseInt(index) - 1)

    juntos[index].nome = nome.value;
    juntos[index].estoque = estoque.value;
    juntos[index].preco = preco.value

    console.log(juntos)

}
//PROCURAR
btnProcurar.onclick = function(){ procurar(produto, estoque, preco) };

function procurar(nome, estoque, preco){

    var achar = {nome: nome.value , estoque: estoque.value , preco:preco.value}
    var achou = false;
    var id = -1;
    for(i = 0; i< juntos.length; i++){
        var row = juntos[i]
        if(row.nome == achar.nome && row.estoque == achar.estoque && row.preco == achar.preco){
            achou = true;
            id = i;
        }
    }

    if(achou == true){
        var linha = "id" + (id + 1)
        document.getElementById(linha).innerHTML += "<style>." +linha +"{ background: black; color: white; text-align: center } </style>"
    }else{
        alert("Produto não encontrado!")
    }



}
