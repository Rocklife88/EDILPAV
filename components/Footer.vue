<template>
  <footer class="bg-white text-textdark py-2">
    <div class="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-4">
      
      <!-- Logo -->
      <div>
        <NuxtLink to="/" rel="noopener noreferrer">
          <img class="w-20 md:w-24 h-auto" src="/assets/images/Logo_Mini.png" alt="Logo Edilpav" />
        </NuxtLink>
      </div>

      <!-- Navigazione -->
      <nav class="flex flex-col md:flex-row md:space-x-8 text-sm text-dark text-center md:text-left">
        <NuxtLink to="/" class="hover:text-woodTone transition duration-300">Home</NuxtLink>
        <NuxtLink to="/comitato" class="hover:text-woodTone transition duration-300">Chi Siamo</NuxtLink>
        <NuxtLink to="/servizi" class="hover:text-woodTone transition duration-300">Servizi</NuxtLink>
        <NuxtLink to="/contatti" class="hover:text-woodTone transition duration-300">Contatti</NuxtLink>
        <a href="https://www.aics.it/la-nostra-storia/" target="_blank" class="hover:text-woodTone transition duration-300">AICS Italia</a>
      </nav>

      <!-- Social Media -->
      <div class="flex space-x-6">
        <a href="https://www.facebook.com/aicscomitatoprovinciale.lucca/?locale=it_IT" target="_blank" class="hover:text-woodTone transition duration-300">
          <i class="pi pi-facebook text-2xl"></i>
        </a>
        <a href="https://www.instagram.com/aicslucca/?hl=da" target="_blank" class="hover:text-woodTone transition duration-300">
          <i class="pi pi-instagram text-2xl"></i>
        </a>
      </div>
    </div>

    <!-- Divider -->
    <div class="border-t border-accent mt-6"></div>

    <!-- Copyright -->
    <div class="text-center text-xs text-accent mt-1">
      © {{ currentYear }} Edilpav - Tutti i diritti riservati.
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());
</script>
