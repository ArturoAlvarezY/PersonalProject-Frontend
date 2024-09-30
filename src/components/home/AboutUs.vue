<template>
    <div class="flex lg:flex-row flex-col gap-4 bg-surface-0 dark:bg-surface-900" id="services">
        <div class="flex-1 flex items-center justify-center">
            <div class="p-6 pt-12 lg:p-12">
                <h1 class="text-3xl lg:text-5xl font-bold text-surface-900 dark:text-surface-0 mb-4 lg:leading-normal text-center lg:text-left">
                 Dejando huella <br /><span class="text-blue-500 dark:text-blue-400"> con huellas de amor</span>
                </h1>
                <p class="text-surface-700 dark:text-surface-200 leading-normal mb-8 text-center lg:text-left">
                    El verdadero amor no necesita palabras, solo gestos de cariño y dedicación
                </p>
                <div class="flex items-center justify-center lg:justify-start gap-6">
                    <RegisterButton></RegisterButton>
                    <LogIn></LogIn>
                </div>
            </div>
        </div>
        <div class="flex-1 overflow-hidden">
            <img src="https://img.freepik.com/foto-gratis/dueno-mascota-es-afectuoso-su-perro_23-2150984415.jpg?t=st=1727457056~exp=1727460656~hmac=ca184097d0efe96852fb1997de9da3c0c7344af675420e4711fd355342e4e187&w=826" alt="hero-1" class="h-full w-full object-cover lg:[clip-path:polygon(12%_0,100%_0%,100%_100%,0_100%)]" />
        </div>
    </div>
</template>

<script setup>
import RegisterButton from './button/RegisterButton.vue';
import LogIn from './button/LogIn.vue';

</script>
<style>
#services {
  background-color: lightblue;
}
</style>