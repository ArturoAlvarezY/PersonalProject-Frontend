<template>
    <div>
      <div v-if="isEditing">
        <EditPost
          :post="postData"
          @update="onUpdate"
          @cancel="isEditing = false"
        />
      </div>
      <div v-else>
        <button
          @click="isEditing = true"
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Editar
        </button>
        <button
          @click="onDelete"
          class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
        >
          Eliminar
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits, computed, ref } from 'vue';
  import { useAuthStore } from '@/stores/auth';
  import axios from 'axios';
  import EditPost from './EditPost.vue';
  
  const props = defineProps({
    cardId: Number,
    postData: Object,
  });
  
  const emits = defineEmits(['edit', 'delete']);
  
  const authStore = useAuthStore();
  
  const isAdmin = computed(() => authStore.user.role === 'ROLE_ADMIN');
  const isEditing = ref(false);
  
  const onUpdate = async (updatedPost) => {
    try {
      const auth = {
        username: authStore.user.username,
        password: 'password', 
      };
  
      const response = await axios.put(`http://localhost:8080/api/v1/posts/${props.cardId}`, updatedPost, {
        params: { adminId: authStore.user.id },
        auth: auth,
      });
      
      emits('edit', response.data); 
      isEditing.value = false; 
    } catch (error) {
      console.error('Error al actualizar el post:', error);
    }
  };
  
  const onDelete = async () => {
    try {
      const auth = {
        username: authStore.user.username,
        password: 'password', 
      };
  
      await axios.delete(`http://localhost:8080/api/v1/posts/${props.cardId}`, {
        params: { adminId: authStore.user.id },
        auth: auth,
      });
      emits('delete', props.cardId); 
    } catch (error) {
      console.error('Error al eliminar el post:', error);
    }
  };
  </script>
  