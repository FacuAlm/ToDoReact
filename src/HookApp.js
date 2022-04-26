import React from 'react'
import { CounterApp } from './components/01-useState/CounterApp'
import { CounterCustom } from './components/CounterCustom'

export const HookApp = () => {
  return (
    <div>
        <h1>Hola Mundo</h1>

        <CounterApp/>
        <CounterCustom/>
        
    </div>
  )
}
