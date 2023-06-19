function hover(event) {
    event.target.innerText = "Siga em frente!";
}
;
function out(event) {
    event.target.innerText = "Vamos lá!";
}
function hover3(event) {
    event.target.innerText = "Ir para proxima";
}
;
function out3(event) {
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
    if (!check || valorSelecionado == "") {
        error.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>' + ' ' + "Por favor marque uma das opções acima!";
    }
    else {
        localStorage.setItem("uso_de_remedios", valorSelecionado);
        localStorage.setItem("tipo_de_remedios", listaDeValores);
        window.location.href = "./pagina4.html";
    }
}
