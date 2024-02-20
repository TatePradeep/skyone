import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar/Navbar'
import Index from './components/index/Index'
import Footer from './components/footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section className='index'>
      <Navbar/>
      <Index/>
      <Footer/>
      </section>
    </>
  )
}

export default App
