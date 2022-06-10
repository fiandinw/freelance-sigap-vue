<script setup>
  import { ref } from "vue";
  import arrow from "../assets/icons/arrow.png";

  defineProps(["title", "content"]);

  const isOpen = ref(false);

  const onClick = () => {
    isOpen.value = !isOpen.value;
  };
</script>
<template>
  <div @click="onClick">
    <div
      :class="
        isOpen
          ? 'border-2 border-b-2 border-sigap-gray rounded-lg rounded-b-none shadow-none text-2xl font-semibold flex flex-row px-8 py-2 items-center transition-all duration-300 cursor-pointer'
          : 'border-2 border-sigap-gray rounded-lg shadow-lg text-2xl font-semibold flex flex-row px-8 py-2 items-center transition-all duration-300 cursor-pointer'
      "
    >
      <div class="grow">{{ $props.title }}</div>
      <img
        :class="
          isOpen
            ? 'max-w-5 max-h-5 object-contain transition-all duration-300 rotate-90'
            : 'max-w-5 max-h-5 object-contain transition-all duration-300'
        "
        :src="arrow"
        alt="arrow"
        width="18"
        height="18"
      />
    </div>
    <div
      :class="
        isOpen
          ? 'h-fit overflow-hidden text-xl px-12 py-4 border-2 border-t-0 border-sigap-gray rounded-b-lg transition-all duration-300 shadow-lg'
          : 'h-0 overflow-hidden text-xl px-0 py-0 border-0 border-t-0 border-sigap-gray rounded-b-none transition-all duration-300'
      "
    >
      {{ $props.content }}
    </div>
  </div>
</template>
