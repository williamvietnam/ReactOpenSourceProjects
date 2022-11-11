// 1. Var/ Let, Const: Scope, Hosting
// 2. Const/ Var, Let: Assignment

// Code block: if else, loop, {}, etc...


/**
 * 1. Var so với Let/Const:
 * - Giống: cả 3 đều dùng để khai báo biến
 * - Khác: 
 *   + với var là kiểu khai báo global nên dù khai báo ở đâu cũng có thể truy cập dc
 *   + qsat vd 2 và vd 3
 * 2. Const vs Var/Let:
 *  - Khác là: const kiểu khai báo hằng số nên chỉ dc gán giá trị 1 lần và ko đổi
 * Nhưng chú ý là đối tượng a mà khai báo kiểu const thì các thuộc tính của nó vẫn có thể gán thay đổi được
 */

// vd1: let và const ko phải khai báo global nên khai báo như bên dưới thì biến course sẽ ko thể truy cập dc từ bên ngoài block {}
// {
//     let course = 'Javascript basic!';
// }
// console.log(course)

//vd2: sử dụng var
// step1: gán giá trị vào biến a
// a = 5;
// step2: khai báo kiểu cho biến a
// var a;
// step3: hiển thị biến a ra màn hình console
// console.log(a); // ko bị lỗi do var có tính chất hosting nên dù khai báo sau khi gán thì trình thông dịch vẫn hiểu

//vd3: sử dụng let (const tương tự)
// step1: gán giá trị vào biến b
// b = 5;
// step2: khai báo kiểu cho biến b
// let b;
// step3: hiển thị biến b ra màn hình console
// console.log(b); // báo lỗi SyntaxError/ReferenceError do biến b chưa được định nghĩa nên ko thể gán giá trị

//___________________________________________Arrow function____________________________________
// Way 1: function declaration | cách định nghĩa function cơ bản
function logger(log) {
    console.log(log);
}
logger('function declaration');

// Way 2: function express | cách định nghĩa function qua biến
const logger2 = function (log) {
    console.log(log);
}
logger2('function express')

// Way 3: arrow function
const logger3 = (log) => {
    console.log(log);
}
logger3('arrow function')

// Demo arrow function (continue)
const _sum = (a, b) => a + b; // sau mũi tên là block {} vs return a + b;

//___________________________________________Class_____________________________________________
// tương tự như Class trong Java

//______________________________________Destructuring, Rest____________________________________
var array = ['Javascript', 'PHP', 'Ruby']

// Old way:
// var a = array[0];
// var b = array[1];
// var c = array[2];
// New way with ECMAScrip6:
var [a, b, c] = array; // use Destructuring

console.log(a, b, c);

//demo Destructuring (continue)
var _course = {
    _name: 'JavaScript',
    _price: 1000,
    image: 'image-address',
}

// var{_name, _price, image} = _course; // use Destructuring
var{_name, ...rest} = _course; // use Rest
// console.log('coures object: ' +_name, _price, image)
console.log('rest: ' + rest); //
