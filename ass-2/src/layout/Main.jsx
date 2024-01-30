import { useState } from "react";
import Cart from "../components/Cart";
import Search from "../components/Search";
import Sort from "../components/Sort";
import { books } from "../data";

const Main = () => {
    const [bookList, setBookList] = useState([...books]);

    // const searchCB = book =>book.name.includes(searchTerm)

    const searchFun = item => {
        const searchTerm = item.toLowerCase();
        const res = books.filter(
            book => book.name && book.name.toLowerCase().includes(searchTerm)
        );
        setBookList([...res]);
    };

    // Sort by the 'name' property in ascending order
    const sortedAscFun = [...books].sort((a, b) =>
        a.name.localeCompare(b.name)
    );
    const sortedDescFun = [...books].sort((a, b) =>
        b.name.localeCompare(a.name)
    );

    const handleSort = val => {
        console.log(val);
        if (val == "name_asc") {
            setBookList(sortedAscFun);
            console.log(sortedAscFun);
        } else if (val == "name_desc") {
            setBookList(sortedDescFun);
        }
    };

    return (
        <>
            <main className="my-10 lg:my-14">
                {/* <!-- header --> */}
                <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
                    <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
                        {/* <!-- info , title , search --> */}
                        <div>
                            <h6 className="mb-2 text-base lg:text-xl">
                                Trending on 2021
                            </h6>
                            <h2 className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl">
                                Trending Books of the Year
                            </h2>
                            {/* <!-- Search Box --> */}
                            <Search searchFun={searchFun} />
                            {/* <!-- Search Box Ends --> */}
                        </div>
                        {/* <!-- sort - filter --> */}
                        <Sort sortFun={handleSort} />
                    </div>
                </header>
                {/* <!-- header ends --> */}
                {/* book list start */}
                <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {bookList.map((book, index) => (
                        <Cart
                            key={index}
                            bookName={book.name}
                            author={book.author}
                        />
                    ))}
                </div>
            </main>
        </>
    );
};

export default Main;
