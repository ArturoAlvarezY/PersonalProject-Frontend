import { createApp } from "vue";
import { createPinia } from "pinia";
import "./assets/tailwind.css";
import "flowbite";
import App from "./App.vue";
import router from "./router";
import Primevue from "primevue/config";
import Aura from "@primevue/themes/aura";
import { BootstrapIconsPlugin } from "bootstrap-icons-vue";

import {
  BIconBatteryFull,
  BIconArrow90degDown,
  BIconBookmark,
} from "bootstrap-icons-vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Primevue, {
  theme: {
    preset: Aura,
  },
});
app.use(BootstrapIconsPlugin);
app.component("BIconBatteryFull", BIconBatteryFull);
app.component("BIconArrow90degDown", BIconArrow90degDown);
app.component("BIconBookmark", BIconBookmark);

app.mount("#app");
