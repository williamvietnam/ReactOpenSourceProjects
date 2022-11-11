// HTML DOM: HTML Document Object Model
// Element: Id, class, tag, CSS selector, HTML collection
//id: getElementById
var headingNode = document.getElementById('headingId');
console.log(headingNode);
//class: getElementsByClassName
var headingNodes = document.getElementsByClassName('headingClass');
console.log(headingNodes)
//tag: 
headingNodes = document.getElementsByTagName('h3');
//CSS selector: (tương tự dùng CSS để selector vào html)
headingNodes = document.querySelector('.div .headingClass');
//HTML collection

var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']
var ul_tag = document.querySelector('ul');

function render(_courses) {
    for (let i = 0; i < _courses.length; i++) {
        var text1 = "<li>"
        var text2 = "</li>"
        _courses[i] = text1.concat(_courses[i]).concat(text2);
    }
    var text = _courses.join("");
    return text;
}

ul_tag.innerHTML = render(courses);
//output: <li>HTML & CSS</li> <li>Javascript</li> <li>PHP</li> <li>Java</li>

var boxElement = document.querySelector('.box');
Object.assign(boxElement.style, {
    with: '200px',
    height: '100px',
    backgroundColor: 'green',
});
console.log(boxElement.style.backgroundColor);

console.log("---------------------------------------------------------");

// DOM events (refercen: https://www.w3schools.com/js/js_htmldom_events.asp)
var boxElement2 = document.querySelector('.box');
boxElement2.onclick = function () {
    alert("sad");
}

// Demo Promise
var promise = new Promise(
    //Executor:
    function (resolve, reject) {
        // Logic
        // Success: resolve()
        // Failture: reject()
    }
);
// use:
promise
    .then(function () {
        console.log("Successfully!")
    })
    .catch(function () {
        console.log("Failture!")
    })
    .finally(function () {
        console.log("Done!")
    })