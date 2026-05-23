import {MoviesByGenreComponent} from "@/src/components/moviesByGenreComponent/MoviesByGenreComponent";


type GenresPageProps = {
    params: Promise<{ id: string; }>;
    searchParams: Promise<{ page?: string }>;
};

const MoviesByGenrePage = ({params, searchParams}: GenresPageProps) => {

    return (
        <>
            <MoviesByGenreComponent params={params} searchParams={searchParams}/>
        </>
    )
}

export default MoviesByGenrePage;