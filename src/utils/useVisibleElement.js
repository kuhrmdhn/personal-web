import { ref, onMounted, onBeforeUnmount, watch } from "vue";

export const useVisibleElement = (elementId) => {
  const visibleStatus = ref(false);

  const checkVisibility = () => {
    const element = document.getElementById(elementId);
    if (element) {
      const { top, bottom } = element.getBoundingClientRect();
      const { innerHeight } = window;
      visibleStatus.value =
        (top >= 0 && top <= innerHeight) ||
        (bottom >= 0 && bottom <= innerHeight) ||
        (top < 0 && bottom > innerHeight);
    }
  };

  onMounted(() => {
    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
  });

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", checkVisibility);
  });
  return { visibleStatus };
};
