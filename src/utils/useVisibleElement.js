// useVisibleElement.js
import { ref, onMounted, onBeforeUnmount } from "vue";

export const useVisibleElement = (elementId) => {
  const visibleStatus = ref(false);

  const useVisibleElement = (el) => {
    const { top, bottom } = el.getBoundingClientRect();
    const { innerHeight } = window;
    return (
      (top > 0 && innerHeight > top) ||
      (bottom > 0 && innerHeight > bottom) ||
      (top < 0 && bottom < 0)
    );
  };

  const checkVisibility = () => {
    const element = document.getElementById(elementId);
    if (element) {
      visibleStatus.value = useVisibleElement(element);
    }
  };

  onMounted(() => {
    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Check immediately on mount
  });

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", checkVisibility);
  });

  return { visibleStatus };
};
