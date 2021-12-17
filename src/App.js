import React, { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)
  const [inputValue, setInputValue] = useState('Pedro')

  const increment = () => {
    setCounter(counter + 1)
  }

  const changeIt = (e) => {
    setInputValue(e.target.value)
  }

  const decrement = () => {
    if (counter >= 1) { 
      setCounter(counter - 1)
    }  
  }


 

  return <div>
    <input onChange={changeIt} placeholder='Enter it' />
    {inputValue}
    <br></br>
    <br></br>
    <br></br>
    {counter} 
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
  </div>
}

export default App