import React, { useReducer, useState } from 'react'

  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1};
      case "DECREMENT":
        if(state.count >= 1) {
          return {count: state.count - 1} 
        } else {
          return {
           count: state.count
         }
       }
    default:
      return state;
    }
  }

const App = () => {
  const [counter, setCounter] = useState(0)
  const [state, dispatch] = useReducer(reducer, {count: 0})

  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    if (counter >= 1) { 
      setCounter(counter - 1)
    }  
  }

  // const oddOrEven = (param) => {
  //   if (param == 0) {
  //     return null
  //   } else if (param % 2 == 0) {
  //     return "Is Even"
  //   } else {
  //     return "Is Odd"
  //   }
  // }

  const oddOrEven = (param) => {
   return param == 0 ? null : param % 2 == 0 ? "Is Even" : "Is Odd"
  }
  

  return <div>
    <br></br>
    <br></br>
    <br></br>
    <h1>{counter} {oddOrEven(counter)}</h1> 
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <br></br>
    <br></br>
    <br></br>
    <h1>{state.count} {oddOrEven(state.count)}</h1>
  <button
    onClick={() => {
     dispatch({type: "INCREMENT"})
    }}
  >Increment</button>
  <button
  onClick={() => {
    dispatch({type: "DECREMENT"})
  }}
  >Decrement</button>
  </div>
}

export default App





