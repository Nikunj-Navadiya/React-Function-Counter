import { useState } from 'react'
import Counter from './Counter'

function App() {
    const [cnt, setCnt] = useState(0)
    const increment = () => {
        setCnt(cnt + 1)
    }
    const decrement = () => {
        setCnt(cnt - 1)
    }
    const Reset = () => {
        setCnt(0)
    }
    return (
        <Counter
            no={cnt}
            plus={increment}
            minus={decrement}
            reset={Reset}
        />
    )
}

export default App



