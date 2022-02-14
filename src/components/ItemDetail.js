
function ItemDetail ({item}){
    return <>
    
     <Item
            key={index}
            id={item.id}
            title={item.title}
            price={item.price}
            pictureurl={item.pictureurl}
       /> 
    </>
}

export default ItemDetail;
