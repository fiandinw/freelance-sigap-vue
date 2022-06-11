<script setup>
  import FloatingDescriptionCard from "../components/FloatingDescriptionCard.vue";
  import iconCheckSolid from "../assets/icons/checkSolid.png";
  import FloatingPaymentCard from "../components/FloatingPaymentCard.vue";
  import FloatingOrderDetailCard from "../components/FloatingOrderDetailCard.vue";
</script>
<template>
  <main class="relative flex flex-col items-center px-12">
    <section class="container flex flex-row gap-8 py-6">
      <div class="flex flex-row items-center gap-2">
        <div
          class="bg-sigap-primary p-1 w-[30px] h-[30px] flex items-center justify-center rounded-[100%] text-white"
        >
          1
        </div>
        <div>Order Detail</div>
      </div>
      <div class="flex flex-row items-center gap-2">
        <div
          class="bg-sigap-primary p-1 w-[30px] h-[30px] flex items-center justify-center rounded-[100%] text-white"
        >
          2
        </div>
        <div class="underline">Pembayaran</div>
      </div>
    </section>

    <article class="container py-16 flex flex-row gap-8">
      <div class="w-7/12">
        <section class="">
          <div class="p-4 shadow-lg">
            <div class="font-semibold text-lg border-b-2 py-2 mb-4">
              Metode Pembayaran
            </div>
            <div class="flex flex-col gap-4">
              <div>
                <input type="radio" name="metode" id="cc" />&nbsp;<label
                  for="cc"
                  >Credit Card</label
                >
              </div>
              <div>
                <input type="radio" name="metode" id="cc" />&nbsp;<label
                  for="cc"
                  >E-Wallet</label
                >
              </div>
              <div>
                <input type="radio" name="metode" id="cc" />&nbsp;<label
                  for="cc"
                  >Transfer Bank</label
                >
              </div>
              <div>
                <input type="radio" name="metode" id="cc" />&nbsp;<label
                  for="cc"
                  >COD</label
                >
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="w-5/12 relative flex justify-center">
        <FloatingOrderDetailCard />
      </div>
    </article>
  </main>
</template>
