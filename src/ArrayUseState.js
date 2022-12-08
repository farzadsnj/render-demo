import React,{useState} from 'react'

const initialState = ['farzad', 'snj']

export const ArrayUseState = () => {
    const [persons, setPersons] = useState(initialState)

    const handleClick =()=>{
        // persons.push('ali')
        // persons.push('123')
        // setPersons(persons)

        const newPerson = [...persons]
        newPerson.push('ali')
        newPerson.push('123')
        setPersons(newPerson)
    }

    console.log('Array rendering')
  return (
    <div>
        <button onClick={handleClick}>Click</button>
        {
            persons.map(person => (
                <div key={person}>{person}</div>
            ))
        }
    </div>
  )
}
