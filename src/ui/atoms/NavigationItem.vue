<template>
  <a
    :href="props.url"
    :class="['navigation-hover', props.class]"
    v-bind="$attrs"
  >
    {{ props.text }}
  </a>
</template>

<script setup>
const props = defineProps({
  text: {
    required: true,
    type: String,
  },
  url: {
    required: true,
    type: String,
  },
  class: String,
  isVisible: {
    default: true,
    type: Boolean,
  },
});
</script>

<style scoped>
.navigation-hover {
  position: relative;
  top: 0;
}
.navigation-hover::before {
  content: "";
  width: 0;
  height: var(--underline-height, 3px);
  position: absolute;
  background: var(--underline-color, #000);
  transition-duration: 300ms;
  bottom: var(--underline-offset, -8px);
  left: 50%;
  transform: translateX(-50%);
}
.navigation-hover:hover::before {
  width: 80%;
}
</style>
