// app/maintenance/page.js
"use client";

import React, { useState, useEffect } from "react";

// Check your component exports - if they're default exports, don't use curly braces
// If they're named exports, keep the curly braces
import { InvoiceCards } from "./InvoiceCards";
import { InvoiceDetailsModal } from "./InvoiceDetailsModal";
import { InvoiceTable } from "./InvoiceTable";
import { RecordDetailsModal } from "./RecordDetailsModal";
import { RecordTable } from "./RecordTable";
import { Filters } from "./Filters";

// Import data from data.js
import { invoices as sampleInvoices, extractServiceRecords } from "./data";

const Page = () => {
  // ---------- STATE ----------
  const [invoices, setInvoices] = useState(sampleInvoices);
  const [serviceRecords, setServiceRecords] = useState(
    extractServiceRecords(sampleInvoices)
  );
  const [activeInvoice, setActiveInvoice] = useState(null);
  const [activeRecord, setActiveRecord] = useState(null);
  const [viewMode, setViewMode] = useState("invoices"); // 'invoices' or 'records'
  const [invoiceCardView, setInvoiceCardView] = useState(true); // true for cards, false for table

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

  // Record click handler
  const handleRecordClick = (record) => {
    setActiveRecord(record);
  };

  // Close details modals
  const closeInvoiceDetails = () => {
    setActiveInvoice(null);
  };

  const closeRecordDetails = () => {
    setActiveRecord(null);
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

      if (activeRecord && activeRecord.id === id) {
        setActiveRecord(null);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <header className="bg-white shadow-sm mb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-blue-800 border-b-4 border-yellow-400 pb-2">
            Maintenance Records
          </h1>
          <div className="flex space-x-2">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={() => alert("This would open the new record form")}
            >
              + Add New Record
            </button>
            <button
              className="px-4 py-2 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200"
              onClick={() => alert("This would export the filtered records")}
            >
              Export
            </button>
          </div>
        </div>

        {/* View Toggle */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex justify-center">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium rounded-l-lg focus:z-10 focus:outline-none ${
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
                className={`px-4 py-2 text-sm font-medium rounded-r-lg focus:z-10 focus:outline-none ${
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
            invoiceCardView={invoiceCardView}
            setInvoiceCardView={setInvoiceCardView}
          />
        )}

        {/* Summary Bar */}
        <div className="bg-blue-50 rounded-lg p-4 mb-6 flex justify-between items-center">
          <div>
            <span className="text-sm text-gray-600">
              {viewMode === "invoices" ? "Invoices Found:" : "Records Found:"}
            </span>
            <span className="ml-2 font-semibold">
              {viewMode === "invoices"
                ? filteredInvoices.length
                : filteredRecords.length}
            </span>
          </div>
          <div>
            <span className="text-sm text-gray-600">Total Cost:</span>
            <span className="ml-2 font-semibold">
              {formatCurrency(
                viewMode === "invoices" ? invoicesTotal : recordsTotal
              )}
            </span>
          </div>
        </div>

        {/* INVOICE VIEW */}
        {viewMode === "invoices" && (
          <>
            {/* Card View */}
            {invoiceCardView
              ? InvoiceCards && (
                  <InvoiceCards
                    filteredInvoices={filteredInvoices}
                    handleInvoiceClick={handleInvoiceClick}
                    handleDeleteInvoice={handleDeleteInvoice}
                    formatCurrency={formatCurrency}
                    resetFilters={resetFilters}
                  />
                )
              : InvoiceTable && (
                  <InvoiceTable
                    filteredInvoices={filteredInvoices}
                    handleInvoiceClick={handleInvoiceClick}
                    handleDeleteInvoice={handleDeleteInvoice}
                    formatCurrency={formatCurrency}
                    invoicesTotal={invoicesTotal}
                  />
                )}
          </>
        )}

        {/* RECORD VIEW */}
        {viewMode === "records" && RecordTable && (
          <RecordTable
            filteredRecords={filteredRecords}
            handleRecordClick={handleRecordClick}
            handleDeleteRecord={handleDeleteRecord}
            formatCurrency={formatCurrency}
            recordsTotal={recordsTotal}
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

        {activeRecord && RecordDetailsModal && (
          <RecordDetailsModal
            record={activeRecord}
            closeModal={closeRecordDetails}
            handleDeleteRecord={handleDeleteRecord}
            formatCurrency={formatCurrency}
          />
        )}
      </main>

      <footer className="bg-white shadow-inner mt-8 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 text-center">
            © 2025 Fleet Maintenance System. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Page;
