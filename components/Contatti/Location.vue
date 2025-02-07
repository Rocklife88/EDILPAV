<template>
  <div class="pb-6 w-full md:flex justify-between items-start gap-10 px-4">
    <!-- Dove Siamo -->
    <div class="flex flex-col">
      <h2 class="text-2xl text-primary font-semibold pt-6 pb-2">📍 Dove Siamo</h2>
      <div class="text-paragraphText text-left leading-relaxed">
        <p>Via Martiri Lunatesi 29/D</p>
        <p>55012 Capannori (LU)</p>
        <p>Partita IVA: 02013580465</p>
        <p class="mt-2">
          <strong>Telefono:</strong> <a href="tel:+390583000000" class="text-primary hover:underline">+39 0583 000000</a><br />
          <strong>Email:</strong> <a href="mailto:info@edilpav.it" class="text-primary hover:underline">info@edilpav.it</a>
        </p>
      </div>
    </div>

    <!-- I Nostri Orari -->
    <div class="flex flex-col mt-8 md:mt-0">
      <h2 class="text-2xl text-primary font-semibold pb-2">🕒 I Nostri Orari</h2>
      <div class="text-paragraphText text-left leading-relaxed">
        <p><strong>Lunedì - Venerdì:</strong> 8:00 - 18:00</p>
        <p><strong>Sabato:</strong> Su appuntamento</p>
        <p><strong>Domenica:</strong> Chiuso</p>
      </div>
      <div class="mt-4">
        <a
          href="https://goo.gl/maps/xyz123" 
          target="_blank" 
          class="inline-block bg-primary text-white px-4 py-2 rounded-md shadow-md hover:bg-woodTone transition duration-300"
        >
          📍 Visualizza su Google Maps
        </a>
      </div>
    </div>
  </div>
</template>
