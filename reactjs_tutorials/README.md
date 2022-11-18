Giải thích các thuật ngữ của React:
  1. Mounted vs Unmounted: 
  - Trước tiên, cần hiểu React Component là gì?
   --> Component chính là function của JS nhưng trong React ta gọi nó là component, chúng ta có thể "gọi" nó như 1 thẻ XML ở trong một Component khác
  - Khái niệm Mounted component vào trong một component khác tương tự như khái niệm Call một function trong một function khác
  - Tóm lại cùng một hình dáng như vậy nhưng trong ngữ cảnh React chúng ta sử dụng một thuật ngữ khác cho hành động CALL một FUNCTION thành MOUNTED một COMPONENT
  
  2. Props: (xem demo tại lesson3_props.html của chapter2_JSX)
  - Khái niệm Component cha và Component con: Một component dc tạo ra có thể mount vào trong một component khác dưới dạng thẻ XML, component đc mount vào trong đó dc gọi là component con, còn component chứa component dc mounted đó gọi là component cha
  - Props chính là các đối số của component, props đc truyền từ component cha sang component con, tại component con chúng ta có quyền nhận giá trị props đó để xử lý và hiển thị, ta ko có quyền sửa value của props đó

  3. State: cũng tương tự như props dùng để chứa các value của component nhưng khác là State chứa value bên trong Component, có thể thay đổi value của state

  4. So sánh Props vs State: 
  - Giống: Props vs State đều là các thuộc tính (dùng từ thuộc tính kbiet chuẩn ko, có thể thay là "thứ gì đó dc sinh ra để...") lưu trữ dữ liệu/thông tin của component để ta xử lý và render lên UI 
  - Khác: Giả sử ta có một component có các đối số, tạm gọi là componentPresent, 
    <p> --> khi componentPresent đc mount vào một component cha và đc nhận các props tương ứng truyền từ component cha sang thì tại componentPresent ta có thể sử dụng các props đó để render lên UI nhưng ko thể thay đổi dc value của các props này.</p>
    <p> --> với State, nó đc sinh ra bên trong componentPresent, đồng thời State chỉ có thể được sử dụng ở trong một component sinh ra nó. Ta có thể xử lý, thay đổi value của nó rồi render ra UI, thường hay sử dụng vs useState hook </p>



  8. useMemo: giúp tránh thực hiện lại một logic ko cần thiết



React.memo được gọi là Higher order component (HOC). Dùng để ghi nhớ các props của một component, quyết định xem có render lại component đó hay không để tối ưu về hiệu năng.

Ngắn gọn React.memo dùng để xử lý component tránh re-render trong tình huống không cần thiết.