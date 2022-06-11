<script setup>
  import { RouterLink } from "vue-router";
</script>
<template>
  <div class="floatingCard w-[450px] h-fit bg-white sticky shadow-lg">
    <div class="grid grid-cols-3">
      <div
        class="flex items-center justify-center py-10 border-b-2 border-sigap-primary font-semibold text-2xl text-sigap-primary"
      >
        000 K
      </div>
      <div
        class="flex items-center justify-center py-10 border-b-2 border-sigap-primary font-semibold text-2xl text-sigap-primary"
      >
        000 K
      </div>
      <div
        class="flex items-center justify-center py-10 border-b-2 border-sigap-primary font-semibold text-2xl text-sigap-primary"
      >
        000 K
      </div>
    </div>
    <div class="px-8 py-8">
      <div class="font-semibold text-2xl text-sigap-primary">PAKET {TYPE}</div>
      <div class="text-lg mt-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quae neque
        dolores, odio eius alias, voluptatem tempore asperiores voluptas, error
        quaerat. Ratione porro minus quia dolores sed reprehenderit voluptate
        voluptatum?
      </div>
      <div class="mt-20 flex flex-row items-center justify-between">
        <div class="font-semibold text-2xl">Waktu Pengerjaan</div>
        <div class="font-semibold text-2xl text-sigap-primary">0 Hari</div>
      </div>
      <div class="divider border-t-[1px] border-sigap-gray my-6"></div>
      <RouterLink :to="{ name: 'orderdetail' }">
        <button
          class="mb-4 bg-sigap-primary w-full py-4 font-bold text-2xl text-white rounded-full"
        >
          Order Now
        </button>
      </RouterLink>
      <button
        class="mb-4 bg-sigap-primary w-full py-4 font-bold text-2xl text-white rounded-full"
      >
        Chat & Nego
      </button>
    </div>
  </div>
</template>
