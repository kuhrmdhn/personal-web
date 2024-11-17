<template>
  <div :class="['relative h-12 w-fit sm:w-[300px] lg:w-[450px] px-3 flex flex-col justify-center', customClass]" v-bind="$attrs">
    <span
      class="h-2 w-2 rounded-full bg-black absolute left-0 top-1/2 bottom-1/2 -translate-y-1/2"
    ></span>
    <div class="flex justify-between items-center ml-5">
      <div>
        <a :href="credentialsUrl" class="font-semibold hover:underline">{{ title }}</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { title, credentialsUrl, customClass } = defineProps<{
  title: string;
  credentialsUrl: string;
  customClass?: string
}>();
</script>
