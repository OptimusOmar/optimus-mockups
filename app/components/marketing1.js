"use client";
import React, { useEffect, useRef, useState } from "react";
import { Star, HelpCircle, MessageSquare, BarChart3, TruckIcon, CloudDownloadIcon } from "lucide-react";
import { GrDocumentMissing, GrDocumentNotes, GrDocumentVerified } from "react-icons/gr";
import { FaTruckMoving } from "react-icons/fa6";
import { MdSentimentSatisfied } from "react-icons/md";

const ManufacturingLanding = () => {
    // Add form state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        fleetSize: "",
        challenge: "",
        currentMethod: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add your form submission logic here
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            {/* <nav className="flex items-center justify-between px-6 py-4 bg-sky-400">
        <div className="flex items-center">
          <span className="ml-2 font-semibold text-white">Optimus Paper</span>
        </div>
        
        <div className="hidden md:flex space-x-6 text-sm">
          <a href="#" className="text-white hover:text-blue-900">Benefits</a>
          <a href="#" className="text-white hover:text-blue-900">Pricing</a>
          <a href="#" className="text-white hover:text-blue-900">Contact Us</a>
          <a href="#" className="text-white hover:text-blue-900">Blog</a>
          <a href="#" className="text-white hover:text-blue-900">Login</a>
        </div>
        
        <button className="bg-green-400 text-white px-4 py-2 pt-2.5 text-sm hover:bg-green-600">
          Sign Up
        </button>
      </nav> */}

            {/* Hero Section */}
            <main className="container mx-auto px-6 pt-16 pb-24 relative">
                {/* Left floating icons */}
                <div className="absolute left-10 top-[22rem] -translate-y-1/2 space-y-4">
                    <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center shadow-lg">
                        <TruckIcon className="w-5 h-5 text-white" />
                    </div>
                    <div className="w-10 h-10 bg-white rounded-full border-2 border-blue-900 flex items-center justify-center shadow-lg absolute bottom-12 left-16">
                        <GrDocumentVerified className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center shadow-lg">
                        <CloudDownloadIcon className="w-5 h-5 text-white" />
                    </div>
                </div>

                {/* Right floating icons */}
                <div className="absolute right-10 top-[22rem] -translate-y-1/2 flex flex-col items-center gap-4">
                    <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center shadow-lg absolute top-8 right-12">
                        <BarChart3 className="w-5 h-5 text-black" />
                    </div>
                    <div className="w-3 h-12 bg-blue-900 rounded-full"></div>
                </div>

                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                        Your Trusted Partner in DOT Compliance
                    </h1>
                    <p className="text-blue-800 mb-8">
                        Automate, Centralize, and Stay Compliant with Confidence
                    </p>

                    <div className="flex justify-center gap-4 mb-12">
                        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 border-none">
                            Get Started
                        </button>
                        <button className="bg-white border border-blue-200 text-blue-800 px-6 py-3 rounded-lg hover:border-blue-500">
                            Try Demo
                        </button>
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center items-center gap-1 mb-16">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                                key={star}
                                className="w-5 h-5 fill-yellow-400 text-yellow-400"
                            />
                        ))}
                        <span className="ml-2 text-blue-800">5.0</span>
                        <span className="text-blue-600 text-sm ml-2">
                            from 85+ reviews
                        </span>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-end">
                    {/* Manufacturing Image */}
                    <div className="rounded-2xl overflow-hidden">
                        <img
                            src="/image/truck.webp"
                            alt="Manufacturing pipes"
                            className="w-full object-cover h-[30rem]"
                        />
                    </div>

                    {/* Manufacturing Image */}
                    <div className="rounded-2xl overflow-hidden">
                        <img
                            src="/image/truckgg.webp"
                            alt="Manufacturing pipes"
                            className="w-full object-cover h-[24rem]"
                        />
                    </div>

                    {/* Manufacturing Image */}
                    <div className="rounded-2xl overflow-hidden">
                        <img
                            src="/image/truckgg.webp"
                            alt="Manufacturing pipes"
                            className="w-full object-cover h-[30rem]"
                        />
                    </div>

                    {/* Contact Form */}
                    <div className="bg-slate-50 rounded-xl shadow-lg p-8 col-span-2">
                        <h3 className="text-2xl font-bold mb-2">
                            Get in Touch
                        </h3>
                        <p className="text-gray-600 mb-6 text-sm">
                            Ready to transform your compliance management? Fill
                            out the form below.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="First name"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                                    required
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last name"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                                    required
                                />
                            </div>

                            <input
                                type="email"
                                name="email"
                                placeholder="Your email"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                                required
                            />

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone number"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                                required
                            />

                            <input
                                type="text"
                                name="company"
                                placeholder="Company name"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                                required
                            />

                            <select
                                name="fleetSize"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition text-gray-600"
                                required
                            >
                                <option value="">Select fleet size</option>
                                <option value="1-10">1-10</option>
                                <option value="11-50">11-50</option>
                                <option value="51-200">51-200</option>
                                <option value="200+">200+</option>
                            </select>

                            <select
                                name="challenge"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition text-gray-600"
                                required
                            >
                                <option value="">
                                    Primary compliance challenge
                                </option>
                                <option value="document-management">
                                    Document Management
                                </option>
                                <option value="expiring-alerts">
                                    Expiring Document Alerts
                                </option>
                                <option value="integration">Integration</option>
                                <option value="audit">Audit Preparation</option>
                                <option value="other">Other</option>
                            </select>

                            <select
                                name="currentMethod"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition text-gray-600"
                                required
                            >
                                <option value="">
                                    Current compliance management method
                                </option>
                                <option value="manual">Manual</option>
                                <option value="software">Software-Based</option>
                                <option value="outsourced">Outsourced</option>
                                <option value="other">Other</option>
                            </select>

                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition-colors font-medium border-none"
                            >
                                Submit
                            </button>

                            <p className="text-xs text-gray-500 text-center">
                                By contacting us, you agree to our{" "}
                                <a
                                    href="#"
                                    className="text-blue-500 hover:underline"
                                >
                                    Terms of Service
                                </a>{" "}
                                and{" "}
                                <a
                                    href="#"
                                    className="text-blue-500 hover:underline"
                                >
                                    Privacy Policy
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </main>

            {/* Services Section */}
            <section className="bg-sky-800 py-16">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Efficient and Integrated Services
                        </h2>
                        <p className="text-white/90">
                            Simplify operations with our efficient,
                            quality-focused services.sss
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "AI-Powered Document Management",
                                description:
                                    "Automate tracking and updates, reducing human errors and saving valuable time.",
                            },
                            {
                                title: "Centralized Compliance Hub",
                                description:
                                    "Keep all your critical documents in one place for quick and easy access.",
                            },
                            {
                                title: "Real-Time Alerts",
                                description:
                                    "Stay proactive with 30-day advance notifications for expiring documents and upcoming deadlines.",
                            },
                            {
                                title: "Seamless Integration",
                                description:
                                    "Effortlessly connect with your current systems, including ELDs, TMS, and HR platforms, without disrupting your workflow.",
                            },
                            {
                                title: "Audit Readiness",
                                description:
                                    "Be prepared with comprehensive, time-stamped reports showcasing your compliance status.",
                            },
                            {
                                title: "Compliance as a Competitive Edge",
                                description:
                                    "Turn compliance into a business asset, building trust, attracting partners, and reducing risk for insurance companies.",
                            },
                        ].map((service, index) => (
                            <div
                                key={index}
                                className={`bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors`}
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <svg
                                        className="w-8 h-8 text-white"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <svg
                                        className="w-5 h-5 text-white/60"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            d="M7 17L17 7M17 7H7M17 7V17"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-white text-base font-semibold mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-white/80 text-sm">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ManufacturingLanding;
