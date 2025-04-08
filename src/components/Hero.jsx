import React from "react"
import { assets } from "../assets/assets"
function Hero() {
    return <div className="mt-8 flex justify-around">

        <div className="mt-8">

            <h1 className="text-3xl m-2 ">We <span className="text-[#66CC33]"> provide</span> Professional <span  className="text-[#66CC33]"> Cleaning Services </span> </h1>
            <p className="text-lg text-gray-800 leading-relaxed text-justify max-w-xl ">
               <span  className="text-[#66CC33]"> Degaan-Dhowr</span>  Cleaning company is a dedicated provider of professional cleaning services, committed to delivering exceptional cleanliness and customer satisfaction. With a focus on reliability, efficiency, and attention to detail,<span  className="text-[#66CC33]"> Degaan-Dhowr</span> aims to exceed client expectations in every cleaning project. <span className="text-[#66CC33]"> Our</span>  skilled team employs modern techniques and eco-friendly products to ensure a pristine environment for homes and businesses alike. Trust <span  className="text-[#66CC33]"> Degaan-Dhowr</span> Cleaning services to transform spaces into immaculate havens, promoting health and well-being through their top-tier cleaning solutions.
            </p>
            
            <div>

            <button className="text-xl p-2 w-48 m-2 rounded-xl bg-[#66CC33]  ">Our Services</button>
            <button className="text-xl p-2 w-48 m-2 rounded-xl bg-[#66CC33]  ">Our Product</button>

            </div>
        </div>
        <img className="w-[450px] border-l-8 border-b-4 border-[#66CC33] h-[500px] rounded-2xl " src={assets.sawirright} />
    </div>
}

export default Hero