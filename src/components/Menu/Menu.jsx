//npm i react-router-dom

import { Link } from 'react-router-dom'
import './Menu.css'
//al colocar "/" indicamos que ira a la raiz
const Menu = () => {
  return (
   <nav className="bgMenu">
    <ul className='listaMenu'>
      <li><Link to ="/">INICIO</Link></li>
      <li><Link to ="ofertas">OFERTAS</Link></li>
      <li><Link to ="destacados">DESTACADOS</Link></li>
    </ul>
   </nav>
  )
}

export default Menu