<template>
  <div class="bg-white p-4 rounded shadow flex items-center justify-between">
    <div>
      <h4 class="text-gray-600 text-sm">{{ title }}</h4>
      <p class="text-xl font-semibold">{{ value }}</p>
    </div>
    <div class="text-3xl">{{ icon }}</div>
  </div>
</template>

<script setup>
defineProps(['title', 'value', 'icon']);
</script>
