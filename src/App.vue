<script setup>
import { RouterLink, RouterView } from 'vue-router'
import LogIn from './views/LogIn.vue';
import Navbar from './components/navbar/Navbar.vue';
</script>

<template>
<Navbar></Navbar>
<LogIn></LogIn>
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