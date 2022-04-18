import { useContext } from "react"
import { Context } from "../SharedState"

function AboutTitle () {

    const { state, actions } = useContext(Context);

    function sumaHandler () {
        const newState = { ...state };
        newState.cifra ++;
        actions.setState(newState);
    }

    return (
        <>
            <p>El número es {state.cifra}.</p>
            <button onClick={sumaHandler}>Suma 1</button>
        </>
    )
}

export default AboutTitle