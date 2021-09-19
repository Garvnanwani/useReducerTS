import React, { useReducer, useState } from 'react'
import './App.css'
import { reducer } from './reducer'

// useReducer is basically alternative to useState, jab tumahre paas kaafi saare states or actions ho, lie kind of what redux does
// separating logic from components

// useState causes rerender on change, while useRef doesnt


// HOW YOU MAKE A COUNTER WITH USESTATE
// function App(): JSX.Element {
//   const [count, setCount] = useState<number>(0)

//   return (
//     <div className="App">
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count => count + 1)}>Increase</button>
//       <button onClick={() => setCount(count => count - 1)}>Decrease</button>
//     </div>
//   )
// }

// export default App

// USEREDUCER - Separating logic from UI


// HOW TO MAKE A COUNTER USING USEREDUCER
function App(): JSX.Element {

  const [store, dispatch] = useReducer(reducer, {
    count: 0,
    name: "naaz"
  })

  return (
    <div className="App">
      <h1>{store.count}</h1>
      <h1>{store.name}</h1>
      <button onClick={() => dispatch('increase')}>Increase</button>
      <button onClick={() => dispatch('decrease')}>Decrease</button>
    </div>
  )
}

export default App
