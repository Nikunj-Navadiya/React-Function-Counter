import React from 'react'
import './counter.css'

const Counter = ({ no, plus, reset, minus }) => {
    return (
        <div className="counter-container">
            <h1>Counter</h1>
            <h2 >{no}</h2>
            <button onClick={() => plus()}>+</button>
            <button onClick={() => reset()}>Reset</button>
            {
                no === 0 ? (
                    <button disabled onClick={() => minus()}>-</button>
                ) : (
                    <button onClick={() => minus()}>-</button>
                )
            }
        </div>
    )
}

export default Counter
