import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";

import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/lara-dark-blue/theme.css'
import 'primeicons/primeicons.css' 
import '/node_modules/primeflex/primeflex.css'

import Button from "primevue/button";
import Panel from "primevue/panel";
import TabMenu from "primevue/tabmenu";
import Card from "primevue/card";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true });
    nuxtApp.vueApp.component("Button", Button);
    nuxtApp.vueApp.component("Card", Card);
    nuxtApp.vueApp.component("Panel", Panel);
    nuxtApp.vueApp.component("TabMenu", TabMenu);
    //other components that you need
});