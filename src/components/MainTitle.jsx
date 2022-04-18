import { useContext } from "react"
import { Context } from "../SharedState"

function MainTitle () {

    const { state } = useContext(Context);

    return (
        <p>{state.saludo}, humano.</p>
    )
}

export default MainTitle