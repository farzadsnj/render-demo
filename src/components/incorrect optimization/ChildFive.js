import React from 'react'

export const ChildFive = ({name}) => {
    console.log('child five')
  return (
    <div>
        hello {name}
    </div>
  )
}

export const MemoizedChildFive = React.memo(ChildFive)