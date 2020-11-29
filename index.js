//😀😀😀 EJERCICIOS DE ESTRUCTURA DE DATOS: MATRICES =>

// 1. EJERCICIO:
// Crear una función obtenerNumeroMayorArray que tome como argumento un array de números y devuelva el mayor número de dicho array.

const obtenerNumeroMayor = (array) => {
  let numeroMasGrande = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > numeroMasGrande) {
      numeroMasGrande = array[i];
    }
  }
  return numeroMasGrande;
};

// const obtenerNumeroMayor = (array) => {
//   let numeroMasGrande = 0;
//   for (let i = 0; i < array.length; i++) {
//     numeroMasGrande += array[i];
//     // numeroMasGrande = numeroMasGrande + array[i]
//   }
// };
console.log("1-NUMERO MAYOR");
console.log(obtenerNumeroMayor([2, 7, 12, 1])); // 12

// 2.EJERCICIO:

// Crear una función sumarArray que tome como argumento un array de números y devuelva la suma de todos los número de dicho array.

const sumar = (array) => {
  let acumuladora = 0;
  for (let i = 0; i < array.length; i++) {
    acumuladora += array[i];
  }
  return acumuladora;
};

console.log("2-EJERCICIO-sumar");
console.log(sumar([4, 5, 10])); // 19

// 3- EJERCICIO - obtenerNumeroMayor(matriz)

// Crear una función obtenerNumeroMayor que tome como argumento un array 2d de números matriz y devuelva el mayor número de dicha matriz.

const obtenerNumeroMayor2D = (array) => {
  let acumuladora = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] > acumuladora) {
        acumuladora = array[i][j];
      }
    }
  }
  return acumuladora;
};

console.log("3-EJERCICIO-obtenerNumeroMayor2D");
console.log(
  obtenerNumeroMayor2D([
    [2, 7, 12, 1],
    [8, 23],
    [9, 45, 7],
    [22, 3, 24, 4],
  ])
); // 45

// 5- EJERCICIO- esMatrizCuadrada(matriz)

// Crear una función esMatrizCuadrada que tome como argumento un array 2d matriz y devuelva true si es una matriz cuadrada, es decir, si tiene igual cantidad de filas que de columnas, o false si no lo es.

const esMatrizCuadrada = (matriz) => {
  // chequear que las filas y las columnas sean =
  // que la longitud del array mayor sea = a todas las longitudes de los arrays internos
  // si UN array no tiene la misma longitud que la matriz, ya se que toda la matriz no es cuadrada

  for (let i = 0; i < matriz.length; i++) {
    if (matriz.length != matriz[i].length) {
      // matriz.length => el tamaño de la matriz
      // matriz[i].length => es el tamaño d elos elementos de la matriz
      return false;
    }
  }
  return true;
};

console.log("5-EJERCICIO esMatrizCuadrada");
console.log(
  esMatrizCuadrada([
    [4, 5],
    [2, 7, 1],
    [8, 10],
  ])
); // false

console.log(
  esMatrizCuadrada([
    [4, 5, 9],
    [2, 7, 1],
    [8, 10, 5],
  ])
); // true

// 6 - EJERCICIO - generarGrillaCuadrada(tamanio)

// Crear una función generarGrillaCuadrada que tome como argumentos un número entero y devuelva una matriz de filas y columnas con la longitud tamanio, donde cada ítem de la matriz es un string cualquiera (por ejemplo "hola").

const generarCuadrada = (array) => {
  let acumuladora = "";
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if ((array[i][j] = "hola")) {
        acumuladora = array[i][j];
      }
    }
    return acumuladora;
  }
};

console.log("6-EJERCICIO-generarCuadrada");
console.log(generarCuadrada(3));

// generarGrillaCuadrada(
//   3
// ); /*
//   [
//     ["hola", "hola", hola"],
//     ["hola", "hola", hola"],
//     ["hola", "hola", hola"]
//   ]
// */

// una funcion que devuelve un numero aleatorio:

const letras = ["a", "b", "c"];

const obtenerNumeroAlAzar = (array) => {
  return Math.floor(Math.random() * array.length);
};

// hace una funcion que reciba un array vacio y devuelva un numero aleatorio en cada posicion de ese array:

const arrayAlAzar = (array) => {
  let array2 = [];
  for (let i = 0; i < array; i++) {
    array2[i] = array[obtenerNumeroAlAzar(array)];
  }
  return array2;
};

console.log("EJERCICIO-EXTRA-obtenerNumeroAlAzar");
console.log(arrayAlAzar(letras));

// 7-EJERCICIO - generarGrilla(filas, columnas, items)

// Crear una función generarGrilla que tome como argumentos un número entero filas, un número entero columnas y un array de valores items, y devuelva una matriz de filas filas y columnas columnas, donde cada ítem de la matriz es un ítem aleatorio de items.

// Como todos los problemas complejos, comenza por dividirlo en problemas mas pequeños: por ejemplo, comenza por una funcion que devuelva un numero aleatorio. Una vez que la tengas, hacé una función que reciba un array y devuelva un número aleatorio en cada posición de ese array. Luego, mejorala para hacer que devuelva un array cuyos elementos sean elementos aleatorios del array recibido como parametro. Solo entonces, hace la funcion generarGrilla.

const obtenerNumeroAlAzar3 = (items) => {
  return Math.floor(Math.random() * items.length);
};

const generarGrilla3 = (filas, columnas, items) => {
  let grilla = [];
  for (let i = 0; i < filas; i++) {
    grilla[i] = [];
    for (let j = 0; j < columnas; j++) {
      grilla[i][j] = items[obtenerNumeroAlAzar3(items)];
    }
  }
  return grilla;
};

console.log("7-EJERCICIO-obtenerNumeroAlAzar3");
console.log(generarGrilla3(2, 3, ["a", "b", "c"]));

/*
  //   [
  //     [a, c, c],
  //     [c, a, b]
  //   ]
  // */

console.log(generarGrilla3(3, 3, ["a", "b", "c"]));
/*
  [
    ['c', 'c', 'a'],
    ['c', 'a', 'a'],
    ['b', 'a', 'b']
  ]
*/

// ejemplo de grilla de frutas:

const frutas = ["🍉", "🥥", "🍋", "🥝", "🍒", "🍑"];

const obtenerNumeroAlAzar2 = (array) => {
  return Math.floor(Math.random() * array.length);
};

const generarGrilla = (filas, columnas, items) => {
  let grilla = [];
  for (let i = 0; i < filas; i++) {
    grilla[i] = [];
    for (let j = 0; j < columnas; j++) {
      grilla[i][j] = items[obtenerNumeroAlAzar2(items)];
    }
  }
  return grilla;
};

console.log(generarGrilla(6, 6, frutas));
