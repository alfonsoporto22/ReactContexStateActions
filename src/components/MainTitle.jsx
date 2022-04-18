import { useContext } from "react"
import { Context } from "../SharedState"

function MainTitle () {

    const { state, actions } = useContext(Context);

    return (
        <p>{state.saludo}, humano.</p>
    )
}

export default MainTitle