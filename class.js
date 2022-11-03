const initialArr = [1, 2, 3, 4, 5];

const words = ["hola", "adios", "juan"];

const newArr = initialArr.map((el) => {
  return el * 2;
});

const newWords = [];

words.forEach((word) => {
  newWords.push(word.toUpperCase());
});

const mayus = words.map(function (x) {
  let hola = x + "a";
  return hola.toUpperCase();
});

// const even = numbers.filter((num) => {
//   return num > 2;
// });

const numbers = [
  [1, 2, 3],
  [4, 5, 6],
];

const squash = () => {
  let result = numbers.map((arr) => arr.filter((num) => num % 2 === 0));
  return result;
};

// 1, 2, 3, 4, 5

const palabras = ["En", "un", "lugar", "de", "la", "mancha"];

const res = palabras.reduce((acc, curr) => {
  return acc + curr + " ";
}, "");

// array of cities:
const cities = [
  "miami",
  "barcelona",
  "madrid",
  "amsterdam",
  "berlin",
  "sao paulo",
  "lisbon",
  "mexico city",
  "paris",
];

const mayuscula = cities.map((city) => {
  const initial = city[0].toUpperCase();
  const rest = city.substring(1);
  return initial + rest;
});

console.log(mayuscula);
