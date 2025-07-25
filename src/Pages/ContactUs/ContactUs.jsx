import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiPhone, FiMail, FiUser, FiMessageSquare, FiCheckCircle, FiMapPin } from 'react-icons/fi';
import { Helmet } from 'react-helmet-async';
import { href } from 'react-router-dom';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '234b9caf-40e4-48a0-8169-1c68039db20d',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error(result.message || 'Failed to submit form');
      }
    } catch (error) {
      setSubmitError(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.3)",
      borderColor: "#dc2626"
    }
  };

  const buttonVariants = {
    initial: {
      backgroundColor: "#dc2626",
      scale: 1
    },
    hover: {
      backgroundColor: "#dc2626",
      scale: 1.02,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.98
    },
    submitting: {
      backgroundColor: "#dc2626",
      scale: 0.98
    }
  };

  const successVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Vastushobha Construction | Premium Builders in Akola</title>
        <meta name="description" content="Get in touch with Vastushobha Construction for expert building solutions in Akola. Contact us for consultations, project inquiries, and construction services." />
        <meta name="keywords" content="Vastushobha Construction contact, construction company Akola, building contractors, home construction, commercial construction, Akola builders" />
        <link rel="canonical" href="https://vastushobha.co.in/contact" />

        {/* Open Graph tags */}
        <meta property="og:title" content="Contact Vastushobha Construction | Premium Builders in Akola" />
        <meta property="og:description" content="Get in touch with Vastushobha Construction for expert building solutions in Akola. Contact us for consultations and project inquiries." />
        <meta property="og:image" content="https://vastushobha.co.in/images/contact-og-image.jpg" />
        <meta property="og:url" content="https://vastushobha.co.in/contact" />
        <meta property="og:type" content="website" />

        <meta name="format-detection" content="telephone=yes" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact Vastushobha Construction",
              "description": "Contact page for Vastushobha Construction - Premium builders in Akola",
              "mainEntity": {
                "@type": "Organization",
                "name": "Vastushobha Construction",
                "telephone": "+91 9975985757 ",
                "email": "vastushobhaconstructions@gmail.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Your Street Address",
                  "addressLocality": "Akola",
                  "addressRegion": "Maharashtra",
                  "postalCode": "444001",
                  "addressCountry": "IN"
                },
                "sameAs": [
                  "https://www.facebook.com/vastushobhaconstruction",
                  "https://www.instagram.com/vastushobhaconstruction"
                ]
              }
            }
          `}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" id="contact">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2
              variants={cardVariants}
              className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4"
            >
              Let's Build Something Great Together
            </motion.h2>
            <motion.p
              variants={cardVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Have a project in mind or questions about our services? Our team is ready to help you bring your vision to life.
            </motion.p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <motion.div
              variants={cardVariants}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex-1"
            >
              {submitSuccess ? (
                <motion.div
                  variants={successVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-blue-50 mb-6"
                  >
                    <FiCheckCircle className="h-10 w-10 text-red-600" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Thank You for Contacting Us!
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Your message has been sent successfully. We'll get back to you within 24 hours.
                  </p>
                  <motion.button
                    onClick={() => setSubmitSuccess(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors shadow-sm"
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <>
                  <motion.h3 
                    variants={cardVariants}
                    className="text-2xl font-bold text-gray-900 mb-8"
                  >
                    Send Us a Message
                  </motion.h3>

                  {submitError && (
                    <motion.div
                      variants={cardVariants}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg border border-red-100 flex items-start"
                    >
                      <svg className="h-5 w-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{submitError}</span>
                    </motion.div>
                  )}

                  <motion.form
                    onSubmit={handleSubmit}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div variants={cardVariants} className="relative">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiUser className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none text-gray-900 placeholder-gray-400 transition-all duration-200"
                            placeholder="John Doe"
                            required
                            whileFocus={inputVariants.focus}
                          />
                        </div>
                      </motion.div>

                      <motion.div variants={cardVariants} className="relative">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiMail className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none text-gray-900 placeholder-gray-400 transition-all duration-200"
                            placeholder="john@example.com"
                            whileFocus={inputVariants.focus}
                          />
                        </div>
                      </motion.div>
                    </div>

                    <motion.div variants={cardVariants} className="relative">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FiPhone className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none text-gray-900 placeholder-gray-400 transition-all duration-200"
                          placeholder="+91 9876543210"
                          required
                          whileFocus={inputVariants.focus}
                        />
                      </div>
                    </motion.div>

                    <motion.div variants={cardVariants} className="relative">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                          <FiMessageSquare className="h-5 w-5 text-gray-400" />
                        </div>
                        <textarea
                          id="message"
                          name="message"
                          rows="5"
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none text-gray-900 placeholder-gray-400 transition-all duration-200"
                          placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                          required
                          whileFocus={inputVariants.focus}
                        ></textarea>
                      </div>
                    </motion.div>

                    <motion.div variants={cardVariants} className="pt-4">
                      <motion.button
                        type="submit"
                        variants={buttonVariants}
                        initial="initial"
                        whileHover={isSubmitting ? "submitting" : "hover"}
                        whileTap="tap"
                        animate={isSubmitting ? "submitting" : "initial"}
                        disabled={isSubmitting}
                        className="w-full py-4 px-6 text-white font-medium rounded-lg flex items-center justify-center space-x-3 shadow-md hover:shadow-lg transition-all"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Processing Your Request...</span>
                          </>
                        ) : (
                          <>
                            <FiSend className="h-5 w-5" />
                            <span>Get a Free Consultation</span>
                          </>
                        )}
                      </motion.button>
                    </motion.div>
                  </motion.form>
                </>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={cardVariants}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 lg:max-w-md w-full"
            >
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Contact Information</h2>
                  <p className="text-gray-600 mb-8">
                    Prefer to contact us directly? Here's how you can reach our team:
                  </p>

                  <div className="space-y-8">
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="flex-shrink-0 bg-blue-50 p-3 rounded-full">
                        <FiMail className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">Email Address</h3>
                        <a href="mailto:vastushobhaconstructions@gmail.com" className="text-red-600 hover:text-red-800 transition-colors">
                          vastushobhaconstructions@gmail.com
                        </a>
                      </div>
                    </motion.div>

                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="flex-shrink-0 bg-blue-50 p-3 rounded-full">
                        <FiPhone className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">Phone Numbers</h3>
                        <div className="space-y-1">
                          <a href="tel:+918698165330" className="block text-gray-700 hover:text-red-600 transition-colors">
                            +91 9975985757
                          </a>
                          <a href="tel:+917745803646" className="block text-gray-700 hover:text-red-600 transition-colors">
                            +91 9552181899
                          </a>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="flex-shrink-0 bg-blue-50 p-3 rounded-full">
                        <FiMapPin className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">Office Address</h3>
                        <address className="text-gray-600 not-italic">
                          Shree Hari Complex,Shop No 9 & 10, First Floor, Arogya Nagar Square, Kaulkhed Road, Akola.
                        </address>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-lg font-medium text-gray-900 mb-6">Business Hours</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span className="font-medium">10:00 AM - 6:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Saturday</span>
                        <span className="font-medium">10:00 AM - 4:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Tuesday</span>
                        <span className="font-medium">Closed</span>
                      </li>
                    </ul>
                  </div>

                  
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;