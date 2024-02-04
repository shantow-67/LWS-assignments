import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MovieList from "./components/cine/MovieList";

const HomePage = () => {
    const [theme, setTheme] = useState("dark");

    const handleTheme = () => {
        if (theme === "dark") {
            setTheme("");
        } else {
            setTheme("dark");
        }
    };
    return (
        <>
            <div className={`h-full w-full ${theme}`}>
                <Header onTheme={handleTheme} theme={theme} />
                <main>
                    <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                        <Sidebar />
                        <MovieList />
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default HomePage;
