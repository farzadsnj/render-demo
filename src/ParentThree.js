import React, {useState} from 'react'
import { MemoizedChildFour } from './ChildFour'
// import { MemoizedChildThree } from './ChildThree'
// import { MemoizedChildTwo } from './ChildTwo'
// import { ChildOne } from './ChildOne'

export default function ParentThree() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('farzad')
    console.log('parentThree')
  return (
    <div>
        <button onClick={()=> setCount(c=>c+1)}>Count -{count}</button>
        <button onClick={()=> setName('farzadsnj3')}>change name</button>
        <MemoizedChildFour name={name}/>
        {/* <MemoizedChildThree name={name}>
            <strong>hello</strong>
        </MemoizedChildThree> */}
        {/* <ChildOne /> */}
    </div>
  )
}
