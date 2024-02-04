import { createContext, useState } from "react";
import HomePage from "./HomePage";
export const CartContext = createContext();
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    const [cartList, setCartList] = useState([]);

    return (
        <>
            <CartContext.Provider value={{ cartList, setCartList }}>
                <HomePage />
                <ToastContainer />
            </CartContext.Provider>
        </>
    );
}

export default App;
