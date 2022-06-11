<script setup>
  import LandingDescriptionCard from "../components/LandingDescriptionCard.vue";
</script>
<template>
  <main class="relative flex flex-col items-center px-12">
    <div class="text-center mt-12 font-lato font-bold text-5xl">
      Freelance <span class="text-sigap-primary">Sigap</span>
    </div>
    <section class="container flex flex-row items-start justify-center py-16">
      <LandingDescriptionCard
        title="Our Company"
        description="Freelance Sigap merupakan penyedia jasa di bidang multimedia dan produk kreatif. Kami berkomitmen menyediakan pelayanan yang efektif dalam transaksi jasa. Upaya kami tetap memberikan performa terbaik untuk para pembeli, sehingga kenyamanan pembeli lebih diprioritaskan. Selain daripada itu, kami pun berupaya membuat klasifikasi pasar untuk para pembuat jasa dengan tujuan memberikan umpan balik yang sesuai."
      />
    </section>
  </main>
</template>
