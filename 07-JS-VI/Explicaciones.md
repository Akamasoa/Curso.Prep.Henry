¿QUÉ ES UN CALLBACK?

De forma sencilla, un Callback (llamada de vuelta) es una función que se ejecutará después de que otra función haya terminado de ejecutarse; de aquí el nombre de Callback.
O sea que son un modo de asegurarse de que cierto código no se ejecuta hasta que otro código haya terminado de ejecutarse.
Los callbacks, también, no son más que un tipo de funciones que se pasan por parámetro a otras funciones. El objetivo de esto es tener una forma más legible de escribir funciones, más cómoda y flexible para reutilizarlas.
Por convención se usará 'cb' como argumento para la variable que se usará de callback.

function saludar(usuario) {
    return 'Hola ' + usuario + '!';
}

function despedir(usuario) {
    return 'Adiós ' + usuario + '!';
}

function crearSaludo(usuario, cb) {
    return cb(usuario);
}

crearSaludo('Patoruzu', saludar); // 'Hello Patoruzu!'
crearSaludo('Patoruzu', despedir); // 'Goodbye Patoruzu!'

MÁS MÉTODOS ARRAY:
Ya conocemos y utilizamos 'métodos de matriz', .push, .pop, .shift, .unshift y .length. Pero hay muchos más métodos disponibles de forma nativa en un array. Los métodos de los que vamos a hablar aquí se denominan "métodos de orden superior", porque toman los callbacks como argumentos.

.forEach:
Este método se ejecutará una vez por cada elemento en el arreglo, es decir, si tu arreglo tiene 10 elementos, se ejecutará 10 veces, lo cual lo hace una excelente opción para acceder a cada elemento del arreglo y listarlo; veamos los 2 códigos equivalentes, con 'for' y con '.forEach':

const autos = ['Renault', 'Chevrolet', 'Toyota', 'Fiat'];

// Forma anterior con for loop
for(let i = 0; i < autos.length; i++ ) {
    console.log(autos[i]);
}

// Podemos escribir el callback en los paréntesis como una función anónima

autos.forEach(function(elemento, indice) {
    console.log(elemento);
});

// O podemos crear una instancia de una función para usarla como callback.
// Además, no necesitamos usar el argumento de índice, si no lo necesitas, no dudes en omitirlo.

function mostrarNombres(elemento) {
    console.log(elemento);

Ambos códigos producirán el mismo resultado, pero nota lo limpio y sencilla que es la sintaxis de la segunda y tercera opción.

.reduce:
.reducer ejecutará una función que retornará un acumulado como valor único. Para esto ejecutará un bucle en nuestra matriz con la intención de reducir cada elemento en un elemento que se devuelve.

const numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
const palabras = [ 'Hola,', 'mi', 'nombre', 'es', 'Nippur'];

// Podemos escribir la función anónima directamente en los paréntesis de .reduce
// Si omitimos el elemento inicial, siempre comenzará en el primer elemento.
const suma = numeros.reduce(function(acc, elemento){
    return acc + elemento;
});

// Podemos escribir una función fuera de los parents de .reduce (para usar varias veces más tarde)
function multiplicarDosNumeros(a, b) {
    return a * b;
}

const productos = numeros.reduce(multiplicarDosNumeros);

// .reduce funciona en cualquier tipo de datos.
// En este ejemplo configuramos un acumulador de arranque
const frases = palabras.reduce(function(acc, elemento) {
    return acc + ' ' + elemento;
}, 'Frase completa:');

console.log(suma); // 45
console.log(productos); // 362880
console.log(frases); // "Frase completa: Hola, mi nombre es Nippur"

.map:
.map y .forEach se pueden llegar a confundir. Ambos se ejecutarán la misma cantidad de ocasiones que la cantidad de tus elementos en tus arreglos, la diferencia principal es: el .map crea un nuevo arreglo, mientras que el .forEach no.

Es considerado una mala práctica que si no utilizarás el arreglo restante debes evitar utilizar el .map; por lo tanto si no utilizarás el arreglo restante es recomendable mejor utilizar un .forEach.

const numeros = [2, 3, 4, 5];

function multiplicarPorTres(elemento) {
    return elemento * 3;
}

const doble = numeros.map(function(elemento) {
    return elemento * 2;
});

const triple = numeros.map(multiplicarPorTres)

console.log(doble); // [ 4, 6, 8, 10 ]
console.log(triple); // [ 6, 9, 12, 15 ]

