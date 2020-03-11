const data = [
  {
    name: "coffee-bean",
    order: true,
    items: ["americano", "milk", "green-tea"]
  },
  {
    name: "starbucks",
    order: false
  }
];
function fn(tags, name, items) {
  //   console.log(tags);
  //   console.log(name);
  //   console.log(items);
  if (typeof items === "undefined") {
    items = "주문가능한 상품이 없습니다";
  }
  return tags[0] + name + tags[1] + items + tags[2];
}

data.forEach(v => {
  const template = fn`<div>welcome ${v.name}!!!
<h2>주문가능 항목</h2><div>${v.items}</div>
</div>`;
  console.log(template);
});
// console.log(template);
