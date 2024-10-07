<template>
    <div class="min-h-screen bg-gray-100">
        <div class="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <!-- Perfil del usuario -->
            <div class="bg-white shadow rounded-lg mb-8">
                <div class="h-48 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-t-lg"></div>
                <div class="px-4 py-5 sm:p-6 -mt-20">
                    <div class="flex items-end">
                        <img class="h-32 w-32 rounded-full ring-4 ring-white" :src="user.avatar" :alt="user.username">
                        <div class="ml-6">
                            <h1 class="text-3xl font-bold text-gray-900">{{ user.username }}</h1>
                            <p class="text-sm text-gray-500">{{ user.bio }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Crear nueva publicación -->
            <div class="bg-white shadow rounded-lg mb-8">
                <div class="px-4 py-5 sm:p-6">
                    <h2 class="text-lg font-medium text-gray-900 mb-4">Create a New Publication</h2>
                    <form @submit.prevent="createPublication">
                        <input v-model="title" type="text" placeholder="Title" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"/>
                        <textarea v-model="newPublication" rows="3"
                            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder="What's on your mind?"></textarea>
                        <div class="mt-3 flex justify-end">
                            <button type="submit"
                                class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Publish
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <!-- Listar publicaciones -->
            <div class="bg-white shadow rounded-lg">
                <div class="px-4 py-5 sm:p-6">
                    <h2 class="text-lg font-medium text-gray-900 mb-4">Publications</h2>
                    <ul class="space-y-4">
                        <li v-for="pub in publications" :key="pub.id" class="bg-gray-50 rounded-lg p-4">
                            <div class="flex space-x-3">
                                <img class="h-10 w-10 rounded-full" :src="user.avatar" :alt="user.username">
                                <div class="flex-1 space-y-1">
                                    <div class="flex items-center justify-between">
                                        <h3 class="text-sm font-medium">{{ user.username }}</h3>
                                    </div>
                                    <p class="text-sm text-gray-700">{{ pub.content }}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, watch } from 'vue'
import { useAuthStore } from '@/stores/auth'
import axios from 'axios'

// Obtenemos la instancia del authStore
const authStore = useAuthStore();

// Reactivo para manejar los datos del usuario y publicaciones
const user = ref(authStore.user);
const password = ref(authStore)
const publications = ref([]);
const newPublication = ref('');
const title = ref('');  // Título reactivo

// Hacemos userId reactivo
const userId = ref(Number(JSON.parse(localStorage.getItem('authUser'))?.id));


if (!userId.value) {
    console.warn("No se encontró userId inicialmente. Asegúrate de que el usuario esté correctamente autenticado.");
}

const loadUserPosts = async () => {
    if (!userId.value) return;

    try {
        console.log(`Fetching posts for userId: ${userId.value}`);
        const response = await axios.get(`/api/v1/posts/profile/${userId.value}`);
        publications.value = response.data;
    } catch (error) {
        console.error("Error fetching user posts:", error);
    }
}

const createPublication = async () => {
    if (newPublication.value.trim()) {
        try {
            const response = await axios.post(`http://localhost:8080/api/v1/posts?userId=${userId.value}`, {
                title: title.value,
                content: newPublication.value,
            }, {
                headers: {
                    Authorization: `Basic ${btoa('Bumby@gmail.com:password')}`  // Reemplaza por las credenciales que usas en Postman
                }
            });
            publications.value.unshift(response.data);
            newPublication.value = '';
            title.value = ''; 
        } catch (error) {
            console.error("Error creating publication:", error.response ? error.response.data : error);
        }
    }
};

</script>