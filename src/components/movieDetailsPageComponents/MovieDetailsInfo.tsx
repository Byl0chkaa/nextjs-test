import './MovieDetailsInfo.css'
import {PosterPreview} from "@/src/components/moviesPageComponents/posterPreview/PosterPreview";
import {GenreBadge} from "@/src/components/moviesPageComponents/genreBadge/GenreBadge";
import {StarsRating} from "@/src/components/moviesPageComponents/starsRating/StarsRating";
import {getMovieById} from "@/src/services/api.service";

type MovieDetailsInfoProps = {
    params: Promise<{ id: string }>
}

export const MovieDetailsInfo = async ({params}: MovieDetailsInfoProps) => {
    const awaitedParams = await params;
    const movieId = Number(awaitedParams.id);

    const movie = await getMovieById((movieId));
    if (!movie) {
        return <h2>Not found</h2>;
    }
    return (
        <div className="movie-details-container" style={{display: 'flex', gap: '30px', padding: '20px'}}>
            <div className="details-poster">
                <PosterPreview posterPath={movie.poster_path}/>
            </div>

            <div className="details-info" style={{flex: 1}}>
                <h1>{movie.title}</h1>

                <div style={{display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px'}}>
                    <StarsRating rating={movie.vote_average ?? 0}/>
                    <span>|</span>
                    <span>{movie.runtime} mins.</span>
                    <span>|</span>
                    <span>{movie.release_date}</span>
                </div>

                <div className="details-genres" style={{marginBottom: '20px', display: 'flex', gap: '10px'}}>
                    {movie.genres?.map(genre => (
                        <GenreBadge key={genre.id} id={genre.id ?? 0} name={genre.name ?? ''}/>
                    ))}
                </div>

                <h3>Movie description:</h3>
                <p style={{lineHeight: '1.6', fontSize: '1.1rem'}}>{movie.overview}</p>

                {movie.tagline && <p><i>"{movie.tagline}"</i></p>}
            </div>
        </div>
    );
};