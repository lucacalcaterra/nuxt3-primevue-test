export default defineNuxtConfig({
  css: [
    "primevue/resources/themes/lara-dark-blue/theme.css",
    "primevue/resources/primevue.css",
    "primeicons/primeicons.css",
    "primeflex/primeflex.css",
  ],
  build: {
    transpile: ["primevue"],
  },
  ssr: false,
  modules: ["@nuxtjs/supabase"],
  sourcemap: {
    server: true,
    client: true,
  },
});
