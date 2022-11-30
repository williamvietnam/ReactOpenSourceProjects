
/**
 * useEffect(callback, [dependencies])
 * 1. callback de lam gi?
 * - Update DOM
 * 2. Call API
 * 3. Listen DOM events
 *    - Scroll
 *    - Resize
 * 4. Clean 
 *    - Remove listener / Unsubscribe
 *    - Clear timer
 */

//-----------------------------
// 1. useEffect(callback)
//  - Gọi callback mỗi khi component re-render
//  - Gọi callback sau khi component thêm element vào DOM
//  - Callback luôn dc gọi sau khi component mounted
//    --> Nhược điểm: Mỗi khi component đc gọi lại do useState thì useEffect lại call api lại
// 2. useEffect(callback, [])
//  - Chỉ gọi callback 1 lần sau khi component mounted
//    --> Ưu điểm: Khi component chứa việc call api có bị gọi lại thì useEffect đó cũng ko call api lại lần nữa (Xem demo 2)
// 3. useEffect(callback, [dependencies])
//  - Callback sẽ được gọi lại mỗi khi dependencies thay đổi
//    (Qsat demo3)