import './style.css';

export function CartWidget (){
    const icono = 'https://cdn.icon-icons.com/icons2/2621/PNG/512/shopping_cart_icon_156961.png' ;

    return (
        <>
            <div className='trolley'>
                <img className='icon' src={icono} alt="Carrito" />
                <span className="number">2</span>
            </div>
        </>
    );
}