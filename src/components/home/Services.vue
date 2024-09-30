<template>
    <div class="bg-surface-0 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20 text-center" id="aboutUs">
        <div class="mb-4 font-bold text-3xl">
            <span class="text-surface-900 dark:text-surface-0">Conoce nuestros </span>
            <span class="text-primary-600 dark:text-primary-400">servicios ofrecidos</span>
        </div>
        <div class="text-surface-700 dark:text-surface-0/70 mb-[3rem]">Nuestros cuidadores pueden ser para tu mascota:
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-3.5 gap-y-6">
            <div class="w-full p-4">
                <span
                    class="w-16 h-16 mb-6 rounded-lg flex items-center justify-center mx-auto bg-surface-0 dark:bg-surface-800 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.12),0px_0px_2px_0px_rgba(0,0,0,0.06),0px_4px_10px_0px_rgba(0,0,0,0.03)]">                    
                    <v-icon name="gi-dog-house" animation="pulse" />
                </span>
                <div class="text-surface-900 dark:text-surface-0 text-xl mb-2 font-medium">Cuidadores Express</div>
                <p class="text-surface-700 dark:text-surface-0/70 leading-normal max-w-sm mx-auto text-center">Vamos a
                    tu hogar a cuidar de tu adorable mascota</p>
            </div>
            <div class="w-full p-4">
                <span
                    class="w-16 h-16 mb-6 rounded-lg flex items-center justify-center mx-auto bg-surface-0 dark:bg-surface-800 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.12),0px_0px_2px_0px_rgba(0,0,0,0.06),0px_4px_10px_0px_rgba(0,0,0,0.03)]">
                    <v-icon name="gi-sitting-dog" animation="pulse" />
                </span>
                <div class="text-surface-900 dark:text-surface-0 text-xl mb-2 font-medium">Paseadores</div>
                <p class="text-surface-700 dark:text-surface-0/70 leading-normal max-w-sm mx-auto text-center">Paseamos
                    a tu peludito el tiempo que requieras</p>
            </div>
            <div class="w-full p-4">
                <span
                    class="w-16 h-16 mb-6 rounded-lg flex items-center justify-center mx-auto bg-surface-0 dark:bg-surface-800 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.12),0px_0px_2px_0px_rgba(0,0,0,0.06),0px_4px_10px_0px_rgba(0,0,0,0.03)]">
                    <v-icon name="gi-jumping-dog" animation="pulse" />
                </span>
                <div class="text-surface-900 dark:text-surface-0 text-xl mb-2 font-medium">Educadores</div>
                <p class="text-surface-700 dark:text-surface-0/70 leading-normal max-w-sm mx-auto text-center">Educamos
                    a tu mascota para que mejore sus modales</p>
            </div>
            <div class="w-full p-4">
                <span
                    class="w-16 h-16 mb-6 rounded-lg flex items-center justify-center mx-auto bg-surface-0 dark:bg-surface-800 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.12),0px_0px_2px_0px_rgba(0,0,0,0.06),0px_4px_10px_0px_rgba(0,0,0,0.03)]">
                    <v-icon name="wi-moon-waning-crescent-5" animation="pulse" />
                </span>
                <div class="text-surface-900 dark:text-surface-0 text-xl mb-2 font-medium">Pasar la noche</div>
                <p class="text-surface-700 dark:text-surface-0/70 leading-normal max-w-sm mx-auto text-center">Deja a tu
                    peludito en un espacio seguro y agradable para que pase la noche con los mejores cuidados</p>
            </div>
            <div class="w-full p-4">
                <span
                    class="w-16 h-16 mb-6 rounded-lg flex items-center justify-center mx-auto bg-surface-0 dark:bg-surface-800 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.12),0px_0px_2px_0px_rgba(0,0,0,0.06),0px_4px_10px_0px_rgba(0,0,0,0.03)]">
                    <v-icon name="si-petsathome" animation="pulse" />
                </span>
                <div class="text-surface-900 dark:text-surface-0 text-xl mb-2 font-medium">Cuidadores de diferentes
                    especies</div>
                <p class="text-surface-700 dark:text-surface-0/70 leading-normal max-w-sm mx-auto text-center">Encuentra
                    el cuidador ideal para tu tipo de mascota!
                </p>
            </div>
            <div class="w-full p-4">
                <span
                    class="w-16 h-16 mb-6 rounded-lg flex items-center justify-center mx-auto bg-surface-0 dark:bg-surface-800 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.12),0px_0px_2px_0px_rgba(0,0,0,0.06),0px_4px_10px_0px_rgba(0,0,0,0.03)]">
                    <v-icon name="gi-love-injection" animation="pulse" />
                </span>
                <div class="text-surface-900 dark:text-surface-0 text-xl mb-2 font-medium">Servicio de veterinarios
                </div>
                <p class="text-surface-700 dark:text-surface-0/70 leading-normal max-w-sm mx-auto text-center">El lugar
                    ideal para encontrar a los mejores veterinarios para tu mascota </p>
            </div>
        </div>
    </div>
</template>

<style>
#aboutUs {
    background-color: #001f3f;
}

.icono-perro {
    width: 50px;
    height: 50px;
    color: white;
}
</style>