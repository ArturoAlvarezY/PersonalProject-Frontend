<script setup>
import LoginComponent from '@/components/login/Title.vue';
import FormLogIn from '@/components/login/FormLogIn.vue';
</script>

<template>

    <div class="parent">
        <div class="image-title">
            <LogoLogin></LogoLogin>
            <LoginComponent> </LoginComponent>
        </div>

        <div class="login">
            <FormLogIn></FormLogIn>
        </div>
    </div>
</template>

<style scoped>

</style>