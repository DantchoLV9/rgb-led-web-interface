import { useState } from "react"

const Input = () => {
    const [color, setColor] = useState("#000000");
    const url = 'ws://localhost:8080'
    const connection = new WebSocket(url)
    connection.onerror = (error) => {
      console.log(`WebSocket error: ${JSON.stringify(error)}`)
    }
    connection.onopen = () => {
        connection.send(color)
    }
    return (<input type="color" name="color" onChange={(e) => setColor(e.target.value)} />)
}

export default Input