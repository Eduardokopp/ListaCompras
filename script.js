var nome
var lista
var listaItem
var texto
var saida
var seExiste
var produtos = Array()


//Função para ativar o botão de adicoinar ao clicar ENTER
document.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        var btn = document.getElementById("botao");
        btn.click();
    }
});
function add() {
    nome = document.getElementById("nome").value;
    var form = document.getElementById("formulario");
    let catSelecionada = document.getElementById("categorias").value

    if (catSelecionada == "selecione" || nome == "") {
        alert("Informe todos os dados")
        return
    }
    if (existe(catSelecionada, nome)) {
        alert("O item " + nome + " já existe na lista de " + catSelecionada)
    }
    else {
        switch (catSelecionada) {
            case "carnes":
                produtos["carnes"].push(nome)
                localStorage.setItem('carnes', JSON.stringify(produtos["carnes"]))
                break;
            case "frutas":
                produtos["frutas"].push(nome)
                localStorage.setItem('frutas', JSON.stringify(produtos["frutas"]))
                break;
            case "verduras":
                produtos["verduras"].push(nome)
                localStorage.setItem('verduras', JSON.stringify(produtos["verduras"]))
                break;
            case "graos":
                produtos["graos"].push(nome)
                localStorage.setItem('graos', JSON.stringify(produtos["graos"]))
                break;
                console.log(produtos)
        } //Fim do switch 
        form.reset()
        reload()
    }
}
function exibir_carnes() {
    lista = document.createElement("ol");
    produtos["carnes"].forEach(function (item) {
        listaItem = document.createElement("li")
        texto = document.createTextNode(item)
        listaItem.append(texto)
        lista.append(listaItem)
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
function Limpar(categoria) {
    switch (categoria) {
        case 1:
            localStorage.removeItem('carnes');
            break;
        case 2:
            localStorage.removeItem('frutas');
            break;
        case 3:
            localStorage.removeItem('verduras');
            break;
        case 4:
            localStorage.removeItem('graos');
            break;
    }
    reload()

}
function reload() {
    //Pegando os dados do LOCALSTORAGE
    produtos["carnes"] = JSON.parse(localStorage.getItem('carnes')) || []
    produtos["frutas"] = JSON.parse(localStorage.getItem('frutas')) || []
    produtos["verduras"] = JSON.parse(localStorage.getItem('verduras')) || []
    produtos["graos"] = JSON.parse(localStorage.getItem('graos')) || []

    //Exibindo cada um dos itens depois de recarregar o array
    exibir_carnes()
    exibir_frutas()
    exibir_Verduras()
    exibir_graos()
}
function existe(tipo, nome) {

    switch (tipo) {
        case 'carnes':
            // se já existir retorna verdadeiro
            return produtos["carnes"].includes(nome)
            break;
        case 'frutas':
            return produtos["frutas"].includes(nome)
            break;
        case 'verduras':
            return produtos["verduras"].includes(nome)
            break;
        case 'graos':
            return produtos["graos"].includes(nome)
            break;

    }

    //.indexOf(1)
    // includes('Matheus')


}