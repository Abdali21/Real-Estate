"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaUserCircle } from "react-icons/fa"
import { FaHouse } from "react-icons/fa6"
import { HiBars3BottomRight } from "react-icons/hi2"
import{navLinks} from '@/constant/constant'

type Props = {
    openNav:()=>void
}


const Navbar = ({openNav}:Props) => {
    //----------change color of navbar--------------//
    const [navBg, setNavBg] = useState(false);
    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) setNavBg(true);
            if (window.scrollY <= 90) setNavBg(false);
        };
        window.addEventListener('scroll', handler);
        return () =>{
            window.removeEventListener('scroll', handler);
        }
    }, [])

    return (
        <nav className={`fixed ${navBg ? 'bg-gray-800':''} h-[10vh] z-[100] w-full transition-all duration-200`}>
            <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
                <div className="flex items-center space-x-2">
                    <div className="md:w-10 md:h-10 w-7 h-7 rounded-full bg-rose-700 text-white flex
                                    items-center justify-center flex-col"
                    >
                        <FaHouse />
                    </div>
                    <h1 className="text-white font-bold text-sm sm:text-base md:text-xl">HomeHub</h1>
                </div>
                <div className="lg:flex items-center  text-white space-x-14 hidden">
                    {navLinks.map((link) => (
                        <Link key={link.id} href={link.url}>
                            <p className="font-medium hover:text-yellow-300">
                                {link.label}
                            </p>
                        </Link>
                    ))}
                </div>
                <div className="flex items-center space-x-4 ">
                    <div className="flex items-center transition-all hover:text-red-400
                                  text-white space-x-2 duration-200 cursor-pointer"
                    >
                        <FaUserCircle className="h-5 w-5" />
                        <p className="font-bold text-xs md:text-base">Login / Register</p>
                    </div>
                    <HiBars3BottomRight 
                     onClick={openNav}
                     className="sm:w-8 sm:h-8 w-6 h-6 cursor-pointer text-white md:hidden"
                    />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
