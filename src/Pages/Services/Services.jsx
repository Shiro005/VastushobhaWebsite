import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);

  const servicesData = [
    {
      title: "Planning",
      description: "Strategic project planning for optimal outcomes",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      longDescription: "Our comprehensive planning services include detailed project scoping, timeline development, resource allocation, and risk assessment. We create a solid foundation for your project with clear milestones and efficient workflows to ensure success from conception to completion.",
      icon: "📐",
      color: "bg-blue-500"
    },
    {
      title: "Sanctioning",
      description: "Expert guidance through regulatory approvals",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1511&q=80",
      longDescription: "We navigate complex approval processes with regulatory bodies, ensuring all permits and sanctions are obtained efficiently. Our team handles paperwork, compliance checks, and government liaisons to prevent costly delays and keep your project on track.",
      icon: "📝",
      color: "bg-green-500"
    },
    {
      title: "Construction",
      description: "Complete construction management solutions",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      longDescription: "From groundbreaking to final inspections, our construction services deliver exceptional quality craftsmanship. We maintain strict adherence to timelines, budgets, and safety standards while providing transparent communication throughout your project's lifecycle.",
      icon: "🏗️",
      color: "bg-red-500"
    },
    {
      title: "3D Modeling",
      description: "Immersive visualizations of your project",
      image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      longDescription: "Our advanced 3D modeling creates photorealistic renderings and interactive walkthroughs. Experience your space before construction begins, allowing for design refinements and confident decision-making about materials, layouts, and finishes.",
      icon: "🖥️",
      color: "bg-purple-500"
    },
    {
      title: "Interior Design",
      description: "Harmonious and functional spaces",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
      longDescription: "Our interior design team creates spaces that balance aesthetics with functionality. We incorporate your personal style while optimizing flow, lighting, and spatial relationships to create environments that are both beautiful and practical.",
      icon: "🛋️",
      color: "bg-yellow-500"
    },
    {
      title: "Renovation",
      description: "Transforming existing structures with care",
      image: "https://images.pexels.com/photos/5606879/pexels-photo-5606879.jpeg",
      longDescription: "We breathe new life into existing structures through careful renovation that preserves character while updating functionality. Our approach enhances efficiency, comfort, and appearance while respecting the building's original integrity.",
      icon: "🔨",
      color: "bg-orange-500"
    },
    {
      title: "Estimation",
      description: "Accurate financial planning",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      longDescription: "Our detailed estimation services provide comprehensive cost breakdowns, helping you plan financially with confidence. We analyze materials, labor, timelines, and potential variables to create accurate projections and prevent budget overruns.",
      icon: "💰",
      color: "bg-emerald-500"
    },
    {
      title: "Land Sub-division",
      description: "Professional land development",
      image: "https://images.unsplash.com/photo-1500380804539-4e1e8c1e7118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
      longDescription: "We handle the complexities of land subdivision including surveys, legal requirements, and infrastructure planning. Our team coordinates with local authorities to maximize land value while ensuring compliance with all regulations.",
      icon: "🏞️",
      color: "bg-teal-500"
    }
  ];

  const openServiceDetails = (service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const closeServiceDetails = () => {
    setSelectedService(null);
    document.body.style.overflow = 'auto';
  };

  const goToContact = () => {
    navigate('/contact');
    closeServiceDetails();
  };

  return (
    <>
      <Helmet>
        <title>Premium Construction Services | Vastushobha Construction</title>
        <meta name="description" content="Comprehensive construction services including residential buildings, commercial complexes, renovations, and Vastu-compliant designs by Vastushobha Construction." />
        <meta name="keywords" content="construction services, vastu construction, building contractors, home renovation" />
        <link rel="canonical" href="/services" />
      </Helmet>

      <div className="relative bg-white min-h-screen w-full overflow-x-hidden" id="services">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-gray-50 to-white pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-blue-300 blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-red-200 blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-gray-900"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Our <span className="text-red-600">Construction</span> Services
              </motion.h1>

              <motion.div
                className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mb-6 mx-auto rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />

              <motion.p
                className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Comprehensive solutions from concept to completion, delivered with precision and Vastu compliance.
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Services Grid Section */}
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {servicesData.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                index={index}
                onClick={() => openServiceDetails(service)}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                isHovered={hoveredService === index}
              />
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        {/* <div className="bg-gray-900 py-14 px-4 text-center">
          <div className="container mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Have a project in mind?
              </h3>
              <p className="text-gray-300 mb-6 text-base md:text-lg">
                Let's discuss how we can bring your vision to life with our expertise.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.button
                  className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md font-medium text-white transition-colors shadow-md"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/contact')}
                >
                  Get Free Consultation
                </motion.button>
                <motion.button
                  className="bg-white hover:bg-gray-100 px-6 py-3 rounded-md font-medium text-gray-900 transition-colors shadow-md"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/projects')}
                >
                  View Our Projects
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div> */}

        {/* Service Detail Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeServiceDetails}
            >
              <motion.div
                className="bg-white rounded-lg overflow-hidden shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", bounce: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <motion.img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <motion.h3
                      className="text-2xl font-bold text-white"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {selectedService.title}
                    </motion.h3>
                    <motion.p
                      className="text-white/90 mt-1 text-sm"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {selectedService.description}
                    </motion.p>
                  </div>
                  {/* <motion.div
                    className={`absolute top-4 right-4 w-10 h-10 flex items-center justify-center ${selectedService.color} text-white rounded-full text-xl shadow-md`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {selectedService.icon}
                  </motion.div> */}
                </div>

                <div className="p-5 md:p-6 overflow-y-auto flex-grow">
                  <motion.p
                    className="text-gray-700 mb-6 text-base leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    {selectedService.longDescription}
                  </motion.p>
                  
                  <motion.div 
                    className="bg-gray-50 p-4 rounded-lg border-l-4 border-red-500 mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <h4 className="font-bold text-gray-800 mb-2">Why Choose Us?</h4>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">✓</span>
                        Vastu-compliant designs for harmonious living
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">✓</span>
                        Experienced professionals with 10+ years in construction
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">✓</span>
                        Transparent pricing with no hidden costs
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">✓</span>
                        Quality materials sourced from trusted suppliers
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">✓</span>
                        Timely project completion with regular updates
                      </li>
                    </ul>
                  </motion.div>
                </div>

                <div className="p-4 border-t border-gray-200">
                  <div className="flex gap-3">
                    <motion.button
                      className="flex-1 py-2 px-3 bg-gray-100 hover:bg-gray-200 rounded-md font-medium text-gray-800 transition-colors text-sm md:text-base"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={closeServiceDetails}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      Close
                    </motion.button>
                    {/* <motion.button
                      className="flex-1 py-2 px-3 bg-red-600 hover:bg-red-700 rounded-md font-medium text-white transition-colors text-sm md:text-base"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={goToContact}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      Get a Free Quote
                    </motion.button> */}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

const ServiceCard = ({ service, index, onClick, onMouseEnter, onMouseLeave, isHovered }) => {
  return (
    <motion.div
      className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Image with parallax effect */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        animate={{
          scale: isHovered ? 1.05 : 1
        }}
        transition={{ duration: 0.4 }}
      >
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Floating icon */}
      {/* <motion.div
        className={`absolute top-3 right-3 w-9 h-9 flex items-center justify-center ${service.color} text-white rounded-full text-lg z-10 shadow-md`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: index * 0.1 + 0.2 }}
        whileHover={{ rotate: 15 }}
      >
        {service.icon}
      </motion.div> */}

      {/* Content */}
      <div className="absolute inset-0 p-4 flex flex-col justify-end">
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.2 }}
        >
          <motion.h3
            className="text-xl font-bold text-white mb-1"
            animate={{
              color: isHovered ? service.color : "#ffffff"
            }}
            transition={{ duration: 0.2 }}
          >
            {service.title}
          </motion.h3>
          <motion.p
            className="text-gray-200 text-sm"
            animate={{
              y: isHovered ? 3 : 0
            }}
            transition={{ duration: 0.2 }}
          >
            {service.description}
          </motion.p>

          <motion.div
            className="w-full mt-4 flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            <motion.span
              className="text-white text-sm font-medium flex items-center gap-1"
              animate={{
                x: isHovered ? 3 : 0,
                color: isHovered ? service.color : "#ffffff"
              }}
              transition={{ duration: 0.2 }}
            >
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.span>
          </motion.div>
        </motion.div>
      </div>

      {/* Hover overlay */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          backgroundColor: isHovered ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0)"
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
};

export default Services;