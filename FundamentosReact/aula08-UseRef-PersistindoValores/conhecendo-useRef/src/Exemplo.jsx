import { useRef } from "react"

export default function Exemplo(){

    const inputRef = useRef(null)

    return(
        <>
            <h2>Exemplo de useRef com o DOM</h2>

            <input ref={inputRef} type="text" />
            <button onClick={() => {
                console.log(inputRef.current)
                inputRef.current.focus()
                inputRef.current.style.backgroundColor = "#F64348"

                let comando = confirm(`Deseja alterar a cor de fundo do Input ? `)

                if(comando){
                    inputRef.current.style.backgroundColor = "#0000ff"
                }

            }}>Focar input</button>

            <hr />
        </>
    )
}