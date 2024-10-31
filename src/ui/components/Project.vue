<script setup lang="ts">
import OnView from "../atoms/OnView.vue";
import SectionHeading from "../atoms/SectionHeading.vue";
import ProjectList from "../elements/ProjectList.vue";
</script>

<template>
  <section
    id="project"
    class="min-h-[30rem] h-[65svh] sm:h-[60svh] lg:min-h-[100svh] lg:h-max w-full pt-6 flex flex-col justify-center items-center"
  >
    <OnView class="h-1/6 flex justify-center items-center" id="projectHeading" triggerId="projectHeading">
      <SectionHeading customClass="flip">My Project</SectionHeading>
    </OnView>
    <ProjectList />
  </section>
</template>
