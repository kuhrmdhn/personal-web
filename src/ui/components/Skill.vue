<script setup>
import OnView from "../atoms/OnView.vue";
import SectionDescription from "../atoms/SectionDescription.vue";
import SectionHeading from "../atoms/SectionHeading.vue";
import SkillList from "../elements/SkillList.vue";
</script>

<template>
  <section
    id="skill"
    class="min-h-[20rem] h-[50svh] sm:h-[40svh] w-full pt-6 flex flex-col sm:flex-row justify-around items-center overflow-hidden"
  >
    <OnView
      id="skillHeading"
      triggerId="skillHeading"
      class="h-1/3 sm:h-1/2 w-11/12 sm:w-1/3 flex flex-col gap-5 justify-center text-justify"
    >
      <SectionHeading customClass="flip"> My Skill </SectionHeading>
      <SectionDescription customClass="flip">
        Have similar interests and experiences? or want to ask about some topic?
        <a class="text-primary font-semibold" href="#contact">Contact Me</a>
      </SectionDescription>
    </OnView>
    <div class="h-1/3 sm:h-1/2 lg:h-1/2 w-full sm:w-1/2 lg:w-1/3 flex justify-center items-center">
      <SkillList />
    </div>
  </section>
</template>