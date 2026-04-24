import React from 'react'
import Student from './components/Student'
import image from './assets/image/image.png'
import Product from './components/Product'
import { useState } from 'react'

export default function App() {
  // eslint-disable-next-line no-unused-vars
  let name = "Skillected"

  const [count, setCount] = useState(0)

  const increase = () => {
    setCount (count + 1);
    console.log("count", count);
  }




  return (
    <div>
      <Student name="Vinay" age="19" image={image}></Student>
      <Product title="IQOO z10x" price="15,999" description="This phone made by vivo (iqoo).This phone have many features on it in low coast"></Product>
      <div><h1>Count: {count}</h1>
      <button onClick={increase}>Increase</button>
      </div>
    </div>
  )
}
