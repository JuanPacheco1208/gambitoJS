const dama = { id: 1, damaB: "gambito"};
const enJSON = JSON.stringify(dama);

console.log(enJSON);
console.log(typeof dama);
console.log(typeof enJSON);

localStorage.setItem("dama", enJSON);


//* const enJSON = { "id": 2, damaB: "gambito"}; //*
//*const damaB = JSON.parse(dama);

//*console.log(enJSON);
//*console.log(typeof dama);
//*console.log(dama.damaB);

let usuario;
let usuarioEnGM = JSON.stringify(localStorage.getItem('usuario'))

if (usuarioEnGM) {
    usuario = usuarioEnGM
}