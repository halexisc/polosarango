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
    <div>
      Acá vamos a tener el componente que mapearemos
      <input
        type={"text"}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {loading ? (
        <h1 style={{ height: "100vh", width: "100%", fontSize: "5em" }}>
          Un momento cargamos los productos en breve
        </h1>
      ) : (
        <ItemList lista={items} />
      )}
    </div>
  );
}
