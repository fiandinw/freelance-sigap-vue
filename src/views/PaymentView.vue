<script setup>
  import FloatingDescriptionCard from "../components/FloatingDescriptionCard.vue";
  import iconCheckSolid from "../assets/icons/checkSolid.png";
  import FloatingPaymentCard from "../components/FloatingPaymentCard.vue";
  import FloatingOrderDetailCard from "../components/FloatingOrderDetailCard.vue";
  import { ref } from "vue";
  import LandingFeatureCard from "../components/LandingFeatureCard.vue";
  import { Icon } from "@iconify/vue";
  import bankbri from "../assets/bankbri.png";
  import bankbni from "../assets/bankbni.png";
  import bankbjb from "../assets/bankbjb.png";
  import bankjago from "../assets/bankjago.png";

  const methodSelected = ref("");
  const payMethod = ref("");
  const bankSelect = ref("");
  const modalState = ref(false);

  const onChangeMethod = (e) => {
    console.log(e);
  };

  const onChangePayMethod = (type) => {
    payMethod.value = type;
  };

  const onChangeBankSelect = (type) => {
    bankSelect.value = type;
  };
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
        <section class="">
          <div class="p-4 shadow-lg">
            <div class="font-semibold text-lg border-b-2 py-2 mb-4">
              Metode Pembayaran
            </div>
            <div class="grid grid-cols-3 gap-4 min-h-[200px]">
              <div
                @click="
                  () => {
                    onChangePayMethod('wallet');
                  }
                "
              >
                <div
                  class="w-[228px] h-[153px] shadow-lg flex flex-col items-center justify-center"
                >
                  <Icon class="text-6xl" icon="cil:wallet" />
                </div>
                <div
                  :class="`uppercase w-[228px] h-[25px] ${
                    payMethod == 'wallet' ? 'bg-sigap-secondary' : 'bg-gray-300'
                  } font-medium flex flex-col items-center justify-center`"
                >
                  e-wallet
                </div>
              </div>
              <div
                @click="
                  () => {
                    onChangePayMethod('bank');
                  }
                "
              >
                <div
                  class="w-[228px] h-[153px] shadow-lg flex flex-col items-center justify-center"
                >
                  <Icon
                    class="text-6xl"
                    icon="fluent:building-bank-48-regular"
                  />
                </div>
                <div
                  :class="`uppercase w-[228px] h-[25px] ${
                    payMethod == 'bank' ? 'bg-sigap-secondary' : 'bg-gray-300'
                  } font-medium flex flex-col items-center justify-center`"
                >
                  bank
                </div>
              </div>
              <div
                @click="
                  () => {
                    onChangePayMethod('cod');
                  }
                "
              >
                <div
                  class="w-[228px] h-[153px] shadow-lg flex flex-col items-center justify-center"
                >
                  <Icon class="text-6xl text-black" icon="bytesize:location" />
                </div>
                <div
                  :class="`uppercase w-[228px] h-[25px] ${
                    payMethod == 'cod' ? 'bg-sigap-secondary' : 'bg-gray-300'
                  } font-medium flex flex-col items-center justify-center`"
                >
                  cod
                </div>
              </div>

              <!-- <div>
                <input
                  type="radio"
                  name="metode"
                  id="qris"
                  value="qris"
                  v-model="methodSelected"
                />&nbsp;<label for="qris">E-Wallet</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="metode"
                  id="bank"
                  value="bank"
                  v-model="methodSelected"
                />&nbsp;<label for="bank">Transfer Bank</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="metode"
                  id="cod"
                  value="cod"
                  v-model="methodSelected"
                />&nbsp;<label for="cod">COD</label>
              </div> -->
            </div>
          </div>

          <div
            v-if="payMethod == 'bank'"
            class="mt-12 shadow-lg flex flex-col gap-2 items-center justify-center p-4"
          >
            <div>Silahkan Pilih Bank Anda</div>
            <div class="flex flex-row gap-4">
              <div
                :class="`w-[100px] h-[75px] shadow-xl p-2 ${
                  bankSelect == 'bri' ? 'bg-gray-100' : ''
                }`"
                @click="
                  () => {
                    onChangeBankSelect('bri');
                  }
                "
              >
                <img
                  class="w-full h-full object-contain"
                  :src="bankbri"
                  alt="bri"
                />
              </div>
              <div
                :class="`w-[100px] h-[75px] shadow-xl p-2 ${
                  bankSelect == 'bni' ? 'bg-gray-100' : ''
                }`"
                @click="
                  () => {
                    onChangeBankSelect('bni');
                  }
                "
              >
                <img
                  class="w-full h-full object-contain"
                  :src="bankbni"
                  alt="bni"
                />
              </div>
              <div
                :class="`w-[100px] h-[75px] shadow-xl p-2 ${
                  bankSelect == 'bjb' ? 'bg-gray-100' : ''
                }`"
                @click="
                  () => {
                    onChangeBankSelect('bjb');
                  }
                "
              >
                <img
                  class="w-full h-full object-contain"
                  :src="bankbjb"
                  alt="bjb"
                />
              </div>
              <div
                :class="`w-[100px] h-[75px] shadow-xl p-2 ${
                  bankSelect == 'jago' ? 'bg-gray-100' : ''
                }`"
                @click="
                  () => {
                    onChangeBankSelect('jago');
                  }
                "
              >
                <img
                  class="w-full h-full object-contain mt-2"
                  :src="bankjago"
                  alt="jago"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="w-5/12 relative flex justify-center">
        <FloatingOrderDetailCard
          :isBayar="false"
          :paymentMethod="methodSelected"
        >
          <button
            v-if="payMethod == 'bank'"
            class="mb-4 bg-sigap-primary w-full py-4 font-bold text-2xl text-white rounded-full"
            @click="
              () => {
                modalState = true;
              }
            "
          >
            Bayar
          </button>
          <a
            v-if="payMethod == 'cod'"
            href="https://api.whatsapp.com/send?phone=6285777620414&text=MauBayar"
            target="_blank"
          >
            <button
              class="mb-4 bg-sigap-primary w-full py-4 font-bold text-2xl text-white rounded-full"
            >
              Bayar
            </button>
          </a>
        </FloatingOrderDetailCard>
      </div>
    </article>
  </main>
  <div
    v-if="modalState"
    class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-25 z-50 flex items-center justify-center"
    @click.self="
      () => {
        modalState = false;
      }
    "
  >
    <div class="bg-white rounded-lg p-4">
      <h1 class="mb-4">INVOICE</h1>
      <img
        v-if="bankSelect == 'bri'"
        class="w-full h-full object-contain"
        :src="bankbri"
        alt="bri"
      />
      <img
        v-if="bankSelect == 'bjb'"
        class="w-full h-full object-contain"
        :src="bankbjb"
        alt="bjb"
      />
      <img
        v-if="bankSelect == 'bni'"
        class="w-full h-full object-contain"
        :src="bankbni"
        alt="bni"
      />
      <img
        v-if="bankSelect == 'jago'"
        class="w-full h-full object-contain"
        :src="bankjago"
        alt="jago"
      />
      <p class="mt-12">{{ bankSelect }}</p>
    </div>
  </div>
</template>
