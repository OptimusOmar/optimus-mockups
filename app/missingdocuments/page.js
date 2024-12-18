"use client"
import React, { useState, useMemo } from 'react';
import { ChevronDown, ChevronRight, AlertCircle, Upload, FileWarning, Search, Building2, X, Filter } from 'lucide-react';
import {
  Card,
  CardContent,
} from "@/components/ui/card";

const MissingDocuments = () => {
  const [expandedSections, setExpandedSections] = useState({
    companies: true,
    drivers: false,
    trucks: false,
    trailers: false
  });
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedDocType, setSelectedDocType] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Enhanced mock data with relationships and IDs
  const missingDocs = {
    companies: [
      { id: 'COM001', name: 'ABC Logistics', documents: ['Operating Authority'] },
      { id: 'COM002', name: 'XYZ Transport', documents: ['Operating Authority'] },
      { id: 'COM003', name: 'FastFreight Inc', documents: ['Operating Authority'] },
    ],
    drivers: [
      { id: 'DRV001', name: 'John Doe', companyId: 'COM001', companyName: 'ABC Logistics', documents: ['Driver License', 'Medical Certificate'] },
      { id: 'DRV002', name: 'Jane Smith', companyId: 'COM001', companyName: 'ABC Logistics', documents: ['Annual MVR'] },
      { id: 'DRV003', name: 'Mike Johnson', companyId: 'COM002', companyName: 'XYZ Transport', documents: ['Medical Certificate'] },
    ],
    trucks: [
      { id: 'TRK001', name: 'Truck #123', companyId: 'COM001', companyName: 'ABC Logistics', documents: ['Registration', 'Annual Inspection'] },
      { id: 'TRK002', name: 'Truck #456', companyId: 'COM002', companyName: 'XYZ Transport', documents: ['Insurance Liability'] },
    ],
    trailers: [
      { id: 'TRL001', name: 'Trailer #789', companyId: 'COM001', companyName: 'ABC Logistics', documents: ['Registration'] },
      { id: 'TRL002', name: 'Trailer #012', companyId: 'COM002', companyName: 'XYZ Transport', documents: ['Insurance Liability'] },
    ],
  };

  // Get unique document types across all sections
  const uniqueDocTypes = useMemo(() => {
    const docTypes = new Set();
    Object.values(missingDocs).forEach(section => {
      section.forEach(item => {
        item.documents.forEach(doc => docTypes.add(doc));
      });
    });
    return Array.from(docTypes).sort();
  }, []);

  const filteredData = useMemo(() => {
    const filterByCompanyAndSearch = (items) => {
      return items.filter(item => {
        const matchesCompany = !selectedCompany || item.companyId === selectedCompany;
        const matchesDocType = !selectedDocType || 
          item.documents.some(doc => doc === selectedDocType);
        const matchesSearch = !searchTerm || 
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (item.id && item.id.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (item.companyName && item.companyName.toLowerCase().includes(searchTerm.toLowerCase())) ||
          item.documents.some(doc => 
            doc.toLowerCase().includes(searchTerm.toLowerCase())
          );
        return matchesCompany && matchesSearch && matchesDocType;
      });
    };

    const filtered = {
      companies: filterByCompanyAndSearch(missingDocs.companies),
      drivers: filterByCompanyAndSearch(missingDocs.drivers),
      trucks: filterByCompanyAndSearch(missingDocs.trucks),
      trailers: filterByCompanyAndSearch(missingDocs.trailers),
    };

    // Calculate total matches for any search term
    const totalMatches = Object.values(filtered).reduce((acc, section) => {
      return acc + section.length;
    }, 0);

    return { filtered, totalMatches };
  }, [selectedCompany, selectedDocType, searchTerm]);

  const renderSection = (title, data, section) => (
    <Card className="mb-3 border-0 shadow-sm overflow-hidden">
      <div 
        className="flex items-center justify-between p-3 cursor-pointer bg-blue-50 hover:bg-blue-100 transition-colors duration-200"
        onClick={() => toggleSection(section)}
      >
        <div className="flex items-center space-x-3">
          <FileWarning className="text-blue-600" size={20} />
          <h2 className="text-lg font-semibold text-blue-900">{title}</h2>
          <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full text-sm font-medium">
            {data.reduce((acc, item) => acc + item.documents.length, 0)} missing
          </span>
        </div>
        {expandedSections[section] ? (
          <ChevronDown className="text-blue-600" size={18} />
        ) : (
          <ChevronRight className="text-blue-600" size={18} />
        )}
      </div>
      
      {expandedSections[section] && (
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-blue-100">
                  <th className="px-4 py-2 text-left text-sm font-medium text-blue-900">ID</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-blue-900">Name</th>
                  {section !== 'companies' && (
                    <th className="px-4 py-2 text-left text-sm font-medium text-blue-900">Company</th>
                  )}
                  <th className="px-4 py-2 text-left text-sm font-medium text-blue-900">Missing Documents</th>
                  <th className="px-4 py-2 text-center text-sm font-medium text-blue-900">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-50">
                {data.map((item) => (
                  <tr key={item.id} className="hover:bg-blue-50/50 transition-colors duration-150">
                    <td className="px-4 py-2 text-sm font-medium text-blue-900">
                      {item.id}
                    </td>
                    <td className="px-4 py-2 text-sm text-blue-900">{item.name}</td>
                    {section !== 'companies' && (
                      <td className="px-4 py-2 text-sm text-blue-900">
                        <div className="flex items-center gap-1.5">
                          <Building2 size={14} className="text-blue-600" />
                          {item.companyName}
                        </div>
                      </td>
                    )}
                    <td className="px-4 py-2">
                      <div className="flex flex-wrap gap-1.5">
                        {item.documents.map((doc, index) => {
                          const isHighlighted = (searchTerm && 
                            doc.toLowerCase().includes(searchTerm.toLowerCase())) ||
                            doc === selectedDocType;
                          return (
                            <span 
                              key={index}
                              className={`text-xs px-2 py-0.5 rounded-full border font-medium transition-colors duration-200 ${
                                isHighlighted 
                                  ? 'bg-blue-200 text-blue-800 border-blue-300 shadow-sm' 
                                  : 'bg-blue-50 text-blue-600 border-blue-100'
                              }`}
                            >
                              {doc}
                            </span>
                          );
                        })}
                      </div>
                    </td>
                    <td className="px-4 py-2 text-center">
                      <button className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 text-xs font-medium transition-colors duration-200">
                        <Upload size={14} />
                        Upload
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      )}
    </Card>
  );

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const clearFilters = () => {
    setSelectedCompany(null);
    setSelectedDocType(null);
    setSearchTerm('');
  };

  return (
    <div className="bg-white flex">
      <div className="sidebar w-80 bg-blue-600 mr-6 hidden md:block"></div>
      <div className="flex min-h-screen flex-col pt-8 px-6 w-full max-w-7xl mx-auto text-black">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <AlertCircle className="text-blue-600" size={24} />
            <h1 className="text-2xl font-bold text-blue-900">Missing Documents</h1>
          </div>
          <p className="text-blue-600 text-sm">Upload required documents for your fleet units</p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-6">
          {/* Search Results Summary */}
          {(searchTerm || selectedCompany || selectedDocType) && (
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm text-blue-600">
                  {searchTerm && `${filteredData.totalMatches} result${filteredData.totalMatches !== 1 ? 's' : ''} found`}
                </span>
                {(selectedCompany || selectedDocType) && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400">|</span>
                    <Filter size={14} className="text-blue-600" />
                    <span className="text-sm text-blue-600">
                      Filters applied
                    </span>
                  </div>
                )}
              </div>
              <button
                onClick={clearFilters}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                Clear all filters
              </button>
            </div>
          )}
          
          <div className="flex flex-wrap gap-4">
            {/* Search Bar */}
            <div className="relative flex-1 min-w-[240px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" size={18} />
              <input
                type="text"
                placeholder="Search by ID, name, company, or document type..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border-blue-100 border bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Company Filter */}
            <select
              className="px-4 py-2 rounded-lg border-blue-100 border bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm min-w-[180px]"
              value={selectedCompany || ''}
              onChange={(e) => setSelectedCompany(e.target.value || null)}
            >
              <option value="">All Companies</option>
              {missingDocs.companies.map(company => (
                <option key={company.id} value={company.id}>
                  {company.name}
                </option>
              ))}
            </select>

            {/* Document Type Filter */}
            <select
              className="px-4 py-2 rounded-lg border-blue-100 border bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm min-w-[180px]"
              value={selectedDocType || ''}
              onChange={(e) => setSelectedDocType(e.target.value || null)}
            >
              <option value="">All Document Types</option>
              {uniqueDocTypes.map(docType => (
                <option key={docType} value={docType}>
                  {docType}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="space-y-3">
          {Object.entries(filteredData.filtered).map(([section, data]) => (
            data.length > 0 && renderSection(
              section.charAt(0).toUpperCase() + section.slice(1),
              data,
              section
            )
          ))}
        </div>

        {/* No Results Message */}
        {Object.values(filteredData.filtered).every(section => section.length === 0) && (
          <div className="text-center py-8">
            <p className="text-gray-500">No matching documents found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MissingDocuments;