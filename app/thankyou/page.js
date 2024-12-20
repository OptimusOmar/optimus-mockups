import React from 'react';
import { CheckCircle2, Clock, ArrowLeft, Mail, PhoneCall } from 'lucide-react';

const ThankYouPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 via-sky-200 to-sky-50">
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

      <div className="max-w-3xl mx-auto">
        {/* Back button */}
        {/* <button className="flex items-center text-white hover:text-blue-900 mb-8 group">
          <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </button> */}

        {/* Main content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mt-10">
          {/* Success icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-blue-500" />
            </div>
          </div>

          {/* Thank you message */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-medium text-blue-900 mb-4">
              Thank You for Reaching Out!
            </h1>
            <p className="text-blue-800 text-lg">
              We&apos;ve received your message and appreciate your interest in our services.
            </p>
          </div>

          {/* What happens next */}
          <div className="bg-sky-50 rounded-xl p-6 mb-8">
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

          {/* Contact information */}
          <div className="border-t border-sky-100 pt-8">
            <h3 className="text-blue-900 font-semibold mb-4">
              Need immediate assistance?
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-blue-800">
                <Mail className="w-5 h-5 text-blue-500" />
                <a href="mailto:support@optimus-paper.com" className="hover:text-blue-500">
                  support@optimus-paper.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-blue-800">
                <PhoneCall className="w-5 h-5 text-blue-500" />
                <a href="tel:+1234567890" className="hover:text-blue-500">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional resources */}
        <div className="mt-8 text-center">
          <h3 className="text-blue-900 font-semibold mb-4">
            While you wait, explore our resources
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              'Documentation',
              'Zendesk Support',
              'Blog'
            ].map((resource, index) => (
              <a
                key={index}
                href="#"
                className="bg-white px-4 py-3 rounded-lg shadow-sm border border-sky-100 
                         text-blue-800 hover:text-blue-500 hover:border-blue-500 
                         transition-colors duration-200"
              >
                {resource}
              </a>
            ))}
          </div>
        </div>

        {/* Get Started Button */}
        <div className="text-center mt-8">
          <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 
                           transition-colors duration-200 inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;