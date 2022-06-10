<script setup>
  import { ref } from "vue";

  defineProps(["image", "title"]);

  const isHover = ref(false);

  const onHover = () => {
    isHover.value = !isHover.value;
  };
</script>

<template>
  <div
    @pointerenter="onHover"
    @pointerleave="onHover"
    class="card w-72 h-60 rounded-3xl bg-sigap-gray overflow-hidden flex items-center justify-center relative cursor-pointer"
  >
    <img
      :class="
        isHover
          ? 'absolute w-full h-full object-cover transition-all duration-300 scale-125'
          : 'absolute w-full h-full object-cover transition-all duration-300'
      "
      :src="$props.image"
      alt="category"
      width="300"
      height="250"
    />
    <div class="absolute bg-black bg-opacity-30 w-full h-full"></div>
    <div
      :class="
        isHover
          ? 'absolute font-poppins font-semibold text-xl text-white transition-all duration-300'
          : 'absolute font-poppins font-semibold text-2xl text-white transition-all duration-300'
      "
    >
      {{ $props.title }}
    </div>
  </div>
</template>
