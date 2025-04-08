import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import ShowCase from "../components/ShowCase"
import Body from "../components/Body"
import WhyChooseUs from "../components/WhyChooseUs"
import BestCompony from "../components/bestCompony"
import Footer from "../components/Footer"

function Home() {
    return <div>
        <Header />
        <Hero />
        <ShowCase />
        <Body />
        <WhyChooseUs />
        <BestCompony />
        <Footer />
    </div>
}

export default Home