//variables
var a; //declarando
var b = 'b'; //asignando y declarando
b='bb'; //reasignacion
var a = 'aa'; //redeclaracion

//se extancian dentro del objeto windows


//global scope
var fruit = 'Apple'; //global

function callfruit(){
    console.log(fruit);
}

callfruit();

console.log(fruit)

//tambien podemos crear una variable global si no declaramos la variable dentro de la funcion

function countries(){
    country = 'Ecuador';
    console.log(country);
}

countries();
console.log(country);//debe de llamarse la funcion para que reconozca que existe la variable country