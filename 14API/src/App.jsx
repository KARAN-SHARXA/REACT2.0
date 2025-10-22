import React, { useState } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState(null)

  const getData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
      setData(response.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>

      <div>
        {data && (
          <h3>
            Hello, Task ID: {data.id}, Title: {data.title}
          </h3>
        )}
      </div>
    </div>
  )
}

export default App
