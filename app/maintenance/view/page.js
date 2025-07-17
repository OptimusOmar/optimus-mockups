// app/maintenance/page.js
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

// Check your component exports - if they're default exports, don't use curly braces
// If they're named exports, keep the curly braces
import { InvoiceDetailsModal } from "./InvoiceDetailsModal";
import { InvoiceTable } from "./InvoiceTable";
import { RecordTable } from "./RecordTable";
import { Filters } from "./Filters";

// Import data from data.js
import { invoices as sampleInvoices, extractServiceRecords } from "./data";

const Page = () => {
  const router = useRouter();
  
  // ---------- STATE ----------
  const [invoices, setInvoices] = useState(sampleInvoices);
  const [serviceRecords, setServiceRecords] = useState(
    extractServiceRecords(sampleInvoices)
  );
  const [activeInvoice, setActiveInvoice] = useState(null);
  const [viewMode, setViewMode] = useState("invoices"); // 'invoices' or 'records'

  // Filters state
  const [filterText, setFilterText] = useState("");
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [selectedVendor, setSelectedVendor] = useState("");
  const [selectedServiceType, setSelectedServiceType] = useState("");

  // Extract unique vendors and service types for filters
  const vendors = [...new Set(invoices.map((invoice) => invoice.vendor))];
  const serviceTypes = [
    ...new Set(serviceRecords.map((record) => record.serviceType)),
  ];

  // ---------- FILTERING LOGIC ----------
  // Filter invoices
  const filteredInvoices = invoices.filter((invoice) => {
    // Text search
    const matchesText =
      !filterText ||
      invoice.invoiceNumber.toLowerCase().includes(filterText.toLowerCase()) ||
      invoice.vendor.toLowerCase().includes(filterText.toLowerCase()) ||
      invoice.services.some((service) =>
        service.serviceType.toLowerCase().includes(filterText.toLowerCase())
      );

    // Date range
    const invoiceDate = new Date(invoice.date);
    const matchesStartDate =
      !dateRange.start || invoiceDate >= new Date(dateRange.start);
    const matchesEndDate =
      !dateRange.end || invoiceDate <= new Date(dateRange.end);

    // Vendor filter
    const matchesVendor = !selectedVendor || invoice.vendor === selectedVendor;

    // Service type filter
    const matchesServiceType =
      !selectedServiceType ||
      invoice.services.some(
        (service) => service.serviceType === selectedServiceType
      );

    return (
      matchesText &&
      matchesStartDate &&
      matchesEndDate &&
      matchesVendor &&
      matchesServiceType
    );
  });

  // Filter service records
  const filteredRecords = serviceRecords.filter((record) => {
    // Text search
    const matchesText =
      !filterText ||
      record.invoiceNumber.toLowerCase().includes(filterText.toLowerCase()) ||
      record.vendor.toLowerCase().includes(filterText.toLowerCase()) ||
      record.serviceType.toLowerCase().includes(filterText.toLowerCase());

    // Date range
    const recordDate = new Date(record.date);
    const matchesStartDate =
      !dateRange.start || recordDate >= new Date(dateRange.start);
    const matchesEndDate =
      !dateRange.end || recordDate <= new Date(dateRange.end);

    // Vendor filter
    const matchesVendor = !selectedVendor || record.vendor === selectedVendor;

    // Service type filter
    const matchesServiceType =
      !selectedServiceType || record.serviceType === selectedServiceType;

    return (
      matchesText &&
      matchesStartDate &&
      matchesEndDate &&
      matchesVendor &&
      matchesServiceType
    );
  });

  // Calculate totals
  const invoicesTotal = filteredInvoices.reduce(
    (sum, invoice) => sum + invoice.totalCost,
    0
  );
  const recordsTotal = filteredRecords.reduce(
    (sum, record) => sum + record.cost,
    0
  );

  // ---------- EVENT HANDLERS ----------
  // Reset all filters
  const resetFilters = () => {
    setFilterText("");
    setDateRange({ start: "", end: "" });
    setSelectedVendor("");
    setSelectedServiceType("");
  };

  // Format currency - utility function
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  // Invoice click handler
  const handleInvoiceClick = (invoice) => {
    setActiveInvoice(invoice);
  };

  // Close details modals
  const closeInvoiceDetails = () => {
    setActiveInvoice(null);
  };

  // Delete handlers
  const handleDeleteInvoice = (id, e) => {
    if (e) e.stopPropagation();
    if (
      window.confirm(
        "Are you sure you want to delete this invoice and all associated service records?"
      )
    ) {
      const updatedInvoices = invoices.filter((invoice) => invoice.id !== id);
      setInvoices(updatedInvoices);

      // Also remove any service records associated with this invoice
      const updatedRecords = serviceRecords.filter(
        (record) => record.invoiceId !== id
      );
      setServiceRecords(updatedRecords);

      if (activeInvoice && activeInvoice.id === id) {
        setActiveInvoice(null);
      }
    }
  };

  const handleDeleteRecord = (id, e) => {
    if (e) e.stopPropagation();
    if (
      window.confirm("Are you sure you want to delete this service record?")
    ) {
      // First find which invoice this record belongs to
      const record = serviceRecords.find((r) => r.id === id);

      if (!record) return;

      const invoiceId = record.invoiceId;

      // Update the invoices state
      const updatedInvoices = invoices.map((invoice) => {
        if (invoice.id === invoiceId) {
          // Remove the service from this invoice's services array
          const updatedServices = invoice.services.filter(
            (service) => service.id !== id
          );

          // Recalculate the total cost
          const newTotalCost = updatedServices.reduce(
            (sum, service) => sum + service.cost,
            0
          );

          return {
            ...invoice,
            services: updatedServices,
            totalCost: newTotalCost,
          };
        }
        return invoice;
      });

      setInvoices(updatedInvoices);

      // Also remove the record from serviceRecords
      const updatedRecords = serviceRecords.filter(
        (record) => record.id !== id
      );
      setServiceRecords(updatedRecords);
    }
  };

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
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-blue-800 border-b-4 border-yellow-400 pb-2">
              Maintenance Records
            </h1>
            <div className="flex space-x-2">
              <button
                className="px-3 py-1.5 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => router.push('/maintenance/upload')}
              >
                + Add New Invoice
              </button>
              <button
                className="px-3 py-1.5 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
                onClick={() => alert("This would export the filtered records")}
              >
                Export
              </button>
            </div>
          </div>

          {/* View Toggle - More Compact */}
          <div className="bg-white rounded shadow-sm p-2 mb-3">
            <div className="flex justify-center">
              <div className="inline-flex rounded shadow-sm" role="group">
                <button
                  type="button"
                  className={`px-3 py-1.5 text-sm font-medium rounded-l focus:z-10 focus:outline-none ${
                    viewMode === "invoices"
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
                  }`}
                  onClick={() => setViewMode("invoices")}
                >
                  Invoice View
                </button>
                <button
                  type="button"
                  className={`px-3 py-1.5 text-sm font-medium rounded-r focus:z-10 focus:outline-none ${
                    viewMode === "records"
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
                  }`}
                  onClick={() => setViewMode("records")}
                >
                  Record View
                </button>
              </div>
            </div>
          </div>

          {/* Filters */}
          {Filters && (
            <Filters
              filterText={filterText}
              setFilterText={setFilterText}
              dateRange={dateRange}
              setDateRange={setDateRange}
              selectedVendor={selectedVendor}
              setSelectedVendor={setSelectedVendor}
              selectedServiceType={selectedServiceType}
              setSelectedServiceType={setSelectedServiceType}
              vendors={vendors}
              serviceTypes={serviceTypes}
              resetFilters={resetFilters}
              viewMode={viewMode}
            />
          )}

          {/* Summary Bar - More Compact */}
          <div className="bg-blue-50 rounded p-2 mb-3 flex justify-between items-center text-sm">
            <div>
              <span className="text-gray-600">
                {viewMode === "invoices" ? "Invoices Found:" : "Records Found:"}
              </span>
              <span className="ml-2 font-semibold">
                {viewMode === "invoices"
                  ? filteredInvoices.length
                  : filteredRecords.length}
              </span>
            </div>
            <div>
              <span className="text-gray-600">Total Cost:</span>
              <span className="ml-2 font-semibold">
                {formatCurrency(
                  viewMode === "invoices" ? invoicesTotal : recordsTotal
                )}
              </span>
            </div>
          </div>

          {/* INVOICE VIEW - Table Only */}
          {viewMode === "invoices" && InvoiceTable && (
            <InvoiceTable
              filteredInvoices={filteredInvoices}
              handleInvoiceClick={handleInvoiceClick}
              handleDeleteInvoice={handleDeleteInvoice}
              formatCurrency={formatCurrency}
              invoicesTotal={invoicesTotal}
            />
          )}

          {/* RECORD VIEW */}
          {viewMode === "records" && RecordTable && (
            <RecordTable
              filteredRecords={filteredRecords}
              handleDeleteRecord={handleDeleteRecord}
              formatCurrency={formatCurrency}
              recordsTotal={recordsTotal}
              invoices={invoices}
              handleInvoiceClick={handleInvoiceClick}
            />
          )}

          {/* MODALS */}
          {activeInvoice && InvoiceDetailsModal && (
            <InvoiceDetailsModal
              invoice={activeInvoice}
              closeModal={closeInvoiceDetails}
              handleDeleteInvoice={handleDeleteInvoice}
              formatCurrency={formatCurrency}
            />
          )}
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

export default Page;
