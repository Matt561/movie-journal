import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'

import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

function About() {
  return (
    <div>
      <h1>This is the about page</h1>
    </div>
  )
}

export default App
