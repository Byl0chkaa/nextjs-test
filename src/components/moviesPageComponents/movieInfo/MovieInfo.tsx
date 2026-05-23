
import './MovieInfo.css'
import {GenreBadge} from "@/src/components/moviesPageComponents/genreBadge/GenreBadge";

interface MovieInfoProps {
    title: string,
    overview: string,
    genres?: { id: number; name: string }[];
    genreIds?: number[];
}



export const MovieInfo = ({title, overview, genres}: MovieInfoProps) => {
    return (
        <div className="movie-info-block">
            <h1>{title}</h1>
            <p>{overview}</p>
            <div className="genres-container">
                {genres && genres.map((g) => (<GenreBadge key={g.id} id={g.id} name={g.name} />))}
            </div>
        </div>
    );
};