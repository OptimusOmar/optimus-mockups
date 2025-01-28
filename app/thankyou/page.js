"use client"
import React from 'react';
import { CheckCircle2, Clock, ArrowLeft, Mail, PhoneCall } from 'lucide-react';
import Image from "next/image";
import { Button } from "@nextui-org/react";

const ThankYouPage = () => {
  const resources = [
    {
      name: 'Zendesk Support',
      url: 'https://optimuspaper.zendesk.com/'
    },
    {
      name: 'Blog',
      url: 'https://optimuspaper.com/blog/'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-sky-400 via-sky-200 to-sky-50">
      <nav className="flex items-center justify-between px-6 py-4 bg-sky-400">
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
      </nav>
      <div className="flex min-h-screen flex-col items-center pb-24 pt-10 max-w-7xl mx-auto px-4">
        
        {/* <Image
          src="/LogoOptimusBlue.png"
          width={3638}
          height={733}
          className="w-96 mb-12 -ml-5 px-10 sm:px-0"
          alt="Optimus Paper Logo"
        /> */}
        
        <div className="bg-white w-full shadow-large">
          <div className="w-full flex h-full">
            <div className="lg:w-4/5 w-full flex flex-col items-center p-4 sm:p-9">
              <div className="flex flex-col items-center w-full text-default-800">
                <div className="w-full h-6"></div>

                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-blue-500" />
                  </div>
                </div>

                <div className="text-center mb-8">
                  <p className="font-thin text-2xl sm:text-3xl font-sans">
                    Thank You for Reaching Out!
                  </p>
                  <div className="bg-blue-400 w-20 h-1 rounded-xl mx-auto !mt-4 !mb-4"></div>
                  <p className="text-blue-800 text-lg">
                    We&apos;ve received your message and appreciate your interest in our services.
                  </p>
                </div>

                <div className="bg-sky-50 rounded-xl p-6 mb-8 w-full max-w-2xl">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <h2 className="font-semibold text-blue-900 mb-2">What happens next?</h2>
                      <p className="text-blue-800">
                        Our team will review your inquiry and get back to you within 24 business hours 
                        with a personalized response to discuss how we can best assist you.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-sky-100 pt-6 w-full max-w-2xl">
                  <h3 className="text-blue-900 font-semibold mb-4">
                    Need immediate assistance?
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-3 text-blue-800">
                      <Mail className="w-5 h-5 text-blue-500" />
                      <a href="mailto:support@optimuspaper.com" className="hover:text-blue-500">
                        support@optimuspaper.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-blue-800">
                      <PhoneCall className="w-5 h-5 text-blue-500" />
                      <a href="tel:+18337273773" className="hover:text-blue-500">
                        +1 (833) 727-3773 
                      </a>
                    </div>
                  </div>

                  <div className="border-t border-sky-100 pt-6">
                    <h3 className="text-blue-900 font-semibold mb-4">
                      While you wait, explore our resources
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                      {resources.map((resource, index) => (
                        <a
                          key={index}
                          href={resource.url}
                          className="bg-white px-4 py-3 rounded-lg shadow-sm border border-sky-100 
                                  text-blue-800 hover:text-blue-500 hover:border-blue-500 
                                  transition-colors duration-200"
                        >
                          {resource.name}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="text-center">
                    <Button
                      color="primary"
                      className="bg-[#0279ed] rounded-full px-8 text-sm h-unit-10 inline-flex items-center gap-2"
                      startContent={<ArrowLeft className="w-4 h-4" />}
                    >
                      Back to Home
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-2/5 hidden lg:block">
              <Image
                src="/truck.webp"
                width={1000}
                height={1500}
                className="w-full hue-rotate-15 saturate-200 h-full"
                alt="Truck"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;