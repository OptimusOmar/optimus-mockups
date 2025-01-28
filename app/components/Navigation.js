"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
    const navLinks = [
        { name: 'Benefits', href: '#benefits' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Contact Us', href: '#contact' },
        { name: 'Blog', href: '#blog' },
        { name: 'Login', href: '#login' },
    ];

    return (
        <motion.nav 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between px-6 py-4 bg-sky-400 sticky top-0 z-50"
        >
            <div className="flex items-center">
                <span className="ml-2 font-semibold text-white">Optimus Paper</span>
            </div>

            <div className="hidden md:flex space-x-6 text-sm">
                {navLinks.map((link) => (
                    <a 
                        key={link.name}
                        href={link.href} 
                        className="text-white hover:text-blue-900 transition-colors"
                    >
                        {link.name}
                    </a>
                ))}
            </div>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-400 text-white px-4 py-2 pt-2.5 text-sm hover:bg-green-600 transition-colors rounded-lg"
            >
                Sign Up
            </motion.button>
        </motion.nav>
    );
};

export default Navigation; 