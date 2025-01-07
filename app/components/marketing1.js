"use client";
import React, { useState } from 'react';
import { Star, BarChart3, TruckIcon, CloudDownloadIcon } from 'lucide-react';
import { GrDocumentVerified } from 'react-icons/gr';

const ManufacturingLanding = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        fleetSize: '',
        challenge: '',
        currentMethod: '',
    });

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
                alert('Form submitted successfully!');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    company: '',
                    fleetSize: '',
                    challenge: '',
                    currentMethod: '',
                });
            } else {
                throw new Error('Failed to submit form');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to submit form. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <main className="container mx-auto px-6 pt-16 pb-24">
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                        Your Trusted Partner in DOT Compliance
                    </h1>
                    <p className="text-blue-800 mb-8">
                        Automate, Centralize, and Stay Compliant with Confidence
                    </p>

                    <div className="flex justify-center gap-4 mb-12">
                        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
                            Get Started
                        </button>
                        <button className="bg-white text-blue-800 px-6 py-3 rounded-lg hover:border-blue-500 border border-blue-200">
                            Try Demo
                        </button>
                    </div>

                    <div className="flex justify-center items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="ml-2 text-blue-800">5.0</span>
                        <span className="text-blue-600 text-sm ml-2">from 85+ reviews</span>
                    </div>
                </div>

                {/* Stats Grid with Updated Design */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Side Features */}
                    <div className="space-y-8">
                        {/* Hero Image */}
                        <div className="relative h-64 rounded-2xl overflow-hidden mb-8">
                            <img 
                                src={`${window.assetUrl}image/truck.webp`} 
                                alt="Truck Fleet Management"
                                className="object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent flex items-end">
                                <div className="p-6 text-white">
                                    <h3 className="text-2xl font-bold mb-2">Modern Fleet Solutions</h3>
                                    <p className="text-white/90">Streamlined compliance for your entire fleet</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                                    <TruckIcon className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Fleet Management</h3>
                                    <p className="text-blue-700">Streamline your operations with our integrated fleet management solutions</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center">
                                    <GrDocumentVerified className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-indigo-900 mb-2">Compliance Tracking</h3>
                                    <p className="text-indigo-700">Stay ahead with automated compliance monitoring and alerts</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-2xl">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center">
                                    <BarChart3 className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-cyan-900 mb-2">Analytics Dashboard</h3>
                                    <p className="text-cyan-700">Make data-driven decisions with comprehensive analytics</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 border">
                        <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
                        <p className="text-gray-600 mb-6 text-sm">
                            Ready to transform your compliance management? Fill out the form below.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="First name"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                                    required
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Last name"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                                    required
                                />
                            </div>

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your email"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                                required
                            />

                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone number"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                                required
                            />

                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                placeholder="Company name"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                                required
                            />

                            <select
                                name="fleetSize"
                                value={formData.fleetSize}
                                onChange={handleChange}
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
                                value={formData.challenge}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition text-gray-600"
                                required
                            >
                                <option value="">Primary compliance challenge</option>
                                <option value="document-management">Document Management</option>
                                <option value="expiring-alerts">Expiring Document Alerts</option>
                                <option value="integration">Integration</option>
                                <option value="audit">Audit Preparation</option>
                                <option value="other">Other</option>
                            </select>

                            <select
                                name="currentMethod"
                                value={formData.currentMethod}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition text-gray-600"
                                required
                            >
                                <option value="">Current compliance management method</option>
                                <option value="manual">Manual</option>
                                <option value="software">Software-Based</option>
                                <option value="outsourced">Outsourced</option>
                                <option value="other">Other</option>
                            </select>

                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition-colors font-medium"
                            >
                                Submit
                            </button>

                            <p className="text-xs text-gray-500 text-center">
                                By contacting us, you agree to our{" "}
                                <a href="#" className="text-blue-500 hover:underline">
                                    Terms of Service
                                </a>{" "}
                                and{" "}
                                <a href="#" className="text-blue-500 hover:underline">
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
