<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue';
import ProjectList from '../elements/ProjectList.vue';
import { isVisibleElement } from '@/utils/useIsVisibleElement';
const projectSectionVisibleStatus = ref(false)
function handleVisible() {
    const projectSectionElement = document.getElementById("projectHeading")
    if(projectSectionElement) {
        const status = isVisibleElement(projectSectionElement)
        projectSectionVisibleStatus.value = status
    }
}

onMounted(() => window.addEventListener("scroll", handleVisible))
onBeforeMount(() => window.addEventListener("scroll", handleVisible))
handleVisible()
</script>

<template>
    <section id="project" class="min-h-[100svh] h-max w-full pt-16 flex flex-col justify-center items-center">
        <div id="projectHeading" class="h-2/5 w-full flex flex-col justify-center items-center gap-5">
            <h1 :class="['text-3xl lg:text-5xl', projectSectionVisibleStatus && 'flip']">My Completed Project</h1>
        </div>
        <ProjectList/>
    </section>
</template>