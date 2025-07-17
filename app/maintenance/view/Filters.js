// Filters.js
import React from 'react';

export const Filters = ({ 
  filterText,
  setFilterText,
  dateRange,
  setDateRange,
  selectedVendor,
  setSelectedVendor,
  selectedServiceType,
  setSelectedServiceType,
  vendors,
  serviceTypes,
  resetFilters,
  viewMode
}) => {
  return (
    <div className="bg-white rounded shadow-sm p-3 mb-3">
      <div className="grid grid-cols-1 lg:grid-cols-8 gap-2">
        {/* Search - Narrower, takes 2 columns */}
        <div className="lg:col-span-2">
          <label className="block text-xs font-medium text-gray-700 mb-0.5">Search</label>
          <input
            type="text"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            placeholder="Search invoice #, vendor..."
            className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded"
          />
        </div>
        
        {/* Start Date - Narrower */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-0.5">Start Date</label>
          <input
            type="date"
            value={dateRange.start}
            onChange={(e) => setDateRange({...dateRange, start: e.target.value})}
            className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded"
          />
        </div>
        
        {/* End Date - Narrower */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-0.5">End Date</label>
          <input
            type="date"
            value={dateRange.end}
            onChange={(e) => setDateRange({...dateRange, end: e.target.value})}
            className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded"
          />
        </div>
        
        {/* Vendor */}
        <div className="lg:col-span-2">
          <label className="block text-xs font-medium text-gray-700 mb-0.5">Vendor</label>
          <select
            value={selectedVendor}
            onChange={(e) => setSelectedVendor(e.target.value)}
            className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded"
          >
            <option value="">All Vendors</option>
            {vendors.map(vendor => (
              <option key={vendor} value={vendor}>{vendor}</option>
            ))}
          </select>
        </div>
        
        {/* Service Type */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-0.5">Service Type</label>
          <select
            value={selectedServiceType}
            onChange={(e) => setSelectedServiceType(e.target.value)}
            className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded"
          >
            <option value="">All Service Types</option>
            {serviceTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        
        {/* Reset Filters Button - Moved to end */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-0.5">&nbsp;</label>
          <button
            onClick={resetFilters}
            className="w-full px-3 py-1.5 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200 whitespace-nowrap"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};