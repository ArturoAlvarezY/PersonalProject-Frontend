<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/footer/Footer.vue';
</script>

<template>
<RouterView></RouterView>
<Footer></Footer>
</template>

<style scoped>
main {
  width: 100%;
  margin: 0 auto;
  background-color: white;
/*   background-image: url("../src/assets/bumby.png"); Poner la foto de Bumby
 */  background-size: 100%;
  object-fit: cover;
}
/* @media (max-width: 480px) {
  main {
    background-image: url("../src/assets/bumbyresponsive.png"); Poner la foto de Bumby
   }
} */

</style>