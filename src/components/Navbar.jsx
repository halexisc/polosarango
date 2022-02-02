import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget'; 

const Navbar = () => {
    return (
          
      <ul className="nav">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Polos Arango.</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Inicio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Nosotros</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Catáctanos</a>
      </li>
         <CartWidget/>
                 


    </ul>
    );
}

export default Navbar;
