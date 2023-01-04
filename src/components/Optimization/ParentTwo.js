import React, {useState} from 'react'
import { MemoizedChildTwo } from './ChildTwo'
// import { ChildOne } from './ChildOne'

export default function ParentTwo() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('farzad')
    console.log('parentTwo')
  return (
    <div>
        <button onClick={()=> setCount(c=>c+1)}>Count -{count}</button>
        <button onClick={()=> setName('farzadsnj')}>change name</button>
        <MemoizedChildTwo name={name}/>
        {/* <ChildOne /> */}
    </div>
  )
}
