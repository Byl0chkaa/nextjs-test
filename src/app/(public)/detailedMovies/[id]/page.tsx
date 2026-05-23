import React from 'react';
import {MovieDetailsInfo} from "@/src/components/movieDetailsPageComponents/MovieDetailsInfo";

type MoviePageProps = {
    params: Promise<{ id: string }>;
};

const DetailedMoviePage = async({ params }: MoviePageProps) => {
    return (
        <>
            <MovieDetailsInfo params={params}/>
        </>
    );
};

export default DetailedMoviePage;