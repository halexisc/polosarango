//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';
import ItemList from './components/ItemList';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemDetail from './components/ItemDetail'
import {BrowserRouter, Route, Routes} from 'react-router-dom'



function App() {
  return (<>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:idCtegory" element={<ItemListContainer />} />
      <Route path="/item/:idItem" element={<ItemDetailContainer />} />

   
     
    </Routes>
    
    
    </BrowserRouter>

   

    {/*<ItemDetailContainer />*/}
      <h1>Hola coder</h1>
     
    </>
  );
}

export default App;
