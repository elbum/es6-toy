let mySet = new Set();
mySet.add("crong");
mySet.add("hary");
mySet.add("hary");

mySet.forEach(v => {
  console.log(v);
});

console.log(mySet.has("hary"));

const arr = { a: 1, b: 2, c: 3 };
const wset = new WeakSet();

wset.add(arr);
wset.add({ d: 4 });

console.log(wset.has("a"));
