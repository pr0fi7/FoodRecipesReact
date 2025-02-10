import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Favourites from './pages/favourites'
import Details from './pages/details'
import Navbar from './components/navbar'

function App() {

  return (
    <div className="sticky top-0">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/favourites" element={<Favourites />}/>
      <Route path="/recipe/:id" element={<Details />}/>
    </Routes>
    </div>
  )
}

export default App
