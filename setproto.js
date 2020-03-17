const healthObj = {
  showHealth: function() {
    console.log("운동시간", this.healthTime);
    return 2;
  },
  setHealth: function(newTime) {
    this.healthTime = newTime;
    console.log("time has set");
    return 1;
  }
};

const newobj = Object.setPrototypeOf(
  { name: "crong", lasttime: "11:20" },
  healthObj
);

console.log(newobj);
newobj.showHealth("12:00");

Object.setPrototypeOf(newobj, healthObj);

const childobj = Object.setPrototypeOf({ age: 22 }, newobj);

console.log(childobj);

console.log(childobj.setHealth("19:00"));
console.log(childobj.showHealth());
