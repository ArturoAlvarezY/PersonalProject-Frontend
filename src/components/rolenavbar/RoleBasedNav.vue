<template>
    <div>
      <header>
        <Navbar v-if="!isAuthenticated" />
        <AdminNav v-else-if="isAdmin" />
        <UserNavbar v-else-if="isUser" />
      </header>
    </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth';  
import AdminNav from '../admin/AdminNav.vue';
import UserNavbar from '../userprofiles/UserNavbar.vue';
import Navbar from '../navbar/Navbar.vue';

const authStore = useAuthStore();

const isAuthenticated = computed(() => authStore.user.isAuthenticated);
const isAdmin = computed(() => authStore.user.role === 'ROLE_ADMIN');
const isUser = computed(() => authStore.user.role === 'ROLE_USER');


</script>
