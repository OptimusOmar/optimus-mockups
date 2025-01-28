"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { useRouter } from 'next/navigation';

const ContactForm = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        fleetSize: '',
        challenge: '',
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
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    company: '',
                    fleetSize: '',
                    challenge: '',
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

    return (
        <section className="bg-gradient-to-b from-blue-100 via-blue-100 to-blue-50 py-20 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-200 rounded-full blur-3xl opacity-30" />
                <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-200 rounded-full blur-3xl opacity-30" />
            </div>

            <div className="container mx-auto px-4 max-w-5xl relative">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="bg-blue-200 text-blue-700 text-sm px-4 py-2 rounded-full">
                        Get Started
                    </span>
                    <h2 className="text-4xl font-bold text-blue-900 mt-6 mb-4">
                        Ready to Transform Your <br />
                        <span className="text-blue-600">Fleet Management?</span>
                    </h2>
                    <p className="text-blue-800 text-lg max-w-2xl mx-auto">
                        Fill out the form below and our team will get back to you within 24 hours.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6"
                    >
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-blue-900 mb-1">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 rounded-lg bg-blue-50 border-2 border-transparent 
                                                focus:border-blue-500 focus:bg-white outline-none transition-all"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-blue-900 mb-1">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 rounded-lg bg-blue-50 border-2 border-transparent 
                                                focus:border-blue-500 focus:bg-white outline-none transition-all"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-blue-900 mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 rounded-lg bg-blue-50 border-2 border-transparent 
                                                focus:border-blue-500 focus:bg-white outline-none transition-all"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-blue-900 mb-1">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 rounded-lg bg-blue-50 border-2 border-transparent 
                                                focus:border-blue-500 focus:bg-white outline-none transition-all"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-blue-900 mb-1">
                                    Company
                                </label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 rounded-lg bg-blue-50 border-2 border-transparent 
                                            focus:border-blue-500 focus:bg-white outline-none transition-all"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-blue-900 mb-1">
                                        Fleet Size
                                    </label>
                                    <select
                                        name="fleetSize"
                                        value={formData.fleetSize}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 rounded-lg bg-blue-50 border-2 border-transparent 
                                                focus:border-blue-500 focus:bg-white outline-none transition-all"
                                        required
                                    >
                                        <option value="">Select size</option>
                                        <option value="1-10">1-10 vehicles</option>
                                        <option value="11-50">11-50 vehicles</option>
                                        <option value="51-200">51-200 vehicles</option>
                                        <option value="200+">200+ vehicles</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-blue-900 mb-1">
                                        Primary Challenge
                                    </label>
                                    <select
                                        name="challenge"
                                        value={formData.challenge}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 rounded-lg bg-blue-50 border-2 border-transparent 
                                                focus:border-blue-500 focus:bg-white outline-none transition-all"
                                        required
                                    >
                                        <option value="">Select challenge</option>
                                        <option value="document-management">Document Management</option>
                                        <option value="expiring-alerts">Expiring Alerts</option>
                                        <option value="integration">Integration</option>
                                        <option value="audit">Audit Preparation</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg
                                        transition-all duration-200 flex items-center justify-center gap-2 mt-6"
                            >
                                Submit Request
                                <Send className="w-4 h-4" />
                            </motion.button>

                            <p className="text-xs text-blue-700 text-center mt-4">
                                By submitting, you agree to our{" "}
                                <a href="#" className="text-blue-600 hover:underline">Terms</a>
                                {" "}and{" "}
                                <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                            </p>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="bg-blue-600 rounded-2xl p-6 text-white">
                            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                            <div className="space-y-4">
                                <a href="tel:+18337273773" 
                                   className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                                >
                                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                                        <Phone className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="text-sm opacity-60">Phone</div>
                                        <div className="text-sm">+1 (833) 727-3773</div>
                                    </div>
                                </a>

                                <a href="mailto:support@optimuspaper.com"
                                   className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                                >
                                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="text-sm opacity-60">Email</div>
                                        <div className="text-sm">support@optimuspaper.com</div>
                                    </div>
                                </a>

                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                                        <MapPin className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="text-sm opacity-60">Location</div>
                                        <div className="text-sm">United States</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 rounded-2xl p-6">
                            <h3 className="text-lg font-semibold text-blue-900 mb-4">What Happens Next?</h3>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                        <span className="text-blue-600 text-xs">1</span>
                                    </div>
                                    <p className="text-blue-800 text-sm">We&apos;ll review your submission within 24 hours</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                        <span className="text-blue-600 text-xs">2</span>
                                    </div>
                                    <p className="text-blue-800 text-sm">Our team will contact you for a consultation</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                        <span className="text-blue-600 text-xs">3</span>
                                    </div>
                                    <p className="text-blue-800 text-sm">We&apos;ll create a customized solution for your needs</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm; 