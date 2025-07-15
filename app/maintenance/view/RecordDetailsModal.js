// RecordDetailsModal.js
import React from 'react';

export const RecordDetailsModal = ({ 
  record, 
  closeModal, 
  handleDeleteRecord, 
  formatCurrency 
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-screen overflow-auto">
        <div className="bg-blue-500 px-6 py-4 text-white flex justify-between items-center">
          <h2 className="text-xl font-semibold">Service Record Details</h2>
          <button 
            onClick={closeModal}
            className="text-white hover:text-gray-200 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-medium mb-4 pb-2 border-b border-gray-200">Service Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Service Type</p>
                  <p className="font-medium">{record.serviceType}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Cost</p>
                  <p className="font-medium">{formatCurrency(record.cost)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Parts / Labor</p>
                  <div className="flex mt-1">
                    {record.parts && (
                      <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800 mr-1">Parts</span>
                    )}
                    {record.labor && (
                      <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Labor</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4 pb-2 border-b border-gray-200">Invoice Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Invoice Number</p>
                  <p className="font-medium">{record.invoiceNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="font-medium">{record.date}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Vendor</p>
                  <p className="font-medium">{record.vendor}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Mileage</p>
                  <p className="font-medium">{record.mileage ? record.mileage.toLocaleString() : '-'}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Warranty Information (Conditional) */}
          {record.hasWarranty && (
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4 pb-2 border-b border-gray-200">Warranty Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Warranty Status</p>
                  <p className="font-medium">
                    <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">Active</span>
                  </p>
                </div>
                {record.warrantyDate && (
                  <div>
                    <p className="text-sm text-gray-500">Warranty Date</p>
                    <p className="font-medium">{record.warrantyDate}</p>
                  </div>
                )}
                {record.warrantyMileage && (
                  <div>
                    <p className="text-sm text-gray-500">Warranty Mileage</p>
                    <p className="font-medium">{record.warrantyMileage.toLocaleString()}</p>
                  </div>
                )}
              </div>
            </div>
          )}
          
          {/* Attachments */}
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <h3 className="text-lg font-medium mb-4">Attachments</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-300 rounded-lg bg-white p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <svg className="h-8 w-8 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-medium">{record.invoiceFile}</p>
                    <p className="text-xs text-gray-500">Invoice Document</p>
                  </div>
                </div>
                <button 
                  className="text-blue-600 hover:text-blue-800"
                  onClick={() => alert(`Download ${record.invoiceFile}`)}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              
              {record.hasWarranty && record.warrantyFile && (
                <div className="border border-gray-300 rounded-lg bg-white p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <svg className="h-8 w-8 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-medium">{record.warrantyFile}</p>
                      <p className="text-xs text-gray-500">Warranty Document</p>
                    </div>
                  </div>
                  <button 
                    className="text-blue-600 hover:text-blue-800"
                    onClick={() => alert(`Download ${record.warrantyFile}`)}
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex justify-between border-t border-gray-200 pt-6">
            <div>
              <button
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                onClick={() => {
                  if (window.confirm('Are you sure you want to delete this service record?')) {
                    handleDeleteRecord(record.id);
                    closeModal();
                  }
                }}
              >
                Delete Record
              </button>
            </div>
            <div className="space-x-3">
              <button
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
                onClick={closeModal}
              >
                Close
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={() => alert(`Edit record`)}
              >
                Edit Record
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};