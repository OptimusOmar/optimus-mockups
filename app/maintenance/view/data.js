// data.js - Sample data for the maintenance system

// Invoice data (high-level)
export const invoices = [
    { 
      id: 1, 
      date: '01/06/2023', 
      invoiceNumber: 'INV-230106', 
      vendor: 'D AND N SON TRUCKING', 
      totalCost: 150.00, 
      mileage: 25000, 
      invoiceFile: 'invoice-230106.pdf',
      services: [
        { 
          id: 101, 
          serviceType: 'Weekly maintenance', 
          cost: 150.00, 
          parts: false, 
          labor: true, 
          hasWarranty: false 
        }
      ]
    },
    { 
      id: 2, 
      date: '01/13/2023', 
      invoiceNumber: 'INV-230113', 
      vendor: 'D AND N SON TRUCKING', 
      totalCost: 150.00, 
      mileage: 25300, 
      invoiceFile: 'invoice-230113.pdf',
      services: [
        { 
          id: 102, 
          serviceType: 'Weekly maintenance', 
          cost: 150.00, 
          parts: true, 
          labor: false, 
          hasWarranty: false 
        }
      ]
    },
    { 
      id: 3, 
      date: '01/27/2023', 
      invoiceNumber: 'INV-230127', 
      vendor: 'PREMIER AUTO SHOP', 
      totalCost: 439.99, 
      mileage: 25900, 
      invoiceFile: 'invoice-230127.pdf',
      services: [
        { 
          id: 103, 
          serviceType: 'Oil Change', 
          cost: 89.99, 
          parts: true, 
          labor: false, 
          hasWarranty: false 
        },
        { 
          id: 104, 
          serviceType: 'Brake Inspection', 
          cost: 150.00, 
          parts: false, 
          labor: true, 
          hasWarranty: false 
        },
        { 
          id: 105, 
          serviceType: 'Air Filter Replacement', 
          cost: 200.00, 
          parts: true, 
          labor: false, 
          hasWarranty: true,
          warrantyDate: '01/27/2024',
          warrantyMileage: 40000,
          warrantyFile: 'warranty-230127.pdf'
        }
      ]
    },
    { 
      id: 4, 
      date: '02/17/2023', 
      invoiceNumber: 'INV-230217', 
      vendor: 'D AND N SON TRUCKING', 
      totalCost: 150.00, 
      mileage: 26500, 
      invoiceFile: 'invoice-230217.pdf',
      services: [
        { 
          id: 106, 
          serviceType: 'Weekly maintenance', 
          cost: 150.00, 
          parts: false, 
          labor: true, 
          hasWarranty: false 
        }
      ]
    },
    { 
      id: 5, 
      date: '03/03/2023', 
      invoiceNumber: 'INV-230303', 
      vendor: 'PREMIER AUTO SHOP', 
      totalCost: 89.99, 
      mileage: 27100, 
      invoiceFile: 'invoice-230303.pdf',
      services: [
        { 
          id: 107, 
          serviceType: 'Oil Change', 
          cost: 89.99, 
          parts: false, 
          labor: true, 
          hasWarranty: false 
        }
      ]
    },
    { 
      id: 6, 
      date: '03/17/2023', 
      invoiceNumber: 'INV-230317', 
      vendor: 'ELITE AUTO CARE', 
      totalCost: 1250.00, 
      mileage: 27700, 
      invoiceFile: 'invoice-230317.pdf',
      services: [
        { 
          id: 108, 
          serviceType: 'Tire Replacement', 
          cost: 650.00, 
          parts: true, 
          labor: false, 
          hasWarranty: true,
          warrantyDate: '03/17/2024',
          warrantyMileage: 40000,
          warrantyFile: 'warranty-tires-230317.pdf'
        },
        { 
          id: 109, 
          serviceType: 'Wheel Alignment', 
          cost: 150.00, 
          parts: false, 
          labor: true, 
          hasWarranty: false
        },
        { 
          id: 110, 
          serviceType: 'Brake Service', 
          cost: 450.00, 
          parts: true, 
          labor: false, 
          hasWarranty: true,
          warrantyDate: '03/17/2024',
          warrantyMileage: 35000,
          warrantyFile: 'warranty-brakes-230317.pdf'
        }
      ]
    }
  ];
  
  // Extract service records for record view
  export const extractServiceRecords = (invoiceData) => {
    let records = [];
    invoiceData.forEach(invoice => {
      invoice.services.forEach(service => {
        records.push({
          ...service,
          date: invoice.date,
          invoiceNumber: invoice.invoiceNumber,
          vendor: invoice.vendor,
          mileage: invoice.mileage,
          invoiceFile: invoice.invoiceFile,
          invoiceId: invoice.id
        });
      });
    });
    return records;
  };
  
  export const records = extractServiceRecords(invoices);