
export const list = [{
    
    
    id: "01",
    title: "polo negra",
    price: 50,
    pictureurl: "https://static.dafiti.com.co/p/hamer-7171-789348-1-zoom.jpg"

},{
    id: "02",
    title: "polo azul",
    price: 50,
    pictureurl: "https://static.dafiti.com.co/p/hamer-7171-789348-1-zoom.jpg"

},{
    id: "03",
    title: "polo blanca",
    price: 50,
    pictureurl: "https://static.dafiti.com.co/p/hamer-7171-789348-1-zoom.jpg"

},{
    id: "04",
    title: "polo verde",
    price: 50,
    pictureurl: "https://static.dafiti.com.co/p/hamer-7171-789348-1-zoom.jpg"

},{
    id: "01",
    title: "polo surf",
    price: 50,
    pictureurl: "https://static.dafiti.com.co/p/hamer-7171-789348-1-zoom.jpg"

}];


export const getList = (data, timeout) => new Promise((res) =>
setTimeout(() => {
    res(data)
}, timeout)
);