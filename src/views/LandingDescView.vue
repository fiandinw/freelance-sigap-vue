<script setup>
  import LandingDescriptionCard from "../components/LandingDescriptionCard.vue";
  import iconourcompany from "../assets/icons/ourcompany.png";
  import LogoComponent from "../components/LogoComponent.vue";
</script>
<template>
  <main class="relative flex flex-col items-center px-12">
    <div class="text-center mt-12 font-lato font-bold text-5xl">
      <!-- Freelance <span class="text-sigap-primary">Sigap</span> -->
      <LogoComponent class="scale-150" />
    </div>
    <section
      class="container flex flex-row items-start justify-center gap-8 py-16"
    >
      <LandingDescriptionCard
        :icon="iconourcompany"
        title="Our Company"
        description="aglees merupakan penyedia jasa di bidang multimedia dan produk kreatif. Kami berkomitmen menyediakan pelayanan yang efektif dalam transaksi jasa. Upaya kami tetap memberikan performa terbaik untuk para pembeli, sehingga kenyamanan pembeli lebih diprioritaskan. Selain daripada itu, kami pun berupaya membuat klasifikasi pasar untuk para pembuat jasa dengan tujuan memberikan umpan balik yang sesuai."
      />
      <LandingDescriptionCard
        :icon="iconourcompany"
        title="What We Goals"
        description="Sebagai penyedia jasa, aglees memiliki tujuan yang mutakhir yaitu membuka lapangan pekerjaan dengan dibersamai nilai profesionalisme dalam dunia kerja serta merubah mekanisme persepsi jasa mengenai harga teman untuk lebih mengukur pada kemampuan para freelancer dan membayarnya sepadan dengan kemampuannya."
      />
      <LandingDescriptionCard
        :icon="iconourcompany"
        title="What We Value"
        description="Sebagai penyedia jasa, aglees berkomitmen melahirkan harmonisasi transaksi antara freelancer dengan customer. Dilain sisi, aglees memegang penuh pada nilai efisiensi kerja dan menciptakan budaya disiplin pada freelancer."
      />
    </section>
  </main>
</template>
