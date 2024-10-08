<template>
    <div class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
      <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div class="mt-3 text-center">
          <h3 class="text-lg leading-6 font-medium text-gray-900">{{ post ? 'Editar' : 'Crear' }} Post</h3>
          <form class="mt-2 px-7 py-3" @submit.prevent="handleSubmit">
            <div class="mb-4">
              <label for="title" class="block text-gray-700 text-sm font-bold mb-2">Título</label>
              <input
                type="text"
                id="title"
                v-model="form.title"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              >
            </div>
            <div class="mb-4">
              <label for="content" class="block text-gray-700 text-sm font-bold mb-2">Contenido</label>
              <textarea
                id="content"
                v-model="form.content"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="4"
                required
              ></textarea>
            </div>
            <div class="flex items-center justify-between">
              <button
                type="submit"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                {{ post ? 'Actualizar' : 'Crear' }}
              </button>
              <button
                type="button"
                @click="$emit('cancel')"
                class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits, reactive, watchEffect } from 'vue';
  
  const props = defineProps({
    post: {
      type: Object,
      default: null
    }
  });
  
  const emit = defineEmits(['submit', 'cancel']);
  
  const form = reactive({
    title: '',
    content: ''
  });
  
  watchEffect(() => {
    if (props.post) {
      form.title = props.post.title || '';
      form.content = props.post.content || '';
    } else {
      form.title = '';
      form.content = '';
    }
  });
  
  const handleSubmit = () => {
    emit('submit', { ...form });
  };
  </script>
  