/*import { useEffect, useState } from "react";
import customFetch  from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
const { bd } = require('../bd');

const ItemListContainer = () => {

const[dato, setDato] = useState({});

useEffect(() => {
    customFetch(2000, bd[2])
    .them(result => setDato(result))
    .catch(err => console.log(err))
    }, []);
    return (
        <ItemDetail item={dato}/>
    );
    }

    export default ItemListContainer;
*/