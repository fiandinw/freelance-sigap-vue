<script setup>
  import LogoComponent from "../LogoComponent.vue";
  import iconBell from "../../assets/icons/bell.png";
  import { RouterLink } from "vue-router";
</script>
<template>
  <div class="px-12 py-8 flex items-center justify-center w-full bg-white">
    <div class="container flex flex-row items-center justify-between">
      <RouterLink :to="{ name: 'home' }">
        <LogoComponent />
      </RouterLink>
      <div>search</div>
      <div class="flex flex-row gap-8">
        <RouterLink :to="{ name: 'index' }"
          ><button class="font-bold">Home</button></RouterLink
        >
        <RouterLink :to="{ name: 'pricelist' }"
          ><button>Price List</button></RouterLink
        >
        <RouterLink :to="{ name: 'mylist' }"
          ><button>My List</button></RouterLink
        >
        <RouterLink :to="{ name: 'myorder' }"
          ><button>My Order</button></RouterLink
        >
        <RouterLink :to="{ name: 'myclaimdiscount' }"
          ><button>My Claim</button></RouterLink
        >
      </div>
      <div class="flex flex-row items-center gap-8">
        <img
          class="cursor-pointer"
          :src="iconBell"
          alt="bell"
          width="28"
          height="33"
        />
        <img
          class="w-[55px] h-[55px] rounded-[100%] object-cover cursor-pointer"
          src="https://picsum.photos/55/55"
          alt="profile photo"
          width="55"
          height="55"
        />
      </div>
    </div>
  </div>
  <div
    class="border-y-[1px] bg-white border-sigap-gray py-2 text-lg flex flex-row items-center justify-evenly"
  >
    <button>Graphic&Design</button>
    <button>Videography</button>
    <button>Animation</button>
    <button>Programming</button>
    <button>Digital Marketing</button>
    <button>Writing&Translation</button>
    <button>Music&Audio</button>
    <button>Photography</button>
  </div>
</template>
