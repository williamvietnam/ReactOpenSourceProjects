import { useEffect } from 'react'
import { useState } from 'react'

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

// //Demo 2
// function EffectHookDemo() {
//     const [title, setTitle] = useState('');
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/posts")
//             .then(response => response.json())
//             .then(posts => {
//                 setPosts(posts);
//             })
//     }, [])

//     return (
//         <div>
//             <input
//                 value={title}
//                 onChange={e => setTitle(e.target.value)}
//             />

//             <ul>
//                 {posts.map(item => (
//                     <li key={item.id}>{item.title}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

// export default EffectHookDemo

// Demo 3:
const tabs = ['posts', 'comments', 'albums']

function EffectHookDemo() {
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts');
    const [showGoToTop, setShowGoToTop] = useState(false);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(posts => {
                setPosts(posts);
            })
    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setShowGoToTop(true);
            } else {
                setShowGoToTop(false);
            }
        }
        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <div>
            {
                tabs.map(item => (
                    <button key={item}
                        style={type === item ? {
                            color: '#fff',
                            backgroundColor: '#333',
                        } : {}}
                        onClick={() => setType(item)}
                    >
                        {item}
                    </button>
                ))
            }

            {posts.map(item => (
                <li key={item.id}>{item.title || item.name}</li>
            ))}

            {showGoToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20
                    }}>
                    Go To Top
                </button>
            )}
        </div>
    )
}

export default EffectHookDemo