import { Routes, Route, Link } from 'react-router'
import Home from './Home.jsx'
import About from './About.jsx'

function App() {

  return (
    <>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </>
  )
}

export default App
