1. <div> What is Sync? </div>
   <div>  --> Sync là đồng bộ, đồng bộ là hành động chạy tuần tự của mã nguồn theo thứ tự</div>

2. <div> What is Async? </div>
   <div>  --> Async là bất động bộ, là hành động đoạn mã 1 được gọi trước đoạn mã 2 nhưng đoạn mã 1 lại được thực thi sau đoạn mã 2</div>

<br></br>

## Promise
### Create Promise:

```
var promise = new Promise(
    //Executor
    function(resolve, reject){
        // Write logic in here
        // if(success) --> call resolve()
        // if(fail) --> call reject()
    }
);
```

- Step 1: Create object Promise by "new" keyword
- Step 2: Write function to executor when promise called

<div>After initialize promise object with executor function inside, we can use the following:</div>

<br>--------------------------------------------------------------------------------------</br>

### Usage

```
promise
   .then(function(){
     console.log("Successfully!");
    // todo("When promise executed, if logic of promise call to resolve() --> callback here will called")
   })
   .catch(function(){
     console.log("Failure!");
    // todo("When promise executed, if logic of promise call to reject() --> callback here will called")
   })
   .finally(function(){
     console.log("Done!");
    // todo("When either resolve() or reject() is called --> callback here will called")
   });
```

<div> Promise include 3 status: Pending, Fulfilled, Rejected </div>

<br>________________________________________________________________________________________</br>

#### Problem: Callback Hell / Pyramid of doom
- Callback hell (hay Pyramid of doom) hiểu đơn giản là gồm rất nhiều các callback lồng ở trong nhau mà callback bên trong lại cần nhận giá trị trả về của callback bên ngoài để tiếp tục được thực thi và hành động cứ tiếp diễn mãi thế (Google search để rõ hơn về hình dạng)
- Weakness: Hành động này khiến mã nguồn trông rất phức tạp và có thể đi vào ngõ cụt mà ko nhận đc kqua như mong đợi
- Từ weakness như trên nên ES6 ra đời khái niệm Promise với tính chất chain để giải quyết vấn đề callback hell

## Promise (chain)
- Define: tính chất chain của promise giúp cho ta có thể viết nhiều các khối mã then nối nhau
và giá trị trả về của function trong khối mã then chạy trước chính là tham số đầu vào của function trong khối mã then chạy sau
- Apply: thường được ứng dụng nhiều nhất trong việc call api sử dụng fetch() của ES6
- Demo:
```
promise
   .then(function(){
     return 1;
   })
   .then(function(data){
     console.log(data);  //logger: 1
     return 2;
   })
   .then(function(data){
     console.log(data);  //logger: 2
     return 3;
   })
   .then(function(data){
     console.log(data);  //logger: 3
   })
   .finally(function(){
     console.log("Done!");
   });
```

