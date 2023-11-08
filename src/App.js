import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter> 
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:id" element={<ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
