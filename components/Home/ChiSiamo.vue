<template>
  <section class="bg-background py-16 md:py-24 text-textDark">
    <div class="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10 px-4">
      
      <!-- Sezione Testo -->
      <div class="md:w-1/2 text-center md:text-left">
        <img class="w-28 mx-auto md:mx-0 mb-4" src="" alt="Logo Edilpav" />
        
        <h2 class="text-4xl md:text-5xl font-extrabold text-primary mb-4">
          Chi Siamo
        </h2>
        
        <p class="text-lg md:text-xl text-paragraphText leading-relaxed">
          Siamo due fratelli piastrellisti di <strong>Lucca</strong> con oltre <strong>25 anni di esperienza</strong> nel settore edilizio. 
          Specializzati nella <strong>posa di pavimenti e rivestimenti</strong> in gres, ceramica, marmo, mosaico e parquet, offriamo soluzioni su misura 
          per ogni esigenza. Edilpav è sinonimo di <strong>qualità artigianale</strong> e professionalità, con un occhio di riguardo per i dettagli 
          e le finiture che fanno la differenza.
        </p>


      </div>

      <!-- Sezione Immagine -->
      <div class="md:w-1/2 flex justify-center items-center">
        <img 
          src="/assets/core-images/pavement_1.jpg" 
          alt="Lavorazione Edilpav"
          class="rounded-xl shadow-lg w-full max-w-md hover:opacity-90 transition duration-300"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {}

const props = withDefaults(defineProps<Props>(), {});
</script>

<style scoped>
/* Responsive Image Handling */
img {
  max-width: 100%;
  height: auto;
}
</style>
