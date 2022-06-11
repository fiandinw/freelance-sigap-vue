<script setup>
  defineProps(["title", "description"]);
</script>
<template>
  <div
    class="w-96 shadow-lg flex flex-col items-center gap-8 p-8 rounded-3xl h-fit overflow-hidden"
  >
    <div class="font-lato text-3xl flex flex-row items-center gap-4 w-full">
      <i class="fa fa-briefcase fa-xl" aria-hidden="true"></i>
      <div class="grow">{{ $props.title }}</div>
    </div>
    <div class="font-lato text-2xl text-[#4E4E4E]">
      {{ $props.description }}
    </div>
  </div>
</template>
