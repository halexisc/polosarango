import { useEffect, useState } from "react";
import Item from "./Item";
import ItemList from "./ItemList";
import { list, getList } from "../bd";


export default function ItemListContainer() {
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
             <spam>En breve apareceran las polos</spam>
      )}
    </div>
  );
}
