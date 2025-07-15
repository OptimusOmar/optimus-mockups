// InvoiceCards.js
import React from 'react';

export const InvoiceCards = ({ 
  filteredInvoices, 
  handleInvoiceClick, 
  handleDeleteInvoice, 
  formatCurrency,
  resetFilters 
}) => {
  if (filteredInvoices.length === 0) {
    return (
      <div className="col-span-3 bg-white rounded-lg shadow p-8 text-center">
        <p className="text-gray-500">No invoices found matching your filters</p>
        <button 
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={resetFilters}
        >
          Reset Filters
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredInvoices.map(invoice => (
        <div 
          key={invoice.id} 
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
          onClick={() => handleInvoiceClick(invoice)}
        >
          <div className="bg-blue-500 px-4 py-2 text-white flex justify-between items-center">
            <h3 className="font-semibold">{invoice.invoiceNumber}</h3>
            <span>{invoice.date}</span>
          </div>
          <div className="p-4">
            <div className="mb-3">
              <p className="text-sm text-gray-500">Vendor</p>
              <p className="font-medium truncate">{invoice.vendor}</p>
            </div>
            <div className="mb-3 flex justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Cost</p>
                <p className="font-medium">{formatCurrency(invoice.totalCost)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Mileage</p>
                <p className="font-medium">{invoice.mileage.toLocaleString()}</p>
              </div>
            </div>
            <div className="mb-3">
              <p className="text-sm text-gray-500">Services</p>
              <div className="mt-1 flex flex-wrap gap-1">
                {invoice.services.map(service => (
                  <span 
                    key={service.id} 
                    className="inline-block px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800"
                  >
                    {service.serviceType}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-sm text-gray-500">
              {invoice.services.length} {invoice.services.length === 1 ? 'service' : 'services'} included
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-2 flex justify-between">
            <button 
              className="text-sm text-red-600 hover:text-red-800"
              onClick={(e) => handleDeleteInvoice(invoice.id, e)}
            >
              Delete
            </button>
            <button 
              className="text-sm text-blue-600 hover:text-blue-800"
              onClick={(e) => {
                e.stopPropagation();
                alert(`Download ${invoice.invoiceFile}`);
              }}
            >
              Download Invoice
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};