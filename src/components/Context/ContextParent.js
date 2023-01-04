import React,{useState} from 'react'
import { MemoizedChildA } from './ContextChildren'

export const CountContext = React.createContext()
const CountProvider = CountContext.Provider

export const ContextParent = ({children}) => {
    const [count, setCount] = useState(0)

    console.log('ContextParent Render')
  return (
    <>
        <button onClick={()=> setCount(c => c+1)}>count {count}</button>
        <CountProvider value={count}>
            {children}
            {/* <MemoizedChildA /> */}
        </CountProvider>
    </>
  )
}
