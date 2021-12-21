import React, { useReducer, useState } from 'react'

  const reducer = (state, action) => {
switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
    }
  }

  

const App = () => {
  const [counter, setCounter] = useState(0)
  const [inputValue, setInputValue] = useState('Pedro')
  const [state, dispatch] = useReducer(reducer, {count: 0, showText: true })



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

  let onChange = (e) => {
    const newValue = e.target.value
    setInputValue(newValue)
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
    <br></br>
    <br></br>
    <br></br>
    <h1>{state.count}</h1>
  <button
    onClick={() => {
     dispatch({type: "INCREMENT"})
     dispatch({type: "toggleShowText"})
    }}
  >Click me</button>
  {state.showText && <p>Even</p>}


  </div>
}

export default App