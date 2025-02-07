<template>
  <section class="bg-background py-16 md:py-24 text-textDark">
    <div class="container mx-auto px-4">
      <!-- Titolo Sezione -->
      <h2 class="text-4xl md:text-5xl font-extrabold text-center text-primary mb-6">
        I Nostri Servizi
      </h2>
      <p class="text-center text-accent text-lg md:text-xl mb-12">
        Artigianalità e cura per ogni dettaglio dei tuoi spazi.
      </p>

      <!-- Griglia dei Servizi -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Servizio 1: Posa Pavimenti -->
        <div class="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-2 cursor-pointer bg-white">
          <img
          src="/assets//core-images/kitchen.jpg"
            alt="Posa Pavimenti"
            class="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div class="p-4">
            <h3 class="text-2xl font-bold text-primary group-hover:text-woodTone">Posa Pavimenti</h3>
            <p class="text-sm text-textDark mt-2 group-hover:text-primaryLight">
              Esperti nella posa di gres, ceramica, marmo e parquet.
            </p>
          </div>
        </div>

        <!-- Servizio 2: Rivestimenti -->
        <div class="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-2 cursor-pointer bg-white">
          <img
            src="/assets/core-images/kitchen_1.jpg"
            alt="Rivestimenti"
            class="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div class="p-4">
            <h3 class="text-2xl font-bold text-primary group-hover:text-woodTone">Rivestimenti</h3>
            <p class="text-sm text-textDark mt-2 group-hover:text-primaryLight">
              Rivestimenti moderni per interni ed esterni di qualità.
            </p>
          </div>
        </div>

        <!-- Servizio 3: Montaggio Scale -->
        <div class="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-2 cursor-pointer bg-white">
          <img
                src="/assets/core-images/oustide_pav.jpg"
            alt="Montaggio Scale"
            class="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div class="p-4">
            <h3 class="text-2xl font-bold text-primary group-hover:text-woodTone">Montaggio Scale</h3>
            <p class="text-sm text-textDark mt-2 group-hover:text-primaryLight">
              Scale eleganti e funzionali realizzate su misura.
            </p>
          </div>
        </div>

        <!-- Servizio 4: Ristrutturazione Bagni -->
        <div class="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-2 cursor-pointer bg-white">
          <img
            src="/assets/core-images/bathroom.jpg"
            alt="Ristrutturazione Bagni"
            class="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div class="p-4">
            <h3 class="text-2xl font-bold text-primary group-hover:text-woodTone">Ristrutturazione Bagni</h3>
            <p class="text-sm text-textDark mt-2 group-hover:text-primaryLight">
              Soluzioni moderne per rinnovare il tuo bagno.
            </p>
          </div>
        </div>
      </div>

      <!-- Call-to-Action -->
      <div class="text-center mt-12">
        <a
          href="/contatti"
          class="bg-primary text-textLight font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-woodTone hover:text-background transition duration-300"
        >
          Richiedi un Preventivo
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {}

const props = withDefaults(defineProps<Props>(), {});
</script>
