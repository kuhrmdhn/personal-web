<script setup>
import { useVisibleElement } from "@/utils/useVisibleElement";
import OnView from "../atoms/OnView.vue";
const { visibleStatus } = useVisibleElement("contactList");

const contactListData = [
  {
    id: 1,
    icon: "/icons/github.svg",
    name: "Github",
    url: "http://github.com/kuhrmdhn/",
  },
  {
    id: 2,
    icon: "/icons/linkedin.svg",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kukuh-ardi-ramadhan/",
  },
  {
    id: 3,
    icon: "/icons/instagram.svg",
    name: "Instagram",
    url: "https://www.instagram.com/kuh.rmdhn",
  },
];
</script>

<template>
  <div id="contactList" class="h-24 w-full">
    <ul class="flex gap-7 items-center h-full w-full overflow-hidden pl-5">
      <li v-for="contact in contactListData" :key="contact.id">
        <OnView class="hover:scale-110 duration-300" triggerId="contactList">
          <a :href="contact.url" target="_blank" rel="noopener noreferrer">
            <img
            class="h-7 w-7 to-right"
            :style="{ animationDelay: contact.id * 100 + 'ms' }"
            :src="contact.icon"
            :alt="contact.name"
            />
          </a>
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
