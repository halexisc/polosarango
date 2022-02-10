import { useState } from "react";

const CustomInput = ({ onChange, valor }) => {
    const [edit, setEdit] = useState(true);
  
    
    function numberFormat(number) {
      return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(number);
    }
    const estilos = {
        display: "flex",
        width: "20em",
        height: "3em",
        borderRadius:" 5px",
        margin: "1em auto",
    };
  
    return (


      <div class="card-body">
      <h5 class="card-title"></h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    
    );
  };
  
  export default CustomInput;
  