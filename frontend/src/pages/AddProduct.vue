<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4">➕ Add New Product</h2>

    <form @submit.prevent="submitProduct" class="bg-white p-6 rounded shadow max-w-xl">
      <!-- Product Name -->
      <div class="mb-4">
        <label class="block font-medium mb-1">Product Name</label>
        <input v-model="product.name" type="text" required class="w-full border px-3 py-2 rounded" />
      </div>

      <!-- Description -->
      <div class="mb-4">
        <label class="block font-medium mb-1">Description</label>
        <textarea v-model="product.description" required class="w-full border px-3 py-2 rounded"></textarea>
      </div>

      <!-- Price -->
      <div class="mb-4">
        <label class="block font-medium mb-1">Price ($)</label>
        <input v-model.number="product.price" type="number" required class="w-full border px-3 py-2 rounded" />
      </div>

      <!-- Stock -->
      <div class="mb-4">
        <label class="block font-medium mb-1">Initial Stock</label>
        <input v-model.number="product.stock" type="number" required class="w-full border px-3 py-2 rounded" />
      </div>

      <!-- Image Upload -->
      <div class="mb-4">
        <label class="block font-medium mb-1">Upload Image</label>
        <input type="file" accept="image/*" @change="handleImage" class="block border-1 p-2 text-center bg-gray-300 cursor-pointer" />
        <img v-if="previewUrl" :src="previewUrl" class="w-24 h-24 object-cover mt-2 rounded border" />
      </div>

      <!-- Submit -->
      <button
        type="submit"
        class="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded mt-4 mr-2"
      >
        Add Product
      </button>

      <!-- Feedback -->
      <p v-if="message" class="mt-4 text-green-600 font-medium">{{ message }}</p>

      <button @click="resetForm" class="bg-red-600 hover:bg-green-700 text-white px-5 py-2 rounded mt-4">Reset</button>

    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const product = ref({
  name: '',
  description: '',
  price: null,
  stock: null,
});
const imageFile = ref(null);
const previewUrl = ref('');
const message = ref('');

const handleImage = (e) => {
  const file = e.target.files[0];
  imageFile.value = file;

  // Preview image
  const reader = new FileReader();
  reader.onload = (event) => {
    previewUrl.value = event.target.result;
  };
  reader.readAsDataURL(file);
};

const submitProduct = async () => {
  try {
    const formData = new FormData();
    formData.append('name', product.value.name);
    formData.append('description', product.value.description);
    formData.append('price', product.value.price);
    formData.append('stock', product.value.stock);
    if (imageFile.value) {
      formData.append('image', imageFile.value);
    }

    await axios.post('http://localhost:3000/api/products', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    message.value = '✅ Product added successfully!'; 
  } catch (error) {
    message.value = '❌ Error adding product & all fields are required!';
    console.error(error);
  }
};

  const resetForm = () => {
    product.value = { name: '', description: '', price: null, stock: null };
    imageFile.value = null;
    previewUrl.value = '';
    message.value ='';
  };
  
</script>
