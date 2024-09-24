"use client"
import { cities } from '@/data/data';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CitySliderCard from './CitySliderCard';


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
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
const CitySlider = () => {
    return (
        <Carousel
            arrows={true}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
        >
                {cities.map((city) => (
                    <div key={city.id}>
                        <CitySliderCard city={city} />
                    </div>
                ))}
        </Carousel>
    )
}

export default CitySlider
