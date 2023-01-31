import React, { useContext } from "react";
import { contexto } from "../Context/CutomProvider";
import {serverTimestamp, addDoc} from "firebase/firestore";
import {productCollection} from "../../firebaseConfig"


const Cart = () => {
const {carrito, addProduct} = useContext(contexto)

const handleClick = () => {
    addProduct()
}

const handleBuy = () =>{
    
    const buy = {
        usuario : {
            nombre: "fulano",
            email: "fulano@gmail.com",
            telefono: "123456789"
        },
        carrito : carrito,
        fecha : serverTimestamp()
    }
    console.log(handleBuy)
}

    return (
        <div>
            <h1>Este es el carrito</h1>
            <button onClick={handleClick}>Test Carrito</button>
            {JSON.stringify(carrito)}
            <button onClick={handleBuy}>Finalizar Compra</button>
        </div>
        
    )
};

export default Cart; 