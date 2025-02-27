"use client"
import { userReviewData } from '@/data/data';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReviewsCard from './ReviewsCard';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const ReviewsSlider = () => {
    return (
        <Carousel
            arrows={true}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
        >
            {userReviewData.map((review) => (
                <div key={review.id}>
                    <ReviewsCard review={review} />
                </div>
            ))}
        </Carousel>
    )
}

export default ReviewsSlider
