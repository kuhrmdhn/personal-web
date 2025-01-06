<template>
  <div class="w-full lg:w-[40svw] h-fit flex flex-col gap-5 overflow-y-hidden">
    <OnView id="educationHeading" triggerId="educationHeading">
      <SectionHeading custom-class="!text-xl lg:!text-3xl text-center flip">
        Education
      </SectionHeading>
    </OnView>
    <div class="h-full w-full flex flex-col items-center">
      <OnView
        :id="'education' + education.id"
        :trigger-id="'education' + education.id"
        v-for="education in schoolEducation"
        :key="education.id"
      >
        <EducationItem customClass="fall" :education-data="education" />
      </OnView>
    </div>
  </div>
</template>

<script setup lang="ts">
import EducationItem from "../atoms/EducationItem.vue";
import SectionHeading from "../atoms/SectionHeading.vue";
import OnView from "../atoms/OnView.vue";
import { schoolEducation } from "@/constant/schoolEducation";
</script>
