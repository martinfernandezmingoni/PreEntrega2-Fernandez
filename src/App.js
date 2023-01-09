import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import ColorSchemesExample from "./Components/NavBar/NavBar.jsx";
import  ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Home from "./Components/Home/Home";
const App = () => {
  return (
    
   <div>
    <BrowserRouter>
      <ColorSchemesExample />
      <Routes>
      <Route 
          path='/'
          element={
            <Home />}
        />
        <Route 
          path='/store'
          element={
            <ItemListContainer saludo="Bienvenido a Gaia Games Store, la mejor LudoTeca"/>
          }
        />
        <Route 
          path='/categoria/:categoryName'
          element={
            <ItemListContainer saludo="Bienvenido a Gaia Games Store, la mejor LudoTeca"/>
          }
        />
        <Route 
        path='/detail/:idNumb'
        element={<ItemDetailContainer />}
        />
        
      </Routes>
    
      </BrowserRouter>

        

    </div>

  );
}

export default App;