import React from "react";
import { FaCheckCircle, FaUserTie, FaHeadset } from "react-icons/fa";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { assets } from "../assets/assets";

const BestCompany = () => {
  const features = [
    {
      icon: <FaCheckCircle className="text-3xl text-[#66CC33]" />,
      title: "100% Satisfaction Guaranteed",
      description: "We stand behind our work with a complete satisfaction guarantee"
    },
    {
      icon: <FaUserTie className="text-3xl text-[#66CC33]" />,
      title: "Expert cleaning staff",
      description: "Professionally trained and vetted cleaning specialists"
    },
    {
      icon: <FaHeadset className="text-3xl text-[#66CC33]" />,
      title: "Free lifetime support",
      description: "Dedicated customer service throughout our relationship"
    }
  ];

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
    fade: true
  };

  // Image slides
  const slides = [
    { id: 1, image: assets.sawir1 },
    { id: 2, image: assets.sawir2 },
    { id: 3, image: assets.choos1 },
    { id: 4, image: assets.choos2 },
    { id: 5, image: assets.sawir10 }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column - Image Carousel */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
              <Slider {...settings}>
                {slides.map((slide) => (
                  <div key={slide.id}>
                    <img 
                      src={slide.image} 
                      alt={`Cleaning service ${slide.id}`}
                      className="w-full h-[500px] object-cover"
                    />
                  </div>
                ))}
              </Slider>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <div className="text-white text-5xl font-bold">2500+</div>
                <div className="text-[#66CC33] text-2xl font-medium">Satisfied Customers</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:w-1/2 w-full"
          >
           
            
            <motion.div variants={item}>
              <h3 className="text-4xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                We Are The Best Company In Cleaning
              </h3>
            </motion.div>
            
            <motion.div variants={item}>
              <p className="text-gray-600 text-lg mb-10">
                After a long day at work, picture arriving home to a spotlessly clean, 
                fragrant house. Peace of mind is just a click away if you require our services.
              </p>
            </motion.div>

            <motion.div variants={container} className="space-y-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  variants={item}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-6 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all"
                >
                  <div className="mt-1 p-2 bg-green-50 rounded-full">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BestCompany;