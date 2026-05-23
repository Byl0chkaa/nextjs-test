import type IResponseMovie from "../models/IResponseMovie.ts";
import type IMovieDetails from "../models/IMovieDetails.ts";
import type {IGenres} from "../models/IGenre.ts";
import type {IGenresResponse} from "../models/IGenresResponse.ts";

const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDNlODVkMjZjNjJmZjBmN2QyZTMzMTg5MjVjMmJkOSIsIm5iZiI6MTc3Nzk5NDg3NS4xNzYsInN1YiI6IjY5ZmEwYzdiNDhjMWQ5ZTE2NTlhMmE1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U28yYZ1V7eBmRZKOuKE5oIwaLD3wSgxdR0iDB_o801U';
const baseUrl = 'https://api.themoviedb.org/3';

export const getMovies = async (page: number): Promise<IResponseMovie> => {
    const response = await fetch(baseUrl + '/discover/movie?page=' + page, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${ACCESS_TOKEN}`,
            'Accept': 'application/json'
        },
    });
    if (!response.ok) {
        throw new Error(`Failed to fetch movies: ${response.status}`);
    }
    const data: IResponseMovie = await response.json();

    return data;
}


export const getMovieById = async (movieId: number): Promise<IMovieDetails | null> => {
    if (!movieId) return null;

   const response = await fetch(baseUrl + `/movie/${movieId}`, {
       method: 'GET',
       headers: {
           'Authorization': `Bearer ${ACCESS_TOKEN}`,
           'Accept': 'application/json'
       },
   });
   if (!response.ok) {
       throw new Error(`Failed to fetch movie: ${response.status}`);
   }
   const data: IMovieDetails = await response.json();

   return data;
}

export const searchMovies = async (query: string, page: number): Promise<IResponseMovie> => {

    const response = await fetch(baseUrl + `/search/movie?query=${query}&page=${page}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${ACCESS_TOKEN}`,
            'Accept': 'application/json'
        },
    });
    if (!response.ok) {
        throw new Error(`Failed to fetch movies: ${response.status}`);
    }
    const data: IResponseMovie = await response.json();
    return data;
}

export const getGenres = async (): Promise<IGenres[]> => {

    const response = await fetch(baseUrl + '/genre/movie/list', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${ACCESS_TOKEN}`,
            'Accept': 'application/json'
        },
    });
    if (!response.ok) {
        throw new Error(`Failed to fetch genres: ${response.status}`);
    }
    const data: IGenresResponse = await response.json();
    return data.genres;
}

export const searchMovieByGenre = async (genreId: number, page: number): Promise<IResponseMovie> => {

    const response = await fetch(baseUrl + `/discover/movie?with_genres=${genreId}&page=${page}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${ACCESS_TOKEN}`,
            'Accept': 'application/json'
        },
    });
    if (!response.ok) {
        throw new Error(`Failed to fetch movies: ${response.status}`);
    }
    const data: IResponseMovie = await response.json();
    return data;
}

