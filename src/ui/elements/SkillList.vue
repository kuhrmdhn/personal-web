<script setup lang="ts">
import { supabase } from "@/utils/supabase.js";
import { onMounted, ref } from "vue";
import OnView from "../atoms/OnView.vue";
type SkillType = {
  id: number;
  name: string;
  image: string;
};
const skillLists = ref<SkillType[]>([]);
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
});
</script>

<template>
  <ul
    id="skillList"
    class="h-full w-full flex flex-wrap items-center justify-center gap-7 overflow-hidden"
  >
    <OnView triggerId="skillList" v-for="skill in skillLists" :key="skill.id">
      <img
        class="h-10 w-10 fall cursor-pointer hover:scale-125 duration-300 rounded-md"
        :title="skill.name"
        :src="skill.image"
        :alt="skill.name"
        :style="{ animationDelay: (skill.id + 1) * 50 + 'ms' }"
      />
    </OnView>
  </ul>
</template>

<style scoped></style>
