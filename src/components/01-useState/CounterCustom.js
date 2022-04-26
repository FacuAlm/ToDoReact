import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterCustom = () => {

    const {State, incrementar, disminuir, reset}= useCounter(1000)
  return (
    <>
    
    <h2>Counter Custom: {State}</h2>

    <button onClick={incrementar} className='btn btn-success'>+1</button>
    <button onClick={reset} className='btn btn-warning'>Reset</button>
    <button onClick={disminuir} className='btn btn-danger '>-1</button>
    

    
    </>
  )
}
