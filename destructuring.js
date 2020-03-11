let data = ["crong", "honux", "jk", "jinny"];
let [jisu, , , jung] = data;
console.log(jisu, jung);

let obj = {
  name: "krong",
  address: "korea",
  age: 10
};

let { name, age } = obj;
console.log(name, age);

let { name: myName, age: myAge } = obj;
console.log(myName, myAge);

// json parsing
var news = [
  {
    title: "sbs",
    imgurl: "http://이미지A",
    newslist: ["기사A", "기사B", "기사C", "기사D"]
  },
  {
    title: "mbc",
    imgurl: "http://이미지B",
    newslist: ["MBC기사A", "MBC기사B", "MBC기사C", "MBC기사D"]
  }
];

// let [, mbc] = news;
// console.log(mbc);

// let { title, imgurl, newslist } = mbc;
// console.log(title, imgurl, newslist);

// console.log(mbc["newslist"]);

// let [, { title, imgurl }] = news;
// console.log(imgurl);

function getNewsList([, { newslist }]) {
  console.log(newslist);
}

getNewsList(news);
