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
var submitButton = document.querySelector('.enviar');
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
        localStorage.setItem("uso_de_remedios", JSON.stringify(valorSelecionado));
        localStorage.setItem("tipo_de_remedios", JSON.stringify(listaDeValores));
        window.location.href = "./pagina4.html";
    }
    radioButtons.forEach(function (radio) {
        radio.onchange = function () {
            submitButton.disabled = false;
        };
    });
}
/////////////////
// validação da pagina 4//
/////////////////
var botoescheck = Array.prototype.slice.call(document.querySelectorAll('.form input[type="checkbox"]'));
function pag4() {
    var check = botoescheck.some(function (checkButton) { return checkButton.checked; });
    var valorSelecionadochecks = select.value;
    var checkButtons = Array.prototype.slice.call(document.querySelectorAll('input[type="check"]'));
    var listaDeValorescheck = [];
    inputs.forEach(function (inputs) {
        if (inputs.checked) {
            listaDeValorescheck.push(inputs.value);
        }
    });
    if (!check) {
        error.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>' + ' ' + "Por favor, marque pelos menos uma das opções acima!";
    }
    if (valorSelecionadochecks.length == 0) {
        error.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>' + ' ' + "Por favor, informe se você teve algum sintoma recentemente!";
    }
    if (!!check && valorSelecionadochecks.length != 0) {
        localStorage.setItem("Relato_de_sintomas", JSON.stringify(valorSelecionadochecks));
        localStorage.setItem("Sintomas", JSON.stringify(listaDeValorescheck));
        window.location.href = "./pagina5.html";
    }
    checkButtons.forEach(function (check) {
        check.onchange = function () {
            submitButton.disabled = false;
        };
    });
}
/////////////////
// validação da pagina 5//
/////////////////
function limite() {
    var _a;
    var sintomas = JSON.parse(localStorage.getItem('Relato_de_sintomas'));
    var sintomasDoPaciente = JSON.parse(localStorage.getItem("Sintomas"));
    var medicaçõesDoPaciente = JSON.parse(localStorage.getItem('tipo_de_remedios'));
    var usoDeMedicações = JSON.parse(localStorage.getItem('uso_de_remedios'));
    var txtArea = document.querySelector('.txt-area');
    var caracteres = txtArea ? txtArea.value : "";
    if (caracteres.length != 0) {
        localStorage.setItem("descrição", caracteres);
    }
    else if (!sintomas || !sintomasDoPaciente || !medicaçõesDoPaciente || !usoDeMedicações) {
        (_a = document.querySelector('#error-message')) === null || _a === void 0 ? void 0 : _a.remove;
        error.innerHTML = '<div id="localhost-error"><i class="fa-solid fa-circle-xmark"></i>Por favor,verifique se você respondeu</br> todas as perguntas!</div>';
    }
    else {
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
    }
}
function contarCaracteres(str) {
    var contador = str.length;
    var caracteresDigitados = document.querySelector('.caracteres');
    caracteresDigitados.innerHTML = 'Caracteres digitados: ' + contador + '/130';
    if (contador == 0) {
        caracteresDigitados.remove();
    }
}
/////////////////
// validação da pagina de login//
/////////////////
function validar() {
    var _a;
    var email = document.querySelector('.email').value;
    var nome = document.querySelector('.nome').value;
    var idade = Number(document.querySelector(".idade").value);
    if (!email || !nome || idade < 0 || idade > 120 || idade < 0 || !idade) {
        error.innerHTML = '<div id="error-message"><i class="fa-solid fa-circle-xmark"></i>Por favor,verifique os seus dados!</div>';
    }
    else {
        (_a = document.querySelector('#error-message')) === null || _a === void 0 ? void 0 : _a.remove;
        window.location.href = "./pagina3.html";
    }
}
function validarEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
