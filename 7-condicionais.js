console.log(`Trabalhando com Condicionais`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
const temPassagemComprada = true;
const estaAcompanhada = true;
const idadeComprador = 17;
console.log("Destinos Possiveis: ");
console.log(listaDeDestinos);


// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1);
// } else if (estaAcompanhada) {
//     console.log("Comprador Comprador esta Acompanhado");
//     listaDeDestinos.splice(1, 1);
// } else {

//     console.log("Não é Maior de Idade , Nao posso vender");
// }

if ( idadeComprador >= 18 ||estaAcompanhada ) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(2, 1);
} else {
    console.log("Comprador Comprador esta Acompanhado");
} 

console.log ("Embarque: \n\n");
if(idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem");
    } else {
        console.log ("Nao pode embarcar");
    }





console.log(listaDeDestinos);