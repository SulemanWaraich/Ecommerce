    <script setup>
    import { RouterLink } from 'vue-router';
    </script>
    
<template>
  <aside class="w-64 min-h-screen bg-gray-100 shadow-md fixed left-0 top-0 p-6">
    <nav class="space-y-4">
      <RouterLink
        to="/dashboard"
        class="block py-2 px-4 rounded hover:bg-blue-500 hover:text-white"
        active-class="bg-blue-500 text-white"
      >
        📊 Revenue Analysis
      </RouterLink>
      <RouterLink
        to="/inventory"
        class="block py-2 px-4 rounded hover:bg-blue-500 hover:text-white"
        active-class="bg-blue-500 text-white"
      >
        📦 Inventory Management
      </RouterLink>
      <RouterLink
        to="/add-product"
        class="block py-2 px-4 rounded hover:bg-blue-500 hover:text-white"
        active-class="bg-blue-500 text-white"
      >
        ➕ Add Product
      </RouterLink>
    </nav>
  </aside>
</template>


<style scoped>
</style>
