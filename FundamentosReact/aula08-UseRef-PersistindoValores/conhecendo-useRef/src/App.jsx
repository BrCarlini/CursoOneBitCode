import { useRef, useState } from "react"
import Exemplo from "./Exemplo"

export default function App(){

  const ref = useRef(0)

  const [state, setState] = useState(0)


  return(
    <div>

      <Exemplo/>
      
      <h2>Conhecendo useRef</h2>
      <hr />

      <p>useRef: {ref.current}</p>
      <p>useState: {state}</p>

      <button onClick={() => ref.current++}>Aumentar Ref</button>

      <button onClick={() => setState(state++)}>Aumentar State</button>

      <button onClick={() => {
        alert(`
        useRef: ${ref.current}
        `)
      }}>Exibir Ref</button>

    </div>
  )
}