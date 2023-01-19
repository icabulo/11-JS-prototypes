const jailer = {
  name: "Jailer Fonseca",
  age: 30,
  // sayHello: function () {
  //   console.log(`Hola, me llamo ${this.name}`);
  // },
  //metodos concisos (ES6)
  sayHello() {
    //metodo
    console.log(`Hola, me llamo ${this.name}`);
  },
};

const laura = {
  name: "Laura Esmoris",
  age: 30,
  // sayHello: function () {
  //   console.log(`Hola, me llamo ${this.name}`);
  // },
  //metodos concisos (ES6)
  sayHello() {
    //metodo
    console.log(`Hola, me llamo ${this.name}`);
  },
};

//objeto literal
const person = {
  isHuman: true,
  sayHello() {
    //metodo
    console.log(`Hola, me llamo ${this.name}`);
  },
};

//1. Object.create()
const felipe = Object.create(person, {
  name: { value: "Felipe Ramirez" },
  age: { value: 30 },
});

// console.log(felipe.age);
// console.log(felipe.isHuman);

//2. funciones constructoras
function Person(name, age) {
  //parametros: todo lo que se le agrega a una funcion
  //cada vez que se cree un objeto a partir de esta funcion se ejecuta el bloque de codigo
  // console.log("Esto se ejecuta");
  (this.name = name), (this.age = age);
}

Person.prototype = {
  isHuman: true,
  sayHello() {
    return `Hola me llamo ${this.name}`;
  },
};

const diana = new Person("Dianan Bedoya", 30);

/* console.log(diana.name);
console.log(diana.age);
console.log(diana.isHuman);
console.log(diana.sayHello()); */
