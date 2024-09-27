
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/tailwind.css';
import 'flowbite';
import App from './App.vue'
import router from './router'
import Primevue from 'primevue/config';
import Aura from '@primevue/themes/aura';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Primevue, {
    theme: {
        preset: Aura,
    },
})

app.mount('#app')
