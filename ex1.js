var fs = require("fs");
var cheerio = require("cheerio");

fs.readFile("./ex1.html", "utf-8", (err, data) => {
  //console.log(data);
  let ulList = [];
  const $ = cheerio.load(data);

  const $bodylist = $("ul").children("li");

  //   console.log($bodylist);
  $bodylist.each(function(i, elem) {
    ulList[i] = {
      fruit: $(this).text()
    };
  });
  console.log(ulList);
});
