<script setup>
// import { C } from 'vue-router/dist/router-CWoNjPRp.mjs';
import { useCartStore } from '../stores/cart';
const cartStore = useCartStore();
</script>

<template>
  <div class="container mt-5 ">
    <div class="d-flex justify-content-between align-items-center mb-5" >
        <h2><i class="bi bi-cart3 me-3"></i>Your Shopping Cart</h2>
        <button v-if="cartStore.cartcount>0" @click="cartStore.clearcart" class="btn btn-outline-danger btn-sm">
            <i class="bi bi-trash-fill me-2"></i>Clear Cart
        </button>
    </div>
    <div class="noneitems" v-if="cartStore.cartcount===0" Class="text-center py-5 shadow-sm rounded bg-light border">
      <i class="bi bi-bag-x display-1"></i>
      <p class="fs-4 mt-3">Your cart is empty!</p>
        <router-link to="/" class=" btn btn-info text-white text-decoration-none">
            <h3>Start Shopping</h3>
        </router-link>
    </div>
    <div v-else>
        <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th >Action</th> 
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item,index in cartStore.items" :key="index">
                        <td>
                            <div class="d-flex align-items-center">
                                <img 
                                    :src="item.image" 
                                    alt="product" 
                                    style="width: 60px; height: 100px; object-fit: contain;" 
                                    class="me-3 bg-white border rounded p-1"
                                >
                                <span class="fw-bold">${{ item.title }}</span>
                            </div>
                        </td>
                        <td class="fw-bold text-nowrap">$ {{ item.price }}</td>
                        <td>
                            <button @click="cartStore.removefromcart(index)" class="btn btn-outline-danger">
                                <i class="bi bi-trash me-2"></i>
                                Remove
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="row justify-content-center mt-4">
        <div class="col-md-4">
          <div class="card shadow-sm border-primary">
            <div class="card-body">
              <div class="d-flex justify-content-between mb-2">
                <span class="text-muted">Quantity: </span>
                <span>{{ cartStore.cartcount }} items</span>
              </div>
              <div class="d-flex justify-content-between fs-4 fw-bold border-top pt-2">
                <span>Total:</span>
                <span class="text-success">${{ cartStore.cartprice }}</span>
              </div>
              <button class="btn btn-success w-100 mt-3 py-2 fw-bold shadow-sm">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </div>
</template>