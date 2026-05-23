import {getGenres, searchMovieByGenre} from "@/src/services/api.service";
import {MoviesList} from "@/src/components/moviesPageComponents/movieList/MoviesList";
import {PaginationComponent} from "@/src/components/pagination/PaginationComponent";


type GenresPageProps = {
    params: Promise<{ id: string; }>;
    searchParams: Promise<{ page?: string }>;
};

export const MoviesByGenreComponent = async ({params, searchParams}: GenresPageProps) => {
    const Params = await params;
    const SearchParams = await searchParams;

    const genreId = Number(Params.id);
    const currentPage = Number(SearchParams.page) || 1;

    const data = await searchMovieByGenre(genreId, currentPage);
    const allGenres = await getGenres();

    return (
        <div>
            <MoviesList movies={data.results} allGenres={allGenres} />
            <PaginationComponent currentPage={currentPage} totalPages={data.total_pages} baseUrl={`/moviesByGenre/${genreId}`} />
        </div>
    )
}
