<template>
  <section
    id="projectList"
    class="h-4/5 w-full flex gap-7 items-center overflow-x-auto lg:py-7 px-4 sm:px-10"
  >
    <OnView
      triggerId="projectList"
      v-for="project in projectList"
      :key="project.id"
    >
      <ProjectCard
        customClass="to-right"
        :projectData="project"
        :style="{ animationDelay: project.id * 100 + 'ms' }"
      />
    </OnView>
  </section>
</template>

<script setup lang="ts">
import { supabase } from "@/utils/supabase";
import { ref } from "vue";
import OnView from "../atoms/OnView.vue";
import ProjectCard from "../atoms/ProjectCard.vue";

type Project = {
  id: number;
  name: string;
  description: string;
  stacks: string[];
  github_url: string;
  demo_url: string;
  image: string;
};

const projectList = ref<Project[]>([]);
const fetchProjects = async () => {
  const { data: projects } = await supabase
    .from("project_list")
    .select()
    .order("id", { ascending: false });
  if (projects && projects.length > 0) {
    projectList.value = projects;
  }
};

fetchProjects();
</script>