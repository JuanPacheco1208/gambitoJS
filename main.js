
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


let board2 = Chessboard('board2', {
    draggable: false,
    dropOffBoard: 'trash',
    sparePieces: true
  })
  
  $('#startBtn').on('click', board2.start)
  $('#clearBtn').on('click', board2.clear)

 //*------------------------------------------------------------------ *//


  fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));


  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'GAMBITO',
  body: JSON.stringify({
    title: 'Dama',
    body: 'Chess',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

  console.log (fetch('https://jsonplaceholder.typicode.com/posts/1') )

//*----------------------------------------------------- *//
res.setHeader('Content-Type', 'text/plain');

res.end('Hello World\n');


// Mi idea era hacer un tablero de ajedrez que sea jugable, entonces busqué en muchas partes pero el código es relativamente largo y hace uso de ReactJS
// Entonces, agregué varias lineas de código con solo JS y este proyecto es para ampliarlo en mi futuro, tendrá base de datos y todo, pero necesito ReactJS y es la cursada en donde estoy ahora mismo.
// Muchas gracias.