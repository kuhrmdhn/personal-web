import { ref, onMounted, onBeforeUnmount } from "vue";

export const useVisibleElement = (elementId, reAnimation = false) => {
  const visibleStatus = ref(false);
  let observer = null;

  onMounted(() => {
    const target = document.getElementById(elementId);

    if (!target) {
      console.warn(`Element with id "${elementId}" not found.`);
      return;
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {

          if (!reAnimation && visibleStatus.value && entry.isIntersecting) {
            return;
          }
          visibleStatus.value = entry.isIntersecting;
        });
      },
      {
        root: null,
        threshold: 0.05,
        rootMargin: "0px",
      }
    );

    observer.observe(target);
  });

  onBeforeUnmount(() => {
    if (observer) {
      observer.disconnect();
    }
  });

  return { visibleStatus };
};
