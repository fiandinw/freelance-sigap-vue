<script setup>
  import teamAlif from "../assets/teamAlif.png";
  import teamAziz from "../assets/teamAziz.png";
  import teamAlifiandi from "../assets/teamAlifiandi.png";
</script>
<template>
  <main class="relative flex flex-col items-center px-12">
    <div class="text-center mt-12 font-lato font-bold text-4xl">
      About <span class="text-sigap-primary">Us</span>
    </div>

    <section
      class="container flex flex-row py-16 text-lg font-semibold text-center px-24"
    >
      Sebuah startup yang ingin melahirkan performa untuk kenyamanan pembeli dan
      kesesuaian pasar pada pembuat jasa. Disamping itu, banyaknya problematika
      sosial menjadi key indicator operasional kami.
    </section>

    <section class="container px-16">
      <div class="text-center font-lato font-bold text-4xl">
        Our <span class="text-sigap-primary">Team</span>
      </div>
      <div class="mt-12 flex flex-row items-center justify-evenly">
        <div class="w-fit">
          <img :src="teamAlif" alt="alif" width="250" height="260" />
          <div class="mt-4 text-2xl">Alif Nur Muhammad</div>
          <div class="w-4/12 border-t-4 border-sigap-primary"></div>
        </div>
        <div class="w-fit">
          <img :src="teamAziz" alt="alif" width="250" height="260" />
          <div class="mt-4 text-2xl">Muhammad Aziz</div>
          <div class="w-4/12 border-t-4 border-sigap-primary"></div>
        </div>
        <div class="w-fit">
          <img :src="teamAlifiandi" alt="alif" width="250" height="260" />
          <div class="mt-4 text-2xl">Alifiandi Nursanni</div>
          <div class="w-4/12 border-t-4 border-sigap-primary"></div>
        </div>
      </div>
    </section>
  </main>
</template>
