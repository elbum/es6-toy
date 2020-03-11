let pre = ["apple", "orange", 100];
let newData = [...pre, 200];

console.log(newData);
console.log(pre === newData);

function sum(a, b, c) {
  return a + b + c;
}
let p = [100, 200, 300, 400];

console.log(sum.apply(null, p));

console.log(sum(...p));
