import React from "react"
import { assets } from "../assets/assets"

function ShowCase() {
    return <div className="flex justify-around mt-10">
        <div className="relative">

            <img className=" w-[300px] rounded-xl border-l-4 border-t-4 border-[#66CC33] " src={assets.r1} />
            <img className="absolute h-[350px] rounded-xl w-[250px] left-[180px] top-[200px] border-r-4 border-t-4 border-[#66CC33] " src={assets.r3} />
        </div>

        <div>

        <h1 className="border-b-2 text-xl hover:text-[#66CC33] border-[#66CC33] w-[120px] ">About Us</h1>
        <h1 className="font-bold text-2xl mt-2 text-green-600" >We provide Professional Cleaning Services</h1>
        <p className="w-[400px] mt-2" > <span className="text-[#66CC33] "> Degaan-Dhowr </span>  Cleaning company is a dedicated provider of professional cleaning services, committed to delivering exceptional cleanliness and customer satisfaction. With a focus on reliability, efficiency, and attention to detail, <span className="text-[#66CC33] "> Degaan-Dhowr </span> aims to exceed client expectations in every cleaning project. Our skilled team employs modern techniques and eco-friendly products to ensure a pristine environment for homes and businesses alike. Trust <span className="text-[#66CC33] "> Degaan-Dhowr </span> Cleaning services to transform spaces into immaculate havens, promoting health and well-being through their top-tier cleaning solutions. </p>

        </div>

    </div>
}
export default ShowCase