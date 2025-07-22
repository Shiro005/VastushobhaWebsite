import React from 'react';
import { Linkedin, Instagram, Clock, Phone, Mail, MapPin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-100 pt-12 pb-6 border-t border-gray-800">
            <div className="container mx-auto px-4 md:px-6">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-18 h-18 rounded-lg flex items-center justify-center">
                                <img 
                                    src="/logo.png" 
                                    alt="Vastushobha Construction" 
                                    className="w-full h-full object-contain" 
                                />
                            </div>
                            {/* <span className="text-xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                                Vastushobha
                            </span> */}
                        </div>

                        <p className="text-gray-300 text-sm leading-relaxed">
                            Creating harmonious spaces with Vedic principles. We blend traditional wisdom with modern techniques.
                        </p>
                        
                        <div className="flex items-center space-x-2 text-gray-400 text-sm">
                            <Clock className="w-4 h-4 text-red-500" />
                            <span>Mon-Sun: 10:00 AM - 6:00 PM</span>
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-3 pt-2">
                            <a href="https://www.facebook.com/profile.php?id=61574759343315&mibextid=ZbWKwL" className="text-gray-400 hover:text-red-500 transition-colors" aria-label="Facebook">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://www.instagram.com/vastushobhaconstruction?igsh=NDNmbDhvd2hyODNn" className="text-gray-400 hover:text-red-500 transition-colors" aria-label="Instagram">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://wa.me/919975985757" className="text-gray-400 hover:text-red-500 transition-colors" aria-label="WhatsApp">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-gray-100 font-semibold text-md mb-4 pb-2 border-b border-gray-800">Services</h3>
                        <ul className="space-y-2">
                            {[
                                "Vastu Consultation",
                                "Residential Construction",
                                "Interior Design",
                                "Renovation"
                            ].map((service) => (
                                <li key={service}>
                                    <a href="#" className="text-gray-400 hover:text-red-400 transition-colors text-sm flex items-center">
                                        <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-gray-100 font-semibold text-md mb-4 pb-2 border-b border-gray-800">Quick Links</h3>
                        <ul className="space-y-2">
                            {[
                                { name: "About Us", path: "/about" },
                                { name: "Projects", path: "/projects" },
                                { name: "Contact", path: "/contact" }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-gray-400 hover:text-red-400 transition-colors text-sm flex items-center">
                                        <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-gray-100 font-semibold text-md mb-4 pb-2 border-b border-gray-800">Contact</h3>
                        <div className="space-y-3">
                            <div className="flex items-start">
                                <MapPin className="w-4 h-4 text-red-500 mt-1 mr-3 flex-shrink-0" />
                                <p className="text-gray-400 text-sm">
                                    Shree Hari Complex,Shop No 9 & 10, First Floor, Arogya Nagar Square, Kaulkhed Road, Akola.
                                </p>
                            </div>
                            
                            <div className="space-y-2">
                                <a href="tel:+919876543210" className="flex items-center group">
                                    <Phone className="w-4 h-4 text-red-500 mr-3" />
                                    <span className="text-gray-400 hover:text-red-400 transition-colors text-sm">+91 9975985757</span>
                                </a>
                                <a href="mailto:contact@vastushobha.com" className="flex items-center group">
                                    <Mail className="w-4 h-4 text-red-500 mr-3" />
                                    <span className="text-gray-400 hover:text-red-400 transition-colors text-sm">vastushobhaconstructions@gmail.com</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 pt-6 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-3 md:mb-0">
                            <p className="text-gray-500 text-xs">
                                © {new Date().getFullYear()} Vastushobha Construction. All rights reserved.
                            </p>
                        </div>
                         <a href="https://webreichtech.vercel.app/"><div className="text-gray-500 text-xs">
                            Developed and Designed by<span className="text-red-400">Webreich Technologies</span>
                        </div></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;