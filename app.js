
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 3;

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

console.log (numeroSecreto);

function verificarIntento () {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroSecreto === numeroUsuario){
        asignarTextoElemento ('p', `Acertaste el numero secreto en ${intentos} ${(intentos===1) ? `vez` : `veces`}`);   
        document.getElementById('reiniciar').removeAttribute ('disabled');
        document.querySelector ('#intentar').setAttribute ('disabled', 'true');
    } else
        if (numeroSecreto > numeroUsuario) {
            asignarTextoElemento ('p', 'El numero secreto es mayor');
        } else {
            asignarTextoElemento ('p', 'El numero secreto es menor');
        }
        intentos ++;
        limpiarCaja ();
    return;
}


function limpiarCaja (){
    document.querySelector('#valorUsuario').value = '';
}

function generaNumeroSecreto() {
    let numeroGenerado = Math.floor (Math.random()*numeroMaximo)+1;
    console.log (numeroGenerado);
    console.log (listaNumerosSorteados);
    if (numeroMaximo == listaNumerosSorteados.length) {
        //document.querySelector ('#intentar').setAttribute ('disabled', 'true');
        asignarTextoElemento ('p','Ya se sortearon todos los números posibles');   

    } else {
        if (listaNumerosSorteados.includes(numeroGenerado) ){
            return generaNumeroSecreto ();

        } else {
            listaNumerosSorteados.push (numeroGenerado);
            return numeroGenerado;
        }
    }    
}


function iniciaJuego () {
    //PRimero limpia la caja
    limpiarCaja ();
}


function condicionesIniciales () {
    asignarTextoElemento ('h1', 'Juego de Número Secreto');
    asignarTextoElemento ('p', `Indica un número entre el 1 y el ${numeroMaximo}`);
    //Generar num aleatorias
    numeroSecreto = generaNumeroSecreto ();
    //Reiniciar numero de intentos
    intentos = 1;
}

function reiniciarJuego () {
    //Limpiar caja
    limpiarCaja ();

    //Iniciar mensaje de intervalo de 
    condicionesIniciales ();

    //Deshabilitar  boton de numero de juego
    document.querySelector ('#reiniciar').setAttribute ('disabled', 'true');

    document.getElementById('intentar').removeAttribute ('disabled');

        
}

condicionesIniciales ();


/* console.log (numeroSecreto);
    console.log (typeof(numeroSecreto));

    console.log (numeroUsuario);
    console.log (typeof(numeroUsuario));

    console.log (numeroSecreto === numeroUsuario);
*/


/*
//Crea una lista vacía con el nombre listaGenerica.
let listaGenerica = [];

//Crea una lista de lenguajes de programación llamada lenguagesDeProgramacion.
let lenguagesDeProgramacion = [];

//Agrega a la lista lenguagesDeProgramacion los siguientes elementos.
lenguagesDeProgramacion.push ('Java', 'Ruby', 'GoLang');

//Crea una función que muestre en la consola todos los elementos de la lista lenguagesDeProgramacion por separado.
function mostrarLenguagesSeparadamente() {
    for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
      console.log(lenguagesDeProgramacion[i]);
    }
}


mostrarLenguagesSeparadamente();

  //Crea una función que muestre en la consola todos los elementos de la lista lenguagesDeProgramacion de manera inversa.
function mostrarLenguajesAlreves () {
    for (let i = lenguagesDeProgramacion.length-1; i>= 0; i--) {
        console.log(lenguagesDeProgramacion[i]);
    }
}   

mostrarLenguajesAlreves ();

//Crea una función que calcule la media de los elementos en una lista de números.

let suma = 0;
let listadeNumeros = [10,10,10,10,10,9];

let media = mediaListadeNumeros (listadeNumeros);
console.log ('Suma: ', suma);
console.log ('Media: ', media);


function mediaListadeNumeros () {
    for (let i= 0; i <listadeNumeros.length; i++){
        suma +=  listadeNumeros [i];
    }
    return suma / listadeNumeros.length;
}

/*
function calcularMedia(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
    return suma / lista.length;
  }
  
  let numeros = [10, 20, 30, 40, 50];
  let media = calcularMedia(numeros);
  console.log('Média:', media);
  */
 