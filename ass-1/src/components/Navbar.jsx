import rani from "../assets/academic.jpg";
function Navbar() {
    return (
        <>
            <nav className="bg-blue-500 p-4">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center">
                        <img
                            src={rani}
                            alt="School Logo"
                            className="w-10 h-10 mr-2"
                        />
                        <h1 className="text-white text-lg font-semibold">
                            Rani Bilashmoni School
                        </h1>
                    </div>

                    {/* <!-- Navbar Links --> */}
                    <ul className="flex items-center space-x-4">
                        <li>
                            <a
                                href="#"
                                className="text-white hover:text-yellow-300"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-white hover:text-yellow-300"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-white hover:text-yellow-300"
                            >
                                Courses
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-white hover:text-yellow-300"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
