const name = "crong";
const age = 33;

const prevobj = {
  name: "crong",
  lasttime: "11:20"
};

const myHealth = Object.assign({}, prevobj, {
  name: "pororo"
});

console.log(myHealth);
