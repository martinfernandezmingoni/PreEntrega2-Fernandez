import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { products } from '../../Mock/products';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [item, setItem] = useState ({});

    const {idNumb} = useParams()

    useEffect(()=>{
        const getProduct = ()=> {
            return new Promise ((res, rej)=> {
                const productFind = products.find ((prod)=> `${prod.id}` === idNumb)

                const prodDetail = idNumb ? productFind : products
                setTimeout(()=>{
                    res(prodDetail)
                }, 500)
            })
        }

        getProduct()
        .then((res)=>{
            setItem(res)
        })
        .catch((error)=>{
            console.log(error)
        })
    }, [idNumb])
    
    return (
        <div className="container1 container-page1">
            
            <ItemDetail item={item} />
        </div>
    );
};

export default ItemDetailContainer;


