<template>
    <div class="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl font-extrabold text-gray-900 text-center mb-8">Nuestros PetCares</h2>
        
        <CreateCard v-if="isAdmin" @create="fetchPosts" @cancel="cancelCreate" />
  
        <div v-if="cards.length" class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="card in cards" :key="card.id" class="bg-white overflow-hidden shadow-lg rounded-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
            <div class="relative pb-2/3">
              <img v-if="card.imageUrl" :src="card.imageUrl" :alt="card.title" class="absolute h-full w-full object-cover transition-all duration-500 ease-in-out transform hover:scale-105">
              <div v-else class="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <v-icon name="fa-image" class="h-12 w-12 text-gray-400" />
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ card.title }}</h3>
              <p class="text-gray-600 mb-4 line-clamp-3">{{ card.content }}</p>
              <div class="flex items-center">
                <span class="text-sm text-gray-500"></span>
              </div>
            </div>
            <div class="px-6 py-4 bg-gray-50 flex justify-between items-center">
              <span class="text-xs font-semibold text-gray-500 uppercase tracking-wider">ID: {{ card.id }}</span>
              <button 
                @click="openModal(card)" 
                class="text-indigo-600 hover:text-indigo-900 transition-colors duration-200 flex items-center">
                <span class="mr-1">Read more</span>
                <v-icon name="fa-arrow-right" class="h-4 w-4" />
              </button>
            </div>
            <AdminButtons v-if="isAdmin"
              :cardId="card.id"
              :postData="{ title: card.title, content: card.content, imageUrl: card.imageUrl }"
              @edit="handleEdit"
              @delete="handleDelete"
            />
          </div>
        </div>
  
        <div v-if="totalPages > 1" class="mt-6 flex justify-center space-x-4">
          <button
            @click="fetchPosts(currentPage - 1)"
            :disabled="currentPage === 0"
            class="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
          >
            Anterior
          </button>
          <button
            @click="fetchPosts(currentPage + 1)"
            :disabled="currentPage === totalPages - 1"
            class="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
          >
            Siguiente
          </button>
        </div>
      </div>
  
      <ReadMoreModal
        v-if="selectedCard"
        :post="selectedCard"
        :isOpen="isModalOpen"
        @close="closeModal"
      />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, computed } from 'vue';
  import axios from 'axios';
  import AdminButtons from './AdminButtons.vue';
  import CreateCard from './CreatePost.vue'; 
  import { useAuthStore } from '@/stores/auth';
  import ReadMoreModal from './ReadMoreModal.vue';
  
  const cards = ref([]);
  const currentPage = ref(0);
  const totalPages = ref(1);
  const isModalOpen = ref(false);
  const selectedCard = ref(null);
  
  const fetchPosts = async (page = 0) => {
    try {
      const { data } = await axios.get(`http://localhost:8080/api/v1/posts`, {
        params: {
          page: page,
          size: 6,
        },
      });
      cards.value = data.content;
      totalPages.value = data.totalPages;
      currentPage.value = data.number;
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  
  const openModal = (card) => {
    selectedCard.value = card;
    isModalOpen.value = true;
  };
  
  const closeModal = () => {
    selectedCard.value = null;
    isModalOpen.value = false;
  };
  
  const handleEdit = (updatedPost) => {
    const index = cards.value.findIndex(card => card.id === updatedPost.id);
    if (index !== -1) {
      cards.value[index] = updatedPost; 
    }
  };
  
  const handleDelete = (cardId) => {
    cards.value = cards.value.filter(card => card.id !== cardId); 
  };
  
  onMounted(() => {
    fetchPosts();
  });
  
  const authStore = useAuthStore(); 
  
  const isAdmin = computed(() => {
    console.log('Is Admin:', authStore.user.role === 'ROLE_ADMIN'); 
    return authStore.user.role === 'ROLE_ADMIN';
  });
  </script>
  
  <style>
  @import 'tailwindcss/base';
  @import 'tailwindcss/components';
  @import 'tailwindcss/utilities';
  
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .pb-2\/3 {
    padding-bottom: 66.666667%;
  }
  </style>
  