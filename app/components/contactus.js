"use client"
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    fleetSize: '',
    challenge: '',
    otherChallenge: '',
    currentMethod: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation functions
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    return /^\+?[\d\s-]{10,}$/.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validation
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.fleetSize) newErrors.fleetSize = 'Fleet size is required';
    if (!formData.challenge) newErrors.challenge = 'Please select a primary challenge';
    if (!formData.currentMethod) newErrors.currentMethod = 'Please select current method';

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        // Here you would typically make an API call to submit the form
        console.log('Form submitted:', formData);
        // Redirect to thank you page or show success message
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-blue-900 mb-4">
            Ready to Transform Your Compliance Management?
          </h1>
          <p className="text-blue-800">
            Fill out the form below, and our team will show you how Optimus Paper can streamline your operations and keep you compliant.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-xl p-6 md:p-8 shadow-lg">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} 
                         focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} 
                         focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} 
                         focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* Company Name Field */}
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border ${errors.companyName ? 'border-red-500' : 'border-gray-300'} 
                         focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />
            {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>}
          </div>

          {/* Fleet Size Field */}
          <div>
            <label htmlFor="fleetSize" className="block text-sm font-medium text-gray-700 mb-1">
              Fleet Size
            </label>
            <select
              id="fleetSize"
              name="fleetSize"
              value={formData.fleetSize}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border ${errors.fleetSize ? 'border-red-500' : 'border-gray-300'} 
                         focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            >
              <option value="">Select Fleet Size</option>
              <option value="1-10">1-10</option>
              <option value="11-50">11-50</option>
              <option value="51-200">51-200</option>
              <option value="200+">200+</option>
            </select>
            {errors.fleetSize && <p className="text-red-500 text-sm mt-1">{errors.fleetSize}</p>}
          </div>

          {/* Primary Challenge Field */}
          <div>
            <label htmlFor="challenge" className="block text-sm font-medium text-gray-700 mb-1">
              Primary Compliance Challenge
            </label>
            <select
              id="challenge"
              name="challenge"
              value={formData.challenge}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border ${errors.challenge ? 'border-red-500' : 'border-gray-300'} 
                         focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            >
              <option value="">Select Primary Challenge</option>
              <option value="document-management">Document Management</option>
              <option value="expiring-alerts">Expiring Document Alerts</option>
              <option value="integration">Integration</option>
              <option value="audit-preparation">Audit Preparation</option>
              <option value="other">Other</option>
            </select>
            {formData.challenge === 'other' && (
              <textarea
                name="otherChallenge"
                value={formData.otherChallenge}
                onChange={handleChange}
                placeholder="Please specify your challenge"
                className="mt-2 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows="3"
              />
            )}
            {errors.challenge && <p className="text-red-500 text-sm mt-1">{errors.challenge}</p>}
          </div>

          {/* Current Method Field */}
          <div>
            <label htmlFor="currentMethod" className="block text-sm font-medium text-gray-700 mb-1">
              Current Compliance Management Method
            </label>
            <select
              id="currentMethod"
              name="currentMethod"
              value={formData.currentMethod}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border ${errors.currentMethod ? 'border-red-500' : 'border-gray-300'} 
                         focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            >
              <option value="">Select Current Method</option>
              <option value="manual">Manual</option>
              <option value="software">Software-Based</option>
              <option value="outsourced">Outsourced</option>
              <option value="other">Other</option>
            </select>
            {errors.currentMethod && <p className="text-red-500 text-sm mt-1">{errors.currentMethod}</p>}
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-medium
                         hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                         transition-colors duration-200 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;