import Link from 'next/link';
import './PaginationComponent.css'
import {FC} from "react";

type PaginationComponentProps = {
    currentPage: number;
    totalPages: number;
    baseUrl: string;
}

export const PaginationComponent: FC<PaginationComponentProps> = ({currentPage, totalPages, baseUrl = '/'}) => {
    const allPages = totalPages > 500 ? 500 : (totalPages || 500)
    const prevPage = currentPage - 1;
    const nextPage = currentPage + 1;

    return (
        <div className="pagination-wrapper">

            {
                currentPage > 1 ? (
                    <Link href={`${baseUrl}?page=${prevPage}`} className="pag-btn">
                        Previous
                    </Link>
                ) : (
                    <button className="pag-btn" disabled>
                        Previous
                    </button>
                )}

            {currentPage < allPages ? (
                <Link href={`${baseUrl}?page=${nextPage}`} className="pag-btn">
                    Next
                </Link>
            ) : (
                <button className="pag-btn" disabled>
                    Next
                </button>)}
        </div>
    );
};