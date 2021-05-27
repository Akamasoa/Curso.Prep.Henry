VARIABLES:
Una variable es un elemento que se emplea para almacenar y hacer referencia a otro valor, como si fuera un frasco que almacena caramelos; el frasco es la variable, y el valor que le asignamos sería el caramelo. Gracias a las variables es posible crear "programas".
Las variables en JavaScript se crean(declaran), por ejemplo, mediante la palabra reservada "var"(reservada significa que no puede asignarse como variable, o sea, no podemos usar la palabra "var" para nombrar a una variable).
También hay otras variables más "nuevas" llamadas "let" y "const". La diferencia entre let, var y const está en que las variables declaradas con const no pueden ser reasignadas con otro valor luego de declararlas.
¿Cómo nombramos una variable?
Al elegir el nombre de una variable debemos tener en cuenta ciertas reglas y limitaciones, por ejemplo:
- Los nombres de una variable sólo pueden contener letras, números, _, y $.
- No pueden comenzar con un número.
- Distinguen mayúsculas y minúsculas, es decir que "x" y "X" serán variables diferentes.
- Como dijimos antes, hay ciertas palabras "reservadas", o sea, no se permite usar ciertas palabras de JavaScript, es decir, las que poseen un significado especial, como por ejemplo "if", "for", "break", "function", etc., o los nombres de las variables que mencionamos antes.

STRINGS:
El tipo de dato String nos permite almacenar y manipular cadenas de texto.
Para crear un string, simplemente encerramos nuestra cadena de caracteres entre comillas dobles (") o comillas simples (') (el resultado es el mismo, esta elección es simplemente una cuestión de preferencia). Y a partir de una "versión" más nueva de Javascript(llamada ECMAScript 2015), también podemos definirlas utilizando tildes invertidas (`).

FUNCIONES:
Una función es un bloque de código capaz de realizar una o más tareas, y luego devolver un valor como resultado.
En JavaScript, las funciones también son un tipo de objeto. ¿Que son los objetos en Javascript? Un objeto es un entidad independiente con propiedades y tipos. Comparalo con una taza, por ejemplo. Una taza es un objeto con propiedades. Una taza tiene un color, un diseño, un peso, un material del que está hecha, etc. Del mismo modo, los objetos de JavaScript pueden tener propiedades que definan sus características.

// declara una función `sumar`
// que retorna la operación 2 + 2
function sumar () {
  return 2 + 2;
}

La sentencia "return" es la que indica qué valor devolverá la función. Es opcional, y cuando no se especifica un valor de retorno, la función devuelve "undefined".
El código dentro de una función es ejecutado una vez que la función es invocada, utilizando su nombre de identificador seguido de (). 

En la práctica, esto no sería muy útil, ya que si quisiéramos, por ejemplo, realizar la operación suma sobre otros valores, tendríamos que crear una nueva función para cada combinación posible.

Para resolver esto, las funciones aceptan PARÁMETROS.

PARÁMETROS y ARGUMENTOS:
Para hacerlas mas dinámicas, las funciones aceptan ARGUMENTOS, que son valores que podemos pasarle a la función al invocarla con los ().

Para determinar qué argumentos acepta una función, al momento de declararla le definimos parámetros, entre los paréntesis y separados por ,:

function miFuncion (parametro1, parametro2, parametro3) {
  // contenido de la función
}

Veamos cómo podría quedar nuestra función sumar() al agregarle parámetros:

function sumar (a, b) {
  return a + b;
}
Los argumentos quedan disponibles como variables dentro del ámbito de la función. Ahora, nuestra función sumar() recibe dos argumentos que serán los operandos de la suma, y por lo tanto es mucho más versátil que su versión anterior. Por ejemplo:

sumar(4, 3);            // → 7
sumar(100.51, 3.1415);  // → 103.6515

Los términos PARÁMETRO y ARGUMENTO suelen ser confundidos y utilizados indistintamente, lo cual es un error. Recuerda que el parámetro es el nombre que definimos dentro de los paréntesis al declarar la función, la etiqueta. Y el argumento es el valor que recibe un parámetro al invocarse la función.

CONTROL DE FLUJO:
El control de flujo (Control flow) es, en ciertos lenguajes de programación como en JavaScript, el ORDEN  en que son ejecutadas las instrucciones en el código.
A los bloques de código que tienen la capacidad de alterar el flujo de ejecución de nuestro código JavaScript se les conoce como estructuras de control, y una de ellas es la SENTENCIA CONDICIONAL "if", que se utiliza para ejecutar un bloque de código únicamente si se cumple cierta condición.
Por ejemplo:

if (
  diaDeLaSemana === "sábado"
  || diaDeLaSemana === "domingo"
) {
  descansar();
} else if (diaDeLaSemana === "viernes") {
  prepararseParaElFinDeSemana();
} else {
  trabajar();
}

BOOLEANOS:
Un boolean es un dato binario, es decir, tiene sólo dos valores posibles, TRUE y FALSE.

El tipo booleano es útil cuando en nuestro código necesitamos distinguir entre dos posibilidades, por ejemplo:

verdadero / falso
prendido / apagado
si / no

Ciertos operadores arrojan como resultado un valor booleano:

0 == "0"  // → true
0 === 1   // → false
0 != "1"  // → true
0 !== 1   // → true
0 < 1     // → true
0 >= 1    // → false
!0        // → true