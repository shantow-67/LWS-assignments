/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import tag from "../../assets/tag.svg";
import { getImgUrl } from "../../utils/cine-utility";
import Ratings from "./Ratings";
import MovieDetailsModal from "./MovieDetailsModal";
import { CartContext } from "../../App";
import { toast } from "react-toastify";

const Moviecard = ({ movie }) => {
    const [showModal, setShowMOdal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const { cartList, setCartList } = useContext(CartContext);

    const addToCart = (event, movie) => {
        event.stopPropagation();
        const found = cartList.find(item => {
            return item.id === movie.id;
        });

        if (!found) {
            setCartList([...cartList, movie]);
            toast.success(`Added  ${movie.title} to Cart !`, {
                position: "bottom-right",
            });
        } else {
            toast.error(
                `The movie ${movie.title} has been added to the cart already`,
                {
                    position: "bottom-right",
                }
            );
        }
    };

    const handleSelect = movie => {
        setShowMOdal(true);
        setSelectedMovie(movie);
    };

    const handleClose = () => {
        setShowMOdal(false);
        setSelectedMovie(null);
    };

    return (
        <>
            {showModal && (
                <MovieDetailsModal
                    onAdd={addToCart}
                    movie={selectedMovie}
                    onClose={handleClose}
                />
            )}
            <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                <img
                    onClick={() => handleSelect(movie)}
                    className="w-full object-cover"
                    src={getImgUrl(movie.cover)}
                    alt=""
                />
                <figcaption className="pt-4">
                    <h3 className="text-xl mb-1">{movie.title}</h3>
                    <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
                    <div className="flex items-center space-x-1 mb-5">
                        <Ratings value={movie.rating} />
                    </div>
                    <a
                        onClick={e => addToCart(e, movie)}
                        className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                        href="#"
                    >
                        <img src={tag} alt="tag" />
                        <span>${movie.price} | Add to Cart</span>
                    </a>
                </figcaption>
            </figure>
        </>
    );
};

export default Moviecard;
