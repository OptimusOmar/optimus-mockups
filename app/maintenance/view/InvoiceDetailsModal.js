// InvoiceDetailsModal.js
import React from 'react';

export const InvoiceDetailsModal = ({ 
  invoice, 
  closeModal, 
  handleDeleteInvoice, 
  formatCurrency 
}) => {
  // Calculate tax for a service (assuming 7% tax rate)
  const calculateServiceTax = (service) => {
    const taxRate = 0.07; // 7% tax
    return service.taxable ? service.cost * taxRate : 0;
  };
      return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-screen overflow-auto">
        <div className="bg-blue-500 px-4 py-2 text-white flex justify-between items-center">
          <h2 className="text-lg font-semibold">Invoice Details: {invoice.invoiceNumber}</h2>
          <button 
            onClick={closeModal}
            className="text-white hover:text-gray-200 focus:outline-none"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-4">
          {/* Basic Invoice Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <h3 className="text-base font-medium mb-2 pb-1 border-b border-gray-200">Invoice Information</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-xs text-gray-500">Date</p>
                  <p className="font-medium">{invoice.date}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Invoice Number</p>
                  <p className="font-medium">{invoice.invoiceNumber}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Vendor</p>
                  <p className="font-medium">{invoice.vendor}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Mileage</p>
                  <p className="font-medium">{invoice.mileage.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Total Cost</p>
                  <p className="font-medium text-blue-600">{formatCurrency(invoice.totalCost)}</p>
                </div>
              </div>
            </div>
            
            {/* Invoice Preview */}
            <div>
              <h3 className="text-base font-medium mb-2 pb-1 border-b border-gray-200">Invoice Preview</h3>
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <div className="bg-gray-100 px-3 py-1.5 border-b border-gray-300 flex justify-between items-center">
                  <h4 className="text-sm font-medium">Document Preview</h4>
                  <button 
                    className="text-blue-600 hover:text-blue-800 text-xs"
                    onClick={() => alert('Open in full screen viewer')}
                  >
                    Expand
                  </button>
                </div>
                <div className="bg-gray-800 p-2 flex justify-center items-center" style={{ height: '120px' }}>
                  <div className="bg-white p-4 w-full h-full flex flex-col justify-center items-center">
                    <svg className="h-8 w-8 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p className="text-gray-500 text-center text-xs">{invoice.invoiceFile}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Services List */}
          <div className="mb-4">
            <h3 className="text-base font-medium mb-2 pb-1 border-b border-gray-200">Services</h3>
            <div className="space-y-2">
              {invoice.services.map((service, index) => {
                const tax = calculateServiceTax(service);
                const total = service.cost + tax;
                return (
                  <div key={service.id} className="bg-gray-50 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-sm font-medium flex items-center">
                        <span className="flex items-center justify-center w-5 h-5 bg-blue-500 text-white text-xs font-medium rounded-full mr-2">
                          {index + 1}
                        </span>
                        {service.serviceType}
                      </h4>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-blue-600">{formatCurrency(total)}</div>
                        <div className="text-xs text-gray-500">
                          {formatCurrency(service.cost)} + {formatCurrency(tax)} tax
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
                      <div>
                        <p className="text-gray-500">Subtotal</p>
                        <p className="font-medium">{formatCurrency(service.cost)}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Tax ({service.taxable ? '7%' : '0%'})</p>
                        <p className="font-medium">{formatCurrency(tax)}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Forms</p>
                        <div className="flex mt-0.5">
                          {service.parts && (
                            <span className="px-1.5 py-0.5 rounded text-xs bg-green-100 text-green-800 mr-1">Parts</span>
                          )}
                          {service.labor && (
                            <span className="px-1.5 py-0.5 rounded text-xs bg-green-100 text-green-800">Labor</span>
                          )}
                        </div>
                      </div>
                      {service.hasWarranty && (
                        <div>
                          <p className="text-gray-500">Warranty</p>
                          <div className="mt-0.5">
                            <span className="px-1.5 py-0.5 rounded text-xs bg-blue-100 text-blue-800">Active</span>
                            {service.warrantyDate && (
                              <p className="text-xs mt-1">Until {service.warrantyDate}</p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Attachments */}
          <div className="bg-gray-100 p-3 rounded-lg mb-4">
            <h3 className="text-base font-medium mb-2">Attachments</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="border border-gray-300 rounded-lg bg-white p-2 flex items-center justify-between">
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium">{invoice.invoiceFile}</p>
                    <p className="text-xs text-gray-500">Invoice Document</p>
                  </div>
                </div>
                <button 
                  className="text-blue-600 hover:text-blue-800"
                  onClick={() => alert(`Download ${invoice.invoiceFile}`)}
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              
              {invoice.services.some(s => s.hasWarranty && s.warrantyFile) && (
                <div className="border border-gray-300 rounded-lg bg-white p-2 flex items-center justify-between">
                  <div className="flex items-center">
                    <svg className="h-6 w-6 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium">Warranty Documents</p>
                      <p className="text-xs text-gray-500">
                        {invoice.services.filter(s => s.hasWarranty && s.warrantyFile).length} files
                      </p>
                    </div>
                  </div>
                  <button 
                    className="text-blue-600 hover:text-blue-800"
                    onClick={() => alert(`View warranty documents`)}
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex justify-between border-t border-gray-200 pt-3">
            <div>
              <button
                className="px-3 py-1.5 text-sm bg-red-600 text-white rounded hover:bg-red-700"
                onClick={() => {
                  if (window.confirm('Are you sure you want to delete this invoice and all its service records?')) {
                    handleDeleteInvoice(invoice.id);
                    closeModal();
                  }
                }}
              >
                Delete Invoice
              </button>
            </div>
            <div className="space-x-2">
              <button
                className="px-3 py-1.5 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50"
                onClick={closeModal}
              >
                Close
              </button>
              <button
                className="px-3 py-1.5 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => alert(`Edit invoice ${invoice.invoiceNumber}`)}
              >
                Edit Invoice
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};