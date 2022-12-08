import React, { useState } from 'react'

function Counter () {
    function resetCounter () {
        setCounter (0)
    }

    const [counter, setCounter] = useState(0)
    function incrementCounter() {
        setCounter((prevCounter) => prevCounter + 1)
    }
    function decrementCounter() {
        setCounter(counter - 1)
    }    
    return(
        <div>
            <button onClick={decrementCounter}>-</button>
                {counter}
            <button onClick={incrementCounter}>+</button>
            <button onClick={resetCounter}>Reset</button>
        </div>
    )
}

export default Counter 