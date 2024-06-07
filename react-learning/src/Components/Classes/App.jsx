import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('Did update')
  })

  useEffect(() => {
    console.log('Did Mount')

    return () => {
      console.log('Will Amount')
    }
  }, [])

  useEffect(() => {
    console.log('With Dependecy' + count)
  }, [count])

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default App
