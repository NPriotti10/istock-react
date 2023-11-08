import { useState } from 'react';
import './styles.css';

const ItemCount = () => {
    const [count, setCount] = useState(1);
    const stock = 5;
    const increment = () => {
        if(count === stock) return;
        setCount(count + 1)
    };

    const decrement = () => {
        if(count>0){
            setCount(count - 1)
        }
        
    };

  return (
    <div className='count-container'> 
        <button onClick={decrement}>-</button>
        <h2>{count}</h2>
        <button onClick={increment}>+</button>
    </div>
  );
}

export default ItemCount