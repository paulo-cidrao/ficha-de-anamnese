function hover(event: any) {
    event.target.innerText = "Siga em frente!";
};

function out(event: any) {
    event.target.innerText = "Vamos lá!"
}

function hoverpgs(event: any) {
    event.target.innerText = "Ir para proxima";
};

function outpgs(event: any) {
    event.target.innerText = "Pular"
}
/////////////////
// validação da pagina 3//
/////////////////
const form =document.querySelector('.form');
const radioButtons =Array.prototype.slice.call(document.querySelectorAll('.form input[type="radio"]'));
const error = document.querySelector('.valid')!;
const select = document.querySelector('.select') as HTMLSelectElement;
const lista = document.querySelector(".inputs") as HTMLDListElement;
const inputs = Array.prototype.slice.call(lista.getElementsByTagName("input")) as HTMLInputElement[]


function pag3(){
    const check = radioButtons.some((radioButton: any) => (radioButton as any as HTMLInputElement).checked);
    const valorSelecionado = select.value;
    let listaDeValores:string = ""
    inputs.forEach((input) => {
        if (input.checked) {
          listaDeValores = input.value;
        }
      });
    console.log( listaDeValores)
    console.log(valorSelecionado)
    
    if(!check){
        error.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>' + ' ' + "Por favor marque uma das opções acima!";
    }if(valorSelecionado == ""){
        error.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>' + ' ' + "Por favor nos informe sobre o uso de medicações";
    }
    if(!!check && valorSelecionado.length != 0 ){
       localStorage.setItem("uso_de_remedios",valorSelecionado);
       localStorage.setItem("tipo_de_remedios",listaDeValores);
       window.location.href="./pagina4.html";
    }

}