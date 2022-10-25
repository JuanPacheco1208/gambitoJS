
let ajedrez = prompt("¿Qué jugada es d4 + c4?");

if(ajedrez == "gambito") {

    alert("Muy bien!");

}else if (ajedrez == "gambito de dama") {

    alert("Excelente!");

} else{
    alert("Es gambito de dama!")
}


let casillas = parseInt(prompt("Cuantas casillas tiene un tablero de ajedrez?"))


for (let i = 1; i <= casillas; i++ ) {
    if(i % 2 == 0){
        console.log("64");
    }

}


let user = {     // un objeto
    name: "Juan",  // En la clave "name" se almacena el valor "Juan"
    age: 25        // En la clave "age" se almacena el valor 25
};

let piezas = ["dama", "rey", "alfil", "peon", "caballo", "torre"]; //array
console.log(dama)

// metodo de busqueda arrays

let arr = ["Gambito", "Pagina", "Juego"];

arr.splice(1, 1); // desde el índice 1, remover 1 elemento

alert( Gambito );


let titulo = document.getElementsByClassName("titulo").value;
console.log(titulo);

console.dir(document);

//* Evento *//

let miEncuesta
document.getElementById("Encuesta");
miEncuesta.addEventListener ("submit", validarEncuesta);

function validarEncuesta (e) {

    e.preventDefault ();


    let encuesta = e.target

    console.log(encuesta.children[0].value);
    console.log(encuesta.children [1].value);
}

//*Storage, habrá otro JS donde está el storage *//

localStorage.setItem('bienvenida', '¡Bienvenido a Gambito!');
localStorage.setItem('esValido', true);
localStorage.setItem('unNombre', Jose)

let mensaje = localStorage.getItem('bienvenida');
let muestra = localStorage.getItem('esValido');
let nombre  = localStorage.getItem('unNombre');

//* Eliminar storage, lo pongo en comentarios porque no estoy del todo seguro como vaya a funcionar *//

// localStorage.setItem('bienvenida', '¡Bienvenido a Gambito!');
// sessionStorage.setItem('esValido', true);

//localStorage.removeItem('bienvenida');
//sessionStorage.removeItem('esValido');

//localStorage.clear()
//sessionStorage.clear()

//* ------------------------------------------------------------------ *//

