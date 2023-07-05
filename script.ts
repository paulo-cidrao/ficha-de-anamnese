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
const submitButton = document.querySelector('.enviar') as HTMLButtonElement;
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
       localStorage.setItem("uso_de_remedios",JSON.stringify(valorSelecionado));
       localStorage.setItem("tipo_de_remedios",JSON.stringify(listaDeValores));
       window.location.href="./pagina4.html";
    }
    radioButtons.forEach((radio: HTMLInputElement)  =>{
        radio.onchange = () => {
            submitButton.disabled = false;
        }
    })

}
/////////////////
// validação da pagina 4//
/////////////////
const botoescheck = Array.prototype.slice.call(document.querySelectorAll('.form input[type="checkbox"]'));

function pag4(){
    let check = botoescheck.some((checkButton: { checked: any; }) => checkButton.checked);
    let valorSelecionadochecks = (select as HTMLSelectElement).value;
    const checkButtons = Array.prototype.slice.call(document.querySelectorAll('input[type="check"]')) as HTMLInputElement[];
    let listaDeValorescheck:any[] = []

    inputs.forEach((inputs) => {
        if(inputs.checked){
            listaDeValorescheck.push(inputs.value);
        }
    });


    if(!check){
        error.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>' + ' ' + "Por favor, marque pelos menos uma das opções acima!";
    }
    if(valorSelecionadochecks.length == 0){
        error.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>' + ' ' + "Por favor, informe se você teve algum sintoma recentemente!";
    }
    if(!!check && valorSelecionadochecks.length !=0){
        localStorage.setItem("Relato_de_sintomas",JSON.stringify(valorSelecionadochecks));
        localStorage.setItem("Sintomas", JSON.stringify(listaDeValorescheck));
        window.location.href = "./pagina5.html";
    }

    checkButtons.forEach(check => {
        check.onchange = () => {
          submitButton.disabled = false;
          
        }
      })

}
/////////////////
// validação da pagina 5//
/////////////////
function limite(){
    const sintomas = JSON.parse(localStorage.getItem('Relato_de_sintomas')!);
    const sintomasDoPaciente = JSON.parse(localStorage.getItem("Sintomas")!);
    const medicaçõesDoPaciente = JSON.parse(localStorage.getItem('tipo_de_remedios')!);
    const usoDeMedicações = JSON.parse(localStorage.getItem('uso_de_remedios')!);
    let txtArea = document.querySelector('.txt-area') as HTMLInputElement;
    let caracteres:string = txtArea ? txtArea.value:"";
    
    if(caracteres.length !=0){
        localStorage.setItem("descrição", caracteres)
    }else if(!sintomas|| !sintomasDoPaciente || !medicaçõesDoPaciente || !usoDeMedicações){
        document.querySelector('#error-message')?.remove;
        error.innerHTML = '<div id="localhost-error"><i class="fa-solid fa-circle-xmark"></i>Por favor,verifique se você respondeu</br> todas as perguntas!</div>'
    }else{
        const modal = document.getElementById("myModal")!;
        modal.style.display = "block";
    }
    
  
}
function contarCaracteres(str:string){
    let contador = str.length
    const caracteresDigitados = document.querySelector('.caracteres')  as HTMLElement;
    caracteresDigitados.innerHTML = 'Caracteres digitados: ' + contador + '/130';
    if(contador == 0){
        caracteresDigitados.remove();
    }
}
/////////////////
// validação da pagina de login//
/////////////////
function validar(){
    const email = (document.querySelector('.email') as HTMLInputElement).value;
    const nome = (document.querySelector('.nome') as HTMLInputElement).value;
    const idade = Number((document.querySelector(".idade") as HTMLInputElement).value);

    if(!email || !nome || idade<0 || idade> 120 || idade < 0 || !idade ){
        error.innerHTML = '<div id="error-message"><i class="fa-solid fa-circle-xmark"></i>Por favor,verifique os seus dados!</div>'
    }
    else{
        String(idade)
        localStorage.setItem("email",email);
        localStorage.setItem("nome",nome);
        localStorage.setItem("idade",idade.toString())
        document.querySelector('#error-message')?.remove;
            window.location.href = "./pagina3.html" 
    }
}
function validarEmail(email:string):boolean {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}
