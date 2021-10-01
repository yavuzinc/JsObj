const salesTaxRates = {
    AB: 0.05,
    BC: 0.12,
    SK: 0.10
  };
  
  const companySalesData = [
    {
      name: "Telus",
      province: "BC",
      sales: [ 100, 200, 400 ]
    },
    {
      name: "Bombardier",
      province: "AB",
      sales: [ 80, 20, 10, 100, 90, 500 ]
    },
    {
      name: "Telus",
      province: "SK",
      sales: [ 500, 100 ]
    }
  ];
  let totalSales = 0
  let sumTotal = 0
  for (let i = 0; i < companySalesData.length ; i++){
      totalSales = companySalesData[i].sales; 
      console.log(totalSales);
   }

 
  
  const calculateSalesTax = function(salesData, taxRates) {
    
       
   
}

const results = calculateSalesTax(companySalesData, salesTaxRates);

