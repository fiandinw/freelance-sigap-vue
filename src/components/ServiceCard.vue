<script setup>
  import router from "../router";

  const onClick = () => {
    router.push({ name: "description" });
  };
</script>
<template>
  <div class="shadow-lg w-fit">
    <img
      @click="onClick"
      class="w-[300px] h-[250px] object-cover cursor-pointer"
      src="https://picsum.photos/75/60"
      alt="service image"
      width="300"
      height="250"
    />
    <div class="p-4">
      <div>detail</div>
      <div>desctiption</div>
      <div>love and price</div>
    </div>
  </div>
</template>
