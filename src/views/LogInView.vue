<script setup>
import LogoLogin from '@/components/login/LogoLogin.vue';
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

<style setup>
.parent {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 8px;
}
    
.image-title {
    display: flex;
    flex-direction: column; /* Alinearlos verticalmente */
    align-items: center; /* Centrar horizontalmente */
    gap: 4px; /* Controlar el espacio entre ellos */
}

.image-title > * {
    margin: 0; /* Elimina los márgenes por defecto */
}

.login {
    grid-column: span 2 / span 2;
    grid-row: span 5 / span 5;
    grid-column-start: 4;
    grid-row-start: 1;
}
</style>