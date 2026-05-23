import {getGenres} from "@/src/services/api.service";
import {GenreBadge} from "@/src/components/moviesPageComponents/genreBadge/GenreBadge";
import React from "react";
import './AllGenresComponent.css'

export const AllGenresComponent = async () => {
    const genres = await getGenres();

    return (
        <main className="all-genres-page">
            <h1>Choose your genre</h1>
            <div className="genres-wrapper">
                {genres.map((genre) => (
                    <GenreBadge key={genre.id} id={genre.id ?? 0} name={genre.name ?? ''}/>
                ))}
            </div>
        </main>
    );
};