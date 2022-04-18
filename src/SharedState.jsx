import { useState, createContext } from "react";

export const Context = createContext();

export function ContextProvider ( {children} ) {

    const [ sharedState, setSharedState ] = useState({
        state: {
            saludo: "Hola",
            cifra: 67
        },
        actions: {
            
        }
    });

    return (
        <Context.Provider value={sharedState}>
            {children}
        </Context.Provider>
    )
}