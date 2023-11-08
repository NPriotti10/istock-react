import React, { useState, useEffect } from "react";
import Item from "../Item/Item";
import './styles.css'
import { Link, useParams } from "react-router-dom";

const ItemList = () => {
  const [items, setItems] = useState([]);

  const { id } = useParams();

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const productList = await fetchProducts();
      if (id) {
        const filteredItems = productList.filter(product => {
          const idFormatted = id.includes('-') ? id.replace('-', ' ') : id;
          return product.category === idFormatted;
        });
        setItems(filteredItems);
      } else {
        setItems(productList);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="product-container">
      {items.length === 0 ? (
        <h6>Cargando...</h6>
      ) : (
        items.map(item => (
          <Link to={`/item/${item.id}`} key={item.id}>
            <Item
              title={item.title}
              description={item.description}
              price={item.price}
              image={item.image} 
            />
          </Link>
        ))
      )}
    </div>
  );
}

export default ItemList;