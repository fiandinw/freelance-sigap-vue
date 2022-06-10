<script setup>
  defineProps([
    'icon',
    'title',
    'desc',
  ]);
</script>

<template>
  <div class="card flex flex-col items-center w-72">
    <img :src="$props.icon" alt="icon" width="111" height="112"/>
    <div class="font-lato text-4xl font-bold shrink-0 mt-4">
      {{$props.title}}
    </div>
    <div class="text-2xl text-sigap-gray grow text-center">
      {{$props.desc}}
    </div>
  </div>
</template>
