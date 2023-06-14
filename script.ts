function hover(event: any) {
    event.target.innerText = "Siga em frente!";
};

function out(event: any) {
    event.target.innerText = "Vamos lá!"
}

function hover3(event: any) {
    event.target.innerText = "Ir para proxima";
};

function out3(event: any) {
    event.target.innerText = "Pular"
}
/////////////////
// validação da pagina 3//
/////////////////
const form =document.querySelector('.form');
const radioButtons =Array.prototype.slice.call(document.querySelectorAll('.form input[type="radio"]'));
const enivar = document.querySelector('.enviar');
const error = document.querySelector('.valid')!;

function pag3(){
    const check = radioButtons.some((radioButton: any) => (radioButton as any as HTMLInputElement).checked);

    if(!check){
    error.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>' + ' ' + "Por favor marque uma das opções acima!";
    }else{
        window.location.href="./pagina4.html"
    }

}