function hover(event) {
    event.target.innerText = "Siga em frente!";
}
;
function out(event) {
    event.target.innerText = "Vamos lá!";
}
function hoverpgs(event) {
    event.target.innerText = "Ir para proxima";
}
;
function outpgs(event) {
    event.target.innerText = "Pular";
}
/////////////////
// validação da pagina 3//
/////////////////
var form = document.querySelector('.form');
var radioButtons = Array.prototype.slice.call(document.querySelectorAll('.form input[type="radio"]'));
var error = document.querySelector('.valid');
var select = document.querySelector('.select');
var lista = document.querySelector(".inputs");
var inputs = Array.prototype.slice.call(lista.getElementsByTagName("input"));
function pag3() {
    var check = radioButtons.some(function (radioButton) { return radioButton.checked; });
    var valorSelecionado = select.value;
    var listaDeValores = "";
    inputs.forEach(function (input) {
        if (input.checked) {
            listaDeValores = input.value;
        }
    });
    console.log(listaDeValores);
    console.log(valorSelecionado);
    if (!check) {
        error.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>' + ' ' + "Por favor marque uma das opções acima!";
    }
    if (valorSelecionado == "") {
        error.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>' + ' ' + "Por favor nos informe sobre o uso de medicações";
    }
    if (!!check && valorSelecionado.length != 0) {
        localStorage.setItem("uso_de_remedios", valorSelecionado);
        localStorage.setItem("tipo_de_remedios", listaDeValores);
        window.location.href = "./pagina4.html";
    }
}
/////////////////
// validação da pagina 4//
/////////////////
var botoescheck = Array.prototype.slice.call(document.querySelectorAll('.form input[type="checkbox"]'));
function pag4() {
    var check = botoescheck.some(function (checkButton) { return checkButton.checked; });
    var valorSelecionadochecks = select.value;
    var listaDeValorescheck = [];
    inputs.forEach(function (inputs) {
        if (inputs.checked) {
            listaDeValorescheck.push(inputs.value);
        }
    });
    console.log(listaDeValorescheck);
    console.log(valorSelecionadochecks);
    if (!check) {
        error.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>' + ' ' + "Por favor, marque pelos menos uma das opções acima!";
    }
    if (valorSelecionadochecks.length == 0) {
        error.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>' + ' ' + "Por favor, informe se você teve algum sintoma recentemente!";
    }
    if (!!check && valorSelecionadochecks.length != 0) {
        console.log("deu certo");
        localStorage.setItem("Relato_de_sintomas", valorSelecionadochecks);
        localStorage.setItem("Sintomas", JSON.stringify(listaDeValorescheck));
        window.location.href = "./pagina5.html";
    }
}
/////////////////
// validação da pagina 5//
/////////////////
function limite() {
    var txtArea = document.querySelector('.txt-area');
    var caracteres = txtArea ? txtArea.value : "";
    if (caracteres.length != 0) {
        localStorage.setItem("descrição", caracteres);
    }
    window.location.href = "./telaLogin.html";
}
function contarCaracteres(str) {
    var contador = str.length;
    var caracteresDigitados = document.querySelector('.caracteres');
    caracteresDigitados.innerHTML = 'Caracteres digitados: ' + contador + '/130';
    if (contador == 0) {
        caracteresDigitados.remove();
    }
}
