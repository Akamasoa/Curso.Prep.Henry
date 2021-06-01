OBJETOS:

Los objetos en JavaScript son muy similares a los objetos en la vida real. Vamos a tomar como ejemplo un objeto cotidiano: un automóvil.

Un automóvil tiene ciertas características:

Marca
Modelo
Color
Velocidad máxima
Capacidad de pasajeros
etc

Algunas de estas características podemos modificarlas a voluntad. Por ejemplo, podríamos pintarlo para cambiar su color. Otras no son modificables, como la marca o el modelo.

Un automóvil tiene también la capacidad de realizar ciertas acciones, como darle arranque, encender las luces, acelerar, frenar, subir o bajar los cambios, etc.

Los objetos de JavaScript funcionan de forma similar. Poseen características a las cuales llamamos PROPIEDADES, algunas de las cuales podemos modificar, mientras que otras son de solo lectura. Y también puede realizar acciones, mediante FUNCIONES, que al pertenecer a objetos reciben el nombre de MÉTODOS.

JavaScript nos provee una serie de OBJETOS GLOBALES que nos permiten realizar diferentes funciones. Y además nos da la posibilidad de crear nuestros propios objetos.

Literales de Objeto
Un literal de objeto consiste en una serie de propiedades y valores, separados por comas, y encerrados entre llaves. Los objetos usan un concepto llamado pares de CLAVE:VALOR. La clave (KEY) es el identificador y el valor (VALUE) es el valor que queremos guardar en esa clave. La sintaxis es "CLAVE: VALOR".

Veamos por ejemplo como se vería un automóvil en forma de objeto de JavaScript:

var automovil = {
  marca: "Ford",
  precio: null,
  caracteristicas: {
    abs: true,
    "velocidad máxima": 289.6,
  }
};

Como vemos, nuestro objeto consiste en una serie de PROPIEDADES que pueden ser valores de cualquier tipo, en este caso strings, null, números, booleanos e incluso otro objeto.

Para acceder a las diferentes propiedades de los objetos, lo hacemos con la siguiente sintaxis(NOTACIÓN POR PUNTO):

automovil.marca;   // → "Ford"
automovil.precio;  // → null
automovil.caracteristicas.abs;  // → true

// o bien(NOTACIÓN POR CORCHETE):

automovil["marca"];   // → "Ford"
automovil["precio"];  // → null
automovil["caracteristicas"]["abs"];  // → true

Ambas sintaxis en este ejemplo se pueden usar indistintamente. Sin embargo, cuando el nombre de una propiedad posee CARACTERES ESPECIALES o ESPACIOS (como en nuestro ejemplo la propiedad "velocidad máxima"), debe ser declarada ENTRE COMILLAS, y solo se puede acceder utilizando la sintaxis con corchetes.

automovil.caracteristicas["velocidad máxima"];  // → 289.6

Una vez creado un objeto, podemos adjuntarle nuevas propiedades más tarde.

automovil.modelo = "Mustang";
automovil.caracteristicas.color = "Negro";

// o bien

automovil["modelo"] = "Mustang";
automovil["caracteristicas"]["color"] = "Negro";

Nuestros objetos también pueden contener MÉTODOS.

automovil.encender = function () {
  // implementación del método
}

automovil.acelerar = function () {
  // implementación del método
}

Luego para INVOCAR LOS MÉTODOS del objeto utilizamos la siguiente sintaxis:

automovil.encender();
automovil.acelerar();

Veamos una versión alternativa de nuestro objeto automóvil, esta vez con PROPIEDADES y MÉTODOS implementados, que luego explicaremos bloque por bloque:

var automovil = {
  estado: {
    encendido: false,
    luces: false,
    velocidadActual: 0,
    velocidadMaxima: 200
  },

  encender: function () {
    this.estado.encendido = true;
    this.estado.luces = true;
    return this.estado;
  },
  apagar: function () {
    this.estado.encendido = false;
    this.estado.luces = false;
    return this.estado;
  },
  acelerar: function () {
    if (
      this.estado.encendido
      && this.estado.velocidadActual
      <= this.estado.velocidadMaxima
    ) {
      this.estado.velocidadActual++;
    }
    return this.estado.velocidadActual;
  },
  frenar: function () {
    if (
      this.estado.encendido
      && this.estado.velocidadActual > 0
    ) {
      this.estado.velocidadActual--;
    }
    return this.estado.velocidadActual;
  }
}

Nuestro automóvil ahora no solo tiene PROPIEDADES sino también MÉTODOS capaces de realizar “ACCIONES”.

Primero le asignamos a la propiedad "estado" un objeto que a su vez tiene otras propiedades (que representan el estado del vehículo). Inmediatamente después, creamos 4 métodos que se encargan de MODIFICAR el estado del propio objeto automóvil.

THIS:
La palabra clave THIS, cuando se encuentra dentro de un método, hace referencia al objeto que llama a dicho método. En este caso, como veremos, es el propio objeto automovil.

El método encender() modifica el estado de encendido y luces, y devuelve el objeto estado.

automovil.encender();

// → {
// →   encendido: true,
// →   luces: true,
// →   velocidadActual: 0,
// →   velocidadMaxima: 200
// → }
El método apagar() hace exactamente lo opuesto.

automovil.apagar();

// → {
// →   encendido: false,
// →   luces: false,
// →   velocidadActual: 0,
// →   velocidadMaxima: 200
// → }

Ahora si. ¿Qué es lo mejor que podemos hacer con un automóvil nuevo? ¡Vamos a darle una vuelta!

automovil.encender();
automovil.acelerar();  // → 1
automovil.acelerar();  // → 2
automovil.acelerar();  // → 3
automovil.acelerar();  // → 4
Basándote en lo que ya vimos, ¿puedes inferir qué hace el método acelerar()? Tómate un momento para analizarlo.

¿Y qué tal frenar()?

automovil.frenar();  // → 3
automovil.frenar();  // → 2
automovil.frenar();  // → 1
automovil.frenar();  // → 0

automovil.apagar();

// → {
// →   encendido: false,
// →   luces: false,
// →   velocidadActual: 0,
// →   velocidadMaxima: 200
// → }

BUCLES FOR...IN:
Los bucles ofrecen una forma rápida y sencilla de hacer algo repetidamente. El papel principal del bucle "FOR...IN LOOP" es el de recorrer un objeto pasando por cada una de sus propiedades para actuar sobre ellas de alguna manera.
En cuanto a la sintaxis, ENTRE PARÉNTESIS declararemos una variable, la palabra clave IN y el NOMBRE del objeto. Esto recorrerá cada clave del objeto y finalizará cuando se hayan recorrido (iterado) todas las claves. Podemos usar esta clave, y la notación de corchetes, en nuestro BUCLE FOR para acceder al valor asociado con esa clave.

let objeto = ['uno', 'dos', 'tres'];
for(let clave in objeto){
    controle.log(objeto[clave]);
}

