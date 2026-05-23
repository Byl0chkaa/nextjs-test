import type IMovie from "./IMovie.ts";

export default interface IResponseMovie {
   page?: number;
   results: IMovie[];
   total_pages: number;
   total_results: number;
}

