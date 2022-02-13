
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
            name={item.title}
            descript={item.price}
            view={item.pictureurl}
       
          />

          <CustomInput onChange={getData} valor={moneda}  />
        </>
      ))
    
  );
}
