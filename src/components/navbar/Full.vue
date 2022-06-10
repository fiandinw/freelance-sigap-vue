<script setup>
  import LogoComponent from "../LogoComponent.vue";
  import iconBell from "../../assets/icons/bell.png";
</script>
<template>
  <div class="px-12 py-8 flex items-center justify-center w-full bg-white">
    <div class="container flex flex-row items-center justify-between">
      <LogoComponent />
      <div>search</div>
      <div class="flex flex-row gap-8">
        <button class="font-bold">Home</button>
        <button>Price List</button>
        <button>My List</button>
        <button>My Order</button>
        <button>My Claim</button>
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
