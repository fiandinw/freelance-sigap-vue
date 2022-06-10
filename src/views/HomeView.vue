<script setup>
  import FeatureButtonGroup from "../components/FeatureButtonGroup.vue";
  import EmailSubscription from "../components/EmailSubscription.vue";
  import CategoryCardGroup from "../components/CategoryCardGroup.vue";
  import ProjectCard from "../components/ProjectCard.vue";
  import PortfolioCard from "../components/PortfolioCard.vue";
</script>

<template>
  <main class="relative flex flex-col items-center px-12">
    <section class="container py-16">
      <FeatureButtonGroup />
    </section>

    <section class="container py-16">
      <div class="flex flex-row items-center justify-between">
        <div>
          <div class="font-lato text-4xl text-sigap-gray">
            Pekerjaan Freelance Terbaru!
          </div>
          <div class="font-lato font-bold text-6xl">
            Project Baru <span class="text-sigap-primary">Diposting</span>
          </div>
        </div>
        <div>{Carousel Control}</div>
      </div>
      <div class="cards mt-16 flex flex-row items-center justify-between">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>

    <section class="container py-16">
      <div class="font-lato font-bold text-5xl w-full text-center mb-14">
        Lihat <span class="text-sigap-primary">Kategori</span> Lainnya
      </div>
      <CategoryCardGroup />
    </section>

    <section class="container py-16">
      <div class="font-lato text-4xl text-center text-sigap-gray">
        Logo, Situs, Sampul Buku & Lainnya!
      </div>
      <div class="font-lato font-bold text-6xl text-center">
        Lihat <span class="text-sigap-primary">Portfolio</span> Terbaik Disini!
      </div>
      <div class="mt-20 flex flex-row items-center justify-between">
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
      </div>
    </section>

    <section class="w-screen">
      <EmailSubscription />
    </section>
  </main>
</template>
