import Link from 'next/link';
import './PaginationComponent.css'
import {FC} from "react";

type PaginationComponentProps = {
    currentPage: number;
    totalPages: number;
    baseUrl: string;
    query?: string;
}

export const PaginationComponent: FC<PaginationComponentProps> = ({currentPage, totalPages, baseUrl = '/', query}) => {
    const allPages = totalPages > 500 ? 500 : (totalPages || 500)
    const prevPage = currentPage - 1;
    const nextPage = currentPage + 1;

    const pageUrl = (pageNumber: number) => {
        const params = new URLSearchParams();
        if (query) {
            params.set('query', query);
        }
        params.set('page', pageNumber.toString());

        return `${baseUrl}?${params.toString()}`;
    };

    return (
        <div className="pagination-wrapper">

            {
                currentPage > 1 ? (
                    <Link href={pageUrl(prevPage)} className="pag-btn">
                        Previous
                    </Link>
                ) : (
                    <button className="pag-btn" disabled>
                        Previous
                    </button>
                )}

            {currentPage < allPages ? (
                <Link href={pageUrl(nextPage)} className="pag-btn">
                    Next
                </Link>
            ) : (
                <button className="pag-btn" disabled>
                    Next
                </button>)}
        </div>
    );
};