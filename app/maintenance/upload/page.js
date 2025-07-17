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
      
      if (field === 'forms') {
        updatedServices[index] = {
          ...updatedServices[index],
          forms: {
            ...updatedServices[index].forms,
            ...value
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

  // Get service display name
  const getServiceDisplayName = (serviceType) => {
    if (!serviceType) return 'Unnamed Service';
    return serviceType.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  const costs = calculateCosts();

  // Invoice Details Step
  const renderInvoiceDetailsStep = () => (
    <div className="bg-white rounded shadow-sm">
      <div className="bg-gray-50 px-4 py-2 border-b">
        <h2 className="text-base font-semibold text-gray-800">Invoice Details</h2>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Invoice Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="invoiceDate"
              value={invoiceData.invoiceDate}
              onChange={handleInvoiceChange}
              className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Invoice Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="invoiceNumber"
              value={invoiceData.invoiceNumber}
              onChange={handleInvoiceChange}
              placeholder="INV-2025-0319"
              className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Vendor <span className="text-red-500">*</span>
            </label>
            <select
              name="vendor"
              value={invoiceData.vendor}
              onChange={handleInvoiceChange}
              className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
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
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Vehicle Mileage <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="vehicleMileage"
              value={invoiceData.vehicleMileage}
              onChange={handleInvoiceChange}
              placeholder="Current mileage"
              className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
        </div>
        
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Invoice File <span className="text-red-500">*</span>
          </label>
          <div className="border border-dashed border-gray-300 rounded p-3 text-center hover:border-blue-500 hover:bg-blue-50 transition-colors">
            <input
              type="file"
              id="invoiceFile"
              name="invoiceFile"
              onChange={handleInvoiceChange}
              className="hidden"
              accept=".pdf,.jpg,.jpeg,.png"
            />
            <label htmlFor="invoiceFile" className="cursor-pointer">
              <div className="flex items-center justify-center">
                <svg className="h-6 w-6 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <span className="text-sm text-gray-600">
                  {invoiceData.invoiceFile ? (
                    <span className="text-blue-600 font-medium">{invoiceData.invoiceFile.name}</span>
                  ) : (
                    <>Click to upload or drag and drop invoice file</>
                  )}
                </span>
              </div>
              <div className="text-xs text-gray-500 mt-1">PDF, JPG, PNG up to 10MB</div>
            </label>
          </div>
        </div>
        
        <div className="mt-4 flex justify-end">
          <button
            type="button"
            onClick={goToNextStep}
            className="px-4 py-2 text-sm bg-blue-500 text-white font-medium rounded hover:bg-blue-600"
          >
            Continue to Services →
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
                onChange={(e) => handleServiceChange(index, 'forms', { field: 'parts', value: e.target.checked })}
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
                onChange={(e) => handleServiceChange(index, 'forms', { field: 'labor', value: e.target.checked })}
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

  ServiceItem.displayName = 'ServiceItem';

  // Services Step
  const renderServicesStep = () => (
    <div className="bg-white rounded shadow-sm">
      <div className="bg-gray-50 px-4 py-2 border-b">
        <h2 className="text-base font-semibold text-gray-800">Services</h2>
      </div>
      <div className="p-4">
        {/* Services Table */}
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">#</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Service Type</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Cost</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Forms</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Taxable</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Warranty</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Notes</th>
                <th className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {services.map((service, index) => (
                <React.Fragment key={service.id}>
                  <tr className="hover:bg-gray-50">
                    <td className="px-3 py-2 text-sm text-gray-900">{index + 1}</td>
                    <td className="px-3 py-2">
                      <select
                        value={service.type}
                        onChange={(e) => handleServiceChange(index, 'type', e.target.value)}
                        className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                      >
                        <option value="">Select Service</option>
                        <option value="oil-change">Oil Change</option>
                        <option value="brake-inspection">Brake Inspection</option>
                        <option value="tire-rotation">Tire Rotation</option>
                        <option value="engine-repair">Engine Repair</option>
                        <option value="transmission-service">Transmission Service</option>
                        <option value="battery-replacement">Battery Replacement</option>
                        <option value="air-filter-replacement">Air Filter Replacement</option>
                        <option value="coolant-flush">Coolant Flush</option>
                        <option value="belt-replacement">Belt Replacement</option>
                        <option value="spark-plug-replacement">Spark Plug Replacement</option>
                        <option value="other">Other</option>
                      </select>
                    </td>
                    <td className="px-3 py-2">
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={service.cost}
                        onChange={(e) => handleServiceChange(index, 'cost', e.target.value)}
                        placeholder="0.00"
                        className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                      />
                    </td>
                    <td className="px-3 py-2">
                      <div className="flex space-x-3">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name={`forms-${service.id}`}
                            checked={service.forms.parts}
                            onChange={(e) => handleServiceChange(index, 'forms', { parts: e.target.checked, labor: false })}
                            className="h-3 w-3 text-blue-600 border-gray-300"
                          />
                          <span className="ml-1 text-xs text-gray-700">Parts</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name={`forms-${service.id}`}
                            checked={service.forms.labor}
                            onChange={(e) => handleServiceChange(index, 'forms', { parts: false, labor: e.target.checked })}
                            className="h-3 w-3 text-blue-600 border-gray-300"
                          />
                          <span className="ml-1 text-xs text-gray-700">Labor</span>
                        </label>
                      </div>
                    </td>
                    <td className="px-3 py-2">
                      <input
                        type="checkbox"
                        checked={service.taxable}
                        onChange={(e) => handleServiceChange(index, 'taxable', e.target.checked)}
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                    </td>
                    <td className="px-3 py-2">
                      <input
                        type="checkbox"
                        checked={service.hasWarranty}
                        onChange={(e) => handleServiceChange(index, 'hasWarranty', e.target.checked)}
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                    </td>
                    <td className="px-3 py-2">
                      <input
                        type="text"
                        value={service.notes}
                        onChange={(e) => handleServiceChange(index, 'notes', e.target.value)}
                        placeholder="Optional notes"
                        className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                      />
                    </td>
                    <td className="px-3 py-2 text-center">
                      {services.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeService(service.id)}
                          className="text-red-600 hover:text-red-900"
                          title="Remove Service"
                        >
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      )}
                    </td>
                  </tr>
                  {/* Warranty Fields Row */}
                  {service.hasWarranty && (
                    <tr className="bg-yellow-50 border-l-4 border-yellow-400">
                      <td></td>
                      <td colSpan="7" className="px-3 py-3">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Warranty Date</label>
                            <input
                              type="date"
                              value={service.warrantyDate}
                              onChange={(e) => handleServiceChange(index, 'warrantyDate', e.target.value)}
                              className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Warranty Mileage</label>
                            <input
                              type="number"
                              value={service.warrantyMileage}
                              onChange={(e) => handleServiceChange(index, 'warrantyMileage', e.target.value)}
                              placeholder="Mileage limit"
                              className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Warranty File</label>
                            <input
                              type="file"
                              onChange={(e) => handleServiceFileChange(index, 'warrantyFile', e.target.files)}
                              accept=".pdf,.jpg,.jpeg,.png"
                              className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                            />
                            {service.warrantyFile && (
                              <div className="text-xs text-blue-600 mt-1">{service.warrantyFile.name}</div>
                            )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
        
        <button
          type="button"
          onClick={addService}
          className="flex items-center px-3 py-1.5 text-sm border border-gray-300 text-gray-700 bg-white rounded hover:bg-gray-50"
        >
          <span className="mr-1">+</span> Add Another Service
        </button>
        
        {/* Cost Summary in Services Step */}
        <div className="mt-4">
          <div className="bg-blue-50 border border-blue-200 rounded p-3">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-gray-800">Cost Summary</h3>
              <div className="flex items-center">
                <label className="text-xs font-medium text-gray-700 mr-1">Tax Rate (%):</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="0.1"
                  value={taxRate}
                  onChange={(e) => setTaxRate(parseFloat(e.target.value) || 0)}
                  className="w-14 px-1 py-0.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
            
            {/* Service-by-service breakdown */}
            <div className="space-y-1 mb-2">
              {services.map((service, index) => {
                const cost = parseFloat(service.cost) || 0;
                const tax = service.taxable ? (cost * (taxRate / 100)) : 0;
                const total = cost + tax;
                return (
                  <div key={service.id} className="flex justify-between items-center text-xs py-0.5 border-b border-blue-200 last:border-b-0">
                    <span className="text-gray-700">{getServiceDisplayName(service.type)}:</span>
                    <div className="text-right">
                      <div className="font-medium">{formatCurrency(cost)}</div>
                      {service.taxable && tax > 0 && (
                        <div className="text-xs text-gray-600">+ {formatCurrency(tax)} tax</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Totals */}
            <div className="space-y-1 pt-2 border-t border-blue-300">
              <div className="flex justify-between items-center">
                <span className="text-xs font-medium text-gray-700">Subtotal:</span>
                <span className="text-xs font-semibold text-gray-900">{formatCurrency(costs.subtotal || 0)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs font-medium text-gray-700">Total Tax ({taxRate}%):</span>
                <span className="text-xs font-semibold text-gray-900">{formatCurrency(costs.totalTax || 0)}</span>
              </div>
              <div className="flex justify-between items-center py-1 bg-blue-100 -mx-1 px-1 rounded border-t border-blue-300">
                <span className="text-sm font-bold text-blue-800">Grand Total:</span>
                <span className="text-sm font-bold text-blue-800">{formatCurrency(costs.total || 0)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={goToPreviousStep}
            className="px-4 py-2 text-sm border border-gray-300 text-gray-700 font-medium rounded hover:bg-gray-50"
          >
            ← Back to Invoice Details
          </button>
          <button
            type="button"
            onClick={goToNextStep}
            className="px-4 py-2 text-sm bg-blue-500 text-white font-medium rounded hover:bg-blue-600"
          >
            Continue to Review →
          </button>
        </div>
        
      </div>
    </div>
  );

  // Review Step
  const renderReviewStep = () => (
    <div className="bg-white rounded shadow-sm">
      <div className="bg-gray-50 px-4 py-2 border-b">
        <h2 className="text-base font-semibold text-gray-800">Review & Submit</h2>
      </div>
      <div className="p-4">
        {/* Invoice Summary */}
        <div className="mb-4">
          <h3 className="text-sm font-medium mb-2 text-gray-800">Invoice Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 text-sm">
            <div className="bg-gray-50 p-2 rounded">
              <p className="text-xs text-gray-500">Date</p>
              <p className="font-medium">{invoiceData.invoiceDate || '-'}</p>
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <p className="text-xs text-gray-500">Invoice #</p>
              <p className="font-medium">{invoiceData.invoiceNumber || '-'}</p>
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <p className="text-xs text-gray-500">Vendor</p>
              <p className="font-medium">
                {invoiceData.vendor === '1' && 'AutoTech Services'}
                {invoiceData.vendor === '2' && 'Premier Auto Shop'}
                {invoiceData.vendor === '3' && 'City Mechanics'}
                {invoiceData.vendor === '4' && 'Elite Auto Care'}
                {!invoiceData.vendor && '-'}
              </p>
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <p className="text-xs text-gray-500">Mileage</p>
              <p className="font-medium">{invoiceData.vehicleMileage ? Number(invoiceData.vehicleMileage).toLocaleString() : '-'}</p>
            </div>
          </div>
          {invoiceData.invoiceFile && (
            <div className="mt-2 text-sm">
              <span className="text-gray-500">File:</span>
              <span className="ml-1 text-blue-600">{invoiceData.invoiceFile.name}</span>
            </div>
          )}
        </div>
        
        {/* Services Summary */}
        <div className="mb-4">
          <h3 className="text-sm font-medium mb-2 text-gray-800">Services Summary</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500">#</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500">Service</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500">Cost</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500">Forms</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500">Tax</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500">Warranty</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {services.map((service, index) => (
                  <tr key={service.id}>
                    <td className="px-3 py-2">{index + 1}</td>
                    <td className="px-3 py-2">
                      {service.type ? 
                        service.type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 
                        'Not specified'
                      }
                    </td>
                    <td className="px-3 py-2 font-medium">{formatCurrency(parseFloat(service.cost) || 0)}</td>
                    <td className="px-3 py-2">
                      <div className="flex space-x-1">
                        {service.forms.parts && <span className="px-1.5 py-0.5 text-xs bg-green-100 text-green-800 rounded">Parts</span>}
                        {service.forms.labor && <span className="px-1.5 py-0.5 text-xs bg-green-100 text-green-800 rounded">Labor</span>}
                        {!service.forms.parts && !service.forms.labor && <span className="text-xs text-gray-400">None</span>}
                      </div>
                    </td>
                    <td className="px-3 py-2">{service.taxable ? 'Yes' : 'No'}</td>
                    <td className="px-3 py-2">{service.hasWarranty ? 'Yes' : 'No'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Cost Summary in Review Step */}
        <div className="mt-4 mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded p-3">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-gray-800">Cost Summary</h3>
              <div className="flex items-center">
                <span className="text-xs font-medium text-gray-700">Tax Rate: {taxRate}%</span>
              </div>
            </div>
            
            {/* Service-by-service breakdown */}
            <div className="space-y-1 mb-2">
              {services.map((service, index) => {
                const cost = parseFloat(service.cost) || 0;
                const tax = service.taxable ? (cost * (taxRate / 100)) : 0;
                const total = cost + tax;
                return (
                  <div key={service.id} className="flex justify-between items-center text-xs py-0.5 border-b border-blue-200 last:border-b-0">
                    <span className="text-gray-700">{getServiceDisplayName(service.type)}:</span>
                    <div className="text-right">
                      <div className="font-medium">{formatCurrency(cost)}</div>
                      {service.taxable && tax > 0 && (
                        <div className="text-xs text-gray-600">+ {formatCurrency(tax)} tax</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Totals */}
            <div className="space-y-1 pt-2 border-t border-blue-300">
              <div className="flex justify-between items-center">
                <span className="text-xs font-medium text-gray-700">Subtotal:</span>
                <span className="text-xs font-semibold text-gray-900">{formatCurrency(costs.subtotal || 0)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs font-medium text-gray-700">Total Tax ({taxRate}%):</span>
                <span className="text-xs font-semibold text-gray-900">{formatCurrency(costs.totalTax || 0)}</span>
              </div>
              <div className="flex justify-between items-center py-1 bg-blue-100 -mx-1 px-1 rounded border-t border-blue-300">
                <span className="text-sm font-bold text-blue-800">Grand Total:</span>
                <span className="text-sm font-bold text-blue-800">{formatCurrency(costs.total || 0)}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between">
          <button
            type="button"
            onClick={goToPreviousStep}
            className="px-4 py-2 text-sm border border-gray-300 text-gray-700 font-medium rounded hover:bg-gray-50"
          >
            ← Back to Services
          </button>
          <button
            type="button"
            className="px-6 py-2 text-sm bg-green-600 text-white font-medium rounded hover:bg-green-700"
          >
            Submit Record
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-blue-800 text-white flex-shrink-0">
        <div className="p-4">
          <h1 className="text-xl font-bold text-white">
            Fleet Management
          </h1>
        </div>
        
        <nav className="mt-8">
          <div className="px-4 py-2">
            <div className="text-xs font-semibold text-blue-300 uppercase tracking-wide">
              Main Menu
            </div>
          </div>
          
          <a href="#" className="flex items-center px-4 py-3 text-sm text-blue-100 hover:bg-blue-700">
            <svg className="mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5v4m8-4v4" />
            </svg>
            Dashboard
          </a>
          
          <a href="#" className="flex items-center px-4 py-3 text-sm bg-blue-900 text-white border-r-4 border-yellow-400">
            <svg className="mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Maintenance
          </a>
          
          <a href="#" className="flex items-center px-4 py-3 text-sm text-blue-100 hover:bg-blue-700">
            <svg className="mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM21 17a2 2 0 11-4 0 2 2 0 014 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0M9 17h1m-1 0a2 2 0 104 0m-1 0h1m6 0a2 2 0 104 0m-1 0h1" />
            </svg>
            Fleet
          </a>
          
          <a href="#" className="flex items-center px-4 py-3 text-sm text-blue-100 hover:bg-blue-700">
            <svg className="mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v2a2 2 0 002 2z" />
            </svg>
            Drivers
          </a>
          
          <a href="#" className="flex items-center px-4 py-3 text-sm text-blue-100 hover:bg-blue-700">
            <svg className="mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Reports
          </a>
          
          <div className="px-4 py-2 mt-8">
            <div className="text-xs font-semibold text-blue-300 uppercase tracking-wide">
              Settings
            </div>
          </div>
          
          <a href="#" className="flex items-center px-4 py-3 text-sm text-blue-100 hover:bg-blue-700">
            <svg className="mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
            Users
          </a>
          
          <a href="#" className="flex items-center px-4 py-3 text-sm text-blue-100 hover:bg-blue-700">
            <svg className="mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Preferences
          </a>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="px-6 py-4">
            <div className="flex justify-between h-8 items-center">
              <div className="flex items-center">
                <h1 className="text-xl font-bold text-blue-800">
                  Fleet Maintenance System
                </h1>
              </div>
              <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-4">Welcome, Admin</span>
                <button className="text-sm text-blue-600 hover:text-blue-800">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-blue-800 border-b-4 border-yellow-400 pb-2">
              Add New Maintenance Record
            </h1>
            <button 
              onClick={() => window.history.back()}
              className="px-3 py-1.5 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
            >
              ← Back to Records
            </button>
          </div>
          
          {/* Progress Indicator */}
          <div className="relative mb-8 px-8">
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
        </main>

        {/* Footer */}
        <footer className="bg-white shadow-inner py-4">
          <div className="px-6">
            <p className="text-sm text-gray-500 text-center">
              © 2025 Fleet Maintenance System. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

MaintenanceRecordForm.displayName = 'MaintenanceRecordForm';

export default MaintenanceRecordForm;