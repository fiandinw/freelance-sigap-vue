<script setup>
  import { RouterLink } from "vue-router";
  defineProps({
    paymentMethod: { default: "" },
    isBayar: { default: false },
    goto: { default: "" },
    buttonText: { default: "Bayar" },
  });
</script>
<template>
  <div class="floatingCard w-[450px] h-fit bg-white sticky shadow-lg">
    <div class="px-8 py-8">
      <div class="font-semibold text-2xl text-black">Rincian Pembayaran</div>
      <div class="text-lg mt-4 flex flex-row items-center justify-between">
        <div>Subtotal</div>
        <div>Rp. 0K</div>
      </div>
      <div class="text-lg mt-2 flex flex-row items-center justify-between">
        <div>Biaya Penanganan</div>
        <div>Rp. 0K</div>
      </div>
      <input
        class="mt-4 border-2 border-sigap-gray w-full rounded-lg p-2"
        type="text"
        placeholder="Masukan Voucher"
      />
      <div class="text-lg mt-2 flex flex-row items-center justify-between">
        <div>Total Diskon</div>
        <div>-Rp. 0K</div>
      </div>
      <div class="divider border-t-[1px] border-sigap-gray my-6"></div>
      <div class="mt-4 flex flex-row items-center justify-between">
        <div class="font-semibold text-2xl">Total</div>
        <div class="font-semibold text-2xl text-black line-through">Rp. 0K</div>
      </div>
      <div class="mt-4 flex flex-row items-center justify-between">
        <div class="font-semibold text-2xl"></div>
        <div class="font-semibold text-2xl text-black">Rp. 0K</div>
      </div>
      <div class="mt-12 flex flex-row items-center justify-between">
        <div class="font-semibold text-2xl">Waktu Pengerjaan</div>
        <div class="font-semibold text-2xl text-sigap-primary">0 Hari</div>
      </div>
      <div class="divider border-t-[1px] border-sigap-gray my-6"></div>
      <slot>
        <RouterLink v-if="isBayar" :to="{ name: 'payment' }">
          <button
            class="mb-4 bg-sigap-primary w-full py-4 font-bold text-2xl text-white rounded-full"
          >
            {{ $props.buttonText }}
          </button>
        </RouterLink>
      </slot>
      <RouterLink v-if="$route.name == 'payment'" :to="goto">
        <button
          class="mb-4 bg-sigap-primary w-full py-4 font-bold text-2xl text-white rounded-full"
        >
          Cek Status Order
        </button>
      </RouterLink>
    </div>
  </div>
</template>
