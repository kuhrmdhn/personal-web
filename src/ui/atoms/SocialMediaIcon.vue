<template>
  <a :href="url" target="_blank" rel="noopener noreferrer">
    <img
      v-bind="$attrs"
      :class="['h-7 w-7 hover:scale-110 duration-300', customClass]"
      :src="icon"
      :alt="title"
    />
  </a>
</template>

<script setup lang="ts">
import { SocialMediaType } from "@/constant/socialMedia";
const { socialMediaData, customClass } = defineProps<{
  socialMediaData: SocialMediaType;
  customClass?: String;
}>();
const { title, icon, url } = socialMediaData;
</script>
