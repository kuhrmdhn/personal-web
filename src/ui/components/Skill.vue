<script setup>
import OnView from "../atoms/OnView.vue";
import SkillList from "../elements/SkillList.vue";
</script>

<template>
  <section
    id="skills"
    class="h-[65svh] sm:h-[40svh] lg:h-[50svh] w-full pt-16 flex flex-col sm:flex-row justify-around items-center overflow-hidden"
  >
    <OnView
    id="skillHeading"
      triggerId="skillHeading"
      class="h-2/5 lg:h-5/6 w-11/12 sm:w-1/3 flex flex-col gap-5 justify-center text-justify"
    >
      <h1 class="flip text-3xl lg:text-5xl">
        My Skill
      </h1>
      <p
        class="flip text-justify w-full text-sm sm:text-base"
      >
        Have similar interests and experiences? or want to ask about some topic?
        <a class="text-primary font-semibold" href="#contact">Contact Me</a>
      </p>
    </OnView>
    <div class="h-1/3 sm:h-1/2 lg:h-1/2 w-full sm:w-1/2 lg:w-1/3 flex justify-center items-center">
      <SkillList />
    </div>
  </section>
</template>

<style scoped></style>
