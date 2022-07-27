var nome
var lista
var listaItem
var texto
var saida
var seExiste
var produtos = Array()
produtos["carnes"] = Array()
produtos["frutas"] = Array()
produtos["verduras"] = Array()
produtos["graos"] = Array()

function add() {

    nome = document.getElementById("nome").value;
    var form = document.getElementById("formulario");
    // produtos["carnes"].push(nome);
    if (document.getElementById("categorias").value == "selecione") {
        alert("Selecione uma categoria para o cadastro")
        return
    }
    if (nome == "") {
        alert("digite o nome do produto")
        return
    }
    if (document.getElementById("categorias").value == "carnes") {
        produtos["carnes"].push(nome)

    } else if (document.getElementById("categorias").value == "frutas") {
        produtos["frutas"].push(nome)
    } else if (document.getElementById("categorias").value == "verduras") {
        produtos["verduras"].push(nome)
    } else if (document.getElementById("categorias").value == "graos") {
        produtos["graos"].push(nome)
    }

    form.reset();

    exibir_carnes()
    exibir_frutas()
    exibir_Verduras()
    exibir_graos()

    console.log(produtos);
}

function exibir_carnes() {

    lista = document.createElement("ol");

    produtos["carnes"].forEach(function (item) {
        listaItem = document.createElement("li")
        texto = document.createTextNode(item)
        listaItem.append(texto);
        lista.append(listaItem);
    });

    saida = document.getElementById("carne_list");
    saida.innerHTML = "";
    saida.append(lista);
}


function exibir_frutas() {
    lista = document.createElement("ol");
    produtos["frutas"].forEach(function (item) {
        listaItem = document.createElement("li")
        texto = document.createTextNode(item)
        listaItem.append(texto);
        lista.append(listaItem);

    });
    saida = document.getElementById("frutas_list");
    saida.innerHTML = "";
    saida.append(lista);
}


function exibir_Verduras() {
    lista = document.createElement("ol");
    produtos["verduras"].forEach(function (item) {
        listaItem = document.createElement("li")
        texto = document.createTextNode(item)
        listaItem.append(texto);
        lista.append(listaItem);

    });
    saida = document.getElementById("verduras_list");
    saida.innerHTML = "";
    saida.append(lista);
}


function exibir_graos() {
    lista = document.createElement("ol");
    produtos["graos"].forEach(function (item) {
        listaItem = document.createElement("li")
        texto = document.createTextNode(item)
        listaItem.append(texto);
        lista.append(listaItem);

    });
    saida = document.getElementById("graos_list");
    saida.innerHTML = "";
    saida.append(lista);
}