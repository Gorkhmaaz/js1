/////Task 1
const name = prompt('What is your name?');
alert('hi ' + name);



/////Task 2
const birthday = prompt ('What year was you born in?');
const currentYear = 2024 ;
const age = currentYear - birthday;
alert('You are ' + age + ' years');




/////Task 3
const sideSquare = prompt('Enter lenght side square');
const perimeter = Math.floor(sideSquare * 4);
alert('Side square equals ' +  perimeter);





///////Task 4
const radius = prompt('Enter the radius of the circle');
const circleArea = Math.floor(Math.PI * radius ** 2);
alert('The area of the circle ' + circleArea );




/////Task 5
const distance = prompt('Enter your distance ');
alert(' Great!');
const time = prompt('How much time do you want to spend?');
const speed = distance / time ;
alert('result ' + speed +' км/ч')





//////Task 6
const dollars = prompt ('Enter the amount in dollars');
const exchange = 0.93;
const euros = dollars * exchange;
alert('Result ' + euros);





////Task 7
const flash = Number(prompt('What is the capacity of your flash drive in GB?'));
const GB = 1024;
const size = Math.floor(flash * 1000 / GB);
alert('result ' + Math.floor(flash * 1000 / GB));



////Task 9

nmb = prompt('Enter three-digit number ');
let a = Number(nmb % 10);
let b = Number((nmb - a) / 10 % 10);
let c = Number((nmb - a - b * 10) / 100);
alert('Turned: ' + (a * 100 + b * 10 + c));




////Task 10
let num = prompt('Enter a number for check: ');
num = Number(num);
alert((Number(num) % 2 == 0) ? "Countable" : "Uncountable");





