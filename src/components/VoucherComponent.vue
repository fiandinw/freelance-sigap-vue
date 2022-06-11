<script setup>
  import cashbackGreen from "../assets/cashbackGreen.png";
  import badgeExpertLarge from "../assets/icons/badgeExpertLarge.png";
</script>
<template>
  <div
    :class="
      $route.hash == '#cashback'
        ? 'w-[850px] h-[250px] flex flex-row border-2 border-[#ffa70b] border-l-0 rounded-r-lg'
        : 'w-[850px] h-[250px] flex flex-row border-2 border-sigap-primary border-l-0 rounded-r-lg'
    "
  >
    <div class="relative w-fit">
      <img
        v-if="$route.hash == ''"
        class="h-[248px]"
        :src="cashbackGreen"
        alt=""
      />
      <div
        v-if="$route.hash == '#cashback'"
        style="
          filter: invert(65%) sepia(44%) saturate(1638%) hue-rotate(353deg)
            brightness(105%) contrast(101%);
        "
      >
        <img
          class="h-[248px]"
          style="filter: brightness(0) saturate(100%)"
          :src="cashbackGreen"
          alt=""
        />
      </div>
      <div
        v-if="$route.hash == ''"
        class="absolute top-0 left-0 w-full h-full flex items-center justify-center font-lato font-bold text-6xl text-white"
      >
        Diskon<br />0 %
      </div>
      <div
        v-if="$route.hash == '#cashback'"
        class="absolute top-0 left-0 w-full h-full flex items-center justify-center font-lato font-bold text-5xl text-white"
      >
        Cashback<br />0 %
      </div>
    </div>
    <div class="px-8 py-4 w-[600px]">
      <img class="w-36" :src="badgeExpertLarge" alt="" />
      <div v-if="$route.hash == ''" class="font-lato font-bold text-6xl">
        Voucher <span class="text-sigap-primary">Diskon</span>
      </div>
      <div
        v-if="$route.hash == '#cashback'"
        class="font-lato font-bold text-6xl"
      >
        Voucher <span class="text-[#ffa70b]">Cashback</span>
      </div>
      <div class="mt-8 flex flex-row items-center justify-between">
        <div>
          Min. Trk Rp. 100k<br />Maks. Ptg Rp. 10k
          <div class="text-sigap-gray">Hingga</div>
        </div>

        <div>
          <button class="bg-black text-white px-12 py-2 text-lg rounded-lg">
            Pakai
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
