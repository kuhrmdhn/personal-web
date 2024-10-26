<script setup lang="ts">
import { supabase } from "@/utils/supabase.js";
import { isVisibleElement } from "@/utils/useIsVisibleElement";
import { onBeforeMount, onMounted, ref } from "vue";

type SkillType = {
  id: number;
  name: string;
  image: string;
};
const skillLists = ref<SkillType[]>([]);
const visibleStatus = ref(false);

const checkVisibility = () => {
  const element = document.getElementById("skillList");
  if (element) {
    const status = isVisibleElement(element);
    visibleStatus.value = status;
  }
};

const fetchSkills = async (): Promise<void> => {
  const { data: skills } = await supabase
    .from("skill_list")
    .select()
    .order("id", { ascending: true });
  if (skills && skills.length > 0) {
    skillLists.value = skills;
  }
};

onMounted(() => {
  fetchSkills();
  window.addEventListener("scroll", checkVisibility);
});
onBeforeMount(() => window.removeEventListener("scroll", checkVisibility));
checkVisibility();
</script>

<template>
  <ul
    id="skillList"
    class="h-1/2 w-full flex flex-wrap items-center justify-center gap-7 overflow-hidden"
  >
    <li v-if="visibleStatus" v-for="skill in skillLists" :key="skill.id">
      <img
        class="h-10 w-10 fall cursor-pointer hover:scale-110 duration-300 rounded-md"
        :title="skill.name"
        :src="skill.image"
        :alt="skill.name"
        :style="{
          animationDelay: (skill.id + 1) * 50 + 'ms',
        }"
      />
    </li>
  </ul>
</template>

<style scoped></style>
