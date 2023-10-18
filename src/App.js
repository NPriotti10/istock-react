import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div> 
      <Navbar></Navbar>
      <ItemListContainer greeting="Listado de productos"></ItemListContainer>
    </div>
      
  );
}

export default App;
