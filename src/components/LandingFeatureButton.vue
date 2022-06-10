<script setup>
  import { ref } from "vue";

  defineProps(["icon", "image", "title"]);

  const isHover = ref(false);

  const onHover = () => {
    isHover.value = !isHover.value;
  };
</script>

<template>
  <div
    @pointerenter="onHover"
    @pointerleave="onHover"
    class="card w-96 h-96 flex flex-col items-center justify-between p-8 shadow-xl hover:bg-sigap-primary hover:text-white transition-all duration-300 cursor-pointer"
  >
    <img
      :class="
        isHover
          ? 'self-end brightness-0 invert'
          : 'self-end transition-all duration-300'
      "
      :src="$props.icon"
      alt="icon"
      width="34"
      height="34"
    />
    <div class="relative w-full grow flex items-center justify-center">
      <div class="bg-sigap-light rounded-[100%] w-40 h-40 absolute z-0"></div>
      <img
        :class="
          isHover
            ? 'absolute z-30 transition-all duration-300 -translate-y-10'
            : 'absolute z-30 transition-all duration-300'
        "
        :src="$props.image"
        alt="asd"
        width="120"
        height="130"
      />
    </div>
    <div class="font-lato font-medium text-4xl">{{ $props.title }}</div>
  </div>
</template>
