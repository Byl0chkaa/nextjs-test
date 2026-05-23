import './StarRating.css'

interface StarsRatingProps {
    rating: number;
}

export const StarsRating = ({ rating }: StarsRatingProps) => {
    const starPercentage = (rating / 10) * 100;

    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

    return (
        <div className="star-rating-wrapper">
            <div className="stars-empty">
                ★★★★★
                <div className="stars-filled" style={{ width: starPercentageRounded }}>
                    ★★★★★
                </div>
            </div>
        </div>
    );
};