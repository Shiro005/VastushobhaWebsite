import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

function About() {
    const [showFullMission, setShowFullMission] = useState(false);
    const [expandedCard, setExpandedCard] = useState(null);

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const staggerChildren = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardHover = {
        hover: {
            y: -10,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    // Engineer data
    const engineers = [
        {
            id: 1,
            name: "Jaydip Patil Mahalle",
            title: "Co-Founder",
            image: "https://res.cloudinary.com/dvfa1ub9w/image/upload/v1753181155/WhatsApp_Image_2025-07-22_at_16.15.24_ksizst.jpg",
            shortBio: "Structural design expert bringing innovative engineering solutions to complex projects.",
            fullBio: "With expertise in structural design and analysis, Jaydip brings innovative engineering solutions to our most complex projects. His leadership ensures all structures exceed safety standards while maintaining architectural integrity.",
            quote: "Engineering isn't just about calculations—it's about creating structures that elevate human experience.",
            stats: [
                { value: "5+", label: "Years Exp." },
                { value: "B.E", label: "Eng." },
                { value: "30+", label: "Projects" }
            ]
        }
    ];

    const vastuPrinciples = [
        {
            title: "Direction Alignment",
            desc: "Proper orientation of buildings according to cardinal directions",
            icon: "🧭"
        },
        {
            title: "Energy Flow",
            desc: "Designing spaces to enhance positive energy circulation",
            icon: "🌀"
        },
        {
            title: "Element Balance",
            desc: "Harmonizing the five elements in architectural design",
            icon: "⚖️"
        },
        {
            title: "Sacred Geometry",
            desc: "Incorporating auspicious proportions and measurements",
            icon: "📐"
        }
    ];

    return (
        <>
            <Helmet>
                <title>About Vastushobha Construction | Leading Construction Company</title>
                <meta name="description" content="Vastushobha Construction is a trusted construction company with expertise in residential, commercial and industrial building projects. Learn about our experience, team and construction approach." />
                <meta name="keywords" content="about vastushobha construction, construction company history, best construction company, construction team, building contractors experience" />
                <link rel="canonical" href="https://vastushobhaconstruction.in/about" />

                {/* Open Graph tags for better social sharing */}
                <meta property="og:title" content="About Vastushobha Construction | Leading Construction Company" />
                <meta property="og:description" content="Vastushobha Construction is a trusted construction company with expertise in residential, commercial and industrial building projects." />
                <meta property="og:image" content="https://vastushobhaconstruction.in/about-og-image.jpg" />
                <meta property="og:url" content="https://vastushobhaconstruction.in/about" />
                <meta property="og:type" content="website" />

                {/* Company schema for About page */}
                <script type="application/ld+json">
                    {`
                    {
                      "@context": "https://schema.org",
                      "@type": "Organization",
                      "name": "Vastushobha Construction",
                      "url": "https://vastushobhaconstruction.in",
                      "logo": "https://vastushobhaconstruction.in/logo.png",
                      "description": "Vastushobha Construction is a leading construction company offering residential and commercial building services with Vastu principles.",
                      "foundingDate": "2020", 
                      "founders": [
                        {
                          "@type": "Person",
                          "name": "Jaydip Patil Mahalle"
                        }
                      ],
                      "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Your Street Address",
                        "addressLocality": "Akola",
                        "addressRegion": "Maharashtra",
                        "postalCode": "444001",
                        "addressCountry": "IN"
                      },
                      "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+91XXXXXXXXXX",
                        "contactType": "customer service"
                      }
                    }
                    `}
                </script>
            </Helmet>
            
            <div className="min-h-screen bg-gray-50" id='about'>
                {/* Hero Section with Subtle Gradient */}
                <motion.div
                    className="relative py-20 md:py-28 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] opacity-20 bg-cover bg-center"></div>
                    <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
                        <motion.h1
                            className="text-3xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight"
                            variants={fadeIn}
                        >
                            Building <span className="text-primary-400">Tomorrow's</span> Foundations <span className="block">With Today's Expertise</span>
                        </motion.h1>
                        <motion.p
                            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
                            variants={fadeIn}
                        >
                            Where traditional wisdom meets modern engineering excellence
                        </motion.p>
                       
                    </div>
                </motion.div>

                {/* Content Section */}
                <div className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
                    <div className="container mx-auto max-w-6xl">
                        {/* About Company Section */}
                        <motion.div
                            className="flex flex-col lg:flex-row items-center gap-12 mb-20"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerChildren}
                        >
                            {/* Image Section */}
                            <motion.div
                                className="w-full lg:w-1/2 relative"
                                variants={fadeIn}
                            >
                                <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-xl">
                                    <img
                                        src="https://res.cloudinary.com/dvfa1ub9w/image/upload/v1753179865/WhatsApp_Image_2025-07-21_at_16.53.02_t06g19.jpg"
                                        alt="Vastushobha Construction Team"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-6 text-white">
                                        <h3 className="text-2xl font-bold">Since 2004</h3>
                                        <p className="text-gray-300">Building dreams into reality</p>
                                    </div>
                                </div>
                                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                                    <div className="flex items-center">
                                        <div className="bg-primary-100 p-3 rounded-full mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-lg font-bold text-gray-800">ISO Certified</div>
                                            <div className="text-xs text-gray-500">Quality Assurance</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* About Text */}
                            <motion.div
                                className="w-full lg:w-1/2"
                                variants={fadeIn}
                            >
                                <div className="mb-2 text-primary-500 font-semibold">OUR STORY</div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                    Crafting Spaces That <span className="text-primary-500">Inspire</span>
                                </h2>

                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    Founded in 2000, <span className="font-semibold text-primary-600">Vastushobha Construction</span> has been at the forefront of blending traditional Vastu principles with cutting-edge construction technologies to create spaces that are both harmonious and functional.
                                </p>

                                {/* Mission & Vision */}
                                <motion.div
                                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                                    whileHover="hover"
                                    variants={cardHover}
                                >
                                    <div className="flex items-start mb-4">
                                        <div className="bg-primary-100 p-2 rounded-lg mr-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission & Vision</h3>
                                            <p className="text-gray-600 text-base leading-relaxed">
                                                {showFullMission ? (
                                                    <>
                                                        To create structures that harmonize ancient Vastu wisdom with contemporary architectural excellence. We strive to build spaces that promote positive energy flow while meeting modern living standards. Our vision is to become the preferred choice for Vastu-compliant construction, known for our integrity, quality craftsmanship, and client-centric approach.
                                                    </>
                                                ) : (
                                                    <>
                                                        To create structures that harmonize ancient Vastu wisdom with contemporary architectural excellence. We strive to build spaces that promote positive energy flow...
                                                    </>
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                    <motion.button
                                        className="mt-2 text-primary-600 text-base font-medium flex items-center hover:text-primary-800 group"
                                        onClick={() => setShowFullMission(!showFullMission)}
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                    >
                                        {showFullMission ? 'Show Less' : 'Read More'}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            {showFullMission ? (
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            ) : (
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            )}
                                        </svg>
                                    </motion.button>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Vastu Principles Section */}
                        <motion.div 
                            className="mb-20 bg-gradient-to-r from-primary-50 to-gray-50 p-8 rounded-2xl"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                        >
                            <div className="text-center mb-12">
                                <div className="text-primary-500 font-semibold mb-2">OUR APPROACH</div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                    Vastu <span className="text-primary-500">Principles</span> We Follow
                                </h2>
                                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                                    Blending ancient wisdom with modern construction techniques
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {vastuPrinciples.map((principle, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                                        whileHover="hover"
                                        variants={cardHover}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div className="text-4xl mb-4">{principle.icon}</div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{principle.title}</h3>
                                        <p className="text-gray-600">{principle.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Engineer Section - Centered for Single Profile */}
                        <motion.div
                            className="mb-20"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerChildren}
                        >
                            <div className="text-center mb-12">
                                <div className="text-primary-500 font-semibold mb-2">OUR TEAM</div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                    Meet Our <span className="text-primary-500">Founder</span>
                                </h2>
                                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                                    The visionary behind Vastushobha Construction's excellence
                                </p>
                            </div>

                            <div className="flex justify-center">
                                {engineers.map((engineer) => (
                                    <motion.div
                                        key={engineer.id}
                                        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 w-full max-w-2xl"
                                        whileHover="hover"
                                        variants={cardHover}
                                    >
                                        <div className="relative h-80">
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80 z-10"></div>
                                            <img
                                                src={engineer.image}
                                                alt={engineer.name}
                                                className="w-full h-full object-cover object-center"
                                            />
                                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                                                <h3 className="text-2xl font-bold mb-1">{engineer.name}</h3>
                                                <p className="text-sm font-medium bg-primary-600 inline-block px-3 py-1 rounded-full">
                                                    {engineer.title}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            <div className="flex gap-4 mb-4 justify-center">
                                                {engineer.stats.map((stat, index) => (
                                                    <div key={index} className="text-center bg-gray-50 p-3 rounded-lg min-w-[100px]">
                                                        <div className="text-xl font-bold text-primary-600">{stat.value}</div>
                                                        <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                                                    </div>
                                                ))}
                                            </div>

                                            <p className="text-gray-700 text-base mb-4 leading-relaxed text-center">
                                                {expandedCard === engineer.id ? engineer.fullBio : engineer.shortBio}
                                            </p>

                                            {expandedCard === engineer.id && (
                                                <motion.div
                                                    className="mt-4 pt-4 border-t border-gray-200 text-center"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <p className="italic text-primary-600 text-base">
                                                        "{engineer.quote}"
                                                    </p>
                                                </motion.div>
                                            )}

                                            <div className="flex justify-center mt-6">
                                                <motion.button
                                                    className="text-primary-600 text-base font-medium flex items-center hover:text-primary-800 group"
                                                    onClick={() => setExpandedCard(expandedCard === engineer.id ? null : engineer.id)}
                                                    whileHover={{ scale: 1.03 }}
                                                    whileTap={{ scale: 0.97 }}
                                                >
                                                    {expandedCard === engineer.id ? 'Show Less' : 'Read More'}
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        {expandedCard === engineer.id ? (
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                        ) : (
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        )}
                                                    </svg>
                                                </motion.button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Testimonial Section */}
                        <motion.div 
                            className="bg-primary-600 rounded-2xl p-8 md:p-12 text-gray-700 overflow-hidden relative"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                        >
                            <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary-700 rounded-full opacity-20"></div>
                            <div className="absolute -left-20 bottom-0 w-64 h-64 bg-primary-700 rounded-full opacity-20"></div>
                            
                            <div className="relative z-10 text-center max-w-4xl mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-primary-200 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                                    "Vastushobha Construction transformed our vision into a home that's not just beautiful, but also radiates positive energy."
                                </h3>
                                <div className="font-medium">- Satisfied Client</div>
                                <div className="text-primary-200 text-sm mt-2">Residential Project, Akola</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;