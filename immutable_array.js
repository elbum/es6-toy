// immutable array
const list = ["apple", "orange", "watermelon"];
list2 = [].concat(list);

const list3 = ["apple", "orange", "watermelon"];
list4 = [].concat(list3, "banana");

console.log(list3, list4);

console.log(list === list2);
console.log(list3 === list4);
