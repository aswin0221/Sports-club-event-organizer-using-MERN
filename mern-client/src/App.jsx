import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import MyFooter from './components/MyFooter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <div className='min-h-screen'>
      <Outlet/>
    </div>
    <MyFooter/>
    </>
  )
}

export default App
