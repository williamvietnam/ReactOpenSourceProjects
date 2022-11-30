useLayoutEffect hook có cơ chế hoạt động gần như useEffect, chỉ có khác biết về thứ tự render UI bên trong
<br></br>

#### Các bước hoạt động bên trong của 2 hooks trên:
#### * useEffect
1. Cập nhật lại state
2. Cập nhật DOM (mutated)
3. Render lại UI
4. Gọi cleanup nếu deps thay đổi (cleanup chính là bước return bên trong useEffect)
5. Gọi useEffect callback

#### * useLayoutEffect 
1. Cập nhật lại state
2. Cập nhật DOM (mutated)
3. Gọi cleanup nếu deps thay đổi (sync)
4. Gọi useLayoutEffect callback (sync)
5. Render lại UI 
