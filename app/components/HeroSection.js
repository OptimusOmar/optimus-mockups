"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Star, BarChart3, TruckIcon } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white overflow-hidden">
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

                <main className="container mx-auto px-6 pt-24 pb-24 relative">
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
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-blue-100 text-blue-600 text-sm px-4 py-2 rounded-full w-fit mb-6"
                            >
                                #1 Rated DOT Compliance Solution
                            </motion.div>

                            <motion.h1 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-5xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight"
                            >
                                Transform Your <br/>
                                <span className="text-blue-500">Fleet Compliance</span><br/>
                                Management
                            </motion.h1>

                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="text-blue-800 text-lg mb-8"
                            >
                                Automate your DOT compliance, eliminate paperwork,
                                and stay ahead of deadlines with our intelligent platform.
                            </motion.p>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="flex flex-wrap gap-4 mb-12"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-blue-500 text-white px-8 py-4 rounded-xl hover:bg-blue-600 
                                             transition-all duration-300 flex items-center gap-2"
                                >
                                    Get Started
                                </motion.button>
                                
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-white text-blue-800 px-8 py-4 rounded-xl hover:bg-blue-50 
                                             border-2 border-blue-100 hover:border-blue-200 transition-all duration-300"
                                >
                                    Watch Demo
                                </motion.button>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                                className="flex items-center gap-6 text-blue-900"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-blue-100" />
                                        ))}
                                    </div>
                                    <span className="text-sm">Join 2,000+ companies</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                    <span className="text-sm ml-2">5.0 (85+ reviews)</span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right Content - Interactive Dashboard Preview */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex-1 relative"
                        >
                            <div className="relative bg-white rounded-2xl shadow-2xl p-4 border border-gray-100 h-96">
                                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gray-50 px-4 py-1 rounded-full border text-sm text-gray-600 flex items-center gap-2 z-10">
                                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                                    Live Dashboard
                                </div>
                                <div className="w-full h-full">
                                    <Image
                                        src="/truck.webp"
                                        width={600}
                                        height={400}
                                        alt="Dashboard Preview"
                                        className="rounded-xl shadow-lg w-full h-full object-cover"
                                    />
                                </div>
                                
                                {/* Floating Stats Cards */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 }}
                                    className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg border border-gray-100 z-10"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                            <TruckIcon className="w-5 h-5 text-green-600" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-600">Active Fleets</div>
                                            <div className="text-xl font-bold text-gray-900">2,547</div>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.2 }}
                                    className="absolute -top-6 right-12 bg-white p-4 rounded-lg shadow-lg border border-gray-100 z-10"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                            <BarChart3 className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-600">Compliance Rate</div>
                                            <div className="text-xl font-bold text-gray-900">99.9%</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default HeroSection; 