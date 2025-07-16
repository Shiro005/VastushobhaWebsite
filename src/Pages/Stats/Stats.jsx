import React, { useState, useEffect } from 'react';
import { FiCheckCircle, FiTrendingUp, FiUsers, FiAward, FiHome, FiEye } from 'react-icons/fi';
import { FaHardHat, FaRegSmile, FaMedal, FaPaintRoller } from 'react-icons/fa';
import { GiElevator } from 'react-icons/gi';

const Stats = () => {
    const [currentMetric, setCurrentMetric] = useState(0);
    const [hoveredCard, setHoveredCard] = useState(null);

    // Auto-rotate metrics
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMetric(prev => (prev + 1) % metrics.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const metrics = [
        {
            value: "250+",
            label: "Stunning Elevations",
            description: "Designed and executed with precision",
            icon: <GiElevator className="text-3xl" />,
            color: "from-red-600 to-red-500"
        },
        {
            value: "98%",
            label: "Client Satisfaction",
            description: "Happy clients who recommend us",
            icon: <FaRegSmile className="text-3xl" />,
            color: "from-gray-900 to-gray-800"
        },
        {
            value: "15+",
            label: "Years Experience",
            description: "Crafting architectural excellence",
            icon: <FaHardHat className="text-3xl" />,
            color: "from-red-600 to-red-500"
        },
        {
            value: "50+",
            label: "Awards Won",
            description: "For design and construction quality",
            icon: <FaMedal className="text-3xl" />,
            color: "from-gray-900 to-gray-800"
        }
    ];

    const features = [
        {
            title: "Signature Elevations",
            description: "Unique facade designs that transform buildings into landmarks",
            icon: <FaPaintRoller className="text-2xl" />,
            stat: "300+ Projects"
        },
        {
            title: "Quality Craftsmanship",
            description: "Premium materials and skilled execution for lasting beauty",
            icon: <FiCheckCircle className="text-2xl" />,
            stat: "98% Retention"
        },
        {
            title: "Design Innovation",
            description: "Cutting-edge elevation concepts that set trends",
            icon: <FiEye className="text-2xl" />,
            stat: "25 Awards"
        },
        {
            title: "Timely Delivery",
            description: "Projects completed as promised, every time",
            icon: <FiTrendingUp className="text-2xl" />,
            stat: "100% On-Time"
        }
    ];

    return (
        <div className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-100 via-gray-100 to-gray-200">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
                        <span className="text-red-600">Elevating</span> Spaces, <span className="text-gray-900">Inspiring</span> Lives
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Transforming buildings with our award-winning elevation designs and construction excellence
                    </p>
                </div>

                {/* Rotating Metric */}
                <div className="relative h-40 mb-16">
                    {metrics.map((metric, index) => (
                        <div 
                            key={index}
                            className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${index === currentMetric ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <div className={`flex items-center justify-center w-20 h-20 rounded-full mb-4 bg-gradient-to-r ${metric.color} shadow-lg`}>
                                <div className="text-white">
                                    {metric.icon}
                                </div>
                            </div>
                            <h3 className="text-4xl font-bold text-gray-900 mb-2">
                                {metric.value}
                            </h3>
                            <p className="text-xl font-medium text-gray-800">
                                {metric.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                            className={`bg-white rounded-xl p-6 border border-gray-100 shadow-sm transition-all duration-300 ${hoveredCard === index ? 'transform -translate-y-2 shadow-lg border-red-100' : ''}`}
                        >
                            <div className="flex items-center justify-center w-12 h-12 rounded-full mb-4 bg-red-600 text-white">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 mb-4">
                                {feature.description}
                            </p>
                            <p className="text-sm font-medium text-red-600">
                                {feature.stat}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Elevation USP Section */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl overflow-hidden mb-16">
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Our <span className="text-red-500">Elevation</span> Difference
                            </h2>
                            <p className="text-gray-300 mb-6 text-lg">
                                What makes our elevations stand out in the competitive construction landscape
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Custom-designed facades for every project",
                                    "Premium materials that withstand time",
                                    "Innovative 3D visualization before construction",
                                    "Seamless integration with structural design",
                                    "Energy-efficient elevation solutions"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <FiCheckCircle className="text-red-500 text-xl" />
                                        </div>
                                        <p className="ml-3 text-gray-300">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 bg-gray-700 min-h-80 relative">
                            {/* This would be your elevation showcase - could be an image or component */}
                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                                <div className="text-center p-6">
                                    <GiElevator className="text-red-500 text-6xl mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-white mb-2">Signature Elevations</h3>
                                    <p className="text-gray-300">View our portfolio of award-winning designs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Client Testimonials */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        What Our <span className="text-red-600">Clients</span> Say
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                quote: "The elevation design completely transformed our building into a neighborhood landmark.",
                                author: "Rajesh Mehta, Residential Client"
                            },
                            {
                                quote: "Their attention to detail in the facade execution was remarkable.",
                                author: "Sunita Patel, Commercial Project"
                            },
                            {
                                quote: "We've worked with many firms, but their elevation concepts are truly innovative.",
                                author: "Aditya Developers"
                            }
                        ].map((testimonial, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                <div className="flex items-center mb-4">
                                    {[...Array(5)].map((_, star) => (
                                        <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                                <p className="text-gray-800 font-medium">{testimonial.author}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-l from-gray-600 to-gray-900 rounded-2xl p-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Ready to Elevate Your Project?</h2>
                    <p className="text-red-100 mb-6 max-w-2xl mx-auto text-lg">
                        Let's discuss how our signature elevation designs can transform your construction project.
                    </p>
                    <button className="bg-gray-900 hover:bg-black text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
                        Schedule Consultation
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Stats;