import React from "react";
import { FaDollarSign, FaStar, FaHeadset } from 'react-icons/fa';
import { LiaCertificateSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

function WhyChooseUs() {
    const features = [
        {
            icon: <LiaCertificateSolid className="text-5xl" />,
            title: "Certified Cleaners",
            description: "We provide Certified, well-trained, reliable cleaners that have been thoroughly screened before being hired."
        },
        {
            icon: <FaDollarSign className="text-5xl" />,
            title: "Transparent Pricing",
            description: "No hidden charges. You only pay for what you ordered."
        },
        {
            icon: <FaStar className="text-5xl" />,
            title: "Superior Quality",
            description: "We are here to provide you Superior Quality with all our resources at all times."
        },
        {
            icon: <FaHeadset className="text-5xl" />,
            title: "24/7 Online Support",
            description: "Our Customer support is available 24/7 hour for any emergency Services."
        }
    ];

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                {/* Header with enhanced styling */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-bold text-gray-800 mb-3">
                        Why <span className="text-[#66CC33]">Choose</span> Us
                    </h1>
                    <div className="w-24 h-1 bg-[#66CC33] mx-auto mb-4"></div>
                    <h2 className="text-2xl text-gray-600 font-medium">
                        We Aim To Provide <span className="font-semibold">Reliable Services</span>
                    </h2>
                </motion.div>

                {/* Features grid with animations */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div 
                            key={index}
                            variants={item}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[#66CC33]"
                        >
                            <div className="flex flex-col items-center text-center h-full">
                                <div className="text-[#66CC33] mb-6 p-3 bg-green-50 rounded-full">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats counter below features */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <div className="text-4xl font-bold text-[#66CC33] mb-2">1000+</div>
                        <div className="text-gray-600">Happy Clients</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <div className="text-4xl font-bold text-[#66CC33] mb-2">100%</div>
                        <div className="text-gray-600">Satisfaction</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <div className="text-4xl font-bold text-[#66CC33] mb-2">24/7</div>
                        <div className="text-gray-600">Support</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <div className="text-4xl font-bold text-[#66CC33] mb-2">50+</div>
                        <div className="text-gray-600">Professionals</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;