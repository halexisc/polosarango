
export const list = [{
    
    
    id: 1,
    title: "polo negra",
    price: 50,
    pictureurl: "polonegra.jpg"

},{
    id: 2,
    title: "polo azul",
    price: 50,
    pictureurl: "poloazul.jpg"

},{
    id: 3,
    title: "polo blanca",
    price: 50,
    pictureurl: "poloblanca.jpg"

},{
    id: 4,
    title: "polo verde",
    price: 50,
    pictureurl: "poloverde.jpg"

},{
    id: 5,
    title: "polo surf",
    price: 50,
    pictureurl: "polonegra.jpg"

}];


export const getList = (data, timeout) => new Promise((res) =>
setTimeout(() => {
    res(data)
}, timeout)
);