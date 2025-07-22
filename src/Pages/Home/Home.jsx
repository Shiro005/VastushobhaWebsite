import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BadgeIndianRupee, Clock, Star, Users, ChevronRight, Play, Award, Shield, Zap, Phone, MapPin, Mail } from 'lucide-react';
import Services from '../Services/Services';
import Stats from '../Stats/Stats';
import Projects from '../Projects/Projects';
import Contactform from '../ContactUs/ContactUs';
import About from '../AboutUs/About';
import { NavLink } from 'react-router-dom';

const services = [
  {
    name: "Planning & Design",
    href: "/services/planning",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2089&q=80",
    description: "Strategic architectural planning with innovative design solutions that bring your vision to life with precision and modern aesthetics.",
    stats: "600+ Projects",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
  },
  {
    name: "Legal Sanctioning", 
    href: "/services/sanctioning", 
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    description: "Complete legal compliance and approval services ensuring seamless construction process with all regulatory requirements.",
    stats: "100% Approval Rate",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M9 12l2 2 4-4"></path></svg>
  },
  {
    name: "Premium Construction",
    href: "/services/buildingconstruction",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    description: "World-class construction services using cutting-edge technology and premium materials for lasting quality.",
    stats: "13+ Years Experience",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M2 8h20M6 4v4"></path></svg>
  },
  {
    name: "3D Visualization",
    href: "/services/3dmodeling",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
    description: "Photorealistic 3D modeling and virtual tours that let you experience your dream project before construction begins.",
    stats: "Ultra HD Quality",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line></svg>
  },
  {
    name: "Luxury Interiors",
    href: "/services/interiordesigning",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80",
    description: "Bespoke interior design solutions that blend functionality with aesthetic excellence for modern living spaces.",
    stats: "Award Winning",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
  },
  {
    name: "Smart Renovation",
    href: "/services/renovation",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
    description: "Transform existing spaces with smart renovation solutions that enhance value and modernize your property.",
    stats: "Zero Waste Policy",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
  }
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered && !isAnimating) {
        handleNext();
      }
    }, isMobile ? 4000 : 6000);

    return () => clearInterval(interval);
  }, [isHovered, isAnimating, isMobile]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const handleDotClick = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      opacity: 0,
      scale: 0.95,
      x: direction > 0 ? '100%' : '-100%'
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.32, 0.72, 0, 1]
      }
    },
    exit: (direction) => ({
      opacity: 0,
      scale: 0.95,
      x: direction < 0 ? '100%' : '-100%',
      transition: {
        duration: 0.8,
        ease: [0.32, 0.72, 0, 1]
      }
    })
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const renderIndicators = () => {
    return (
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-30 px-4">
        {services.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`relative overflow-hidden rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-white w-8 h-1.5" 
                : "bg-white/40 hover:bg-white/60 w-3 h-1.5"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentIndex && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600"
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: isMobile ? 4 : 6, ease: 'linear' }}
              />
            )}
          </motion.button>
        ))}
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Vastushobha Construction - Premier Construction Company in Akola</title>
        <meta name="description" content="Vastushobha Construction offers top-quality construction services in Akola, Maharashtra. Commercial and residential building solutions with expert craftsmanship." />
        <meta name="keywords" content="Vastushobha construction akola, construction in akola, building contractor akola" />
        <link rel="canonical" href="https://vastushobha.co.in/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      
      <div className="relative text-gray-100 overflow-hidden bg-gray-900" id="home">
        {/* Hero Carousel Section */}
        <section
          className="relative h-screen w-full overflow-hidden"
          onMouseEnter={() => !isMobile && setIsHovered(true)}
          onMouseLeave={() => !isMobile && setIsHovered(false)}
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="absolute inset-0 opacity-20">
              <motion.div 
                className="absolute top-20 left-20 w-32 h-32 bg-red-500 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute bottom-40 right-40 w-24 h-24 bg-red-400 rounded-full blur-2xl"
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  opacity: [0.4, 0.7, 0.4]
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait" custom={currentIndex}>
            <motion.div
              key={currentIndex}
              custom={currentIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full h-full"
            >
              {/* Background image with overlay */}
              <div className="absolute inset-0">
                <img
                  src={services[currentIndex].image}
                  alt={services[currentIndex].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-gray-900/30 to-gray-900/30"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/10"></div>
              </div>

              {/* Content container */}
              <div className="relative h-full flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <motion.div
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-2xl relative z-10"
                  >
                    {/* Service icon */}
                    <motion.div variants={itemVariants} className="mb-6">
                      <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-red-500/20 backdrop-blur-sm border border-red-500/30 text-red-400">
                        {services[currentIndex].icon}
                      </div>
                    </motion.div>

                    {/* Service stats */}
                    <motion.div variants={itemVariants} className="mb-2">
                      <div className="text-sm font-medium tracking-widest text-red-400">
                        {String(currentIndex + 1).padStart(2, '0')}/{String(services.length).padStart(2, '0')} • {services[currentIndex].stats}
                      </div>
                    </motion.div>

                    {/* Service title */}
                    <motion.h1
                      variants={itemVariants}
                      className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight"
                    >
                      <span className="text-red-500">{services[currentIndex].name.split(' ')[0]}</span>{' '}
                      <span className="text-white">{services[currentIndex].name.split(' ').slice(1).join(' ')}</span>
                    </motion.h1>

                    {/* Service description */}
                    <motion.p
                      variants={itemVariants}
                      className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed"
                    >
                      {services[currentIndex].description}
                    </motion.p>

                    {/* CTA buttons */}
                    <motion.div
                      variants={itemVariants}
                      className="flex flex-col sm:flex-row gap-3 mb-8"
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <NavLink
                          to="/all"
                          className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                          View Our Projects
                          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </NavLink>
                      </motion.div>
                      
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <NavLink
                          to="contact"
                          className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm"
                        >
                          <Zap className="w-5 h-5 group-hover:scale-110 transition-transform" />
                          Contact Us
                        </NavLink>
                      </motion.div>
                    </motion.div>

                    {/* Feature highlights */}
                    <motion.div
                      variants={itemVariants}
                      className="flex flex-wrap gap-6 text-sm text-gray-300"
                    >
                      <div className="flex items-center gap-2">
                        <Shield className="w-5 h-5 text-red-400 flex-shrink-0" />
                        <span>Licensed & Insured</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-red-400 flex-shrink-0" />
                        <span>5-Star Rated</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-red-400 flex-shrink-0" />
                        <span>1000+ Happy Clients</span>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {renderIndicators()}

          {/* Navigation buttons - Desktop only */}
          <div className="hidden lg:block">
            <motion.button
              onClick={handlePrev}
              className="absolute left-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 backdrop-blur-sm text-white z-30 hover:bg-white/20 transition-all duration-300 shadow-lg group border border-white/20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            
            <motion.button
              onClick={handleNext}
              className="absolute right-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 backdrop-blur-sm text-white z-30 hover:bg-white/20 transition-all duration-300 shadow-lg group border border-white/20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          {/* Progress bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gray-700 z-30">
            <motion.div
              className="h-full bg-gradient-to-r from-red-400 via-red-500 to-red-600"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: isMobile ? 4 : 6, ease: 'linear' }}
              key={currentIndex}
            />
          </div>
        </section>

        {/* Floating contact button - Mobile only */}
        <motion.div
          className="fixed bottom-6 right-6 z-50 lg:hidden"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring" }}
        >
          <motion.a
            href="tel:+911234567890"
            className="flex items-center justify-center w-16 h-16 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              boxShadow: [
                "0 4px 20px rgba(239, 68, 68, 0.3)",
                "0 8px 30px rgba(239, 68, 68, 0.5)",
                "0 4px 20px rgba(239, 68, 68, 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Phone className="w-6 h-6" />
          </motion.a>
        </motion.div>

        {/* Page sections */}
        <div className="bg-white text-gray-900">
          <Stats id="stats" />
          <Projects id="projects" />
          <Services id="services" />
          <About />
          <Contactform />
        </div>
      </div>
    </>
  );
};

export default Home;