const getRevenueData = (req, res) => {
  const category = req.query.category;

  const allData = {
    totalOrders: 1200,
    totalRevenue: 56000,
    trends: {
      daily: [200, 340, 120, 600, 400, 720, 500],
      weekly: [3200, 4500, 3100, 6000],
      monthly: [15000, 20000, 16000],
    },
    byCategory: {
      electronics: {
        totalOrders: 400,
        totalRevenue: 20000,
        trends: {
          daily: [100, 140, 60, 300, 200, 360, 250],
          weekly: [1200, 1800, 1000, 2000],
          monthly: [5000, 7000, 8000],
        },
      },
      fashion: {
        totalOrders: 300,
        totalRevenue: 15000,
        trends: {
          daily: [70, 110, 50, 200, 150, 300, 120],
          weekly: [900, 1100, 1200, 1400],
          monthly: [4000, 6000, 5000],
        },
      },
    },
  };

  if (category && allData.byCategory[category]) {
    return res.json(allData.byCategory[category]);
  }

  res.json({
    totalOrders: allData.totalOrders,
    totalRevenue: allData.totalRevenue,
    trends: allData.trends,
  });
};

export {getRevenueData}