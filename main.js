

alert('Hi Guys'); 
console.log('Hi Guys');
console.error('Error message appears');
console.warn('Warning Message appears');



let temperature = 80;


temperature = 100;


const name = 'Martin';
const age = 26;
const pressure = 10.1;
const isClean = true;
const a = null;
const b = undefined;
let c; 


console.log(typeof c);





console.log('My name is ' + name + ' and I am ' + age);

console.log(`My name is ${name} and I am ${age}`);

const s = 'Hi Guys';
let val;

val = s.length;

val = s.toUpperCase();
val = s.toLowerCase();

val = s.substring(0, 5);

val = s.split('');



const numbers = [1,2,3,4,5];
const animals = ['dog', 'cat', 'zebra', 'bear'];
console.log(numbers, animals);

console.log(animals[1]);

fruits[4] = 'goat';

fruits.push('mouse');

fruits.unshift('wolf');

fruits.pop();

console.log(Array.isArray(fruits));


console.log(fruits.indexOf('cat'));




const person = {
  givenName: 'Martin',
  age: 26,
  activities: ['running', 'swimming', 'running'],
  address: {
    street: '91 Middle Town',
    city: 'Tampa',
    state: 'FL'
  }
}


console.log(person.name)


console.log(person.hobbies[1]);


console.log(person.address.city);


person.email = 'mpyanev@gmail.com';


const tasks = [
  {
    id: 1,
    text: 'Go out',
    isComplete: false
  },
  {
    id: 2,
    text: 'Do the project',
    isComplete: false
  },
  {
    id: 3,
    text: 'Play with kids',
    isComplete: true
  }
];


console.log(tasks[1].text);


console.log(JSON.stringify(tasks));





for(let i = 0; i <= 10; i++){
  console.log(`Count For: ${i}`);
}


let i = 0
while(i <= 10) {
  console.log(`While Count: ${i}`);
  i++;
}


for(let i = 0; i < tasks.length; i++){
  console.log(` task ${i + 1}: ${tasks[i].text}`);
}


for(let task of tasks) {
  console.log(task.text);
}





tasks.forEach(function(task, i, mytasks) {
  console.log(`${i + 1}: ${task.text}`);
  console.log(mytasks);
});


const taskTextArray = tasks.map(function(task) {
  return task.text;
});

console.log(taskTextArray);


const task1 = tasks.filter(function(task) {

  return task.id === 1; 
});






 If/Else Statement
const x = 30;

if(x === 10) {
  console.log('x is 10');
} else if(x > 10) {
  console.log('x is greater than 10');
} else {
  console.log('x is less than 10')
}


number = '2';

switch(number) {
  case '1':
    console.log('the number is 1');
  case '2':
    console.log('the number is 2');
  default:  
    console.log('the number is neither 1 nor 2')
}


const z = number === '1' ? 10 : 20;




function greet(greeting = 'Hello', name) {
  if(!name) {

    return greeting;
  } else {

    return `${greeting} ${name}`;
  }
}



const greet = (greeting = 'Hello', name = 'Dude') => `${greeting} ${name}`;
console.log(greet(' Hi man'));





function Person(, lastName, birthdate) {
  this.givenName = givenName;
  this.lastName = lastName;
  this.birthdate = new Date(birthdate); 

}

Person.prototype.getBirthYear = function () {
  return this.birthdate.getFullYear();
}


Person.prototype.getFullName = function() {
  return `${this.givenName} ${this.lastName}`
}



const martin = new Person('Martin', 'Yanev', '11-16-99');
const will = new Person('Will', 'Roberts', '1-6-81');

console.log(will);



const name = new String('Sam');
console.log(typeof name); 
const num = new Number(5);
console.log(typeof num); 



class Person {
  constructor(givenName, lastName, birthdate) {
    this.givenName = givenName;
    this.lastName = lastName;
    this.birthdate = new Date(birthdate);
  }

  getBirthYear() {
    return this.birthdate.getFullYear();
  }

  getFullName() {
    return `${this.givenName} ${this.lastName}`
  }
}

const martin = new Person('Martin', 'Yanev', '11-16-99');
console.log(martin.getBirthYear());



console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));

console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('item'));

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));



const ul = document.querySelector('.items');

ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Sergio';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';



btn.addEventListener('hit', e => {
  e.preventDefault();
  console.log(e.target.className);
  document.getElementById('my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
});


const nameInput = document.querySelector('#name');
nameInput.addEventListener('input', e => {
  document.querySelector('.container').append(nameInput.value);
});


