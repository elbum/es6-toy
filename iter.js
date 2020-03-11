var data = [1, 2, undefined, NaN, null, ""];
for (var i = 0; i < data.length; i++) {
  console.log(data);
}

data.forEach(function(v) {
  console.log(v);
});

// 프로토 펑션을 찍는다. 문제가 있음.
Array.prototype.getIndex = function() {};
for (let idx in data) {
  console.log(data[idx]);
}

// 이건 문제가 없다.
for (let v of data) {
  console.log(v);
}

var str = "hello world!!~";
for (let v of str) {
  console.log(v);
}
