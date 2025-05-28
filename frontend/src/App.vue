<script setup>
import Sidebar from './components/Sidebar.vue';
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="flex">
    <Sidebar />
    <div class="ml-64 w-full">
      <Navbar />
      <main class="p-6 bg-gray-50 min-h-screen">
        <RouterView />
      </main>
    </div>
  </div>
</template>


<style>
body {
  font-family: 'Inter', sans-serif;
}
</style>
