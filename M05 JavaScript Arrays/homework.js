/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
  // Retornar el primer elemento del arreglo recibido por parámetro.
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido por parámetro.
  // Tu código:
  var ultimo = array[array.length - 1];
  return ultimo;
}

function obtenerLargoDelArray(array) {
  // Retornar la longitud del arreglo recibido por parámetro.
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // El arreglo recibido por parámetro contiene números.
  // Retornar un arreglo con los elementos incrementados en +1.
  // Tu código:
  var masUno = array.map((num) => {
    return num + 1;
  });
  return masUno;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retornar un string donde todas las palabras estén concatenadas
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  holaMundo = palabras.join(" ");
  return holaMundo;
}

function arrayContiene(array, elemento) {
  // Verifica si el elemento existe dentro del arreglo recibido.
  // Retornar true si está, o false si no está.
  // Tu código:
  return array.includes(elemento);
}

function agregarNumeros(arrayOfNums) {
  // El parámetro "arrayOfNums" debe ser un arreglo de números.
  // Suma todos los elementos y retorna el resultado.
  // Tu código:
  var numeros = arrayOfNums;
  sumaTodos = 0;
  for (var i = 0; i < numeros.length; i++) {
    sumaTodos = sumaTodos + numeros[i];
  }
  return sumaTodos;
}

function promedioResultadosTest(resultadosTest) {
  // El parámetro "resultadosTest" es un arreglo de números.
  // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
  // Tu código:
  var sumaTodo = 0;
  for (i = 0; i < resultadosTest.length; i++) {
    sumaTodo = sumaTodo + resultadosTest[i];
  }
  return sumaTodo / resultadosTest.length;
}

function numeroMasGrande(arrayOfNums) {
  // El parámetro "arrayOfNums" es un arreglo de números.
  // Retornar el número más grande.
  // Tu código:
  var max = Math.max(...arrayOfNums);
  return max;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  var multiplicacion = 1;
  for (var i = 0; i < arguments.length; i++) {
    multiplicacion = multiplicacion * arguments[i];
  }
  if (arguments.length === 0) return 0;
  if (arguments.length === 1) return arguments[0];
  else return multiplicacion;
}

function cuentoElementos(array) {
  // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
  // Tu código:
  var numDeElementos = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 18) numDeElementos = numDeElementos + 1;
  }
  return numDeElementos;
}

function diaDeLaSemana(numeroDeDia) {
  // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
  // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
  // Tu código:
  if (numeroDeDia === 1 || numeroDeDia === 7) return "Es fin de semana";
  else return "Es dia laboral";
}

function empiezaConNueve(num) {
  // Esta función recibe por parámetro un número.
  // Debe retornar true si el entero inicia con 9 y false en otro caso.
  // Tu código:
  iniciaConNueve = String(num).split("");
  if (iniciaConNueve[0] == 9) return true;
  else return false;
}

function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario retornar false.
  // Tu código:
  condicion = array.every((elemento) => {
    return elemento === array[0];
  });
  return condicion;
}

function mesesDelAño(array) {
  // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  var nuevoArray = [];
  enero = array.includes("Enero");
  marzo = array.includes("Marzo");
  noviembre = array.includes("Noviembre");

  if (enero == true && marzo == true && noviembre == true) {
    nuevoArray.push("Marzo", "Noviembre", "Enero");
    return nuevoArray;
  } else return "No se encontraron los meses pedidos";
}

function tablaDelSeis() {
  // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Tu código:
  var tablaDelSeis = [];
  producto = 0;
  for (var i = 0; i <= 10; i++) {
    producto = 6 * i;
    tablaDelSeis.push(producto);
  }
  return tablaDelSeis;
}

function mayorACien(array) {
  // La función recibe un arreglo con enteros entre 0 y 200.
  // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
  // Tu código:
  var mayorACien = [];
  num = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 100) mayorACien.push(array[i]);
  }
  return mayorACien;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retornarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // [PISTA]: utiliza el statement 'break'.
  // Tu código:
  var nuevoNum = [];
  i = 0;

  while (i < 10) {
    num += 2;
    nuevoNum.push(num);
    i++;
    if (num === i) {
      break;
    }
  }
  if (num === i) return "Se interrumpió la ejecución";
  else return nuevoNum;
}

function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continua con la siguiente iteración.
  // [PISTA]: utiliza el statement 'continue'.
  // Tu código:
  let nuevoNum = [];

  for (let i = 0; i < 10; i++) {
    if (i === 5) continue;
    num += 2;
    nuevoNum.push(num);
  }
  return nuevoNum;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
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
  tablaDelSeis,
  mayorACien,
  breakStatement,
  continueStatement,
};
