<script setup lang="ts">
import Logo from "../elements/Logo.vue";
import BurgerMenu from "../elements/BurgerMenu.vue";
import { useActiveMenu } from "@/store/useActiveMenu";
import { storeToRefs } from "pinia";

const store = useActiveMenu();
const { isActive } = storeToRefs(store);
</script>

<template>
  <header
    :class="[
      isActive ? 'bg-silverWhite text-black' : 'bg-black text-silverWhite',
      'h-16 w-full duration-300 delay-200 fixed left-0 top-0 z-[9999] px-10 lg:px-20 flex justify-between items-center',
    ]"
  >
    <Logo />
    <BurgerMenu />
  </header>
</template>
