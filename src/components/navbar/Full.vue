<script setup>
  import LogoComponent from "../LogoComponent.vue";
  import iconBell from "../../assets/icons/bell.png";
  import { RouterLink } from "vue-router";
  import { Icon } from "@iconify/vue";
</script>
<template>
  <div class="px-12 py-8 flex items-center justify-center w-full bg-white">
    <div class="container flex flex-row items-center justify-between">
      <RouterLink :to="{ name: 'index' }">
        <LogoComponent />
      </RouterLink>
      <div class="flex flex-row items-center relative">
        <input
          class="border-2 grow border-sigap-primary rounded-l-full border-r-0 px-8"
          type="text"
          placeholder="Find Services"
        />
        <button
          class="bg-sigap-primary px-6 py-1 text-white rounded-full font-bold absolute -right-16"
        >
          Search
        </button>
      </div>
      <div class="flex flex-row gap-8">
        <RouterLink :to="{ name: 'home' }"
          ><button class="font-bold">Beranda</button></RouterLink
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
        <!-- <img
          class="cursor-pointer"
          :src="iconBell"
          alt="bell"
          width="28"
          height="33"
        /> -->
        <Icon
          class="text-sigap-primary text-4xl"
          icon="ic:baseline-notifications"
        />
        <RouterLink :to="{ name: 'myprofile' }">
          <img
            class="w-[55px] h-[55px] rounded-[100%] object-cover cursor-pointer"
            src="https://picsum.photos/55/55"
            alt="profile photo"
            width="55"
            height="55"
          />
        </RouterLink>
      </div>
    </div>
  </div>
  <div
    class="border-y-[1px] bg-white border-sigap-gray py-2 text-lg flex flex-row items-center justify-evenly"
  >
    <RouterLink
      class="hover:bg-sigap-primary hover:text-white px-4 rounded-full"
      :to="{ name: 'categorylist' }"
      ><button>Graphic & Design</button></RouterLink
    >
    <RouterLink
      class="hover:bg-sigap-primary hover:text-white px-4 rounded-full"
      :to="{ name: 'categorylist' }"
      ><button>Videography</button></RouterLink
    >
    <RouterLink
      class="hover:bg-sigap-primary hover:text-white px-4 rounded-full"
      :to="{ name: 'categorylist' }"
      ><button>Animation</button></RouterLink
    >
    <RouterLink
      class="hover:bg-sigap-primary hover:text-white px-4 rounded-full"
      :to="{ name: 'categorylist' }"
      ><button>Pendidikan</button></RouterLink
    >
    <RouterLink
      class="hover:bg-sigap-primary hover:text-white px-4 rounded-full"
      :to="{ name: 'categorylist' }"
      ><button>Digital Marketing</button></RouterLink
    >
    <RouterLink
      class="hover:bg-sigap-primary hover:text-white px-4 rounded-full"
      :to="{ name: 'categorylist' }"
      ><button>Writing & Translation</button></RouterLink
    >
    <RouterLink
      class="hover:bg-sigap-primary hover:text-white px-4 rounded-full"
      :to="{ name: 'categorylist' }"
      ><button>Music & Audio</button></RouterLink
    >
    <RouterLink
      class="hover:bg-sigap-primary hover:text-white px-4 rounded-full"
      :to="{ name: 'categorylist' }"
      ><button>Photography</button></RouterLink
    >
  </div>
</template>
