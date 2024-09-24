'use client'
import { useEffect } from "react"
import ApartementType from "../apartementType/ApartementType"
import Blog from "../blog/Blog"
import BuildingFeature from "../buildingFeature/BuildingFeature"
import CityProperties from "../cityProperties/CityProperties"
import Hero from "../hero/Hero"
import Properties from "../properties/Properties"
import Reviews from "../reviews/Reviews"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import('aos');
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom"
      })
    }
    initAOS();
  }, [])

  return (
    <div className="overflow-hidden">
      <Hero />
      <ApartementType />
      <Properties />
      <CityProperties />
      <BuildingFeature />
      <Reviews />
      <Blog />
    </div>
  )
}

export default Home
