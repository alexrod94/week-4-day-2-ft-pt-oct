function max(a, b, c) {
  const nums = [...arguments];
  console.log(arguments);
  nums.forEach((el) => console.log(el));
}

max(1, 2, 3);
