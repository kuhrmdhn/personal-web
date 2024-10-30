<template>
  <p :class="['text-justify w-full text-sm sm:text-base', customClass]">
    <slot />
  </p>
</template>

<script setup>
const { customClass } = defineProps({
  customClass: String,
});
</script>
