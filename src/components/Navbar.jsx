import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import CartWidget from './CartWidget'; 

const Navbar = () => {
    return (
          
      <ul className="nav">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Polos Arango.</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Inicio</a>
      </li>
      <li className="nav-item">
        <a class="nav-link" href="#">Nosotros</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Catáctanos</a>
      </li>
         <CartWidget/>
                 


    </ul>
    );
}

export default Navbar;
