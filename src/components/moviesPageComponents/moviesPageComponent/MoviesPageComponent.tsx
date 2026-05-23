import {getGenres, getMovies, searchMovies} from "@/src/services/api.service";
import {MoviesList} from "../movieList/MoviesList";
import {PaginationComponent} from "@/src/components/pagination/PaginationComponent";

type MoviesPageComponentProps = {
    searchParams: Promise<{
        page?: string;
        query?: string;
    }>
}

export const MoviesPageComponent = async ({searchParams}: MoviesPageComponentProps) => {
    const SearchParams = await searchParams;
    const currentPage = Number(SearchParams.page) || 1;
    const currentQuery = SearchParams.query || '';

    let data;

    if (currentQuery) {
        data = await searchMovies(currentQuery, currentPage);
    } else {
        data = await getMovies(currentPage);
    }
    const allGenres = await getGenres();

    return (
        <div className="movies-page-container">
            <MoviesList movies={data.results} allGenres={allGenres}/>
            <PaginationComponent currentPage={currentPage} totalPages={data.total_pages} baseUrl="/"/>
        </div>
    );
};