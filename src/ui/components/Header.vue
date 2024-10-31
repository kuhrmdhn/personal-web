<script setup>
import { ref, watch } from "vue";
import Logo from "../elements/Logo.vue";
import BurgerMenu from "../elements/BurgerMenu.vue";
import { useActiveMenu } from "@/store/useActiveMenu";
import { storeToRefs } from "pinia";
import { useVisibleElement } from "@/utils/useVisibleElement";

const store = useActiveMenu();
const { isActive } = storeToRefs(store);

const homeViewClass = ref("bg-black text-silverWhite");
const { visibleStatus } = useVisibleElement("home");

watch(visibleStatus, (newStatus) => {
  homeViewClass.value = newStatus 
    ? "bg-transparent text-silverWhite" 
    : "bg-black text-silverWhite";
});
</script>

<template>
  <header
    :class="[
      isActive ? 'bg-silverWhite text-black' : homeViewClass,
      'h-16 w-full duration-500 delay-100 fixed left-0 top-0 z-[9999] px-10 lg:px-20 flex justify-between items-center',
    ]"
  >
    <Logo />
    <BurgerMenu />
  </header>
</template>
