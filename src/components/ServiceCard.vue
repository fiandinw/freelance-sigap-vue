<script setup>
  import router from "../router";
  import badgeExpert from "../assets/icons/badgeExpert.png";
  import { ref } from "vue";

  const isLoved = ref(false);
  const isLovedToggle = () => {
    isLoved.value = !isLoved.value;
  };
  const onClick = () => {
    router.push({ name: "description" });
  };
</script>
<template>
  <div class="shadow-lg w-fit">
    <img
      @click="onClick"
      class="w-[300px] h-[250px] object-cover cursor-pointer"
      src="https://picsum.photos/75/60"
      alt="service image"
      width="300"
      height="250"
    />
    <div class="p-4">
      <div class="flex flex-row items-center justify-between">
        <div class="flex flex-row items-center gap-2">
          <img
            class="w-10 h-10 object-cover rounded-[100%]"
            src="https://picsum.photos/50/50"
            alt=""
            width="40"
            height="40"
          />
          <div>
            <div>{Freelance}</div>
            <div>bintang</div>
          </div>
        </div>
        <img :src="badgeExpert" alt="" />
      </div>
      <div class="text-lg mt-2">{desctiption}</div>
      <div
        class="border-t-2 border-[#00000022] mt-4 flex flex-row items-center justify-between pt-2"
      >
        <i
          @click="isLovedToggle"
          :class="
            isLoved
              ? 'fa fa-heart fa-2x text-sigap-primary'
              : 'fa fa-heart fa-2x text-sigap-gray'
          "
          aria-hidden="true"
        ></i>
        <div class="font-semibold text-2xl text-sigap-primary text-opacity-70">
          Rp <span class="font-extrabold text-3xl">0</span>.K
        </div>
      </div>
    </div>
  </div>
</template>
