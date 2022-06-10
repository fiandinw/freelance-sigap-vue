<script setup>
  import landingBG from "../assets/landingBG.png";
  import landingHello from "../assets/landingHello.png";
  import iconFind from "../assets/icons/find.png";
  import iconGuard from "../assets/icons/guard.png";
  import iconLock from "../assets/icons/lock.png";
  import LandingStepCard from "../components/LandingStepCard.vue";
  import landingGirl from "../assets/landingGirl.png";
  import discountMedal from "../assets/icons/discountMedal.png";
  import wallet from "../assets/icons/wallet.png";
  import iconTime from "../assets/icons/time.png";
  import wave from "../assets/icons/wave.png";
  import iconCheck from "../assets/icons/check.png";
  import LandingFeatureCard from "../components/LandingFeatureCard.vue";
  import CategoryCard from "../components/CategoryCard.vue";
  import FaqAccordion from "../components/FaqAccordion.vue";
  import EmailSubscription from "../components/EmailSubscription.vue";
  import FeatureButtonGroup from "../components/FeatureButtonGroup.vue";
  import CategoryCardGroup from "../components/CategoryCardGroup.vue";
</script>

<template>
  <img
    class="w-full absolute top-0"
    :src="landingBG"
    alt="Landing Background"
  />

  <main class="relative flex flex-col items-center px-12">
    <section class="container flex flex-row py-16">
      <div class="w-5/12 flex flex-col gap-12">
        <div class="font-lato text-5xl font-bold">
          Apakah anda sedang mencari freelancers?
        </div>
        <div class="text-2xl text-opacity-60 text-black">
          Pekerjakan Freelancer hebat, cepat. <b>Freelance Sigap</b> membantu
          Anda menyewa freelancer profesional dengan cepat
        </div>
        <button
          class="text-2xl font-bold text-white bg-sigap-primary w-fit px-20 py-5 rounded-full"
        >
          Temukan Freelance
        </button>
      </div>

      <div class="flex items-center justify-center w-7/12">
        <img :src="landingHello" alt="Hello" width="311" height="357" />
      </div>
    </section>

    <section
      class="container bg-white py-6 rounded-lg flex flex-row items-start justify-evenly shadow-lg"
    >
      <LandingStepCard
        :icon="iconLock"
        title="Cari Freelancer"
        desc="Cari dan pilih freelancer berdasarkan portofolio, kemampuan dan ulasan."
      />
      <LandingStepCard
        :icon="iconFind"
        title="Berdiskusi"
        desc="Diskusikan detail pekerjaan yang anda inginkan"
      />
      <LandingStepCard
        :icon="iconGuard"
        title="Bayar"
        desc="Jaminan pembayaran freelance sigap aman 100%"
      />
    </section>

    <section class="container py-16 flex flex-row gap-16">
      <img :src="landingGirl" alt="Good" width="431" height="589" />
      <div class="grow flex flex-col gap-16">
        <div class="font-lato text-5xl font-bold text-right self-end">
          Carilah
          <span class="text-sigap-primary">Freelancer<br />Terbaik</span> disini
        </div>
        <div class="h-full max-w-2xl flex flex-row gap-8 flex-wrap">
          <LandingFeatureCard :icon="discountMedal" title="Money Guarantee" />
          <LandingFeatureCard :icon="wallet" title="Safe Transaction" />
          <LandingFeatureCard :icon="iconTime" title="Efficient" />
          <LandingFeatureCard :icon="wave" title="Flexible" />
          <LandingFeatureCard :icon="iconCheck" title="Good Service" />
        </div>
      </div>
    </section>

    <section class="w-screen h-screen relative bg-black px-16">
      <div
        class="absolute text-white font-lato text-6xl font-extrabold text-opacity-40 flex flex-col items-start justify-center h-full gap-12"
      >
        <div>Efficiency Value.</div>
        <div>Make it simple and practical.</div>
        <div>Positive Transactional.</div>
      </div>
    </section>

    <section class="container py-16">
      <div class="font-lato font-bold text-5xl w-full text-center mb-14">
        Layanan Kami
      </div>
      <FeatureButtonGroup />
    </section>

    <section class="container py-16">
      <div class="font-lato font-bold text-5xl w-full text-center mb-14">
        Kategori
      </div>
      <CategoryCardGroup />
    </section>

    <section class="container py-16">
      <div class="font-lato font-bold text-5xl w-full text-center">FAQ</div>
      <div class="flex flex-col mt-14 gap-8">
        <FaqAccordion title="" content="" />
        <FaqAccordion title="" content="" />
        <FaqAccordion title="" content="" />
      </div>
    </section>

    <section class="w-screen">
      <EmailSubscription />
    </section>
  </main>
</template>
