import Image from "next/image";

type Props = {
    city: {
        id: number;
        image: string;
        cityName: string;
        numberOfProperties: number;
    }
}

const CitySliderCard = ({ city }: Props) => {
    return (
        <div className="relative rounded-lg overflow-hidden m-2">
            <Image
                src={city.image} alt={city.cityName} width={700} height={700}
                className="w-full rounded-lg h-[450px] object-cover"
            />
            {/* overlay */}
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute p-4 top-4">
                <h1 className="text-lg font-semibold text-white">{city.cityName}</h1>
                <p className="text-gray-200">{city.numberOfProperties} Properties</p>
            </div>
        </div>
    )
}

export default CitySliderCard
