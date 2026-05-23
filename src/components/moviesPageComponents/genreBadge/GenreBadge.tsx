import { Badge } from 'reactstrap';
import Link from "next/link";
import './GenreBadge.css'


interface GenreBadgeProps {
    id: number;
    name: string;
}

export const GenreBadge = ({ id, name }: GenreBadgeProps) => {
    return (
        <Link href={`/moviesByGenre/${id}`} style={{ textDecoration: 'none' }}>
            <Badge pill color="info" className="custom-genre-badge" style={{ cursor: 'pointer', margin: '2px' }}>
                {name}
            </Badge>
        </Link>
    );
};