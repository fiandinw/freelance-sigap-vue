<script setup>
  import { ref } from "vue";

  defineProps({
    type: { default: "text" },
    placeholder: { default: "no placeholder" },
    vModel: {},
  });
</script>
<template>
  <input
    class="text-lg border-2 border-sigap-gray border-opacity-50 rounded-full w-full px-6 py-3"
    :type="$props.type"
    :placeholder="$props.placeholder"
    :v-model="$props.vModel"
  />
</template>
