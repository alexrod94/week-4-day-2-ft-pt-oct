const menu = [
  { name: "Carrots", calories: 150 },
  { name: "Steak", calories: 350 },
  { name: "Broccoli", calories: 120 },
  { name: "Chicken", calories: 250 },
  { name: "Pizza", calories: 520 },
];

const calories = menu.reduce((a, b) => {
  return a + b.calories / menu.length;
}, 0);

console.log(calories);
