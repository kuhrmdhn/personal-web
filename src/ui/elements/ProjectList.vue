<template>
  <section
    id="projectContainer"
    class="h-4/5 w-full flex gap-7 items-center overflow-x-auto lg:py-7 px-10 project-list"
  >
    <OnView
      triggerId="projectContainer"
      v-for="project in projectList"
      :key="project.id"
    >
      <div
        :style="{ animationDelay: (project.id + 1) * 100 + 'ms' }"
        class="to-right h-96 lg:h-96 w-80 p-2 flex-none bg-white border-2 border-gray-100 shadow-md rounded-md flex flex-col justify-between hover:shadow-lg duration-300"
      >
        <img
          class="h-1/2 object-cover object-center rounded-md"
          :src="project.image"
          :alt="project.name"
        />
        <section class="h-1/2 w-full">
          <h1 class="font-semibold text-lg">{{ project.name }}</h1>
          <p class="font-thin text-sm text-justify">
            {{ project.description }}
          </p>
        </section>
        <section class="h-1/4 w-full flex gap-7 overflow-x-auto">
          <span
            v-for="stack in project.stacks"
            :key="stack"
            class="w-fit h-fit flex-none bg-gray-200 px-2 py-1 rounded"
          >
            {{ stack }}
          </span>
        </section>
        <section class="h-14 w-full flex gap-5 items-center justify-end pr-5">
          <a
            class="bg-gray-500 text-white px-3 py-2 rounded-lg"
            :href="project.demo_url"
            >Demo</a
          >
          <a
            class="bg-gray-500 text-white px-3 py-2 rounded-lg"
            :href="project.github_url"
            >Github</a
          >
        </section>
      </div>
    </OnView>
  </section>
</template>

<script setup lang="ts">
import { supabase } from "@/utils/supabase";
import { ref } from "vue";
import OnView from "../atoms/OnView.vue";

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
