<script setup>
  import { ref } from "vue";

  defineProps(["icon", "title"]);
  const isHover = ref(false);
  const toggleHover = () => {
    isHover.value = !isHover.value;
    console.log("hover");
  };
</script>

<template>
  <div
    @mouseenter="toggleHover"
    @mouseleave="toggleHover"
    class="cursor-default absolute card flex flex-col gap-2 items-center w-48 min-h-[12rem] p-4 rounded-lg bg-white shadow-[0_14px_37px_0px_rgba(0,0,0,0.1)] hover:scale-125 transition-all duration-300"
  >
    <img
      class="min-h-[70px] object-contain"
      :src="$props.icon"
      alt="icon"
      width="70"
      height="70"
    />
    <div class="font-lato text-2xl text-center h-full flex items-center">
      {{ $props.title }}
    </div>
    <div
      :class="
        isHover
          ? 'block transition-all duration-300'
          : 'hidden transition-all duration-300'
      "
    >
      <hr class="border-2 mb-2" />
      <slot></slot>
    </div>
  </div>
</template>
