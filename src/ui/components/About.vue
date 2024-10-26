<template>
  <section
    id="about"
    class="w-full h-[100svh] flex flex-col lg:flex-row justify-around items-center lg:px-24 pt-16"
  >
    <div
      class="h-2/5 lg:h-full w-5/6 lg:w-2/5 flex justify-center items-center"
    >
      <img
        src="/images/profile-1.webp"
        alt="Kukuh Ardi Ramadhan Image"
        :class="[
          'w-4/5 grayscale hover:grayscale-0 hover:scale-105 duration-500 aspect-auto',
          visibleStatus && 'to-right',
        ]"
      />
    </div>
    <div
      id="description"
      class="w-11/12 lg:w-1/2 h-1/2 lg:h-full flex flex-col justify-center gap-5"
    >
      <h1 :class="[visibleStatus && 'flip', 'text-3xl lg:text-5xl']">
        About Me
      </h1>
      <div class="h-2/5 overflow-y-hidden">
        <p
          :class="[
            visibleStatus && 'to-up',
            'text-justify w-full text-sm sm:text-base',
          ]"
        >
          Hi I am Kukuh Ardi Ramadhan, I am an enthusiastic and passionate front
          end web developer.Despite graduating from high school, I have pursued
          my interest in the website development.I believe that learning is an
          endless journey, and I am always seeking opportunities to enhance my
          skills and explore new technologies in the ever - evolving web
          development industry. I am highly enthusiastic about collaborating
          with individuals who share the same passion in the world of web
          development.If you are interested in discussing or collaborating, feel
          free to reach out to me!
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { isVisibleElement } from "@/utils/useIsVisibleElement";
  import { onBeforeMount, onMounted, ref } from "vue";
  const visibleStatus = ref(false);

  const checkVisibility = () => {
    const element = document.getElementById("description");
    if (element) {
      const status = isVisibleElement(element);
      visibleStatus.value = status;
    }
  };

  onMounted(() => window.addEventListener("scroll", checkVisibility));
  onBeforeMount(() => window.removeEventListener("scroll", checkVisibility));
  checkVisibility();
</script>

<style scoped></style>
