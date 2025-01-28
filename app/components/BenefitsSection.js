"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const BenefitsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const benefits = [
    {
      title: "Expert Guidance You Can Trust",
      description: "Gain tailored document support with Optimus + as your compliance advisors.",
      icon: "🎯"
    },
    {
      title: "One Platform for All Compliance Needs",
      description: "Digitize, centralize, and access all essential documents effortlessly to stay compliant.",
      icon: "🔄"
    },
    {
      title: "Stay Alert and Ahead",
      description: "Receive 30-day advance notifications for expiring documents and never miss a deadline.",
      icon: "⚡"
    },
    {
      title: "Integration Without the Hassle",
      description: "Sync seamlessly with ELDs, TMS, HR systems, and more through easy API integration.",
      icon: "🔌"
    },
    {
      title: "Proof of Excellence",
      description: "Showcase your commitment with our Dynamic Lapse Report – evidence of compliance that turns risk management into a strategic advantage.",
      icon: "🏆"
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white via-blue-50 to-white py-24 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-cyan-100 rounded-full blur-3xl opacity-30" />
      </div>

      <motion.div 
        className="container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Benefits Description Section */}
          <motion.div variants={itemVariants}>
            <motion.div 
              className="bg-blue-100 text-blue-600 text-sm px-4 py-2 rounded-full w-fit mb-6"
              variants={itemVariants}
            >
              Why Choose Us
            </motion.div>

            <motion.h2 
              className="text-4xl font-bold text-blue-900 mb-6"
              variants={itemVariants}
            >
              Transform Your Fleet&apos;s <br />
              <span className="text-blue-500">Compliance Management</span>
            </motion.h2>

            <motion.p 
              className="text-blue-800 mb-12 text-lg"
              variants={itemVariants}
            >
              With trusted legal advice in transportation law, we help you minimize risk 
              and ensure smooth operations. Stay audit-ready and compliant, always.
            </motion.p>

            <motion.div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="flex gap-4 group"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                    <span className="text-xl">{benefit.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-1 text-lg">{benefit.title}</h3>
                    <p className="text-blue-800/80 text-base">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Stats and Charts Section */}
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <motion.div 
              className="relative z-10"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-blue-100">
                <Image 
                  src="/optimuscalendar.png" 
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain rounded-lg"
                  alt="Calendar"
                />
              </div>
            </motion.div>

            <motion.div 
              className="absolute bottom-[-40px] right-[-20px] z-20 w-96"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-4 border border-blue-100">
                <Image 
                  src="/optimuslapsereport.png" 
                  width={400}
                  height={300}
                  className="w-full h-auto object-contain rounded-lg"
                  alt="Secondary Calendar"
                />
              </div>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              className="absolute top-[-30px] left-[-10px] z-30 bg-white px-6 py-3 rounded-full shadow-lg border border-blue-100 flex items-center gap-3"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-blue-900 font-medium">Live Updates</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default BenefitsSection; 