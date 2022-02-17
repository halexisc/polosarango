import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import CartWidget from './CartWidget'; 
import { Link } from 'react-router-dom'




const Navbar = () => {
    return (
          
      <ul className="nav">
      <li className="nav-item">
          <Link to='/' ><a className="nav-link active" aria-current="page" href="#">Polos Arango.</a></Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Inicio</a>
      </li>
      <li className="nav-item">
      <Link to='/category' > <a class="nav-link" href="#">Categoria</a></Link>
      </li>
      <li className="nav-item">
      <Link to='/price' > <a class="nav-link" href="#">Precio</a></Link>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Catáctanos</a>
      </li>
         <CartWidget/>
                 


    </ul>
    );
}

export default Navbar;
