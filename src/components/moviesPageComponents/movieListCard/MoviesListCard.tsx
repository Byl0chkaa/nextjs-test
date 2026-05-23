import './MovieListCard.css'
import IMovie from "@/src/models/IMovie";
import Link from "next/link";
import {PosterPreview} from "@/src/components/moviesPageComponents/posterPreview/PosterPreview";
import {MovieInfo} from "@/src/components/moviesPageComponents/movieInfo/MovieInfo";
import {StarsRating} from "@/src/components/moviesPageComponents/starsRating/StarsRating";
import {IGenres} from "@/src/models/IGenre";
import {GenreBadge} from "@/src/components/moviesPageComponents/genreBadge/GenreBadge";

interface MoviesListCardProps {
    movie: IMovie,
    allGenres: IGenres[]
}


export const MoviesListCard = ({movie, allGenres}: MoviesListCardProps) => {

    const movieGenres = movie.genre_ids
        .map(id => allGenres.find(genre => genre.id === id))
        .filter(genre => genre !== undefined) as { id: number; name: string }[];

    return (
        <div className="movie-card">
            <Link href={`/detailedMovies/${movie.id}`} className="movie-link">
                <PosterPreview posterPath={movie.poster_path} />

                <div className="card-content">
                    <MovieInfo
                        title={movie.title}
                        overview={movie.overview}
                    />
                    <StarsRating rating={movie.vote_average ?? 0}/>
                </div>
            </Link>
            <div className="genres-container">
                {movieGenres.map((genre) => (
                    <GenreBadge key={genre.id} id={genre.id} name={genre.name} />
                ))}
            </div>
        </div>
    );
};