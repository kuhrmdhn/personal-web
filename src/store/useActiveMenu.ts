import { defineStore } from "pinia";
import { ref } from "vue";

export const useActiveMenu = defineStore("activeMenu", () => {
  const isActive = ref(false);
  function toggleMenu() {
      isActive.value = !isActive.value;
  }

  return { isActive, toggleMenu };
});
