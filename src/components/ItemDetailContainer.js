import { React, useEffect, useState } from "react";
import Item from "./Item";
import { useParams } from 'react-router-dom'
import ItemDetail from "./ItemDetail"; 
import { list, getList } from "../bd";
//import list from '../bd'


const ItemDetailContainer = () => {

const [item, setItems] = useState({});
const { id } = useParams(); 


useEffect (() => {

const fountItem = list.filter((element) => element.id.toString() === id);
setItems(fountItem.length > 0 ? fountItem[0] : { name : 'not fount'});
}, [id]);

return (

  <>
  <section className='text-gray-700 body-font overflow-hidden bg-white'>
        <div className='container px-5 py-24 mx-auto'>
          <ItemDetail bd={item} />
        </div>
      </section>
  </>

);

};

export default ItemDetailContainer



/*export default function ItemDetailContainer() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    setLoading(true);
    // getList(list, 5000)
    //   .then((res) => setItems(res))
    //   .catch((e) => console.log(e));
    try {
      const data = await getList(list, 2000);
      console.log(data);
      setItems(data);
      setLoading(false);
    } catch (e) {
      
    }
  }, []);

  return (


    
    <div >
          
         {items.length > 0 ? (

           items.map((item, index) => (
                <Item
                key={index}
                id={item.id}
                title={item.title}
                price={item.price}
                pictureurl={item.pictureurl}
                />
           ))

          
      ) : (
             <span>En breve apareceran las detalles</span> //estaba escrito como spam
      )}
    </div>
  );
}

*/