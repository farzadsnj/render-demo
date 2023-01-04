import React,{useReducer} from 'react'

const initialState = 0

const reducer = (state, action) =>{
    switch(action){
        case 'increase' : return state + 1
        case 'decrease' : return state - 1
        case 'reset' : return initialState
        default : return state
    }
}

export const UseReducer = () => {

    const [count, dispatch] = useReducer(reducer, initialState)

    console.log('useReducer render')
  return (
    <div>
        <div>{count}</div>
        <button onClick={()=> dispatch('increase')}>Increase</button>
        <button onClick={()=> dispatch('decrease')}>decrease</button>
        <button onClick={()=> dispatch('reset')}>reset</button>
    </div>
  )
}
