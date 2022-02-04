import { useState } from 'preact/hooks'

export default function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div class="m-4">
            <span>Count: {count}</span>
            <button class="block border-blue-700 border-solid border-2 p-2" onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}