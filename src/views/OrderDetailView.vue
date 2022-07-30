<script setup>
  import iconCheckSolid from "../assets/icons/checkSolid.png";
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
        <div class="underline">Order Detail</div>
      </div>
      <div class="flex flex-row items-center gap-2">
        <div
          class="bg-sigap-primary p-1 w-[30px] h-[30px] flex items-center justify-center rounded-[100%] text-white"
        >
          2
        </div>
        <div>Pembayaran</div>
      </div>
      <div class="flex flex-row items-center gap-2">
        <div
          class="bg-sigap-primary p-1 w-[30px] h-[30px] flex items-center justify-center rounded-[100%] text-white"
        >
          3
        </div>
        <div class="underline">Invoice</div>
      </div>
    </section>

    <article class="container py-16 flex flex-row gap-8">
      <div class="w-7/12">
        <section class="flex flex-row gap-4">
          <img
            class="w-4/12 aspect-video object-cover rounded-2xl"
            src="https://picsum.photos/300/100"
            alt="portfolio"
            width="1280"
            height="720"
          />
          <div>
            <div class="font-semibold text-lg">{service title}</div>
            <div>bintang</div>
          </div>
        </section>

        <section class="py-16">
          <div class="font-lato text-4xl">PAKET {type}</div>
          <div class="text-lg mt-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius ipsa
            blanditiis explicabo voluptate, maiores quaerat quia, nam itaque
            similique magni iusto id! Eum adipisci maxime deserunt hic vero
            magni. Nam, distinctio earum officia at harum dolor amet, culpa
            ratione voluptatem, architecto commodi soluta expedita mollitia
            nostrum saepe neque. Unde, consequatur!
          </div>
          <div class="mt-4 border-2 border-sigap-gray p-4">
            <div class="flex flex-row items-center gap-2">
              <img :src="iconCheckSolid" alt="check" width="30" height="30" />
              <div class="text-sigap-gray text-lg">Konsep Desain</div>
            </div>
            <div class="flex flex-row items-center gap-2">
              <img :src="iconCheckSolid" alt="check" width="30" height="30" />
              <div class="text-sigap-gray text-lg">Vector File</div>
            </div>
            <div class="flex flex-row items-center gap-2">
              <img :src="iconCheckSolid" alt="check" width="30" height="30" />
              <div class="text-sigap-gray text-lg">Printable File</div>
            </div>
            <div class="flex flex-row items-center gap-2">
              <img :src="iconCheckSolid" alt="check" width="30" height="30" />
              <div class="text-sigap-gray text-lg">Mockup Logo</div>
            </div>
          </div>
        </section>

        <section class="">
          <div class="font-lato text-4xl text-sigap-primary">
            Tambahkan Extra Lainnya
          </div>
          <div class="flex flex-col gap-4 mt-8 px-8">
            <div
              class="font-semibold text-lg flex flex-row items-center justify-between"
            >
              <div>
                <input type="checkbox" name="1" id="1" /><label for="1"
                  >Tambahkan Revisi</label
                >
              </div>
              <div>Rp. 000.K</div>
            </div>
            <div
              class="font-semibold text-lg flex flex-row items-center justify-between"
            >
              <div>
                <input type="checkbox" name="1" id="1" /><label for="1"
                  >Source File</label
                >
              </div>
              <div>Rp. 000.K</div>
            </div>
            <div
              class="font-semibold text-lg flex flex-row items-center justify-between"
            >
              <div>
                <input type="checkbox" name="1" id="1" /><label for="1"
                  >Social Media Kit</label
                >
              </div>
              <div>Rp. 000.K</div>
            </div>
            <div
              class="font-semibold text-lg flex flex-row items-center justify-between"
            >
              <div>
                <input type="checkbox" name="1" id="1" /><label for="1"
                  >Brand Guide</label
                >
              </div>
              <div>Rp. 000.K</div>
            </div>
          </div>
        </section>
      </div>
      <div class="w-5/12 relative flex justify-center">
        <FloatingOrderDetailCard :isBayar="true" />
      </div>
    </article>
  </main>
</template>
