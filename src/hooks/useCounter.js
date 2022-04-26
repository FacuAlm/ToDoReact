import { useState } from "react"


export const useCounter = (initialState) => {
const [State, setState] = useState(initialState)

const incrementar=()=>{
    setState(State+1)
}

const disminuir=()=>{
    setState(State-1)
}

const reset=()=>{
    setState(initialState)
}

return{
    State,
    incrementar,
    disminuir,
    reset
}

}
