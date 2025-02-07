/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#A67C52",       // Marrone caldo (legno chiaro)
        primaryLight: "#D8BFAA",  // Beige caldo per hover/sfondi
        background: "#F9F6F1",    // Avorio chiaro per lo sfondo principale
        accent: "#E0D6C3",        // Sabbia elegante per dettagli secondari
        textDark: "#3C3C3C",      // Grigio antracite per il testo principale
        textLight: "#FFFFFF",     // Bianco per testi su sfondi scuri
        woodTone: "#C9A27E",      // Tono caldo del legno chiaro per hover
        stoneGray: "#B0AFAF",     // Grigio pietra per sfondi neutri
      },
    },
  },
  plugins: [],
};
