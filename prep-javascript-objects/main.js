var person = {
  firstname: 'darren',
  lastname: 'yang',
  hobby: 'playing basketball'
};

console.log(person);

var fullname = person.firstname + ' ' + person.lastname;
person.job = 'data analyst';
person.previousjob = 'personnel analyst';

console.log("The person's name is:" + fullname);
console.log("The person's current job is: " + person.job);
console.log("The person's previous job is:" + person.previousjob);
console.log(person);
