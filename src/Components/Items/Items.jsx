import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const Item = ({ product }) => {
    return (
        <div className="item">
            <Link to={`/detail/${product.id}`}>
            <img src={product.img} width="200px" alt={product.title} />
            <article className="info">
                <h2>{product.title}</h2>
                <div className="info-price">
                    <h5>${product.price}.-</h5>
                </div>
            </article>
            </Link>
        </div>
    );
};

export default Item;
