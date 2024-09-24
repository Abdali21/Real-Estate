import Link from "next/link"
import { navLinks } from "@/constant/constant"
import { CgClose } from "react-icons/cg"

type Props = {
  showNav: boolean
  closeNav: () => void
}

const MobileNav = ({ showNav, closeNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]"
  return (
    <div>
      <div className={`transform ${navOpen} fixed transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}></div>
      <div className={`text-white ${navOpen} transform transition-all duration-500 delay-300 
                        fixed flex justify-center flex-col space-y-6 h-full w-[80%]
                        bg-[#c1205e] sm:[60%] z-[10000]`}
      >
        {navLinks.map((link) => (
          <Link key={link.id} href={link.url}>
            <p className="text-[20px] ml-12 border-b-[1.5px] pb-1 font-medium hover:text-yellow-300
                          border-white w-fit sm:text-[30px]">
              {link.label}
            </p>
          </Link>
        ))}
        {/*close button*/}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.7rem] text-white w-6 h-6 sm:w-7 sm:h-7" />
      </div>
    </div>
  )
}

export default MobileNav
