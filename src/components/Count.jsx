import { useState } from 'react'
import Hello from './Hello'

function Count() {
  const [count, setCount] = useState(0)

  return (
    <div >
      {/* <Hello /> */}
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>

    </div>
  )
}

export default Count
