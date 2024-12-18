"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Star, HelpCircle, MessageSquare, BarChart3 } from 'lucide-react';

const ManufacturingLanding = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-sky-400">
        <div className="flex items-center">
          {/* <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">O</span>
          </div> */}
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
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 pt-16 pb-24 relative">
        {/* Left floating icons */}
        <div className="absolute left-10 top-[22rem] -translate-y-1/2 space-y-4">
          <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center shadow-lg">
            <HelpCircle className="w-5 h-5 text-white" />
          </div>
          <div className="w-10 h-10 bg-white rounded-full border-2 border-blue-900 flex items-center justify-center shadow-lg absolute bottom-12 left-16">
            <MessageSquare className="w-5 h-5 text-gray-600" />
          </div>
          <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center shadow-lg">
            <HelpCircle className="w-5 h-5 text-white" />
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
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
              Get Started
            </button>
            <button className="bg-white border border-blue-200 text-blue-800 px-6 py-3 rounded-lg hover:border-blue-500">
              Try Demo
            </button>
          </div>

          {/* Rating */}
          <div className="flex justify-center items-center gap-1 mb-16">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-blue-800">5.0</span>
            <span className="text-blue-600 text-sm ml-2">from 85+ reviews</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-end">
          {/* Manufacturing Image */}
          <div className="rounded-2xl overflow-hidden">
            <img 
              src="/truck.webp"
              alt="Manufacturing pipes"
              className="w-full h-full object-cover h-[30rem]"
            />
          </div>

          {/* Partners Stat */}
          <div className="bg-blue-800 text-white p-6 rounded-2xl h-96 flex flex-col items-center justify-center text-center">
            <div className="text-3xl font-bold mb-2">100+</div>
            <div className="text-sm opacity-90">Our Esteemed Customer Partners</div>
          </div>

          {/* Projects Stat */}
          <div className="bg-sky-100 p-6 rounded-2xl h-64">
            <div className="text-3xl font-bold mb-2 text-blue-900">1951+</div>
            <div className="text-sm text-blue-800">Total Projects @ 8%</div>
          </div>

          {/* Experience Stat */}
          <div className="bg-sky-300 text-black p-6 rounded-2xl h-96">
            <div className="text-3xl font-bold mb-2">6+</div>
            <div className="text-sm opacity-90">Years of Dedicated Service</div>
          </div>

          {/* something Stat */}
          <div className="bg-blue-800 text-white p-6 rounded-2xl h-[30rem]">
            <div className="text-3xl font-bold mb-2">6+</div>
            <div className="text-sm opacity-90">Years of Dedicated Service</div>
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
              Simplify operations with our efficient, quality-focused services.
            </p>
          </div>

          {/* Custom Animation Keyframes */}
          <style jsx global>{`
            @keyframes fadeInUp {
              0% {
                opacity: 0;
                transform: translateY(20px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fade-in-up {
              animation: fadeInUp 0.6s ease-out forwards;
            }
          `}</style>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "AI-Powered Document Management",
                description: "Automate tracking and updates, reducing human errors and saving valuable time."
              },
              {
                title: "Centralized Compliance Hub",
                description: "Keep all your critical documents in one place for quick and easy access."
              },
              {
                title: "Real-Time Alerts",
                description: "Stay proactive with 30-day advance notifications for expiring documents and upcoming deadlines."
              },
              {
                title: "Seamless Integration",
                description: "Effortlessly connect with your current systems, including ELDs, TMS, and HR platforms, without disrupting your workflow."
              },
              {
                title: "Audit Readiness",
                description: "Be prepared with comprehensive, time-stamped reports showcasing your compliance status."
              },
              {
                title: "Compliance as a Competitive Edge",
                description: "Turn compliance into a business asset, building trust, attracting partners, and reducing risk for insurance companies."
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className={`bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors opacity-0 animate-fade-in-up`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex justify-between items-start mb-6">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <svg className="w-5 h-5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-white/80 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManufacturingLanding;