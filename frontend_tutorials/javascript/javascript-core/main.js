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

//-----------------------------------------------------------------------------------
// demo reduce():
var courses = [
    { id: 1, name: 'ReactJs', coin: 100 },
    { id: 2, name: 'ReactJs', coin: 100 },
    { id: 3, name: 'iOS', coin: 100 },
    { id: 4, name: 'Flutter', coin: 100 },
    { id: 5, name: 'ReactNative', coin: 100 },
]

var _courses = courses.filter(function (currentValue, index, arr) {
    return currentValue.name === 'ReactJs'
})

var totalCoin = _courses.reduce(function (total, currentValue, currentIndex, arr) {
    return total = total + currentValue.coin;
}, 0);

console.log('totalCoint =  ' + totalCoin)

// Exercise about reduce method and filter method:
var watchList = [
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
    }
];

//Way 1:
function calculateRating(_arrays) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < _arrays.length; i++) {
        if (_arrays[i]['Director'] === 'Christopher Nolan') {
            sum = sum + parseFloat(_arrays[i].imdbRating);
            count++;
        }
    }
    return sum / count;
}

//Way 2: use filter() vs reduce()
function calculateRating2(_arrays) {
    let _arraysTemp = _arrays.filter(function (currentValue, currentIndex, arr) {
        return currentValue.Director === 'Christopher Nolan'
    });
    let totalImdbRating = _arraysTemp.reduce(function (total, currentValue, currentIndex, arr) {
        return total + Number(currentValue.imdbRating);
    }, 0)
    return totalImdbRating / (_arraysTemp.length)
}

// Expected results
console.log('Demo reduce method: ' + calculateRating2(watchList)); // Output: 8.675

//-----------------------------------------------------------------------------------

// Custom reduce2 method:
Array.prototype.reduce2 = function (callback, result) {
    for (let i = 0; i < this.length; i++) {
        callback(result, this[i], i, this)
    }
}

//-----------------------------------------------------------------------------------

function arrToObj(_arrays) {
    var result = _arrays.reduce(function (total, currentValue, currentIndex, arr) {
        currentIndex = currentValue[0];
        total[currentIndex] = currentValue[1];
        return total;
    }, new Object())
    return result;
}

function arrToObj2(_arrays) {
    var _obj = new Object();
    for (let i = 0; i < _arrays.length; i++) {
        var currentIndex = _arrays[i][0]
        _obj[currentIndex] = _arrays[i][1]
    }
    return _obj;
}

// Expected results:
var arr = [
    ['name', 'William Nguyen'],
    ['age', 25],
    ['address', 'Hanoi'],
    ['Job', "Developer"],
];
console.log(arrToObj2(arr)); // { name: 'Sơn Đặng', age: 18 }

// Callback demo:
function myFunction(param) {
    if (typeof param === 'function') {
        param('Hello, i am demo callback function');
    }
}

function myCallBack(value) {
    console.log('Value', value);
}
myFunction(myCallBack)

