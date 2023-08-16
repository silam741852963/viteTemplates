import { useState } from 'react'
import meluko from './assets/meluko_cropped.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-5xl'>メリュコすき！</h1>
      <figure className='fixed bottom-0 right-0'>
        <img src={meluko} alt="Summer Meluko"/>
        <figcaption className='hidden'>メリュ子</figcaption>
      </figure>
    </>
  )
}

export default App
