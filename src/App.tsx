import Hero from './components/Hero';
import Navbar from "./components/Navbar";
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/works' element={<Works />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App;
