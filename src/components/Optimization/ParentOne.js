import React, {useState} from 'react'
// import { ChildOne } from './ChildOne'

export default function ParentOne({children}) {
    const [count, setCount] = useState(0)
    console.log('parentOne')
  return (
    <div>
        <button onClick={()=> setCount(c=>c+1)}>Count -{count}</button>
        {children}
        {/* <ChildOne /> */}
    </div>
  )
}
