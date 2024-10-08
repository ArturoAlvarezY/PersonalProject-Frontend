<template>
    <div class="max-w-md mx-auto">
        <button v-if="!showForm" @click="toggleForm"
            class="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Crear Nueva Carta
        </button>

        <div v-if="showForm" class="bg-white shadow-md rounded-lg p-6">
            <div class="flex justify-between items-center mb-6">
                <h3 class="text-2xl font-bold text-gray-800">Crear Nueva Carta</h3>
                <button @click="toggleForm" class="text-gray-500 hover:text-gray-700 focus:outline-none"
                    aria-label="Cerrar formulario">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                        </path>
                    </svg>
                </button>
            </div>
            <form @submit.prevent="submit" class="space-y-4">
                <div>
                    <label for="title" class="block text-sm font-medium text-gray-700">Título</label>
                    <input id="title" v-model="title" type="text" required
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </div>
                <div>
                    <label for="content" class="block text-sm font-medium text-gray-700">Contenido</label>
                    <textarea id="content" v-model="content" required rows="4"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
                </div>
                <div>
                    <label for="imageUrl" class="block text-sm font-medium text-gray-700">URL de la Imagen</label>
                    <input id="imageUrl" v-model="imageUrl" type="url" required
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </div>
                <div class="flex justify-end space-x-3">
                    <button type="button" @click="toggleForm"
                        class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Cancelar
                    </button>
                    <button type="submit" :disabled="isSubmitting"
                        class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50">
                        {{ isSubmitting ? 'Creando...' : 'Crear' }}
                    </button>
                </div>
            </form>
        </div>

        <div v-if="showNotification" class="fixed inset-0 flex items-center justify-center z-50">
            <div class="bg-white rounded-lg p-6 max-w-sm mx-auto shadow-xl">
                <div class="text-center">
                    <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                        <svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                    </div>
                    <h3 class="mt-2 text-lg font-medium text-gray-900">Carta creada con éxito</h3>
                    <p class="mt-1 text-sm text-gray-500">
                        Tu nueva carta ha sido creada y añadida a la colección.
                    </p>
                    <div class="mt-4">
                        <button @click="closeNotification"
                            class="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm">
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import axios from 'axios';

const authStore = useAuthStore();

const showForm = ref(false);
const title = ref('');
const content = ref('');
const imageUrl = ref('');
const isSubmitting = ref(false);
const showNotification = ref(false);

const emit = defineEmits(['create', 'cancel']);

const toggleForm = () => {
    showForm.value = !showForm.value;
    if (!showForm.value) {
        resetForm();
    }
};

const cancelCreate = () => {
    showForm.value = false; 
    resetForm(); 
};
console.log('Admin ID:', authStore.user.id);

const submit = async () => {
    if (isSubmitting.value) return;

    isSubmitting.value = true;
    const postDto = {
        title: title.value,
        content: content.value,
        imageUrl: imageUrl.value,
    };

    console.log('Admin ID:', authStore.user.id); // Verifica el adminId

    try {
        const auth = {
            username: authStore.user.username,
            password: 'password', // Manejo de contraseña seguro
        };

        const response = await axios.post('http://localhost:8080/api/v1/posts', postDto, {
            params: { adminId: authStore.user.id },
            auth: auth,
        });

        emit('create', response.data);
        resetForm();
        showNotification.value = true;
        showForm.value = false;
    } catch (error) {
        console.error('Error al crear la carta:', error.response ? error.response.data : error.message);
    } finally {
        isSubmitting.value = false;
    }
};


const resetForm = () => {
    title.value = '';
    content.value = '';
    imageUrl.value = '';
};

const closeNotification = () => {
    showNotification.value = false;
};
</script>