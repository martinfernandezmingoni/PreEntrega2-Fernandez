import {useState} from 'react';
import './style.css'

const Counter = ({stock}) => {
    const [cantidad, setCantidad] = useState(1);

    const sumar = () =>{
        if (cantidad < stock){
            setCantidad(cantidad + 1);
        }
    };
     const restar = () => {
        if (cantidad > 1){
            setCantidad(cantidad -1);
        }
     };
     return(
        <div className='container-counter'>
            <div  className='counter'>
                <button onClick={restar}>-</button>
                <p className='qantity'>{cantidad}</p>
                <button disabled={cantidad === stock} onClick={sumar}>+</button>
                <button className='add-to-cart'>Agregar al Carrito</button>
            </div>
        </div>
     )
}

export default Counter;
