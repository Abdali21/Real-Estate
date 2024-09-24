import { buildings } from "@/data/data";
import SectionHeading from "../helper/SectionHeading";
import BuildingFeatureCard from "./BuildingFeatureCard";

const BuildingFeature = () => {
    return (
        <div className="pt-16 pb-16 bg-gray-100">
            <div className="w-[80%] mx-auto">
                <div 
                    data-aos="fade-up" 
                    data-aos-delay="200"
                >
                    <SectionHeading
                        heading="Explore Building Feature"
                        heading2="Unlock the Power of Dynamic Exploration"
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-14">
                    {buildings.map((building, index) => (
                        <div 
                            key={building.id} 
                            data-aos="zoom-in" 
                            data-aos-delay={`${(index + 1) * 100}`}
                        >
                            <BuildingFeatureCard building={building} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BuildingFeature;
