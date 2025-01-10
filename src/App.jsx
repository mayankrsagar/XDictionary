import { useState } from 'react';

import Dictionary from './Features/Dictionary/Dictionary';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dictionary />
    </>
  )
}

export default App
