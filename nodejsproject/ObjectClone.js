let obj1 = {
  name: " divya",
  age: "24",
  person: {
    job: "engineer",
  },
};

let obj2 = obj1;
(obj2.name = "siri"), (obj2.person.job = "doctor");

let obj3 = { ...obj1 };
(obj3.name = "siri"), (obj3.person.job = "doctor");

let obj4 = Object.assign({}, obj1);
(obj4.name = "siri"), (obj4.person.job = "doctor");

let obj5 = JSON.parse(JSON.stringify(obj1));
(obj5.name = "siri"), (obj5.person.job = "doctor");
console.log(obj1);

console.log(obj2, "obj2");
console.log(obj3, "obj3");
console.log(obj4, "obj4");
console.log(obj5, "obj5");
