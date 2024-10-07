import { createApp } from "vue";
import { createPinia } from "pinia";
import "./assets/tailwind.css";
import "flowbite";
import App from "./App.vue";
import router from "./router";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons/fa";
import { FaFlag, RiZhihuFill, CoDog, GiSittingDog, GiJumpingDog, GiDogHouse, WiMoonWaningCrescent5, SiPetsathome, GiLoveInjection, BiCalendarDate  } from "oh-vue-icons/icons";

addIcons(FaFlag, RiZhihuFill, CoDog, GiSittingDog, GiJumpingDog, GiDogHouse, WiMoonWaningCrescent5, SiPetsathome, GiLoveInjection, BiCalendarDate  );

const Fa = Object.values(FaIcons);
addIcons(...Fa);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component("v-icon", OhVueIcon);
app.mount("#app");
