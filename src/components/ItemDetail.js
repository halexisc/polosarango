import Item from './Item'; //faltaba importar Item


function ItemDetail ({item, key}){ //faltaba key 
    return <>
    
     <Item
            key={key}
            id={item.id}
            title={item.title}
            price={item.price}
            pictureurl={item.pictureurl}
       /> 
    </>
}

export default ItemDetail;
