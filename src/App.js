//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';
import ItemList from './components/ItemList';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemDetail from './components/ItemDetail'

function App() {
  return (
    <>
    <Navbar />
   
    <ItemListContainer      />
    {/*<ItemDetailContainer />*/}
      <h1>Hola coder</h1>
     
    </>
  );
}

export default App;
