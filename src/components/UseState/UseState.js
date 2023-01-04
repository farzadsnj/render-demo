import React, {useState} from 'react'

export default function UseState() {
    const [count, setCount] = useState(0)
    console.log('render')
  return (
    <div>
        <button onClick={()=> setCount(c=>c+1)}>Count -{count}</button>
    </div>
  )
}
