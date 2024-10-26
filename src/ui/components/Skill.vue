<script setup>
import { onBeforeMount, onMounted, ref } from "vue";
import SkillList from "../elements/SkillList.vue";
import { isVisibleElement } from "@/utils/useIsVisibleElement.ts";
const visibleStatus = ref(false);

const checkVisibility = () => {
  const skillSectionElement = document.getElementById("skills");
  if (skillSectionElement) {
    const status = isVisibleElement(skillSectionElement);
    visibleStatus.value = status;
  }
};

onMounted(() => window.addEventListener("scroll", checkVisibility));
onBeforeMount(() => window.addEventListener("scroll", checkVisibility));
checkVisibility();
</script>

<template>
  <section
    id="skills"
    class="h-[65svh] lg:h-[50svh] w-full pt-16 flex flex-col lg:flex-row justify-around items-center overflow-hidden"
  >
    <div class="h-5/6 w-3/4 lg:w-1/3 flex flex-col gap-5 justify-center text-justify">
      <h1 :class="[visibleStatus && 'flip', 'text-3xl lg:text-5xl']">
        My Skill
      </h1>
      <p
        :class="[
          visibleStatus && 'to-up',
          'text-justify w-full text-sm sm:text-base',
        ]"
      >
        Have similar interests and experiences? or want to ask about some topic?
        <a class="text-primary font-semibold" href="#contact">Contact Me</a>
      </p>
    </div>
    <div class="h-full w-5/6 lg:w-1/3 flex justify-center items-center">
      <SkillList />
    </div>
  </section>
</template>

<style scoped></style>
