const SETTING = {
  name: "LUCKY LOTTO",
  count: 6,
  maxNumber: 45
};

let luckyNumbers = new Set();

function getRandomNumber(maxNumber) {
  return Math.floor(Math.random() * maxNumber) + 1;
}

let { name, count, maxNumber } = SETTING;

for (let i = 0; i < count; i++) {
  let roll = true;
  while (roll) {
    n = getRandomNumber(maxNumber);
    if (!luckyNumbers.has(n)) {
      luckyNumbers.add(n);
      roll = false;
    }
  }
}
console.log(name, luckyNumbers);
