<template>
  <nav class="navbar bg-dark navbar-dark navbar-expand-lg shadow-sm">
    <div class="container">
      <RouterLink class="navbar-brand fw-bold" to="/">
        <i class="bi bi-shop me-2"></i> E-Commerce
      </RouterLink>

      <div class="d-flex">
        <RouterLink to="/cart" class="text-decoration-none">
          <span class="btn btn-outline-light me-1">
            <i class="bi bi-cart"></i>
          </span>

          <span class="btn btn-outline-light position-relative">
            Cart
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {{ cartstore.cartcount }}
            </span>
          </span>
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useCartStore } from '../stores/cart';
const cartstore=useCartStore()

</script>

