<template>
  <h1 :class="['text-3xl lg:text-5xl', customClass]">
    <slot />
  </h1>
</template>

<script setup>
const { customClass } = defineProps({
  customClass: String,
});
</script>
