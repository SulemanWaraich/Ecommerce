<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4">📊 Revenue Analysis</h2>

    <!-- Statistics Card -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <StatsCard title="Total Orders" :value="data.totalOrders" icon="🛒" />
      <StatsCard
        title="Total Revenue"
        :value="`$${data.totalRevenue}`"
        icon="💰"
      />
    </div>

    <!-- Filters -->
    <div class="flex flex-col sm:flex-row gap-4 mb-6">
      <!-- Time Filter -->
      <div>
        <label class="mr-2 font-medium">Select Time View:</label>
        <select v-model="selectedView" class="p-2 border rounded">
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      <!-- Categories Filter -->
      <div>
        <label class="mr-2 font-medium">Product Category:</label>
        <select v-model="selectedCategory" class="p-2 border rounded">
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
        </select>
      </div>
    </div>

    <!-- Chart to show data -->
    <div class="bg-white p-4 rounded shadow">
      <BarChart :chart-data="chartData" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import StatsCard from "../components/StatsCard.vue";
import BarChart from "../components/BarChart.vue";
import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const data = ref({
  totalOrders: 0,
  totalRevenue: 0,
  trends: { daily: [], weekly: [], monthly: [] },
});

const selectedView = ref("daily");
const selectedCategory = ref("");

const fetchData = async () => {
  const query = selectedCategory.value
    ? `?category=${selectedCategory.value}`
    : "";
  const res = await axios.get(`${backendUrl}/api/revenue${query}`);
  data.value = res.data;
};

watch([selectedView, selectedCategory], fetchData);
onMounted(fetchData);

const chartData = computed(() => ({
  labels: Array(data.value.trends[selectedView.value]?.length)
    .fill("")
    .map((_, i) => `#${i + 1}`),
  datasets: [
    {
      label: `Revenue (${selectedView.value})`,
      data: data.value.trends[selectedView.value],
      backgroundColor: "#3b82f6",
    },
  ],
}));
</script>
