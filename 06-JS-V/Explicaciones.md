PROTOTIPO(PROTOTYPE):
Un objeto en JavaScript tiene otro objeto, llamado PROTOTYPE (PROTOTIPO, en español). Cuando pedimos a un objeto una propiedad que NO tiene, la busca en su prototipo. Así, un prototipo es otro objeto que se utiliza como una fuente de propiedades alternativa.

Prototype actúa como una plantilla desde la que el objeto hereda(HERENCIA) propiedades y métodos.

El prototipo es una propiedad de nombre prototype, que es en sí un objeto, denominado objeto prototipo, y que reside en la función constructor del objeto. A través de esta propiedad prototype es que podemos agregarle al objeto nuevas propiedades y métodos.

Un objeto prototipo puede tener a su vez otro objeto prototipo del cual hereda, lo que se conoce como cadena de prototipos. Esto permite que los objetos puedan tener propiedades y métodos que no han sido declarados por ellos mismos.

La herencia de prototipos funciona de la siguiente manera:

Los objetos "Date" heredan de "Date.prototype"
Los objetos "Number" heredan de "Number.prototype"
Los objetos "Array" heredan de "Array.prototype"
Etc.
A su vez, todos los objetos heredan de "Object.prototype", que se encuentra en lo más alto de la cadena de prototipos (el 'Adán' de los objetos).

Si exploramos, por ejemplo, el prototipo "Date.prototype" podemos ver los muchísimos métodos que serán accesibles a cada instancia de Date

Veamos un ejemplo de uso:

const ahora = new Date();

/****************************************
('ahora' hereda el prototipo de Date
y por lo tanto podemos usar sus métodos)
****************************************/
console.log(ahora.getMonth()); // (devuelve el número de mes)

Ahora veámoslo en una función constructor propia:

//Declaro un constructor:
function Automovil (marca, modelo, color) {
  this.marca = marca;
  this.modelo = modelo;
  this.color = color;
}

//Lo instancio:
var miAuto = new Automovil('Chevrolet', 'Camaro', 'Amarillo');

// Agrego la propiedad ruedas a la propiedad prototype del constructor
Automovil.prototype.ruedas = 4;

// La instancia de Automovil hereda la propiedad 'ruedas' del prototype:
console.log(miAuto.color); // "Amarillo"
console.log(miAuto.ruedas); // 4

En este ejemplo, la instancia 'miAuto' del objeto 'Automovil' hereda propiedades y métodos de 'Automovil.prototype'.

Las instancias de objetos, como 'miAuto', heredan además una propiedad '__proto__' que referencia al prototype de la función constructor, en este caso 'Automovil.prototype'.

Automovil.prototype === miAuto.__proto__; // true


OBJECT.CREATE:
El método "create" de los objetos nos permite crear un nuevo objeto a partir de un prototype especificado:

// creo un objecto con un objeto vacio como proto
> var obj = Object.create({})

> obj
< Object {}

// creo que un objeto a partir de un proto de Objeto
> var obj = Object.create(Object.prototype)
// que es lo mismo que crear un objeto vacio literal
> var obj = {}

¿QUÉ ES UNA CLASE? 
Una clase es una forma de organizar código de forma entendible con el objetivo de simplificar el funcionamiento de nuestro programa. Además, hay que tener en cuenta que las clases son «conceptos abstractos» de los que se pueden crear objetos de programación, cada uno con sus características concretas.

Esto puede ser complicado de entender con palabras, pero se ve muy claro con ejemplos:

    Animal                    Vehículo                 Forms
    |    |                    |      |                |     |
  pato  lucas               fiat   renault      cuadrado   rectángulo

En primer lugar tenemos la clase. La clase es el concepto abstracto de un objeto, mientras que el objeto es el elemento final que se basa en la clase. En en modelo anterior tenemos varios ejemplos:

+ En el primer ejemplo tenemos dos variables: pato y lucas. Ambos son animales, por lo que son objetos que están basados en la clase Animal. Tanto pato como lucas tienen las características que estarán definidas en la clase Animal: color, sonido que emiten, nombre, etc...

+ En el segundo ejemplo tenemos dos variables: fiat y renault. Se trata de dos coches, que son vehículos, puesto que están basados en la clase Vehículo. Cada uno tendrá las características de su clase: color del vehículo, número de ruedas, marca, modelo, etc...

+ En el tercer ejemplo tenemos dos variables: cuadrado y rectángulo. Se trata de dos formas geométricas, que al igual que los ejemplos anteriores tendrán sus propias características, como por ejemplo el tamaño de sus lados. El elemento cuadrado puede tener un lado de 3 cm y el elemento rectángulo puede tener un lado de 6 cm.

En cuanto a sintaxis, declarar una clase es tan sencillo como escribir lo siguiente:

// Declaración de una clase
class Animal {}

// Crear o instanciar un objeto
const pato = new Animal();

El nombre elegido debería hacer referencia a la información que va a contener dicha clase. Piensa que el objetivo de las clases es almacenar en ella todo lo que tenga relación (en este ejemplo, con los animales). Es lo que veníamos haciendo, por ejemplo, con objetos como "array".

Observa que luego creamos una variable donde hacemos un new Animal(). Estamos creando una variable pato (un objeto) que es de tipo Animal, y que contendrá todas las características definidas dentro de la clase Animal (de momento, vacía).

Una norma de estilo en el mundo de la programación es que "las clases deben siempre empezar en mayúsculas". Esto nos ayudará a diferenciarlas sólo con leerlas.

¿QUÉ ES UN CONSTRUCTOR? 
Se le llama constructor a un tipo especial de método de una clase, que se ejecuta automáticamente a la hora de hacer un 'new' de dicha clase. Una clase 'sólo puede tener un constructor', y en el caso de que no se especifique un constructor a una clase, tendrá uno vacío de forma implícita.

Veamos el ejemplo anterior, donde añadiremos un constructor a la clase:

// Declaración de clase
class Animal {
  // Método que se ejecuta al hacer un new
  constructor() {
    console.log("Ha nacido un pato.");
  }
  // Métodos
  hablar() {
    return "Cuak";
  }
}

// Creación de una instancia u objeto
const pato = new Animal(); // 'Ha nacido un pato'

El constructor es un mecanismo muy interesante y utilizado para tareas de inicialización o que quieres realizar tras haber creado el nuevo objeto. 

Ojo: En un constructor 'no se puede utilizar nunca un return', puesto que al hacer un 'new' se devuelve siempre el propio objeto creado.

¿QUÉ ES UNA PROPIEDAD? 
Las clases, siendo estructuras para guardar información, pueden guardar variables con su correspondiente información. Dicho concepto se denomina 'propiedades' y en Javascript se realiza en el interior del constructor, precedido de la palabra clave 'this' (que hace referencia a «este» elemento, es decir, la clase), como puedes ver en el siguiente ejemplo:

class Animal {
  constructor(n = "pato") {
    this.nombre = n;
  }

  hablar() {
    return "Cuak";
  }
  quienSoy() {
    return "Hola, soy " + this.nombre;
  }
}

// Creación de objetos
const pato = new Animal();
pato.quienSoy(); // 'Hola, soy pato'

const donald = new Animal("Donald");
pato.quienSoy(); // 'Hola, soy Donald'
