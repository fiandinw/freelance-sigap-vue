<script setup>
  import CategoryCard from "./CategoryCard.vue";
</script>
<template>
  <div class="flex flex-wrap gap-y-14 gap-x-8 justify-between">
    <CategoryCard
      image="https://picsum.photos/300/250"
      title="Graphic&Design"
    />
    <CategoryCard
      image="https://picsum.photos/300/251"
      title="Cartoon Animation"
    />
    <CategoryCard image="https://picsum.photos/300/252" title="Illustration" />
    <CategoryCard
      image="https://picsum.photos/300/253"
      title="Flyers & Vouchers"
    />
    <CategoryCard image="https://picsum.photos/300/254" title="Logo Design" />
    <CategoryCard
      image="https://picsum.photos/300/255"
      title="Social graphics"
    />
    <CategoryCard
      image="https://picsum.photos/300/256"
      title="Article writing"
    />
    <CategoryCard image="https://picsum.photos/300/257" title="Video Editing" />
  </div>
</template>
