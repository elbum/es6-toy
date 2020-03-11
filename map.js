let wm = new WeakMap();
let myfun = function() {};

wm.set('key':myfun(), 'value':0);

console.log(wm);

