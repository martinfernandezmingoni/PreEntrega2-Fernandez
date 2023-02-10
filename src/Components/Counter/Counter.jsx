import {useState} from 'react';
import './style.css'

const Counter = ({stock, handleAdd}) => {
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

     const handleConfirm = () => {
        handleAdd(cantidad)
     }
     return(
        <div className='container-counter'>
            <div  className='counter'>
                <button onClick={restar}>-</button>
                <p className='qantity'>{cantidad}</p>
                <button disabled={cantidad === stock} onClick={sumar}>+</button>
                <button className='add-to-cart' onClick={handleConfirm}>Confirmar Productos</button>
                
            </div>
            
        </div>
     )
}

export default Counter;
