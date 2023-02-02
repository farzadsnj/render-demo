import React,{useState} from 'react'

const initState = {
    fname: 'farzad',
    lname: 'snj',
}

export const ObjectUseState = () => {
    const [person, setPerson] = useState(initState)

    const changeName = () =>{
        // person.fname = 'ali'
        // person.lname = '123'
        // setPerson(person)
        const newPerson = {...person}
        newPerson.fname = 'ali'
        newPerson.lname = '123'
        setPerson(newPerson)
    }

    console.log('ObjectUseState Render')

  return (
    <div>
        <button onChange={changeName}>{person.fname} {person.lname}</button>
    </div>
  )
}
