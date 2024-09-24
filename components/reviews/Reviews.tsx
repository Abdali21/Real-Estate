import SectionHeading from "../helper/SectionHeading"
import ReviewsSlider from "./ReviewsSlider"


const Reviews = () => {
  return (
    <div className="pt-16 pb-16 bg-[#fef7f6]">
    <div className="w-[80%] mx-auto">
        <SectionHeading
            heading="Our Clients Reviews"
            heading2="Hear from Our Clients"
        />
                <div className="mt-10 md:mt-16">
                    {/*city slider */}
                    <ReviewsSlider />
                </div>
      </div>
    </div>
  )
}

export default Reviews
