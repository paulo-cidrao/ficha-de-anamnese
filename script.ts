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
const inputs = Array.prototype.slice.call(lista.getElementsByTagName("input"))! as HTMLInputElement[]


function pag3(){
    let check = radioButtons.some((radioButton: any) => (radioButton as any as HTMLInputElement).checked);
    let valorSelecionado = select.value;
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
/////////////////
// validação da pagina 4//
/////////////////
const botoescheck = Array.prototype.slice.call(document.querySelectorAll('.form input[type="checkbox"]'));

function pag4(){
    let check = botoescheck.some((checkButton: { checked: any; }) => checkButton.checked);
    let valorSelecionadochecks = (select as HTMLSelectElement).value;
    let listaDeValorescheck:any[] = []

    inputs.forEach((inputs) => {
        if(inputs.checked){
            listaDeValorescheck.push(inputs.value);
        }
    });

    console.log( listaDeValorescheck)
    console.log(valorSelecionadochecks)

    if(!check){
        error.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>' + ' ' + "Por favor, marque pelos menos uma das opções acima!";
    }
    if(valorSelecionadochecks.length == 0){
        error.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>' + ' ' + "Por favor, informe se você teve algum sintoma recentemente!";
    }
    if(!!check && valorSelecionadochecks.length !=0){
        console.log("deu certo")
        localStorage.setItem("Relato_de_sintomas",valorSelecionadochecks);
        localStorage.setItem("Sintomas", JSON.stringify(listaDeValorescheck));
        window.location.href = "./pagina5.html";
    }
}
/////////////////
// validação da pagina 5//
/////////////////
function limite(){
    let txtArea = document.querySelector('.txt-area') as HTMLInputElement;
    let caracteres:string = txtArea ? txtArea.value:"";
    
    if(caracteres.length !=0){
        localStorage.setItem("descrição", caracteres)
    }
    window.location.href="./telaLogin.html"
}
function contarCaracteres(str:string){
    let contador = str.length
    const caracteresDigitados = document.querySelector('.caracteres')  as HTMLElement;
    caracteresDigitados.innerHTML = 'Caracteres digitados: ' + contador + '/130';
    if(contador == 0){
        caracteresDigitados.remove();
    }
}