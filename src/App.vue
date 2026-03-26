  <script setup>
  import AppNavbar from './components/AppNavbar.vue';
  import HomeView from './views/HomeView.vue';
  </script>

  <template>
    <div>
      <AppNavbar/>
      <!-- <HomeView/> -->
      <router-view/>
      <div class="continaner mt-4">
          <h1>hello ecommerce app</h1>
      </div>
    </div>
  </template>

