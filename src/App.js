import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import ColorSchemesExample from "./Components/NavBar/NavBar.jsx";
import  ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Nos from "./Components/Nosotros/Nosotros";
import CustomProvider from "./Components/Context/CutomProvider";

const App = () => {
  return (
    
   <div>
    <CustomProvider>

    <BrowserRouter>
      <ColorSchemesExample />
      <Routes>

        <Route 
          path='/'
          element={
            <ItemListContainer saludo="Bienvenido a Gaia Games Store, la mejor LudoTeca"/>
          }
        />
      <Route 
          path='/nosotros'
          element={
            <Nos />
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
    </CustomProvider>
    </div>

  );
}

export default App;