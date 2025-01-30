"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, FileCheck, BarChart3, Bell, Zap, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const FeaturesSection = () => {
    const [activeFeature, setActiveFeature] = useState(0);

    const features = [
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Enhanced Compliance",
            description: "Stay compliant with automated document tracking and status monitoring",
            color: "blue",
            image: "/optimuscalendar.png"
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: "Time Savings",
            description: "Reduce administrative work by up to 75% with our automated solutions",
            color: "green",
            image: "/optimuslapsereport.png"
        },
        {
            icon: <FileCheck className="w-8 h-8" />,
            title: "Document Control",
            description: "Centralize all your fleet documents with version control and audit trails",
            color: "purple",
            image: "/optimuscalendar.png"
        }
    ];

    const stats = [
        { value: "98%", label: "Compliance Rate" },
        { value: "2.5K+", label: "Active Users" },
        { value: "75%", label: "Time Saved" },
        { value: "24/7", label: "Support" }
    ];

    return (
        <section className="bg-gradient-to-b from-white to-blue-50 py-32 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-full h-full">
                    <motion.div
                        animate={{
                            backgroundPosition: ['0% 0%', '100% 100%'],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "linear"
                        }}
                        className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage: 'url("/grid.svg")',
                            backgroundSize: '30px 30px'
                        }}
                    />
                </div>
            </div>

            <div className="container mx-auto px-6 relative">
                {/* Header Section */}
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-6"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                        </span>
                        Next-Gen Features
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-bold text-blue-900 mb-8"
                    >
                        The Future of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
                            Fleet Management
                        </span>
                    </motion.h2>
                </div>

                {/* Main Features Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                    {/* Left Column - Feature List */}
                    <div className="space-y-3">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2 }}
                                viewport={{ once: true }}
                                onHoverStart={() => setActiveFeature(index)}
                                className={`relative p-8 rounded-2xl transition-all duration-300 cursor-pointer
                                    ${activeFeature === index ? 'bg-white shadow-2xl scale-105' : 'hover:bg-white/50'}`}
                            >
                                <div className="flex items-start gap-6">
                                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-white transform transition-transform duration-300
                                                 ${activeFeature === index ? 'scale-110 rotate-3' : ''}
                                                 ${feature.color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-blue-600' : ''}
                                                 ${feature.color === 'green' ? 'bg-gradient-to-br from-green-500 to-green-600' : ''}
                                                 ${feature.color === 'purple' ? 'bg-gradient-to-br from-purple-500 to-purple-600' : ''}`}>
                                        {feature.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-blue-900 mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-blue-700 mb-4">
                                            {feature.description}
                                        </p>
                                        <div className={`flex items-center gap-2 font-medium opacity-0 transition-opacity duration-300
                                                     ${activeFeature === index ? 'opacity-100' : ''}
                                                     ${feature.color === 'blue' ? 'text-blue-500' : ''}
                                                     ${feature.color === 'green' ? 'text-green-500' : ''}
                                                     ${feature.color === 'purple' ? 'text-purple-500' : ''}`}>
                                            Learn more <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                                {activeFeature === index && (
                                    <motion.div
                                        layoutId="activeFeature"
                                        className="absolute inset-0 border-2 border-blue-500/20 rounded-2xl"
                                    />
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Column - Interactive Preview */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="sticky top-24 rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <div className="relative aspect-[4/3] bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl overflow-hidden">
                                <Image
                                    src={features[activeFeature].image}
                                    fill
                                    alt="Feature Preview"
                                    className="object-cover mix-blend-overlay opacity-75"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-20 
                                        group-hover:opacity-30 transition-opacity" />
                            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-blue-100">
                                <div className="text-4xl font-bold text-blue-900 mb-2">{stat.value}</div>
                                <div className="text-blue-600">{stat.label}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection; 
