<template>
  <header class="bg-white text-black shadow-md fixed top-0 left-0 w-full z-50" ref="outsideRef">
    <div class="container mx-auto flex items-center justify-between p-4 h-16">
      <!-- Logo -->
      <NuxtLink to="/">
        <img src="/assets/images/Logo_Mini.png" alt="Logo Edilpav" class="w-28" />
      </NuxtLink>

      <!-- Bottone Menu Mobile -->
      <button @click="toggleMobileMenu" class="lg:hidden text-accent focus:outline-none">
        <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <!-- Menu Desktop -->
      <nav class="hidden lg:flex space-x-8">
        <NuxtLink to="/" class="text-black text-lg font-medium hover:text-accent transition duration-300">Home</NuxtLink>
        <NuxtLink to="/comitato" class="text-black text-lg font-medium hover:text-accent transition duration-300">Chi Siamo</NuxtLink>
        <NuxtLink to="/servizi" class="text-black text-lg font-medium hover:text-accent transition duration-300">I Nostri Servizi</NuxtLink>
        <NuxtLink to="/contatti" class="text-black text-lg font-medium hover:text-accent transition duration-300">Contatti</NuxtLink>
        <a href="https://www.aicsnetwork.net/" target="_blank" class="text-background text-lg font-medium hover:text-accent transition duration-300">Tesseramento AICS</a>
      </nav>
    </div>

    <!-- Menu Mobile -->
    <transition name="fade">
      <div v-if="isMobileMenuOpen" class="lg:hidden bg-secondary text-base absolute top-full left-0 w-full shadow-lg">
        <ul class="flex flex-col space-y-4 p-4 border-t border-highlight">
          <li><NuxtLink @click="onClickNavLink" to="/" class="block text-xl font-semibold hover:text-accent transition duration-300">Home</NuxtLink></li>
          <li><NuxtLink @click="onClickNavLink" to="/comitato" class="block text-xl font-semibold hover:text-accent transition duration-300">Chi Siamo</NuxtLink></li>
          <li><NuxtLink @click="onClickNavLink" to="/servizi" class="block text-xl font-semibold hover:text-accent transition duration-300">I Nostri Servizi</NuxtLink></li>
          <li><NuxtLink @click="onClickNavLink" to="/contatti" class="block text-xl font-semibold hover:text-accent transition duration-300">Contatti</NuxtLink></li>
          <li><a href="https://www.aicsnetwork.net/" target="_blank" class="block text-xl font-semibold hover:text-accent transition duration-300">Tesseramento AICS</a></li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

const isMobileMenuOpen = ref(false);
const outsideRef = ref(null);

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

function onClickNavLink() {
  isMobileMenuOpen.value = false;
}

onClickOutside(outsideRef, () => {
  isMobileMenuOpen.value = false;
});
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
