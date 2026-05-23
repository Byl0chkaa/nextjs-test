import './MovieList.css'
import IMovie from "@/src/models/IMovie";
import {MoviesListCard} from "@/src/components/moviesPageComponents/movieListCard/MoviesListCard";
import {IGenres} from "@/src/models/IGenre";


interface MoviesListProps {
    movies: IMovie[],
    allGenres: IGenres[]
}

export const MoviesList = ({movies, allGenres}: MoviesListProps) => {

    return (
        <div className="movies-list-container">
            {
                movies.map((movie) => <MoviesListCard key={movie.id} movie={movie} allGenres={allGenres}/>)
            }
        </div>
    );
};