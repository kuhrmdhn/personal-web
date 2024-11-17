<template>
  <div :class="['relative pl-3 lg:pl-10 py-3 lg:py-5 border-l-4 border-black', customClass]">
    <span
      class="absolute h-5 w-5 rounded-full bg-white border-4 border-black -top-2 -left-3"
    ></span>
    <h1 class="font-extrabold text-lg sm:text-xl">{{ schoolName }}</h1>
    <h2 class="font-bold text-base sm:text-lg">{{ major }}</h2>
    <p class="text-xs sm:text-base">{{ duration }}</p>
  </div>
</template>

<script setup lang="ts">
import { SchoolEducation } from "@/constant/schoolEducation";

const { educationData, customClass } = defineProps<{
  educationData: SchoolEducation;
  customClass?: string;
}>();

const { schoolName, major, duration } = educationData;
</script>
