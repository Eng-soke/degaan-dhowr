import React from "react"
import {assets} from '../assets/assets'
function Header(){
    return <div className="flex  gap-4 items-center justify-around m-2 border-b-8 border-[#66CC33]">

        <img src={assets.logo} className="text-4xl p-2 rounded-full w-[150px]   m-2" />

        <ul className="flex gap-6 ">
            <li className="hover:text-[#66CC33]">Home</li>
            <li className="hover:text-[#66CC33]">Services</li>
            <li className="hover:text-[#66CC33]">Product</li>
            <li className="hover:text-[#66CC33]">About Us</li>
            <li className="hover:text-[#66CC33]">Contact Us</li>
        </ul>

        
    </div>
}

export default Header