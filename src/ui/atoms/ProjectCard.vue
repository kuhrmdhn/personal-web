<template>
  <div
    v-bind="$attrs"
    :class="[
      'h-80 sm:h-96 w-72 sm:w-80 p-2 flex-none bg-white border-2 border-gray-100 shadow-md rounded-md flex flex-col justify-between hover:shadow-lg duration-300',
      ,
      customClass,
    ]"
  >
    <img
      class="h-1/2 object-cover object-center rounded-md"
      :src="image"
      :alt="name"
    />
    <section class="h-1/2 w-full">
      <h1 class="font-semibold text-base sm:text-lg">{{ name }}</h1>
      <p class="font-thin text-xs sm:text-sm text-justify">
        {{ description }}
      </p>
    </section>
    <section class="h-1/4 w-full flex gap-7 overflow-x-auto">
      <span
        v-for="stack in stacks"
        :key="stack"
        class="w-fit h-fit text-xs sm:text-sm flex-none bg-gray-200 px-2 py-1 rounded"
      >
        {{ stack }}
      </span>
    </section>
    <section
      class="h-14 w-full flex gap-5 items-center justify-end pr-5 text-xs sm:text-sm"
    >
      <a class="bg-gray-500 text-white px-3 py-2 rounded-lg" :href="demo_url"
        >Demo</a
      >
      <a class="bg-gray-500 text-white px-3 py-2 rounded-lg" :href="github_url"
        >Github</a
      >
    </section>
  </div>
</template>

<script setup lang="ts">
type ProjectType = {
  id: number;
  image: string;
  name: string;
  description: string;
  stacks: Array<string>;
  demo_url: string;
  github_url: string;
};

const { projectData, customClass } = defineProps<{
  projectData: ProjectType;
  customClass?: String;
}>();
const { name, image, description, stacks, demo_url, github_url } = projectData;
</script>
