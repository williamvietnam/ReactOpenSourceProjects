import { useEffect } from 'react'
import {useState} from 'react'

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
// 2. useEffect(callback, [])
//  - Chỉ gọi callback 1 lần sau khi component mounted
// 3. useEffect(callback, [dependencies])
//  - Callback sẽ được gọi lại mỗi khi dependencies thay đổi


function EffectHookDemo() {
    const [title, setTitle] = useState('');

    useEffect(() => {
        document.title = title;
    })

    return (
        <div>
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
        </div>
    )
}

export default EffectHookDemo