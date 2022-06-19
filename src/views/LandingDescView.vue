<script setup>
  import LandingDescriptionCard from "../components/LandingDescriptionCard.vue";
  import iconourcompany from "../assets/icons/ourcompany.png";
</script>
<template>
  <main class="relative flex flex-col items-center px-12">
    <div class="text-center mt-12 font-lato font-bold text-5xl">
      Freelance <span class="text-sigap-primary">Sigap</span>
    </div>
    <section class="container flex flex-row items-start justify-center gap-8 py-16">
      <LandingDescriptionCard
        :icon="iconourcompany"
        title="Our Company"
        description="Freelance Sigap merupakan penyedia jasa di bidang multimedia dan produk kreatif. Kami berkomitmen menyediakan pelayanan yang efektif dalam transaksi jasa. Upaya kami tetap memberikan performa terbaik untuk para pembeli, sehingga kenyamanan pembeli lebih diprioritaskan. Selain daripada itu, kami pun berupaya membuat klasifikasi pasar untuk para pembuat jasa dengan tujuan memberikan umpan balik yang sesuai."
      />
      <LandingDescriptionCard
        :icon="iconourcompany"
        title="What We Goals"
        description="Freelance Sigap merupakan penyedia jasa di bidang multimedia dan produk kreatif. Kami berkomitmen menyediakan pelayanan yang efektif dalam transaksi jasa. Upaya kami tetap memberikan performa terbaik untuk para pembeli, sehingga kenyamanan pembeli lebih diprioritaskan. Selain daripada itu, kami pun berupaya membuat klasifikasi pasar untuk para pembuat jasa dengan tujuan memberikan umpan balik yang sesuai."
      />
      <LandingDescriptionCard
        :icon="iconourcompany"
        title="What We Value"
        description="Freelance Sigap merupakan penyedia jasa di bidang multimedia dan produk kreatif. Kami berkomitmen menyediakan pelayanan yang efektif dalam transaksi jasa. Upaya kami tetap memberikan performa terbaik untuk para pembeli, sehingga kenyamanan pembeli lebih diprioritaskan. Selain daripada itu, kami pun berupaya membuat klasifikasi pasar untuk para pembuat jasa dengan tujuan memberikan umpan balik yang sesuai."
      />
    </section>
  </main>
</template>
