<script setup>
  import ServiceCard from "../components/ServiceCard.vue";
  import MyClaimTypeButton from "../components/MyClaimTypeButton.vue";
  import VoucherComponent from "../components/VoucherComponent.vue";
  import { RouterLink } from "vue-router";
  import iconmoneybag from "../assets/icons/moneybag.png";
  import iconpricetag from "../assets/icons/pricetag.png";
  import iconpoin from "../assets/icons/poin.png";
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
          <!-- <img :src="iconpoin" alt="" /> -->
          <Icon class="text-7xl" icon="carbon:condition-wait-point" />
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
            Voucher <span class="text-sigap-primary">Diskon</span>
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
            Voucher <span class="text-sigap-primary">Cashback</span>
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
            Reward <span class="text-sigap-primary">Point</span>
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
            class="py-16 bg-sigap-primary text-white font-lato font-bold text-6xl w-3/12 flex items-center justify-center"
          >
            Poin Saya
          </div>
        </div>
        <div class="text-center mt-20">
          Dapatkan poin dengan klaim dibawah ini
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
                class="fa fa-star fa-4x text-sigap-primary mt-12"
                aria-hidden="true"
              ></i>
              <button
                class="text-white bg-sigap-primary px-20 py-2 rounded-full"
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
                class="fa fa-calendar-check-o fa-4x text-sigap-primary mt-12"
                aria-hidden="true"
              ></i>
              <button
                class="text-white bg-sigap-primary px-20 py-2 rounded-full"
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
                class="fa fa-money fa-4x text-sigap-primary mt-12"
                aria-hidden="true"
              ></i>
              <button
                class="text-white bg-sigap-primary px-20 py-2 rounded-full"
              >
                Klaim
              </button>
            </div>
          </div>
        </div>
      </section>
    </article>
    <article v-if="$route.hash == '#garansi'" class="container">
      <section class="flex flex-row items-end justify-between py-16">
        <div>
          <div class="font-lato text-4xl text-sigap-gray">My Claim</div>
          <div class="font-lato font-bold text-6xl">
            Klaim <span class="text-sigap-primary">Garansi</span>
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
        <div class="grid grid-cols-2">
          <input
            type="text"
            class="border-2 border-sigap-secondary rounded-l-lg text-6xl box-border px-2"
          />
          <button
            class="text-2xl w-fit bg-sigap-secondary font-bold font-lato text-white px-12 rounded-r-lg shrink"
          >
            Klaim
          </button>
        </div>
      </section>
    </article>
  </main>
</template>
