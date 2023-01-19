function Persona(nombre, peso, altura) {
  (this.nombre = nombre), (this.peso = peso), (this.altura = altura);
}

Persona.prototype = {
  saludar(otraPersona) {
    return `Hola ${otraPersona}, me llamo ${this.nombre}`;
  },
  bmi() {
    const bmiValue = this.peso / Math.pow(this.altura, 2);
    return bmiValue;
  },
};

const pedro = new Persona("Pedro", 72, 1.5);

//PRUEBAS DE VERIFICACION

console.log(pedro.saludar("Maria"));
console.log(pedro.bmi());
