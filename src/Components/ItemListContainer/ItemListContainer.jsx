import React, { useEffect, useState } from 'react';
import { products } from '../../Mock/products';
import ItemList from '../ItemList/ItemList';
import './style.css';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ saludo }) => {
    const [items, setItems] = useState([]);

    const {categoryName} = useParams()

    useEffect(() => {
        const getProducts = () => {
            return new Promise((res, rej) => {
                const productsFilter = products.filter(
                    (prod)=>prod.category === categoryName);

                const prodList = categoryName ? productsFilter : products
                setTimeout(() => {
                    res(prodList);
                }, 500);
            });
        };
        getProducts()
            .then((res) => {
                setItems(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [categoryName]);

    return (
        <div className="container1 container-page1">
            <h2>{saludo}</h2>
            <ItemList items={items} />
        </div>
    );
};

export default ItemListContainer;
