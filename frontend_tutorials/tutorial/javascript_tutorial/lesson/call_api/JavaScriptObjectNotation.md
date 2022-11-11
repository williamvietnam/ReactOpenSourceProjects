const jsonString = '{"name": "Son Dang", "age": 18}'
<br></br>
const obj = JSON.parse(jsonString)
<br></br>
Phương thức JSON.parse nhận vào 1 chuỗi JSON và chuyển hóa nó thành dạng dữ liệu gốc.
<br></br>
______________________________________________________________________________
var object = {
    name: 'Son Dang',
    age: 18
}
<br></br>
var jsonString = JSON.stringify(object)
<br></br>
Phương thức JSON.stringify dùng để chuyển dạng dữ liệu gốc thành dạng JSON
<br></br>
______________________________________________________________________________

Sync: Đồng bộ | Async: Bất đồng bộ
<br></br>
Async: setTimeout, setInterval, fetch, XMLHttpRequest, file reading, request animation frame
--> Sử dụng Callback
<br></br>
______________________________________________________________________________
Promise có 3 trạng thái: <br></br>
Pending <br></br>
Fulfilled <br></br>
Rejected <br></br>