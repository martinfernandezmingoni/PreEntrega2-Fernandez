import React, { useEffect, useState } from 'react';
import { products } from '../../Mock/products';
import ItemList from '../ItemList/ItemList';
import './style.css';

const ItemListContainer = ({ saludo }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getProducts = () => {
            return new Promise((res, rej) => {
                setTimeout(() => {
                    res(products);
                }, 2000);
            });
        };
        getProducts()
            .then((res) => {
                setItems(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="container1 container-page1">
            <h2>{saludo}</h2>
            <ItemList items={items} />
        </div>
    );
};

export default ItemListContainer;
