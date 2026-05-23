import {MoviesPageComponent} from "@/src/components/moviesPageComponents/moviesPageComponent/MoviesPageComponent";

type MoviesPageProps = {
    searchParams: Promise<{
        page: string;
        query: string;
    }>
}

const MoviesPage = ({ searchParams }: MoviesPageProps) => {
    return (
        <>
            <MoviesPageComponent searchParams={searchParams} />
        </>
    );
};

export default MoviesPage;