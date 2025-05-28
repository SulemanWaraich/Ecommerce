const getRevenueData = async (req, res) => {
  
  
  const data = {
      totalOrders: 1200,
      totalRevenue: 56000,
      trends: {
        daily: [200, 340, 120, 600, 400, 720, 500],
        weekly: [3200, 4500, 3100, 6000],
        monthly: [15000, 20000, 16000],
      },
      byCategory: {
        electronics: 20000,
        fashion: 10000,
        groceries: 8000,
      },
    };
  
    res.json(data);
}

export {getRevenueData}