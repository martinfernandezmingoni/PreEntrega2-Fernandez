import React from 'react';
import './style.css'

const Item = ({ product }) => {
    //const discount =
      //  producto.price - (producto.price * producto.descuento) / 100;
    return (
        <div className="item">
            <img src={product.img} width="200px" alt={product.title} />
            <article className="info">
                <h2>{product.title}</h2>
                <div className="info-price">
                    <h5>${product.price}.-</h5>
                </div>
            </article>
        </div>
    );
};

export default Item;
