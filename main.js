function returnFunction(function1, function2, number) {
  if (number > 10) {
    function1();
  } else {
    function2();
  }
}

let function3 = () => console.log("function1");
let function4 = () => console.log("function2");

let result = returnFunction(function3, function4, 11);

let obj = {
  num1: 40,
  num2: 50,
  function: function sum(num1, num2) {
    return num1 + num2;
  },
};

let result2 = obj.function(obj.num1, obj.num2);
console.log(result2);
