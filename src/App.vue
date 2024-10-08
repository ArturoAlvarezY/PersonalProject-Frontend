<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Footer from './components/footer/Footer.vue';
import RoleBasedNav from './components/rolenavbar/RoleBasedNav.vue';
</script>

<template>
  <main>
    <RoleBasedNav></RoleBasedNav>
    <RouterView></RouterView>
    <Footer></Footer>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  margin: 0 auto;
  background-color: white;
  background-size: 100%;
  object-fit: cover;
}
</style>
