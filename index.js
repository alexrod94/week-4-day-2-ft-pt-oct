// Ejercicio 1: Crea una función que devuelva la multiplicación de dos números

function product(x, y) {
  return x * y;
}

// Ejercicio 2: Devuelve el mayor de dos números

function maxOfTwoNumbers(a, b) {
  if (a >= b) {
    return a;
  } else return b;
}

function maxOfThreeNumbers(a, b, c) {
  if (a > b && a > c) return a;
  else if (b > a && b > c) return b;
  else return c;
}

// Ejercicio 3: Devuelve el mayor de tres números. Cuidado con los negativos
function maxOfThreeNumbersComplicated(a, b, c) {
  let max = Math.min(...arguments);
  let nums = [...arguments];

  // array = [5, 3, 2, 8]

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  return max;

  nums.forEach((el) => {
    if (el > max) {
      console.log(el);
      max = el;
      console.log(max);
    }
  });

  return max;
}

// console.log(maxOfThreeNumbers(5, 2, 7));

// Ejercicio 4: IsEven. Le pasamos un número y devuelve true si es par, false si no

const isEven = (num) => {
  if (num % 2 === 0) return true;
  else return false;
};

// Ejercicio 5: sumArray (numbers). Calcular la suma de un array de números

function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  // reduce
  return sum;
}

// Ejercicio 6: Devuelve el mayor número dentro de un array de números. Devolver false si no hay números
// 1, 2, 8, 4, 5

function maxOfArray(numbers) {
  let max = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
  // your code
}

// Ejercicio 7: Encuentra la string más larga de un array

// hola, barcelona, juan
function longestStrings(strings) {
  let maxWord = "";
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > maxWord.length) {
      maxWord = strings[i];
    }
    console.log(`Current word: ${strings[i]}`);
    console.log(`Max word: ${maxWord}`);
  }

  return maxWord;
}

const person = {
  firstName: "Alex",
  lastName: "Rodríguez",
};

// Ejercicio 8: Dado un objeto con las propiedades firstName y lastName, devolver un string con el nombre completo
function getFullName(personObj) {
  // Alex Rodríguez
  return `${personObj.firstName} ${personObj.lastName}`;
  return personObj.firstName + " " + personObj.lastName;
}

// Ejercicio 9: Mirar si existe una determinada palabra dentro de un array
function doesWordExist(wordsArr, word) {
  let exists = false;
  wordsArr.forEach((el) => {
    if (el === word) {
      exists = true;
    }
  });
  return wordsArr.includes(word);
}

// Ejercicio 10: Función que recibe un array de palabras y debe devolver la primera que no se repite
function findUnique(wordsArr) {
  let word = "";
  wordsArr.every((el) => {
    const repetitions = wordsArr.filter((x) => x === el);
    if (repetitions.length === 1) {
      word = el;
      return false;
    } else return true;
  });
  return word;
}

// Lógica de Lorena

function findUnique(wordsArr) {
  if (wordsArr == 0) {
    return false;
  }

  const myArr = ["hola", "barcelona", "adios", "hola"];

  console.log("Array que nos mandan: ", wordsArr);
  for (word of wordsArr) {
    let repeat = 0;
    for (let i = 0; i < wordsArr.length; i++) {
      if (word === wordsArr[i]) {
        repeat += 1;
        console.log(word, repeat);
      }
    }
    if (repeat === 1) return word;
    console.log("Palabra ", word, "se repite", repeat);
  }
}

// Ejercicio 11: Encontrar el máximo en un array de dos dimensiones

/* Ejemplo: */
const twoDimArr1 = [
  [1, 2, 3],
  [4, 3, 8],
  [5, 12, 9],
];

function maxTwoDimArray(matrix) {
  let max = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > max) {
        max = matrix[i][j];
      }
    }
  }
  console.log(max);
  return max;
}

function maxTwoDimArray(matrix) {
  let newArr = [];
  for (let i = 0; i < matrix.length; i++) {
    newArr.push(Math.max(matrix[i]));
  }
  // matrix.forEach((el) => newArr.push(Math.max(el)));
  return Math.max(...newArr);
}

maxTwoDimArray(twoDimArr1);
