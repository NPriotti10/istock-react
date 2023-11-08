import './styles.css'
import CartWidget from '../CartWidget/CartWidget';
import	{Link} from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="navbar-container"> 
            <div className="w-1/6 text-center">
                <a href="/">
                <img src={'./image/logo-tienda.png'} alt="logo" width={'70px'} />
                </a>
                
            </div>
            <div>
                <ul className='list-category-container'>
                    <li>
                        <Link to={'/category/electronics'} className="category-button">
                            Electronicos
                        </Link>
                    </li>
                    <li>
                        <Link to={'/category/jewelery'} className="category-button">
                            Joyeria
                        </Link>
                    </li>
                    <li>
                        <Link to={"/category/men's-clothing"} className="category-button">
                            Ropa Hombre
                        </Link>
                    </li>
                    <li>
                        <Link to={"/category/women's-clothing"} className="category-button">
                            Ropa Mujer
                        </Link>
                    </li>
                    
                </ul>                
            </div>
            <CartWidget></CartWidget>
        </div>
    )
};

export default Navbar;