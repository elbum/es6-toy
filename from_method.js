function addMark() {
  let newData = [];
  console.log("args = ", arguments);
  for (let i = 0; i < arguments.length; i++) {
    newData.push(arguments[i] + "!");
  }
  console.log(newData);

  let newArray = Array.from(arguments);
  let n2 = newArray.map(function(value) {
    return value + "!";
  });
  console.log(n2);
}

addMark(1, 2, 3, 4, 5, 6, 7, 8, 9);
