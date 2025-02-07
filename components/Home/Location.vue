<template>
  <div class="w-full container mx-auto p-4 md:flex gap-10 items-center py-4">
    <!-- Sezione Mappa (Sinistra) -->
    <div class="w-full md:w-1/2">
  
      <iframe
        class="w-full h-96 rounded-md shadow-md"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.6525283944143!2d10.507068476767659!3d43.8423021710937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d583f4f0e91c67%3A0xad52103747449261!2sCircolo%20A.I.C.S.%20Lucca!5e0!3m2!1sit!2sit!4v1709637407147!5m2!1sit!2sit"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    <!-- Sezione Informazioni (Destra) -->
    <div class="w-full md:w-1/2 flex  gap-8 mt-8 md:mt-0 items-start justify-center">
      <!-- Dove Siamo -->
      <div>
        <h2 class="text-2xl text-primary font-semibold pb-2">📍 Dove Siamo</h2>
        <div class="text-paragraphText text-left leading-relaxed">
          <p>Via Martiri Lunatesi 29/D</p>
          <p>55012 Capannori (LU)</p>
          <p>Partita IVA: 02013580465</p>
          <p class="mt-2">
            <strong>Telefono:</strong>
            <a href="tel:+390583000000" class="text-primary hover:underline">+39 0583 000000</a><br />
            <strong>Email:</strong>
            <a href="mailto:info@edilpav.it" class="text-primary hover:underline">info@edilpav.it</a>
          </p>
        </div>
      </div>

      <!-- I Nostri Orari -->
      <div>
        <h2 class="text-2xl text-primary font-semibold pb-2">🕒 I Nostri Orari</h2>
        <div class="text-paragraphText text-left leading-relaxed">
          <p><strong>Lunedì - Venerdì:</strong> 8:00 - 18:00</p>
          <p><strong>Sabato:</strong> Su appuntamento</p>
          <p><strong>Domenica:</strong> Chiuso</p>
        </div>
   
      </div>
    </div>
  </div>
</template>

<style scoped>
iframe {
  border: none;
}
</style>
