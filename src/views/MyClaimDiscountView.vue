<script setup>
  import ServiceCard from "../components/ServiceCard.vue";
  import MyClaimTypeButton from "../components/MyClaimTypeButton.vue";
  import VoucherComponent from "../components/VoucherComponent.vue";
  import { RouterLink } from "vue-router";
  import iconmoneybag from "../assets/icons/moneybag.png";
  import iconpricetag from "../assets/icons/pricetag.png";
  import iconpoin from "../assets/icons/poinnew.png";
  import iconpoin1 from "../assets/icons/poin.png";
  import { Icon } from "@iconify/vue";
  import discountMedal from "../assets/icons/discountMedal.png";
</script>
<template>
  <main class="relative flex flex-col items-center px-12">
    <section
      class="container py-16 flex flex-row items-center justify-center gap-8"
    >
      <RouterLink :to="{ name: 'myclaimdiscount' }">
        <MyClaimTypeButton title="Diskon">
          <!-- <img class="bg-white rounded-[100%]" :src="iconpricetag" alt="" /> -->
          <Icon class="text-6xl" icon="ic:outline-discount" />
        </MyClaimTypeButton>
      </RouterLink>
      <RouterLink :to="{ name: 'myclaimdiscount', hash: '#cashback' }">
        <MyClaimTypeButton title="Cashback">
          <Icon class="text-7xl" icon="healthicons:money-bag-outline" />
          <!-- <img class="bg-white rounded-[100%]" :src="iconmoneybag" alt="" /> -->
        </MyClaimTypeButton>
      </RouterLink>
      <RouterLink :to="{ name: 'myclaimdiscount', hash: '#point' }">
        <MyClaimTypeButton title="Poin">
          <img :src="iconpoin1" alt="" width="70" />
          <!-- <Icon class="text-7xl" icon="carbon:condition-wait-point" /> -->
        </MyClaimTypeButton>
      </RouterLink>
      <RouterLink :to="{ name: 'myclaimdiscount', hash: '#garansi' }">
        <MyClaimTypeButton title="Klaim Garansi">
          <Icon class="text-7xl" icon="ph:medal-light" />
        </MyClaimTypeButton>
      </RouterLink>
    </section>
    <article v-if="$route.hash == ''" class="container">
      <section class="flex flex-row items-end justify-between py-16">
        <div>
          <div class="font-lato text-4xl text-sigap-gray">My Claim</div>
          <div class="font-lato font-bold text-6xl">
            Voucher <span class="text-sigap-secondary">Diskon</span>
          </div>
        </div>
      </section>
      <div
        class="divider border-t-[1px] border-sigap-gray my-6 container"
      ></div>
      <section class="mt-12 flex flex-col items-center gap-12">
        <VoucherComponent />
        <VoucherComponent />
      </section>
    </article>
    <article v-if="$route.hash == '#cashback'" class="container">
      <section class="flex flex-row items-end justify-between py-16">
        <div>
          <div class="font-lato text-4xl text-sigap-gray">My Claim</div>
          <div class="font-lato font-bold text-6xl">
            Voucher <span class="text-sigap-secondary">Cashback</span>
          </div>
        </div>
      </section>
      <div
        class="divider border-t-[1px] border-sigap-gray my-6 container"
      ></div>
      <section class="mt-12 flex flex-col items-center gap-12">
        <VoucherComponent />
        <VoucherComponent />
      </section>
    </article>
    <article v-if="$route.hash == '#point'" class="container">
      <section class="flex flex-row items-end justify-between py-16">
        <div>
          <div class="font-lato text-4xl text-sigap-gray">My Claim</div>
          <div class="font-lato font-bold text-6xl">
            Reward <span class="text-sigap-secondary">Point</span>
          </div>
        </div>
      </section>
      <div
        class="divider border-t-[1px] border-sigap-gray my-6 container"
      ></div>
      <section class="mt-12 flex flex-col gap-4">
        <div class="font-lato text-5xl">Status Point</div>
        <div class="w-full shadow-lg flex flex-row">
          <div class="py-16 w-9/12 font-lato font-bold text-6xl px-20">
            <img class="inline-block" :src="iconpoin" alt="" />&nbsp;0K
          </div>
          <div
            class="py-16 bg-sigap-secondary text-white font-lato font-bold text-6xl w-3/12 flex items-center justify-center"
          >
            Poin Saya
          </div>
        </div>
        <div
          class="text-center mt-20 px-4 w-full flex items-center justify-center"
        >
          <div
            class="bg-sigap-secondary rounded-full w-fit text-white px-12 py-2"
          >
            Dapatkan poin dengan klaim dibawah ini
          </div>
        </div>
        <div class="flex flex-row items-center justify-evenly">
          <div class="flex flex-col shadow-lg">
            <div
              class="px-8 font-lato text-4xl text-sigap-gray py-2 border-b-2"
            >
              Reedem Feedback
            </div>
            <div class="grow flex flex-col items-center gap-12 px-8 py-4">
              <i
                class="fa fa-star fa-4x text-sigap-secondary mt-12"
                aria-hidden="true"
              ></i>
              <button
                class="text-white bg-sigap-secondary px-20 py-2 rounded-full"
              >
                Klaim
              </button>
            </div>
          </div>
          <div class="flex flex-col shadow-lg">
            <div
              class="px-8 font-lato text-4xl text-sigap-gray py-2 border-b-2"
            >
              Reedem Event
            </div>
            <div class="grow flex flex-col items-center gap-12 px-8 py-4">
              <i
                class="fa fa-calendar-check-o fa-4x text-sigap-secondary mt-12"
                aria-hidden="true"
              ></i>
              <button
                class="text-white bg-sigap-secondary px-20 py-2 rounded-full"
              >
                Klaim
              </button>
            </div>
          </div>
          <div class="flex flex-col shadow-lg">
            <div
              class="px-8 font-lato text-4xl text-sigap-gray py-2 border-b-2"
            >
              Reedem Cashback
            </div>
            <div class="grow flex flex-col items-center gap-12 px-8 py-4">
              <i
                class="fa fa-money fa-4x text-sigap-secondary mt-12"
                aria-hidden="true"
              ></i>
              <button
                class="text-white bg-sigap-secondary px-20 py-2 rounded-full"
              >
                Klaim
              </button>
            </div>
          </div>
        </div>
        <div class="font-lato text-5xl mt-12">Masukan Kode Lisensi Reward</div>
        <div class="w-full shadow-lg flex flex-row">
          <div class="py-12 w-9/12 font-lato font-bold text-6xl px-20">
            <input class="w-full" type="text" />
          </div>
          <div
            class="cursor-pointer py-12 bg-sigap-secondary text-white font-lato font-bold text-6xl w-3/12 flex items-center justify-center"
          >
            Klaim
          </div>
        </div>
      </section>
    </article>
    <article v-if="$route.hash == '#garansi'" class="container">
      <section class="flex flex-row items-end justify-between py-16">
        <div>
          <div class="font-lato text-4xl text-sigap-gray">My Claim</div>
          <div class="font-lato font-bold text-6xl">
            Klaim <span class="text-sigap-secondary">Garansi</span>
          </div>
        </div>
      </section>
      <div
        class="divider border-t-[1px] border-sigap-gray my-6 container"
      ></div>
      <section class="mt-12 flex flex-col gap-4">
        <div class="font-lato text-4xl text-sigap-gray">
          Masukan Kode Garansi
        </div>
        <div class="w-full shadow-lg flex flex-row">
          <div class="py-12 w-9/12 font-lato font-bold text-6xl px-20">
            <input class="w-full text-center" type="text" />
          </div>
          <div
            class="cursor-pointer py-12 bg-sigap-secondary text-white font-lato font-bold text-6xl w-3/12 flex items-center justify-center"
          >
            Klaim
          </div>
        </div>
      </section>
    </article>
  </main>
</template>
