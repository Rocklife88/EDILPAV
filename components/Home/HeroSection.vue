<template>
  <div class="relative h-screen bg-gray-100 -z-10">
    <!-- Hero Background -->
    <div class="absolute inset-0">
      <img 
        src="/assets/core-images/hero_1.jpg" 
        alt="Pavimenti e rivestimenti Edilpav" 
        class="w-full h-full object-cover" 
      />
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>

    <!-- Hero Content -->
    <div class="relative z-10 flex items-center justify-center h-full">
      <div class="container mx-auto px-6 text-center md:text-left">
        <div class="flex flex-col md:flex-row items-center gap-8">
          
          <!-- Left Content -->
          <div class="md:w-full">
            <img src="" alt="Edilpav Logo" class="w-40 mb-4 mx-auto md:mx-0" />
            
            <h1 class="text-4xl md:text-6xl font-bold text-white leading-tight">
              EDILPAV<br>
        rendiamo i tuoi pavimenti un capolavoro
            </h1>
            
            <h2 class="mt-4 text-xl text-gray-200">
              Piastrellisti Specializzati,
              Da oltre 25 anni realizziamo soluzioni su misura per ogni esigenza.<br> 
              Affidati alla nostra esperienza per trasformare i tuoi spazi.
            </h2>
            
            <button 
              class="mt-6 px-6 py-3 bg-primary text-white font-semibold rounded shadow-lg hover:bg-primaryDarker transition duration-300"
            >
             Scopri i nostri servizi
            </button>
          </div>

          <!-- Right Image -->
          <!-- <div class="md:w-1/2 hidden md:block">
            <img 
              src="/assets/images/piastrelle.jpg" 
              alt="Posa piastrelle Edilpav" 
              class="w-full rounded-lg shadow-lg"
            />
          </div> -->

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {}

const props = withDefaults(defineProps<Props>(), {});
</script>
