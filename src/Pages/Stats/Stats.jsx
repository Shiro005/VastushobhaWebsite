import React, { useState, useEffect, useRef } from 'react';
import { FiCheckCircle, FiTrendingUp, FiUsers, FiAward, FiHome, FiEye, FiCompass } from 'react-icons/fi';
import { FaHardHat, FaRegSmile, FaMedal, FaPaintRoller } from 'react-icons/fa';
import { GiElevator, GiStonePath, GiWaterDrop, GiFireplace } from 'react-icons/gi';
import { MdOutlineElectricalServices, MdOutlineKitchen } from 'react-icons/md';
import { IoBedOutline } from 'react-icons/io5';

const Stats = () => {
    const [currentMetric, setCurrentMetric] = useState(0);
    const [hoveredCard, setHoveredCard] = useState(null);
    const [activePlanet, setActivePlanet] = useState(0);
    const canvasRef = useRef(null);

    // Auto-rotate metrics
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMetric(prev => (prev + 1) % metrics.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Planetary animation
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        const centerX = width / 2;
        const centerY = height / 2;
        
        const planets = [
            { name: "Sun", color: "#FDB813", radius: 12, orbit: 80, speed: 0.02, angle: 0 },
            { name: "Moon", color: "#D8D8D8", radius: 8, orbit: 110, speed: 0.03, angle: 1.5 },
            { name: "Mars", color: "#C1440E", radius: 10, orbit: 140, speed: 0.015, angle: 3 },
            { name: "Mercury", color: "#A6A6A6", radius: 7, orbit: 170, speed: 0.025, angle: 4.5 },
            { name: "Jupiter", color: "#E3DCCB", radius: 15, orbit: 200, speed: 0.01, angle: 6 },
            { name: "Venus", color: "#E6C229", radius: 9, orbit: 230, speed: 0.02, angle: 7.5 },
            { name: "Saturn", color: "#C7AA72", radius: 13, orbit: 260, speed: 0.008, angle: 9, ring: true }
        ];

        const vastuTips = [
            "Sun (NE): Brings prosperity and positive energy",
            "Moon (NW): Enhances mental peace and relationships",
            "Mars (South): Provides courage and protection",
            "Mercury (North): Boosts communication and business",
            "Jupiter (NE): Brings wisdom and growth",
            "Venus (SE): Enhances love and creativity",
            "Saturn (West): Teaches patience and discipline"
        ];

        let animationId;
        
        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            
            // Draw center (Earth/Building)
            ctx.beginPath();
            ctx.arc(centerX, centerY, 20, 0, Math.PI * 2);
            ctx.fillStyle = "#4F8A8B";
            ctx.fill();
            ctx.strokeStyle = "#EEEEEE";
            ctx.lineWidth = 2;
            ctx.stroke();
            
            // Draw compass directions
            ctx.font = "14px Arial";
            ctx.fillStyle = "#FFFFFF";
            ctx.textAlign = "center";
            ctx.fillText("N", centerX, centerY - 120);
            ctx.fillText("E", centerX + 120, centerY);
            ctx.fillText("S", centerX, centerY + 140);
            ctx.fillText("W", centerX - 120, centerY);
            
            // Draw orbits and planets
            planets.forEach((planet, index) => {
                // Update planet position
                planet.angle += planet.speed;
                const x = centerX + Math.cos(planet.angle) * planet.orbit;
                const y = centerY + Math.sin(planet.angle) * planet.orbit;
                
                // Check if planet is in active position (top quadrant)
                if (y < centerY - 50 && Math.abs(x - centerX) < 50) {
                    setActivePlanet(index);
                }
                
                // Draw orbit path
                ctx.beginPath();
                ctx.arc(centerX, centerY, planet.orbit, 0, Math.PI * 2);
                ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
                ctx.lineWidth = 1;
                ctx.stroke();
                
                // Draw planet
                ctx.beginPath();
                ctx.arc(x, y, planet.radius, 0, Math.PI * 2);
                ctx.fillStyle = planet.color;
                ctx.fill();
                
                // Draw Saturn's ring
                if (planet.ring) {
                    ctx.beginPath();
                    ctx.ellipse(x, y, planet.radius + 5, planet.radius - 3, planet.angle, 0, Math.PI * 2);
                    ctx.strokeStyle = "#C7AA72";
                    ctx.lineWidth = 2;
                    ctx.stroke();
                }
                
                // Draw planet name
                ctx.fillStyle = "#FFFFFF";
                ctx.font = "10px Arial";
                ctx.textAlign = "center";
                ctx.fillText(planet.name, x, y + planet.radius + 15);
            });
            
            animationId = requestAnimationFrame(animate);
        };
        
        animate();
        
        return () => {
            cancelAnimationFrame(animationId);
        };
    }, []);

    const metrics = [
        {
            value: "250+",
            label: "Vastu-Compliant Elevations",
            description: "Designed with cosmic energy flow in mind",
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
            label: "Vastu Awards",
            description: "For harmonious design integration",
            icon: <FaMedal className="text-3xl" />,
            color: "from-gray-900 to-gray-800"
        }
    ];

    const features = [
        {
            title: "Vastu-Aligned Elevations",
            description: "Facade designs that harmonize with cosmic energies",
            icon: <FaPaintRoller className="text-2xl" />,
            stat: "300+ Projects"
        },
        {
            title: "Energy Flow Optimization",
            description: "Enhancing positive energy through proper orientation",
            icon: <FiCompass className="text-2xl" />,
            stat: "98% Retention"
        },
        {
            title: "Planetary Harmony",
            description: "Designs aligned with favorable planetary positions",
            icon: <FiEye className="text-2xl" />,
            stat: "25 Awards"
        },
        {
            title: "Elemental Balance",
            description: "Perfect balance of earth, water, fire, air & space",
            icon: <FiTrendingUp className="text-2xl" />,
            stat: "100% Satisfaction"
        }
    ];

    const vastuPrinciples = [
        {
            icon: <GiStonePath className="text-2xl" />,
            title: "Earth Elements",
            description: "Proper placement of heavy structures in SW for stability"
        },
        {
            icon: <GiWaterDrop className="text-2xl" />,
            title: "Water Features",
            description: "NE direction for water elements to enhance prosperity"
        },
        {
            icon: <MdOutlineElectricalServices className="text-2xl" />,
            title: "Electricals",
            description: "SE corner for electrical items and fire-related elements"
        },
        {
            icon: <MdOutlineKitchen className="text-2xl" />,
            title: "Kitchen",
            description: "SE sector for kitchen placement as per Vastu"
        },
        {
            icon: <IoBedOutline className="text-2xl" />,
            title: "Bedrooms",
            description: "SW master bedroom for restful sleep and stability"
        },
        {
            icon: <GiFireplace className="text-2xl" />,
            title: "Fire Elements",
            description: "Proper placement of fire-related elements in SE"
        }
    ];

    const vastuTips = [
        "Sun (NE): Brings prosperity and positive energy",
        "Moon (NW): Enhances mental peace and relationships",
        "Mars (South): Provides courage and protection",
        "Mercury (North): Boosts communication and business",
        "Jupiter (NE): Brings wisdom and growth",
        "Venus (SE): Enhances love and creativity",
        "Saturn (West): Teaches patience and discipline"
    ];

    return (
        <div className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-100 via-gray-100 to-gray-200">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
                        <span className="text-red-600">Vastu-Aligned</span> Elevations, <span className="text-gray-900">Cosmic</span> Harmony
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Transforming buildings with Vastu-compliant designs that harmonize with cosmic energies and planetary influences
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

                {/* Vastu Planetary Section */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl overflow-hidden mb-16">
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Planetary <span className="text-red-500">Alignment</span> in Vastu
                            </h2>
                            <p className="text-gray-300 mb-6 text-lg">
                                Our designs consider planetary positions and their Vastu influences for optimal energy flow
                            </p>
                            <div className="mb-6 p-4 bg-gray-800 rounded-lg">
                                <h3 className="text-xl font-bold text-red-400 mb-2">
                                    {vastuTips[activePlanet]}
                                </h3>
                                <p className="text-gray-300">
                                    Planetary positions significantly impact building energy. Our designs align with favorable cosmic influences.
                                </p>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "Each planet governs specific directions in Vastu",
                                    "Proper alignment enhances positive energies",
                                    "Planetary transitions affect building energies",
                                    "Our designs mitigate negative influences",
                                    "Harmonizing with cosmic rhythms brings prosperity"
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
                        <div className="lg:w-1/2 bg-gray-700 min-h-80 relative flex items-center justify-center p-4">
                            <canvas 
                                ref={canvasRef} 
                                width={600} 
                                height={600}
                                className="w-full h-full max-w-lg"
                            />
                        </div>
                    </div>
                </div>

                {/* Vastu Principles Grid */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Key <span className="text-red-600">Vastu</span> Principles
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {vastuPrinciples.map((principle, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full mb-4 bg-gray-900 text-white">
                                    {principle.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {principle.title}
                                </h3>
                                <p className="text-gray-600">
                                    {principle.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Client Testimonials */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Vastu <span className="text-red-600">Success</span> Stories
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                quote: "After implementing their Vastu suggestions, our business saw immediate growth.",
                                author: "Sanjay Gupta, Retail Complex"
                            },
                            {
                                quote: "The Vastu-aligned elevation transformed our home's energy completely.",
                                author: "Priya Sharma, Residential Client"
                            },
                            {
                                quote: "Their understanding of planetary influences in design is remarkable.",
                                author: "Urban Spaces Developers"
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
                    <h2 className="text-3xl font-bold text-white mb-4">Ready for Vastu-Compliant Elevation?</h2>
                    <p className="text-red-100 mb-6 max-w-2xl mx-auto text-lg">
                        Let's discuss how our Vastu-aligned designs can bring cosmic harmony to your project.
                    </p>
                    <button className="bg-gray-900 hover:bg-black text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
                        Schedule Vastu Consultation
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Stats;