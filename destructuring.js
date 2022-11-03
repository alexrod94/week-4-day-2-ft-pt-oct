let person = {
  name: "Ironhacker",
  age: 25,
  favoriteMusic: "Metal",
  favoriteFood: {
    title: "Ravioli",
    ingredients: [],
  },
};

let {
  name,
  age: edad,
  favoriteFood: { title },
  city = "Barcelona",
} = person;

/*console.log(
  `La persona ${name} le gustan los ${title} y tiene ${edad} años y es de ${city}`
);

console.log(person);
*/

const ingredients = ["Tomato", "Lettuce", "Onion"];

const [, , ingredient3] = ingredients;

const europeanCampuses = [
  ["madrid", "es"],
  ["barcelona", "es"],
  ["berlin", "de"],
  ["paris", "fr"],
  ["amsterdam", "nl"],
  ["lisbon", "pt"],
];

const [[campusSpain1], [campusSpain2, country], [campus5, theCountry]] =
  europeanCampuses;

console.log(campusSpain1, campusSpain2, country, theCountry);
// ==> 'madrid' 'barcelona' 'es' 'de'

const customer = {
  name: {
    firstName: "ivan",
    lastName: "zoro",
  },
  age: 32,
  preferences: [
    {
      tech: ["cameras", "smartwatches"],
      books: ["science fiction", "coding"],
    },
  ],
};

const {
  name: { firstName, lastName },
  age,
  preferences: [{ tech, books }],
} = customer;

console.log(firstName, lastName, age); // ==> 'ivan' 'zoro' 32
console.log(tech, books); // ==> [ 'cameras', 'smartwatches' ] [ 'science fiction', 'coding' ]
