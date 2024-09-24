import { properties } from "@/data/data";
import SectionHeading from "../helper/SectionHeading";
import PropertyCard from "./PropertyCard";

const Properties = () => {
    return (
        <div className="pt-16 pb-16 bg-gray-100">
            <div className="w-[80%] mx-auto">
                <div 
                    data-aos="fade-up" 
                    data-aos-delay="200"
                >
                    <SectionHeading
                        heading="Discover Our Properties"
                        heading2="Discover Your Next Destination"
                    />
                </div>

                <div 
                    data-aos="fade-up" 
                    data-aos-delay="400"
                    className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10"
                >
                    {properties.map((property) => (
                        <div 
                            key={property.id}
                            data-aos="zoom-in"
                            data-aos-delay={`${(property.id + 1) * 100}`} 
                        >
                            <PropertyCard property={property} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Properties;
