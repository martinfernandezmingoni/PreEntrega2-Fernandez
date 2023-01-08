import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import ColorSchemesExample from "./Components/NavBar/NavBar.jsx";
import  ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

const App = () => {
  return (
    
   <div>
    <BrowserRouter>
      <ColorSchemesExample />
      <Routes>
        <Route 
          path='/'
          element={
            <ItemListContainer title="Bienvenido a Gaia Games Store, la mejor LudoTeca"/>
          }
        />
        
      </Routes>
    
      </BrowserRouter>

        <ItemDetailContainer />

    </div>

  );
}

export default App;