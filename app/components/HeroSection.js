"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, BarChart3, TruckIcon, X, Send, Play } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    fleetSize: '',
  });
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_bd8xqoi',
          template_id: 'template_gdv4gzz',
          user_id: 'moxGesNsHlG4mbFyg',
          template_params: {
            to_email: 'omar@optimuspaper.com',
            from_name: `${formData.firstName} ${formData.lastName}`,
            from_email: formData.email,
            message: JSON.stringify(formData, null, 2)
          }
        })
      });
      
      if (response.ok) {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          fleetSize: '',
        });
        router.push('/thankyou');
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit form. Please try again.');
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-white overflow-hidden">
      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/70 z-50 flex items-center justify-center p-4"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/9WOqkS9Eyj0?autoplay=1"
                title="Product Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative">
        {/* Background Decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 overflow-hidden"
        >
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-blue-200 rounded-full blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-cyan-200 rounded-full blur-3xl" />
        </motion.div>

        <main className="container mx-auto px-6 pt-24 pb-32 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 max-w-2xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-6 text-sm"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
                #1 Rated DOT Compliance Solution
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight"
              >
                Transform Your <br />
                <span className="text-blue-500">Fleet Compliance</span>
                <br />
                Management
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-blue-800 text-lg mb-8"
              >
                Automate your DOT compliance, eliminate paperwork, and stay
                ahead of deadlines with our intelligent platform.
              </motion.p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsVideoModalOpen(true)}
                className="bg-white text-blue-800 px-8 py-4 rounded-xl hover:bg-blue-50 
                          border-2 border-blue-100 hover:border-blue-200 transition-all duration-300 mb-12 flex items-center gap-2"
              >
                Watch Demo
                <Play className="w-4 h-4" />
              </motion.button>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white bg-blue-100"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-blue-900">Join 2,000+ companies</span>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="w-48 mr-4"
                >
                  <Image
                    src="/LogoOptimusBlue.png"
                    alt="Optimus Logo"
                    width={192}
                    height={48}
                    priority
                    className="object-contain w-full h-auto"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Right Content - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex-1 relative max-w-xl w-full mx-auto lg:mx-0"
            >
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mb-8"
                >
                  <h2 className="text-2xl font-bold text-blue-900 mb-2">
                    Get Started Today
                  </h2>
                  <p className="text-blue-700 text-sm">
                    Fill out the form below and we&apos;ll get back to you within 24 hours
                  </p>
                </motion.div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        className="w-full px-4 py-3 rounded-lg bg-blue-50 border-2 border-transparent 
                                focus:border-blue-500 focus:bg-white outline-none transition-all"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        className="w-full px-4 py-3 rounded-lg bg-blue-50 border-2 border-transparent 
                                focus:border-blue-500 focus:bg-white outline-none transition-all"
                        required
                      />
                    </div>
                  </div>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Work Email"
                    className="w-full px-4 py-3 rounded-lg bg-blue-50 border-2 border-transparent 
                            focus:border-blue-500 focus:bg-white outline-none transition-all"
                    required
                  />

                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full px-4 py-3 rounded-lg bg-blue-50 border-2 border-transparent 
                            focus:border-blue-500 focus:bg-white outline-none transition-all"
                    required
                  />

                  <select
                    name="fleetSize"
                    value={formData.fleetSize}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-blue-50 border-2 border-transparent 
                            focus:border-blue-500 focus:bg-white outline-none transition-all"
                    required
                  >
                    <option value="">Select Fleet Size</option>
                    <option value="1-10">1-10 vehicles</option>
                    <option value="11-50">11-50 vehicles</option>
                    <option value="51-200">51-200 vehicles</option>
                    <option value="200+">200+ vehicles</option>
                  </select>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg
                            transition-all duration-200 flex items-center justify-center gap-2 !mt-6"
                  >
                    Get Started
                    <Send className="w-4 h-4" />
                  </motion.button>
                </form>

                <p className="text-xs text-blue-700 text-center mt-4">
                  By submitting, you agree to our{" "}
                  <a href="#" className="text-blue-600 hover:underline">Terms</a>
                  {" "}and{" "}
                  <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                </p>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HeroSection;
