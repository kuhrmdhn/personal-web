<template>
  <div v-bind="$attrs">
    <slot v-if="visibleStatus" />
  </div>
</template>

<script setup>
import { useVisibleElement } from "@/utils/useVisibleElement";

const props = defineProps({
  triggerId: {
    required: true,
    type: String,
  },
});
const { visibleStatus } = useVisibleElement(props.triggerId);
</script>