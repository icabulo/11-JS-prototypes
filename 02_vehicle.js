function Auto() {
  this.velocidad = 0;
}

Auto.prototype = {
  acelerar(num) {
    return (this.velocidad += num);
  },
  frenar(num) {
    if (num > this.velocidad) {
      this.velocidad = 0;
    } else {
      this.velocidad -= num;
    }
    return this.velocidad;
  },
};

const a1 = new Auto();

//PRUEBAS DE VERIFICACION

// a1.velocidad; // 0
console.log(a1.velocidad);

a1.acelerar(1);
a1.acelerar(2);
// a1.velocidad; // 3
console.log(a1.velocidad);

a1.frenar(2);
// a1.velocidad; // 1
console.log(a1.velocidad);

a1.frenar(3);
// la velocidad quedaría en -1, así que se deja en 0
// a1.velocidad; // 0
console.log(a1.velocidad);
