<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4">📊 Revenue Analysis</h2>

    <!-- Stat Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <StatsCard title="Total Orders" :value="data.totalOrders" icon="🛒" />
      <StatsCard title="Total Revenue" :value="`$${data.totalRevenue}`" icon="💰" />
    </div>

    <!-- Filter -->
    <div class="mb-4">
      <label class="mr-2 font-medium">Select View:</label>
      <select v-model="selectedView" class="p-2 border rounded">
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>
    </div>

    <!-- Chart -->
    <div class="bg-white p-4 rounded shadow">
      <BarChart :chart-data="chartData" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import StatsCard from '../components/StatsCard.vue';
import BarChart from '../components/BarChart.vue';
import axios from 'axios';

const data = ref({
  totalOrders: 0,
  totalRevenue: 0,
  trends: { daily: [], weekly: [], monthly: [] }
});

const selectedView = ref('daily');

onMounted(async () => {
  const res = await axios.get('http://localhost:3000/api/revenue');
  data.value = res.data;
});

const chartData = computed(() => ({
  labels: Array(data.value.trends[selectedView.value]?.length).fill('').map((_, i) => `#${i + 1}`),
  datasets: [{
    label: `Revenue (${selectedView.value})`,
    data: data.value.trends[selectedView.value],
    backgroundColor: '#3b82f6'
  }]
}));
</script>
