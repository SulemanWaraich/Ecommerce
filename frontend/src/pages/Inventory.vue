<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4">📦 Inventory Management</h2>

    <!-- Search + Sort -->
    <div class="flex flex-col sm:flex-row justify-between mb-4 gap-2">
      <input
        v-model="search"
        type="text"
        placeholder="Search by name..."
        class="border px-3 py-2 rounded w-full sm:w-1/3"
      />

      <select v-model="sortKey" class="border px-3 py-2 rounded w-full sm:w-1/4">
        <option disabled value="">Sort by</option>
        <option value="stock">Stock (Low → High)</option>
        <option value="price">Price (Low → High)</option>
      </select>
    </div>

    <!-- Table -->
    <div class="overflow-auto bg-white p-4 rounded shadow">
      <table class="w-full text-left">
        <thead class="border-b font-semibold">
          <tr>
            <th class="p-2">Image</th>
            <th class="p-2">Name</th>
            <th class="p-2">Price</th>
            <th class="p-2">Stock</th>
            <th class="p-2">Update Stock</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="product in sortedProducts"
            :key="product._id"
            class="border-t"
          >
            <td class="p-2">
              <img
                v-if="product.image"
                :src='`http://localhost:3000/uploads/${product.image}`'
                class="w-12 h-12 object-cover rounded"
              />
            </td>
            <td class="p-2">{{ product.name }}</td>
            <td class="p-2">${{ product.price }}</td>
            <td
              class="p-2 font-semibold"
              :class="product.stock < 10 ? 'text-red-500' : 'text-gray-700'"
            >
              {{ product.stock }}
              <span v-if="product.stock < 10" class="text-xs ml-1 italic">(Low)</span>
            </td>
            <td class="p-2">
              <input
                v-model.number="product.newStock"
                type="number"
                class="border p-1 rounded w-20 mr-2"
              />
              <button
                @click="updateStock(product._id, product.newStock)"
                class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
              >
                Update
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Feedback Message -->
    <div v-if="message" class="mt-4 text-green-600 font-medium">
      {{ message }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

const products = ref([]);
const search = ref('');
const sortKey = ref('');
const message = ref('');

const fetchProducts = async () => {
  const res = await axios.get('http://localhost:3000/api/products/');
  products.value = res.data.product.map(p => ({ ...p, newStock: p.stock }));
};

const updateStock = async (id, newStock) => {
  try {
    await axios.put(`http://localhost:3000/api/products/${id}`, { stock: newStock });
    message.value = 'Stock updated successfully ✅';
    setTimeout(() => (message.value = ''), 3000);
    await fetchProducts();
  } catch (err) {
    message.value = '❌ Failed to update stock';
    setTimeout(() => (message.value = ''), 3000);
  }
};

const filteredProducts = computed(() => {
  return products.value.filter(p =>
    p.name.toLowerCase().includes(search.value.toLowerCase())
  );
});

const sortedProducts = computed(() => {
  if (sortKey.value === 'stock') {
    return [...filteredProducts.value].sort((a, b) => a.stock - b.stock);
  } else if (sortKey.value === 'price') {
    return [...filteredProducts.value].sort((a, b) => a.price - b.price);
  }
  return filteredProducts.value;
});

onMounted(fetchProducts);
</script>
