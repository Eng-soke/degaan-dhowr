import React from "react";
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from "react-icons/fa";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 pt-16 pb-8 border-t-4 border-[#66CC33]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img 
                src={assets.logo} 
                alt="CleanPro Logo" 
                className=" mr-3 text-4xl p-2 rounded-full w-[150px]  text-[#79c852]"
              />
            </div>
            <p className="text-gray-600">
              Professional cleaning services that transform your space into a spotless, fresh environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-[#66CC33] transition">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#66CC33] transition">
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-[#66CC33] border-b-2 border-[#66CC33] pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-[#66CC33] transition">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#66CC33] transition">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#66CC33] transition">Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#66CC33] transition">Pricing</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-[#66CC33] border-b-2 border-[#66CC33] pb-2 inline-block">
              Our Services
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-[#66CC33] transition">House Cleaning</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#66CC33] transition">Office Cleaning</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#66CC33] transition">Deep Cleaning</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#66CC33] transition">Carpet Cleaning</a></li>
            </ul>
          </div>

          {/* Contact Info with WhatsApp */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-[#66CC33] border-b-2 border-[#66CC33] pb-2 inline-block">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-[#66CC33] mt-1 mr-3" />
                <span className="text-gray-600">123 Clean Street, Mogadishu, Somalia</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-[#66CC33] mr-3" />
                <a href="tel:+252612345678" className="text-gray-600 hover:text-[#66CC33] transition">+252 61 234 5678</a>
              </li>
              <li className="flex items-center">
                <FaWhatsapp className="text-[#66CC33] mr-3" />
                <a 
                  href="https://wa.me/252615565681" 
                  className="text-gray-600 hover:text-[#66CC33] transition font-semibold"
                >
                  061 556 5681
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-[#66CC33] mr-3" />
                <a href="mailto:info@cleanpro.so" className="text-gray-600 hover:text-[#66CC33] transition">info@Degaan-Dhowr.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* WhatsApp Call-to-Action */}
        <div className="mt-12 bg-[#66CC33] p-6 rounded-lg text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <FaWhatsapp className="text-3xl text-white" />
            <div>
              <h4 className="text-xl font-bold text-white">Contact Us on WhatsApp</h4>
              <a 
                href="https://wa.me/252615565681" 
                className="text-white text-lg font-semibold hover:underline"
              >
                061 556 5681
              </a>
            </div>
            <a 
              href="https://wa.me/252615565681" 
              className="bg-white text-[#66CC33] font-bold px-6 py-2 rounded-lg hover:bg-gray-100 transition ml-4"
            >
              Message Now
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} <span className="text-[#66CC33] "> Degaan-Dhowr </span> Cleaning Services. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;