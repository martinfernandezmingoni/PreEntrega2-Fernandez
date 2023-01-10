import React from 'react';
import './style.css';

const ItemDetail = ({item}) => {
    const discount = item.price - (item.price * item.off) / 100;

    const cuotas = discount / 12;
    return (
        <div className="container-page1 container-detail1">
            <img
                src={item.img}
                alt="detail"
            />
            <article>
                <h2>{item.title}</h2>
                <h4>{item.off}% OFF</h4>
                <section>
                    <h3>$ {discount}.-</h3>
                    <h5>$ {item.price}.-</h5>
                </section>
                <span className="info-span">
                    Todos los precios están expresados en Pesos
                </span>
                <hr />
                <h3 className="cuotas">
                    Hasta <strong>12</strong> cuotas sin interes de
                    <strong> $ {cuotas.toFixed(2)}</strong>
                </h3>
                <button className="metodos-pagos">
                    Conocé todos los métodos de pagos
                </button>
                <hr />
                
            </article>
        </div>
    );
};

export default ItemDetail;
