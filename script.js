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
var enivar = document.querySelector('.enviar');
var error = document.querySelector('.valid');
function pag3() {
    var check = radioButtons.some(function (radioButton) { return radioButton.checked; });
    if (!check) {
        error.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>' + ' ' + "Por favor marque uma das opções acima!";
    }
    else {
        window.location.href = "./pagina4.html";
    }
}
