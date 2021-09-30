function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(2, 2);
console.log('addtwo numbers exercise', sum);

function converthourstominutes(hours) {
  return hours * 60;
}

var twohours = converthourstominutes(2);
console.log('converthourstominutes exercise:', twohours)
;

function getgreeting(name) {
  return '"Hello ' + name + '!"';
}

console.log('String exercise: ', getgreeting('darren'));

function addandmultiplyby5(num1, num2) {
  return (num1 + num2) * 5;
}

console.log('addandmultiplyby5 exercise: ', addandmultiplyby5(10, 5));

function multiplyanddivideby5(num1, num2) {
  return (num1 * num2) / 5;
}

console.log('multiplyanddivideby5 exercise: ', multiplyanddivideby5(35, 10));

function subtracttwonumbers(num1, num2) {
  return num1 - num2;
}

console.log('subtracttwonumbers exercise: ', subtracttwonumbers(22, 7));

function getcirclecircumference(radius) {
  return 2 * Math.PI * radius;
}

console.log('getcircumference exercise: ', getcirclecircumference(5));

function getfullname(firstname, lastname) {
  return firstname + ' ' + lastname;
}

console.log('full name exercise: ', getfullname('darren', 'yang'));

function cube(number) {
  return Math.pow(number, 3);
}

console.log('cube exercise: ', cube(5));
