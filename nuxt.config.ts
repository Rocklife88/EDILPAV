// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@nuxtjs/google-fonts", // Modulo per Google Fonts
  ],
  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600, 700], // Pesi del font da utilizzare
    },
    display: 'swap', // Ottimizzazione del caricamento
  },
  compatibilityDate: "2025-02-07",
});
