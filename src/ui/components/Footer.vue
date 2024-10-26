<template>
  <footer
    class="h-max lg:h-72 w-full pb-4 bg-black text-silverWhite flex flex-col lg:flex-row justify-evenly items-center"
  >
    <div class="h-full py-10 flex flex-col justify-between items-center">
      <Logo />
      <span class="w-44 overflow-hidden">
        <KeqingIcon />
      </span>
    </div>
    <nav class="w-full lg:w-1/2 h-full flex justify-around">
      <div class="w-2/5 h-3/5 flex flex-col justify-between items-center">
        <h1 class="text-xl">Navigation</h1>
        <ul class="h-3/4 w-fit flex flex-col gap-1">
          <li v-for="nav of navigationData" :key="nav.id">
            <a :href="nav.url">{{ nav.title }}</a>
          </li>
        </ul>
      </div>
      <div class="w-2/5 h-3/5 flex flex-col justify-between items-center">
        <h1 class="text-xl">Contact Me</h1>
        <ul class="h-3/4 w-fit flex flex-col gap-1">
          <li v-for="media of SocialMediaData" :key="media.id">
            <a :href="media.url" target="_blank" rel="noopener noreferrer">
              {{ media.title }}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </footer>
</template>

<script setup>
import { navigationData } from "@/constant/navigation";
import KeqingIcon from "../elements/KeqingIcon.vue";
import Logo from "../elements/Logo.vue";
import { SocialMediaData } from "@/constant/socialMedia";
</script>
