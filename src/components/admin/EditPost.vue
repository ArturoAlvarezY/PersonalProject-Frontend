<template>
    <div>
      <h3 class="text-lg font-semibold">Editar Post</h3>
      <form @submit.prevent="submit">
        <div>
          <label>Título</label>
          <input v-model="title" type="text" class="border" required />
        </div>
        <div>
          <label>Contenido</label>
          <textarea v-model="content" class="border" required></textarea>
        </div>
        <div>
          <label>Imagen URL</label>
          <input v-model="imageUrl" type="text" class="border" />
        </div>
        <button type="submit" class="px-4 py-2 bg-blue-500 text-white">Guardar</button>
        <button @click="cancel" class="px-4 py-2 bg-gray-500 text-white">Cancelar</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits } from 'vue';
  
  
  const props = defineProps({
    post: Object,
  });
  
  const emits = defineEmits(['update', 'cancel']);
  
  const title = ref(props.post.title);
  const content = ref(props.post.content);
  const imageUrl = ref(props.post.imageUrl);
  
  const submit = () => {
    emits('update', { ...props.post, title: title.value, content: content.value, imageUrl: imageUrl.value });
  };
  
  const cancel = () => {
    emits('cancel');
  };
  </script>
  