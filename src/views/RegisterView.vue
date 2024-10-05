<script setup>
import Register from '@/components/register/Register.vue';
import Title from '@/components/login/Title.vue';
</script>

<template>

  <div class="parent">
      <div class="image-title">
           <Title> </Title>
      </div>

      <div class="login">
          <Register></Register>
      </div>
  </div>
</template>

<style scoped>
.parent {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 8px;
}

.image-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.login {
  grid-column: span 2 / span 2;
  grid-row: span 5 / span 5;
  grid-column-start: 4;
  grid-row-start: 1;
}

@media (max-width: 768px) {
  .parent {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 20px;
  }

  .login {
    grid-column: span 1 / span 1;
    grid-row: span 1 / span 1;
    grid-column-start: auto;
    grid-row-start: auto;
    margin-left: 60px;
  }
}
</style>