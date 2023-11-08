import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [itemSelected, setItemSelected] = useState(null);    
    const {id} = useParams();

    const fetchProduct = () => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => setItemSelected(data))
            .catch((err) => console.log(err));        
    };   

    useEffect(() => {
        fetchProduct();
    }, [])

  return (
    <div>
        {id && (
            <div className="item-detail-container">
                <ItemDetail itemSelected={itemSelected} />
            </div>
        )}
    </div>
  )
}

export default ItemDetailContainer;