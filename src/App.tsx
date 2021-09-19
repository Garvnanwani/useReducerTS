import React, { useReducer, useState } from 'react'
import './App.css'
// import { reducer } from './reducer'

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
// function App(){
//   const [store, dispatch] = useReducer(reducer, {
//     count: 0,
//     name: "naaz"
//   })

//   return (
//     <div className="App">
//       <h1>{store.count}</h1>
//       <h1>{store.name}</h1>
//       <button onClick={() => dispatch('increase')}>Increase</button>
//       <button onClick={() => dispatch('decrease')}>Decrease</button>
//     </div>
//   )
// }

// export default App

interface State{
  count: number;
  name: string;
}
type Action = "increase"|"decrease"


const reducer = (state: State, action:Action): State =>{
  if (action ==="increase"){

      if (state.count>=0) {
        return {
          count: state.count+1,
          name: "positive"
      }
      }
      if (state.count<0) {
        if(state.count===-1) {
          return{
            count: state.count+1,
          name: "non-negative"
        }
        }
        return {
          count: state.count+1,
          name: "negative"
        }
      }

  }

  if(action ==="decrease"){

    if (state.count>0) {
      if(state.count===1) {
        return{
          count: state.count-1,
        name: "non-negative"
      }
      }
      return {
        count: state.count-1,
        name: "positive"
    }
    }
    if (state.count<=0) {
      return {
        count: state.count-1,
        name: "negative"
    }
    }

}
return state
}


 const App=()=>{

   const store={
     count:0,
     name: 'non-negative'
   }
   const [state, dispatch] = useReducer(reducer, store)

   return(
     <div className="App">
       <h2>{state.count}</h2>
       <h2>{state.name}</h2>
       <button onClick={()=>dispatch("increase")}>increase</button>
       <button onClick={() => dispatch('decrease')}>decrease</button>
     </div>
   )
 }
 export default App;