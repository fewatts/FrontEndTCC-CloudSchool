import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css'
import { Footer } from './components/footer/Footer';
import { NavBar } from './components/navbar/NavBar';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { Cv } from './pages/cv/Cv';
import { Error } from './pages/error/Error';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Menu } from './components/menu/Menu';

function App() {

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <NavBar />
        <div className='app'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cv' element={<Cv />} />
            <Route path='/about' element={<About />} />
            <Route path='/Menu' element={<Menu />} />
            <Route path='/*' element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
