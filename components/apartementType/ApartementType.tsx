import React from 'react';
import SectionHeading from '../helper/SectionHeading';
import { apartmentTypeData } from '@/data/data';
import ApartementTypeCard from './ApartementTypeCard';

const ApartementType = () => {
    return (
        <div className='pt-16 pb-16'>
            <div className='w-[80%] mx-auto'>
                <div 
                    data-aos='fade-up' 
                    data-aos-delay='200'
                >
                    <SectionHeading
                        heading='Explore Apartment Types'
                        heading2='Discover Your Ideal Apartment Style'
                    />
                </div>
                
                <div 
                    data-aos='fade-up'
                    data-aos-delay='400'
                    className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
                                lg:grid-cols-4 xl:grid-cols-5 mt-10 md:mt-20
                                 gap-8 items-center'
                >
                    {apartmentTypeData.map((type) => (
                        <div 
                            key={type.id} 
                            data-aos='zoom-in' 
                            data-aos-delay={`${(type.id + 1) * 100}`} 
                        >
                            <ApartementTypeCard type={type} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ApartementType;
