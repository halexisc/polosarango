import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Item({id, title, price, pictureurl}){
    return(
<>
       

      <article>
              <span>{id}</span>
              <span>{title}</span>
              <span>{price}</span>
                <figure>
                    <img src={pictureurl} alt={id} /> 
                </figure>

       </article> 
   </>
    
    )
}