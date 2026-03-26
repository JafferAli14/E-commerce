<script setup>
import { ref,onMounted } from 'vue';
import api from '../services/api';
import { useCartStore } from '../stores/cart';
const cartstore=useCartStore()

const products=ref([])
const loading = ref(true)
console.log("HOMEVIEW DETECTED");

onMounted(async()=>{
    console.log("2. onMounted has triggered!");
    try{
        const response=await api.getproducts()
        // const response = await axios.get("https://fakestoreapi.com/products")
        // console.log(response)
        products.value=response.data
        console.log(products)

    }
    catch(error){

    console.error("An Error has occuered while fetching the data",error)
    }
    finally{
        loading.value=false
    }
})


</script>

<template>
  <div class="container mt-5">
    <div v-if="loading" class="text-center">
      <div class="spinner-border text-primary"></div>
    </div>

    <div v-else class="row g-4">
      <div v-for="item in products" :key="item.id" class="col-12 col-md-6 col-lg-3">
        <div class="card h-100 shadow">
          <img :src="item.image" class="card-img-top p-3" style="height: 200px; object-fit: contain;">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title fs-6">{{ item.title }}</h5>
            <p class="text-success fw-bold mt-auto">${{ item.price }}</p>
            <button @click="cartstore.addToCart(item)" class="btn btn-primary w-100 mt-auto">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>