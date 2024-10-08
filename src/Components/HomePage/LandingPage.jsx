import React from 'react'
import Navigationbar from "../CommonComponents/Navigationbar";
import HeroSection from './HeroSection'
import Footer from "../CommonComponents/Footer";
import AboutUs from './AboutUs'
import Teams from './Teams'
export default function LandingPage() {
  return (
    <div>
    <Navigationbar />
    <HeroSection/>
    <AboutUs/>
    <Teams/>
    <Footer/>
    </div>
  )
}
