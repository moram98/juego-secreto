let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemnto, texto){
    let elemntoHTML = document.querySelector(elemnto);
    elemntoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario =parseInt( document.getElementById('valorUsuario').value);

    console.log(intentos);

    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1)? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //EL usuario no acerto
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor')
        }
        intentos ++;
        limpiarCaja();
        
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function intentoDeUsuario() {
    alert('Click desde el botón');
    return;
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si ya sorteamos todos los numeros
    if(listaNumeroSorteado.length == numeroMaximo){
        asignarTextoElemento('p','ya se sortearon todos los numeros posibles')
    }else{
        //Si el numero generado esta incluido en la lista
        if(listaNumeroSorteado.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            //
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','el huego del numero secreto!');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}` );
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    //inicar mensaje de intervalo de números
    //Generar el numero aleatorio
    //Inicializar el numero intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
