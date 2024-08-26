import { createContext, useReducer, useState } from "react";


export const ContextLec = createContext() 

const ContextLecProvider = ({children}) => {

    const [initialStateLec, setInitialStateLec] = useState([])

    console.log(initialStateLec)

    return(
        <ContextLec.Provider value={{
            initialStateLec,
            setInitialStateLec
        }}>
            {children}
        </ContextLec.Provider>
    )
}

export default ContextLecProvider;