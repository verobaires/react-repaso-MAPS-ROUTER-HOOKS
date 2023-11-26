
/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu/Menu'
import Sucursales from './components/Sucursales/Sucursales'
import Ofertas from './components/Ofertas/Ofertas'
import Destacados from './components/Destacados/Destacados'

//Router envuelve todo el componente puede ser main, puede ser app o index.jsx
//En '/' definimos cual es la pagina principal pudiendo elegir cualquiera
//Luego de element colocamos el nombre del componente
function App() {

  return (
    <Router>
      <Menu />
      <main>
        <Routes>
          <Route path='/' element={<Sucursales/>} />
          <Route path='/destacados' element={<Destacados />} />
          <Route path='/ofertas' element={<Ofertas />} />
        </Routes>
       
      </main>

    </Router>
  )
}

export default App
