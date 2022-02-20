import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../components/estylo.css'





export default function Item({id, title, price, pictureurl}){
    return(
<>

      <div className="card" styleName="width: 18rem;" >
               <figure>
      
                    <img className="card-img-top"  src={pictureurl}  /> 
               </figure>
        
                  <div className="card-body">
                      <h5 className="card-title">Prenda: {title}</h5>
                         <p className="card-text">Precio: {price}</p>
                      <h5 className="card-title">Cod: {id}</h5>
                      
                         <a href="/Item/${id}" className="btn btn-primary"> Detalles </a>
                 </div>
       </div> 
     
   </>
    
    )
}