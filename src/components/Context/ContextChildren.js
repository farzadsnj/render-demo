import React, {useContext} from 'react'
import { CountContext } from './ContextParent'

export const ChildA = () => {
    console.log('child A render')
  return (
    <>
        <div>child A</div>
        <ChildB />
    </>
  )
}

export const MemoizedChildA = React.memo(ChildA)

export const ChildB =() =>{
    console.log('child B render')
    return(
        <>
            <div>child B</div>
            <ChildC />
        </>
    )
}

export const ChildC =() =>{
    const count = useContext(CountContext)
    console.log('child C render')
    return(
        <>
            <div>child C count = {count}</div>
        </>
    )
}