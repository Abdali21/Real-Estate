"use client"
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';
type Props = {
    building: {
        id: number;
        title: string;
        description: string;
        image: string;
    }
}

const BuildingFeatureCard = ({ building }: Props) => {
    return (
        <Tilt>
            <div className='rounded-lg shadow-md p-4 bg-white'>
                <div className='h-16 w-16 ml-auto flex items-center justify-center flex-col bg-gray-100 rounded-full'>
                    <Image src={building.image} alt={building.title} width={40} height={40} />
                </div>
                <div className='p-2'>
                    <p className='mt-6 text-red-600 font-bold text-xl'>0{building.id}</p>
                    <p className='text-lg font-semibold text-gray-700 mt-2 mb-2'>{building.title}</p>
                    <p className='text-sm opacity-70 text-gray-700'>{building.description}</p>
                </div>
            </div>
        </Tilt>
    )
}

export default BuildingFeatureCard
