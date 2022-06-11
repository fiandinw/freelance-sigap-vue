<script setup>
  import { ref } from "vue";

  defineProps(["title", "description", "icon"]);
  const isOpen = ref(false);
  const openToggle = () => {
    isOpen.value = !isOpen.value;
  };
</script>
<template>
  <div
    @click="openToggle"
    :class="
      isOpen
        ? 'w-96 shadow-lg flex flex-col items-center gap-8 p-8 rounded-3xl h-fit overflow-hidden transition-all duration-300'
        : 'w-96 shadow-lg flex flex-col items-center gap-8 p-8 rounded-3xl h-72 overflow-hidden transition-all duration-300'
    "
  >
    <div class="font-lato text-3xl flex flex-row items-center gap-4 w-full">
      <img
        class="w-[65px] h-[65px] object-cover"
        :src="icon"
        alt=""
        width="65"
        height="65"
      />
      <div class="grow">{{ $props.title }}</div>
    </div>
    <div class="font-lato text-2xl text-[#4E4E4E]">
      {{ $props.description }}
    </div>
  </div>
</template>
