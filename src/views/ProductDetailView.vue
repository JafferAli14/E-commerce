<script setup>
import { ref, onMounted } from 'vue';
import { useCartStore } from '../stores/cart';
import api from '../services/api';
import { useRoute } from 'vue-router';

// import { onMounted } from 'vue';
const route=useRoute()
const cartStore=useCartStore()
const product=ref([])
const loading=ref(true)

onMounted(async()=>{
    try{
        const response=await api.getproductid(route.params.id)
        console.log(response)
        product.value=response.data
    }
    catch(error){
        console.error("an error occured:",error)
    }
    finally{
        loading.value=false
    }
})


</script>

<template>
  <div class="container mt-5">
    <div v-if="loading" class="text-center py-5">
      <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status"></div>
      <p class="mt-3 text-muted">Loading product details...</p>
    </div>

    <div v-else-if="product" class="row g-5">
      
      <div class="col-md-6">
        <div class="card border-0 shadow-sm p-4 text-center bg-white">
          <img 
            :src="product.image" 
            :alt="product.title" 
            class="img-fluid mx-auto" 
            style="max-height: 450px; object-fit: contain;"
          >
        </div>
      </div>

      <div class="col-md-6">
        <nav aria-label="breadcrumb" class="mb-3">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
            <li class="breadcrumb-item active text-capitalize">{{ product.category }}</li>
          </ol>
        </nav>

        <h1 class="display-6 fw-bold mb-3">{{ product.title }}</h1>
        
        <div class="d-flex align-items-center mb-4">
          <span class="badge bg-warning text-dark me-2">
            <i class="bi bi-star-fill"></i> {{ product.rating?.rate }}
          </span>
          <span class="text-muted small">({{ product.rating?.count }} reviews)</span>
        </div>

        <h2 class="text-success fw-bold mb-4">${{ product.price }}</h2>

        <div class="mb-4">
          <h5 class="fw-bold">Description</h5>
          <p class="text-muted lh-base">{{ product.description }}</p>
        </div>

        <div class="d-grid gap-2">
          <button 
            @click="cartStore.addtocart(product)" 
            class="btn btn-primary btn-lg shadow-sm"
          >
            <i class="bi bi-cart-plus me-2"></i>Add to Cart
          </button>
          
          <router-link to="/" class="btn btn-outline-secondary">
            Continue Shopping
          </router-link>
        </div>
      </div>
    </div>

    <div v-else class="text-center py-5">
      <h3 class="text-danger">Product not found!</h3>
      <router-link to="/" class="btn btn-primary mt-3">Back to Home</router-link>
    </div>
  </div>
</template>