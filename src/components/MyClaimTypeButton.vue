<script setup>
  defineProps(["title"]);
</script>
<template>
  <button
    class="relative w-44 h-44 flex flex-col items-center justify-center border-2 border-sigap-primary text-sigap-primary rounded-2xl hover:bg-sigap-primary hover:text-white"
  >
    <slot>
      <i class="fa fa-tags fa-4x" aria-hidden="true"></i>
    </slot>
    <div class="mt-2 text-lg">{{ $props.title }}</div>
  </button>
</template>
