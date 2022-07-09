<script setup>
  import FeatureButtonGroup from "../components/FeatureButtonGroup.vue";
  import EmailSubscription from "../components/EmailSubscription.vue";
  import CategoryCardGroup from "../components/CategoryCardGroup.vue";
  import ProjectCard from "../components/ProjectCard.vue";
  import PortfolioCard from "../components/PortfolioCard.vue";
  import { Splide, SplideSlide } from "@splidejs/vue-splide";
  import { getAuth, onAuthStateChanged } from "@firebase/auth";

  // const auth = getAuth();
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     // User is signed in, see docs for a list of available properties
  //     // https://firebase.google.com/docs/reference/js/firebase.User
  //     const uid = user.uid;

  //     console.log("dari home ", user, uid);
  //     // ...
  //   } else {
  //     // User is signed out
  //     // ...
  //     console.log("dari app ELSE STATE");
  //   }
  // });
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
        <div class="flex flex-row gap-8">
          <div
            class="w-16 h-16 flex items-center justify-center rounded-[100%] bg-white hover:bg-sigap-primary text-sigap-primary hover:text-white shadow-lg"
          >
            <i class="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
          </div>
          <div
            class="w-16 h-16 flex items-center justify-center rounded-[100%] bg-white hover:bg-sigap-primary text-sigap-primary hover:text-white shadow-lg"
          >
            <i class="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div class="cards mt-16">
        <Splide>
          <SplideSlide class="flex flex-row items-center justify-between p-8">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </SplideSlide>
          <SplideSlide class="flex flex-row items-center justify-between p-8">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </SplideSlide>
          <SplideSlide class="flex flex-row items-center justify-between p-8">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </SplideSlide>
        </Splide>
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
      <div class="mt-20">
        <Splide>
          <SplideSlide class="flex flex-row items-center justify-between p-8">
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
          </SplideSlide>
          <SplideSlide class="flex flex-row items-center justify-between p-8">
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
          </SplideSlide>
          <SplideSlide class="flex flex-row items-center justify-between p-8">
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
          </SplideSlide>
        </Splide>
      </div>
    </section>

    <section class="w-screen">
      <EmailSubscription />
    </section>
  </main>
</template>
