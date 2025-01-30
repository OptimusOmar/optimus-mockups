"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServicesSection = () => {
    const services = [
        {
            title: "AI-Powered Document Management",
            description: "Automate tracking and updates, reducing human errors and saving valuable time.",
            icon: "🤖",
            color: "blue"
        },
        {
            title: "Centralized Compliance Hub",
            description: "Keep all your critical documents in one place for quick and easy access.",
            icon: "📊",
            color: "blue"
        },
        {
            title: "Real-Time Alerts",
            description: "Stay proactive with 30-day advance notifications for expiring documents and deadlines.",
            icon: "⚡",
            color: "blue"
        },
        {
            title: "Seamless Integration",
            description: "Effortlessly connect with your current systems, including ELDs, TMS, and HR platforms.",
            icon: "🔄",
            color: "blue"
        },
        {
            title: "Audit Readiness",
            description: "Be prepared with comprehensive, time-stamped reports showcasing your compliance status.",
            icon: "✅",
            color: "blue"
        },
        {
            title: "Compliance as a Competitive Edge",
            description: "Turn compliance into a business asset, building trust and reducing risk.",
            icon: "🏆",
            color: "blue"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="bg-gradient-to-b from-blue-100 via-blue-50/80 to-white py-24 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-200 rounded-full blur-3xl opacity-30" />
                <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-200 rounded-full blur-3xl opacity-30" />
            </div>

            <div className="container mx-auto px-6 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-blue-100 text-blue-600 text-sm px-4 py-2 rounded-full w-fit mx-auto mb-6"
                    >
                        Our Services
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-blue-900 mb-6"
                    >
                        Efficient and Integrated <br />
                        <span className="text-blue-500">Fleet Solutions</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        viewport={{ once: true }}
                        className="text-blue-700 text-lg max-w-2xl mx-auto"
                    >
                        Simplify operations with our efficient, quality-focused services
                        designed to streamline your fleet management.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl 
                                     transition-all duration-300 border border-blue-100"
                        >
                            <div className="flex flex-col h-full">
                                <div className="mb-4">
                                    <div className={`w-12 h-12 bg-${service.color}-50 rounded-xl 
                                                flex items-center justify-center text-2xl group-hover:scale-110 
                                                transition-transform duration-300`}
                                    >
                                        {service.icon}
                                    </div>
                                </div>

                                <h3 className={`text-xl font-semibold text-blue-900 mb-3 
                                            group-hover:text-${service.color}-500 transition-colors`}
                                >
                                    {service.title}
                                </h3>

                                <p className="text-blue-700 text-base flex-grow">
                                    {service.description}
                                </p>

                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    whileHover={{ opacity: 1, x: 0 }}
                                    className={`mt-6 flex items-center gap-2 text-${service.color}-500 
                                            font-medium cursor-pointer`}
                                >
                                    Learn More
                                    <ArrowRight className="w-4 h-4" />
                                </motion.div>
                            </div>

                            {/* Decorative gradient line */}
                            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r 
                                        from-${service.color}-500 to-${service.color}-300 
                                        rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity`} 
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection; 