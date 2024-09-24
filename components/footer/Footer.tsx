import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"
import { FaHouse } from "react-icons/fa6"

const Footer = () => {
    return (
        <div className="pt-20 pb-12 bg-black">
            <div className="w-[80%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 
                      lg:grid-cols-3 xl:grid-cols-4 pb-8 gap-12  border-b-[1.5px] 
                      border-white border-opacity-20"
            >
                <div>
                    <div className="flex items-center space-x-2">
                        <div className="md:w-10 md:h-10 w-7 h-7 rounded-full bg-rose-700 text-white flex
                                    items-center justify-center flex-col"
                        >
                            <FaHouse />
                        </div>
                        <h1 className="text-white font-bold text-sm sm:text-base md:text-xl">HomeHub</h1>
                    </div>
                    <p className="text-gray-300 mt-6">
                        Discover your perfect home with us, offering a range of beautiful properties to suit all your needs
                    </p>
                    <p className="text-gray-300 mt-4 font-semibold">HomeHub@gmail.com</p>
                    <p className="text-gray-300 mt-2 font-semibold">+212 123 111 000</p>
                    <div className="flex items-center space-x-4 mt-6">
                        <FaFacebook className="h-6 w-6 text-blue-600" />
                        <FaLinkedin className="h-6 w-6 text-sky-500" />
                        <FaYoutube className="h-6 w-6 text-red-700" />
                        <FaInstagram className="h-6 w-6 text-pink-600" />
                    </div>
                </div>
                <div className="md:mx-auto">
                    <h1 className="footer__heading">Popular Search</h1>
                    <p className="footer__link">Apartment Low to Hide</p>
                    <p className="footer__link">Offices for Buy</p>
                    <p className="footer__link">Offices for Rent</p>
                    <p className="footer__link">Apartment for Rent</p>
                </div>
                <div className="md:mx-auto">
                    <h1 className="footer__heading">Quick Link</h1>
                    <p className="footer__link">Terms of Use</p>
                    <p className="footer__link">Privacy Policy</p>
                    <p className="footer__link">Pricing Plans</p>
                    <p className="footer__link">Our Services</p>
                </div>
                <div className="md:mx-auto">
                    <h1 className="footer__heading">Discover</h1>
                    <p className="footer__link">Miami</p>
                    <p className="footer__link">Los Angeles</p>
                    <p className="footer__link">Chicago</p>
                    <p className="footer__link">London</p>
                </div>
            </div>
            <p className="text-center mt-4 text-base text-white opacity-70">
                &copy; <a href="https://www.abdelalihoumaidi.com"  rel="noopener noreferrer">
                   Copy right by abdelalihoumaidi
                </a>
            </p>

        </div>
    )
}

export default Footer
