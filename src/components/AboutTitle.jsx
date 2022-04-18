import { useContext } from "react"
import { Context } from "../SharedState"

function AboutTitle () {

    const { state, actions } = useContext(Context);
    
    return (
        <>
            <p>El número es {state.cifra}.</p>
        </>
    )
}

export default AboutTitle