<template>
  <Bar :data="chartData" :options="options" />
</template>

<script setup>
import { Bar } from 'vue-chartjs';
import {
  Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const props = defineProps(['chartData']);

const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
  },
};
</script>
