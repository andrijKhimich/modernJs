// varibles

// let age = 25;
// let year = 2019;

// console.log(age, year);

// age = 30;
// console.log(age);

// const points = 100;

// console.log(points);

// var score = 75;
// console.log(score);

// ****************************************************************

// data types

// numbers - 1,2,3,100,3.14 Nan
// strings - 'helo world', "hello world"
// boolean - true / false
// Null - explicity set a variable with no value
// underfine - for variables that have not yet been defined
// objects - complex data structures - Arrays, Dates, Literals etc
// symbol - used with objects

// ****************************************************************

// strings

// console.log('Helo world');
// let email = 'andrijkhimich@gmail.com';
// console.log(email);  

// sctring concatination

// let firstName = 'Brandon';
// let lastName = 'Sanderson';
// let fullName = firstName + ' ' + lastName;
// console.log(fullName);

// getting characters

// console.log(fullName[2]);

// string lenght

// console.log(fullName.length);

// string methoods

// console.log(fullName.toUpperCase());
// let lower = fullName.toLowerCase();
// console.log(lower, fullName);

// let result = email.indexOf('@'); // argument position
// let result = email.lastIndexOf('m'); // last position of argument in the sentence
// let result = email.slice(0, 10); // from - to
// let result = email.substr(0, 3); // from - to how many characters
// let result = email.replace('m', 'w'); // replacce first argument(first character in the sentence) to the second
// console.log(result);

// ****************************************************************

// numbers

// let radius = 10;
// const pi = 3.14;

// console.log(radius, pi);

// math operators +, -, *, /, **, %;
// console.log(10 / 2); // 5

// let result = radius % 3; // 1

// let result = pi * radius**2; // 314

// order of operation - B I D M A S;

// let result = 5 * (10 - 3) ** 2;
// console.log(result);

// let likes = 10
// likes = likes + 1; // 11
// likes++; // 11
// likes--; // 9
// likes += 10; // 20
// likes += 5; // 5
// likes *= 2; // 20
// likes /= 2; // 5
// console.log(likes);

// NaN - not a number
// console.log('Hello' / 5); // Nan

// concatenate numbers
// let result = 'the blog has ' + likes + 'likes';
// console.log(result);

// ****************************************************************

//template strings

const title = '"Best reads of 2019"';
const author = 'Andrew';
const likes = 30;

//concatination way
// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';\
// console.log(result); 

// template string
let result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

// creating html template

let html = `
  <h2 class="title-2">${title}</h2>
  <p>By ${author}</p>
  <span>has ${likes} likes</span>
  `;

console.log(html);  

