import { useEffect, useState } from "react"

export default function App(){

  const [counter, setCounter] = useState(0)


  useEffect(() => {
    alert("O efeito colateral foi ativado")
  }, [])

  return(
    <>
      <h1>Conhecendo o useEffect</h1>
      <button onClick={() => setCounter(count => count + 1)}>
        Contador: {counter}
      </button>
    </>
  )
}