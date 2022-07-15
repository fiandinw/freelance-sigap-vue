<script setup>
  defineProps(["icon", "title"]);
</script>
<template>
  <button
    class="bg-sigap-primary w-96 flex flex-col items-center py-8 rounded-lg"
  >
    <slot>
      <img
        class="w-[100px] h-[100px] object-cover"
        :src="$props.icon"
        alt="icon"
        width="100"
        height="100"
      />
    </slot>
    <div class="text-white font-semibold text-2xl">{{ $props.title }}</div>
  </button>
</template>
