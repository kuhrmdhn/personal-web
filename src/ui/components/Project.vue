<script setup lang="ts">
import OnView from "../atoms/OnView.vue";
import SectionHeading from "../atoms/SectionHeading.vue";
import ProjectList from "../elements/ProjectList.vue";
</script>

<template>
  <section
    id="project"
    class="min-h-[35rem] h-[100svh] sm:h-[60svh] lg:min-h-[100svh] lg:h-max w-full pt-16 flex flex-col justify-center items-center"
  >
    <OnView class="h-1/6 flex justify-center items-center" id="projectHeading" triggerId="projectHeading">
      <SectionHeading customClass="text-xl sm:text-3xl flip">My Completed Project</SectionHeading>
    </OnView>
    <ProjectList />
  </section>
</template>
