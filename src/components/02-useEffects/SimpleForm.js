import React, { useEffect, useState } from 'react'

export const SimpleForm = () => {

  const [Form, setForm] = useState({
      name:'',
      email:''
  })  

  const{name, email}=Form

useEffect(()=>{
    console.log('hey!')
}, [])

const handleInput=(e)=>{
    console.log(e.target)
    setForm({
        ...Form,[e.target.name]:e.target.value
    })
}

  return (
    <>
    
    
    <h1>Hola Form</h1>

    <div className='form-group'>
        <input type="text"
        name="name"
        className='form-control'
        placeholder='Tu nombre'
        vale={name}
        onChange={handleInput}
        />

    </div>
    
    
    </>
  )
}
