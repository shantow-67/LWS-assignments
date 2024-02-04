import { getAllMovies } from "../../data/movies";
import Moviecard from "./Moviecard";

const movies = getAllMovies();

const MovieList = () => {
    return (
        <div className="content">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
                {movies.map(movie => (
                    <Moviecard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default MovieList;
