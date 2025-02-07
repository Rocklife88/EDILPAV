<template>
     <client-only>
       <div class="pt-2 w-full pb-6">
         <iframe
           class="map-frame"
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.6525283944143!2d10.507068476767659!3d43.8423021710937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d583f4f0e91c67%3A0xad52103747449261!2sCircolo%20A.I.C.S.%20Lucca!5e0!3m2!1sit!2sit!4v1709637407147!5m2!1sit!2sit"
           allowfullscreen
           loading="lazy"
           referrerpolicy="no-referrer-when-downgrade"
         ></iframe>
       </div>
     </client-only>
   </template>
   
   <style scoped>
   .map-frame {
     width: 100%;
     height: 450px;
     border: none;
   }
   </style>
   