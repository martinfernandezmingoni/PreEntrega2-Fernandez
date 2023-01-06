import "bootstrap/dist/css/bootstrap.min.css";
import ColorSchemesExample from "./Components/NavBar/NavBar.jsx";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer.jsx";

const App = () => {
  return (
    
   <div>
      <ColorSchemesExample />
      <ItemListContainer title="Bienvenido a Gaia Games Store, la mejor LudoTeca"/>
    </div>
  );
}

export default App;