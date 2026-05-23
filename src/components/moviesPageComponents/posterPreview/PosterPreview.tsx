import Image from "next/image";

interface PosterPreviewProps {
    posterPath?: string
}

export const PosterPreview = ({posterPath}: PosterPreviewProps) => {
    const baseUrl = "http://image.tmdb.org/t/p/";
    const posterSize = 'w500';
    const fullPath = posterPath ? `${baseUrl}/${posterSize}${posterPath}` : '/placeholder-image.jpg';

    return (
        <div className="poster-preview-container">
            <Image src={fullPath} alt="Movie Poster" width={500} height={750} className="poster-image"/>
        </div>
    );
};