// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length -1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  array[1, 2, 3, 4, 5];
  for(let i = 0; i < array.length; i++){
    array[i] = array[i] + 1;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(' ');
  
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  if(array.includes(elemento)){
    return true;
  }
  return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
  for(var i = 0; i < numeros.length; i++){
  suma = suma + numeros[i];
  }
  return suma;
}



function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma = agregarNumeros(resultadosTest); //Tomado del ejercicio anterior.
  return suma/resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var numgrande = 0;
  for(var i = 0; i < numeros.length; i++){
    if(numgrande<numeros[i]){ //Acá compara cada número.
      numgrande = numeros[i]; //Acá queda el número que pasa arriba.
    }
  }
  return numgrande;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if(arguments.length < 1){ //Si no hay argumentos.
    return 0;
  }
  if(arguments.length === 1){//Si hay un sólo argmento.
    return arguments[0];
  }
  var multiplicar = 1
  for(var i = 0; i < arguments.length; i++){ //Multiplicación de argumentos.
    multiplicar = multiplicar * arguments[i];
  }
  return multiplicar; //Cantidad final.
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var maydieciocho = 0
  for(var i = 0; i < arreglo.length; i++){
    if(arreglo[i] > 18){ //¿Es mayor a 18?
      maydieciocho=maydieciocho + 1; //Mayores de 18
    }
  }
  return maydieciocho
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
    if(numeroDeDia === 2 || numeroDeDia === 3 || numeroDeDia === 4 || numeroDeDia === 5 || numeroDeDia === 6){
      return 'Es dia Laboral';
  }
  return 'Es fin de semana';
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
    if(n.toString()[0] === '9'){
      return true;
    }
    return false; 
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
                                   //var primero = arreglo[0]; 
  for(var i = 0; i < arreglo.length - 2; i++){
    if(arreglo[i] !== arreglo[i + 1]){ //O if(primero ! == arreglo[i]){
    return false;
  }
}
  return true;

}

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  nuevoarray = [];
  for(var i = 0; i < array.length; i++){
    if(array[i] === 'Enero' || array[i] === 'Marzo' || array[i] ==='Noviembre'){
      nuevoarray.push(array[i]);
    }
}
  if(nuevoarray.length < 3){
    return 'No se encontraron los meses pedidos';
  }
  return nuevoarray;
}

  


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  nuevoarray = [];
  for(var i = 0; i < array.length; i++){
    if(array[i] > 100){
      nuevoarray.push(array[i]);
    }
  }
  return nuevoarray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var array = [];
  var sumanumeros = numero;
  for(var i= 0; i<10; i++) {
    sumanumeros = sumanumeros + 2;
    if(sumanumeros === i) break;
    else {
      array.push(sumanumeros);
    }
  }
  if(i < 10) {  //Es el único caso en que 'i' sería menor a 10 e igual salir del for; si breakeó (si no llegaría siempre a 10 debido al ++).
    return 'Se interrumpió la ejecución';
  }
  else {
    return array;
  }
}




function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array = [];
  var sumanumeros = numero;
  for(var i = 0; i < 10; i++){
    if(i === 5) continue; //A diferencia de la sentencia break(que interrupe), 'continue' no termina la ejecución del bucle por completo; en cambio, salta a la próxima iteración.
    sumanumeros = sumanumeros + 2;
    array.push(sumanumeros);
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
