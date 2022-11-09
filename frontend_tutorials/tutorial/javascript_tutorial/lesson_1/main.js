// alert("Hello World")

/**
 * Build in function:
 1. Alear
 2. Console
 3. Confirm
 4. Prompt
 5. Set timeout
 6. Set interval
 * */

var text = ' Learn JS and JS at JS ';
var age = 24;
// alert(age);
// console.log(typeof text)

// Javascript string methods:
// 1. Length
console.log('Length: ' + text.length);
// 2. Find index
console.log('indexOf text JS:' + text.indexOf('JS'));
console.log('lastIndexOf text JS:' + text.lastIndexOf('JS'));
// 3. Cut string
console.log('Text after cut: ' + text.slice(7, 16));
// 4. Replace
console.log('Text after replace: ' + text.replace('JS', 'Javascript'));
// 5. Convert to upper case
console.log('Text after upper case: ' + text.toUpperCase());
// 6. Conver to lower case
console.log('Text after lower case: ' + text.toLowerCase());
// 7. Trim
console.log('Text after Trim: ' + text.trim());
//8. Split
console.log('Text after Split: ' + text.split('JS'));

// Arrays in Javascript:
var languages = [
    'Javascript',
    'HTML',
    'CSS'
]
console.log('Item poped: ' + languages.pop()); // CSS
console.log('Size of arrays after push: ' + languages.push('CSS', 'Dart', 'Java'));

// demo Date object:
var date = new Date();
var year = date.getFullYear();
console.log(year);