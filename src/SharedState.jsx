import { useState, createContext, useEffect } from "react";

export const Context = createContext();

export function ContextProvider ( {children} ) {

    const [ sharedState, setSharedState ] = useState({
        saludo: "Hola",
        cifra: 23
    });

    const [ sharedActions, setSharedActions ] = useState({
        setState: setSharedState,
    })

    const [ sharedContext, setSharedContext ] = useState({
        state: sharedState,
        actions: sharedActions
    })

    useEffect(
        ()=>{
            setSharedContext({
                state: sharedState,
                actions: sharedActions
            })
        },
        [sharedState, sharedContext]
    )

    return (
        <Context.Provider value={sharedContext}>
            {children}
        </Context.Provider>
    )
}