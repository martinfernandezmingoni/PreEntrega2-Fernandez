import './style.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { contexto } from '../Context/CutomProvider';

export function CartWidget (){
    const icono = 'https://cdn.icon-icons.com/icons2/2621/PNG/512/shopping_cart_icon_156961.png' ;
    const {cantidad} = useContext (contexto)

    return (
        <>
        <Link to={'/cart'}>
            <div className='trolley'>
                <img className='icon' src={icono} alt="Carrito" />
                <span className="number">{cantidad}</span>
            </div>
        </Link>
        </>
    );
}