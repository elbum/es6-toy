var name = "global var";

function home() {
  let homevar = "homevar";
  for (var i = 0; i < 100; i++) {}
  console.log(i);
  console.log(homevar);
}

home();
