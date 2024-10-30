<script setup>
import { SocialMediaData } from "@/constant/socialMedia";
import OnView from "../atoms/OnView.vue";
import SocialMediaIcon from "../atoms/SocialMediaIcon.vue";
</script>

<template>
  <div id="contactList" class="h-24 w-full">
    <ul class="flex gap-7 items-center h-full w-full overflow-hidden pl-5">
      <li v-for="socialMedia in SocialMediaData" :key="socialMedia.id">
        <OnView triggerId="contactList">
          <SocialMediaIcon
            customClass="to-right"
            :style="{ animationDelay: socialMedia.id * 100 + 'ms' }"
            :socialMediaData="socialMedia"
          />
        </OnView>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.to-right {
  animation: toRight 1s ease forwards;
  position: relative;
  left: -100svw;
}
</style>
