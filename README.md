# 🛍️ E-commerce Admin Dashboard

> A Vue.js and Node.js based admin dashboard for managing sales, revenue, and inventory for e-commerce platforms.

## 🌍 Live Demo  
👉 [Click here to view the Live App] https://wondrous-klepon-215188.netlify.app/dashboard) 👈

## 📌 Core Features
1. Revenue Analysis
- Real-time display of total orders and revenue
- Interactive charts for visualizing sales trends (daily, weekly, monthly)
- Filter revenue data by product categories
- Revenue comparison between different time periods

2. Inventory Management
- Comprehensive list view of all products with inventory status
- Sort and filter functionality by product name, category, or stock level
- Low stock alerts with visual indicators
- Quick edit functionality for inventory levels

3. Product Management
- Add new products with details (name, description, price, stock)
- Upload product images
- Edit existing product information

## 🛠️ Tech Stack

| Layer       | Technology                     | Purpose                     |
|-------------|--------------------------------|------------------------------|
| Frontend    | Vue 3 + Vite                   | Fastest rendering            |
| Charts      | Chart.js                       | Organized Data               |
| Routing     | Vue Router                     | For Routing                  |
| HTTP Client | Axios                          | Better Api Calls             |
| Backend     | Node.js with Express           | For smooth server            |
| Database    | MongoDB (Mongoose ODM)         | STORING Data                 |
| Hosting     | Netlify (Fron) + Fly (Back)    | Easier to deploy             |

🚀 Installation
#Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account or local MongoDB instance

Setup Instructions
```bash
# Clone the repository
git clone https://github.com/SulemanWaraich/Ecommerce.git

# Navigate to project directory
cd Ecommerce

# and then navigate to backend folder
cd Backend

# Install dependencies to both frontend and 
npm install

# and then navigate to frontend folder
cd Frontend

# Install dependencies to both frontend and 
npm install

# Create a .env file in server directory with:
MONGO_URI=your_mongodb_connection_string
PORT=3000

# Start the development server (from root directory)
npm run dev
The application will be available at http://localhost:3000
```

📊 Sample Data
- The dashboard comes pre-loaded with realistic sample data including:

#Revenue Analytics:
Total Orders: 1,200
Total Revenue: $56,000

Trend Data:
Daily: [200, 340, 120, 600, 400, 720, 500]
Weekly: [3200, 4500, 3100, 6000]
Monthly: [15000, 20000, 16000]

Category Breakdown:
Electronics:
Orders: 400
Revenue: $20,000

Trends:
Daily: [100, 140, 60, 300, 200, 360, 250]
Weekly: [1200, 1800, 1000, 2000]
Monthly: [5000, 7000, 8000]

Fashion:
Orders: 300
Revenue: $15,000

Trends:
Daily: [70, 110, 50, 200, 150, 300, 120]
Weekly: [900, 1100, 1200, 1400]
Monthly: [4000, 6000, 5000]

Product Inventory:
-5 sample products across 2 categories (Electronics and Fashion) with:
-Real-time stock level tracking
-Price and sales history
-Category-based filtering

The data structure supports:
✅ Dynamic filtering by category
✅ Real-time trend visualization
✅ Multi-period comparisons (daily/weekly/monthly)
✅ Category performance benchmarking

🔧 Project Structure
Ecommerce/
frontend/
  ├── pages/
  │   ├── RevenueAnalysis.vue
  │   ├── Inventory.vue
  │   └── AddProduct.vue
  ├── components/
  │   ├── Navbar.vue
  │   ├── Sidebar.vue
  │   ├── BarChart.vue
  │   └── StatsCard.vue
  └── ...

backend/
  ├── controllers/
  ├── models/
  ├── routes/
  ├── uploads/
  └── app.js
  
📌 Key Implementation Details

#Data Visualization
-Interactive line charts for revenue trends
-Bar charts for category-wise sales
-Pie charts for inventory distribution

#Responsive Design
-Fully responsive layout that works on desktop and tablet
-Mobile-friendly navigation
-Adaptive component sizing

## 🤝 How to Contribute
-Fork the repository
-Create a new branch for your feature/fix
-Commit your changes with descriptive messages
-Push to your fork and submit a pull request
