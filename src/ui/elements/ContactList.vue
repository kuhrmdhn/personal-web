<script setup>
import { isVisibleElement } from "@/utils/useIsVisibleElement.ts";
import { onBeforeMount, onMounted, ref } from "vue";
const visibleStatus = ref(false);

const checkVisibility = () => {
  const element = document.getElementById("contactList");
  if (element) {
    const status = isVisibleElement(element);
    visibleStatus.value = status;
  }
};

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

onMounted(() => window.addEventListener("scroll", checkVisibility));
onBeforeMount(() => window.removeEventListener("scroll", checkVisibility));
checkVisibility();
</script>

<template>
  <div id="contactList" class="h-24 w-full">
    <ul class="flex gap-7 items-center h-full w-full overflow-hidden pl-5">
      <li v-for="contact in contactListData" :key="contact.id">
        <a :href="contact.url" target="_blank" rel="noopener noreferrer">
          <img
            :style="{ animationDelay: contact.id * 100 + 'ms' }"
            :class="['h-7 w-7', visibleStatus && 'to-right']"
            :src="contact.icon"
            :alt="contact.name"
          />
        </a>
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
