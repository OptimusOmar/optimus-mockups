// RecordTable.js
import React from 'react';

export const RecordTable = ({ 
  filteredRecords, 
  handleDeleteRecord, 
  formatCurrency,
  recordsTotal,
  invoices,
  handleInvoiceClick
}) => {
  // Function to find invoice by record's invoiceId
  const findInvoiceByRecord = (record) => {
    return invoices.find(invoice => invoice.id === record.invoiceId);
  };

  return (
    <div className="bg-white rounded shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Invoice #
              </th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Vendor
              </th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Service Type
              </th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Cost
              </th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Mileage
              </th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Parts/Labor
              </th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Warranty
              </th>
              <th className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredRecords.length > 0 ? (
              filteredRecords.map(record => (
                <tr 
                  key={record.id} 
                  className="hover:bg-gray-50"
                >
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    {record.date}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm font-medium">
                    <button
                      className="text-blue-600 hover:text-blue-800 hover:underline"
                      onClick={() => {
                        const invoice = findInvoiceByRecord(record);
                        if (invoice) {
                          handleInvoiceClick(invoice);
                        }
                      }}
                    >
                      {record.invoiceNumber}
                    </button>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    {record.vendor}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    {record.serviceType}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    {formatCurrency(record.cost)}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    {record.mileage ? record.mileage.toLocaleString() : '-'}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm">
                    <div className="flex">
                      {record.parts && (
                        <span className="px-1.5 py-0.5 rounded text-xs bg-green-100 text-green-800 mr-0.5">P</span>
                      )}
                      {record.labor && (
                        <span className="px-1.5 py-0.5 rounded text-xs bg-green-100 text-green-800">L</span>
                      )}
                    </div>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    {record.hasWarranty ? (
                      <span className="px-1.5 py-0.5 rounded text-xs bg-blue-100 text-blue-800">Yes</span>
                    ) : (
                      <span className="px-1.5 py-0.5 rounded text-xs bg-gray-100 text-gray-800">No</span>
                    )}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-center">
                    <div className="flex justify-center space-x-1">
                      <button 
                        className="text-blue-600 hover:text-blue-900"
                        onClick={(e) => {
                          e.stopPropagation();
                          const invoice = findInvoiceByRecord(record);
                          if (invoice) {
                            handleInvoiceClick(invoice);
                          }
                        }}
                        title="View Invoice"
                      >
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <button 
                        className="text-red-600 hover:text-red-900"
                        onClick={(e) => handleDeleteRecord(record.id, e)}
                        title="Delete Record"
                      >
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="px-3 py-4 text-center text-gray-500">
                  No records found matching your filters
                </td>
              </tr>
            )}
          </tbody>
          <tfoot className="bg-gray-50">
            <tr>
              <td colSpan="4" className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900 text-right">
                Total:
              </td>
              <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                {formatCurrency(recordsTotal)}
              </td>
              <td colSpan="4"></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};
