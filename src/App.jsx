import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Detail from './pages/Detail/Detail'
import List from './pages/List/List'
import Search from './pages/Semua/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes >
      <Route path='/' element={<List />} />
      <Route path='/detail/:slug' element={<Detail />} />
      <Route path='/search' element={<Search />} />
     </Routes>
    </>
  )
}

export default App
