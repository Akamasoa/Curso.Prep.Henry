BUCLES:
La mayoría del software se ejecuta en bucles. Estos se utilizan para ejecutar un bloque de código de forma repetitiva, y basada en alguna condición. Javascript tiene dos expresiones de bucle incorporadas: el bucle “for” y el bucle "while".

Bucle FOR:
Los bucles for tienen una sintaxis similar a if. Tiene TRES PARTES incluidas entre los paréntesis, que nos sirven para definir cómo deseamos que se realicen las repeticiones. La PRIMERA PARTE es la inicialización, que se ejecuta solamente al comenzar la primera "vuelta"" del bucle. En esta parte se suele colocar la variable que utilizaremos para llevar la cuenta de las veces que se ejecuta el bucle.
La SEGUNDA PARTE es la condición, que se evaluará cada vez que comience una iteración("vuelta") del bucle. Contiene una expresión para decidir cuándo se ha de detener el bucle, o mejor dicho, la condición que se debe cumplir para que continúe la ejecución del bucle.
Por ÚLTIMO tenemos la "actualización", que sirve para indicar los cambios que queramos ejecutar en las variables cada vez que termina la "vuelta" del bucle, antes de comprobar si se debe seguir ejecutando.

Después del for se colocan las sentencias que queremos que se ejecuten en cada "vuelta", acotadas entre llaves, y las tres declaraciones están separadas por un punto y coma.

var i 
for (i=0;i<=10;i++) { 
   	console.log(i); 
}

En este ejemplo, vemos que inicialmente establecemos nuestra variable i en 0, el ciclo se ejecutará y cada vez que llegue al final, aumentará el contador en uno (ya que el "operador ++" es la abreviatura de Javascript para “tomar el valor actual de la variable más uno”). El bucle for evaluará la expresión condicional. Si es true, se ejecutará nuevamente, si es false dejará de funcionar.

OPERADORES LÓGICOS:
Estos operadores sirven para realizar operaciones lógicas, que son aquellas que dan como resultado un "verdadero"(true) o un "falso"(false). Combinamos dos expresiones de igualdad y preguntamos si alguna de las dos es verdadera, si ambas son verdaderas o si ninguna de ellas es verdadera.

&&:
Uno de ellos es el operador “Y” (“AND”). Está escrito con dos símbolos (&&). Evaluará ambas expresiones y devolverá verdadero si AMBAS expresiones son true(verdaderas). Si uno (o ambos) de ellos es falso, este operador devolverá false:

if (100 > 10 && 10 === 10) {
    console.log('i');
}

||:
Otro es el operador “Ó” (“OR”). Está escrito con dos barras verticales (||). Determinará si una de las expresiones es true. Devolverá true si una (o ambas) de las expresiones es true. Devolverá false si AMBAS expresiones son false:

if (100 > 10 || 10 === 10) {
    console.log('i');
}

!:
El último operador lógico es el operador “NOT” (“NO”). Está escrito como un solo signo de exclamación (!). El operador NOT devolverá el valor booleano opuesto de lo que se le pasa (si era true pasa a false, y viceversa).

if (!false) {
    console.log('El ! devolverá true, porque es lo contrario de false, así que ste código se ejecutará');
}
