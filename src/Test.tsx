import * as React from 'react'

let listeners:any = []
let state = { Counter : 0 }


const setState = (newState:any) =>{
    state = {...state,...newState}
    listeners.forEach((listener:any)=>{
        listeners(state)
    })
}

const useCustom = ()=>{
    const newListener = React.useState()[1]

    React.useEffect(()=>{
        listeners.push(newListener)
    },[])
    return [state,setState]
}

export default useCustom