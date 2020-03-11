let list = document.querySelectorAll("li");
let listarr = Array.from(list);
let resultarr = listarr.filter(function(v) {
  return v.innnerText.includes("e");
});
console.log(resultarr);
