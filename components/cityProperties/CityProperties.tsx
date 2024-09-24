import SectionHeading from "../helper/SectionHeading"
import CitySlider from "./CitySlider"

const CityProperties = () => {
    return (
        <div className="pt-16 pb-16">
            <div className="w-[80%] mx-auto">
                <SectionHeading
                    heading="Explor City Properties"
                    heading2="Discover this Beatiful properties of these cities"
                />
                <div className="mt-10 md:mt-16">
                    {/*city slider */}
                    <CitySlider />
                </div>
            </div>
        </div>
    )
}

export default CityProperties
