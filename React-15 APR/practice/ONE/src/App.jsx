import React from 'react'
import Student from './components/Student'
import image from './assets/image/image.png'
import Product from './components/Product'

export default function App() {
  return (
    <div>
      <Student name="Vinay" age="19" image={image}></Student>
      <Product title="IQOO z10x" price="15,999" description="This phone made by vivo (iqoo).This phone have many features on it in low coast"></Product>
    </div>
  )
}
