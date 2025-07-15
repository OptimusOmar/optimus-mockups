"use client"
import React, { useState, useCallback } from 'react';

const MaintenanceRecordForm = () => {
  // State for form steps
  const [currentStep, setCurrentStep] = useState(1);
  
  // State for invoice data
  const [invoiceData, setInvoiceData] = useState({
    invoiceDate: new Date().toISOString().split('T')[0],
    invoiceNumber: '',
    vendor: '',
    vehicleMileage: '',
    invoiceFile: null
  });

  // State for services
  const [services, setServices] = useState([
    {
      id: 1,
      type: '',
      forms: { parts: false, labor: false },
      cost: '',
      taxable: true,
      notes: '',
      hasWarranty: false,
      warrantyDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
      warrantyMileage: '',
      warrantyFile: null
    }
  ]);

  // State for tax rate
  const [taxRate, setTaxRate] = useState(7);

  // Handle invoice data changes
  const handleInvoiceChange = (e) => {
    const { name, value, type, files } = e.target;
    
    if (type === 'file' && files.length > 0) {
      setInvoiceData(prev => ({ ...prev, [name]: files[0] }));
    } else {
      setInvoiceData(prev => ({ ...prev, [name]: value }));
    }
  };

  // Handle service data changes
  const handleServiceChange = (index, field, value) => {
    setServices(prevServices => {
      const updatedServices = [...prevServices];
      
      if (field === 'parts' || field === 'labor') {
        updatedServices[index] = {
          ...updatedServices[index],
          forms: {
            ...updatedServices[index].forms,
            [field]: value
          }
        };
      } else {
        updatedServices[index] = {
          ...updatedServices[index],
          [field]: value
        };
      }
      
      return updatedServices;
    });
  };

  // Handle file changes for services
  const handleServiceFileChange = (index, field, files) => {
    if (files.length > 0) {
      setServices(prevServices => {
        const updatedServices = [...prevServices];
        updatedServices[index] = {
          ...updatedServices[index],
          [field]: files[0]
        };
        return updatedServices;
      });
    }
  };

  // Add a new service
  const addService = () => {
    const newId = services.length > 0 ? Math.max(...services.map(s => s.id)) + 1 : 1;
    
    setServices([
      ...services,
      {
        id: newId,
        type: '',
        forms: { parts: false, labor: false },
        cost: '',
        taxable: true,
        notes: '',
        hasWarranty: false,
        warrantyDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
        warrantyMileage: '',
        warrantyFile: null
      }
    ]);
  };

  // Remove a service
  const removeService = (id) => {
    if (services.length > 1) {
      setServices(services.filter(service => service.id !== id));
    }
  };

  // Calculate costs
  const calculateCosts = () => {
    const serviceCosts = services.map(service => {
      const cost = parseFloat(service.cost) || 0;
      const tax = service.taxable ? (cost * (taxRate / 100)) : 0;
      return { cost, tax, total: cost + tax };
    });
    
    const subtotal = serviceCosts.reduce((sum, item) => sum + item.cost, 0);
    const totalTax = serviceCosts.reduce((sum, item) => sum + item.tax, 0);
    const total = subtotal + totalTax;
    
    return { serviceCosts, subtotal, totalTax, total };
  };

  // Navigation between steps
  const goToNextStep = () => setCurrentStep(currentStep + 1);
  const goToPreviousStep = () => setCurrentStep(currentStep - 1);

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const costs = calculateCosts();

  // Invoice Details Step
  const renderInvoiceDetailsStep = () => (
    <div className="bg-white rounded-lg shadow-md mb-6">
      <div className="bg-gray-50 px-6 py-4 border-b">
        <h2 className="text-lg font-semibold text-gray-800">Invoice Details</h2>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Invoice Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="invoiceDate"
              value={invoiceData.invoiceDate}
              onChange={handleInvoiceChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Invoice Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="invoiceNumber"
              value={invoiceData.invoiceNumber}
              onChange={handleInvoiceChange}
              placeholder="e.g. INV-2025-0319"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Vendor <span className="text-red-500">*</span>
            </label>
            <select
              name="vendor"
              value={invoiceData.vendor}
              onChange={handleInvoiceChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Vendor</option>
              <option value="1">AutoTech Services</option>
              <option value="2">Premier Auto Shop</option>
              <option value="3">City Mechanics</option>
              <option value="4">Elite Auto Care</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Vehicle Mileage <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="vehicleMileage"
              value={invoiceData.vehicleMileage}
              onChange={handleInvoiceChange}
              placeholder="Enter current mileage"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Invoice File <span className="text-red-500">*</span>
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center hover:border-blue-500 hover:bg-blue-50">
              <input
                type="file"
                id="invoiceFile"
                name="invoiceFile"
                onChange={handleInvoiceChange}
                className="hidden"
              />
              <label htmlFor="invoiceFile" className="cursor-pointer">
                <div className="text-3xl text-gray-400 mb-2">📄</div>
                <div className="text-gray-500">
                  Drag and drop invoice file or <span className="text-blue-500 font-medium">browse files</span>
                </div>
                {invoiceData.invoiceFile && (
                  <div className="mt-2 p-2 bg-blue-50 rounded text-sm text-blue-700">
                    Selected file: {invoiceData.invoiceFile.name}
                  </div>
                )}
              </label>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={goToNextStep}
            className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600"
          >
            Continue to Services
          </button>
        </div>
      </div>
    </div>
  );

  // Service Item Component - Using React.memo to prevent unnecessary re-renders
  const ServiceItem = React.memo(({ service, index }) => (
    <div className="bg-gray-50 rounded-md p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <span className="flex items-center justify-center w-6 h-6 bg-blue-500 text-white text-xs font-medium rounded-full mr-2">
            {index + 1}
          </span>
          <h3 className="text-base font-medium">Service {index + 1}</h3>
        </div>
        <button
          type="button"
          onClick={() => removeService(service.id)}
          disabled={services.length === 1}
          className={`p-1 rounded-md ${services.length === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-200'}`}
        >
          ✕
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Type of Service <span className="text-red-500">*</span>
          </label>
          <select
            value={service.type}
            onChange={(e) => handleServiceChange(index, 'type', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Type of Service</option>
            <option value="oil-change">Oil Change</option>
            <option value="tire-replacement">Tire Replacement</option>
            <option value="brake-service">Brake Service</option>
            <option value="engine-repair">Engine Repair</option>
            <option value="regular-maintenance">Regular Maintenance</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Form of Service <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id={`parts-${service.id}`}
                checked={service.forms.parts}
                onChange={(e) => handleServiceChange(index, 'parts', e.target.checked)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor={`parts-${service.id}`} className="ml-2 text-sm text-gray-700">
                Parts
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id={`labor-${service.id}`}
                checked={service.forms.labor}
                onChange={(e) => handleServiceChange(index, 'labor', e.target.checked)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor={`labor-${service.id}`} className="ml-2 text-sm text-gray-700">
                Labor
              </label>
            </div>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Service Cost
          </label>
          <input
            type="number"
            step="0.01"
            min="0"
            value={service.cost}
            onChange={(e) => handleServiceChange(index, 'cost', e.target.value)}
            placeholder="0.00"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Taxable
          </label>
          <div className="flex items-center">
            <input
              type="checkbox"
              id={`taxable-${service.id}`}
              checked={service.taxable}
              onChange={(e) => handleServiceChange(index, 'taxable', e.target.checked)}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label htmlFor={`taxable-${service.id}`} className="ml-2 text-sm text-gray-700">
              This service is taxable
            </label>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Notes
          </label>
                        <input
            type="text"
            value={service.notes}
            onChange={(e) => handleServiceChange(index, 'notes', e.target.value)}
            placeholder="Add notes about this service"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            key={`notes-input-${service.id}`}
          />
        </div>
      </div>
      
      <div className="mt-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            id={`warranty-${service.id}`}
            checked={service.hasWarranty}
            onChange={(e) => handleServiceChange(index, 'hasWarranty', e.target.checked)}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
          <label htmlFor={`warranty-${service.id}`} className="ml-2 text-sm text-gray-700">
            This service includes warranty
          </label>
        </div>
      </div>
      
      {service.hasWarranty && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Warranty Date
              </label>
              <input
                type="date"
                value={service.warrantyDate}
                onChange={(e) => handleServiceChange(index, 'warrantyDate', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Warranty Mileage
              </label>
              <input
                type="number"
                value={service.warrantyMileage}
                onChange={(e) => handleServiceChange(index, 'warrantyMileage', e.target.value)}
                placeholder="Enter warranty mileage"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Warranty File
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center hover:border-blue-500 hover:bg-blue-50">
                <input
                  type="file"
                  id={`warranty-file-${service.id}`}
                  onChange={(e) => handleServiceFileChange(index, 'warrantyFile', e.target.files)}
                  className="hidden"
                />
                <label htmlFor={`warranty-file-${service.id}`} className="cursor-pointer">
                  <div className="text-3xl text-gray-400 mb-2">📄</div>
                  <div className="text-gray-500">
                    Drag and drop warranty document or <span className="text-blue-500 font-medium">browse files</span>
                  </div>
                  {service.warrantyFile && (
                    <div className="mt-2 p-2 bg-blue-50 rounded text-sm text-blue-700">
                      Selected file: {service.warrantyFile.name}
                    </div>
                  )}
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  ));

  // Services Step
  const renderServicesStep = () => (
    <div className="bg-white rounded-lg shadow-md mb-6">
      <div className="bg-gray-50 px-6 py-4 border-b">
        <h2 className="text-lg font-semibold text-gray-800">Services</h2>
      </div>
      <div className="p-6">
        {services.map((service, index) => (
          <ServiceItem key={service.id} service={service} index={index} />
        ))}
        
        <button
          type="button"
          onClick={addService}
          className="flex items-center mt-4 px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          <span className="mr-2">+</span> Add Another Service
        </button>
        
        <div className="mt-8 p-4 bg-gray-50 rounded-md">
          <h3 className="text-base font-medium mb-4">Cost Summary</h3>
          
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <label htmlFor="taxRate" className="text-sm font-medium text-gray-700 mr-2">
                Tax Rate (%):
              </label>
              <input
                type="number"
                id="taxRate"
                min="0"
                max="100"
                step="0.1"
                value={taxRate}
                onChange={(e) => setTaxRate(parseFloat(e.target.value) || 0)}
                className="w-20 px-2 py-1 border border-gray-300 rounded-md text-sm"
              />
            </div>
          </div>
          
          {services.map((service, index) => (
            <div key={`cost-${service.id}`} className="flex justify-between text-sm mb-2">
              <span>Service {index + 1}:</span>
              <span className="font-medium">
                {formatCurrency(parseFloat(service.cost) || 0)}
                {service.taxable && ` + ${formatCurrency((parseFloat(service.cost) || 0) * (taxRate / 100))} tax`}
              </span>
            </div>
          ))}
          
          <div className="flex justify-between text-sm mt-4 pt-2 border-t border-gray-200">
            <span>Subtotal:</span>
            <span className="font-medium">{formatCurrency(costs.subtotal)}</span>
          </div>
          
          <div className="flex justify-between text-sm">
            <span>Total Tax:</span>
            <span className="font-medium">{formatCurrency(costs.totalTax)}</span>
          </div>
          
          <div className="flex justify-between font-medium text-base mt-2 pt-2 border-t border-gray-200">
            <span>Total:</span>
            <span>{formatCurrency(costs.total)}</span>
          </div>
        </div>
        
        <div className="mt-6 flex justify-between">
          <button
            type="button"
            onClick={goToPreviousStep}
            className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50"
          >
            Back
          </button>
          <button
            type="button"
            onClick={goToNextStep}
            className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600"
          >
            Continue to Review
          </button>
        </div>
      </div>
    </div>
  );

  // Review Step
  const renderReviewStep = () => (
    <div className="bg-white rounded-lg shadow-md mb-6">
      <div className="bg-gray-50 px-6 py-4 border-b">
        <h2 className="text-lg font-semibold text-gray-800">Review & Submit</h2>
      </div>
      <div className="p-6">
        <div className="mb-6">
          <h3 className="text-base font-medium mb-4 pb-2 border-b border-gray-200">Invoice Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Invoice Date</p>
              <p className="font-medium">{invoiceData.invoiceDate}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Invoice Number</p>
              <p className="font-medium">{invoiceData.invoiceNumber || '-'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Vendor</p>
              <p className="font-medium">
                {invoiceData.vendor === '1' && 'AutoTech Services'}
                {invoiceData.vendor === '2' && 'Premier Auto Shop'}
                {invoiceData.vendor === '3' && 'City Mechanics'}
                {invoiceData.vendor === '4' && 'Elite Auto Care'}
                {!invoiceData.vendor && '-'}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Vehicle Mileage</p>
              <p className="font-medium">{invoiceData.vehicleMileage || '-'}</p>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-base font-medium mb-4 pb-2 border-b border-gray-200">Services Summary</h3>
          {services.map((service, index) => (
            <div key={`summary-${service.id}`} className="mb-4 pb-2 border-b border-dashed border-gray-200 last:border-b-0">
              <div className="flex items-center mb-2">
                <span className="font-medium">Service {index + 1}:</span>
                <span className="ml-2">{service.type ? 
                  service.type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 
                  '-'}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Cost: {formatCurrency(parseFloat(service.cost) || 0)}</span>
                <span>Taxable: {service.taxable ? 'Yes' : 'No'}</span>
              </div>
            </div>
          ))}
          
          <div className="mt-4 p-4 bg-gray-50 rounded-md">
            <div className="flex justify-between text-sm">
              <span>Subtotal:</span>
              <span className="font-medium">{formatCurrency(costs.subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Tax ({taxRate}%):</span>
              <span className="font-medium">{formatCurrency(costs.totalTax)}</span>
            </div>
            <div className="flex justify-between font-medium text-base mt-2 pt-2 border-t border-gray-200">
              <span>Total:</span>
              <span>{formatCurrency(costs.total)}</span>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex justify-between">
          <button
            type="button"
            onClick={goToPreviousStep}
            className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50"
          >
            Back to Services
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700"
          >
            Submit Record
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-blue-800 border-b-4 border-yellow-400 pb-2 inline-block mb-6">
        Maintenance Records
      </h1>
      
      {/* Progress Indicator */}
      <div className="relative mb-12">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-1 bg-gray-200"></div>
        </div>
        <div className="relative flex justify-between">
          <div className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= 1 ? 'bg-blue-500' : 'bg-gray-200'} text-white text-sm font-medium`}>
            1
            <span className="absolute mt-14 -ml-4 text-xs text-gray-500 whitespace-nowrap">Invoice Details</span>
          </div>
          <div className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= 2 ? 'bg-blue-500' : 'bg-gray-200'} text-white text-sm font-medium`}>
            2
            <span className="absolute mt-14 -ml-4 text-xs text-gray-500 whitespace-nowrap">Services</span>
          </div>
          <div className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= 3 ? 'bg-blue-500' : 'bg-gray-200'} text-white text-sm font-medium`}>
            3
            <span className="absolute mt-14 -ml-3 text-xs text-gray-500 whitespace-nowrap">Review & Submit</span>
          </div>
        </div>
      </div>
      
      {currentStep === 1 && renderInvoiceDetailsStep()}
      {currentStep === 2 && renderServicesStep()}
      {currentStep === 3 && renderReviewStep()}
    </div>
  );
};

export default MaintenanceRecordForm;