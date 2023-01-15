import { createContext } from "react";

export const contexto = createContext();

const {Provider} = contexto;

const CustomProvider = ({children}) =>{

    const contextValue = {
        carrito: [],
        total:0
    }
    return(
        <Provider value = {contextValue}>
            {children}
        </Provider>
    )
}

export default CustomProvider