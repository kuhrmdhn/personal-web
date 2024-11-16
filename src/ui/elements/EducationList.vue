<script setup lang="ts">
import { schoolEducation } from "@/constant/schoolEducation";
import EducationItem from "../atoms/EducationItem.vue";
import SectionHeading from "../atoms/SectionHeading.vue";
import OnView from "../atoms/OnView.vue";
</script>

<template>
  <div class="w-full lg:w-[40svw] h-fit flex flex-col gap-5">
    <OnView id="educationHeading" triggerId="educationHeading">
      <SectionHeading custom-class="!text-xl lg:!text-3xl text-center flip"
        >Education</SectionHeading
      >
    </OnView>
    <div class="h-full w-full flex flex-col lg:items-center">
      <div v-for="education in schoolEducation" :key="education.id">
        <EducationItem :education-data="education" />
      </div>
    </div>
  </div>
</template>
