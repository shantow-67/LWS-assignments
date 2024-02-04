/* eslint-disable react/prop-types */
import logo from "../assets/logo.svg";
import ring from "../assets/ring.svg";
import shopping from "../assets/shopping-cart.svg";
import sun from "../assets/icons/sun.svg";
import moon from "../assets/icons/moon.svg";
import { useContext, useState } from "react";
import CartDetails from "./cine/CartDetails";
import { CartContext } from "../App";

const Header = ({ theme, onTheme }) => {
    const [showCartDetails, setShowCartDetails] = useState(false);

    const handleShowCart = () => {
        setShowCartDetails(true);
    };
    const handleCloseCart = () => {
        setShowCartDetails(false);
    };
    const { cartList } = useContext(CartContext);
    return (
        <header>
            {showCartDetails && <CartDetails onClose={handleCloseCart} />}
            <nav className="container flex items-center justify-between space-x-10 py-6">
                <a href="#">
                    <img src={logo} width="139" height="26" alt="" />
                </a>

                <ul className="flex items-center space-x-5">
                    <li>
                        <a
                            className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                            href="#"
                        >
                            <img src={ring} width="24" height="24" alt="" />
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={onTheme}
                            className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                            href="#"
                        >
                            <img
                                src={theme === "dark" ? sun : moon}
                                width="24"
                                height="24"
                                alt="theme-icon"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={handleShowCart}
                            className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                            href="#"
                        >
                            <img src={shopping} width="24" height="24" alt="" />

                            {cartList.length > 0 && (
                                <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                                    {cartList.length}
                                </span>
                            )}
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
