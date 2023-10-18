import './styles.css'
import CartWidget from '../CartWidget/CartWidget';



const Navbar = () => {
    return (
        <div className="navbar-container"> 
            <div className="w-1/6 text-center">
                <a href="#">
                <img src={'./image/logo-tienda.png'} alt="logo" width={'70px'} />
                </a>
                
            </div>
            <div>
                <ul className='list-container'>
                    <li>
                        <button className='category-button'>iPhone</button>
                    </li>
                    <li>
                        <button className='category-button'>iPad</button>
                    </li>
                    <li>
                        <button className='category-button'>Mac</button>
                    </li>
                    <li>
                        <button className='category-button'>Watch</button>
                    </li>
                    <li>
                        <button className='category-button'>Usados</button>
                    </li>
                    <li>
                        <button className='category-button'>Accesorios</button>
                    </li>
                </ul>                
            </div>
            <CartWidget></CartWidget>
        </div>
    )
};

export default Navbar;