const name = prompt('What is your name?');
alert('hi ' + name);




const birthday = prompt ('What year was you born in?');
const currentYear = 2024 ;
const age = currentYear - birthday;
alert('You are ' + age + ' years');





const sideSquare = prompt('Enter lenght side square');
const perimeter = sideSquare * 4;
alert('Side square equals ' +  perimeter);






const radius = prompt('Enter the radius of the circle');
const circleArea = Math.PI * radius ** 2;
alert('The area of the circle ' + circleArea );





const distance = prompt('Enter your distance ');
alert(' Great!');
const time = prompt('How much time do you want to spend?');
const speed = distance / time ;
alert('result ' + speed +' км/ч')






const dollars = prompt ('Enter the amount in dollars');
const exchange = 0.93;
const euros = dollars * exchange;
alert('Result ' + euros);





const GB = 1024;
const flash = Number(prompt('What is the capacity of your flash drive in GB?'));
const size = Math.floor(flash * 1000 / GB);
alert('result ' + Math.floor(flash * 1000 / GB));





