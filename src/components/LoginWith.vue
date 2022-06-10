<script setup>
  defineProps(["icon", "title"]);
</script>
<template>
  <button
    class="flex flex-row items-center justify-center py-3 gap-2 rounded-full border-2 border-sigap-gray border-opacity-50 w-full"
  >
    <img :src="$props.icon" alt="icon" width="28" height="28" />
    <div class="text-lg">{{$props.title}}</div>
  </button>
</template>
