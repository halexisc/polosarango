
import React from "react";
import { useState } from "react";
import Item from "./Item";
import CustomInput from "./CustomInput";

export default function ItemList({ lista }) {
  const [moneda, setMoneda] = useState("");
  const getData = (data) => setMoneda(data);
  return (
    
      lista.map((item, index) => (
        <>
          <Item
            key={index}
            id={item.id}
            title={item.title}
            price={item.price}
            pictureurl={item.pictureurl}
       
          />
          
        </>
      ))
    
  );
}
